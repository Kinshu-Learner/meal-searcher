import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiBackpack } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showHome, setShowHome] = useState(false);
  const [showGroceries, setShowGroceries] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="flex justify-center sticky z-10">

      <div className="flex justify-between lg:p-6 max-w-screen-2xl w-full">

        <div className="flex justify-between w-[60%]">

          <a href="/" className="flex font-medium text-3xl max-lg:p-6">
            GO <span className="font-black">&nbsp;FOOD</span>
          </a>

          <div className="flex gap-6 font-medium max-lg:hidden">
            <div
              onClick={() => {
                setShowHome(!showHome);
                setShowGroceries(false);
                setShowPages(false);
              }}
              className="relative flex items-center justify-center cursor-pointer py-2 px-3 hover:bg-stone-200 rounded-lg duration-300"
            >
              Home <FaAngleDown className="mt-1 pl-1" />
              {showHome && (
                <ul className="absolute text-center items-center bg-stone-200 rounded-lg top-10 p-1">
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    About
                  </li>
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    Shop
                  </li>
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    About
                  </li>
                </ul>
              )}
            </div>

            <div
              onClick={() => {
                setShowGroceries(!showGroceries);
                setShowHome(false);
                setShowPages(false);
              }}
              className="relative flex items-center justify-center cursor-pointer py-2 px-3 hover:bg-stone-200 rounded-lg duration-300"
            >
              Groceries <FaAngleDown className="mt-1 pl-1" />
              {showGroceries && (
                <ul className="absolute text-center items-center bg-stone-200 rounded-lg top-10 p-1">
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    Meat
                  </li>
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    Dairy
                  </li>
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    Veg
                  </li>
                </ul>
              )}
            </div>

            <div
              onClick={() => {
                setShowPages(!showPages);
                setShowHome(false);
                setShowGroceries(false);
              }}
              className="relative flex items-center justify-center cursor-pointer py-2 px-3 hover:bg-stone-200 rounded-lg duration-300"
            >
              Pages <FaAngleDown className="mt-1 pl-1" />
              {showPages && (
                <ul className="absolute text-center items-center bg-stone-200 rounded-lg top-10 p-1">
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    Random
                  </li>
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    Pages
                  </li>
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    About
                  </li>
                </ul>
              )}
            </div>
          </div>

        </div>

        <a
          href="https://github.com/Kinshu-Learner"
          target="_blank"
          className="text-white font-medium flex items-center gap-2 hover:bg-gray-200 hover:bg-opacity-30 px-3 py-2 rounded-lg duration-300 max-lg:hidden"
        >
          Connect with us <FaArrowRight className="mt-1" />
        </a>

        <div className="flex max-lg:hidden">
          <div className="rounded-full p-3 bg-gray-100 bg-opacity-20 cursor-pointer hover:bg-gray-300 duration-200 hover:bg-opacity-20 text-white mx-1">
            <CiSearch size={20} />
          </div>
          <div className="rounded-full p-3 bg-gray-100 bg-opacity-20 cursor-pointer hover:bg-gray-300 duration-200 hover:bg-opacity-20 text-white mx-1">
            <CiUser size={20} />
          </div>
          <div className="rounded-full p-3 bg-gray-100 bg-opacity-20 cursor-pointer hover:bg-gray-300 duration-200 hover:bg-opacity-20 text-white mx-1 relative">
            <IoMdHeartEmpty size={20} />
            <div className="bg-yellow-300 rounded-full text-xs text-lime-700 font-medium text-center h-4 w-4 absolute top-0 -right-1">
              2
            </div>
          </div>
          <div className="rounded-full p-3 bg-gray-100 bg-opacity-20 cursor-pointer hover:bg-gray-300 duration-200 hover:bg-opacity-20 text-white mx-1 relative">
            <PiBackpack size={20} />
            <div className="bg-yellow-300 rounded-full text-xs text-lime-700 font-medium text-center h-4 w-4 absolute top-0 -right-1">
              0
            </div>
          </div>
        </div>

        <div
          className="lg:hidden max-lg:p-6"
          onClick={() => setShowNav(!showNav)}
        >
          {!showNav && <FaBars size={20} className="m-2" />}
          {showNav && <FaTimes size={20} className="m-2" />}
        </div>

        <div className={`absolute p-2 justify-center items-center flex flex-col w-full bg-stone-200 bg-opacity-30 ${showNav ? "translate-y-20" : "-translate-y-60"} duration-300`}>
          <div className="flex gap-4 font-medium lg:hidden">
            <div
              onClick={() => {
                setShowHome(!showHome);
                setShowGroceries(false);
                setShowPages(false);
              }}
              className="relative flex items-center justify-center cursor-pointer py-2 px-3 hover:bg-stone-200 rounded-lg duration-300"
            >
              Home <FaAngleDown className="mt-1 pl-1" />
              {showHome && (
                <ul className="absolute text-center items-center bg-stone-200 rounded-lg top-10 p-1 z-20">
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    About
                  </li>
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    Shop
                  </li>
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    About
                  </li>
                </ul>
              )}
            </div>

            <div
              onClick={() => {
                setShowGroceries(!showGroceries);
                setShowHome(false);
                setShowPages(false);
              }}
              className="relative flex items-center justify-center cursor-pointer py-2 px-3 hover:bg-stone-200 rounded-lg duration-300"
            >
              Groceries <FaAngleDown className="mt-1 pl-1" />
              {showGroceries && (
                <ul className="absolute text-center items-center bg-stone-200 rounded-lg top-10 p-1 z-20">
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    Meat
                  </li>
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    Dairy
                  </li>
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    Veg
                  </li>
                </ul>
              )}
            </div>

            <div
              onClick={() => {
                setShowPages(!showPages);
                setShowHome(false);
                setShowGroceries(false);
              }}
              className="relative flex items-center justify-center cursor-pointer py-2 px-3 hover:bg-stone-200 rounded-lg duration-300"
            >
              Pages <FaAngleDown className="mt-1 pl-1" />
              {showPages && (
                <ul className="absolute text-center items-center bg-stone-200 rounded-lg top-10 p-1 z-20">
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    Random
                  </li>
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    Pages
                  </li>
                  <li className="p-2 hover:cursor-pointer hover:bg-stone-100 px-10 rounded-lg duration-300">
                    About
                  </li>
                </ul>
              )}
            </div>
          </div>

          <a
            href="https://github.com/Kinshu-Learner"
            target="_blank"
            className="text-white my-5 py-2 font-medium flex items-center gap-2 bg-lime-800 px-3 rounded-lg duration-300 lg:hidden"
          >
            Connect with us <FaArrowRight className="mt-1" />
          </a>

          <div className="flex lg:hidden pb-4">
            <div className="rounded-full p-3 bg-lime-700 hover:bg-lime-600 bg-opacity-70 cursor-pointer duration-200 hover:bg-opacity-70 text-white mx-1">
              <CiSearch size={20} />
            </div>
            <div className="rounded-full p-3 bg-lime-700 hover:bg-lime-600 bg-opacity-70 cursor-pointer duration-200 hover:bg-opacity-70 text-white mx-1">
              <CiUser size={20} />
            </div>
            <div className="rounded-full p-3 bg-lime-700 hover:bg-lime-600 bg-opacity-70 cursor-pointer duration-200 hover:bg-opacity-70 text-white mx-1 relative">
              <IoMdHeartEmpty size={20} />
              <div className="bg-yellow-300 rounded-full text-xs text-lime-700 font-medium text-center h-4 w-4 absolute top-0 -right-1">
                2
              </div>
            </div>
            <div className="rounded-full p-3 bg-lime-700 hover:bg-lime-600 bg-opacity-70 cursor-pointer duration-200 hover:bg-opacity-70 text-white mx-1 relative">
              <PiBackpack size={20} />
              <div className="bg-yellow-300 rounded-full text-xs text-lime-700 font-medium text-center h-4 w-4 absolute top-0 -right-1">
                0
              </div>
            </div>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
