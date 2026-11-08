import "../css/Answers.css";
import { useState , useRef } from "react";



function Answers({ 
    currentQuestion,
    typedtext,
    setTypedtext,
    ontyping,
    onNext,
 }) {

  const inputRef = useRef(null);

  const answer = currentQuestion ? currentQuestion.answer : "";
  const isCompleted = typedtext.length >= answer.length;

 const handleTyping = (event) => {
    const value = event.target.value.slice(0, answer.length);
    ontyping(value);
};

const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();

        if (typedtext === answer && answer.length > 0) {
            onNext();
        }
    }
};

  const focusInput = () => {
    inputRef.current ? inputRef.current.focus() : null;
  };

  const renderAnswer = [];

  for (
    let index = 0;
    index < Math.max(answer.length, typedtext.length);
    index++
  ) {
    const expected = answer[index];
    const typed = typedtext[index];

    if (typed === undefined) {
      renderAnswer.push(
        <span key={index} className="pending">
          {expected === " " ? "\u00A0" : expected}
        </span>
      );
    } else if (typed === expected) {
      renderAnswer.push(
        <span key={index} className="correct">
          {expected === " " ? "\u00A0" : expected}
        </span>
      );
    } else {
      renderAnswer.push(
        <span key={index} className="wrong">
          {typed === " " ? "␣" : typed}
        </span>
      );
    }
  }
   
  

  return (
    <div className="answers-container">
      <div className="answer-box" onClick={focusInput}>
        <div className="answer-display">
          {renderAnswer}
        </div>

        <input
        ref={inputRef}
        type="text"
        className="typing-input"
        value={typedtext}
        onChange={handleTyping}
        disabled = {false}
        autoComplete="off"
        autoCapitalize="off"
        spellCheck="false"
        onKeyDown={handleKeyDown}
        
        />
        <div className="status">
        <span className="status-correct">
          <span className="status-dot"></span>
          Correct
        </span>

        <span className="status-incorrect">
          <span className="status-dot"></span>
          Incorrect
        </span>

        <span className="status-pending">
          <span className="status-dot"></span>
          Pending
        </span>
      </div>
      </div>

      
    </div>
  );
}

export default Answers;