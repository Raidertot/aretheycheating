import { useEffect, useState } from "react";
import { Brain, Shield, CheckCircle } from "lucide-react";

const AnalyzingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { label: "Processing responses...", icon: Brain },
    { label: "Analyzing patterns...", icon: Shield },
    { label: "Generating insights...", icon: CheckCircle },
  ];
  
  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);
    
    // Step through analysis phases
    const stepTimers = [
      setTimeout(() => setCurrentStep(1), 1200),
      setTimeout(() => setCurrentStep(2), 2400),
      setTimeout(() => {
        // Hard redirect to unlock page for CPAGrip compatibility
        window.location.href = "/unlock.html";
      }, 3500),
    ];
    
    return () => {
      clearInterval(progressInterval);
      stepTimers.forEach(timer => clearTimeout(timer));
    };
  }, []);
  
  const CurrentIcon = steps[currentStep].icon;
  
  return (
    <section className="px-6 py-16 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md mx-auto text-center space-y-8">
        {/* Animated Icon */}
        <div className="relative inline-flex">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
            <CurrentIcon className="w-10 h-10 text-primary" />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping" />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-foreground">
            Analyzing Your Responses
          </h2>
          <p className="text-muted-foreground">
            Please wait while we review your assessment...
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-primary font-medium">
            {steps[currentStep].label}
          </p>
        </div>
        
        {/* Step Indicators */}
        <div className="flex justify-center gap-2">
          {steps.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index <= currentStep ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyzingScreen;
