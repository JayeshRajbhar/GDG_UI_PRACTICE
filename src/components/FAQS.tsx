import React from 'react'

export default function FAQS() {
  return (
    <div className='flex flex-col items-center justify-center mt-20 sm:mt-60'>
  <p className='text-[40px] sm:text-[60px] text-[#5F5F5F]'>FAQs</p>

  {/* FAQ Item 1 */}
  <div className='flex flex-col items-center justify-center my-10 sm:my-20'>
    <div className='flex flex-col items-center justify-center h-[88px] w-full max-w-[867px] bg-[#E1E1E1] rounded-full'>
      <div className='flex flex-row items-center justify-start h-[64px] w-full max-w-[829px] bg-white rounded-full px-6 sm:px-16'>
        <img src="redArrow.svg" alt="red arrow" className='h-8 w-8' />
        <p className='text-[20px] sm:text-[32px] text-[#5F5F5F] pl-4'>What is GDG?</p>
      </div>
    </div>
    <div className='flex flex-row pt-10'>
      <div className='flex flex-row items-center justify-end h-[353px] w-full max-w-[720px] bg-gradient-to-r from-[#DB4437] to-white rounded-xl -z-10'>
        <div className='flex flex-col items-center justify-center h-full w-full bg-[#E1E1E1] rounded-r-3xl'>
          <div className='flex flex-col items-center justify-center h-full w-full max-w-[680px] bg-[#FFFFFF] rounded-r-2xl'>
            <p className='text-[20px] sm:text-[25px] text-[#5F5F5F] text-left pl-4 sm:pl-10'>
              Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* FAQ Item 2 */}
  <div className='flex flex-col items-center justify-center my-10 sm:my-20'>
    <div className='flex flex-col items-center justify-center h-[88px] w-full max-w-[867px] bg-[#E1E1E1] rounded-full'>
      <div className='flex flex-row items-center justify-start h-[64px] w-full max-w-[829px] bg-white rounded-full px-6 sm:px-16'>
        <img src="greenArrow.svg" alt="green arrow" className='h-8 w-8' />
        <p className='text-[20px] sm:text-[32px] text-[#5F5F5F] pl-4'>How can you become a part of GDG?</p>
      </div>
    </div>
    <div className='flex flex-row pt-10'>
      <div className='flex flex-row items-center justify-end h-[255px] w-full max-w-[720px] bg-gradient-to-r from-[#0F9D56] to-white rounded-xl -z-10'>
        <div className='flex flex-col items-center justify-center h-full w-full bg-[#E1E1E1] rounded-r-3xl'>
          <div className='flex flex-col items-center justify-center h-full w-full max-w-[680px] bg-[#FFFFFF] rounded-r-2xl'>
            <p className='text-[20px] sm:text-[25px] text-[#5F5F5F] text-left pl-4 sm:pl-10'>
              We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two-step process involving form filling and personal interview. Students acing both rounds are selected to be part of the core team.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* FAQ Item 3 */}
  <div className='flex flex-col items-center justify-center my-10 sm:my-20'>
    <div className='flex flex-col items-center justify-center h-[88px] w-full max-w-[867px] bg-[#E1E1E1] rounded-full'>
      <div className='flex flex-row items-center justify-start h-[64px] w-full max-w-[829px] bg-white rounded-full px-6 sm:px-16'>
        <img src="blueArrow.svg" alt="blue arrow" className='h-8 w-8' />
        <p className='text-[20px] sm:text-[32px] text-[#5F5F5F] pl-4'>What does a GDG Lead do?</p>
      </div>
    </div>
    <div className='flex flex-row pt-10'>
      <div className='flex flex-row items-center justify-end h-[209px] w-full max-w-[720px] bg-gradient-to-r from-[#4285F4] to-white rounded-xl -z-10'>
        <div className='flex flex-col items-center justify-center h-full w-full bg-[#E1E1E1] rounded-r-3xl'>
          <div className='flex flex-col items-center justify-center h-full w-full max-w-[680px] bg-[#FFFFFF] rounded-r-2xl'>
            <p className='text-[20px] sm:text-[25px] text-[#5F5F5F] text-left pl-4 sm:pl-10'>
              A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, and collaborate with local partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* FAQ Item 4 */}
  <div className='flex flex-col items-center justify-center my-10 sm:my-20'>
    <div className='flex flex-col items-center justify-center h-[88px] w-full max-w-[867px] bg-[#E1E1E1] rounded-full'>
      <div className='flex flex-row items-center justify-start h-[64px] w-full max-w-[829px] bg-white rounded-full px-6 sm:px-16'>
        <img src="yellowArrow.svg" alt="yellow arrow" className='h-8 w-8' />
        <p className='text-[20px] sm:text-[32px] text-[#5F5F5F] pl-4'>How is DSC related to Google?</p>
      </div>
    </div>
    <div className='flex flex-row pt-10'>
      <div className='flex flex-row items-center justify-end h-[189px] w-full max-w-[720px] bg-gradient-to-r from-[#F4B400] to-white rounded-xl -z-10'>
        <div className='flex flex-col items-center justify-center h-full w-full bg-[#E1E1E1] rounded-r-3xl'>
          <div className='flex flex-col items-center justify-center h-full w-full max-w-[680px] bg-[#FFFFFF] rounded-r-2xl'>
            <p className='text-[20px] sm:text-[25px] text-[#5F5F5F] text-left pl-4 sm:pl-10'>
              A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, and collaborate with local partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* FAQ Item 5 */}
  <div className='flex flex-col items-center justify-center my-10 sm:my-20'>
    <div className='flex flex-col items-center justify-center h-[88px] w-full max-w-[867px] bg-[#E1E1E1] rounded-full'>
      <div className='flex flex-row items-center justify-start h-[64px] w-full max-w-[829px] bg-white rounded-full px-6 sm:px-16'>
        <img src="redArrow.svg" alt="red arrow" className='h-8 w-8' />
        <p className='text-[20px] sm:text-[32px] text-[#5F5F5F] pl-4'>How to reach us?</p>
      </div>
    </div>
    <div className='flex flex-row pt-10'>
      <div className='flex flex-row items-center justify-end h-[111px] w-full max-w-[720px] bg-gradient-to-r from-[#DB4437] to-white rounded-xl -z-10'>
        <div className='flex flex-col items-center justify-center h-full w-full bg-[#E1E1E1] rounded-r-3xl'>
          <div className='flex flex-col items-center justify-center h-full w-full max-w-[680px] bg-[#FFFFFF] rounded-r-2xl'>
            <p className='text-[20px] sm:text-[25px] text-[#5F5F5F] text-left pl-4 sm:pl-10'>
              Mail us at "dsc.rknec@gmail.com"
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
