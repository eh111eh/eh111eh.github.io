import React from 'react';
import './posts.scss';

const Week10 = () => {
  return (
    <div className="evaluation-container">
      <h1>Week 10</h1>
      <h3>Category: Weeks</h3>
      <p className="date">Written on Sunday, Aug 4, 2024, at my friend(<a href='https://github.com/abeejessie'>@abeejessie</a>)'s home.</p>

      <h2>Issues</h2>

      <li>
        <p className="open-issue">
          <span className="status-label">Open Issue</span>{' '}
          <a href="https://github.com/sympy/sympy/issues/18548">#18548</a>:{' '}
          <span className="description">Enable squash merging in the sympy repo.</span>
        </p>
      </li>
      <blockquote>
        <p>
            There has been an active discussion on enabling squash merging among contributors.
            Since Oscar introduced this issue in my <a href='https://github.com/sympy/sympy/pull/26412'>PR</a>, I reviewed it.
        </p>
      </blockquote>

      <h2>Pull Requests</h2>

      <li>
        <p className="open-pr">
          <span className="status-label">Open PR</span>{' '}
          <a href="https://github.com/sympy/sympy/pull/26412">#26412</a>:{' '}
          <span className="description">Implement the Coulomb kinetic friction actuator.</span>
        </p>
      </li><blockquote>
        <ul>
            <li>
                <p>
                Docstring:<br />
                    - Rewrote the friction force equation explicitly and removed duplicate equations.<br />
                    - Rewrote <b>assumptions</b> of the actuator for better readability and reformatted them as an itemised list.<br />
                    - Added short docstrings to the properties of the actuator.<br />
                    - Changed the type of parameters from <b>Expr</b> to <b>sympifiable</b> and stated optional parameters.<br />
                    - Explained how the sign convention of this actuator works.<br />
                    - Modify the <b>example</b> code in the docstring to print <b>friction.to_loads()</b> and <b>eom</b>.
                </p>
            </li>
            <li>
                <p>
                Actuator:<br />
                    - Changed default values and initialiser, and remove setters.<br />
                    - Change the force to check if the parameter is <b>None</b> and determine whether to include the extended terms in the final force.
                </p>
            </li>
            <li>
                <p>
                Unit Test:<br />
                    - Updated unit tests to use <b>to_loads</b> and correctly handle positive/negative velocity cases.
                </p>
            </li>
            <li>
                <p>
                Commit Squashing:<br />
                Timo suggested commit squashing for a clearer commit tree, so I tried<br /><br />

                - rebase<br />
                - replacing with a newly created local branch<br />
                - cherry-pick<br /><br />

                but none of these approaches were successful.<br />
                Jason suggested not to squash, so I stopped the attempts. From Oscar's comment, I learned that there has been
                an <a href='https://github.com/sympy/sympy/issues/18548'>active discussion</a> on enabling squash merging among contributors.
                </p>
            </li>
        </ul>
      </blockquote>

      <h2>Meeting</h2>
      <p>
        Had a weekly meeting with Timo Stienstra (<a href="https://github.com/tjstienstra">@tjstienstra</a>) and Riccardo
        Di Girolamo (<a href="https://github.com/ricdigi">@ricdigi</a>) since Jason K. Moore (<a href="https://github.com/moorepants">@moorepants</a>) was doing an experiment at that time.<br /><br />

        Summary:
      </p>
      <ul>
        <li>
            <p>
                Commit Squashing: Difficult due to the mess of having merge commits. It was proposed to either merge the entire branch or create a new branch from master.
            </p>
        </li>
        <li>
            <p>
                <b>Next Steps</b>: I suggested working on two tasks simultaneously:<br /><br />
                <ol>
                    <li>
                    Documentation example of the CoulombKineticFriction, where a sliding block would be modeled on a rotating disc.
                    </li>
                    <li>
                    Implementing the Hill-type muscle model.
                    </li>
                </ol><br /><br />
                We decided to focus on the CoulombKineticFriction and its documentation first, then move on to the Hill-type muscle model. Even if the Hill-type muscle model is not completed by August, I will continue working on it after GSoC.
            </p>
        </li>
      </ul>

      <h2>Others</h2>
      <p>N/A</p>
    </div>
  );
};

export default Week10;
