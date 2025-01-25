import React from 'react';
import './posts.scss';

const HumanEd1 = () => {
  return (
    <div className="evaluation-container">
      <h1>Joined the Humanoid Robotics Society as a Robotics Engineer</h1>
      <h3>Category: Student Activity</h3>
      <p className="date">Written on Saturday, 25 Jan 2025, in the main library.</p>

      <p>
      Happy New Year! Im back with another post to share my new journey as a Robotics Engineer.
      
      Last summer, my projects revolved around integrating physics and coding. In college,
      I sometimes felt like an imposter because many of my friends were deeply focused on physics,
      while I enjoyed exploring other fields—particularly computer science.
      
      I love physics, but I also love coding, which led me to work in machine learning and open-source development.
      
      While contributing to SymPy, I discovered a newfound interest in mechanical engineering,
      which eventually sparked my interest with robotics. Inspired by this, I started developing
      a humanoid dancing robot controlled through programming. I even sent a proposal to HumanED,
      the University of Edinburgh Humanoid Robotics Society, to ask about using the university's 3D printers
      to build the robot. To my surprise and thankfully, Alvar, the society president, replied and invited me to join them.
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/humaned_intro.jpg?alt=media&token=232623ef-b13c-485a-89c1-0894c4fe669f"
        alt="humaned-day1"
        className="cafe-image"
      />
      <p>
        So, I joined the developed projects team! We'll have project meetings every Wednesday from 5 to 8 PM in 40 George Square.
        One of the ongoing projects is developing a tea-making robot, and we will be heading to the main library soon to print the
        design using 3D printers, which sounds super exciting. 
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/raspberrypi_induction.jpg?alt=media&token=dfe6e049-9277-4365-8ae3-f20cd7a7cd24"
        alt="raspberry-pi"
        className="cafe-image"
      />
      <p>
        To use the 3D printer and other engineering facilities at the university, I needed to complete some inductions and training sessions.
        On the same day as my first society meeting, I attended a Raspberry Pi training session. A technician from uCreate led the session,
        and we built the simplest Raspberry Pi machine—a basic setup that turned an LED light on and off using just a few lines of Python code and linux.
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/linux.jpg?alt=media&token=6304d704-b807-4863-82d2-feb18909e637"
        alt="raspberry-pi"
        className="cafe-image"
      />
      <p>
        I still have two more training sessions to complete: one for general uCreate facilities and another specifically for 3D printing.
      </p>
      <p>
        While working on projects in the society, Ill also continue developing my own robotics project. After the training,
        I plan to 3D print parts for my robot. The idea is still in its early stages, but to explain briefly,
        I aim to develop a humanoid dancing robot controlled through programming. This involves creating three distinct software systems:
        <br/><br/>
        1. A motion capture tool for recording dance movements and generating joint position data.<br/>
        2. A choreography replication software capable of capturing and translating dance movements into a programmable format.<br/>
        3. A robotic control system enabling humanoid robots to interpret and perform the replicated choreography seamlessly.<br/>
      </p>
      <p>
        P.S. I'll also be attending the PLANCKS UK & Ireland physics competition, which will be held in Swansea from February 21 to 23.
        Accommodation is kindly provided, so all I need to do is prepare for the competition and book a ticket from Edinburgh to Swansea.
        The event also includes a tour of the CISM lab on Swansea University Bay Campus, an integrated facility for semiconductor
        research and technological development—which sounds amazing!
        <br/><br/>
        While preparing for coding interviews for summer work, I wrote quick summary notes about <a href="https://github.com/eh111eh/eh111eh.github.io/wiki/Algorithm-Quick-Note">algorithms</a> and <a href="https://github.com/eh111eh/eh111eh.github.io/wiki/System-Design-Quick-Note">system design</a>!
        Ill be adding another note about Linux soon.
      </p>

    </div>
  );
};

export default HumanEd1;