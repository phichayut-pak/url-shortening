import React from 'react'
import classes from './InputBox.module.css'
import { useRef, useState } from 'react'
import axios from 'axios'

const InputBox = ({ className, onSubmitLink }) => {
  const link = useRef('')
  const [isValid, setIsValid] = useState({
    status: true,
    message: ''
  })

  const submitHandler = async (e) => {
    e.preventDefault()
    const givenLink = link.current.value
    
    if(givenLink === '') {
      setIsValid({
        status: false,
        message: 'Please add a link'
      })
      return
    }

    if(!givenLink.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
      setIsValid({
        status: false,
        message: 'Please add a valid link'
      })
      return
    }

    if(givenLink.includes('shrtco.de') || givenLink.includes('9qr.de') || givenLink.includes('shiny.link')) {
      setIsValid({
        status: false,
        message: 'Please don\'t add the shortned link'
      })
      return
    }

    const response = await axios.post(`https://api.shrtco.de/v2/shorten?url=${givenLink}`)
    const data = response.data
    

    if(!data || !data.ok) {
      setIsValid({
        status: false,
        message: 'Unexpected Error, Please try again'
      })
    }


    onSubmitLink({
      id: new Date().toString(),
      originalLink: givenLink,
      shortenedLink: data.result.full_short_link
    })
    link.current.value = ''
    setIsValid({
      status: true,
      message: ''
    })
  }

  return (
    <div id="input_bg" className={`${classes.input_bg} absolute left-0 right-0 ml-auto mr-auto w-11/12 lg:w-3/4 -bottom-[4.5rem] lg:-bottom-[5.5rem] py-5 lg:py-16 bg-dark-violet px-7 lg:px-16 rounded-md`}>
      <form onSubmit={submitHandler} className='flex flex-col lg:flex-row justify-start items-center space-x-0 space-y-3 lg:space-x-3 lg:space-y-0'>

        <input id="input_link" ref={link} type="text" className={`w-full lg:w-9/12 h-12 rounded-md px-5 font-poppins font-medium text-gray placeholder:font-poppins placeholder:font-medium placeholder:text-gray text-lg placeholder:text-lg outline-none ${!isValid.status ? 'border-2 border-red' : ''}`} placeholder='Shorten a link here...'/>
        <label htmlFor="input_link" className={`font-poppins font-medium text-xs text-red w-full italic ${!isValid.status ? 'block' : 'hidden'}`}>{isValid.message}</label>
        
        <div className='w-full lg:w-3/12 bg-cyan h-12 rounded-md transition duration-100 ease-in hover:bg-[#9BE3E2]'>
          <button type="submit" onClick={submitHandler} className='inline-flex justify-center items-center w-full h-full font-poppins font-bold text-white text-lg'>Shorten It!</button>
        </div>
      </form>
    </div>
  )
}

export default InputBox