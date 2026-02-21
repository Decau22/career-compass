"use client";

import { Button } from "@/components/ui/button";
import { Compass, FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <Compass className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">CareerPath</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#explore"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Explore
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            How It Works
          </a>
          <a
            href="#skills"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Stories
          </a>
          <Link
            href="/resume-analyzer"
            className="text-sm font-medium flex items-center gap-1.5 hover:underline underline-offset-4"
          >
            <FileText className="w-4 h-4" />
            Resume Analyzer
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Sign In
          </Button>
          <Button size="sm" className="hidden sm:inline-flex">
            Get Started
          </Button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t-2 border-border bg-background px-6 py-4 flex flex-col gap-4">
          <a
            href="#explore"
            className="text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Explore
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#skills"
            className="text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Stories
          </a>
          <Link
            href="/resume-analyzer"
            className="text-sm font-medium flex items-center gap-1.5"
            onClick={() => setMobileOpen(false)}
          >
            <FileText className="w-4 h-4" />
            Resume Analyzer
          </Link>
          <div className="flex gap-4 pt-2 border-t border-border">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
