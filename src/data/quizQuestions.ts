export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  // Communication Changes (1-5)
  {
    id: 1,
    category: "Communication",
    question: "Has your partner become more secretive about their phone or devices recently?",
    options: [
      { text: "No change at all", score: 0 },
      { text: "Slightly more private", score: 1 },
      { text: "Noticeably more guarded", score: 2 },
      { text: "Very secretive, password changes, hiding screens", score: 3 },
    ],
  },
  {
    id: 2,
    category: "Communication",
    question: "How often does your partner leave the room to take calls or reply to messages?",
    options: [
      { text: "Never or rarely", score: 0 },
      { text: "Occasionally", score: 1 },
      { text: "Frequently", score: 2 },
      { text: "Almost always", score: 3 },
    ],
  },
  {
    id: 3,
    category: "Communication",
    question: "Has your partner's texting behavior changed (e.g., texting more often, at unusual hours)?",
    options: [
      { text: "No changes noticed", score: 0 },
      { text: "Minor changes", score: 1 },
      { text: "Noticeable changes", score: 2 },
      { text: "Significant changes in frequency or timing", score: 3 },
    ],
  },
  {
    id: 4,
    category: "Communication",
    question: "Does your partner get defensive when you ask about their day or plans?",
    options: [
      { text: "Never defensive", score: 0 },
      { text: "Occasionally seems uncomfortable", score: 1 },
      { text: "Often gets defensive", score: 2 },
      { text: "Becomes angry or shuts down conversations", score: 3 },
    ],
  },
  {
    id: 5,
    category: "Communication",
    question: "Has your partner started mentioning a new person frequently in conversations?",
    options: [
      { text: "No new people mentioned", score: 0 },
      { text: "Occasionally mentions someone new", score: 1 },
      { text: "Frequently talks about someone specific", score: 2 },
      { text: "Constantly brings up the same person", score: 3 },
    ],
  },
  // Emotional Availability (6-10)
  {
    id: 6,
    category: "Emotional Availability",
    question: "How emotionally present does your partner feel during conversations?",
    options: [
      { text: "Fully engaged and attentive", score: 0 },
      { text: "Sometimes distracted", score: 1 },
      { text: "Often seems elsewhere", score: 2 },
      { text: "Consistently distant or checked out", score: 3 },
    ],
  },
  {
    id: 7,
    category: "Emotional Availability",
    question: "Has physical affection decreased between you and your partner?",
    options: [
      { text: "No change in affection", score: 0 },
      { text: "Slightly less affectionate", score: 1 },
      { text: "Noticeably less affectionate", score: 2 },
      { text: "Affection has nearly stopped", score: 3 },
    ],
  },
  {
    id: 8,
    category: "Emotional Availability",
    question: "Does your partner seem less interested in your life and well-being?",
    options: [
      { text: "Still very interested", score: 0 },
      { text: "Somewhat less interested", score: 1 },
      { text: "Noticeably disinterested", score: 2 },
      { text: "Shows little to no interest", score: 3 },
    ],
  },
  {
    id: 9,
    category: "Emotional Availability",
    question: "Have you noticed mood swings or unexplained emotional changes?",
    options: [
      { text: "No unusual mood changes", score: 0 },
      { text: "Occasional unexplained mood shifts", score: 1 },
      { text: "Frequent mood swings", score: 2 },
      { text: "Extreme or unpredictable emotional changes", score: 3 },
    ],
  },
  {
    id: 10,
    category: "Emotional Availability",
    question: "Does your partner seem guilty or overly apologetic for small things?",
    options: [
      { text: "No unusual guilt", score: 0 },
      { text: "Sometimes seems unnecessarily guilty", score: 1 },
      { text: "Often apologizes excessively", score: 2 },
      { text: "Constantly seems guilty without clear reason", score: 3 },
    ],
  },
  // Routine Consistency (11-15)
  {
    id: 11,
    category: "Routine Consistency",
    question: "Has your partner's work schedule changed unexpectedly?",
    options: [
      { text: "No schedule changes", score: 0 },
      { text: "Minor adjustments", score: 1 },
      { text: "Significant changes with vague explanations", score: 2 },
      { text: "Dramatic changes with inconsistent explanations", score: 3 },
    ],
  },
  {
    id: 12,
    category: "Routine Consistency",
    question: "Are there unexplained gaps in your partner's time or whereabouts?",
    options: [
      { text: "No unexplained gaps", score: 0 },
      { text: "Occasional unclear periods", score: 1 },
      { text: "Frequent unexplained absences", score: 2 },
      { text: "Regular periods with no explanation", score: 3 },
    ],
  },
  {
    id: 13,
    category: "Routine Consistency",
    question: "Has your partner developed new hobbies or interests without inviting you?",
    options: [
      { text: "No new solo activities", score: 0 },
      { text: "One or two new interests", score: 1 },
      { text: "Several new activities excluding you", score: 2 },
      { text: "Complete shift in interests without inclusion", score: 3 },
    ],
  },
  {
    id: 14,
    category: "Routine Consistency",
    question: "Has your partner's appearance or grooming habits changed noticeably?",
    options: [
      { text: "No changes", score: 0 },
      { text: "Minor improvements", score: 1 },
      { text: "Significant changes in appearance", score: 2 },
      { text: "Complete makeover or dramatic changes", score: 3 },
    ],
  },
  {
    id: 15,
    category: "Routine Consistency",
    question: "Does your partner spend more time away from home than before?",
    options: [
      { text: "Same as always", score: 0 },
      { text: "Slightly more time away", score: 1 },
      { text: "Noticeably more absences", score: 2 },
      { text: "Rarely home or always finding reasons to leave", score: 3 },
    ],
  },
  // Digital Behavior (16-20)
  {
    id: 16,
    category: "Digital Behavior",
    question: "Has your partner's social media usage patterns changed?",
    options: [
      { text: "No changes noticed", score: 0 },
      { text: "Uses social media slightly differently", score: 1 },
      { text: "Significant changes in posting or activity", score: 2 },
      { text: "New accounts, deleted posts, or hidden activity", score: 3 },
    ],
  },
  {
    id: 17,
    category: "Digital Behavior",
    question: "Does your partner quickly close apps or switch screens when you're near?",
    options: [
      { text: "Never", score: 0 },
      { text: "Occasionally", score: 1 },
      { text: "Frequently", score: 2 },
      { text: "Almost every time", score: 3 },
    ],
  },
  {
    id: 18,
    category: "Digital Behavior",
    question: "Has your partner changed passwords or added new security to devices?",
    options: [
      { text: "No password changes", score: 0 },
      { text: "Updated passwords normally", score: 1 },
      { text: "Added new security measures", score: 2 },
      { text: "Complete lockdown of all devices", score: 3 },
    ],
  },
  {
    id: 19,
    category: "Digital Behavior",
    question: "Does your partner receive notifications they dismiss without explanation?",
    options: [
      { text: "No unusual notification behavior", score: 0 },
      { text: "Sometimes dismisses quickly", score: 1 },
      { text: "Often hides or quickly clears notifications", score: 2 },
      { text: "Consistently secretive about all notifications", score: 3 },
    ],
  },
  {
    id: 20,
    category: "Digital Behavior",
    question: "Have you noticed your partner using apps or platforms they didn't use before?",
    options: [
      { text: "No new apps or platforms", score: 0 },
      { text: "One or two new apps", score: 1 },
      { text: "Several new messaging or social apps", score: 2 },
      { text: "Using apps known for private communication", score: 3 },
    ],
  },
];

export const calculateScore = (answers: Record<number, number>): number => {
  return Object.values(answers).reduce((sum, score) => sum + score, 0);
};

export const getScoreInterpretation = (score: number): {
  level: "low" | "moderate" | "elevated" | "high";
  percentage: number;
  summary: string;
} => {
  const maxScore = quizQuestions.length * 3;
  const percentage = Math.round((score / maxScore) * 100);
  
  if (percentage <= 25) {
    return {
      level: "low",
      percentage,
      summary: "Your responses suggest a generally healthy relationship dynamic with few concerning patterns.",
    };
  } else if (percentage <= 50) {
    return {
      level: "moderate",
      percentage,
      summary: "Some behavioral patterns warrant attention. Open communication may help address underlying concerns.",
    };
  } else if (percentage <= 75) {
    return {
      level: "elevated",
      percentage,
      summary: "Your relationship shows several concerning patterns that may benefit from deeper exploration.",
    };
  } else {
    return {
      level: "high",
      percentage,
      summary: "Multiple concerning patterns are present. Consider seeking support from a relationship professional.",
    };
  }
};
