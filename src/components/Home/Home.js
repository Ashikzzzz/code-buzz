import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleData from "../SingleData/SingleData";
import quiz1 from "../../img/quiz1.jpg";
import "./Home.css";

const Home = () => {
  const dataS = useLoaderData([0]);
  //   console.log(dataS);

  return (
    <div>
      <div className="img-container">
        <div className="for-picture">
          <img src={quiz1} alt="" />
        </div>
        <div className="quotes">
          <h1>Quiz is the best way to cheack your skills</h1>
          <p>If you want, Play some Quiz,then cheack below</p>
        </div>
      </div>
      <div className="home-container">
        {dataS?.data?.map((data) => (
          <SingleData key={data.id} data={data}></SingleData>
        ))}
      </div>
    </div>
  );
};

export default Home;
