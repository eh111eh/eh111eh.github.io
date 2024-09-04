import React from 'react';
import './posts.scss';

const Week12 = () => {
  return (
    <div className="evaluation-container">
      <h1>Week 12</h1>
      <h3>Category: Weeks</h3>
      <p className="date">Written on Sun, Aug 18, 2024.</p>

      <h2>Issues</h2>

      <li>
      <p className="closed-issue">
        <span className="status-label">Closed Issue</span> <a href="https://github.com/sympy/sympy/issues/26917">#26917</a>: <span className="description">Biomechanics docs redirects not present.</span>
      </p></li>
      <blockquote>
      <p>
        The URLs
        <pre>
          <code>
            'doc/src/tutorials/biomechanics/biomechanical-model-example.rst',
            <br />
            'doc/src/tutorials/biomechanics/biomechanics.rst'
          </code>
        </pre>
        no longer exist because these files were moved via{' '}
        <a href="https://github.com/sympy/sympy/pull/26627">PR #26627</a>, which was applied to SymPy 1.13.
      </p>
      <p>
        The new URLs for these files are now:
        <pre>
          <code>
            'doc/src/tutorials/physics/biomechanics/biomechanical-model-example.rst',
            <br />
            'doc/src/tutorials/physics/biomechanics/biomechanics.rst'
          </code>
        </pre>
        as found in the SymPy 1.13.2 documentation site.
      </p>
      <p>
        Since{' '}
        <a href="https://github.com/sympy/sympy/pull/26727">PR #26727</a> further moved:
        <pre>
          <code>'doc/src/tutorials/physics/biomechanics/biomechanics.rst'</code>
        </pre>
        to:
        <pre>
          <code>'doc/src/explanation/modules/physics/biomechanics/biomechanics.rst'</code>
        </pre>
        the redirect is only needed for this change, and it's correctly set in `conf.py` as:
        <pre>
          <code>
            redirects = {'{'}
            <br />
            "tutorials/physics/biomechanics/biomechanics": "../explanation/modules/physics/biomechanics/biomechanics.html",
            <br />
            {'}'}
          </code>
        </pre>
      </p>
      <p>And Jason updated the links without any problems, so he closed this issue.</p>
      </blockquote>

      <li><p className="open-issue">
        <span className="status-label">Open Issue</span> <a href="https://github.com/sympy/sympy/issues/26929">#26929</a>: <span className="description">Simulation of a sliding block on a rotating disc.</span>
      </p></li>
      <blockquote><p>Jason, Timo, and I discussed the pathway of the block.</p></blockquote>

      <h2>Pull Requests</h2>

      <li><p className="open-pr">
        <span className="status-label">Open PR</span> <a href="https://github.com/sympy/sympy/pull/26936">#26936</a>: <span className="description">Add an example of a block on a rotating disc to the tutorial documentation.</span>
      </p></li>
      <ul>
        <li>
          Due to the disorganized and messy code of the SVG file for the schematic diagram, I installed Inkscape and
          redrew the schematic diagram in top view. To resolve the problem of some image components not appearing, I
          directly edited the SVG file code, changing `fill-opacity:0` to `fill-opacity:1` and `stroke:context-stroke` to
          `stroke:#000000`. I also set the background color to white. Now, it correctly displays in dark mode.
        </li>
        <li>
          I rewrote the code starting from the simplest system, consisting of points <b>O</b> and <b>P</b>, without
          including the inertia of the disc and its point <b>Q</b>.
        </li>
        <li>
          As discussed in the weekly meeting, I reset the system to have 2 reference frames, <b>O</b> and <b>P</b>. I
          rewrote the force in `to_loads` as a friction force that includes Stribeck and viscous terms, making it
          compatible with the `CoulombKineticFriction` actuator. I also included the inertia of the disc and its point{' '}
          <b>Q</b>, which starts from the same location as point <b>P</b>, and obtained the equations of motion using
          Kane's method.
        </li>
      </ul>

      <h2>Meeting</h2>
      <p>
        Had a weekly meeting with Jason K. Moore (<a href="https://github.com/moorepants">@moorepants</a>) and Riccardo Di
        Girolamo (<a href="https://github.com/ricdigi">@ricdigi</a>) since Timo Stienstra (
        <a href="https://github.com/tjstienstra">@tjstienstra</a>) is on vacation. We discussed the concept of the{' '}
        <a href="https://github.com/sympy/sympy/pull/26936">simulation code</a>, including the correct position and
        velocity vectors of the block and its point <b>P</b>, reference frames, and the direction of the applied forces. Jason
        will also be on vacation next week.
      </p>

      <h2>Others</h2>
      <p>
        I wrote a <a href="https://github.com/eh111eh/eh111eh.github.io/wiki/(draft)-GSoC-2024-Report-Hwayeon-Kang:-Implementing-Specific-Forces-and-Torques">draft</a> of the final report to submit.
      </p>
      <p>This week marks the final week of the official GSoC coding period.</p>
    </div>
  );
};

export default Week12;