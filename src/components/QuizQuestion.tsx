import React from "react";
import { Question } from "../types/quiz";

type Props = {
  question: Question;
  selected: number | null;
  onSelect: (idx: number) => void;
};

const QuizQuestion: React.FC<Props> = ({ question, selected, onSelect }) => (
  <div>
    <h4>{question.question}</h4>
    {question.options.map((opt, idx) => (
      <div key={idx}>
        <label>
          <input
            type="radio"
            checked={selected === idx}
            onChange={() => onSelect(idx)}
          />
          {opt}
        </label>
      </div>
    ))}
  </div>
);

export default QuizQuestion;
