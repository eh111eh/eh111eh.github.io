import React from 'react';
import './posts.scss';

const IhpcMay = () => {
  return (
    <div className="evaluation-container">
      <h1>Singapore ASTAR-IHPC May Report</h1>
      <p className="date">Written on Friday, 31 May 2024</p>
      <p>
        This post summarises my work in May and is a copy of the <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/wiki/Project-Phases'>wiki</a> page.
        Since the project repository will remain private until the paper is published, I'm sharing the content here as well.
      </p>
      <p>
        •   Built a GAN model architecture and developed research methodologies in multiple steps: <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/issues/8'>Issue #8: GAN Architecture</a>.
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/GAN_schematic.png?alt=media&token=e6b937b6-b245-4dcd-88b2-7d82874f708c"
        alt="GAN Schematic"
        className="cafe-image"
      />

      <p>
        •   Wrote preliminary scripts for data preprocessing, constructing a neural network using PyTorch, training functions, and evaluation.
      </p>
      <p>
        •   Following the preliminary scripts, I experimented with different approaches to enhance the GAN model's performance and reduce its 
        running time: <a href='https://github.com/eh111eh/MPEA-CRSS-Prediction/pull/9'>Pull Request #9: GAN</a>. I tested several optimizers and identified the most suitable one based on key metrics: Mean 
        Absolute Percentage Error (MAPE), R-squared values, and the behavior of validation losses over training epochs. 
        Adadelta proved to be the most effective optimizer for our GAN model and dataset, demonstrating the lowest MAPE, highest R-squared, 
        and stable validation loss. The optimal setup was found to be (MAPE 5.6%, runtime of approximately 1 hour).
      </p>
      <p>
        •   After discussions with Dr. Yejun Gu, I learned that CRSS should monotonically increase as the SRO (α′) increases. 
        Consequently, I introduced two methods to implement this relationship (constraint) between CRSS and SRO in the GAN:
        <ul>
            <li>
                <b>Direct Integration in the Learning Process</b>: Modified the loss functions in the training step to include terms that specifically address the CRSS-SRO relationship.
            </li>
            <li>
                <b>Indirect Integration</b>: Added either a constraint layer or a regularization term that does not directly influence the prediction of CRSS from features but ensures that 
                the relationship is maintained more broadly across the model's predictions.
            </li>
        </ul>
      </p>
      <p>
      •   Direct Integration yields better accuracy with a MAPE of 5-6% and a longer running time of approximately 3 hours, 
      whereas Indirect Integration shows slightly less accuracy with a MAPE of 6-7% and a shorter running time of about 1 hour and 30 minutes.
      </p>
      <p>
        •   Continuing to fine-tune the model using both approaches: reducing the running time for Direct Integration 
        and improving the accuracy for Indirect Integration.
      </p>
    </div>
  );
};

export default IhpcMay;
