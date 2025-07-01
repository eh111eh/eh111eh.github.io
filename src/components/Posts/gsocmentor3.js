import React from 'react';
import './posts.scss';

const GSoCmentor3 = () => {
  return (
    <div className="evaluation-container">
      <h1>GSoC Project Mentoring: System Modelling Proposal & WrappingSphere Deprecation Discussion</h1>
      <p className="date">Written on Tuesday, 1 July 2025, in the main library.</p>
      <div className="image-container">
        <img
            src=""
            alt=""
            className="cafe-image"
        />
        <img
            src=""
            alt=""
            className="cafe-image"
        />
      </div>

      <h2>Pull Requests</h2>

        <p className="open-pr">
          <span className="status-label">Open PR</span>{' '}
          <a href="https://github.com/sympy/sympy/pull/28135">#28135</a>:{' '}
          <span className="description">Add usage example for WrappingSphere to docs.</span>
        </p>
        <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/wrappingmuscle1.png?alt=media&token=b9b52ce2-8f2a-4bac-8ccd-b4601c849164"
            alt="proposal 1"
            className="cafe-image"
        />
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/wrappingmuscle2.png?alt=media&token=a0659073-ac49-4b89-8c4f-8d9486b90038"
            alt="proposal 2"
            className="cafe-image"
        />
      </div>
      <p>
        Since my mentee was having difficulty understanding the model of a muscle wrapping over a spherical bone in 3D,
        I wrote a detailed proposal explaining the physical background using Lagrangian dynamics. I also provided example code to illustrate how the model can be implemented,
        aiming to help him better grasp and develop it further. The full proposal is available <a href='https://github.com/eh111eh/eh111eh.github.io/wiki/Muscle-wrapping-over-a-spherical-bone-in-3D-space-using-Lagrangian-dynamics'>here</a>.
      </p>

        <p className="open-pr">
          <span className="status-label">Open PR</span>{' '}
          <a href="https://github.com/sympy/sympy/pull/28163">#28163</a>:{' '}
          <span className="description">Modify point_on_surface methods in wrapping geometries.</span>
        </p>
      <p>
        We have also been discussing the deprecation of the <i><b>point_on_surface</b></i> method for the WrappingGeometry classes.
      </p>

    </div>
  );
};

export default GSoCmentor3;