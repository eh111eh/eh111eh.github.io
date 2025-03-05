import React from 'react';
import './posts.scss';

const HumanEd2 = () => {
  return (
    <div className="evaluation-container">
      <h1>Robotics Society Week 4, 5, 6</h1>
      <h3>Category: Student Activity</h3>
      <p className="date">TBA</p>
      <p>
        For the past couple of weeks, our team has been working hard to 3D print all the parts for the tea machine at <a href='https://www.ucreatestudio.is.ed.ac.uk/'>MAKERSPACE</a> in the main library.
        I learned how to use Bambu Lab 3D printers and trimmed unnecessary parts after printing using clippers. Since I completed the Makerspace general induction,
        my student card now grants me access to the space—pretty cool!
      </p>
      <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/3dprinting.jpg?alt=media&token=9911f1ae-72cb-4149-b981-de7d1e1eb5c5"
            alt="3dprinting-bambu"
            className="cafe-image"
        />
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/3dprinted_part.jpg?alt=media&token=ce28be2c-71fa-446a-af15-ee103fcb4091"
            alt="machine-main-part"
            className="cafe-image"
        />
      </div>
      <p>
        All the necessary electronics and components have also arrived, so we’ve assembled them together. I watched some YouTube videos and
        tutorials to learn how electronics and Raspberry Pi work. I also attended a Raspberry Pi workshop hosted by Makerspace.
        Now, I understand the basics, though I still have a few things I need to figure out. Fortunately, our team’s technical director is
        incredibly experienced, and he helped us understand each part and how they function. Below is my quick sketch of these components.
      </p>
      <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/teamachineparts1.jpg?alt=media&token=b506cde3-7dfb-4e12-98aa-f986aa61af81"
            alt="teamachine-parts"
            className="cafe-image"
        />
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/teamachineparts2.JPG?alt=media&token=bd14b7f8-87fd-4145-8f44-06db9802d4f4"
            alt="teamachine-parts-info"
            className="cafe-image"
        />
      </div>
      <p>
        I'm also responsible for writing the Arduino code script for the tea machine's movement, which I'll write in C++.
        <a href='https://github.com/eh111eh/tea-machine'>This repository</a> will be our team's main code repo,
        but since I'm the only one who knows C++, I may end up being fully responsible for this part of the project.
        <br/><br/>
        Anyways, I can’t wait to see the fully assembled tea machine—it’s going to be awesome!
      </p>
      <p>
        P.S. Some of my friends asked if I’m interested in a data science competition and a robotics competition.
        But with March being the busiest month of the semester, I’m not sure if I’ll have time for either. Let’s see how things go!
      </p>
    </div>
  );
};

export default HumanEd2;