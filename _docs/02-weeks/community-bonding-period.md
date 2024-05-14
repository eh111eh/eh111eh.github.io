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

### Work
Although the project is officially scheduled to start on May 26, I have already begun and am currently focusing on the three patches I've developed so far. As the project progresses, I will extend my efforts to include additional models like Aerodynamic Forces.

#### Duffing Spring Implementation

> [Pull Request #26438](https://github.com/sympy/sympy/pull/26438)

I implemented a new class, `DuffingSpring`, to model the force exerted by a nonlinear spring based on the Duffing equation:

$$F = -\beta x - \alpha x^3$$

where $ x $ is the displacement from the equilibrium position, $\beta$ is the linear spring constant, and $\alpha$ is the coefficient for the nonlinear cubic term.

I also created a unit test to verify that the `DuffingSpring` class functions as expected.

Mentors (@tjstienstra, @moorepants) reviewed the implementation and merged it into `sympy:master`

**Future Tasks** <br>
- Demonstrate the force exerted by a nonlinear spring, based on the Duffing equation, as illustrated in the following example: https://pydy.readthedocs.io/en/latest/examples/mass-spring-damper.html

#### The Coulomb Friction Model Implementation

> [Pull Request #26412](https://github.com/sympy/sympy/pull/26412)

I implemented a new class, `CoulombFrictionActuator`, which models the Coulomb friction, incorporating both static and dynamic friction characteristics in mechanical systems.

The model is represented as follows:

<img width="447" alt="Screenshot 2024-03-29 at 16 24 05" src="https://github.com/sympy/sympy/assets/97640870/99be2edc-1b19-446b-be76-22808af53d4a">

Here, $f_r$ is the tangential force and $f_C (=\mu_d*f_n)$ represents the Coulomb friction constant. $\mu_d$ is a dimensionless parameter describing the coefficient of friction, and it depends on the materials used but not on the velocity or the normal force.

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