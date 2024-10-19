import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-end h-[432px] w-[1440px] bg-[#ECECEC]'>
      <div className='flex flex-row items-center justify-evenly gap-48'>
        <div className='flex flex-col text-[20px]'>
            <img src="FooterLogo.svg" alt="Footer Logo" />
            <p className='text-black'><span className='text-[#4285F4]'>On Campus</span> . Ramdeobaba University</p>
        </div>
        <div className='h-[161.5px] w-0 border-gray-400 border-[1.5px]'></div>
        <div className='flex flex-col w-[509px]'>
            <div className='flex flex-row py-6 pl-[6px]'><img src="LocationPin.svg" alt="location" /> <p className='text-black px-8 text-[18px]'>Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan,Katol Road,Nagpur- 440013</p></div>
            <div className='flex flex-row'>
                <div className='flex flex-row h-[31px]'><img src="GmailIcon.svg" alt="gmail" /> <p className='text-black pr-20 pl-[32px] text-[18px]'>dsc.rknec@gmail.com</p></div>
                <div><img src="FollowUs.svg" alt="follow us" /></div>
            </div>
        </div>
      </div>
      <img src="Footer1.svg" alt="Footer image"  />
    </div>
  )
}
