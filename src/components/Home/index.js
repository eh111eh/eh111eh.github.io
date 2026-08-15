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
  const [resumeOpen, setResumeOpen] = useState(false)

  const nameArray = ['w', 'a', 'y', 'e', 'o', 'n']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const resumes = [
    {
      label: 'Quant Trading / Research',
      url: 'https://drive.google.com/file/d/18sd1vhZ2NZ1evBUlhAFLy623kX8FMEsb/view?usp=sharing',
    },
    {
      label: 'Data Science (Pharma & Biotech)',
      url: 'https://drive.google.com/file/d/1xLuj8rupL6Ghhoe6OiA8uiC0GYQT_vto/view?usp=sharing',
    },
    {
      label: 'Strategy Consulting',
      url: 'https://drive.google.com/file/d/1BRnDR8EkC60_XQW1owaBbEwZyOjIPPYQ/view?usp=sharing',
    },
  ]

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
          <h2>Mathematical Physics Student / Quant & ML Researcher</h2>
          <img src={me} alt="Me" className="me-image" />

          <div className="resume-dropdown">
            <button
              type="button"
              className="flat-button"
              onClick={() => setResumeOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={resumeOpen}
            >
              Resume {resumeOpen ? '▲' : '▼'}
            </button>
            {resumeOpen && (
              <div className="resume-menu" role="menu">
                {resumes.map((r) => (
                  <a
                    key={r.label}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    onClick={() => setResumeOpen(false)}
                  >
                    {r.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <p>
            Born and raised in Seoul, Korea, I'm currently studying mathematical physics at the University of Edinburgh, UK, graduating in May 2027.
            I work across quantitative research, machine learning, and applied physics — most recently on biophysics research, GAN-based materials modelling, and open-source scientific computing.
          </p>
          <p>
            I'm especially drawn to problems where physical or biological systems meet data. Since 2023, that's taken me from modelling materials science data in Singapore, to animal movement ecology in Germany, to building computer vision models for cell analysis at Dyneval here in the UK.
          </p>
 
          <p>
          I've worked on multiple projects, including:
          <ul>
            <li><a href='https://drive.google.com/file/d/19AcgZtecozrMIBviKQpUjJAhS8hEDV70/view?usp=sharing'>Thermal Remodelling of Bacterial Biofilm Matrices</a><br />
            - Senior Honours Project, University of Edinburgh.<br/>
            - Quantified thermal biofilm matrix remodelling across 7 <em>B. subtilis</em> isolates using oscillatory rheometry and OCT imaging.
            </li>
            <li><a href='https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/mpea-crss-private.png?alt=media&token=e48b255d-b880-4a68-b33c-e32e7576c65d'>MPEA-CRSS-Prediction</a><br />
            - Built a GAN-based regression model, benchmarked against tree-based baselines, to predict critical resolved shear stress from multi-principal element alloy and short-range order data.<br />
            - Currently not publicly available as the manuscript is in preparation.
            </li>
            <li><a href='https://summerofcode.withgoogle.com/programs/2025/projects/uvXG3nzX'>SymPy Wrapping Geometry Models</a><br />
            - Designed musculotendon-wrapping usage examples (e.g. muscle-over-bone) for SymPy's mechanics module, cited as foundational work in subsequent biomechanical development.
            </li>
            <li><a href='https://docs.google.com/presentation/d/1TvTmirmkErjFoQp1NMz-wO8bNLqeMb8aIwfbcfIIyJg/edit#slide=id.p'>[Hack The Burgh Winning Project] Simulated Market-Making & Arbitrage Trading Algorithms</a><br />
            - Hack The Burgh Winning Project.<br/>
            - Developed trading algorithms in a simulated market with a focus on arbitrage and market-making strategies; earned a PnL of $23K in 20 mins.<br/>
            - Code unavailable as the authority over it belongs to <a href='https://optiver.com/'>Optiver</a>.
            </li>
          </ul>
          To find more projects, please see the <a href='https://eh111eh.github.io/#/project'>Projects</a> page.
          </p>

          <p>
            Outside of research, I'm usually chasing good coffee — you can find some of my favourite Edinburgh spots on my foodie account, <a href='https://www.instagram.com/tastes.of.edinburgh/'>@tastes.of.edinburgh</a> — or working through a sudoku with a cup of it.
            I'm also curious about economics, and yes, people keep asking about my GitHub id, eh111eh: no deep meaning, it's just the postal code of the flat I lived in when I first made the account.
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