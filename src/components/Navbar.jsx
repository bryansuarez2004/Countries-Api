import React from 'react'
import { FaGear } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='bg-teal-300 p-5 flex justify-between items-center shadow-xl shadow-teal-200'>
        <h1>WHERE IN THE WORLD</h1>
        <FaGear className='text-xl lg:text-2xl' />
    </div>
  )
}

export default Navbar