import React from 'react';
import './posts.scss';

const IhpcJune = () => {
  return (
    <div className="evaluation-container">
      <h1>Singapore ASTAR-IHPC June Report</h1>
      <p className="date">Written on Friday, 28 June 2024</p>
      <p>
        This post summarises my work in June and is a copy of the <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/wiki/Project-Phases'>wiki</a> page.
        Since the project repository will remain private until the paper is published, I'm sharing the content here as well.
      </p>

      <p>
        •   Merged pull requests for tree-based models (XGBoost, LightGBM, CatBoost, Random Forest).
      </p>
      <p>
        •   Rearranged the filepaths and directories in Git/GitHub. Now, the directories are more straightforward and clear.
      </p>
      <p>
        •   Since the initial two approaches to implement the CRSS-SRO relationship into GAN are very similar, 
        I found it worthwhile to modify the second approach, <em>myGAN_indirect</em>, to assume that the relationship 
        between CRSS and SRO will be implicitly learned. I calculated the Pearson correlation coefficient between CRSS and SRO, 
        and the result indicates a positive correlation, so I believe this new approach for <em>myGAN_indirect</em> is valid.
      </p>
      <p>
        •   Calculated the runtime for the training and validation steps. <em>myGAN_indirect</em> takes 3.52 seconds (30 epochs) for 
        training and 0.3 seconds (30 epochs) for validation. <em>myGAN_direct</em> takes 3.29 seconds (20 epochs) for training 
        and 0.2 seconds (20 epochs) for validation. The actual runtime of 1-2h could be due to my local cpu/gpu capacity, 
        not the model itself.
      </p>
      <p>
        •   Since I forgot to record not only MAPE but also R-squared, I re-ran all models to record all results.
      </p>
      <p>
        •   Recreated a schematic diagram for a GAN-based regression model.
      </p>
      <p>
        •   Merged the pull request for GAN.
      </p>
      <p>
        •   Add research reference and GAN model description in readme.
      </p>
      <p>
        •   Opened a discussion for the model visualisation and research <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/discussions/14'>Discussion #14: myGAN_indirect structure and visualisation</a>.
      </p>
      <p>
        •   I have been working on transferring the script's library from PyTorch to LibTorch (C++ interface package for PyTorch) in 
        <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/pull/15'>Pull Request #15</a>, but as commented, there's an Apple security issue that prevents executing the project with LibTorch. 
        The same issue was discussed in the <a href='https://github.com/pytorch/pytorch/issues/120606'>PyTorch Issue</a>. It seems macOS does not allow third-party applications that are not 
        signed with Apple-provided certificates to run. I tried several methods to bypass the macOS security check and run LibTorch, 
        but unfortunately, none were successful.
      </p>
      <p>
        •   While addressing LibTorch issue, I found that the regressor is trained solely on real data to predict CRSS values instead of both fake (from the trained, updated generator) and real data (from dataset). 
        So, in Merged <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/pull/16'>Pull Request #16</a>, I updated the training loop so that PyTorch effectively incorporates the generator's enhanced features 
        directly into the training of the regressor. Since I changed the training loop, I re-calculated MAPE, R^2, Running Time, and Average score for real/fake data by discriminator again.
      </p>
      <p>
        •   I've also thought about the structure of the paper. My current idea is to present:
      </p>

      <div className="text-box">
        1. Abstract<br />
        2. Introduction<br />
        <blockquote>
            2-1. What are MPEAs? Why are they important?<br />
            2-2. What are SROs? How are they related to MPEAs? What past research is available on this? Why are they important?<br />
            2-3. Why use GANs? What are the benefits of using GANs?<br /></blockquote>
        3. Methodology<br />
        <blockquote>3-1. Data Preprocessing<br />
            <blockquote>
                    3-1-1. How was the data `CRSS_3nm.csv` created?<br />
                    3-1-2. How was this data preprocessed?<br /></blockquote>
            3-2. ML Model<br /><blockquote>
                    3-2-1. How do the Generator, Discriminator, and Regressor work?<br />
                    3-2-2. Two different approaches: direct vs indirect<br /><blockquote>
                        i. Loss function used in these approaches<br />
                        ii. Optimisation<br /></blockquote></blockquote>
            3-3. Model Evaluation:MAPE, R^2, average score for real/fake data by the discriminator<br />
        </blockquote>
        4. Results<br /><blockquote>
        4-1. Evaluation results<br /></blockquote>
        5. Conclusion<br />
      </div>
      <p>And include visualisation such as:</p>
      <div className='text-box'> 
        i. A schematic diagram for GAN <br />
        ii. A scatter plot of CRSS versus SRO with Pearson Correlation and a heatmap of the correlation 
        matrix to verify the indirect approach
      </div>

      <p>
        •   Submitted the SIPGA Attachment Report.
      </p>
    </div>
  );
};

export default IhpcJune;