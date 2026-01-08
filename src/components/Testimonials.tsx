import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "CareerPath helped me transition from teaching to UX design in just 8 months. The structured approach and mentorship made all the difference.",
    name: "Sarah Chen",
    role: "UX Designer at Spotify",
    previous: "Former High School Teacher"
  },
  {
    quote: "As a fresh graduate, I was overwhelmed by options. This platform helped me discover my passion for data science and land my dream job.",
    name: "Marcus Johnson",
    role: "Data Analyst at Google",
    previous: "Recent CS Graduate"
  },
  {
    quote: "The skill gap analysis was eye-opening. I knew exactly what to focus on, and within 6 months I got promoted to senior engineer.",
    name: "Elena Rodriguez",
    role: "Senior Software Engineer",
    previous: "Mid-level Developer"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-mono text-sm uppercase tracking-wider mb-4 border-2 border-border px-3 py-1 bg-background">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real People,
            <br />
            Real Careers
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands who have transformed their careers with CareerPath.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-border bg-background shadow-sm">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 mb-6 text-muted-foreground/50" />
                <p className="text-lg mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t-2 border-border pt-6">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.previous}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
