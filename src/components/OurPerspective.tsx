import React from 'react'

export default function OurPerspective() {
  return (
    <div className='flex flex-col gap-4 items-center justify-evenly my-10'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-[50px] text-[#5F5F5F] pb-4'>Our Perspective</p>
        <div className='w-[206px] h-[0px] border-b-4 border-[#0F9D56]'>
        </div>
      </div>
      <div className='flex flex-row'>
            <div className='flex flex-col items-center justify-center w-[673px]' >
                <div className='border-l-[14px] border-[#0F9D56] rounded-xl px-[14px]'>
                    <p className='text-[30px] text-[#5F5F5F] text-left'>We’re a community-driven initiative aiming to bridge the gap between research and practice , develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers , spreading stimulative ideas and working for a solution driven team.</p>
                </div>
            </div>
            <img src="OurPerspective.svg" alt="our perspective" className=''/>   
      </div>
    </div>
  )
}
