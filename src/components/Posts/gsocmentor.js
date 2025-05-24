import React from 'react';
import './posts.scss';

const GSoCmentor = () => {
  return (
    <div className="evaluation-container">
      <h1>Joined the 2025 GSoC SymPy Mentoring Team</h1>
      <p className="date">Written at home on Saturday, 24 March 2025.</p>
      <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/gsocmentor_registration.PNG?alt=media&token=7a00cfd2-f55e-4788-9d66-b352ebd67155"
            alt="gsocmentor_registration"
            className="cafe-image"
        />
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/gsocmentoringletter.jpg?alt=media&token=0a79c656-f3af-4225-b039-8d2556e2eb23"
            alt="gsoc_mentoring_letter"
            className="cafe-image"
        />
      </div>
      <p>
        After participating as a contributor last summer, one of my mentors, Jason, encouraged me to join the SymPy Mechanics mentoring team
        for the 2025 Google Summer of Code. Thanks to that opportunity, I’ve been working with other mentors to review applications and select
        the most promising projects. I’m now mentoring the project “Symbolic Wrapping Geometries for Musculoskeletal Modeling in SymPy.”
      </p>      
      <p>
        The project focuses on modelling musculoskeletal forces—specifically, how muscles and tendons often wrap around bones and joints along curved surfaces.
        Current tools typically rely on numerical approximations to model these wrapping paths, which can be computationally intensive.
        This project aims to extend SymPy’s mechanics module by introducing three new symbolic wrapping geometry classes: WrappingCone, WrappingEllipsoid, and WrappingToroid.
        Each class will provide symbolic geodesic-length calculations and endpoint tangent vectors.
      </p>
      <p>
        By using closed-form derivations for cones, series expansions for ellipsoids, and local unfolding approximations for tori, the new classes will allow users to model
        complex biomechanical interactions symbolically. These additions will offer both exact expressions (where available) and accurate approximations, enabling researchers
        and educators to explore musculoskeletal pathways analytically within the familiar SymPy ecosystem.
      </p>
      <p>
        We had our first meeting today at 11 am, where we introduced ourselves, set a regular meeting time, cross-checked some important dates,
        shared some advice from my experience as a past contributor, and reviewed the project proposal.
        We also discussed a potential example model for the WrappingCone class.
      </p>
      <p>
        Since this is my first project as a mentor, I think it’s going to be a very exciting summer!
      </p>

    </div>
  );
};

export default GSoCmentor;