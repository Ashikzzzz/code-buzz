import React from "react";
import { Link } from "react-router-dom";
import "./SingleData.css";

const SingleData = ({ data }) => {
  //   console.log(data);
  const { logo, name, id, total } = data;
  return (
    <div className="data-container">
      <img src={logo} alt="" />
      <div className="start-quiz">
        <h3>Subject: {name}</h3>
        <p>Questions: {total}</p>
        <Link to={`/SingleData/${id}`} className="quiz-btn">
          Start-Quiz
        </Link>
      </div>
    </div>
  );
};

export default SingleData;
