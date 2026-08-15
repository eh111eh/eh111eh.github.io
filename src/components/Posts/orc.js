import React from 'react';
import './posts.scss';
import orcCert from '../../assets/images/orc_cert.png';
import orcPhoto from '../../assets/images/orc_photo.png';

const OrChallengeResult = () => {
  return (
    <div className="evaluation-container">
      <h1>3rd Place at the UK Undergraduate Operational Research Challenge</h1>
      <p className="date">Written on Sunday, 15 February 2026, in the main library.</p>
      
        <img
        src={orcCert}
        alt="OR Challenge Certificate"
        className="cafe-image"
        />
        <img
        src={orcPhoto}
        alt="OR Challenge Team Photo"
        className="cafe-image"
        />

      <p>
        Our project, <em>"Optimised Deployment Strategy for Substation Voltage Regulation,"</em> placed
        3rd out of 200+ competing teams in the UK Undergraduate Operational Research Challenge, run in
        partnership with ENODA. The full write-up is available <a href='https://drive.google.com/file/d/1JJuSLEI2fQKECGKzLEBlWfYNxoXkx83Q/view?usp=sharing'>here</a>.
      </p>
      <p>
        The brief was to identify the 10 most impactful low-voltage distribution networks, out of 20,000
        candidates, for the deployment of a substation-level voltage regulation device. Rather than relying
        on the linear approximations typically used for this kind of screening, we implemented a nonlinear
        recursive quadratic voltage model to capture the feedback loop between voltage drop and current draw
        more accurately.
      </p>
      <p>
        A few things I'm proud of from this project:
      </p>
      <ul>
        <li>
          Monitoring the discriminant of the quadratic voltage equation at every node as a physical feasibility
          gate — a negative discriminant meant the network was heading toward voltage collapse, letting us
          automatically discard infeasible candidates.
        </li>
        <li>
          Going beyond static feasibility by adding a 10% load stress-test and a continuous safety-margin
          metric, so the final shortlist was ranked by long-term resilience rather than just current
          compliance.
        </li>
        <li>
          Screening all 20,000 networks efficiently in Python using NumPy and Pandas, which made the whole
          pipeline reproducible and fast enough to iterate on the ranking logic quickly.
        </li>
      </ul>
      <p>
        It was a great excuse to properly learn how distribution networks behave under seasonal stress, and
        a good reminder that a slightly more complex physical model can be worth it if it changes which
        candidates get filtered out.
      </p>
    </div>
  );
};

export default OrChallengeResult;