import React from 'react'

export default function Technologies() {
  return (
    <div className='flex flex-col items-center justify-center my-10'>
      <div className='flex flex-col gap-12 items-center justify-center mb-10'>
        <div className='relative'>
            <div className='h-0 w-[1277px] border-b-8 border-[#FF6060] mt-[72px]'></div>
            <div className='text-[#5F5F5F] z-20 text-[70px] absolute top-1/4 left-1/3 px-12 bg-white'>Technologies</div>
        </div>
        <p className='text-[#5F5F5F] text-[32px] pl-4'>Domains That Excite Us to Collaborate and Teach!</p>
      </div>

      <div className='w-full flex flex-row items-center justify-evenly mt-28'>
        <div className='flex flex-col items-center justify-center h-[327px] w-[446px] shadow-custom p-2 rounded-3xl'>
            <div className='h-11px] w-[241px] border-[#EA4335] border-t-[11px] rounded-lg'></div>
            <img src="Android.svg" alt="Android" className='' />
            <p className='text-[47.8px] text-[#5F5F5F] mb-2'>Android</p>
            <img src="DownArrowTech.svg" alt="down arrow" />
        </div>
        <div className='flex flex-col items-center justify-center h-[327px] w-[446px] shadow-custom rounded-3xl'>
            <div className='h-11px] w-[241px] border-[#4285F4] border-t-[11px] rounded-lg'></div>
            <img src="Flutter.svg" alt="Flutter" className='pt-10 mb-16' />
            <p className='text-[47.8px] text-[#5F5F5F] mb-2'>Flutter</p>
            <img src="DownArrowTech.svg" alt="down arrow" />
        </div>
        <div className='flex flex-col items-center justify-center h-[327px] w-[446px] shadow-custom rounded-3xl'>
            <div className='h-11px] w-[241px] border-[#34A853] border-t-[11px] rounded-lg'></div>
            <img src="Cloud.svg" alt="Cloud" className='pt-6 mb-7' />
            <p className='text-[47.8px] text-[#5F5F5F] mb-2'>Cloud</p>
            <img src="DownArrowTech.svg" alt="down arrow" />
        </div>
      </div>
    </div>
  )
}
