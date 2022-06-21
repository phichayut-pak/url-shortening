import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { AiFillUpCircle } from 'react-icons/ai'
import { useState, useEffect } from 'react'

const  MyApp = ({ Component, pageProps }) => {
  const [clientWindowHeight, setClientWindowHeight] = useState('')

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div className=''>
      <NavBar>
      </NavBar>
        <Component {...pageProps} />
      <Footer />
      <AiFillUpCircle onClick={scrollToTop} className={`cursor-pointer animate-bounce fixed right-5 bottom-5 w-10 h-10 transition duration-100 ease-in ${clientWindowHeight > 0 ? 'opacity-50' : 'opacity-0'}`}></AiFillUpCircle>
    </div>  
  )
}

export default MyApp
