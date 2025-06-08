import React from 'react';
import './posts.scss';

const GSoCmentor2 = () => {
  return (
    <div className="evaluation-container">
      <h1>GSoC Project Mentoring: Presented Atwood Machine and Working on WrappingSphere</h1>
      <p className="date">Written at Kilimanjaro Café on Sunday, 8 June 2025.</p>
      <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/atwood.jpg?alt=media&token=19416468-0156-40c8-a4a5-038b787d5861"
            alt="atwood machine"
            className="cafe-image"
        />
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/atwood_idea.png?alt=media&token=96c52b2d-ab31-4a38-a82b-96b5f0d75dd6"
            alt="atwood machine idea"
            className="cafe-image"
        />
      </div>

      <h2>Pull Requests</h2>

      <li>
        <p className="open-pr">
          <span className="status-label">Open PR</span>{' '}
          <a href="https://github.com/sympy/sympy/pull/28098">#28098</a>:{' '}
          <span className="description">Implement "WrappingCone" class to add conical wrapping geometry.</span>
        </p>
        <p className="merged-pr">
          <span className="status-label">Merged PR</span>{' '}
          <a href="https://github.com/sympy/sympy/pull/28111">#28111</a>:{' '}
          <span className="description">Add usage example for WrappingCylinder to SymPy documentation.</span>
        </p>
      </li>
      <p>Over the past two weeks, my mentee Rushabh and I have been working on presenting various
      mechanical models using wrapping geometry actuators: <i>WrappingCylinder</i> and <i>WrappingSphere</i>.
      I suggested simulating an Atwood Machine using the <i>WrappingCylinder</i> actuator to represent the pulley.
      Together with Rushabh and Jason, we merged <a href="https://github.com/sympy/sympy/pull/28111">PR #28111</a>
      and successfully presented the Atwood Machine using <i>WrappingCylinder</i>.</p>

      <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/wrappingsphere_muscle_2d.jpeg?alt=media&token=a9e4f9fe-7e73-41a5-9eff-bcadfd5f0df2"
            alt="muscle wrapping over a bone in 2d"
            className="cafe-image"
        />
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/wrappingsphere_muscle_3d.jpeg?alt=media&token=937c2e46-9c3b-4aa1-8d44-a297fa17773f"
            alt="muscle wrapping over a bone in 3d"
            className="cafe-image"
        />
      </div>

      <li>
        <p className="open-pr">
          <span className="status-label">Open PR</span>{' '}
          <a href="https://github.com/sympy/sympy/pull/28098">#28098</a>:{' '}
          <span className="description">Implement "WrappingCone" class to add conical wrapping geometry.</span>
        </p>
        <p className="closed-pr">
          <span className="status-label">Closed PR</span>{' '}
          <a href="https://github.com/sympy/sympy/pull/28123">#28123</a>:{' '}
          <span className="description">Integrate WrappingSphere into biomechanical model example in SymPy docs.</span>
        </p>
      </li>
      <p>
        We have also been working on simulating another physical model using the <i>WrappingSphere</i> actuator.
        Through the discussion in <a href="https://github.com/sympy/sympy/pull/28123">PR #28123</a>,
        we decided to create a new 3D example, allowing the pathway to wrap over a sphere in three dimensions —
        making it distinct from a cylindrical path.
      </p>

      <p>
        To this end, I proposed modeling the system of a muscle wrapping around a bone. In reality, muscles often wrap
        around bones before attaching to their insertion points, as shown in the diagram I drew above. This wrapping affects
        both the muscle-tendon path length and the direction of force.
      </p>
      
      <div>
        <p>My idea is to:</p>
        <ol>
        <li>
            Derive the muscle length <code>L</code> by geometrically expressing the origin, insertion, and contact points:<br />
            <code>
            L = |r<sub>origin</sub> - r<sub>p1</sub>| + r &theta; + |r<sub>p2</sub> - r<sub>insertion</sub>|
            </code>
            <br />
            where <code>r<sub>origin</sub></code> and <code>r<sub>insertion</sub></code> are the position vectors of the
            muscle origin and insertion points; <code>r<sub>p1</sub></code> and <code>r<sub>p2</sub></code> are contact
            points on the sphere (bone) surface; <code>r</code> is the sphere’s radius, and <code>&theta;</code> is the
            central angle between the contact points.
        </li>
        <li>
            Compute the muscle moment arm and torque:<br />
            <code>r<sub>m</sub>(q) = dL/dq</code>,<br />
            <code>&tau;<sub>muscle</sub> = r<sub>m</sub>(q) &times; T</code><br />
            The muscle tension <code>T</code> depends on the chosen muscle model (e.g., spring-damper or Hill-type).
        </li>
        <li>
            Use the muscle torque in the equation of motion:<br />
            <code>I &ddot;q + C(q, &dot;q) + G(q) = &tau;<sub>muscle</sub></code><br />
            where <code>I</code> is the moment of inertia, <code>C</code> is the Coriolis/centrifugal term,
            and <code>G</code> is the gravity-induced torque.
        </li>
        </ol>
      </div>

      <p>
        In 3D, the muscle path moves on the surface of a sphere rather than being confined to a single plane.
        The shortest path between two points on a sphere is a{" "}
        <a href="https://docs.sympy.org/latest/modules/physics/mechanics/api/wrapping_geometry.html#sympy.physics.mechanics.wrapping_geometry.WrappingSphere.geodesic_length">
        geodesic
        </a>
        . This path curves in spherical coordinates, and its curvature differs from that of a 2D circular arc,
        which cannot lie on a cylinder.
     </p>

    </div>
  );
};

export default GSoCmentor2;