import React from "react";

type Props = {
  score: number;
  total: number;
  onReset: () => void;
  onHome: () => void;
};

const ScoreCard: React.FC<Props> = ({ score, total, onReset, onHome }) => (
  <div>
    <h2>Your Score: {score} / {total}</h2>
    <button onClick={onHome}>Home</button>
    <button onClick={onReset}>Retake Quiz</button>
  </div>
);

export default ScoreCard;
