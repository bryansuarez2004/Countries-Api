import React from 'react'
import { FaSearch } from "react-icons/fa";


const Form = () => {
  return (
    <form action="" className="p-5 flex flex-col pt-10 gap-5 sm:flex-row justify-center">
        <div className="bg-amber-300  flex  w-full gap-2 items-center max-w-[600px] p-2 rounded-lg shadow-lg shadow-amber-200 pl-6">
        <FaSearch className="text-xl" />
        <input type="text" className="bg-transparent outline-none w-full " />
        </div>
        <select name="" id="" className="bg-amber-300 w-max p-2 rounded-lg shadow-lg shadow-amber-200 ">
          <option value="">All Countries</option>
          <option value="">America</option>
          <option value="">Europa</option>
          <option value="">Africa</option>
          <option value="">Oceania</option>
          <option value="">Antartida</option>
        </select>
      </form>
  )
}

export default Form