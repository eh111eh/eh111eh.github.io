---
title: Week 11
category: Weeks
order: 12
---

Written on Friday, Aug 9, 2024.

### Issues

#### Simulation of a sliding block on a rotating disc

[Issue #26929: Simulation of a sliding block on a rotating disc](https://github.com/sympy/sympy/issues/26929)

I opened this issue to make sure I understand the system I'll simulate before officially opening a new PR and to discuss some points that are unclear to me.

At this point, as described in this issue and the draft PR #26936, there are two main issues:
    - Incomplete CustomPathway.
    - Accurate calculation of the acceleration of point P.

Especially for the CustomPathway, I've worked to create a custom pathway that calculates the arc length as the pathway length, the time derivative of the arc length as the extension_velocity, and the inertial force as the to_loads product. So like:

```python
class CustomPathway(me.PathwayBase):
    
    def __init__(self, point1, point2, m, r):
        """A custom pathway that moves along a rotating disc.
        
        We assume that the motion of the block is circular (curved).
        
        Parameters
        ==========
        point1 : Point
            Point representing the first attachment; a fixed point on the disc
            in contact with the block.
        point2 : Point
            Point representing the second attachment; a point where the block is
            located on the disc.
        m : sympifiable
            Mass of the block moving along the pathway.
        r : sympifiable
            The radius of the circular path of the block. It is the distance from
            the center of the disc to the block's position.
        
        """
        
        super().__init__(point1, point2)
        self.m = m
        self.r = r
    
    @property
    def length(self):
        """Length of the pathway.
        
        The length of the block in a circular (curved) motion can be defined as the
        arc length, which can be calculated by multiplying the radius of the circular
        path by the central angle.
        
        """
        
        central_angle = self.attachments[1].pos_from(self.attachments[0]).magnitude() / self.r
        return self.r * central_angle
    
    @property
    def extension_velocity(self):
        """Extension velocity of the pathway.
        
        The extension velocity of the pathway is the rate of change of the arc length
        with respect to time. When the central angle changes with time, the extension
        velocity can be derived from the time derivative of the arc length.
        
        """
        
        angular_velocity = self.attachments[1].vel(me.dynamicsymbols._t)
        return self.r * angular_velocity
    
    def to_loads(self):
        """Loads in the correct format to be supplied to `KanesMethod`.
        
        Inertial force applied to the block as it moves along the curved pathway on the
        rotating disc.
        
        """
        
        return loads
```
But I'm unsure about this approach because, in case of a ball on a rotating disc, the motion would be circular (circular without friction, ellipse with friction). But in case of a block, I don't think the motion would necessarily be circular. At the same time, since we assume the initial velocity is not zero, it's also possible that the block has circular motion. Also it's a little uncertain to me how to implement the inertial force in to_loads method.

#### Biomechanics docs redirects not present

[Issue #26917: Biomechanics docs redirects not present](https://github.com/sympy/sympy/issues/26917)

Jason opened this issue since https://docs.sympy.org/dev/tutorials/biomechanics/biomechanics.html and https://docs.sympy.org/dev/tutorials/biomechanics/biomechanical-model-example.html directed to a "Page Not Found" error.

The purpose of the redirect is to ensure URL stability between the released version of SymPy and the current development. Since SymPy 1.12 no longer exists but SymPy 1.13 does, adjusting the redirect might not be necessary. I'll double check the URL stability.

### Pull Requests

#### Coulomb Friction

> [Merged Pull Request #26412](https://github.com/sympy/sympy/pull/26412)

This PR has finally been merged!

#### Add an example of a block on a rotating disc to the tutorial documentation

> [Draft Pull Request #26936](https://github.com/sympy/sympy/pull/26936)

I opened a draft PR to add a system of a block on a rotating disc to the tutorial documentation. In this system, the block is located at a distance r from the center of the disc and is subjected to forces, including friction force with additional Stribeck and viscous effects.

#### Fix bicycle example

> [Merged Pull Request #26921](https://github.com/sympy/sympy/pull/26921)

Jason introduced me to this PR for review, and I found it interesting, so I was reading some articles to understand this bicycle model. But [@smichr](https://github.com/smichr) addressed the issue and merged it within a few hours, so unfortunately, there's nothing left for me to do. I didn't contribute to this PR, but I found it interesting, so I'm leaving it here.

### Meeting

Had a weekly meeting with Jason K. Moore ([@moorepants](https://github.com/moorepants)) and Riccardo Di Girolamo ([@ricdigi](https://github.com/ricdigi)) since Timo Stienstra ([@tjstienstra](https://github.com/tjstienstra)) is on vacation.

We discussed on two issues mainly:

- [Issue #26929: Simulation of a sliding block on a rotating disc](https://github.com/sympy/sympy/issues/26929):
    - For the simulation, I received advice that I don't need to calculate each force individually (I was considering calculating the total force as F_tot = F_radial + F_tangential, where F_radial would be centrifugal force - centripetal force, and F_tangential would be the friction force). Instead, I need to get the position vector, differentiate it twice to obtain the correct acceleration, and this will give the inertia force, which includes Coriolis force, centrifugal force, and centripetal force. We also discussed creating a custom pathway for the system since it should be able to represent motion along a plane with the extension_velocity property.
    
    - Jason introduced me to these resources regarding the simulation:
        - [csu-hmc/opty Pull Request #196: Plot ball running on spinning disc](https://github.com/csu-hmc/opty/pull/196)
        - [youtube video - The Turntable Paradox](https://www.youtube.com/embed/3oM7hX3UUEU?si=Q-rs1nOmikPbSBgZ)

    - Timo introduced me to some resources to animate the model:
        - [four bar linkage tutorial - visualisation](https://mechmotum.github.io/brim/tutorials/four_bar_linkage.html#Visualization)
        - [learn-multibody-dynamics - animation with matplotlib](https://moorepants.github.io/learn-multibody-dynamics/simulation.html#animation-with-matplotlib)

- [Issue #26917: Biomechanics docs redirects not present](https://github.com/sympy/sympy/issues/26917).
    - Adjusting the redirect might not be necessary.

### Others

#### Resource Review

TBA

- [csu-hmc/opty Pull Request #196: Plot ball running on spinning disc](https://github.com/csu-hmc/opty/pull/196)

- [youtube video - The Turntable Paradox](https://www.youtube.com/embed/3oM7hX3UUEU?si=Q-rs1nOmikPbSBgZ)
    - Indeed very interesting.

- [four bar linkage tutorial - visualisation](https://mechmotum.github.io/brim/tutorials/four_bar_linkage.html#Visualization)

- [learn-multibody-dynamics - animation with matplotlib](https://moorepants.github.io/learn-multibody-dynamics/simulation.html#animation-with-matplotlib)
