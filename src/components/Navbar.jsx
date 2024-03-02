import React from "react";
import { FaGear } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { changeModeConfigure } from "../store/slices/configure.slice";
import Configuration from "./Configuration";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleConfigure = () => {
    dispatch(changeModeConfigure());
  };

  return (
    <>
      <div className="bg-teal-300 dark:bg-cyan-800 dark:shadow-cyan-800 p-5 flex justify-between items-center dark:shadow-lg shadow-xl shadow-teal-200 ">
        <h1 className="dark:text-white">WHERE IN THE WORLD</h1>
        <FaGear
          onClick={handleConfigure}
          className="text-xl lg:text-2xl cursor-pointer dark:text-white"
        />
      </div>
      <Configuration/>
    </>
  );
};

export default Navbar;
