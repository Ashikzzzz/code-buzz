import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Statistics.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const statistics = useLoaderData();

  return (
    <div className="chart">
      <div id="container">
        <LineChart
          width={500}
          height={300}
          data={statistics.data}
          margin={{
            top: 5,
            right: 30,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="total" stroke="red" />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
