import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-end h-auto w-full bg-[#ECECEC] pt-6'>
    <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-48'>
      <div className='flex flex-col items-center md:items-start text-[20px]'>
        <img src="FooterLogo.svg" alt="Footer Logo" className='mb-2' />
        <p className='text-black text-center md:text-left'>
          <span className='text-[#4285F4]'>On Campus</span> . Ramdeobaba University
        </p>
      </div>
      <div className='hidden md:block h-[161.5px] w-0 border-gray-400 border-[1.5px]'></div>
      <div className='flex flex-col w-full md:w-[509px]'>
        <div className='flex flex-row items-center py-4'>
          <img src="LocationPin.svg" alt="location" className='mr-2' />
          <p className='text-black text-[18px]'>
            Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur- 440013
          </p>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center'>
            <img src="GmailIcon.svg" alt="gmail" className='mr-2' />
            <p className='text-black text-[18px]'>dsc.rknec@gmail.com</p>
          </div>
          <div className='hidden md:block'>
            <img src="FollowUs.svg" alt="follow us" />
          </div>
        </div>
      </div>
    </div>
    <img src="Footer1.svg" alt="Footer image" className='mt-4 w-full ' />
  </div>
  
  )
}
