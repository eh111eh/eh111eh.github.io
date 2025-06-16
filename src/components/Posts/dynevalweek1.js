import React from 'react';
import './posts.scss';

const Dynevalweek1 = () => {
  return (
    <div className="evaluation-container">
      <h1>Dyneval Week 1</h1>
      <h3>AI Summer Project with Dyneval, funded by the SoPA Scholarship</h3>
      <p className="date">Written on Monday, 16 June 2025, in the main library.</p>
      <p>
        I'm very excited to have started my project at Dyneval. The first week has been amazing—I had the opportunity to visit their labs, get familiar with their work, and begin brainstorming for my project.
      </p>
      <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/dyneval_presentation_1.png?alt=media&token=b6cef30c-563b-4d8f-b3e1-4f596dabae45"
            alt="dyneval-week1-presentation"
            className="cafe-image"
        />
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/dyneval_lab.jpg?alt=media&token=69c8620d-b70c-44cf-bc79-d71293d7d850"
            alt="dyneval-lab"
            className="cafe-image"
        />
      </div>
      
      <h2>Project Overview</h2>
      <p>
        My project focuses on developing an AI-based solution to measure sperm concentration from low-resolution microscopy videos.
        There are two main objectives for this project:
      </p>
      <ol>
        <li>Generate synthetic images using existing cell images. I want to improve the current approach by equalising the background and making overlapping cells more visible.</li>
        <li>Build a new algorithm using a regression-based neural network, so we can expand the target concentration range from 0.1 M/ml to 200 M/ml.</li>
      </ol>

      <h2>Work Summary</h2>
      <h3>Meetings</h3>
      <ul>
        <li>Darryn & Vincent: Introduced the project.</li>
        <li>George: Discussed the dev environment setup.</li>
      </ul>
      <h3>Development Environment Setup</h3>
      <ul>
        <li>Set up Linux, Azure DevOps, VS Code, and DVC.</li>
        <li>Resolved permission issue by generating a PAT.</li>
      </ul>
      <h3>Repository Review</h3>
      <ul>
        <li>Reviewed the entire repo based on the detector README instructions to understand Will’s algorithms.</li>
      </ul>
      <h3>Reports</h3>
      <p>
        I’ve been writing a <a href='https://drive.google.com/drive/folders/1pGzfcUmFGKHBKYKV1yefjPkGDqZ074z5?usp=sharing'>quick note</a> at the end of each day to summarise the work I did, any issues that came up, and ideas, for easily revising my work later, as well as for keeping a memo.
      </p>

      <h2>Future Plan/Agenda</h2>
      <ul>
        <li>Review the entire repository to fully understand Will’s algorithms (e.g., roboflow, ultralytics, mmdetection, etc.).</li>
        <li>Write a README file for the syntheticImages repository.</li>
        <li>Create synthetic images & Research methods for background equalisation.</li>
      </ul>

    </div>
  );
};

export default Dynevalweek1;