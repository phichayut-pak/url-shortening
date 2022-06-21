import React, { useState, useEffect } from 'react'
import InputBox from './InputBox'

import IllustrationWorking from './IllustrationWorking'
import MobileIllustrationWorking from './MobileIllustrationWorking'

const LandingPage = ({ addLink }) => {
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
    <div className='w-full relative grid grid-cols-1 lg:grid-cols-2 px-5 lg:pl-32 lg:px-0 py-10 pb-36 z-0 bg-white'>

      <div className='flex flex-col justify-center items-center lg:items-start order-1 lg:-order-none'>
        <div className="font-poppins font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center lg:text-left pb-5">
          <span className='block my-2'>More than just</span>
          <span className='block my-2'>shorter links</span>
        </div>
        <div className='font-poppins font-medium text-grayish-violet pb-7 text-center lg:text-left'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className='inline-block lg:block'>Build your brand's recognition and get detailed </span>
          <span className='lg:block'> insights on how your links are performing</span>
        </div>
        <button className='px-7 py-3 rounded-full bg-cyan font-poppins text-white font-bold transition duration-100 ease-in hover:bg-[#9BE3E2]'>
          Get Started
        </button>
      </div>

      <div className='flex justify-center items-center '>
        <div className='w-full pb-10'>
          {/* <IllustrationWorking className={''}/> */}
          {isWindow ? <IllustrationWorking className={'transform translate-x-10'}/> : <MobileIllustrationWorking className={'w-full h-full'} />}
        </div>
      </div>

      <InputBox onSubmitLink={addLink}></InputBox>
      
      
      
    </div>
  )
}

export default LandingPage