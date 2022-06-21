import React from 'react'

const StatisticsCard = ({ title, description, icon, className }) => {
  return (
    <div className={`bg-white relative flex flex-col justify-center items-center max-w-md p-5 w-[22rem] h-[17rem] space-y-7 ${className}`}>
      <div id="card__title" className='font-poppins font-bold text-very-dark-violet text-xl w-full text-center lg:text-left'>
        { title }
      </div>

      <div id="card__description" className='font-poppins font-medium text-grayish-violet text-md w-full text-center lg:text-left'>
        { description }
      </div>

      <div id="card__icon" className="absolute -top-16 lg:left-6 lg:-top-16 p-4 bg-dark-violet rounded-full">
        { icon }
      </div>
    </div>
  )
}

export default StatisticsCard