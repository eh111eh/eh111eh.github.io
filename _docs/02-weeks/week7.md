---
title: Week 7
category: Weeks
order: 8
---

Written on Sunday, 14 July 2024.

### Issues

N/A

### Pull Requests

#### Coulomb Friction

> [Pull Request #26412](https://github.com/sympy/sympy/pull/26412)

I extended the simple Coulomb kinetic friction to include the Stribeck and viscous effects. Based on the meeting, I updated the test class to use the actual negative and positive velocities, calculate the equations of motion using the **system** class from **sympy.physics.mechanics.system**, and compare the equations of motion. Some errors arise from the docstring in **CoulombKineticFriction**, and they need further investigation to be resolved.

### Meeting

Had a weekly meeting with **@tjstienstra** since **@moorepants** and **@ricdigi** were unavailable at the regular meeting time. We discussed the Coulomb kinetic friction actuator and its test class. Before the meeting, I considered opening two additional pull requests aside from [PR #26412](https://github.com/sympy/sympy/pull/26412): one for kinetic friction with the Stribeck effect, and one for kinetic friction with both the Stribeck and viscous effects, using PR #26412 for simple kinetic friction with a test class for a block sliding on a surface. However, having three separate classes for one type of friction (Coulomb) can be repetitive. For better reproducibility, we decided to extend the Coulomb friction in a single class within one PR.

I also got some technical feedback for the `CoulombKineticFriction` and `TestCoulombKineticFriction` classes. Particularly, in the test class, it’s better not to engineer a separate system. Instead, I’ll update it to test actual positive and negative velocities rather than defining the equations. Additionally, I need to mention in the docstring that users should check the v = 0 case for their systems or state that we assume static friction here will never be strong enough to stop the block from sliding (always sliding).

### Others

Riccardo created a new repository, [jacobian_benchmark](https://github.com/ricdigi/jacobian_benchmark), to investigate different possible Jacobian function implementations in SymPy. Next week, I’ll make time to look over and study his work.

I completed the midterm evaluation.