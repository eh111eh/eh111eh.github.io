---
title: Week 1
category: Weeks
order: 2
---

### Issues

#### Duffing Spring Simulation

> [Pull Request #26625](https://github.com/sympy/sympy/issues/26625)

I attempted to simulate and verify the functionality of Duffing spring using Jupyter Notebook. Initially, I defined the problem by deriving the equation of motion for the Duffing system. Next, I numerically solved the equation using `solve_ivp` from `scipy.integrate` and visualized the system. The plots include:

- Displacement over time (time in seconds vs. displacement in meters)
- Velocity over time (time in seconds vs. velocity in meters/second)
- Phase space plot (displacement in meters vs. velocity in meters/second)
- Parameter Exploration
- Long-term Behaviour
- Total Mechanical Energy Over Time
- Duffing Oscillator Restoring Force

While this script illustrates the theoretical outcomes we can expect from the DuffingSpring, it cannot be used in practical applications as it does not employ the actual DuffingSpring actuator.

### Pull Requests

#### Reorganised tutorial directories and set up redirectss

> [Pull Request #26627](https://github.com/sympy/sympy/pull/26627)

I created a new directory at `doc/src/tutorials/physics/mechanics`, moved the biomechanics file from `doc/src/tutorials/` to `doc/src/tutorials/physics/`, added the DuffingSpring simulation Python file into `doc/src/tutorials/physics/mechanics/`, and set up link redirects from `tutorials/biomechanics` to `tutorials/physics/biomechanics`.

Based on feedback, I decided to separate this PR into two: one for the tutorial directory reorganisation and another for adding a tutorial on actuators.

#### Added duffingspring actutator tutorial

> [Pull Request #26641](https://github.com/sympy/sympy/pull/26641)

I created a tutorial document that outlines the use of the DuffingSpring actuator:

- Define necessary variables and parameters.
- Calculate the force and the equation of motion with the DuffingSpring.
- Numerically solve the equation with `solve_ivp` from `scipy.integrate`.
- Visualise the dynamics.

There is an issue with this tutorial and the actuator: incorrect force values for negative displacements. I suspect this arises from the way the DuffingSpring actuator handles displacement. This affected the restoring force in negative displacements and parameter exploration. However, using the `corrected_force` function, the sign issue has been resolved.

We can use the `corrected_force` function or modify the DuffingSpring actuator to return the displacement with the correct sign.