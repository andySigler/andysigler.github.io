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
    homepage: placeholder.png
    thumb: placeholder.png

header: no

author: Andy Sigler

published: true
---

During 2017-'18, I was the sole electronics designer and firmware developer for the two Opentrons Modules; [the Temperature Module and the Magnetic Module](https://opentrons.com/modules). These devices connect to the Opentrons OT2 hardware platform over simple USB connections, so they are easy to setup, use, and can even be used outside of the Opentrons platform (if anyone wants to do that).

For each of these devices, I worked on a small team of 2-4 people doing early ideation, design, testing, design for manufacturing, and quality control, with myself owning the electronics, firmware, and testing side of things.

# Temperature Module

It keeps hot things hot and cold things cold! The Temperature Module can hold a temperature between 4-94 Celsius with +/- 1 Celcius accuracy and uniformity.

It uses two peltier devices to either heat or cool the top plate. A heatsink and fan are then used to cool the bottom side of the peltier devices. A number display at the top of the device shows the curren temperature, and either red or blue color to indicate temperature.

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

<img style="max-width:32%;" src="{{site.url}}/images/ot2_temp_deck_2.jpg" >
<img style="max-width:32%;margin-left:1.4%" src="{{site.url}}/images/ot2_temp_deck_3.jpg" >
<img style="max-width:32%;margin-left:1.4%" src="{{site.url}}/images/ot2_temp_deck_4.jpg" >

<br />

# Magnetic Module

The Magnetic Module raises a set of magnets near the user's sample, in order to attract iron beads that have been attached to a specific DNA strand they want to isolate (science!).

This device is simply composed of a stepper motor moving along a rail (to raise/lower the magnets), plus the electronics to move said motor.

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

![Mag Deck PCB]({{site.url}}/images/ot2_mag_deck_pcb.jpg)

![Modules cables]({{site.url}}/images/ot2_modules_cables.jpg)
