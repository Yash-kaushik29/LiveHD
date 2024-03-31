import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className='bg-slate-400 p-4'>
        <div className='max-w-[1240px] px-4 py-[10px] items-center flex justify-between mx-auto '>
            <div className='text-3xl font-bold'>
                LiveHD
            </div>
            <ul className='flex text-black gap-5'>
                {/* //adding setting icon */}
                <li><IoSettingsOutline className='text-3xl'/></li>
                {/* //adding user icon  */}
                <li><FaUserCircle className='text-3xl'/></li>
            </ul>
        </div>
    </div>
  )
}

export default Header