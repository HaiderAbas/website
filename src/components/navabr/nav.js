import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Nav() {
  const [nav, setNav] = useState(false);
  const handlenav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] text-white mx-auto px-2 ">
        <h1 className="w-full text-3xl font-bold  font-bold text-[#00df9a]">
          Dot.
        </h1>
        <ul className="md:flex hidden">
          <li className="p-4">Home</li>
          <li className="p-4">Compeny</li>
          <li className="p-4">Resources</li>
          <li className="p-4">Account </li>
          <div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-2 px-4 mx-auto py-2 text-black">
              Get Started
            </button>
          </div>
        </ul>
        <div onClick={handlenav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold font-bold text-[#00df9a] mt-5 ml-3">
            Dot.
          </h1>
          <ul className="uppercase pt-8 text-white ">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Compeny</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4 border-b border-gray-600">About </li>
            <li className="p-4 ">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
