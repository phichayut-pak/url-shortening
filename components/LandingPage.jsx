import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import illustrationWorking from '../public/images/illustration-working.svg'
import mobileIllustartionWorking from '../public/images/mobile-illustration-working.svg'

import IllustrationWorking from './IllustrationWorking'
import MobileIllustrationWorking from './MobileIllustrationWorking'

const LandingPage = () => {
  const [isWindow, setIsWindow] = useState(null)
  
  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth >= 1024) {
        setIsWindow(true)
      } else {
        setIsWindow(false)
      }
    })
  }, [])

  return (
    <div className='w-full relative grid grid-cols-1 lg:grid-cols-2 px-5 lg:pl-32 lg:px-0 py-10 z-0 bg-white'>
      <div className='flex flex-col justify-center items-center lg:items-start order-1 lg:-order-none'>
        <div className="font-poppins font-bold text-4xl lg:text-6xl text-center lg:text-left pb-5">
          <span className='block my-2'>More than just</span>
          <span className='block my-2'>shorter links</span>
        </div>
        <div className='font-poppins font-medium text-grayish-violet pb-7 text-center lg:text-left'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className='inline-block lg:block'>Build your brand's recognition and get detailed </span>
          <span className='lg:block'> insights on how your links are performing</span>
        </div>
        <button className='px-7 py-3 rounded-full bg-cyan font-poppins text-white font-bold transition duration-100 ease-in hover:opacity-50'>
          Get Started
        </button>
      </div>

      <div className='flex justify-center items-center'>
        <div className=''>
          {isWindow ? <IllustrationWorking /> : <MobileIllustrationWorking />}
        </div>
      </div>
    </div>
  )
}

export default LandingPage