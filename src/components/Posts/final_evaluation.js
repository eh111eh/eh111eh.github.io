import React from 'react';
import './posts.scss';

const Finalevaluation = () => {
  return (
    <div className="evaluation-container">
      <h1>Final Evaluation</h1>
      <h3>Category: Work Summary</h3>
      <p className="date">Written on Friday, 23 Aug 2024, in my fifth fav cafe.</p>
      <img
        src="https://github.com/user-attachments/assets/4c2ed5b5-6835-4320-ac2a-402c6453f529"
        alt="Cafepino"
        className="cafe-image"
      />
      <p>
        Although the official GSoC coding period is over, I’m still working on my project to ensure that the project objectives are fully satisfied.
      </p>
      <p>
        The final report, posted on the SymPy wiki page, is available at{' '}
        <a href="https://github.com/sympy/sympy/wiki/GSoC-2024-Report-Hwayeon-Kang:-Implementing-Specific-Forces-and-Torques">
          GSoC 2024 Report Hwayeon Kang: Implementing Specific Forces and Torques
        </a>.
      </p>
      <p>
        The official GSoC project page can be found at{' '}
        <a href="https://summerofcode.withgoogle.com/programs/2024/projects/kPT4IkQI">
          Google Summer of Code 2024 Project: Implementing Specific Forces and Torques
        </a>.
      </p>
      
      <h2>Summary of Issues and PRs</h2>
      <p>After the mid evaluation, I opened 2 PRs, merged one of them, raised 1 issue and closed 1 issue.</p>
      
      <li><p className="merged-pr">
        <span className="status-label">Merged PR</span> <a href="https://github.com/sympy/sympy/pull/26412">#26412</a>: <span className="description">Added a new actuator, CoulombKineticFriction, and its unit test, TestCoulombKineticFriction.</span>
      </p></li>
      
      <li><p className="open-pr">
        <span className="status-label">Open PR</span> <a href="https://github.com/sympy/sympy/pull/26936">#26936</a>: <span className="description">Added an example model, a sliding block on a rotating disc, to the tutorial documentation.</span>
      </p></li>
      
      <li><p className="open-issue">
        <span className="status-label">Open Issue</span> <a href="https://github.com/sympy/sympy/issues/26929">#26929</a>: <span className="description">Discussed some unclear points in the friction example model, including the pathway and the position/velocity calculation of a block.</span>
      </p></li>
      
      <li><p className="closed-issue">
        <span className="status-label">Closed Issue</span> <a href="https://github.com/sympy/sympy/issues/26917">#26917</a>: <span className="description">Resolved the problem of non-working biomechanics docs URLs.</span>
      </p></li>

      <h2>Feedback from Mentors / Certificate</h2>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/final_feedback.jpg?alt=media&token=d98cdca9-013c-4c73-910c-397d1737ca34"
        alt="final_feedback"
        className="cafe-image"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/completion_certificate_2024_contributor.pdf?alt=media&token=7c24a352-163e-4f25-ad7c-ff10b7951830"
        alt="certificate"
        className="cafe-image"
      />

      <h2>Reflection</h2>
      <p>
        I learned a lot during the project and found multibody dynamics to be very interesting. It was a great fortune to meet my mentors as I entered the world of open source. This project wouldn't have been possible without their support. With more enthusiasm and passion for both SymPy and physics that I've developed during GSoC, I will continue contributing to SymPy after GSoC.
      </p>
      <p>
        I would like to thank Jason K. Moore (<a href="https://github.com/moorepants">@moorepants</a>) for helping me establish the initial concepts of the models to implement as actuators, asking questions that led me consider important points I might have missed, and consistently reviewing my PRs and issues. Many thanks to Timo Stienstra (<a href="https://github.com/tjstienstra">@tjstienstra</a>) for consistently reviewing my PRs and issues, helping me write more organised and clear code, and helping me set the concept of example models to add to the documentation.
      </p>

      <h2>Future Work</h2>
      <ul>
        <li>Complete the friction example model, a sliding block on a rotating disc, and merge PR <a href="https://github.com/sympy/sympy/pull/26936">#26936</a>.</li>
        <li>Complete Hill's muscle model actuator and merge PR <a href="https://github.com/sympy/sympy/pull/26443">#26443</a>.</li>
        <li>Add an example model of Hill's muscle model actuator to the documentation, starting with a single muscle.</li>
      </ul>
    </div>
  );
};

export default Finalevaluation;