import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'; 
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Blog = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  const blogPosts = [
    { title: 'Dyneval Week 1', date: '16 June 2025', link: '/blog/dynevalweek1', external: false },
    { title: 'GSoC Project Mentoring: Presented Atwood Machine and Working on WrappingSphere', date: '8 June 2025', link: '/blog/gsocmentor2', external: false },
    { title: 'Joined the 2025 GSoC SymPy Mentoring Team', date: '24 May 2025', link: '/blog/gsocmentor', external: false },
    { title: 'Accepted for UoE Physics and Astronomy Career Development Scholarship for Summer Research', date: '24 May 2025', link: 'https://www.linkedin.com/posts/hwayeon-kang_im-happy-to-accept-the-2025-physics-and-activity-7332133895284412416-3Tke?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER1EQsBtDZNCu9QnjD1r9hrKqkGd0LcNgo', external: true },
    { title: 'Elected Technical Director of the HumanEd Computer Vision Team', date: '24 May 2025', link: '/blog/humanedegm', external: false },
    { title: '180DC Final-Project Presentation', date: '2 April 2025', link: '/blog/180dcfinalppt', external: false },
    { title: '180DC Mid-Project Presentation', date: '5 Mar 2025', link: '/blog/180dcmidppt', external: false },
    { title: 'Won First Place at Hack The Burgh', date: '4 Mar 2024', link: 'https://www.linkedin.com/posts/hwayeon-kang_im-excited-to-share-that-our-team-slabbers-activity-7302111254427406336-meco?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER1EQsBtDZNCu9QnjD1r9hrKqkGd0LcNgo', external: true },
    { title: 'Robotics Society Week 4, 5, 6', date: '18 Feb 2025', link: '/blog/humaned2', external: false },
    { title: '180DC Week 4, 5, 6', date: '18 Feb 2025', link: '/blog/180dcweek456', external: false },
    { title: 'Attended Staff-Student Liaison Committee (SSLC) as a Representative', date: '8 Feb 2025', link: '/blog/sslc1', external: false },
    { title: '180DC Week 3', date: '1 Feb 2025', link: '/blog/180dctraining', external: false },
    { title: 'Joined the Humanoid Robotics Society as a Robotics Engineer', date: '25 Jan 2025', link: '/blog/humaned1', external: false },
    { title: 'Presented as a speaker at the Google Summer of Code 2024 Lightning Talks', date: '17 October 2024', link: 'https://www.linkedin.com/posts/hwayeon-kang_google-summer-of-code-activity-7255692782734843905-_mue?utm_source=share&utm_medium=member_desktop', external: true },
    { title: 'Joined Students Association as a Programme Representative', date: '8 October 2024', link: '/blog/programmerep1', external: false },
    { title: 'Achieved the Edinburgh Award (Work Experience)', date: '30 September 2024', link: '/blog/edinburghaward', external: false },
    { title: 'GSoC Final Evaluation', date: '23 August 2024', link: '/blog/finalevaluation', external: false },
    { title: 'GSoC Week 12', date: '18 August 2024', link: '/blog/week12', external: false },
    { title: 'GSoC Week 11', date: '9 August 2024', link: '/blog/week11', external: false },
    { title: 'GSoC Week 10', date: '4 August 2024', link: '/blog/week10', external: false },
    { title: 'Singapore ASTAR-IHPC July Report', date: '31 July 2024', link: '/blog/ihpcjuly', external: false },
    { title: 'GSoC Week 9', date: '27 July 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week9.md', external: true },
    { title: 'GSoC Week 8', date: '21 July 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week8.md', external: true },
    { title: 'GSoC Week 7', date: '14 July 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week7.md', external: true },
    { title: 'GSoC Mid Evaluation', date: '12 July 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/01-work-summary/mid-evaluation.md', external: true },
    { title: 'GSoC Week 6', date: '7 July 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week6.md', external: true },
    { title: 'GSoC Week 5', date: '30 June 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week5.md', external: true },
    { title: 'Singapore ASTAR-IHPC June Report', date: '28 June 2024', link: '/blog/ihpcjune', external: false },
    { title: 'GSoC Week 4', date: '23 June 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week4.md', external: true },
    { title: 'GSoC Week 3', date: '16 June 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week3.md', external: true },
    { title: 'GSoC Week 2', date: '9 June 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week2.md', external: true },
    { title: 'GSoC Week 1', date: '2 June 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week1.md', external: true },
    { title: 'Singapore ASTAR-IHPC May Report', date: '31 May 2024', link: '/blog/ihpcmay', external: false },
    { title: 'Note: Hill-Type Muscle Model', date: '30 May 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/03-documents/notes.md', external: true },
    { title: 'GSoC Community Bonding Period', date: '26 May 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/community-bonding-period.md', external: true },
    { title: 'Singapore ASTAR-IHPC April Report', date: '30 April 2024', link: '/blog/ihpcapril', external: false },
    { title: 'Singapore ASTAR-IHPC March Report', date: '29 March 2024', link: '/blog/ihpcmarch', external: false },
    { title: 'Project Presentation in HZDR, Germany', date: '30 August 2023', link: 'https://www.linkedin.com/posts/hwayeon-kang_im-excited-to-update-everyone-on-my-summer-activity-7102698206827876352-lN5i?utm_source=share&utm_medium=member_desktop', external: true },
  ];

  return (
    <>
      <div className="container blog-page">
        <div className="wrapper" data-wrapper-type="inner">
          <div className="repel">
            <div className="headline__meta cluster">
              <h1 className="page-title">
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={'Blog Posts'.split('')}
                  idx={10}
                />
              </h1>
            </div>
            <div className="page-intro">
              <p>Welcome to the blog page. All posts are in chronological order.</p>
            </div>
          </div>
        </div>
        <div className="post-list">
          <div className="wrapper">
            <ol>
              {blogPosts.map((post, index) => (
                <li key={index}>
                  <div className="post post--newsletter" data-post-variant="newsletter">
                    <div className="post__content cluster">
                    <h2 className="post__heading">
                        {/* Conditional check for external or internal link */}
                        {post.external ? (
                          <a href={post.link} target="_blank" rel="noopener noreferrer" onClick={() => window.scrollTo(0, 0)}>
                            {post.title}
                          </a>
                        ) : (
                          <Link to={post.link} onClick={() => window.scrollTo(0, 0)}>
                            {post.title}
                          </Link>
                        )}
                      </h2>
                      <p>
                        <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Blog;