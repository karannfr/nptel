import React, { useState } from "react";
import { questionBank } from "../data/questions";
import QuizSelector from "../components/QuizSelector";
import Quiz from "../components/Quiz";
import { shuffle } from "../utils/shuffle";
import '../styles/global.css';

const Home: React.FC = () => {
  const [quizQuestions, setQuizQuestions] = useState<null | { questions: any[] }>(null);

  const handleSelect = (mode: "full" | "week", week?: number) => {
    if (mode === "full") {
      setQuizQuestions({ questions: shuffle(questionBank.flatMap(w => w.questions)) });
    } else if (mode === "week" && week) {
      const weekObj = questionBank.find(w => w.week === week);
      if (weekObj) setQuizQuestions({ questions: weekObj.questions });
    }
  };

  const handleHome = () => setQuizQuestions(null);

  return (
    <main style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>Forest Course Quiz</h1>
      {!quizQuestions ? (
        <QuizSelector weeks={questionBank} onSelect={handleSelect} />
      ) : (
        <Quiz questions={quizQuestions.questions} onHome={handleHome} />
      )}
    </main>
  );
};

export default Home;
