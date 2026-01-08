import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="border-2 border-border p-12 md:p-16 shadow-lg bg-card">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Join 50,000+ professionals who have discovered their path. Your dream career is waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10 py-6 shadow-sm hover:shadow-md transition-shadow">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6">
                Book a Demo
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              No credit card required • Free career assessment included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
