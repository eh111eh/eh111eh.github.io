import React from 'react';
import './posts.scss';

const Week11 = () => {
  return (
    <div className="evaluation-container">
      <h1>Week 11</h1>
      <h3>Category: Weeks</h3>
      <p className="date">Written on Friday, Aug 9, 2024.</p>

      <h2>Issues</h2>

      <li>
        <p className="open-issue">
          <span className="status-label">Open Issue</span>{' '}
          <a href="https://github.com/sympy/sympy/issues/26929">#26929</a>:{' '}
          <span className="description">Simulation of a sliding block on a rotating disc.</span>
        </p>
      </li>
      <blockquote>
        <p>
          I opened this issue to make sure I understand the system I'll simulate before officially opening a new PR and
          to discuss some points that are unclear to me. 
        </p>
        <p>
            At this point, as described in this issue and the draft PR <a href="https://github.com/sympy/sympy/issues/26917">#26936</a>, there are two main issues:
        </p>
        <ul>
          <li>Incomplete CustomPathway.</li>
          <li>Accurate calculation of the acceleration of point P.</li>
        </ul>
        <p>
            Especially for the CustomPathway, I've worked to create a custom pathway that calculates the arc length as the pathway length, the time derivative of the
            arc length as the extension_velocity, and the inertial force as the to_loads product. So like:
        </p>
        <pre className="code-block">
          <code>
            <span className="code-class">class</span> CustomPathway(me.PathwayBase): <br />
            &emsp;<span className="code-def">    def</span> <span className="code-method">__init__</span>(<span className="code-self">self</span>, point1, point2, m, r): <br />
            &emsp;&emsp;<span className="code-docstring">        """A custom pathway that moves along a rotating disc.</span><br />
            &emsp;&emsp;<span className="code-comment">        We assume that the motion of the block is circular (curved).</span><br />
            <br />
            &emsp;&emsp;<span className="code-comment">        Parameters</span><br />
            &emsp;&emsp;<span className="code-comment">        ==========</span><br />
            &emsp;&emsp;<span className="code-comment">        point1 : Point</span><br />
            &emsp;&emsp;<span className="code-comment">            Point representing the first attachment; a fixed point on the disc.</span><br />
            &emsp;&emsp;<span className="code-comment">            in contact with the block.</span><br />
            &emsp;&emsp;<span className="code-comment">        point2 : Point</span><br />
            &emsp;&emsp;<span className="code-comment">            Point representing the second attachment; a point where the block is</span><br />
            &emsp;&emsp;<span className="code-comment">            located on the disc.</span><br />
            &emsp;&emsp;<span className="code-comment">        m : sympifiable</span><br />
            &emsp;&emsp;<span className="code-comment">            Mass of the block moving along the pathway.</span><br />
            &emsp;&emsp;<span className="code-comment">        r : sympifiable</span><br />
            &emsp;&emsp;<span className="code-comment">            The radius of the circular path of the block. It is the distance from</span><br />
            &emsp;&emsp;<span className="code-comment">            the center of the disc to the block's position.</span><br />
            <br />
            &emsp;&emsp;<span className="code-docstring">        """</span><br />
            <br />
            &emsp;&emsp;<span className="code-init">        super()</span>.<span className="code-init">__init__</span>(point1, point2)<br />
            &emsp;&emsp;<span className="code-self">        self</span>.m = m<br />
            &emsp;&emsp;<span className="code-self">        self</span>.r = r<br />
            <br />
            &emsp;<span className="code-decorator">    @property</span><br />
            &emsp;<span className="code-def">    def</span> <span className="code-method">length</span>(<span className="code-self">self</span>): <br />
            &emsp;&emsp;<span className="code-docstring">        """Length of the pathway.</span><br />
            <br />
            &emsp;&emsp;<span className="code-comment">        The length of the block in a circular (curved) motion can be defined as the</span><br />
            &emsp;&emsp;<span className="code-comment">        arc length, which can be calculated by multiplying the radius of the circular</span><br />
            &emsp;&emsp;<span className="code-comment">        path by the central angle.</span><br />
            <br />
            &emsp;&emsp;<span className="code-docstring">        """</span><br />
            <br />
            &emsp;&emsp;        central_angle = <span className="code-self">self</span>.attachments[1].pos_from(<span className="code-self">self</span>.attachments[0]).magnitude() / <span className="code-self">self</span>.r<br />
            &emsp;&emsp;<span className="code-return">        return</span> <span className="code-self">self</span>.r * central_angle<br />
            <br />
            &emsp;<span className="code-decorator">    @property</span><br />
            &emsp;<span className="code-def">    def</span> <span className="code-method">extension_velocity</span>(<span className="code-self">self</span>): <br />
            &emsp;&emsp;<span className="code-docstring">        """Extension velocity of the pathway.</span><br />
            <br />
            &emsp;&emsp;<span className="code-docstring">        The extension velocity of the pathway is the rate of change of the arc length</span><br />
            &emsp;&emsp;<span className="code-docstring">        with respect to time. When the central angle changes with time, the extension</span><br />
            &emsp;&emsp;<span className="code-docstring">        velocity can be derived from the time derivative of the arc length.</span><br />
            <br />
            &emsp;&emsp;<span className="code-docstring">        """</span><br />
            <br />
            &emsp;&emsp;        angular_velocity = <span className="code-self">self</span>.attachments[1].vel(me.dynamicsymbols._t)<br />
            &emsp;&emsp;<span className="code-return">        return</span> <span className="code-self">self</span>.r * angular_velocity<br />
            <br />
            &emsp;<span className="code-def">    def to_loads</span>(<span className="code-self">self</span>): <br />
            &emsp;&emsp;<span className="code-docstring">        """Loads in the correct format to be supplied to `KanesMethod`.</span><br />
            <br />
            &emsp;&emsp;<span className="code-comment">        Inertial force applied to the block as it moves along the curved pathway on the</span><br />
            &emsp;&emsp;<span className="code-comment">        rotating disc.</span><br />
            <br />
            &emsp;&emsp;<span className="code-docstring">        """</span><br />
            <br />
            &emsp;&emsp;<span className="code-return">        return</span> loads<br />
          </code>
        </pre>
        <p>
        But I'm unsure about this approach because, in case of a ball on a rotating disc, the motion would be circular (circular without friction, ellipse with friction).
        But in case of a block, I don't think the motion would necessarily be circular. At the same time, since we assume the initial velocity is not zero, it's also possible
        that the block has circular motion. Also it's a little uncertain to me how to implement the inertial force in to_loads method.
        </p>
      </blockquote>

      <li>
        <p className="closed-issue">
          <span className="status-label">Closed Issue</span>{' '}
          <a href="https://github.com/sympy/sympy/issues/26917">#26917</a>:{' '}
          <span className="description">Biomechanics docs redirects not present.</span>
        </p>
      </li>
      <blockquote>
        <p>
        Jason opened this issue since biomechanics tutorial and biomechanical-model-example docs directed to a "Page Not Found" error.<br /><br />
        The purpose of the redirect is to ensure URL stability between the released version of SymPy and the current development.
        Since SymPy 1.12 no longer exists but SymPy 1.13 does, adjusting the redirect might not be necessary. I'll double check the URL stability.
        </p>
      </blockquote>

      <h2>Pull Requests</h2>

      <li>
        <p className="merged-pr">
          <span className="status-label">Merged PR</span>{' '}
          <a href="https://github.com/sympy/sympy/pull/26412">#26412</a>:{' '}
          <span className="description">Implement the Coulomb kinetic friction actuator.</span>
        </p>
      </li><blockquote>
      <p>This PR has finally been merged!</p></blockquote>

      <li>
        <p className="draft-pr">
          <span className="status-label">Draft PR</span>{' '}
          <a href="https://github.com/sympy/sympy/pull/26936">#26936</a>:{' '}
          <span className="description">
          Add an example of a block on a rotating disc to the tutorial documentation.
          </span>
        </p>
      </li><blockquote>
      <p>
        I opened a draft PR to add a system of a block on a rotating disc to the tutorial documentation. In this system, the block is located at a distance r from the center of the disc and is subjected to forces, including friction force with additional Stribeck and viscous effects.
      </p>
      <img
        src="https://github.com/user-attachments/assets/86f865c7-4f78-4085-abea-65ed1abb69ea"
        alt="Block on disc"
        className="cafe-image"
      /></blockquote>

      <li>
        <p className="merged-pr">
          <span className="status-label">Merged PR</span>{' '}
          <a href="https://github.com/sympy/sympy/pull/26921">#26921</a>:{' '}
          <span className="description">Fix bicycle example.</span>
        </p>
      </li>
      <blockquote>
        <p>
            Jason introduced me to this PR for review, and I found it interesting, so I was reading some articles to understand this bicycle model.
            But <a href="https://github.com/smichr">@smichr</a> addressed the issue and merged it within a few hours, so unfortunately, there's nothing left for me to do.
            I didn't contribute to this PR, but I found it interesting, so I'm leaving it here.
        </p>
      </blockquote>

      <h2>Meeting</h2>
      <p>
        Had a weekly meeting with Jason K. Moore (<a href="https://github.com/moorepants">@moorepants</a>) and Riccardo
        Di Girolamo (<a href="https://github.com/ricdigi">@ricdigi</a>) since Timo Stienstra (<a href="https://github.com/tjstienstra">@tjstienstra</a>) is on vacation.<br /><br />

        We discussed on two issues mainly:
      </p>
      <ul>
        <li><p className="open-issue">
        <span className="status-label">Open Issue</span> <a href="https://github.com/sympy/sympy/issues/26929">#26929</a>: <span className="description">Simulation of a sliding block on a rotating disc.</span>
      </p></li>
        <ul>
            <li>
                <p>For the simulation, I received advice that I don't need to calculate each force individually (I was considering calculating the total force as F_tot = F_radial + F_tangential,
                    where F_radial would be centrifugal force - centripetal force, and F_tangential would be the friction force). Instead, I need to get the position vector, differentiate it twice
                    to obtain the correct acceleration, and this will give the inertia force, which includes Coriolis force, centrifugal force, and centripetal force. We also discussed creating a custom
                    pathway for the system since it should be able to represent motion along a plane with the extension_velocity property.</p>
            </li>
            <li>
                <p>Jason introduced me to these resources regarding the simulation:<br />
                - <a href="https://github.com/csu-hmc/opty/pull/196">csu-hmc/opty Pull Request #196: Plot ball running on spinning disc</a><br />
                - <a href="https://www.youtube.com/embed/3oM7hX3UUEU?si=Q-rs1nOmikPbSBgZ">youtube video - The Turntable Paradox</a>
                </p>
            </li>
            <li>
                <p>Timo introduced me to some resources to animate the model:<br />
                - <a href="https://mechmotum.github.io/brim/tutorials/four_bar_linkage.html#Visualization">four bar linkage tutorial - visualisation</a><br />
                - <a href="https://moorepants.github.io/learn-multibody-dynamics/simulation.html#animation-with-matplotlib">learn-multibody-dynamics - animation with matplotlib</a>
                </p>
            </li>
        </ul>
        <li>
                <p className="closed-issue">
                <span className="status-label">Closed Issue</span>{' '}
                <a href="https://github.com/sympy/sympy/issues/26917">#26917</a>:{' '}
                <span className="description">Biomechanics docs redirects not present.</span>
                </p>
                - <a>Adjusting the redirect might not be necessary.</a>
            </li>
      </ul>

      <h2>Others</h2>
      <p>Resource Review</p>
      <ul>
        <li>
          <a href="https://github.com/csu-hmc/opty/pull/196">csu-hmc/opty Pull Request #196: Plot ball running on spinning disc</a>.
        </li>
        <li>
          <a href="https://www.youtube.com/embed/3oM7hX3UUEU?si=Q-rs1nOmikPbSBgZ">The Turntable Paradox - YouTube video</a>.
        </li>
        <li>
          <a href="https://mechmotum.github.io/brim/tutorials/four_bar_linkage.html#Visualization">four bar linkage tutorial - visualisation</a>.
        </li>
        <li>
          <a href="https://moorepants.github.io/learn-multibody-dynamics/simulation.html#animation-with-matplotlib">learn-multibody-dynamics - animation with matplotlib</a>.
        </li>
      </ul>
    </div>
  );
};

export default Week11;
