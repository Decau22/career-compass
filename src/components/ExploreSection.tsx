import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  TrendingUp, 
  Heart, 
  Building2, 
  GraduationCap,
  ArrowUpRight
} from "lucide-react";

const careers = [
  {
    icon: Code,
    title: "Technology",
    description: "Software development, data science, cybersecurity, and more",
    count: "45+ paths"
  },
  {
    icon: Palette,
    title: "Creative & Design",
    description: "UX/UI design, graphic design, content creation, marketing",
    count: "32+ paths"
  },
  {
    icon: TrendingUp,
    title: "Business & Finance",
    description: "Consulting, accounting, investment banking, entrepreneurship",
    count: "38+ paths"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Nursing, medicine, mental health, healthcare administration",
    count: "28+ paths"
  },
  {
    icon: Building2,
    title: "Engineering",
    description: "Civil, mechanical, electrical, environmental engineering",
    count: "35+ paths"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Teaching, academic research, educational technology",
    count: "22+ paths"
  }
];

const ExploreSection = () => {
  return (
    <section id="explore" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="inline-block font-mono text-sm uppercase tracking-wider mb-4 border-2 border-border px-3 py-1 bg-background">
            Explore Careers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Your
            <br />
            Perfect Career
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse through 200+ career paths across industries. Find what excites you and see what it takes to get there.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer border-2 border-border bg-background shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center">
                    <career.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold mb-2">{career.title}</h3>
                <p className="text-muted-foreground mb-4">{career.description}</p>
                <span className="text-sm font-mono">{career.count}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
