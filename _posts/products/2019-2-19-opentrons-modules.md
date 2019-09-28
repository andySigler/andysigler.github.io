---
layout: page
title: Opentrons Modules
subheadline: Devices Built for the Opentrons Platform
teaser: Expanding automated workflows with Opentrons Modules
breadcrumb: false
categories:
    - products
tags:
    - opentrons
    - pcb
    - opensource

image:
    homepage: opentrons_modules_small.png
    thumb: opentrons_modules_small.png

header: no

author: Andy Sigler

published: true
---

During 2017-'18, I was the sole electronics designer and firmware developer for the two Opentrons Modules; [the Thermocycler Moduel, the Temperature Module, and the Magnetic Module](https://opentrons.com/modules). These devices connect to the Opentrons OT2 hardware platform over simple USB connections, so they are easy to setup, use, and can even be used outside of the Opentrons platform (if anyone wants to do that).

For each of these devices, I worked on a small team of 2-4 people doing early ideation, design, testing, design for manufacturing, and quality control, with myself owning the electronics, firmware, and testing side of things. The one exception being that I left Opentrons during the beta/pre-production phase of the Thermocycler, so I did not implement the final design changes nor the manufacturing workflow for that product, but the electronics/firmware design is largely mine.

## Thermocycler Module

The Thermocycler ramps up and down in temperature, at about 4 degrees Celsius per-second, in order to rapidly change the temperature of whatever material it holds. This is to amplify different biological reactions (don't ask me any more details about the science...). The liquids inside can read between 4-100 degrees Celsius.

Because it is for automation, there is also a lid that can automatically open/close. This lid is also used as a heating element, raising to up to 110 degrees Celsius, in order to prevent condensation inside the sample plate.

<video id="vid_cycler" style="width:100%; height:auto; border:1px solid #aaa" width="960" height="540" controls loop muted>
  <source src="{{site.url}}/images/thermocycler-video.webm" type="video/webm">
  <source src="{{site.url}}/images/thermocycler-video.ogv" type="video/ogg">
  <source src="{{site.url}}/images/thermocycler-video.mp4" type="video/mp4">
</video>
<script type="text/javascript">
    var vid_cycler = document.getElementById('vid_cycler');
    vid_cycler.removeAttribute('controls');
    vid_cycler.addEventListener('canplaythrough', function(e){
        vid_cycler.play();
    })
</script>

The electronics had a quite a lot going on. The main temperature control was driven by six peltier devices, where two would each be wired in serial, creating three pairs of two driven in parallel on their own PID loops. Also, the heated lid was driven by a simple heating pad, a stepper motor driving system was needed to open/close it, plus a solenoid to latch the lid shut and pop it open.

Six separate thermistors, plus the ADC circuit to go along with them, were used to measure the parallel peltier pairs with accuracy of <0.1 degrees Celsius. An RGBW LED strip was added as a basic status and progress indicator, and of course there is a power button on the side.

The PCBs pictured below were from the beta phase.

<img style="max-width:48.75%;" src="{{site.url}}/images/ot2-thermocycler-pcb-main.jpg" >
<img style="max-width:48.75%;margin-left:1.4%" src="{{site.url}}/images/ot2-thermocycler-pcb-peltiers.jpg" >

I left Opentrons during this project's beta/pre-production phase, so I only have pictures from the testing times. Measure the accuracy and uniformity across all it's internal wells was a big problem to solve, and took tons of work and iteration to get right. Having nobody on the team who's worked with thermodynamics was probably the biggest challenge, since we were consisting realizing things that would have been obvious to someone like that.

Below you can see about a dozen thermistors externally epoxied to the internal wells of an alpha prototype.

<img style="max-width:48.75%;" src="{{site.url}}/images/ot2-thermocycler-prototype-lid.jpg" >
<img style="max-width:48.75%;margin-left:1.4%" src="{{site.url}}/images/ot2-thermocycler-prototype-thermistors.jpg" >

## Temperature Module

It keeps hot things hot and cold things cold! The Temperature Module can hold a temperature between 4-94 Celsius with +/- 1 Celcius accuracy and uniformity. Unlike the thermocycler (above), it was not designed to cycle between temperatures, but to instead hold a single steady temperature.

<video id="vid_ot2_temp_deck" style="width:100%; height:auto; border:1px solid #aaa" width="854" height="480" controls loop muted>
  <source src="{{site.url}}/images/ot2_temp_deck.webm" type="video/webm">
  <source src="{{site.url}}/images/ot2_temp_deck.ogv" type="video/ogg">
  <source src="{{site.url}}/images/ot2_temp_deck.mp4" type="video/mp4">
</video>
<script type="text/javascript">
    var vid_ot2_temp_deck = document.getElementById('vid_ot2_temp_deck');
    vid_ot2_temp_deck.removeAttribute('controls');
    vid_ot2_temp_deck.addEventListener('canplaythrough', function(e){
        vid_ot2_temp_deck.play();
    })
</script>

It uses two peltier devices to either heat or cool the top plate. A heatsink and fan are then used to cool the bottom side of the peltier devices. A number display at the top of the device shows the curren temperature, and either red or blue color to indicate temperature.

<video id="vid_ot2_temp_deck_loop" style="width:100%; height:auto; border:1px solid #aaa" width="854" height="480" controls loop muted>
  <source src="{{site.url}}/images/ot2_temp_deck_loop.webm" type="video/webm">
  <source src="{{site.url}}/images/ot2_temp_deck_loop.ogv" type="video/ogg">
  <source src="{{site.url}}/images/ot2_temp_deck_loop.mp4" type="video/mp4">
</video>
<script type="text/javascript">
    var vid_ot2_temp_deck_loop = document.getElementById('vid_ot2_temp_deck_loop');
    vid_ot2_temp_deck_loop.removeAttribute('controls');
    vid_ot2_temp_deck_loop.addEventListener('canplaythrough', function(e){
        vid_ot2_temp_deck_loop.play();
    })
</script>

It was a tight package to fit all the electronics, which ended up getting separated into four PCBs, pictured below.

<img style="max-width:31.75%;" src="{{site.url}}/images/ot2_temp_deck_2.jpg" >
<img style="max-width:31.75%;margin-left:1.4%" src="{{site.url}}/images/ot2_temp_deck_3.jpg" >
<img style="max-width:31.75%;margin-left:1.4%" src="{{site.url}}/images/ot2_temp_deck_4.jpg" >

<br />

## Magnetic Module

The Magnetic Module raises a set of magnets near the user's sample, in order to attract iron beads that have been attached to a specific DNA strand they want to isolate (science!).

<video id="vid_ot2_mag_deck" style="width:100%; height:auto; border:1px solid #aaa" width="854" height="480" controls loop muted>
  <source src="{{site.url}}/images/ot2_mag_deck.webm" type="video/webm">
  <source src="{{site.url}}/images/ot2_mag_deck.ogv" type="video/ogg">
  <source src="{{site.url}}/images/ot2_mag_deck.mp4" type="video/mp4">
</video>
<script type="text/javascript">
    var vid_ot2_mag_deck = document.getElementById('vid_ot2_mag_deck');
    vid_ot2_mag_deck.removeAttribute('controls');
    vid_ot2_mag_deck.addEventListener('canplaythrough', function(e){
        vid_ot2_mag_deck.play();
    })
</script>

This device is simply composed of a stepper motor moving along a rail (to raise/lower the magnets), plus the electronics to move said motor.

<video id="vid_ot2_mag_deck_loop" style="width:100%; height:auto; border:1px solid #aaa" width="854" height="480" controls loop muted>
  <source src="{{site.url}}/images/ot2_mag_deck_loop.webm" type="video/webm">
  <source src="{{site.url}}/images/ot2_mag_deck_loop.ogv" type="video/ogg">
  <source src="{{site.url}}/images/ot2_mag_deck_loop.mp4" type="video/mp4">
</video>
<script type="text/javascript">
    var vid_ot2_mag_deck_loop = document.getElementById('vid_ot2_mag_deck_loop');
    vid_ot2_mag_deck_loop.removeAttribute('controls');
    vid_ot2_mag_deck_loop.addEventListener('canplaythrough', function(e){
        vid_ot2_mag_deck_loop.play();
    })
</script>

This one was simpler for the electronics, plus there was much more room for a single long PCB, pictured below. Also, just like the other Modules, it is connected to the OT2 over a simple USB cable.

<img style="max-width:48.75%;" src="{{site.url}}/images/ot2_mag_deck_pcb.jpg" >
<img style="max-width:48.75%;margin-left:1.4%" src="{{site.url}}/images/ot2_modules_cables.jpg" >
