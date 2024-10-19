import React from 'react'

export default function Circles() {
  return (
    <div className='flex flex-row items-center justify-evenly my-32'>
      <div className='relative'>
        <img src="Circles.svg" alt="mage of a circle"/>
        <p className='text-[#5F5F5F] z-10 text-[75px] absolute top-1/4 left-1/4'>03+</p>
      </div>
      <div className='relative'>
        <img src="Circles.svg" alt="mage of a circle"/>
        <p className='text-[#5F5F5F] z-10 text-[75px] absolute top-1/4 left-1/4'>10+</p>
      </div>
      <div className='relative'>
        <img src="Circles.svg" alt="mage of a circle"/>
        <p className='text-[#5F5F5F] z-10 text-[75px] absolute top-1/4 left-1/4'>1K+</p>
      </div>
      <div className='relative'>
        <img src="Circles.svg" alt="mage of a circle"/>
        <p className='text-[#5F5F5F] z-10 text-[60px] absolute top-1/4 left-1/4'>200+</p>
      </div>
    </div>
  )
}
