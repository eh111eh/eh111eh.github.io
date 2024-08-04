---
title: Week 10
category: Weeks
order: 11
---

Written on Sunday, Aug 4, 2024, at my friend([@abeejessie](https://github.com/abeejessie))'s home.

### Issues

#### Enable squash merging in the sympy repo

[Issue #18548: Enable squash merging in the sympy repo](https://github.com/sympy/sympy/issues/18548)

There has been an active discussion on enabling squash merging among contributors. Since Oscar introduced this issue in my [PR](https://github.com/sympy/sympy/pull/26412), I reviewed it.

### Pull Requests

#### Coulomb Friction

> [Pull Request #26412](https://github.com/sympy/sympy/pull/26412)

Docstring:
- Rewrote the friction force equation explicitly and removed duplicate equations.
- Rewrote **assumptions** of the actuator for better readability and reformatted them as an itemised list.
- Added short docstrings to the properties of the actuator.
- Changed the type of parameters from **Expr** to **sympifiable** and stated optional parameters.
- Explained how the sign convention of this actuator works.
- Modify the **example** code in the docstring to print *friction.to_loads()* and *eom*.

Actuator:
- Changed default values and initialiser, and remove setters.
- Change the force to check if the parameter is *None* and determine whether to include the extended terms in the final force.

Unit Test:
- Updated unit tests to use *to_loads* and correctly handle positive/negative velocity cases.

Commit Squashing:
Timo suggested commit squashing for a clearer commit tree, so I tried

- rebase
- replacing with a newly created local branch
- cherry-pick

but none of these approaches were successful.
Jason suggested not to squash, so I stopped the attempts. From Oscar's comment, I learned that there has been an active discussion on enabling squash merging among contributors ([Issue #18548: Enable squash merging in the sympy repo](https://github.com/sympy/sympy/issues/18548)).

### Meeting

Had a weekly meeting with Timo Stienstra ([@tjstienstra](https://github.com/tjstienstra)) and Riccardo Di Girolamo ([@ricdigi](https://github.com/ricdigi)) since Jason K. Moore ([@moorepants](https://github.com/moorepants)) was doing an experiment at that time.

Summary:
- Commit Squashing: Difficult due to the mess of having merge commits. It was proposed to either merge the entire branch or create a new branch from master.

- **Next Steps**: I suggested working on two tasks simultaneously:
    1. Documentation example of the CoulombKineticFriction, where a sliding block would be modeled on a rotating disc.

    2. Implementing the Hill-type muscle model.
    
    We decided to focus on the CoulombKineticFriction and its documentation first, then move on to the Hill-type muscle model. Even if the Hill-type muscle model is not completed by August, I will continue working on it after GSoC.

### Others

N/A
