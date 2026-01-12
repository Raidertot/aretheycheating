import { Button } from "@/components/ui/button";
import { Heart, Shield } from "lucide-react";

interface HeroSectionProps {
  onStartAssessment: () => void;
}

const HeroSection = ({ onStartAssessment }: HeroSectionProps) => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 py-12 gradient-hero">
      <div className="max-w-lg mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/60 text-accent-foreground text-sm font-medium">
          <Shield className="w-4 h-4" />
          <span>Private & Confidential</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold leading-tight text-foreground text-balance">
          Worried Your Partner Might Be Cheating? Check the Signs Before You Confront Them.
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          Take a 3-minute behavioral assessment based on real relationship patterns—not guesses or rumors.
        </p>
        
        <div className="pt-4">
          <Button 
            variant="hero" 
            size="xl" 
            onClick={onStartAssessment}
            className="w-full sm:w-auto"
          >
            <Heart className="w-5 h-5" />
            Start the Assessment
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Free • Anonymous • Takes 3 minutes
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
