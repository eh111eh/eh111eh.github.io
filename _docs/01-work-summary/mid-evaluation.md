---
title: Midterm Evaluation
category: Work Summary
order: 1
---

It's hard to believe that I'm already halfway through. Time flies! While not many people—or perhaps nobody—might visit or read this blog, it's good to reflect on what I've done so far, so I'm leaving a quick note here. More details on each task are available in the associated links or weekly posts.

Recently, SymPy 1.13.0 has been released, and it's always exciting to see how my work actually influences the community and enhances the user experience.

I'm also excited to share some good news: I've been nominated as an Edinburgh Award awardee. I took the final exam for the Introductory Fields and Waves course in the Playfair Library—well, that's why I don't like the Playfair Library—but this time, I'll be there for the award celebration.

### Summary of Issues and PRs

<span style="color: purple;">Merged</span>, <span style="color: red;">Closed</span>, <span style="color: green;">Open</span>

<span style="color: purple;">Merged PR</span> [#26438](https://github.com/sympy/sympy/pull/26438): Implemented `DuffingSpring` to model the force exerted by a nonlinear spring based on the Duffing equation.

<span style="color: purple;">Merged PR</span> [#26641](https://github.com/sympy/sympy/pull/26641): Added a system consisting of a Duffing oscillator with a pendulum.

<span style="color: purple;">Merged PR</span> [#26627](https://github.com/sympy/sympy/pull/26627): Created a new directory at `doc/src/tutorials/physics/mechanics`, moved biomechanics files from `doc/src/tutorials/` to `doc/src/tutorials/physics/`, and added Duffing files in `doc/src/tutorials/physics/`.

<span style="color: purple;">Merged PR</span> [#26727](https://github.com/sympy/sympy/pull/26727): Moved files in the API Reference to the appropriate locations (Explanation, Tutorials) as discussed in Issue [#25607](https://github.com/sympy/sympy/issues/25607).

<span style="color: red;">Closed PR</span> [#26402](https://github.com/sympy/sympy/pull/26402): First attempt to implement `DuffingSpring`. The merged PR [#26438](https://github.com/sympy/sympy/pull/26438) is based on this PR.

<span style="color: green;">Open PR</span> [#26412](https://github.com/sympy/sympy/pull/26412): Introduced `CoulombKineticFriction` to include Coulomb kinetic friction with Stribeck and viscous effects.

<span style="color: green;">Open PR</span> [#26443](https://github.com/sympy/sympy/pull/26443): Introduced the idea on Hill-Type Muscle Model.

<span style="color: green;">Open PR</span> [#26334](https://github.com/sympy/sympy/pull/26334): Fixed the `#fixme` issue with `_process_rule()` function and added an explanation for the `process_rule()` function.

<span style="color: green;">Open Issue</span> [#25607](https://github.com/sympy/sympy/issues/25607): Participated in the discussion to move prose style docs of `sympy.physics.vector` and `sympy.physics.mechanics` out of the "API Reference".

<span style="color: green;">Open Issue</span> [#26625](https://github.com/sympy/sympy/issues/26625): Discussed the simulation of `DuffingSpring`.

### Feedback from Mentors

TBA

### Reflection

So far, I'm glad to have completed one of the three main objectives of the project, the Duffing spring, and I am currently working on Coulomb friction. The following resources have been very helpful:
- [Learn Multibody Dynamics](https://moorepants.github.io/learn-multibody-dynamics/loads.html#friction)
- [(paper) Friction modelling for robotic applications with planar motion](https://www.semanticscholar.org/paper/Friction-modelling-for-robotic-applications-with-Rögner/a873b52a1b281e5b08819e60c0192b01251da9ac#citing-papers)
- [(paper) A study of friction models and friction compensation](https://www.semanticscholar.org/paper/A-study-of-friction-models-and-friction-Geffen/4860fe5b5533316bc2adaf6b73dc9ff951397210)
- [(paper) Comparison of several muscle modeling alternatives for computationally intensive algorithms in human motion dynamics](https://doi.org/10.1007/s11044-022-09819-y)
- [Hill’s Model for Muscle Physiology and Biomechanics](https://sanlab.psych.ucla.edu/wp-content/uploads/sites/38/2019/11/Morgenland_Venugopal_ECNS-with-Revised-Final.pdf)
- [(paper) Hill-Based Muscle Modeling. In: Müller, B., et al. Handbook of Human Motion](https://doi.org/10.1007/978-3-319-30808-1_203-2)
- [MATLAB Tutorial: the Second Course in Differential Equations, Part 2.3: Duffing equations](https://www.cfm.brown.edu/people/dobrush/am34/Matlab/ch3/duffing.html)
- [MATHEMATICA TUTORIAL  for the Second Course. Part 2.3: Duffing Oscillators](https://www.cfm.brown.edu/people/dobrush/am34/Mathematica/ch3/duffing.html)
- [(paper) The dynamics of the pendulum suspended on the forced Duffing oscillator](https://doi.org/10.48550/arXiv.1202.5937)

With the weekly video chats and communications in GitHub pull requests and issues, I have found the SymPy environment to be very supportive. I have received helpful advice, help, and great suggestions. I have found improvements in both my coding skill and physics understanding, and I am happy with my progress so far.

### Future Work

In the remaining time of GSoC, my goal is to merge <span style="color: green;">Open PR</span> [#26412](https://github.com/sympy/sympy/pull/26412) to complete implementing the Coulomb kinetic friction actuator, and to develop and merge the Hill-Type Muscle model I introduced in <span style="color: green;">Open PR</span> [#26443](https://github.com/sympy/sympy/pull/26443).

I'll also add a modelling system for these two models in the docs page. For Coulomb kinetic friction, I'm considering introducing three models: a block sliding on a surface, a block sliding on an inclined surface, and a block sliding on a rotating disc. For the Hill-Type Muscle model, I'll start with a single muscle and extend the model to more complex and larger systems.

Also, as Jason mentioned at the end of <span style="color: purple;">Merged PR</span> [#26727](https://github.com/sympy/sympy/pull/26727), there are still many files to change and keep track of. I'll continue working on the file structure and directory relocation in the docs page. This is my first experience with reStructuredText and Sphinx, and I find them very interesting.