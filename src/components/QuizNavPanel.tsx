import React from "react";

type QuizNavPanelProps = {
  total: number;
  current: number;
  markedForReview: boolean[];
  answered: (number | null)[];
  onJump: (idx: number) => void;
  onMarkReview: (idx: number) => void;
};

const QuizNavPanel: React.FC<QuizNavPanelProps> = ({
  total,
  current,
  markedForReview,
  answered,
  onJump,
  onMarkReview,
}) => (
  <aside className="nav-panel">
    <h4>Questions</h4>
    <div className="nav-panel-list">
      {Array.from({ length: total }).map((_, idx) => {
        let btnClass = "";
        if (current === idx) btnClass = "current";
        else if (markedForReview[idx]) btnClass = "review";
        else if (answered[idx] !== null) btnClass = "answered";
        return (
          <button
            key={idx}
            className={btnClass}
            onClick={() => onJump(idx)}
            title={`Go to question ${idx + 1}`}
            aria-label={`Go to question ${idx + 1}`}
            type="button"
          >
            {idx + 1}
          </button>
        );
      })}
    </div>
    <button
      className={"mark-review-btn" + (markedForReview[current] ? " active" : "")}
      onClick={() => onMarkReview(current)}
      type="button"
      style={{ marginTop: 16 }}
    >
      {markedForReview[current] ? "Unmark Review" : "Mark for Review"}
    </button>
    <div className="nav-panel-legend" style={{ marginTop: 18 }}>
      <span>
        <span className="legend-dot current"></span> Current
      </span>
      <span>
        <span className="legend-dot review"></span> Marked for Review
      </span>
      <span>
        <span className="legend-dot answered"></span> Answered
      </span>
      <span>
        <span className="legend-dot default"></span> Not Visited
      </span>
    </div>
  </aside>
);

export default QuizNavPanel;
