import React from 'react'

export default function OurMissions() {
  return (
    <div className='flex flex-col items-center justify-evenly mt-10'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-[50px] text-[#5F5F5F] pb-4'>Our Mission</p>
        <div className='w-[206px] h-[0px] border-b-4 border-[#4285F4]'></div>
      </div>
      <div className='flex flex-row h-[533px]'>
      <img src="OurMissions.svg" alt="our Missions" className=''/>
      <div className='flex flex-col items-center justify-center w-[673px]' >
      <div className='border-r-[14px] border-[#4285F4] rounded-xl px-[14px]'>
      <p className='text-[30px] text-[#5F5F5F] text-right'>Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.</p>
      </div>
      </div>
      </div>
    </div>
  )
}
