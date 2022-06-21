import LandingPage from "../components/LandingPage";
import ShortenedLink from "../components/ShortenedLink";
import { useState } from 'react'

const Home = () => {
  const [shortenedLinks, setShortenedLinks] = useState([])

  const onAddLink = (link) => {
    const value = [...shortenedLinks]
    value.push(link)
    setShortenedLinks(value)
  }

  return (
    <>
      <LandingPage addLink={onAddLink} ></LandingPage>
      <div className="mt-24 min-h-screen flex flex-col justify-start items-center space-y-3 pb-10">
        {shortenedLinks.map(link => {
          return (
            <ShortenedLink key={link.id} originalLink={link.originalLink} shortenedLink={link.shortenedLink}  />
          )
        })}
      </div>

      

    </>

  )
}

export default Home;
