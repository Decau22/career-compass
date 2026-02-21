import { generateText, Output } from "ai";
import { z } from "zod";

const resumeAnalysisSchema = z.object({
  summary: z.string(),
  overallScore: z.number(),
  strengths: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  ),
  weaknesses: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      suggestion: z.string(),
    })
  ),
  keySkills: z.array(z.string()),
  recommendations: z.array(z.string()),
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume") as File | null;

    if (!file) {
      return Response.json({ error: "No file provided" }, { status: 400 });
    }

    const text = await file.text();

    if (!text.trim()) {
      return Response.json(
        { error: "Could not extract text from the file. Please try a plain text or readable PDF." },
        { status: 400 }
      );
    }

    const result = await generateText({
      model: "openai/gpt-4o",
      output: Output.object({
        schema: resumeAnalysisSchema,
      }),
      prompt: `You are an expert career counselor and resume reviewer. Analyze the following resume text and provide a detailed assessment.

Be specific and constructive. Reference actual content from the resume in your analysis.

Score the resume from 0-100 based on:
- Clarity and formatting (20 points)
- Relevant experience and achievements (25 points)  
- Skills presentation (20 points)
- Impact and quantified results (20 points)
- Overall professionalism (15 points)

Provide 3-5 specific strengths, 3-5 specific weaknesses with actionable suggestions, extract key skills mentioned, and give 3-5 actionable recommendations for improvement.

Resume text:
${text}`,
    });

    return Response.json(result.object);
  } catch (error) {
    console.error("Resume analysis error:", error);
    return Response.json(
      { error: "Failed to analyze resume. Please try again." },
      { status: 500 }
    );
  }
}
