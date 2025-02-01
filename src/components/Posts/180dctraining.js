import React from 'react';
import './posts.scss';

const ConsultantTraining = () => {
  return (
    <div className="evaluation-container">
      <h1>180DC Week 3 - Training</h1>
      <h3>Category: Student Activity</h3>
      <p className="date">Written on Saturday, 1 Feb 2025, in my room.</p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/180acceptancemail.jpg?alt=media&token=d2fc9e47-7f7f-4d1b-92c0-2d5f8e376f7f"
        alt="acceptance-email"
        className="cafe-image"
      />
      <p>
        Note: This is my first week at 180DC as a junior consultant, but the week numbering will follow the academic term.
      </p>
      <p>
        Hello again! Starting this week, I’ll be uploading blog posts ideally every week to document my work
        as a junior consultant at 180 Degrees Consulting Edinburgh. 180DC is the world’s largest
        university-based consultancy for non-profits and social enterprises. To join, I submitted a written application
        and went through both an individual and a group interview. In this semester’s recruitment cycle,
        70 consultants, including me, were selected from over 210 applicants.
        <br/><br/>
        I know this might be surprising since I study physics, but career-wise, my fundamental goal is
        to make a positive impact on society—to contribute to making the world better. And I believe that impact
        is not limited to scientific research; it’s also possible through consulting with scientific expertise.
        My technical background will allow me to offer strong insights in consultancy, which is why I joined 180DC.
      </p>
      <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/180tranining1.jpg?alt=media&token=c502eff9-289c-4eb6-a5ba-767665439172"
            alt="180-training"
            className="cafe-image"
        />
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/180trainingscratchpaper.jpg?alt=media&token=94d7d037-f7e2-48e3-860d-c12c5d435e7f"
            alt="180tranining-scratchpaper"
            className="cafe-image"
        />
      </div>
      <h2>Training Sessions</h2>
      <p>
        Before jumping into the project, all junior consultants are required to complete three days of training sessions.
        The executive board, particularly Joshua Pert, the Head of Training & Welfare, conducted the sessions,
        and it was great to learn various tools, metrics, and consulting methodologies.
        <br/><br/>
        For some reason, one key takeaway stuck with me for a long time: “Please reply to emails within 48 hours.”
        Not sure why, but it left an impression. For future reference, <a href="https://docs.google.com/document/d/1RF-eEbYRTzW4xbkSyDR2dhy0cZ7t-bIH5DuxvgwKDbg/edit?usp=sharing">I summarised the training content and made a note of everything we learned</a>.
      </p>
      <h2>Case Competition</h2>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/180casecompetitiongroup.jpg?alt=media&token=e92f63c5-27b2-459c-b714-37846c0b3eb2"
        alt="180training-case-competition"
        className="cafe-image"
      />
      <p>
        On the third day of training, we also participated in a group case competition. It was a great opportunity to apply
        the skills and knowledge I gained during training and get a taste of what it’s like to work in consulting with a team.
        I’m not sure if I can share the case statement, so I’ll only share <a href="https://drive.google.com/file/d/1afBU5YGjHJqQPxPgTtldVbyN2jk56IyE/view?usp=sharing">my team’s presentation slides</a>.
        I mainly worked on the SWOT analysis, and since the competition was for practice, there was no winning team.
        Still, I’ll admit I was a little disappointed—because I genuinely believe my team delivered the best analysis
        and recommendations!
      </p>
      <p>
        I’ve also submitted my project preferences, so hopefully, I’ll find out soon which project I’ve been assigned to.
      </p>
      <h2>P.S.</h2>
      <p>
        After today’s case competition, I received emails from two different students at my university inviting me to
        join their teams for a tech startup competition happening this April. They came across my LinkedIn profile and
        thought my experience in ML and robotics would be valuable for their team and project. Let’s see where this leads!
      </p>


    </div>
  );
};

export default ConsultantTraining;