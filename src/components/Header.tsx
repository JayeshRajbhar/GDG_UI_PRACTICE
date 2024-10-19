import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-row shadow-md shadow-0-4-4-0-[#00000040] w-[1440px] pt-29 pl-18 h-[100px] items-center justify-center bg-white'>
      <div className='flex flex-row justify-between flex-grow-0 w-[1364px] h-[39px] bg-white'>
        <div className='flex flex-row '>
        <img src="logo.svg" alt="GDG LOGO" className=''/>
        <p className='text-[21.88px] px-7 text-[#868686]'>GDG RCOEM</p>
        </div>

        <div className='flex flex-row gap-[40px] text-[#868686] justify-evenly text-[25px]'>
            <div>Home</div>
            <div>Events</div>
            <div>Team</div>
            <div>Alumni</div>
            <div>Contact</div>
            <div><img src="Button.svg" alt="Toggle Button" /></div>
        </div>
      </div>
    </div>
  )
}
