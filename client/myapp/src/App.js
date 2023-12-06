import React from "react";
import Nav from "./components/Nav";
import Heading from "./components/Heading";
import Questions from "./components/Questions";

const App = () => {
  return (
    <div className="relative">
      <Nav />
      <div className="mt-16 h-screen">
        <div className="gradient" />
        <div className="flex flex-col items-center justify-center p-20">
          <Heading />
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default App;
