import { useState } from "react";

function Faq({question ,answer}){
    const [showAnswer, setShowAnswer] = useState(true);
    return(
        <div className="faq-item">
    <button
      onClick={() => setShowAnswer(!showAnswer)}
      aria-expanded={showAnswer}
      aria-controls={`faq-answer-${question}`}
      id={`faq-question-${question}`}
      className="faq-toggle"
    >
      {question}
      {showAnswer ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          fill="none"
          viewBox="0 0 30 31"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="#AD28EB"
            d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          fill="none"
          viewBox="0 0 30 31"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="#301534"
            d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
          />
        </svg>
      )}
    </button>


        <p id={`faq-answer-${question}`}
    role="region"
    aria-labelledby={`faq-question-${question}`}
    hidden={showAnswer}>{answer}</p>
        </div>
    )
}
export default Faq;