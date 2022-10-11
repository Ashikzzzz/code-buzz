import React from "react";
import "./SingleQuiz.css";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleQuiz = ({ quiz }) => {
  // const { options, correctAnswer } = quiz;
  console.log(quiz);

  const handleAnswer = (answer) => {
    // const answer = quiz.correctAnswer;
    if (quiz.correctAnswer === answer) {
      toast("Correct Answer");
    } else {
      toast("Wrong answer");
    }
  };

  return (
    <div className="quiz-container">
      <div className="question1">
        <h3>Question: {quiz.question}</h3>
        <div className="question">
          {quiz.options.map((option) => (
            <p>
              <input
                name="input-field"
                onClick={() => handleAnswer(option)}
                type="radio"
              />
              {option}
            </p>
          ))}
        </div>
        <ToastContainer></ToastContainer>
      </div>
      <div className="result"></div>
    </div>
  );
};

export default SingleQuiz;
