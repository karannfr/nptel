import React, { useState } from "react";
import { Question } from "../types/quiz";
import QuizQuestion from "./QuizQuestion";
import ScoreCard from "./ScoreCard";
import QuizNavPanel from "./QuizNavPanel";

type Props = {
  questions: Question[];
  onHome: () => void;
};

const Quiz: React.FC<Props> = ({ questions, onHome }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [markedForReview, setMarkedForReview] = useState<boolean[]>(Array(questions.length).fill(false));
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx: number) => {
    const copy = [...selected];
    copy[current] = idx;
    setSelected(copy);
  };

  const handleNext = () => setCurrent((c) => Math.min(c + 1, questions.length - 1));
  const handlePrev = () => setCurrent((c) => Math.max(c - 1, 0));
  const handleJump = (idx: number) => setCurrent(idx);

  const handleMarkReview = (idx: number) => {
    setMarkedForReview((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  const handleSubmit = () => setShowResult(true);
  const handleReset = () => {
    setCurrent(0);
    setSelected(Array(questions.length).fill(null));
    setMarkedForReview(Array(questions.length).fill(false));
    setShowResult(false);
  };

  const score = selected.filter((ans, idx) => ans === questions[idx].answer).length;

  if (showResult) {
    return <ScoreCard score={score} total={questions.length} onReset={handleReset} onHome={onHome} />;
  }

  return (
    <main>
      <QuizNavPanel
        total={questions.length}
        current={current}
        markedForReview={markedForReview}
        answered={selected}
        onJump={handleJump}
        onMarkReview={handleMarkReview}
      />
      <section className="quiz-content">
        <h3>Question {current + 1} / {questions.length}</h3>
        <QuizQuestion
          question={questions[current]}
          selected={selected[current]}
          onSelect={handleSelect}
        />
        <div className="quiz-controls">
          {current > 0 && <button onClick={handlePrev}>Previous</button>}
          {current < questions.length - 1 && <button onClick={handleNext}>Next</button>}
          {current === questions.length - 1 && (
            <button onClick={handleSubmit} disabled={selected.includes(null)}>
              Submit
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default Quiz;