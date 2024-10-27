import React from 'react'

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row shadow-md shadow-0-4-4-0-[#00000040] w-full pt-6 px-4 h-[100px] items-center justify-between bg-white mx-auto">
  <div className="flex flex-row justify-between items-center w-full h-full bg-white">
    <div className="flex flex-row items-center">
      <img src="logo.svg" alt="GDG LOGO" className="h-10 md:h-12" />
      <p className="text-[1.375rem] md:text-[1.5rem] px-2 text-[#868686]">GDG RCOEM</p>
    </div>

    <nav className="flex flex-col sm:flex-row gap-6 md:gap-10 text-[#868686] text-[1rem] md:text-[1.5rem] justify-center">
      <div className="hover:text-black transition duration-200">Home</div>
      <div className="hover:text-black transition duration-200">Events</div>
      <div className="hover:text-black transition duration-200">Team</div>
      <div className="hover:text-black transition duration-200">Alumni</div>
      <div className="hover:text-black transition duration-200">Contact</div>
      <div className="flex items-center">
        <img src="Button.svg" alt="Toggle Button" className="h-8 md:h-10" />
      </div>
    </nav>
  </div>
</div>
  )
}
