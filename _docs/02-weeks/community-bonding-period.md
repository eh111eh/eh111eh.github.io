---
title: Community Bonding Period
category: Weeks
order: 1
---

### Events
#### 7 May: GSoC Contributor Summit
15.00 UTC (2h)

#### 23 May: Q&A with Stephanie Taylor
15.00 UTC

### Meeting
#### 15 May: Intro Meeting with Mentors
15.00 CET
- **Weekly Meeting Schedule:**
  - Starting from June 5, meetings will be held every Wednesday at 3 PM CET.

- **Tasks and Guidance:**
  1. **Simulating & Adding More Examples:**
     - Upload examples in the GitHub Issue.
     - Follow the docstring guide which includes mechanical example sources and refer to biomechanics muscle simulation examples.
  2. **Challenges in Simulation:**
     - Simulating current Coulomb friction can be challenging due to its discontinuity and numerical issues with the PieceWise function. Helpful paper: ["Contact-impact events with friction in multibody dynamics: Back to basics", Mechanism and Machine Theory, vol. 184, 2023.](https://doi.org/10.1016/j.mechmachtheory.2023.105305)
  3. **Collaboration and Peer Review:**
     - Two other students are also working on sympy mechanics. Collaborate with them to help and practice reviewing.

### Work

#### Duffing Spring Implementation

> [Pull Request #26438](https://github.com/sympy/sympy/pull/26438)

I implemented a new class, `DuffingSpring`, to model the force exerted by a nonlinear spring based on the Duffing equation.

I also created a unit test to verify that the `DuffingSpring` class functions as expected.

Mentors (@tjstienstra, @moorepants) reviewed the implementation and merged it into `sympy:master`

**Future Tasks** <br>
- Demonstrate the force exerted by a nonlinear spring, based on the Duffing equation, as illustrated in the following example: https://pydy.readthedocs.io/en/latest/examples/mass-spring-damper.html

#### The Coulomb Friction Model Implementation

> [Pull Request #26412](https://github.com/sympy/sympy/pull/26412)

I implemented a new class, `CoulombFrictionActuator`, which models the Coulomb friction, incorporating both static and dynamic friction characteristics in mechanical systems.

**Future Tasks** <br>
- Build and fully model at least a two-particle system, and simulate it to verify the effectiveness of my force design. Refer to the [Mass-Spring-Damper System Example](https://pydy.readthedocs.io/en/latest/examples/mass-spring-damper.html).
- Once the model proves successful, develop a unit test for the `CoulombFrictionActuator`.
- Make the damping force friction instead of just viscous damping.

#### Hill-Type Muscle Model Implementation

> [Pull Request #26443](https://github.com/sympy/sympy/pull/26443)

I implemented a `HillTypeMuscle` class that inherits from a base musculotendon class. 

**Future Tasks** <br>
- Add unit tests to ensure the class functions correctly.
- Show and demonstrate the functionality of this muscle model. For an example setup, refer to the [SymPy Biomechanics Tutorial](https://docs.sympy.org/dev/tutorials/biomechanics/biomechanics.html#a-simple-musculotendon-model).
- Improve documentation for the `HillTypeMuscle` class.
- Develop new curves for the Hill functions. Start by making copies of all the DeGroote2016 classes and then replace them with the corresponding Hill models.