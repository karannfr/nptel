export type Question = {
  question: string;
  options: string[];
  answer: number; // index of correct option
};

export type WeekQuestions = {
  week: number;
  questions: Question[];
};
