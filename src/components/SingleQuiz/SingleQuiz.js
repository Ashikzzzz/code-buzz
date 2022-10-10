import React from "react";
import "./SingleQuiz.css";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleQuiz = ({ quiz }) => {
  //   console.log(quiz);
  return (
    <div className="quiz-container">
      <div className="question1">
        <h3>Question: {quiz.question}</h3>
        <div className="question">
          <p>{quiz.options[0]}</p>
          <p>{quiz.options[1]}</p>
          <p>{quiz.options[2]}</p>
          <p>{quiz.options[3]}</p>
        </div>
        <ToastContainer></ToastContainer>
      </div>
      <div className="result"></div>
    </div>
  );
};

export default SingleQuiz;
