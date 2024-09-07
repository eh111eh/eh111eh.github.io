import React from 'react';
import './posts.scss';

const IhpcMarch = () => {
  return (
    <div className="evaluation-container">
      <h1>Singapore ASTAR-IHPC March Report</h1>
      <p className="date">Written on Friday, 29 March 2024</p>
      <p>
        Hello, I am an awardee of the Singapore International Pre-Graduate Award (SIPGA) and as a research intern,
        I have contributed to machine learning research at A*STAR Institute of High Performance Computing (IHPC).
        This research aims to compare the performance between the neural network (GAN) and tree-based models (XGBoost, CatBoost, Random Forest, lightgbm),
        and develop a GAN-based regression model that accounts for the CRSS-SRO relationship to better predict CRSS from MPEAs and SRO. <br /><br />

        This post summarises my work in March and is a copy of the <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/wiki/Project-Phases'>wiki</a> page.
        Since the project repository will remain private until the paper is published, I'm sharing the content here as well.
      </p>

      <p>
        •   Had discussions with my supervisor Dr. Yejun Gu (<a href='https://github.com/johnyejungu'>@johnyejungu</a>) regarding available project options and reviewed research materials.
      </p>
      <p>
        •   Exploration - Project 1
        <ul>
            <li>
                <b>Organised hyperparameter sweep configuration within the WandB platform (lightgbm_sweeps.py)</b>: Here we define the hyperparameter sweep configuration for the LightGBM model,
                specifying the range of values for each hyperparameter to be explored during the sweep. The WandB platform uses this configuration to systematically test different combinations of hyperparameters
                to find the best performing model (More information is available at <a href='https://wandb.ai/hwayeon/lightgbm?nw=nwuserhwayeon'>WandB</a>).
            </li><br /><br />
            <li>
                <b>Trained LightGBM model using hyperparameters tuned with the sweep configuration (lightgbm_wandb.py)</b>: This script is responsible for training the LightGBM model using the hyperparameters provided
                by the WandB sweep. It includes steps to initialize and train the LightGBM model, log the training process and results to WandB, and save the trained model for future use.
            </li><br /><br />
            <li>
                <b>Obtained summary metrics (summary_metrics.py and lgb.csv)</b>: The <em>lgb.csv</em> file contains the summary metrics for each run of the LightGBM model, such as RMSE, R^2, and MAPE, used to evaluate
                the performance of the model. The <em>summary_metrics.py</em> script calculates and summarizes these metrics from the model's predictions and logs them to WandB for each run.
            </li><br /><br />
            <li>
                <b>Compiled a report (LightGBM Sweeps & Summary Report)</b>: This report presents the results of the hyperparameter sweeps, including the performance of different configurations of the LightGBM model.
                It contains visualizations such as plots or tables to compare the metrics of different runs and highlight the best-performing model.
            </li>
        </ul>
      </p><br />
      <p>
        •   Exploration - Project 2
        <ul>
            <li>
                <b>Explored data processing methods for subcube discretisations</b>: Worked on discretising the data into subcubes. The process resulted in the generation of two files: <em>dump.286_s_count_1D.csv</em> 
                and <em>dump.286_s_val_1D.csv</em>, which contain the processed data for model training.
            </li><br /><br />
            <li>
                <b>Worked on automating the data processing step (automated_process_dump_files.ipynb)</b>: The automation of data processing is implemented in these Jupyter notebooks. They streamline the transformation of 
                raw data into a format suitable for machine learning models, resulting in the creation of three files: <em>all_histograms.cs</em>, <em>all_s_count_1D.csv</em>, and <em>all_s_val_1D.csv</em>. 
                These files contain comprehensive datasets that are ready for model training and analysis.
            </li><br /><br />
        </ul>
      </p>
      <p>
        •   Issues
        <ul>
            <li>
                Encountered an issue with disk memory that interrupted the download or unzipping of a zip file: Cleared out 32GB and secured the memory. <br /><br />
                <div className='text-box'>
                    # Terminal command line to check files by disk memory usage in descending order<br /><br />
                    sudo du -h -d 1 /Users | sort -hr
                </div>
                <div className='text-box'>
                    # Command line to permanently delete both file path and file (not recoverable, file path will also be deleted, be cautious)<br /><br />
                    sudo rm -rf /Users
                </div>
                <div className='text-box'>
                # Command line to recreate a file path if accidentally deleted<br /><br />
                mkdir /Users
                </div>
            </li><br /><br />
            <li>
                Faced difficulties with <em>config_list</em> a summary metric as the 'Errors' metric was not found; Resolved the issue with the 'Errors'
                metric by replacing it with MAPE. Feedback from the supervisor is pending.
            </li>
        </ul>
      </p>

    </div>
  );
};

export default IhpcMarch;
