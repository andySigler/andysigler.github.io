---
layout: page
subheadline: "Open-Source Liquid Handling Platform"
title:  "Opentrons API"
teaser: "The Opentrons API is a set of Python tools to compose custom lab-automation sequences using the OT-One or OT2 liquid-handlers"
breadcrumb: false
categories:
    - products
tags:
    - automation

author: Andy Sigler

header: no

---

![Opentrons API]({{site.url}}/images/opentrons-api-banner.jpg)

The [Opentrons API](https://docs.opentrons.com/) is an opensource software interface, written in Python, to control the set of Opentrons liquid-handlers. It was designed allow simple commands to perform relatively complex procedures, while at the same time exposing a lower level that gives the author control over the machine's atomic movements.

Conceived, designed, and developed in 2016, the Opentrons API has proven to be the right tool for protocol authors using Opentrons machines. It is still [in active development](https://github.com/opentrons/opentrons) by the team of Opentrons sofware engineers, with relatively little change made to the exterior API interface.

# My Contributions

As part of a team of four software developers in 2016, I played an outsized role in shaping the interface of the API. From experience in using the [OT-One](https://shop.opentrons.com/collections/ot-one-s-robot-and-accessories), plus having solely writting the [platform's Kickstarter version all in Javascript]({{site.url}}/projects/opentrons-platform-prototype), I new it was important to allow both lower-level control of liquid transfers, while giving another option for simple transfers. This allowed the API to satisfy both simple needs and programming beginners, as well as more complex procedures and those with Python experience.

In addition to leading design of the API's interface, I spent considerable time in 2016 for the OT-One and in 2018 for the OT2 writing the motion control aspect of the Opentrons software. This includes how a pipette moves around, what parameters are required to allow fine control of liquid transfers, software interfaces for control the stepper-motor-driving system, and finally communication with the machine's stepper-motor-driver through GCode.

I'm quite proud of the work I've done on Opentrons machine software stack. There's nothing more satisfying than to see not only your code in the hands of happy customers, but to also know it is literally driving the liquid transfers of laboratory experiments around the world.

# How to Use

Python was chosen to drive the Opentrons' backend because of the language's prevalence in the scientific community. So because we're working with Python, we need to first import our instruments (the pipettes) and our labware (the plates, tip-racks, etc.):

{% highlight python3 %}
from opentrons import instruments, labware
{% endhighlight %}

Before we can get started, we need to know about [the Opentrons deck](https://docs.opentrons.com/labware.html#placing-labware-on-the-robot-deck). This is a set of slotted inserts that fit standard labware, so they do not move during a protocol. You'll notice in the picture below that each "slot" on the deck is numbered, so that when our protocol creates a new labware we can easily assign it's location to a numbered slot.

![Opentrons Deck]({{site.url}}/images/opentrons-deck-small.png)
![Opentrons Deck]({{site.url}}/images/opentrons-full-deck-small.jpg)

Now let's pretend we have a [trough](https://docs.opentrons.com/labware.html#troughs) filled with some sample, and we want to transfer that sample to a [well plate](https://docs.opentrons.com/labware.html#pcr-flat). The software contains accurate three-dimensional representations of these labwares, and the API can load them into your protocol like so:

{% highlight python3 %}
trough = labware.load('trough-12row', slot='1')
plate = labware.load('96-PCR-flat', slot='2')
{% endhighlight %}

Next we need a [pipette](https://docs.opentrons.com/pipettes.html), which also need a [tip rack](https://docs.opentrons.com/labware.html#tipracks) which holds disposable tips for sterile liquid transfers. For the pipettes, let's use a 300uL single-channel, and put it on the OT2's left mount:

{% highlight python3 %}
tips = labware.load('opentrons-tiprack-300ul', slot='3')
pipette = instruments.P300_Single(mount='left', tip_racks=[tips])
{% endhighlight %}

With our labware and pipettes ready, we can start transferring liquids!

As of this writing, the API has loosely speaking two layers of liquid-handling commands, the documentation names "atomic" and "complex".

The [atomic commands](https://docs.opentrons.com/atomic%20commands.html) can be thought of as individual movements, controllable and sequencable through the API. Below are a set of atomic commands which do the following:

- Pick up a new tip from the tip rack
- Aspirate 100uL from the trough's A1 position
- Dispense 100uL to the plate's A1 position
- Drop the tip inside the deck's trash

{% highlight python3 %}
pipette.pick_up_tip()
pipette.aspirate(100, trough.wells('A1'))
pipette.dispense(100, trough.wells('A1'))
pipette.drop_tip()
{% endhighlight %}

To add some complexity, we can fit in a few more atomic commands to give even more fine-tuned control over the liquid's movement:

{% highlight python3 %}
pipette.pick_up_tip()
pipette.aspirate(100, trough.wells('A1'))
pipette.touch_tip()
pipette.air_gap(20)
pipette.dispense(100, trough.wells('A1'))
pipette.blow_out()
pipette.drop_tip()
{% endhighlight %}

To make it easier to read, you can also chain together pipette commands:

{% highlight python3 %}
pipette.pick_up_tip()
pipette.aspirate(100, trough.wells('A1')).touch_tip().air_gap(20)
pipette.dispense(100, trough.wells('A1')).blow_out()
pipette.drop_tip()
{% endhighlight %}

The [complex commands](https://docs.opentrons.com/complex%20commands.html) are one level higher, and hide the many details you are show when using atomic commands. To perform a similar liquid transfer as above, we can us the following complex command:

 {% highlight python3 %}
pipette.transfer(100, trough.wells('A1'), plate.wells('A1'))
{% endhighlight %}

That single line will automatically pick up a tip, transfer the 100uL, then drop the tip. These complex commands are much easier to understand, more approachable to beginners, while the trade-off is less control.

There is much more detail you can read in the documentaion linked to throughout this post.
