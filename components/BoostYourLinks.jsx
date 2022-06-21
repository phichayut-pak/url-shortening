import React from 'react'
import classes from './BoostYourLinks.module.css'

const BoostYourLinks = () => {
  return (
    <div className={`w-full bg-dark-violet py-7 lg:py-16 ${classes.background}`}>
      <div className='flex flex-col justify-center items-center space-y-7'>
        <div className='text-white font-poppins font-bold text-xl text-center lg:text-3xl'>
          Boost your links today
        </div>
        <button className='text-center text-white font-poppins font-bold px-8 py-3 bg-cyan rounded-full transition duration-100 ease-in hover:opacity-50'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default BoostYourLinks