import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExploreSection from "@/components/ExploreSection";
import HowItWorks from "@/components/HowItWorks";
import SkillsSection from "@/components/SkillsSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ExploreSection />
      <HowItWorks />
      <SkillsSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
