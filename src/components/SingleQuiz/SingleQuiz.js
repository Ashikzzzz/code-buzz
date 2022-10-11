import React from "react";
import "./SingleQuiz.css";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const SingleQuiz = ({ quiz }) => {
  // const { options, correctAnswer } = quiz;
  // console.log(quiz);

  const handleAnswer = (answer) => {
    // const answer = quiz.correctAnswer;
    if (quiz.correctAnswer === answer) {
      toast("Correct Answer");
    } else {
      toast("Wrong answer");
    }
  };
  const handleRightAns = () => {
    toast(quiz.correctAnswer);
  };
  return (
    <div className="quiz-container">
      <div className="question1">
        <div className="icon">
          <h3>Question: {quiz.question}</h3>
          <FontAwesomeIcon
            onClick={() => handleRightAns(quiz.correctAnswer)}
            icon={faEye}
          ></FontAwesomeIcon>
        </div>
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
