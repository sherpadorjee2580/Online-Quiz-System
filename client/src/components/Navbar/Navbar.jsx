import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-[#00000014]">
      <div className="flex items-center gap-2 font-semibold text-lg">
        <span className="text-[#2b8af6]">⚡</span> QuizMaster
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-300 hover:text-white">
          Log in
        </button>
        <button className="bg-[#2b8af6] px-4 py-2 rounded-md text-sm font-medium">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
