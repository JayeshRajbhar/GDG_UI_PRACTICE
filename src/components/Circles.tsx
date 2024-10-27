import React from 'react'

export default function Circles() {
  return (
    <div className='flex flex-wrap items-center justify-evenly my-32'>
  <div className='relative mb-8'>
    <img src="Circles.svg" alt="image of a circle" className='w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48' />
    <p className='text-[#5F5F5F] z-10 text-[40px] sm:text-[50px] md:text-[75px] absolute top-1/4 left-1/4'>03+</p>
  </div>
  <div className='relative mb-8'>
    <img src="Circles.svg" alt="image of a circle" className='w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48' />
    <p className='text-[#5F5F5F] z-10 text-[40px] sm:text-[50px] md:text-[75px] absolute top-1/4 left-1/4'>10+</p>
  </div>
  <div className='relative mb-8'>
    <img src="Circles.svg" alt="image of a circle" className='w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48' />
    <p className='text-[#5F5F5F] z-10 text-[40px] sm:text-[50px] md:text-[75px] absolute top-1/4 left-1/4'>1K+</p>
  </div>
  <div className='relative mb-8'>
    <img src="Circles.svg" alt="image of a circle" className='w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48' />
    <p className='text-[#5F5F5F] z-10 text-[35px] sm:text-[45px] md:text-[60px] absolute top-1/4 left-1/4'>200+</p>
  </div>
</div>

  )
}
