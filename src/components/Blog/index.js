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
    { title: 'GSoC 2024: Final Evaluation', date: '23 August 2024', link: '/blog/finalevaluation', external: false },
    { title: 'GSoC 2024: Week 12', date: '18 August 2024', link: '/blog/week12', external: false },
    { title: 'GSoC 2024: Week 11', date: '9 August 2024', link: '/blog/week11', external: false },
    { title: 'GSoC 2024: Week 10', date: '4 August 2024', link: '/blog/week10', external: false },
    { title: 'GSoC 2024: Week 9', date: '27 July 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week9.md', external: true },
    { title: 'GSoC 2024: Week 8', date: '21 July 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week8.md', external: true },
    { title: 'GSoC 2024: Week 7', date: '14 July 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week7.md', external: true },
    { title: 'GSoC 2024: Mid Evaluation', date: '12 July 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/01-work-summary/mid-evaluation.md', external: true },
    { title: 'GSoC 2024: Week 6', date: '7 July 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week6.md', external: true },
    { title: 'GSoC 2024: Week 5', date: '30 June 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week5.md', external: true },
    { title: 'GSoC 2024: Week 4', date: '23 June 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week4.md', external: true },
    { title: 'GSoC 2024: Week 3', date: '16 June 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week3.md', external: true },
    { title: 'GSoC 2024: Week 2', date: '9 June 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week2.md', external: true },
    { title: 'GSoC 2024: Week 1', date: '2 June 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/week1.md', external: true },
    { title: 'Note: Hill-Type Muscle Model', date: '30 May 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/03-documents/notes.md', external: true },
    { title: 'GSoC 2024: Community Bonding Period', date: '26 May 2024', link: 'https://github.com/eh111eh/gsoc-blog/blob/main/_docs/02-weeks/community-bonding-period.md', external: true }
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