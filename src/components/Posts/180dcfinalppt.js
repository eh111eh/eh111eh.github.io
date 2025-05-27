import React from 'react';
import './posts.scss';

const FinalPPT = () => {
  return (
    <div className="evaluation-container">
      <h1>180DC Final-Project Presentation</h1>
      <h3>Category: Student Activity</h3>
      <p className="date">Written at home on Saturday, 2 April 2025.</p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/180dc_certificate.png?alt=media&token=c7131722-b50c-4385-8e25-bfe89fbc1d3c"
        alt="180dc certificate"
        className="cafe-image"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/180finalpresentation.png?alt=media&token=c66793fd-5c4b-4ae3-85d6-f9bb99bfcb1c"
        alt="180finalpresentation"
        className="cafe-image"
      />
      <p>
        After showcasing the in-depth research and analysis we conducted in the mid-project presentation, we have been working on finalising our deliverables for the final presentation and report.
        Our final recommendation is Knack, and we used its free trial to build the demo portal.
        We successfully demonstrated how to integrate Google Sheets with Knack’s built-in system for data management, how to set up the initial database structure, and how to build the portal using imported data.
      </p>
      <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/demo_portal.png?alt=media&token=21ad67ef-1468-4d8d-ac57-ef650cbb9dcf"
            alt="demo_portal"
            className="cafe-image"
        />
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/demo_video.png?alt=media&token=93652909-4070-4be5-a383-654e17f58c3e"
            alt="demo_video"
            className="cafe-image"
        />
      </div>
      <p>
        The actual demo portal was shared before the free trial expired.
        You can view our instructional demo introducing the portal <a href='https://www.youtube.com/watch?v=sOt8WZxesdI'>here</a>.
        A complete, step-by-step guide with detailed instructions is also included in the final report.
      </p>
      <p>
        It’s been a real pleasure working with my team—I’ve learned so much from both the project and my teammates. I hope our paths cross again in the future, and I wish everyone all the best!
      </p>

    </div>
  );
};

export default FinalPPT;