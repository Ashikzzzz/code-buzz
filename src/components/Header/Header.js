import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-container">
      <h1>
        <i>Quiz Mart</i>
      </h1>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/statistics">statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Header;
