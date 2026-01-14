import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed
  top-0
  left-0
  w-full
  px-15
  h-20
  py-3
  z-50
  backdrop-blur-2xl
  flex
  justify-between
  items-center
  bg-[#02081971]"
    >
      <h1 className="text-[23px] text-[#997FE1]">Rohan</h1>

      {/* Links */}
      <div
        className={`absolute top-16 right-6 md:static md:flex md:w-[50%] md:justify-between
        ${
          open
            ? "flex text-gray-900 flex-col bg-[#1D283A] p-4 rounded-2xl"
            : "hidden"
        }`}
      >
        <a  href='#home'className="px-3 py-2 bg-[#6565E7] text-sm rounded-xl">Home</a>
        <a href='#about' className="px-3 py-2 text-gray-400 rounded-2xl text-sm">About</a>
        <a href='#skill' className="px-3 py-2 text-gray-400 rounded-2xl text-sm">Skills</a>
        <a href='#project' className="px-3 py-2 text-gray-400 rounded-2xl text-sm">Projects</a>
        <a href='#contact' className="px-3 py-2 text-gray-400 rounded-2xl text-sm">Contact</a>
      </div>

      {/* Toggle Button */}
      <button
        className="text-amber-50 md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </div>
  );
};

export default Navbar;
