import { Button } from "@/components/ui/button";
import { Check, BookOpen, Users, Target, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Curated Learning Paths",
    description: "Access courses from top platforms tailored to your career goals"
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Connect with industry professionals who've walked your path"
  },
  {
    icon: Target,
    title: "Skill Gap Analysis",
    description: "Identify exactly what skills you need for your target role"
  },
  {
    icon: Award,
    title: "Certification Tracking",
    description: "Build a portfolio of credentials that employers value"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block font-mono text-sm uppercase tracking-wider mb-4 border-2 border-primary-foreground px-3 py-1">
              Skill Development
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build the Skills
              <br />
              That Matter
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-lg">
              Our AI-powered platform identifies skill gaps and creates personalized learning paths. Stay ahead of industry demands with continuous development.
            </p>

            <ul className="space-y-4 mb-10">
              {["Personalized skill assessments", "Industry-aligned curriculum", "Hands-on projects", "Progress tracking"].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-foreground flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6"
            >
              Start Learning Today
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 border-2 border-primary-foreground/30 hover:border-primary-foreground transition-colors"
              >
                <feature.icon className="w-8 h-8 mb-4" />
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
