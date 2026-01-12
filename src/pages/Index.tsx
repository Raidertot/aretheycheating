import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AgitationSection from "@/components/AgitationSection";
import CredibilitySection from "@/components/CredibilitySection";
import AssessmentSection from "@/components/AssessmentSection";
import ResultsSection from "@/components/ResultsSection";
import ContentLockSection from "@/components/ContentLockSection";
import Footer from "@/components/Footer";

type PageState = "landing" | "assessment" | "results";

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
    setPageState("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
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
      
      {pageState === "results" && (
        <>
          <ResultsSection answers={answers} />
          <ContentLockSection />
        </>
      )}
      
      <Footer />
    </main>
  );
};

export default Index;
