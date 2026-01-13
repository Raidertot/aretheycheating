import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AgitationSection from "@/components/AgitationSection";
import CredibilitySection from "@/components/CredibilitySection";
import AssessmentSection from "@/components/AssessmentSection";
import AnalyzingScreen from "@/components/AnalyzingScreen";
import Footer from "@/components/Footer";

type PageState = "landing" | "assessment" | "analyzing";

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
    // Store answers in sessionStorage for the unlock page
    sessionStorage.setItem("quizAnswers", JSON.stringify(completedAnswers));
    setPageState("analyzing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <main className="min-h-screen bg-background">
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
        <AnalyzingScreen />
      )}
      
      <Footer />
    </main>
  );
};

export default Index;
