import { useEffect, useRef, useState } from "react";
import { Shield, Loader2 } from "lucide-react";

interface ContentLockerGateProps {
  onComplete: () => void;
}

const LOCKER_SCRIPT_URL = "https://doctoredits.com/script_include.php?id=1867448";
const LOCKER_SCRIPT_ID = "content-locker-script";

const ContentLockerGate = ({ onComplete }: ContentLockerGateProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptInjectedRef = useRef(false);
  
  useEffect(() => {
    // Prevent duplicate script injections
    if (scriptInjectedRef.current) return;
    
    const existingScript = document.getElementById(LOCKER_SCRIPT_ID);
    if (existingScript) {
      setScriptLoaded(true);
      setIsLoading(false);
      return;
    }
    
    // Dynamically inject the content locker script
    const script = document.createElement("script");
    script.id = LOCKER_SCRIPT_ID;
    script.type = "text/javascript";
    script.src = LOCKER_SCRIPT_URL;
    script.async = true;
    
    script.onload = () => {
      scriptInjectedRef.current = true;
      setScriptLoaded(true);
      setIsLoading(false);
    };
    
    script.onerror = () => {
      console.error("Failed to load content locker script");
      setIsLoading(false);
      // If script fails to load, allow user to continue after delay
      setTimeout(onComplete, 3000);
    };
    
    // Append to the container or document body
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
    
    // Set up a listener for locker completion
    // Most content lockers dispatch events or modify DOM
    const checkCompletion = setInterval(() => {
      // Check if locker has been completed via common methods
      const lockerCompleted = sessionStorage.getItem("contentLockerCompleted");
      if (lockerCompleted === "true") {
        clearInterval(checkCompletion);
        onComplete();
      }
    }, 1000);
    
    return () => {
      clearInterval(checkCompletion);
    };
  }, [onComplete]);
  
  // Expose completion function globally for the content locker script
  useEffect(() => {
    (window as any).onContentLockerComplete = () => {
      sessionStorage.setItem("contentLockerCompleted", "true");
      onComplete();
    };
    
    return () => {
      delete (window as any).onContentLockerComplete;
    };
  }, [onComplete]);
  
  return (
    <section className="px-6 py-12">
      <div className="max-w-lg mx-auto">
        <div className="bg-card rounded-xl shadow-card p-6 space-y-6 border border-border">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex w-14 h-14 rounded-full bg-primary/10 items-center justify-center">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Complete One Quick Step
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              This helps ensure fair usage and prevents automated abuse. 
              Takes about 30 seconds.
            </p>
          </div>
          
          {/* Content Locker Container */}
          <div 
            ref={containerRef}
            id="content-locker-container"
            className="min-h-[250px] flex flex-col items-center justify-center rounded-lg bg-muted/30 border border-dashed border-border p-4"
          >
            {isLoading && (
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                <p className="text-sm text-muted-foreground">Loading verification...</p>
              </div>
            )}
            
            {!isLoading && !scriptLoaded && (
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Verification is loading. Please wait...
                </p>
              </div>
            )}
            
            {/* The content locker script will inject its UI here */}
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
  );
};

export default ContentLockerGate;
