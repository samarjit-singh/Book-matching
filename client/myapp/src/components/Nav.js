import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="fixed w-full z-20 top-0 start-0 border-b border-b-red bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              📖 Book Match
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
