import React from "react";

const Nav = () => {
  return (
    <div>
      <nav class="fixed w-full z-20 top-0 start-0 bg-gradient-to-r from-orange-100 to-pink-200 h-16">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap">
              📖 Book Match
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
