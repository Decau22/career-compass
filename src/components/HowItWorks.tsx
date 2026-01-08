const steps = [
  {
    number: "01",
    title: "Explore & Discover",
    description: "Take our career assessment and explore different paths. Understand your strengths, interests, and values to find careers that align with who you are."
  },
  {
    number: "02",
    title: "Set Clear Goals",
    description: "Define your career objectives with our goal-setting framework. Create actionable milestones and build a personalized roadmap to your dream job."
  },
  {
    number: "03",
    title: "Build Your Skills",
    description: "Access curated learning resources, courses, and mentorship programs. Develop the skills employers are looking for in your target field."
  },
  {
    number: "04",
    title: "Land Your Job",
    description: "Get matched with opportunities, prepare for interviews, and negotiate offers. Our job search tools help you stand out and succeed."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-mono text-sm uppercase tracking-wider mb-4 border-2 border-border px-3 py-1">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Four Steps to Your Dream Career
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven methodology that has helped thousands of professionals achieve their career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-8xl font-bold text-muted/50 mb-4 leading-none">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
