import React, { useState } from "react";
import "./quiz-cards.styles.scss";
import quizData from "../../quizData";

function QuizCards() {
  const [selectedID, setSelectedID] = useState(null);

  function handleClick(id) {
    setSelectedID(id !== selectedID ? id : null);
  }

  return (
    <div className="container">
      <div className="header">
        <h2>Flash Card Quiz</h2>
      </div>
      <div className="grid">
        {/* Render list with only the questions */}
        {quizData[0].map((question) => (
          <div
            key={question.id}
            className={`card ${question.id === selectedID ? "selected" : ""}`}
            onClick={() => handleClick(question.id)}
          >
            <h2>
              {question.id === selectedID ? question.answer : question.question}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizCards;
