import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const Quiz = () => {
  const quizData = useLoaderData();
  //   console.log(quizData);

  return (
    <div>
      {quizData.data.questions.map((quiz) => (
        <SingleQuiz key={quiz.id} quiz={quiz}></SingleQuiz>
      ))}
    </div>
  );
};

export default Quiz;
