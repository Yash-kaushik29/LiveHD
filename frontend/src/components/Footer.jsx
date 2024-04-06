import React from 'react'
import { IoMdMic } from 'react-icons/io';
import { PiVideoCameraFill } from 'react-icons/pi';
import { MdPresentToAll, MdCallEnd } from 'react-icons/md';


const Footer = (mic, setMic, camera, setCamera, presenting, setPresenting) => {
  return (
    <div className='flex justify-center items-center fixed bottom-0 bg-white w-full h-[7vh]'>
        <div className='bg-green-500 rounded-full m-2 p-2 cursor-pointer' onClick={() => setMic(!mic)}>{mic && <IoMdMic className='text-xl text-white' />}</div>
        <div className='bg-green-500 rounded-full m-2 p-2 cursor-pointer' onClick={() => setCamera(!camera)}><PiVideoCameraFill className='text-xl text-white' /></div>
        <div className='bg-green-500 rounded-full m-2 p-2 cursor-pointer' onClick={() => setPresenting(!presenting)}><MdPresentToAll className='text-xl text-white' /></div>
        <div className='bg-red-500 rounded-full m-2 p-2 cursor-pointer'><MdCallEnd className='text-xl text-white' /></div>
    </div>
  )
}

export default Footer
