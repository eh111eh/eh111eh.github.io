import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import me from '../../assets/images/me.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['w', 'a', 'y', 'e', 'o', 'n']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <h2>Developer / Physics Undergrad / Blogger</h2>
          <img src={me} alt="Me" className="me-image" />
          <a href="https://drive.google.com/file/d/1EwHP7LS8gQYH7vFdCP49e5vqYQ1GoLHP/view?usp=sharing" className="flat-button" target="_blank" rel="noopener noreferrer">
          Resume
          </a>
          <p>
          Born and raised in Seoul, Korea, I'm currently studying mathematical physics in Edinburgh, UK.
          I took a gap year during the 2023/24 academic year to explore different fields and interests,
          but honestly, I'm still figuring things out.
          </p>
          <p>
          I love going for coffee — you can find some great spots in Edinburgh on my foodie account, @tastes.of.edinburgh.
          I'm also really into Economics.
          Plus, a lot of people have asked about my github id, eh111eh. There’s no deep meaning behind it — it’s just
          the postal code of the flat I lived when I first started using github.
          </p>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/hwayeon-kang/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
              size="2x"
            />
          </a>
          <a
            href="https://github.com/eh111eh"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
              size="2x"
            />
          </a>
        </div>

      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
