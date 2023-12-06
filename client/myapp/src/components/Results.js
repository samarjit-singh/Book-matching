import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

const Results = ({ recommendedBooks, criteria1, criteria2, criteria3 }) => {
  const [userData, setUserData] = useState({
    labels: ["Classic", "Dystopian", "Thriller", "Romance", "Fantasy"],
    datasets: [
      {
        label: "Top Recommendations",

        data: recommendedBooks?.matchingBooks.map(
          (book) => book.differenceMagnitude
        ),
        // backgroundColor: ["green"],
      },
    ],
  });

  return (
    <div style={{ width: 700 }}>
      <Line data={userData} />
    </div>
  );
};

export default Results;
