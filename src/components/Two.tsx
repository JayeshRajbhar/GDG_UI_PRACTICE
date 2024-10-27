import React from 'react'

export default function Two() {
  return (
    <div className='flex flex-col items-center justify-center'>
  <button className='shadow-md shadow-black/40 bg-[#3686F7] w-[200px] sm:w-[244px] h-[60px] sm:h-[70px] rounded-[6.6px] my-10'>
    <p className='text-[#FFFFFF] text-xl sm:text-2xl'>JOIN US</p>
  </button>

  <div className='flex flex-col mt-10 mb-5 items-center'>
    <img src="DownArrow1.svg" alt="first arrow" className='mb-2' />
    <img src="DownArrow2.svg" alt="second arrow" className='mb-2' />
    <img src="DownArrow3.svg" alt="third arrow" />
  </div>

  <p className='text-[40px] sm:text-[60px] text-[#5F5F5F] text-center'>Get To Know Us!</p>
</div>

  )
}
