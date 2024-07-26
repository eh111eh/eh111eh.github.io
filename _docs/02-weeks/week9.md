---
title: Week 9
category: Weeks
order: 10
---

Written on Friday, 26 July 2024, in my fav cafe.

### Issues

N/A

### Pull Requests

#### Coulomb Friction

> [Pull Request #26412](https://github.com/sympy/sympy/pull/26412)

Since **CoulombKineticFriction** treats the normal force as a non-negative scalar, there are limitations in the types of friction models this actuator can cover, such as friction in a curved pathway and cylindrical joints in 3D space. Therefore, I made new commits with two friction actuator classes: **CoulombKineticFriction** and **CoulombKineticFriction2**. The latter considers the normal force as a vector. **CoulombKineticFriction2** doesn't include a viscous term since the calculated force should be either a scalar or a vector. The *to_loads* method is added to ensure compatibility with various pathways, including *WrappingPathway*.
Accordingly, I created new test classes: **TestCoulombKineticFriction2**, and **TestCylinderFriction**, which aims to test a cylinder sliding along a curve in 3D space.

After discussing this in a meeting, I decided to focus only on **CoulombKineticFriction** and delet **CoulombKineticFriction2**. If time allows, it would be great to re-review and develop this approach because it covers a wider range of friction cases.

In previous **CoulombKineticFriction** had 7 main problems:
i. Not enough explanation in the docstring.
ii. Inconsistency in variable names.
iii. Variable name of *v_s*.
iv. The integration freezes when *v_s* is zero.
v. Some integration routines fail on the force sign switch (or get bogged down).

To address these issues:
    - Updated the docstring with example codes, and relaxed the explanation.
    - Standardised variable names based on a paper [Rogner2017].
    - Changed the variable name *v_s* from the coefficient of the sliding friction to the Stribeck friction coefficient.
    - Set the default value and added an if loop in the initialiser to ensure the actuator can handle the zero *v_s* case.
    - Add a simple unit test to check if the friction force is zero when the normal force is zero.

I also used two codes, **Code 1** and **Code 2**, to test the actuator.
**Code 1** checks if the calculated friction force is zero when the normal force is zero and to test different combinations of parameters, including *None* values. Also I tried to simulate with different parameter sets.

```
import sympy as sm
import numpy as np
import matplotlib.pyplot as plt
from sympy.physics.mechanics import (dynamicsymbols, ReferenceFrame, Point,
                                     LinearPathway, CoulombKineticFriction,
                                     LinearSpring, KanesMethod, Particle)
from scipy.integrate import solve_ivp

# Define variables
x, v = dynamicsymbols('x, v', real=True)
m, g, k, mu_k, mu_s, v_s, sigma = sm.symbols('m, g, k, mu_k, mu_s, v_s, sigma')

# Define the reference frame and points
N = ReferenceFrame('N')
O, P = Point('O'), Point('P')
O.set_vel(N, 0)
P.set_pos(O, x*N.x)
P.set_vel(N, v*N.x)

# Define pathway
pathway = LinearPathway(O, P)

friction = CoulombKineticFriction(mu_k, m*g, pathway,
                                  v_s=v_s, sigma=sigma, mu_s=mu_k)
spring = LinearSpring(k, pathway)

block = Particle('block', point=P, mass=m)

kane = KanesMethod(N, (x,), (v,), kd_eqs=(x.diff() - v,))
kane.kanes_equations((block,), friction.to_loads() + spring.to_loads())

s = (x, v)
p = (m, g, k, mu_k, mu_s, v_s, sigma)

eval_rhs = sm.lambdify((s, p), kane.rhs())

# Initial conditions
initial_conditions = [0.1, 0.0]  # [initial displacement, initial velocity]

# Time span for the simulation
t_span = (0, 20)  # Simulate from t=0 to t=20
t_eval = np.linspace(t_span[0], t_span[1], num=401)

solutions = []
parameter_sets = [
    (1.0, 9.81, 40.0, 0.1, 0.0, 0.0, 0.0),  # mu_k
    (1.0, 9.81, 40.0, 0.0, 0.1, 0.0, 0.0),  # mu_s
    (1.0, 9.81, 40.0, 0.0, 0.0, 0.01, 0.0),   # v_s
    (1.0, 9.81, 40.0, 0.0, 0.0, 0.0, 0.1), # sigma
]

# ------------------ Check if calculated friction force is 0 when normal force is 0 ------------------
f_n_zero_test = CoulombKineticFriction(mu_k, 0, pathway, v_s=v_s, sigma=sigma, mu_s=mu_k)
f_n_zero_force = f_n_zero_test.force
print(f"Friction force when normal force is zero: {f_n_zero_force}")

# ------------------ Test different combinations of parameters, including None values ------------------
test_parameters = [
    (1.0, 9.81, 40.0, None, 0.2, 0.1, 0.05),  # mu_k=None, should use default 1.0
    (1.0, 9.81, 40.0, 0.1, None, 0.1, 0.05),  # mu_s=None, should default to mu_k
    (1.0, 9.81, 40.0, 0.1, 0.2, None, 0.05),  # v_s=None, should default to 0.01
    (1.0, 9.81, 40.0, 0.1, 0.2, 0.1, None),   # sigma=None, should default to 0
]

for i, params in enumerate(test_parameters):
    mu_k_val, g_val, k_val, mu_k, mu_s, v_s, sigma = params
    friction_test = CoulombKineticFriction(mu_k, mu_k_val * g_val, pathway, v_s=v_s, sigma=sigma, mu_s=mu_k)
    force_val = friction_test.force
    print(f"Test {i+1}: Friction force with parameters {params}: {force_val}")

# ------------------ Simulation with different parameter sets ------------------
for p_vals in parameter_sets:
    sol = solve_ivp(lambda t, x: eval_rhs(x, p_vals).squeeze(), t_span,
                    initial_conditions, t_eval=t_eval)
    solutions.append(sol)

fig, ax = plt.subplots()
labels = ['mu_k', 'mu_s', 'v_s', 'sigma']
for sol, label in zip(solutions, labels):
    ax.plot(sol.t, sol.y[0], label=label)

ax.set_xlabel('Time (s)')
ax.set_ylabel('Displacement [m]')
ax.legend()
ax.grid(True)
ax.set_title('Displacement of Mass-Spring System with Different Friction Types')

plt.show()
```

I checked that the friction force is zero when the normal force is zero, and the actuator can handle *None* values correctly. Here's the plot:


**Code 2** is the one Timo used to see the displacement over time with different types of friction.

```
import sympy as sm
import numpy as np
import matplotlib.pyplot as plt
from sympy.physics.mechanics import (dynamicsymbols, ReferenceFrame, Point,
                                     LinearPathway, CoulombKineticFriction,
                                     LinearSpring, KanesMethod, Particle)
from scipy.integrate import solve_ivp

# Define variables
t = sm.symbols('t')
x, v = dynamicsymbols('x, v', real=True)
m, g, k, mu_k, mu_s, v_s, sigma = sm.symbols('m, g, k, mu_k, mu_s, v_s, sigma', real=True)
l0 = sm.symbols('l0', real=True)

# Define the reference frame and points
N = ReferenceFrame('N')
O, P = Point('O'), Point('P')
O.set_vel(N, 0)
P.set_pos(O, x*N.x)
P.set_vel(N, v*N.x)

# Define pathway
pathway = LinearPathway(O, P)

friction = CoulombKineticFriction(mu_k, m*g, pathway, v_s=v_s,
                                  sigma=sigma, mu_s=mu_k)

spring = LinearSpring(k, pathway, equilibrium_length=l0)

block = Particle('block', point=P, mass=m)

kane = KanesMethod(N, (x,), (v,), kd_eqs=(x.diff() - v,))
kane.kanes_equations((block,), friction.to_loads() + spring.to_loads())

qs = (x, v)
ps = (m, g, k, l0, mu_k, mu_s, v_s, sigma)

eval_rhs = sm.lambdify((qs, ps), kane.rhs(), cse=True)

p_def = {
    m: 1.0,  # (kg)
    g: 9.81,  # (m/s/s)
    k: 100.0,  # (N/m)
    l0: 0.5,  # (m)
    mu_k: 0.2,
    mu_s: 0.0,
    v_s: 0.0,
    sigma: 0.0
}

# Initial conditions
initial_conditions = [0.9, 0.0]  # [initial displacement, initial velocity]

# Time span for the simulation
t_span = (0, 3.3)  # Simulate from t=0 to t=3.3
t_eval = np.linspace(t_span[0], t_span[1], num=101)

results = {}
for name, p_overwrites in [
    ("default", {}),
    ("incl. viscous", {sigma: 0.1}),
    ("incl. stribeck", {mu_s: 0.5, v_s: 1e-2}),
]:
    p_vals = np.array([p_overwrites.get(p, p_def[p]) for p in ps])

    # Solve the equation using solve_ivp
    results[name] = solve_ivp(lambda t, x: eval_rhs(x, p_vals).squeeze(), t_span,
                              initial_conditions, t_eval=t_eval)

# Plot the results
fig, ax = plt.subplots()
for name, sol in results.items():
    ax.plot(sol.t, sol.y[0], label=name)
ax.set_xlabel('Time (s)')
ax.set_ylabel('Displacement (m)')
ax.legend()
plt.show()
```

Here's the plot:

### Meeting

Had a weekly meeting with **@tjstienstra**, **@moorepants**, and **@ricdigi**.

Summary:
- **CoulombKineticFriction**
    - Change initialisers and default values, and make sure the actuator can handle *None* values.
    - Relax the docstring explanation and emphasise the importance of correctly specifying the normal force.
    - Rename the variable name *v_s* to include Stribeck.
    - Ensure consistency in variable names.
    - Ensure the force is zero when the normal force is zero.
    - Evaluate friction for different velocity values recreating the figure.

- **CoulombKineticFriction2**: Remove it.

### Others

I add **CoulombKineticFriction2** here for later use. The point in this actuator is to handle the vector component and direction of the calculated force, specifically ensuring the force is perpendicular to the normal force.

```
class CoulombKineticFriction2(ForceActuator):
    """Coulomb kinetic friction with Stribeck effect.

    Explanation
    ===========

    This represents a Coulomb kinetic friction with the Stribeck, described by the function:

    .. math::
        F = f_c sign(v) + (f_{max} - f_c) e^{-(v / v_s)^2}

    where :math:f_c is the Coulomb friction constant, :math:f_{max} is the maximum static friction force,
    :math:v_s is the coefficient of sliding friction, and :math:v is the relative velocity.

    The default friction force is :math:F = mu_k N, where :math:N is the normal force.
    When specified, the actuator includes Stribeck effect: :math:(mu_s - mu_k) N e^{-(v / v_s)^2},
    and the full actuator represents:

    .. math::
        F = mu_k N sign(v) + (mu_s - mu_k) N e^{-(v / v_s)^2}

    Please note that this actuator assumes slip and applies a force opposite to the velocity direction.

    Parameters
    ==========

    f_n : Vector
        The normal force between the surfaces.
    mu_k : Expr
        The coefficient of kinetic friction.
    pathway : PathwayBase
        The pathway that the actuator follows.
    v_s : Expr
        The coefficient of sliding friction (COF).
    mu_s : Expr, optional
        The coefficient of static friction. Defaults to mu_k, meaning the Stribeck effect evaluates to 0 by default.

    References
    ==========

    .. [Moore2022] https://moorepants.github.io/learn-multibody-dynamics/loads.html#friction.
    .. [Flores2023] Paulo Flores, Jorge Ambrosio, Hamid M. Lankarani,
            "Contact-impact events with friction in multibody dynamics: Back to basics",
            Mechanism and Machine Theory, vol. 184, 2023. https://doi.org/10.1016/j.mechmachtheory.2023.105305.
    .. [Rogner2017] I. Rogner, "Friction modelling for robotic applications with planar motion",
            Chalmers University of Technology, Department of Electrical Engineering, 2017.

    """

    def __init__(self, mu_k, f_n, pathway, *, v_s=None, mu_s=None):
        self.mu_k = mu_k
        self.mu_s = mu_s if mu_s is not None else mu_k
        self.f_n = f_n
        self.v_s = v_s if v_s is not None else 1
        self.pathway = pathway

    @property
    def mu_k(self):
        return self._mu_k

    @mu_k.setter
    def mu_k(self, mu_k):
        if hasattr(self, '_mu_k'):
            msg = (
                f'Can\'t set attribute mu_k to '
                f'{repr(mu_k)} as it is immutable.'
            )
            raise AttributeError(msg)
        self._mu_k = sympify(mu_k, strict=True)

    @property
    def mu_s(self):
        return self._mu_s

    @mu_s.setter
    def mu_s(self, mu_s):
        if hasattr(self, '_mu_s'):
            msg = (
                f'Can\'t set attribute mu_s to '
                f'{repr(mu_s)} as it is immutable.'
            )
            raise AttributeError(msg)
        self._mu_s = sympify(mu_s, strict=True)

    @property
    def f_n(self):
        return self._f_n

    @f_n.setter
    def f_n(self, f_n):
        if hasattr(self, '_f_n'):
            msg = (
                f'Can\'t set attribute f_n to '
                f'{repr(f_n)} as it is immutable.'
            )
            raise AttributeError(msg)
        if not isinstance(f_n, Vector):
            msg = (
                f'Value {repr(f_n)} passed to f_n was of type '
                f'{type(f_n)}, must be {Vector}.'
            )
            raise TypeError(msg)
        self._f_n = f_n

    @property
    def v_s(self):
        return self._v_s

    @v_s.setter
    def v_s(self, v_s):
        if hasattr(self, '_v_s'):
            msg = (
                f'Can\'t set attribute v_s to '
                f'{repr(v_s)} as it is immutable.'
            )
            raise AttributeError(msg)
        self._v_s = sympify(v_s, strict=True)

    @property
    def force(self):
        v = self.pathway.extension_velocity
        n_dir = self.f_n.normalize()

        if v == 0:
            perpendicular_dir = n_dir.cross(self.N.z).normalize()
        else:
            perpendicular_dir = v.cross(n_dir).normalize()

        f_c = self.mu_k * self.f_n.magnitude()
        f_max = self.mu_s * self.f_n.magnitude()
        stribeck_term = (f_max - f_c) * exp(-(v / self.v_s)**2)
        return (f_c * -sign(v) + stribeck_term) * perpendicular_dir

    @force.setter
    def force(self, force):
        raise AttributeError('Can\'t set computed attribute force.')

    def to_loads(self):
        force = self.force
        pA = self.pathway.attachments[0]
        pB = self.pathway.attachments[1]

        if isinstance(force, Vector):
            loads = [(pA, force), (pB, -force)]
        else:
            loads = self.pathway.to_loads(force)
        return loads

    def __repr__(self):
        return (f'{self.__class__.__name__}({self.mu_k}, {self.mu_s} '
                f'{self.f_n}, {self.pathway}, {self.v_s})')
```
