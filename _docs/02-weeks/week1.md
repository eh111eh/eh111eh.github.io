---
title: Week 1
category: Weeks
order: 2
---

Written on Sunday, 2 June 2024.

### Issues

#### Duffing Spring Example

> [Issue #26625](https://github.com/sympy/sympy/issues/26625)

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

However, I need to adjust the DuffingSpring actuator to return the displacement with the correct sign. Additionally, I should revise the tutorial to demonstrate how to integrate the DuffingSpring into a multibody dynamics model as a general force actuator, and then simulate the resulting equations of motion. Currently, the tutorial solves the differential equations independently of the equations of motion formulated with SymPy mechanics.

Resources:
- [Biomechanical Model Example](https://docs.sympy.org/dev/tutorials/biomechanics/biomechanical-model-example.html)
- [Examples for Physics/Mechanics](https://docs.sympy.org/dev/modules/physics/mechanics/examples.html)
- [PyDy Doc](https://pydy.readthedocs.io/en/latest/index.html#examples)
- [Learn Multibody Dynamics](https://moorepants.github.io/learn-multibody-dynamics/index.html)

### Others

#### Full Duffing Oscillation Actuator

I attempted to implement the full Duffing oscillator, but I found it may not be very practical. This is because when simulating it, I encountered an issue with lambdify not handling derivatives correctly. The error occurs as the SciPyPrinter used within lambdify cannot directly process symbolic derivatives when common subexpression elimination is active. This primarily stems from the way derivatives are managed during the code optimization process, which does not inherently recognise the Derivative type unless it is explicitly supported.

More on this error: [Issue #26404](https://github.com/sympy/sympy/issues/26404)

```python
class DuffingSpring(ForceActuator):
    """A Duffing spring with force as defined by the Duffing equation.

    Explanation
    ===========

    The DuffingSpring class models a spring with a force defined by the Duffing
    equation:
    
    acceleration + delta * velocity + alpha * x + beta * x^3 = gamma * cos(omega * t)

    where delta, alpha, beta, and gamma are parameters of the spring, and x is the displacement.

    Parameters
    ==========
    delta : Expr
        The damping coefficient.
    alpha : Expr
        The linear stiffness coefficient.
    beta : Expr
        The nonlinear stiffness coefficient.
    gamma : Expr
        The forcing amplitude.
    omega : Expr
        The forcing frequency.
    displacement : dynamicsymbols
        The displacement of the spring.
    pathway : PathwayBase
        The pathway that the actuator follows. This must be an instance of a
        concrete subclass of ``PathwayBase``, e.g. ``LinearPathway``.

    Examples
    ========

    >>> from sympy import symbols
    >>> from sympy.physics.mechanics import (DuffingSpring, LinearPathway,
    ...     Point, ReferenceFrame)
    >>> from sympy.physics.vector import dynamicsymbols
    >>> N = ReferenceFrame('N')
    >>> q = dynamicsymbols('q')
    >>> delta, alpha, beta, gamma, omega = symbols('delta alpha beta gamma omega')
    >>> pA, pB = Point('pA'), Point('pB')
    >>> pA.set_vel(N, 0)
    >>> pB.set_pos(pA, q*N.x)
    >>> pB.pos_from(pA)
    q(t)*N.x
    >>> linear_pathway = LinearPathway(pA, pB)
    >>> actuator = DuffingSpring(delta, alpha, beta, gamma, omega, q, linear_pathway)
    >>> actuator
    DuffingSpring(delta, alpha, beta, gamma, omega, q(t), LinearPathway(pA, pB))

    """

    def __init__(self, delta, alpha, beta, gamma, omega, displacement, pathway):
        """Initializer for ``DuffingSpring``.

        Parameters
        ==========
        delta : Expr
            The damping coefficient.
        alpha : Expr
            The linear stiffness coefficient.
        beta : Expr
            The nonlinear stiffness coefficient.
        gamma : Expr
            The forcing amplitude.
        omega : Expr
            The forcing frequency.
        displacement : dynamicsymbols
            The displacement of the spring.
        pathway : PathwayBase
            The pathway that the actuator follows. This must be an instance of
            a concrete subclass of ``PathwayBase``, e.g. ``LinearPathway``.

        """
        self.delta = delta
        self.alpha = alpha
        self.beta = beta
        self.gamma = gamma
        self.omega = omega
        self.displacement = displacement
        self.pathway = pathway

    @property
    def force(self):
        """The force produced by the Duffing spring."""
        t = dynamicsymbols._t
        x = self.displacement
        v = x.diff(t)
        a = v.diff(t)
        delta, alpha, beta, gamma, omega = self.delta, self.alpha, self.beta, self.gamma, self.omega
        return a + delta * v + alpha * x + beta * x**3 - gamma * cos(omega * t)

    @force.setter
    def force(self, force):
        raise AttributeError('Can\'t set computed attribute `force`.')

    @property
    def delta(self):
        """The damping coefficient for the Duffing spring."""
        return self._delta

    @delta.setter
    def delta(self, delta):
        if hasattr(self, '_delta'):
            msg = (
                f'Can\'t set attribute `delta` to {repr(delta)} as it is '
                f'immutable.'
            )
            raise AttributeError(msg)
        self._delta = sympify(delta, strict=True)

    @property
    def alpha(self):
        """The linear stiffness coefficient for the Duffing spring."""
        return self._alpha

    @alpha.setter
    def alpha(self, alpha):
        if hasattr(self, '_alpha'):
            msg = (
                f'Can\'t set attribute `alpha` to {repr(alpha)} as it is '
                f'immutable.'
            )
            raise AttributeError(msg)
        self._alpha = sympify(alpha, strict=True)

    @property
    def beta(self):
        """The nonlinear stiffness coefficient for the Duffing spring."""
        return self._beta

    @beta.setter
    def beta(self, beta):
        if hasattr(self, '_beta'):
            msg = (
                f'Can\'t set attribute `beta` to {repr(beta)} as it is '
                f'immutable.'
            )
            raise AttributeError(msg)
        self._beta = sympify(beta, strict=True)

    @property
    def gamma(self):
        """The forcing amplitude for the Duffing spring."""
        return self._gamma

    @gamma.setter
    def gamma(self, gamma):
        if hasattr(self, '_gamma'):
            msg = (
                f'Can\'t set attribute `gamma` to {repr(gamma)} as it is '
                f'immutable.'
            )
            raise AttributeError(msg)
        self._gamma = sympify(gamma, strict=True)

    @property
    def omega(self):
        """The forcing frequency for the Duffing spring."""
        return self._omega

    @omega.setter
    def omega(self, omega):
        if hasattr(self, '_omega'):
            msg = (
                f'Can\'t set attribute `omega` to {repr(omega)} as it is '
                f'immutable.'
            )
            raise AttributeError(msg)
        self._omega = sympify(omega, strict=True)

    @property
    def displacement(self):
        """The displacement of the Duffing spring."""
        return self._displacement

    @displacement.setter
    def displacement(self, displacement):
        if hasattr(self, '_displacement'):
            msg = (
                f'Can\'t set attribute `displacement` to {repr(displacement)} '
                f'as it is immutable.'
            )
            raise AttributeError(msg)
        self._displacement = displacement

    def to_loads(self):
        """Loads required by the equations of motion method classes."""
        force = self.force
        return self.pathway.to_loads(force)

    def __repr__(self):
        """Representation of a ``DuffingSpring``."""
        return (f'{self.__class__.__name__}({self.delta}, {self.alpha}, '
                f'{self.beta}, {self.gamma}, {self.omega}, {self.displacement}, '
                f'{self.pathway})')
```

```python
class TestDuffingSpring:

    @pytest.fixture(autouse=True)
    def _duffing_spring_fixture(self):
        self.delta = Symbol('delta')
        self.alpha = Symbol('alpha')
        self.beta = Symbol('beta')
        self.gamma = Symbol('gamma')
        self.omega = Symbol('omega')
        self.displacement = dynamicsymbols('x')
        self.velocity = dynamicsymbols('x', 1)
        self.acceleration = dynamicsymbols('x', 2)
        self.pA = Point('pA')
        self.pB = Point('pB')
        self.pathway = LinearPathway(self.pA, self.pB)
        self.N = ReferenceFrame('N')
        self.time = dynamicsymbols._t

    def test_is_force_actuator_subclass(self):
        assert issubclass(DuffingSpring, ForceActuator)

    def test_is_actuator_base_subclass(self):
        assert issubclass(DuffingSpring, ActuatorBase)

    @pytest.mark.parametrize(
        (
            'delta, alpha, beta, gamma, omega, displacement, '
            'expected_delta, expected_alpha, expected_beta, '
            'expected_gamma, expected_omega, force'
        ),
        [
            (
                1,
                1,
                1,
                1,
                1,
                dynamicsymbols('x'),
                S.One,
                S.One,
                S.One,
                S.One,
                S.One,
                dynamicsymbols('x', 2) + dynamicsymbols('x', 1) +
                dynamicsymbols('x') + dynamicsymbols('x')**3 - cos(dynamicsymbols._t)
            ),
            (
                Symbol('delta'),
                Symbol('alpha'),
                Symbol('beta'),
                Symbol('gamma'),
                Symbol('omega'),
                dynamicsymbols('x'),
                Symbol('delta'),
                Symbol('alpha'),
                Symbol('beta'),
                Symbol('gamma'),
                Symbol('omega'),
                dynamicsymbols('x', 2) + Symbol('delta') * dynamicsymbols('x', 1) +
                Symbol('alpha') * dynamicsymbols('x') + Symbol('beta') * dynamicsymbols('x')**3 -
                Symbol('gamma') * cos(Symbol('omega') * dynamicsymbols._t)
            ),
        ]
    )
    def test_valid_constructor(
        self,
        delta,
        alpha,
        beta,
        gamma,
        omega,
        displacement,
        expected_delta,
        expected_alpha,
        expected_beta,
        expected_gamma,
        expected_omega,
        force
    ):
        self.pB.set_pos(self.pA, displacement * self.N.x)
        duffing_spring = DuffingSpring(delta, alpha, beta, gamma, omega, displacement, self.pathway)

        assert isinstance(duffing_spring, DuffingSpring)

        assert hasattr(duffing_spring, 'delta')
        assert isinstance(duffing_spring.delta, ExprType)
        assert duffing_spring.delta == expected_delta

        assert hasattr(duffing_spring, 'alpha')
        assert isinstance(duffing_spring.alpha, ExprType)
        assert duffing_spring.alpha == expected_alpha

        assert hasattr(duffing_spring, 'beta')
        assert isinstance(duffing_spring.beta, ExprType)
        assert duffing_spring.beta == expected_beta

        assert hasattr(duffing_spring, 'gamma')
        assert isinstance(duffing_spring.gamma, ExprType)
        assert duffing_spring.gamma == expected_gamma

        assert hasattr(duffing_spring, 'omega')
        assert isinstance(duffing_spring.omega, ExprType)
        assert duffing_spring.omega == expected_omega

        assert hasattr(duffing_spring, 'displacement')
        assert duffing_spring.displacement == displacement

        assert hasattr(duffing_spring, 'force')
        assert isinstance(duffing_spring.force, ExprType)
        assert duffing_spring.force == force

    @pytest.mark.parametrize('delta', [None, 'delta'])
    @pytest.mark.parametrize('alpha', [None, 'alpha'])
    @pytest.mark.parametrize('beta', [None, 'beta'])
    @pytest.mark.parametrize('gamma', [None, 'gamma'])
    @pytest.mark.parametrize('omega', [None, 'omega'])
    def test_invalid_constructor_not_sympifyable(self, delta, alpha, beta, gamma, omega):
        with pytest.raises(SympifyError):
            _ = DuffingSpring(delta, alpha, beta, gamma, omega, self.displacement, self.pathway)

    def test_invalid_constructor_pathway_not_pathway_base(self):
        with pytest.raises(TypeError):
            _ = DuffingSpring(self.delta, self.alpha, self.beta, self.gamma, self.omega, self.displacement, None)

    @pytest.mark.parametrize(
        'property_name, fixture_attr_name',
        [
            ('delta', 'delta'),
            ('alpha', 'alpha'),
            ('beta', 'beta'),
            ('gamma', 'gamma'),
            ('omega', 'omega'),
            ('displacement', 'displacement'),
        ]
    )
    def test_properties_are_immutable(self, property_name, fixture_attr_name):
        duffing_spring = DuffingSpring(
            self.delta, self.alpha, self.beta, self.gamma, self.omega, self.displacement, self.pathway)
        value = getattr(self, fixture_attr_name)
        with pytest.raises(AttributeError):
            setattr(duffing_spring, property_name, value)

    def test_repr(self):
        self.pB.set_pos(self.pA, self.displacement * self.N.x)
        duffing_spring = DuffingSpring(
            self.delta, self.alpha, self.beta, self.gamma, self.omega, self.displacement, self.pathway)
        expected = ('DuffingSpring(delta, alpha, beta, gamma, omega, x(t), '
                    'LinearPathway(pA, pB))')
        assert repr(duffing_spring) == expected
```
