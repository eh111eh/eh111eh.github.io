---
title: Week 5
category: Weeks
order: 6
---

### Issues

### Pull Requests

#### Coulomb Friction

> [Pull Request #26412](https://github.com/sympy/sympy/pull/26412)

As discussed in the weekly meeting, I built a simpler system in the test class **TestCoulombFrictionActuator**: The particle is located at a point on a disc surface and is subjected to gravitational and frictional forces. The frictional forces are modelled using the **CoulombFrictionActuator**, and the expected frictional force is defined using a piecewise function. The test validates the correctness of the **CoulombFrictionActuator** by comparing the actuator's force to the expected friction force.

I also tried to compare the mass matrix and forcing functions as done in the mass spring test class, but due to complexity, I only compared the force.

I changed the module to import `sign` from `sympy.series.gruntz` to `sympy`, which resolves the TypeError for sign.

#### API Reference Relocation

> [Pull Request #26727](https://github.com/sympy/sympy/pull/26727)

I changed the directories for the explanation/physics files based on the feedback. I keep failing the doctest as follows, but I'm uncertain about what is causing this error.
```
File "/home/runner/work/sympy/sympy/doc/src/explanation/Modules/Physics/mechanics/autolev_parser.rst", line 82, in autolev_parser.rst
Failed example:
    sympy_code = parse_autolev(open('double_pendulum.al'), include_numeric=True)
Exception raised:
    Traceback (most recent call last):
      File "/opt/hostedtoolcache/Python/3.12.4/x64/lib/python3.12/doctest.py", line 1368, in __run
        exec(compile(example.source, filename, "single",
      File "<doctest autolev_parser.rst[1]>", line 1, in <module>
        sympy_code = parse_autolev(open('double_pendulum.al'), include_numeric=True)
                                   ^^^^^^^^^^^^^^^^^^^^^^^^^^
    FileNotFoundError: [Errno 2] No such file or directory: 'double_pendulum.al'
**********************************************************************
File "/home/runner/work/sympy/sympy/doc/src/explanation/Modules/Physics/mechanics/autolev_parser.rst", line 87, in autolev_parser.rst
Failed example:
    print(sympy_code)
Exception raised:
    Traceback (most recent call last):
      File "/opt/hostedtoolcache/Python/3.12.4/x64/lib/python3.12/doctest.py", line 1368, in __run
        exec(compile(example.source, filename, "single",
      File "<doctest autolev_parser.rst[2]>", line 1, in <module>
        print(sympy_code)
              ^^^^^^^^^^
    NameError: name 'sympy_code' is not defined
**********************************************************************
1 items had failures:
   2 of   3 in autolev_parser.rst
***Test Failed*** 2 failures.
```
Also, I found that there are other errors in the doctest outside of the `autolev_parser.rst` file. However, these errors do not appear on my local laptop, which makes it a bit confusing to figure out.

Also the doc builds without any issues on my local laptop, so I'm also uncertain why it fails to build the doc.
<img width="805" alt="Screenshot 2024-06-28 at 18 50 28" src="https://github.com/eh111eh/eh111eh.github.io/assets/97640870/a1a66faa-b998-4862-882b-d290859a3dac">

### Meeting

On 25 June 2024, I had a code style meeting with **@tjstienstra**. We established a separate Sympy development environment (*sympy-dev*), discussed ways to enhance code style, and reviewed the Coulomb friction test class, the four-bar linkage example, a [relevant thesis](http://dx.doi.org/10.59490/660179a06bf1082286458109), and the [rolling disc model](https://mechmotum.github.io/brim/tutorials/rolling_disc_from_scratch.html).

Also had a weekly meeting with **@moorepants**, **@tjstienstra**, and **@ricdigi**. We discussed **Pull Request #26412** mainly.
Suggestions:
  - Create a separate Python script, execute the example, plot the results, and include it in the test class for easier development.
  - Improve the pathway so that we can define two points sliding through it.
  - Manually build examples or unit tests at the lowest level and then generalise them in the actuator.
  - When working on other people's pull requests, clone the branch and create a new pull request.

### Others
Riccardo opened an issue: [Issue #26730](https://github.com/sympy/sympy/issues/26730)
