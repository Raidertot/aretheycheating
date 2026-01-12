import { calculateScore, getScoreInterpretation } from "@/data/quizQuestions";
import { Lock, AlertTriangle, CheckCircle, Info } from "lucide-react";

interface ResultsSectionProps {
  answers: Record<number, number>;
}

const ResultsSection = ({ answers }: ResultsSectionProps) => {
  const score = calculateScore(answers);
  const interpretation = getScoreInterpretation(score);
  
  const getLevelColor = (level: string) => {
    switch (level) {
      case "low": return "text-primary";
      case "moderate": return "text-warning";
      case "elevated": return "text-destructive/80";
      case "high": return "text-destructive";
      default: return "text-foreground";
    }
  };
  
  const getLevelIcon = (level: string) => {
    switch (level) {
      case "low": return CheckCircle;
      case "moderate": return Info;
      case "elevated": return AlertTriangle;
      case "high": return AlertTriangle;
      default: return Info;
    }
  };
  
  const LevelIcon = getLevelIcon(interpretation.level);
  
  return (
    <section className="px-6 py-16">
      <div className="max-w-lg mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">
            Your Assessment Results
          </h2>
          <p className="text-muted-foreground">
            Based on your responses, here's what the patterns suggest.
          </p>
        </div>
        
        {/* Blurred Preview Card */}
        <div className="relative">
          <div className="bg-card rounded-xl shadow-elevated p-6 space-y-6">
            {/* Score Display - Blurred */}
            <div className="relative">
              <div className="blur-results select-none">
                <div className="text-center space-y-2">
                  <div className="text-6xl font-bold text-primary">
                    {interpretation.percentage}%
                  </div>
                  <div className={`text-xl font-semibold capitalize ${getLevelColor(interpretation.level)}`}>
                    {interpretation.level} Concern Level
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-6 space-y-2">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${interpretation.percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Low</span>
                    <span>Moderate</span>
                    <span>Elevated</span>
                    <span>High</span>
                  </div>
                </div>
                
                {/* Summary */}
                <div className="mt-6 p-4 rounded-lg bg-accent/50">
                  <p className="text-foreground text-sm leading-relaxed">
                    {interpretation.summary}
                  </p>
                </div>
                
                {/* Detailed Breakdown Placeholder */}
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-foreground">Pattern Breakdown:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span>Communication Patterns</span>
                      <span className="font-semibold">72%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span>Emotional Availability</span>
                      <span className="font-semibold">58%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span>Routine Consistency</span>
                      <span className="font-semibold">65%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span>Digital Behavior</span>
                      <span className="font-semibold">81%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Lock Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-card/60 rounded-xl backdrop-blur-sm">
                <div className="text-center space-y-4 p-6">
                  <div className="inline-flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      Results Locked
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Your relationship shows some patterns that warrant attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Unlock Message */}
        <div className="text-center p-4 rounded-lg bg-accent border border-border">
          <p className="text-foreground text-sm leading-relaxed">
            <strong>Complete one quick verification step</strong> to unlock your full results and personalized guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
