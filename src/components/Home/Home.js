import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleData from "../SingleData/SingleData";
import "./Home.css";

const Home = () => {
  const dataS = useLoaderData([0]);
  //   console.log(dataS);

  return (
    <div className="home-container">
      {dataS?.data?.map((data) => (
        <SingleData key={data.id} data={data}></SingleData>
      ))}
    </div>
  );
};

export default Home;
