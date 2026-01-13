import { useState, useRef, useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import AgitationSection from "@/components/AgitationSection";
import CredibilitySection from "@/components/CredibilitySection";
import AssessmentSection from "@/components/AssessmentSection";
import AnalyzingScreen from "@/components/AnalyzingScreen";
import ContentLockerGate from "@/components/ContentLockerGate";
import ResultsSection from "@/components/ResultsSection";
import Footer from "@/components/Footer";

type PageState = "landing" | "assessment" | "analyzing" | "locker" | "results";

const Index = () => {
  const [pageState, setPageState] = useState<PageState>("landing");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const assessmentRef = useRef<HTMLDivElement>(null);
  
  const handleStartAssessment = () => {
    setPageState("assessment");
    setTimeout(() => {
      assessmentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  
  const handleAssessmentComplete = (completedAnswers: Record<number, number>) => {
    setAnswers(completedAnswers);
    setPageState("analyzing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const handleAnalysisComplete = useCallback(() => {
    // Check if user already completed locker this session
    const lockerCompleted = sessionStorage.getItem("contentLockerCompleted");
    if (lockerCompleted === "true") {
      setPageState("results");
    } else {
      setPageState("locker");
    }
  }, []);
  
  const handleLockerComplete = useCallback(() => {
    sessionStorage.setItem("contentLockerCompleted", "true");
    setPageState("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <main className="min-h-screen bg-background">
      {/* SEO Meta would be in index.html */}
      
      {pageState === "landing" && (
        <>
          <HeroSection onStartAssessment={handleStartAssessment} />
          <AgitationSection />
          <CredibilitySection />
        </>
      )}
      
      {pageState === "assessment" && (
        <div ref={assessmentRef}>
          <AssessmentSection onComplete={handleAssessmentComplete} />
        </div>
      )}
      
      {pageState === "analyzing" && (
        <AnalyzingScreen onAnalysisComplete={handleAnalysisComplete} />
      )}
      
      {pageState === "locker" && (
        <ContentLockerGate onComplete={handleLockerComplete} />
      )}
      
      {pageState === "results" && (
        <ResultsSection answers={answers} />
      )}
      
      <Footer />
    </main>
  );
};

export default Index;
