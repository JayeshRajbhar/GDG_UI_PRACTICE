import React from 'react'

export default function OurMissions() {
  return (
    <div className='flex flex-col items-center justify-evenly mt-10'>
  <div className='flex flex-col items-center justify-center text-center'>
    <p className='text-[40px] sm:text-[50px] text-[#5F5F5F] pb-4'>Our Mission</p>
    <div className='w-[100px] sm:w-[206px] border-b-4 border-[#4285F4]'></div>
  </div>

  <div className='flex flex-col md:flex-row items-center h-auto md:h-[533px]'>
    <img src="OurMissions.svg" alt="Our Missions" className='w-full md:w-[50%] h-auto' />
    <div className='flex flex-col items-center justify-center w-full md:w-[673px] p-4'>
      <div className='border-r-[14px] border-[#4285F4] rounded-xl px-4 md:px-[14px]'>
        <p className='text-[20px] sm:text-[25px] md:text-[30px] text-[#5F5F5F] text-right'>
          Our mission involves community engagement, leadership development, building a strong tech foundation, while enabling all tech enthusiasts to contribute to global society.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}
