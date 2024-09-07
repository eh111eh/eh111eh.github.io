import React from 'react';
import './posts.scss';

const IhpcJuly = () => {
  return (
    <div className="evaluation-container">
      <h1>Singapore ASTAR-IHPC July Report</h1>
      <p className="date">Written on Wednesday, 31 July 2024</p>
      <p>
        This post summarises my work in July and is a copy of the <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/wiki/Project-Phases'>wiki</a> page.
        Since the project repository will remain private until the paper is published, I'm sharing the content here as well.
      </p>
      <p>
        •   Finished drafting a paper in Overleaf. I changed the structure to
      </p>
      <div className='text-box'> 
        1. Abstract<br />
        2. Introduction<br />
        3. Computational methods<br />
        <blockquote>3-1. Data preprocessing<br />
        3-2. Machine learning</blockquote>
        4. Results and discussion<br />
        5. Reference
      </div>
      <p>
        •   Updated the README file accordingly.
      </p>
      <p>
        •   Tried to implement wandb into the GAN (<a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/pull/17'>Pull Request #17</a>). 
        It needs further investigation due to compatibility and the complexity of the training loop.
      </p>

      <h2>Reflection</h2>
      <p>My time in Singapore was an exceptional opportunity for both academic and personal growth. I managed my working visa, paperwork like contracts, 
        and housing entirely on my own, while being asked to self-direct the project and adapt to a new environment. Compared to my experience in Germany, 
        I found that A*STAR is more work-oriented. If you worked with me in Germany and disagree, feel free to DM me—haha.<br /><br />
        
        My main goal here was to enhance my professional skills, not only in machine learning but also in research and problem-solving. 
        I reviewed over 12 papers, outlining the core methodologies and discussing their relevance and application to my project. 
        This significantly improved my understanding of the project, as well as my background knowledge in machine learning and condensed matter 
        physics—particularly MPEAs.<br /><br />

        I also strengthened my documentation skills. To manage my research tasks in a flexible work environment (which turned out to be unexpectedly flexible), 
        I independently prepared monthly reports, scheduled regular meetings with my supervisor, and progressed tasks based on feedback. Through this, 
        I realised that strong documentation is key to staying organised and effective.<br /><br />

        Though I don’t expect my supervisor to find this post, I want to express my deep gratitude to him. He invited me to Singapore, provided helpful papers and data, 
        and offered insightful feedback that I might have missed. This project wouldn’t have been possible without his support.
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/ihpclastemail.jpg?alt=media&token=c45a1e05-4d1f-4ce2-a51f-47b04f148423"
        alt="email from supervisor"
        className="cafe-image"
      />
      <p>
        I also had the chance to participate in two valuable events:<br /><br />
        <ul>
            <li>
                <b>Meet the Startups: Finding your Career Path in Health Technology</b>
            </li>
            <li>
                <b>International Awardees Gathering 2024</b>
            </li>
        </ul>
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/IAG.JPG?alt=media&token=e6f54304-8595-410e-8cf8-bde20dcb4ca2"
        alt="IAG 2024"
        className="cafe-image"
      /><br />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/Meet_the_Startups.HEIC?alt=media&token=4aebeddf-47f2-4ba3-8d2e-0034bc1f11c1"
        alt="Meet the Startups"
        className="cafe-image"
      />
      <p>
      These events were not only informative but also helped me build my network. I connected with two PhD candidates from NUS and China and a master's candidate from Hong Kong. 
      I hope to meet them again in the UK or elsewhere in the future, and of course, we’ll stay in touch wherever we are! <br /><br />
      
      One exciting update: my supervisor and I have decided to publish a paper on this research, and I’ll be the first author! While I’m not sure of the exact 
      publication date, it should be around the end of 2024 or early 2025.<br /><br />
      
      I’m going to miss Singapore—especially one-north. I already do.
      </p><br />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/30A85F34-1CD0-4327-87E1-BCD5A64BEB71.JPG?alt=media&token=50207c8a-9b82-4eea-a334-152acf59f904"
        alt="palm tree"
        className="cafe-image"
      />

    </div>
  );
};

export default IhpcJuly;