"use client";

import type { ResumeAnalysis } from "@/app/resume-analyzer/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  FileText,
} from "lucide-react";

interface ResumeResultsProps {
  data: ResumeAnalysis;
  fileName: string;
  onReset: () => void;
}

function getScoreLabel(score: number): { label: string; color: string } {
  if (score >= 80) return { label: "Excellent", color: "text-emerald-700" };
  if (score >= 60) return { label: "Good", color: "text-foreground" };
  if (score >= 40) return { label: "Needs Work", color: "text-amber-700" };
  return { label: "Weak", color: "text-destructive" };
}

export function ResumeResults({ data, fileName, onReset }: ResumeResultsProps) {
  const { label, color } = getScoreLabel(data.overallScore);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 shrink-0" />
          <span className="text-sm font-mono truncate max-w-xs">
            {fileName}
          </span>
        </div>
        <Button variant="outline" onClick={onReset}>
          <ArrowLeft className="mr-2 w-4 h-4" />
          Analyze Another Resume
        </Button>
      </div>

      {/* Score Card */}
      <Card className="border-2 border-border bg-background shadow-md mb-8">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex flex-col items-center justify-center md:border-r-2 md:border-border md:pr-8">
              <div
                className={`text-6xl font-bold tabular-nums ${color}`}
              >
                {data.overallScore}
              </div>
              <div className="text-sm font-mono uppercase tracking-wider mt-1 text-muted-foreground">
                out of 100
              </div>
              <div className={`text-sm font-bold mt-2 ${color}`}>
                {label}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-3">Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                {data.summary}
              </p>
              <div className="mt-4">
                <Progress value={data.overallScore} className="h-3 border border-border" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Two-column layout for Strengths & Weaknesses */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Strengths */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-emerald-900 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-100" />
            </div>
            <h2 className="text-xl font-bold">Strengths</h2>
          </div>
          <div className="flex flex-col gap-4">
            {data.strengths.map((s, i) => (
              <Card
                key={i}
                className="border-2 border-border bg-background shadow-xs"
              >
                <CardContent className="p-5">
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weaknesses */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-amber-900 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-amber-100" />
            </div>
            <h2 className="text-xl font-bold">Areas to Improve</h2>
          </div>
          <div className="flex flex-col gap-4">
            {data.weaknesses.map((w, i) => (
              <Card
                key={i}
                className="border-2 border-border bg-background shadow-xs"
              >
                <CardContent className="p-5">
                  <h3 className="font-bold mb-1">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {w.description}
                  </p>
                  <div className="flex items-start gap-2 border-t border-border pt-3">
                    <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground" />
                    <p className="text-sm font-medium">{w.suggestion}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Key Skills */}
      <Card className="border-2 border-border bg-background shadow-sm mb-8">
        <CardContent className="p-8">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <h2 className="text-xl font-bold">Key Skills Detected</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.keySkills.map((skill, i) => (
              <Badge
                key={i}
                variant="outline"
                className="px-3 py-1.5 text-sm font-mono border-2 border-border"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="border-2 border-border bg-secondary shadow-sm">
        <CardContent className="p-8">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-primary-foreground" />
            </div>
            <h2 className="text-xl font-bold">Recommendations</h2>
          </div>
          <ol className="flex flex-col gap-4">
            {data.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 shrink-0 bg-background border-2 border-border flex items-center justify-center font-bold font-mono text-sm">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed pt-1.5">{rec}</p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
