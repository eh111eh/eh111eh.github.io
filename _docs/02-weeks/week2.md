---
title: Week 2
category: Weeks
order: 3
---

### Issues

#### Move prose style docs of sympy.physics.vector and sympy.physics.mechanics out of "API Reference"

> [Issue #25607](https://github.com/sympy/sympy/issues/25607#issuecomment-2151499993)

In relation to [Merged Pull Request #26627](https://github.com/sympy/sympy/pull/26627), my mentor introduced me to this issue that needs to be resolved. I have carefully read the issue and investigated the relocation of files from the API Reference to either Tutorials, How-to Guides, or Explanations.

### Pull Requests

#### Reorganised Tutorial Directories

> [Merged Pull Request #26627](https://github.com/sympy/sympy/pull/26627)
> [Pull Request #26680](https://github.com/sympy/sympy/pull/26680)

I relocated the tutorial files for biomechanics and created a physics tutorials directory so that we don't have to use redirects to the moved docs. To include these tutorials in the SymPy 1.13 release, my mentor opened PR #26680 against the 1.13 release branch, backporting the changes via `git cherry-pick` to apply the commits from PR #26627 to #26680, whose branch is based off of 1.13.

The directory for tutorials is:

doc/src/tutorials/physics/ <br/>
├── index.rst <br/>
└── biomechanics/ <br/>
    ├── index.rst <br/>
    ├── biomechanics.rst <br/>
    └── biomechanical-model-example.rst

#### Duffing Spring Example

> [Pull Request #26641](https://github.com/sympy/sympy/pull/26641)

I double-checked the actuator and found no errors related to the sign. What I initially thought was an error actually arose from my misunderstanding of how the actuator handles the reference frame and the model. I confirmed that the restoring force is functioning properly.

**Discussion with Mentors:**

- The goal of the tutorial is not to represent a single mass moving in a single direction but to demonstrate how to include the DuffingSpring in a multibody dynamics model as a general force actuator and simulate the resulting equations of motion from the model.

**Read Recommended Resources:**
  - [Biomechanical Model Example](https://docs.sympy.org/dev/tutorials/biomechanics/biomechanical-model-example.html)
  - [SymPy Mechanics Examples](https://docs.sympy.org/dev/modules/physics/mechanics/examples.html)
  - [PyDy Examples](https://pydy.readthedocs.io/en/latest/index.html#examples)
  - [Learn Multibody Dynamics](https://moorepants.github.io/learn-multibody-dynamics/index.html)

In further discussions, we talked about the possibility of adding damping and external forcing terms to the current Duffing actuator and concluded that it might be better not to add those terms. We decided to present a Duffing oscillator with a suspended pendulum as a simple example for the documentation, so I have studied the relevant paper.

**Reference:** [The dynamics of the pendulum suspended on the forced Duffing oscillator](https://doi.org/10.48550/arXiv.1202.5937)

### Meeting

Had a weekly meeting with **@moorepants**, **@tjstienstra**, and **@ricdigi**. There was a technical issue with me failing to join the Zoom meeting, so this should be resolved before the next meeting.

It was a good opportunity to learn about **@ricdigi**'s project, as I was unsure of it before the meeting. His project primarily aims to enhance the performance of SymPy's `physics.mechanics` and `physics.vector modules`.

### Others

N/A