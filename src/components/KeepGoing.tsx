import React from 'react'

export default function KeepGoing() {
  return (
    <div className='flex flex-col items-center justify-evenly my-16'>
  <div className='flex flex-col items-center justify-center text-center'>
    <p className='text-[40px] sm:text-[50px] text-[#5F5F5F] pb-4'>What Keeps Us Going?</p>
    <div className='w-[100px] sm:w-[206px] border-b-4 border-[#FFC727]'></div>
  </div>

  <div className='flex flex-col md:flex-row items-center h-auto md:h-[533px]'>
    <img src="KeepGoing.svg" alt="What keeps us going" className='w-full md:w-[50%] h-auto' />
    <div className='flex flex-col items-center justify-center w-full md:w-[673px] p-4'>
      <div className='border-r-[14px] border-[#FFC727] rounded-xl px-4 md:px-[14px]'>
        <p className='text-[20px] sm:text-[25px] md:text-[30px] text-[#5F5F5F] text-right'>
          Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights. The entire team works in coordination to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}
