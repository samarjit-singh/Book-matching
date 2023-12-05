import React from "react";
import Nav from "./components/Nav";
import Heading from "./components/Heading";

const App = () => {
  return (
    <div className="relative">
      <Nav />
      <div className="mt-16 h-screen">
        <div className="gradient" />
        <div className="flex flex-col items-center justify-center p-20">
          <Heading />
          <div className="w-[60rem] h-[20rem] flex flex-col gap-y-4 rounded-xl border mt-10 bg-pink-50">
            <div className="p-4 flex gap-x-2">
              <p className="text-lg font-semibold text-gray-500">Question:</p>
              <span className="text-lg font-semibold">
                On a scale of 1 to 10, how much do you enjoy books that are
                emotionally impactful and thought-provoking?{" "}
                <input type="text" className="w-28" />
              </span>
            </div>
            <p>
              Criteria 2 - Writing Style: Question: "Do you prefer books with a
              more descriptive and literary writing style, or do you enjoy books
              with a straightforward and concise writing style? You can choose
              'Descriptive' or 'Concise.'"
            </p>
            <p>
              Criteria 3 - Genre Preference: Question: "What genre do you enjoy
              the most? You can choose from options like 'Classic,' 'Dystopian,'
              'Coming-of-age,' 'Thriller,' 'Romance,' or 'Fantasy.'"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
