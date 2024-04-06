import React from 'react';

export default function User({ name, isMessageBoxOpen }) {
  const profileName = name.slice(0, 1);
  return (
    <div className='flex flex-col items-center justify-center bg-gray-300 m-2 h-[41vh] my-[10px]'>
      <div className='flex justify-center items-center bg-white h-[170px] w-[170px] rounded-full'><span className='text-7xl text-gray-700 mb-3'>{profileName}</span></div>
      <div className='p-4'><span className='text-3xl font-semiboldbold'>{name}</span></div>
    </div>
  );
}
