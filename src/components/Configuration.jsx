import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeModeConfigure,
  darkModeOff,
  darkModeOn,
} from "../store/slices/configure.slice";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";

const Configuration = () => {
  const { modeConfigure } = useSelector((store) => store.configure);
  const dispatch = useDispatch();
  const { register, watch, handleSubmit } = useForm();

  const handleConfigure = () => {
    dispatch(changeModeConfigure());
  };

  const saveConfigure = () => {
    const { darkmode } = watch();
    if (JSON.parse(darkmode)) {
      dispatch(darkModeOn());
    } else {
      dispatch(darkModeOff());
    }
   localStorage.setItem('darkmode',darkmode)


  };

  return (
    <div
      className={`${
        modeConfigure ? "translate-x-[0]" : "translate-x-[110%]"
      } p-5 fixed top-0 right-0  bg-slate-300 dark:text-white dark:bg-stone-500  transition-all duration-500 z-50 min-w-[250px]`}
    >
      <button
        onClick={handleConfigure}
        className="text-4xl absolute right-[10px] top-[10px]"
      >
        <IoClose />
      </button>

      <h2 className="text-center mb-5 text-xl">Settings</h2>
      <form
        onSubmit={handleSubmit(saveConfigure)}
        className=" flex flex-col gap-3"
      >
        
        <label htmlFor="">Theme: </label>
        <select name="" id="" {...register("darkmode")} className="dark:bg-stone-900">
          <option value="false">Light</option>
          <option value="true">Dark</option>
        </select>

        <button className="bg-teal-300 dark:bg-stone-900  rounded-md py-2">Save</button>
      </form>
    </div>
  );
};

export default Configuration;
