import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

const Results = ({ recommendedBooks, criteria1, criteria2, criteria3 }) => {
  const userVector = recommendedBooks?.matchingBooks[0].userVector;
  const personalChoiceValue = userVector
    ? Math.sqrt(userVector.reduce((sum, num) => sum + Math.pow(num, 2), 0))
    : 0;

  useEffect(() => {
    console.log("personal choice ", personalChoiceValue);
  }, [personalChoiceValue]);

  const [userData, setUserData] = useState({
    labels: ["Classic", "Dystopian", "Thriller", "Romance", "Fantasy"],
    datasets: [
      {
        label: "Top Recommendations",

        data: recommendedBooks?.matchingBooks.map(
          (book) => book.differenceMagnitude
        ),
      },
      {
        label: "Personal Choice",

        data: [personalChoiceValue],
      },
    ],
  });

  return (
    <div className="lg:flex mt-12 gap-x-[4rem] h-[110vw] sm:h-[25vw]">
      <div className="mt-12 mb-10 h-[45vw] sm:w-[700px]">
        <Line data={userData} />
      </div>
      <div className="border rounded-lg mt-12 sm:w-[15vw] sm:h-[22rem] flex flex-col">
        <p className="font-medium bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mt-4 flex items-center justify-center">
          Recommended Book For You
        </p>
        <div className="flex flex-col items-start justify-start ml-8 sm:ml-0 p-8">
          <p className="text-gray-500 font-medium">
            📖 {recommendedBooks.matchingBooks[0].title}
          </p>
          <p className="text-gray-500 font-medium">
            🧔{recommendedBooks.matchingBooks[0].author}
          </p>
          <p className="text-gray-500 font-medium">
            📔 {recommendedBooks.matchingBooks[0].genre}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
