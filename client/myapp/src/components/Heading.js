import React from "react";

const Heading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-lg font-semibold text-gray-500 border rounded-full px-8 py-2">
        Discover tailored reads with our book recommender.
      </span>
      <span className="mt-10 text-6xl font-bold">Answer Simple Questions</span>
      <span className="mt-2 text-6xl font-bold bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
        & Get Recommendation
      </span>
    </div>
  );
};

export default Heading;
