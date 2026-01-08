import { Compass } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground border-t-2 border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-foreground flex items-center justify-center">
                <Compass className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold">CareerPath</span>
            </div>
            <p className="text-sm opacity-70">
              Guiding professionals to their dream careers through personalized development.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Career Explorer</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Skill Builder</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Job Matcher</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Mentorship</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Career Guides</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Salary Insights</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Industry Reports</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">
            © 2026 CareerPath. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
