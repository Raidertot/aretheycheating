import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-6 py-12 bg-foreground/5 border-t border-border">
      <div className="max-w-lg mx-auto space-y-8">
        {/* Disclaimer */}
        <div className="p-4 rounded-lg bg-card border border-border">
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            <strong className="text-foreground">Disclaimer:</strong> This assessment does not provide proof of infidelity and is for informational purposes only. Results are based on self-reported behavioral patterns and should not be used as the sole basis for relationship decisions. Consider consulting a licensed relationship counselor for professional guidance.
          </p>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
          <Link 
            to="/privacy" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Use
          </Link>
          <Link 
            to="/disclaimer" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Disclaimer
          </Link>
          <Link 
            to="/contact" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
        
        {/* Copyright */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Heart className="w-4 h-4 text-primary" />
            <span>Relationship Assessment Tool</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        {/* Tracking placeholder */}
        <div 
          id="tracking-scripts-placeholder" 
          className="hidden"
          aria-hidden="true"
        >
          {/* Third-party tracking scripts can be added here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
