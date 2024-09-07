import React from 'react';
import './posts.scss';

const IhpcApril = () => {
  return (
    <div className="evaluation-container">
      <h1>Singapore ASTAR-IHPC April Report</h1>
      <p className="date">Written on Tuesday, 30 April 2024</p>
      <p>
        This post summarises my work in April and is a copy of the <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/wiki/Project-Phases'>wiki</a> page.
        Since the project repository will remain private until the paper is published, I'm sharing the content here as well.
      </p>
      <p>
        •   Implemented Random Forest, CatBoost, and XGBoost to predict CRSS from the MPEAs dataset (CRSS_3nm.csv).
        For more details, see the following Pull Requests: <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/pull/4'>Random Forest</a>, 
        <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/pull/3'>CatBoost</a>, <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/pull/1'>XGBoost</a>.
      </p>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Random Forest</th>
            <th>CatBoost</th>
            <th>XGBoost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sweep</td>
            <td>restful-sweep-3</td>
            <td>stellar-sweep-6</td>
            <td>breezy-sweep-10</td>
          </tr>
          <tr>
            <td>MAPE</td>
            <td>0.1906</td>
            <td>0.1127</td>
            <td>0.1823</td>
          </tr>
          <tr>
            <td><i>R²</i></td>
            <td>0.7416</td>
            <td>0.8788</td>
            <td>0.7012</td>
          </tr>
        </tbody>
      </table>

      <p>We need a model that shows a MAPE between 0.04 and 0.05.</p>

      <p>
        •   Outlined the direction of two projects involving ML 
        applications in MPEAs. For more details, see <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/issues/5'>Issue: Research Direction</a>.
      </p>
      <p>
        •   Conducted a thorough paper review to explore relevant research methodologies and improve the model performance and accuracy of our predictions. 
        Papers were selected based on compatibility with the current project and citation count. 
        I reviewed 12 papers, providing an introduction, summary, and relevance for each. 
        For more details, see <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/wiki/Paper-Review'>Paper Review</a>.
      </p>
      <p>
        •   Based on a paper review, I built two ML models to further improve prediction 
        accuracy: Transfer Learning + cGAN and Few-Shot Learning + cGAN. 
        I also further explored the dataset CRSS_3nm.csv regarding normalisation, 
        how to handle the parameter α′, and evaluation methods. 
        For more details, see <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/discussions/7'>cGAN Brain Storming</a>.
      </p>
      <p>
        •   Had a meeting with Dr. Yejun Gu to discuss the research workflow and the availability of two suggested models. 
        Before everything, we need to first check if GAN works well (in terms of MAPE) solely. 
        We concluded that before proceeding, we first need to check if GAN works well (in terms of MAPE) alone. 
        If it does, then we can try cGAN and more complex models such as Transfer Learning or Few-Shot Learning. 
        Additionally, although my suggested models aim to address small dataset sizes, it turns out that the size of <em>CRSS_3nm.csv</em> is medium, not considerably small.
      </p>
      <p>
        •   Contacted Professor Teng Li from the Department of Mechanical Engineering at the University of Maryland 
        regarding the repository for his research, 'Machine Learning Accelerated, High Throughput, Multi-Objective 
        Optimization of Multiprincipal Element Alloys' (DOI: <a href='10.1002/smll.202102972'>10.1002/smll.202102972</a>). Awaiting a response.
      </p>
    </div>
  );
};

export default IhpcApril;
