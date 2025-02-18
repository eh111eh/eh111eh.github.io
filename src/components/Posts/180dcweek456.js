import React from 'react';
import './posts.scss';

const DCWeek456 = () => {
  return (
    <div className="evaluation-container">
      <h1>180DC Week 4, 5, 6</h1>
      <h3>Category: Student Activity</h3>
      <p className="date">Written on Tuesday, 18 Feb 2025, in the main library.</p>
      <p>
        I cannot disclose specific information about our clients and my work, so I appreciate your understanding.
        I am working with a non-profit organization where medical and legal experts support immigrants, asylum seekers,
        and refugees. Since this project was my first preference, I’m especially glad to be part of this team.
      </p>
      <p>
        I love my team—our team leader and consulting director are incredibly supportive, enthusiastic, and professional
        (they have already worked on multiple projects), and the senior consultants are highly experienced and helpful.
      </p>
      <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/180teammeeting.jpg?alt=media&token=fa112e6d-2d15-4c5e-859f-12445dd27761"
            alt="180-team-meeting"
            className="cafe-image"
        />
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/seniormessage.jpeg?alt=media&token=09ef0be3-4e25-4e1b-8007-b256d3a33b8c"
            alt="180tranining-scratchpaper"
            className="cafe-image"
        />
      </div>
      <h2>Team Meetings</h2>
      <p>
        We allocated objectives, and my objective is to develop a digital portal to efficiently manage scheduling, onboarding,
        and data management. Together with a senior consultant, I have:
      </p>
      <ul>
        <li>Researched potential portal solutions.</li>
        <li>Identified possible security issues due to network security policies.</li>
        <li>Explored the feasibility of developing an in-house portal for the organisation.</li>
        <li>Reviewed similar NGO case studies.</li>
        <li>Brainstormed key questions to ask our professional mentor and clients.</li>
      </ul>
      <p>
        We will conduct a competitive analysis (maybe SWOT) to identify the top five options.
      </p>
      <h2>Meeting with a Professional Mentor</h2>
      <p>
        We had a meeting with our professional mentor, a consultant at a London-based consulting firm.
        He provided valuable insights, and we will now be arranging regular meetings every other week
        to ensure continuous progress.
      </p>

    </div>
  );
};

export default DCWeek456;