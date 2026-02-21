"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ResumeUpload } from "@/components/resume/ResumeUpload";
import { ResumeResults } from "@/components/resume/ResumeResults";

export interface ResumeAnalysis {
  summary: string;
  overallScore: number;
  strengths: { title: string; description: string }[];
  weaknesses: { title: string; description: string; suggestion: string }[];
  keySkills: string[];
  recommendations: string[];
}

type AnalysisState =
  | { status: "idle" }
  | { status: "uploading" }
  | { status: "analyzing" }
  | { status: "done"; data: ResumeAnalysis }
  | { status: "error"; message: string };

export default function ResumeAnalyzerPage() {
  const [state, setState] = useState<AnalysisState>({ status: "idle" });
  const [fileName, setFileName] = useState<string>("");

  const handleAnalyze = useCallback(async (file: File) => {
    setFileName(file.name);
    setState({ status: "uploading" });

    try {
      const formData = new FormData();
      formData.append("resume", file);

      setState({ status: "analyzing" });

      const response = await fetch("/api/analyze-resume", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to analyze resume");
      }

      const data: ResumeAnalysis = await response.json();
      setState({ status: "done", data });
    } catch (err) {
      setState({
        status: "error",
        message:
          err instanceof Error ? err.message : "Something went wrong. Please try again.",
      });
    }
  }, []);

  const handleReset = useCallback(() => {
    setState({ status: "idle" });
    setFileName("");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
              <span className="inline-block font-mono text-sm uppercase tracking-wider mb-4 border-2 border-border px-3 py-1 bg-background shadow-2xs">
                AI-Powered Analysis
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Resume Analyzer
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Upload your resume and get instant AI-powered feedback on your
                strengths, weaknesses, and actionable recommendations to improve.
              </p>
            </div>

            {state.status === "done" ? (
              <ResumeResults
                data={state.data}
                fileName={fileName}
                onReset={handleReset}
              />
            ) : (
              <ResumeUpload
                onAnalyze={handleAnalyze}
                isLoading={
                  state.status === "uploading" || state.status === "analyzing"
                }
                loadingStatus={
                  state.status === "uploading" ? "Uploading..." : state.status === "analyzing" ? "Analyzing with AI..." : undefined
                }
                error={state.status === "error" ? state.message : undefined}
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
