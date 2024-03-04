import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeModeConfigure,
  darkModeOff,
  darkModeOn,
  setCountryPerPage,
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
    const { darkmode,countriesPerPage } = watch();
     if (JSON.parse(darkmode)) {
       dispatch(darkModeOn());
     } else {
       dispatch(darkModeOff());
     }
    localStorage.setItem('darkmode',darkmode)

  if(countriesPerPage.length > 0 ){
     console.log('hay numero');
     localStorage.setItem('countryPerPage',countriesPerPage)
      dispatch(setCountryPerPage(JSON.parse(countriesPerPage)))
     
  }else{
    console.log('no hay numero');
  }

  };

  return (
    <div
      className={`${
        modeConfigure ? "translate-x-[0]" : "translate-x-[110%]"
      } p-5 fixed top-0 right-0  bg-slate-300 dark:text-white dark:bg-stone-500  transition-all duration-500 z-50 min-w-[250px] rounded-xl`}
    >
      <button
        onClick={handleConfigure}
        className="text-4xl absolute right-[10px] top-[10px]"
      >
        <IoClose />
      </button>

      <h2 className="text-center mb-5 text-xl font-bold tracking-widest">Settings</h2>
      <form
        onSubmit={handleSubmit(saveConfigure)}
        className=" flex flex-col gap-3"
      >
        <label htmlFor="">Countries per page</label>
        <input type="number" placeholder="number" className="dark:bg-stone-900 p-1 outline-none rounded-lg"   {...register("countriesPerPage")}/>
        <label htmlFor="">Theme: </label>
        <select name="" id="" {...register("darkmode")} className="dark:bg-stone-900 p-1 outline-none rounded-lg">
          <option value="false" className="">Light</option>
          <option value="true">Dark</option>
        </select>

        <button className="bg-indigo-400 dark:bg-stone-900  rounded-md py-2">Save</button>
      </form>
    </div>
  );
};

export default Configuration;
