import { useEffect, useState } from 'react'
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
  }, []);

  const blogPosts = [
    { title: 'GSoC 2024: Final Evaluation', date: '23 August 2024', link: '/Posts/final_evaluation.html' },
    { title: 'GSoC 2024: Week 12', date: '18 August 2024', link: '/Posts/week12.html' }

  ];

  return (
    <>
      <div className="container blog-page">
        <header className="headline wrapper">
          <div className="wrapper" data-wrapper-type="inner">
            <div className="repel">
              <div className="headline__meta cluster">
                <h1 className="headline__heading">
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={'Blog Posts'.split('')}
                    idx={15}
                  />
                </h1>
              </div>
              <div className="headline__lede">
                <p>
                  Welcome to the blog page. All posts are in chronological order.
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className="post-list">
          <div className="wrapper">
            <ol>
              {blogPosts.map((post, index) => (
                <li key={index}>
                  <div className="post post--newsletter" data-post-variant="newsletter">
                    <div className="post__content cluster">
                      <h2 className="post__heading">
                        <a href={post.link}>{post.title}</a>
                      </h2>
                      <p>
                        <time dateTime={new Date(post.date).toISOString()}>
                          {post.date}
                        </time>
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