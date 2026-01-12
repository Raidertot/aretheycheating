import { useState } from "react";
import { Button } from "@/components/ui/button";
import { quizQuestions } from "@/data/quizQuestions";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AssessmentSectionProps {
  onComplete: (answers: Record<number, number>) => void;
}

const AssessmentSection = ({ onComplete }: AssessmentSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  
  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const isAnswered = answers[question.id] !== undefined;
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;
  const canGoBack = currentQuestion > 0;
  
  const handleSelectOption = (score: number) => {
    setAnswers(prev => ({
      ...prev,
      [question.id]: score,
    }));
  };
  
  const handleNext = () => {
    if (isLastQuestion) {
      onComplete(answers);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };
  
  const handleBack = () => {
    if (canGoBack) {
      setCurrentQuestion(prev => prev - 1);
    }
  };
  
  return (
    <section id="assessment" className="px-6 py-16 bg-secondary/30">
      <div className="max-w-lg mx-auto space-y-6">
        {/* Progress Header */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-primary font-medium">
              {question.category}
            </span>
          </div>
          
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        {/* Question Card */}
        <div className="bg-card rounded-xl shadow-card p-6 space-y-6">
          <h3 className="text-lg font-semibold text-foreground leading-relaxed">
            {question.question}
          </h3>
          
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option.score)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  answers[question.id] === option.score
                    ? "border-primary bg-accent text-foreground"
                    : "border-border bg-background hover:border-primary/30 hover:bg-accent/50 text-foreground"
                }`}
              >
                <span className="text-sm leading-relaxed">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={!canGoBack}
            className="flex-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
          
          <Button
            variant="default"
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex-1"
          >
            {isLastQuestion ? "See Results" : "Next"}
            {!isLastQuestion && <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>
        
        {/* Reassurance */}
        <p className="text-xs text-center text-muted-foreground">
          Your answers are private and not stored anywhere.
        </p>
      </div>
    </section>
  );
};

export default AssessmentSection;
