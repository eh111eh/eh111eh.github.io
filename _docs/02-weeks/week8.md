---
title: Week 8
category: Weeks
order: 9
---

### Issues

N/A

### Pull Requests

#### Coulomb Friction

> [Pull Request #26412](https://github.com/sympy/sympy/pull/26412)

I reformatted the docstring of the actuator to properly represent the mathematical expressions and references. I also added some assumptions about the actuator. The error that arose from the docstring was somehow resolved during these changes.

The past test class for **CoulombKineticFriction** didn't include the `m * u1.diff()` term in the equation of motion and relied heavily on **q1** being either positive or negative to handle the sign function. I modified the test class to add `real=True` for variables, allowing us to properly include `m * u1.diff()` term in the equations of motion without directly engineering **q1**. I also set two variables, **u1_positive** and **u1_negative**, to effectively handle positive and negative velocity cases.

Now, the actuator and its test class look fine. The last task for this friction actuator is **numerical simulation**. Even though the actuator works well symbolically and represents the equations of motion accurately, we need to verify if it works as expected with real numerical values. Based on our meeting discussion, I'm considering numerically simulating a mass-spring system with Coulomb friction, i.e., pressing a mass against a spring on a table with friction. I expect the decay (*x* over *t*) to differ when implementing default friction, default + viscous friction, default + Stribeck friction, and default + viscous + Stribeck friction.

I currently have some errors and issues, but I aim to present the numerical simulation by the end of next week.

### Meeting

Had a weekly meeting with **@tjstienstra**, **@moorepants**, and **@ricdigi**.

Summary:
- Unique commit name
- Actuator
    - Set assumptions and create two different variables, **u1_positive** and **u1_negative**.
    - Set **q1** as `real=True`
- **Numerically Simulate the Actuator**: Simulate a block sliding on a surface or a mass-spring system with viscous, Stribeck, or combined friction. Plot the decay (linear, exponential, etc.) in a Jupyter notebook or in the test class.

### Others

I found SymEngine, a standalone fast C++ symbolic manipulation library, interesting. So, I'm considering working on [Implement solvers for SymEngine](https://github.com/sympy/sympy/wiki/GSoC-Ideas#symengine-projects) or [Improve SymPy integration](https://github.com/sympy/sympy/wiki/GSoC-Ideas#symengine-projects) after successfully completing my project during the GSoC coding period.
