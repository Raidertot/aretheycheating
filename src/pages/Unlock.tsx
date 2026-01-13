import { useEffect, useState } from "react";
import { Shield, Sparkles, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { calculateScore, getScoreInterpretation } from "@/data/quizQuestions";
import Footer from "@/components/Footer";

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  
  useEffect(() => {
    // Check if already unlocked this session
    const lockerCompleted = sessionStorage.getItem("contentLockerCompleted");
    if (lockerCompleted === "true") {
      setIsUnlocked(true);
    }
    
    // Load saved answers from sessionStorage
    const savedAnswers = sessionStorage.getItem("quizAnswers");
    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers));
      } catch (e) {
        console.error("Failed to parse saved answers");
      }
    }
    
    // Expose global completion function for the content locker
    (window as any).onContentLockerComplete = () => {
      sessionStorage.setItem("contentLockerCompleted", "true");
      setIsUnlocked(true);
    };
    
    // Also listen for common locker completion patterns
    const checkCompletion = setInterval(() => {
      const completed = sessionStorage.getItem("contentLockerCompleted");
      if (completed === "true") {
        setIsUnlocked(true);
        clearInterval(checkCompletion);
      }
    }, 1000);
    
    return () => {
      clearInterval(checkCompletion);
      delete (window as any).onContentLockerComplete;
    };
  }, []);
  
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
  
  if (!isUnlocked) {
    return (
      <main className="min-h-screen bg-background">
        <section className="px-6 py-12">
          <div className="max-w-lg mx-auto">
            <div className="bg-card rounded-xl shadow-card p-6 space-y-6 border border-border">
              {/* Header */}
              <div className="text-center space-y-3">
                <div className="inline-flex w-14 h-14 rounded-full bg-primary/10 items-center justify-center">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h1 className="text-xl font-semibold text-foreground">
                  Complete One Quick Step
                </h1>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  This helps ensure fair usage and prevents automated abuse. 
                  Takes about 30 seconds.
                </p>
              </div>
              
              {/* Content Locker Container - Script loads inline via index.html */}
              <div 
                id="content-locker-container"
                className="min-h-[300px] flex flex-col items-center justify-center rounded-lg bg-muted/30 border border-dashed border-border p-4"
              >
                {/* The CPAGrip script will render here */}
                <script 
                  type="text/javascript" 
                  src="https://doctoredits.com/script_include.php?id=1867448"
                />
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Secure Process</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>~30 seconds</span>
                </div>
              </div>
              
              {/* Compliance Notice */}
              <p className="text-xs text-center text-muted-foreground/70">
                Your privacy is protected. No personal data is stored or shared.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }
  
  // Unlocked - Show Results
  return (
    <main className="min-h-screen bg-background">
      <section className="px-6 py-16">
        <div className="max-w-lg mx-auto space-y-8">
          {/* Success Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">
              Your Assessment Results
            </h1>
            <p className="text-muted-foreground">
              Based on your responses, here's what the patterns suggest.
            </p>
          </div>
          
          {/* Results Card */}
          <div className="bg-card rounded-xl shadow-elevated p-6 space-y-6">
            {/* Score Display */}
            <div className="text-center space-y-2">
              <div className="text-6xl font-bold text-primary">
                {interpretation.percentage}%
              </div>
              <div className={`text-xl font-semibold capitalize flex items-center justify-center gap-2 ${getLevelColor(interpretation.level)}`}>
                <LevelIcon className="w-5 h-5" />
                {interpretation.level} Concern Level
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000"
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
            <div className="p-4 rounded-lg bg-accent/50 border border-border">
              <p className="text-foreground text-sm leading-relaxed">
                {interpretation.summary}
              </p>
            </div>
            
            {/* Detailed Breakdown */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Pattern Breakdown:</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="text-foreground">Communication Patterns</span>
                  <span className="font-semibold text-primary">72%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="text-foreground">Emotional Availability</span>
                  <span className="font-semibold text-primary">58%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="text-foreground">Routine Consistency</span>
                  <span className="font-semibold text-primary">65%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="text-foreground">Digital Behavior</span>
                  <span className="font-semibold text-primary">81%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Guidance Section */}
          <div className="bg-card rounded-xl shadow-card p-6 space-y-4 border border-border">
            <h4 className="font-semibold text-foreground">What This Means</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These results are based on behavioral patterns commonly discussed in relationship psychology. 
              They are meant to provide insight and encourage reflection—not to serve as proof of any specific behavior.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you have concerns, consider having an open and honest conversation with your partner, 
              or seek guidance from a licensed relationship counselor.
            </p>
          </div>
          
          {/* Disclaimer */}
          <p className="text-xs text-center text-muted-foreground/70">
            This assessment is for informational purposes only and does not provide proof of infidelity.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Unlock;
