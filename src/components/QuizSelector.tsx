import React from "react";
import { WeekQuestions } from "../types/quiz";

type Props = {
  weeks: WeekQuestions[];
  onSelect: (mode: "full" | "week", week?: number) => void;
};

const QuizSelector: React.FC<Props> = ({ weeks, onSelect }) => (
  <div>
    <button onClick={() => onSelect("full")}>Full Random Quiz</button>
    <h3>Or select a week:</h3>
    <select onChange={e => e.target.value && onSelect("week", Number(e.target.value))}>
      <option value="">Select week</option>
      {weeks.map(w => (
        <option key={w.week} value={w.week}>Week {w.week}</option>
      ))}
    </select>
  </div>
);

export default QuizSelector;
