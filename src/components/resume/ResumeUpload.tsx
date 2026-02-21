"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Upload,
  FileText,
  X,
  Loader2,
  AlertCircle,
} from "lucide-react";

const ACCEPTED_TYPES = [
  "application/pdf",
  "text/plain",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ACCEPTED_EXTENSIONS = ".pdf,.txt,.doc,.docx";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

interface ResumeUploadProps {
  onAnalyze: (file: File) => void;
  isLoading: boolean;
  loadingStatus?: string;
  error?: string;
}

export function ResumeUpload({
  onAnalyze,
  isLoading,
  loadingStatus,
  error,
}: ResumeUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = useCallback((f: File): string | null => {
    if (!ACCEPTED_TYPES.includes(f.type) && !f.name.match(/\.(pdf|txt|doc|docx)$/i)) {
      return "Please upload a PDF, TXT, DOC, or DOCX file.";
    }
    if (f.size > MAX_FILE_SIZE) {
      return "File size must be under 5MB.";
    }
    return null;
  }, []);

  const handleFile = useCallback(
    (f: File) => {
      const err = validateFile(f);
      if (err) {
        setFileError(err);
        setFile(null);
        return;
      }
      setFileError(null);
      setFile(f);
    },
    [validateFile]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      if (e.dataTransfer.files?.[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.[0]) {
        handleFile(e.target.files[0]);
      }
    },
    [handleFile]
  );

  const clearFile = useCallback(() => {
    setFile(null);
    setFileError(null);
    if (inputRef.current) inputRef.current.value = "";
  }, []);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border-2 border-border bg-background shadow-sm">
        <CardContent className="p-8">
          {/* Drop Zone */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Upload resume file"
            className={`
              relative border-2 border-dashed p-10 text-center cursor-pointer
              transition-all duration-200
              ${
                dragActive
                  ? "border-foreground bg-secondary"
                  : "border-border hover:border-foreground/50 hover:bg-secondary/50"
              }
              ${isLoading ? "pointer-events-none opacity-60" : ""}
            `}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => !isLoading && inputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                inputRef.current?.click();
              }
            }}
          >
            <input
              ref={inputRef}
              type="file"
              accept={ACCEPTED_EXTENSIONS}
              className="sr-only"
              onChange={handleInputChange}
              disabled={isLoading}
            />

            {isLoading ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-primary flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-primary-foreground animate-spin" />
                </div>
                <div>
                  <p className="text-lg font-bold">{loadingStatus}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    This may take a moment...
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-primary flex items-center justify-center">
                  <Upload className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-lg font-bold">
                    Drop your resume here
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    or click to browse. PDF, TXT, DOC, DOCX (max 5MB)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* File Preview */}
          {file && !isLoading && (
            <div className="mt-6 flex items-center justify-between border-2 border-border p-4 bg-secondary">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 shrink-0" />
                <div>
                  <p className="text-sm font-bold truncate max-w-xs">
                    {file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={clearFile}
                className="p-1 hover:bg-accent transition-colors"
                aria-label="Remove file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Error Messages */}
          {(fileError || error) && (
            <div className="mt-6 flex items-start gap-3 border-2 border-destructive bg-destructive/10 p-4 text-destructive">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm font-medium">{fileError || error}</p>
            </div>
          )}

          {/* Submit Button */}
          {file && !isLoading && (
            <Button
              className="w-full mt-6 text-lg py-6 shadow-sm hover:shadow-md transition-shadow"
              size="lg"
              onClick={() => onAnalyze(file)}
            >
              <FileText className="mr-2 w-5 h-5" />
              Analyze My Resume
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
