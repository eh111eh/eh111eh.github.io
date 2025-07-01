import React from 'react';
import './posts.scss';

const Dynevalweek23 = () => {
  return (
    <div className="evaluation-container">
      <h1>Dyneval Week 2 & 3</h1>
      <h1>Week 2</h1>
      <h3>AI Summer Project with Dyneval, funded by the SoPA Scholarship</h3>
      <p className="date">Written on Tuesday, 1 July 2025, in the main library.</p>

      <h2>Work Summary</h2>
      <h2><i>1. Annotation Process with Roboflow</i></h2>
      <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/dynevalweek2annotation.png?alt=media&token=3f7cbe04-b51f-4222-b5c8-bc7e71850031"
            alt="roboflow annotation"
            className="cafe-image"
        />
        <br/>
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/dynevalweek2annotation2.png?alt=media&token=7730ab17-025e-4c71-aedd-53dd0a645808"
            alt="roboflow annotation data"
            className="cafe-image"
        />
      </div>
        <p>- Went through four code scripts for data processing, from image slicing to input data generation.</p>
        <p>- Focused on Roboflow, which automates the handling of unassigned uploaded images processed through the P02 and P03 scripts.</p>


        <h2><i>2. Synthetic Images</i></h2>
      <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/synthetic_image_00000.jpg?alt=media&token=96b31340-46a2-4047-8516-22fa87e320fb"
            alt="synthetic image 1"
            className="cafe-image"
        />
        <br/>
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/synthetic_image_00002.jpg?alt=media&token=9fe51b5b-f6f6-4cbf-83ac-add008e805e0"
            alt="synthetic image 2"
            className="cafe-image"
        />
      </div>
      <p>- Generated 10 synthetic images using two scripts: one for image slicing and the other for synthetic image generation.</p>
      <p>- Issue: Images appear to 'knit' together backgrounds from multiple sources, rather than using a single one.</p>

      <h2><i>3. Backgrounds</i></h2>
      <p>- Updated the dataset_name to use the synthetic version: DS_VM_synthetic_02.</p>
      <p>- Created new directories: synthetic_backgrounds.</p>
      <p>- Added shared code and files from Darryn, and modified the scripts to successfully generate the backgrounds.</p>

      <h1>Week 3</h1>
      <h2>Work Summary</h2>

      <h2><i>1. Breaking Down the Project</i></h2>
      <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/Project%20Phases%20Breakdown.jpg?alt=media&token=657e8b48-9c44-4c0e-8ef2-696302677896"
            alt="project breakdown"
            className="cafe-image"
        />
      <p>I split the project into two parts: first, creating a library of cells, and second, creating a library of images of those cells.</p>

      <h2><i>2. Created a Cell Image Library</i></h2>
      <div className="image-container">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/cell1.png?alt=media&token=e6d61df4-da9f-4b1b-93da-cfda62d40a61"
            alt="cell 1"
            className="cafe-image"
        />
        <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/cell2.png?alt=media&token=5eb62501-e5ea-46ce-a35b-9999f4e95853"
            alt="cell 2"
            className="cafe-image"
        />
      </div>
      <p>Using the previously generated annotation file along with the data files in the same directory, I generated 42,360 cell images and their corresponding metadata.</p>

      <h2><i>3. Created smoother backgrounds</i></h2>
      <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/smoother%20background.png?alt=media&token=30cd8df0-b355-458e-8ee4-7233ce0c4974"
            alt="smoother background"
            className="cafe-image"
        />
      <p>After synthesising the background, I applied a Gaussian blur to smooth the entire canvas. I also added overlapping patches with 75% overlap and blended them, instead of placing patches edge-to-edge. As a result, the synthetic backgrounds are now smoother and more even compared to the previous versions.</p>

      <h2><i>4. Created a Synthetic Image Library</i></h2>
      <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-bfe5b.appspot.com/o/final_synthetic_total.png?alt=media&token=70ff2c88-71b6-43b5-8fea-bdfda7afaa37"
            alt="smoother background"
            className="cafe-image"
        />
      <p>I generated multiple synthetic images and their corresponding annotation files from the cell library I created in one run.</p>

      <h2>Future Plan/Agenda</h2>
      <p>- Resolve directory incompatibility issue.</p>
      <p>- Generate more realistic images.</p>

    </div>
  );
};

export default Dynevalweek23;