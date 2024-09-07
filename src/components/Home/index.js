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
          <a href="https://drive.google.com/file/d/1l3b0kpFYfilY_XgiJD6EqcKkod1cwGFJ/view?usp=sharing" className="flat-button" target="_blank" rel="noopener noreferrer">
          Resume
          </a>
          <p>
          Born and raised in Seoul, Korea, currently studying mathematical physics in Edinburgh, UK.
          I took a gap year during the 2023/24 academic year to explore different fields and interests.
          During that time, I worked on machine learning, condensed matter physics, and multibody dynamics
          as a developer and research intern in Germany, Singapore, and remotely from Korea.
          </p>

          <p>
          I’ve worked on multiple projects, including:
          <ul>
            <li><a href='https://summerofcode.withgoogle.com/programs/2024/projects/kPT4IkQI'>Implementing specific forces and torques</a><br />
            - Implements three nonlinear force actuators-Duffing spring, Coulomb kinetic friction, and Hill's muscle model-into
            SymPy (sympy.physics.mechanics) and adds their corresponding example models to the documentation.
            </li>
            <li><a href='https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/mpea-crss-private.png?alt=media&token=e48b255d-b880-4a68-b33c-e32e7576c65d'>MPEA-CRSS-Prediction</a><br />
            - Develop a GAN-based regression model and tree-based models to better predict critical resolved shear stress
            from multi-principle element alloys and short range order data.<br />
            - Currently not publicly available since the paper hasn’t been published yet.
            </li>
            <li><a href='https://docs.google.com/presentation/d/14_5BI1k6dh45tAGgxK2JH4x2ieat8ACB5CY66d3LZbQ/pub?start=false&loop=false&delayms=3000&slide=id.g279179e672e_4_965'>Identify range residency from animal tracking data using ML</a><br />
            - Develop tree-based models to analyse animal range residency patterns from GPS datasets.<br />
            - Currently not publicly available since the paper hasn’t been published yet.
            </li>
            <li><a href=''>LungLink Hub</a><br />
            - A ML based web application to predict lung cancer mortality using socioeconomic and health data.
            </li>
          </ul>
          You can also find these projects on the <a href='https://eh111eh.github.io/#/project'>Projects</a> page.
          </p>

          <p>
          I love going for coffee — you can find some great spots in Edinburgh on my foodie account, <a href='https://www.instagram.com/tastes.of.edinburgh/'>@tastes.of.edinburgh</a>.
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
