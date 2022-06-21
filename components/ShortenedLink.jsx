import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ShortenedLink = ({ originalLink, shortenedLink }) => {
  const [isClicked, setIsClicked] = useState(false)

  const onClickHandler = () => {
    

    setIsClicked(true)
    
    setTimeout(() => {
      setIsClicked(false)
    }, 5000)
  }

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={`flex flex-col lg:flex-row justify-between items-center w-11/12 lg:w-3/4 bg-white rounded-md`}>
      <div id="shortened_link" className='p-4 px-5 w-full font-poppins font-medium lg:text-lg text-very-dark-violet text-left'>
        { originalLink }
      </div>

      <div className="border w-full border-[#E5E5E5] block lg:hidden"></div>

      <div className='w-full flex flex-col lg:flex-row justify-end items-center p-4 lg:space-x-3 space-y-3 lg:space-y-0'>
        <div className='w-full lg:w-auto font-poppins font-medium text-cyan text-left lg:text-lg'>
          { shortenedLink }
        </div>

        <CopyToClipboard text={shortenedLink}>
          <button onClick={onClickHandler} className={`w-full lg:w-auto px-3 py-2 font-poppins font-medium text-white text-sm rounded-md text-center transition duration-100 ease-in ${ isClicked ? 'bg-dark-violet' : 'bg-cyan'}`}>
            { isClicked ? 'Copied!' : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>
    </motion.div>
  )
}

export default ShortenedLink