import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <Compass className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">CareerPath</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#explore" className="text-sm font-medium hover:underline underline-offset-4">
            Explore
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
            How It Works
          </a>
          <a href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
            Skills
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
            Stories
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
