import React from 'react';
import './posts.scss';

const EdinburghAward = () => {
  return (
    <div className="evaluation-container">
      <h1>Achieved the Edinburgh Award (Work Experience)</h1>
      <h3>Category: Student Activity</h3>
      <p className="date">Written on Monday, 30 Sep 2024, in JCMB.</p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/Hwayeon%20Kang%20Edinburgh%20Award(Work%20Experience).pdf?alt=media&token=e1bc0e25-7889-4339-b720-2c06ac908348"
        alt="edinburgh-award-certificate"
        className="cafe-image"
      /><br/>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/Badge-The%20University%20of%20Edinburgh%20The%20Edinburgh%20Award%20-%20Work%20Experience%20-%202024-09-27.png?alt=media&token=a93b0d24-ab01-4f87-bb49-f0d9ec218bee"
        alt="edinburgh-award-badge"
        className="cafe-image"
      />
      <p>
        I finally completed my journey to achieve the Edinburgh Award!<br/><br/><br/>

        Throughout the award period, I focused on improving three development goals:
        Oral Communication, Working with Others, and Finding Solutions, while
        maximizing my impact through my work. As part of the award,
        I volunteered to give a talk at the upcoming GSoC 2024 Lightning Talk,
        which I am very much looking forward to.<br/><br/><br/>

        This experience helped me recognize my skills and career goals and provided a
        great opportunity to connect with other students working in different fields.
      </p>
      <p>
        This award will soon appear on my HEAR (Higher Education Achievement Report),
        and there will be a celebration event in November to recognize this achievement.
      </p>

    </div>
  );
};

export default EdinburghAward;