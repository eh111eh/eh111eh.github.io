---
title: Week 6
category: Weeks
order: 7
---

Written on Sunday, 7 July 2024.

### Issues

N/A

### Pull Requests

#### Coulomb Friction

> [Pull Request #26412](https://github.com/sympy/sympy/pull/26412)

Representing static friction with SymPy is challenging because SymPy is symbolic, and the static friction force, when the relative velocity is zero, depends on the entire system, not just a single pathway or parameter.

Static friction force is more complex than the current result, so it may be worth switching to kinetic Coulomb friction. I will start by modeling this force as kinetic friction, beginning with model A from [Force, Moment, and Torque¶](https://moorepants.github.io/learn-multibody-dynamics/loads.html#friction), and then extend it to include the Stribeck effect (model B) and further viscous effects (model C).

<img width="797" alt="Screenshot 2024-07-07 at 23 33 37" src="https://github.com/eh111eh/eh111eh.github.io/assets/97640870/13cd688e-ccbb-44a8-80b6-104406f8b84b">

#### API Reference Relocation

> [Merged Pull Request #26727](https://github.com/sympy/sympy/pull/26727)

This pull request has been merged. 

Regarding the errors in documentation building, I found that the issue arose from inconsistencies in the directory names: `doc/src/explanation/Modules/Physics/mechanics` and `doc/src/explanation/modules/physics/mechanics`. By renaming `Modules` to `temp` and then to `modules`, and similarly for `Physics`, Git tracked these changes correctly and updated the correct directory structure accordingly.
Errors with `biomechanics.rst` and `autolev_parser.rst` have been resolved by updating backlist.

### Meeting

Had a weekly meeting with Jason K. Moore ([@moorepants](https://github.com/moorepants)) and Timo Stienstra ([@tjstienstra](https://github.com/tjstienstra)) since Riccardo ([@ricdigi](https://github.com/ricdigi)) and I joined individually to discuss the midterm evaluation. We discussed the mid evaluation and received general feedback on my work so far. The mentors are happy with my progress, and we will pass the mid evaluation. I received the following advice:
- When working on Coulomb friction and the hill-type model, it will be helpful to cut the scope to merge the pull request.
- Focus on a single muscle, figure out how it works, then extend to a larger feature and try my own model.

### Others

Riccardo created a pull request: [Pull Request #26773 (Draft)](https://github.com/sympy/sympy/pull/26773). I will look into his work and try to help.
