import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-career.jpg"
          alt="Professionals climbing towards success"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block border-2 border-border px-4 py-2 mb-6 bg-background shadow-xs">
            <span className="text-sm font-mono uppercase tracking-wider">
              Your Career Journey Starts Here
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight text-balance">
            Navigate Your
            <br />
            <span className="relative inline-block">
              Career Path
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 300 8"
                fill="none"
              >
                <path
                  d="M1 5.5C50 2 100 7 150 4C200 1 250 6 299 3.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            From exploration to employment. We guide you through every step of
            your career development journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-sm hover:shadow-md transition-shadow"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div className="border-l-2 border-border pl-4">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm text-muted-foreground">
                Careers Launched
              </div>
            </div>
            <div className="border-l-2 border-border pl-4">
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm text-muted-foreground">Career Paths</div>
            </div>
            <div className="border-l-2 border-border pl-4">
              <div className="text-3xl font-bold">94%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
