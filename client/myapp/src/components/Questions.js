import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

const Questions = () => {
  const [criteria1, setCriteria1] = useState(1);
  const [criteria2, setCriteria2] = useState("Concise");
  const [criteria3, setCriteria3] = useState("Thriller");

  const [recommendedBooks, setRecommendedBooks] = useState({});

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/find", {
        criteria1,
        criteria2,
        criteria3,
      });

      if (response.data) {
        setRecommendedBooks(response.data);
      }
    } catch (error) {
      console.error("Error making API call:", error);
    }
  };

  return (
    <div>
      <div className="w-[85vw] sm:w-[55vw] flex flex-col gap-y-4 rounded-xl border mt-10 bg-pink-50">
        <div className="p-4 flex gap-x-2">
          <p className="text-lg font-semibold text-gray-500">Question:</p>
          <span className="text-lg font-semibold text-gray-700">
            On a scale of 1 to 10, how much do you enjoy books that are
            emotionally impactful and thought-provoking?{" "}
            <select
              name="scale"
              id="scale"
              onChange={(e) => setCriteria1(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </span>
        </div>
        <div className="p-4 flex gap-x-2">
          <p className="text-lg font-semibold text-gray-500">Question:</p>
          <span className="text-lg font-semibold text-gray-700">
            Do you prefer books with a more descriptive and literary writing
            style, or do you enjoy books with a straightforward and concise
            writing style?{" "}
            <select
              name="styles"
              id="styles"
              onChange={(e) => setCriteria2(e.target.value)}
            >
              <option value="Descriptive">Descriptive</option>
              <option value="Concise">Concise</option>
            </select>
          </span>
        </div>
        <div className="p-4 flex gap-x-2">
          <p className="text-lg font-semibold text-gray-500">Question:</p>
          <span className="text-lg font-semibold text-gray-700">
            What genre do you enjoy the most?{" "}
            <select
              name="genre"
              id="genre"
              onChange={(e) => setCriteria3(e.target.value)}
            >
              <option value="Classic">Classic</option>
              <option value="Dystopian">Dystopian</option>
              <option value="Thriller">Thriller</option>
              <option value="Romance">Romance</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </span>
        </div>
        <div className="flex items-center justify-center gap-x-4 mb-4">
          <button
            onClick={handleSubmit}
            className="h-10 w-24 bg-black rounded-full text-white hover:bg-white hover:text-black hover:border-2 hover:border-black font-semibold"
          >
            Submit
          </button>
          <button
            onClick={() => window.location.reload()}
            className="h-10 w-24 bg-black rounded-full text-white hover:bg-white hover:text-black hover:border-2 hover:border-black font-semibold"
          >
            Try Again
          </button>
        </div>
      </div>
      {Object.keys(recommendedBooks).length > 0 && (
        <Results
          recommendedBooks={recommendedBooks}
          criteria1={criteria1}
          criteria2={criteria2}
          criteria3={criteria3}
        />
      )}
    </div>
  );
};

export default Questions;
