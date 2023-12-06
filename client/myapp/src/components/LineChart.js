import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

const LineChart = ({ recommendedBooks }) => {
  const datas = [
    {
      id: 1,
      year: 2016,
      userGain: 8000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 4000,
      userLost: 653,
    },
    {
      id: 3,
      year: 2020,
      userGain: 3000,
      userLost: 333,
    },
    {
      id: 4,
      year: 2023,
      userGain: 4600,
      userLost: 193,
    },
    {
      id: 5,
      year: 2024,
      userGain: 3600,
      userLost: 293,
    },
  ];

  const [userData, setUserData] = useState({
    labels: datas.map((data) => data.year),
    datasets: [
      {
        label: "User gained",
        data: datas.map((data) => data.userGain),
        backgroundColor: ["green"],
      },
      {
        label: "User gained",
        data: datas.map((data) => data.userLost),
        backgroundColor: ["green"],
      },
    ],
  });

  useEffect(() => {
    console.log("recommended Books from line chart", recommendedBooks);
  }, [recommendedBooks]);

  return (
    <div style={{ width: 700 }}>
      <Line data={userData} />
      {/* <Bar data={userData} /> */}
    </div>
  );
};

export default LineChart;
