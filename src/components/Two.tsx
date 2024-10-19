import React from 'react'

export default function Two() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <button className='shadow-md shadow-0-2.5-2.5-0-black/40 bg-[#3686F7] w-[244px] h-[70px] rounded-[6.6px] my-10'>
      <p className='text-[#FFFFFF] text-2xl'>JOIN US</p>
      </button>
      <div className='flex flex-col mt-10 mb-5'>
        <img src="DownArrow1.svg" alt="first arrow" />
        <img src="DownArrow2.svg" alt="second arrow" />
        <img src="DownArrow3.svg" alt="third arrow" />
      </div>
      <p className='text-[60px] text-[#5F5F5F]'>Get To Know Us!</p>
    </div>
  )
}
