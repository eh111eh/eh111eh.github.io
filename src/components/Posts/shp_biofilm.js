import React from 'react';
import './posts.scss';
import shpResult from '../../assets/images/shp_result.png';
import shpPoster from '../../assets/images/shp_poster.png';

const ShpBiofilm = () => {
  return (
    <div className="evaluation-container">
      <h1>Senior Honours Project Result: A3</h1>
      <p className="date">Written on Sunday, 15 March 2026, in the main library.</p>

        <img
        src={shpResult}
        alt="Senior Honours Project Result"
        className="large-image"
        />

      <p>
        My Senior Honours Project, <em>"Thermal remodelling of Bacillus subtilis biofilm matrices: rheological
        diversity and surface morphological consequences across environmental isolates,"</em> supervised by
        Dr. Ryan Morris and Prof. Cait MacPhee, has been graded an <b>A3</b>. The full report is available{' '}
        <a href='https://drive.google.com/file/d/19AcgZtecozrMIBviKQpUjJAhS8hEDV70/view?usp=sharing'>here</a>.
      </p>
      <p>
        The project set out to test whether the thermally induced transition from a rigid, EPS/TasA-dominated
        biofilm matrix to a soft, PGA-associated state, previously characterised in the laboratory strain
        NCIB 3610, is conserved across the species or specific to that one strain. I combined oscillatory
        rheometry with Optical Coherence Tomography (OCT) imaging across 7 phylogenetically diverse{' '}
        <em>B. subtilis</em> isolates to link microscopic viscoelastic changes to macroscopic surface structure.
      </p>
      <p>
        A few things I'm proud of from this project:
      </p>
      <ul>
        <li>
          Finding that the answer is clearly "strain-specific, not universal": at 50°C, some isolates
          (NCIB 3610, NRS 2125, NRS 2108) underwent dramatic viscous softening, while others (NRS 2106,
          NRS 2107) retained largely solid-like behaviour, using Welch's t-tests with Bonferroni correction
          to confirm the divergence was statistically significant.
        </li>
        <li>
          Building the full Python data pipeline myself, from interpolating and averaging raw rheology sweeps, to segmenting OCT surface profiles and extracting RMS roughness and dominant wrinkle wavelength via FFT, and correlating rheological and structural metrics across isolates.
        </li>
        <li>
          Discovering that yield strain tracked surface roughness more consistently than bulk stiffness did,
          which pointed to the fact that surface morphology isn't fully explained by bulk rheology alone.
        </li>
      </ul>

        <img
        src={shpPoster}
        alt="Senior Honours Project Poster"
        className="large-image"
        />

      <p>
        This was my first time running a project fully end-to-end, from wet-lab data collection through to writing the statistical analysis pipeline, and it's a project I'm genuinely proud of.
      </p>
    </div>
  );
};

export default ShpBiofilm;