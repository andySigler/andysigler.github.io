---
layout: page
title: Opentrons Modules
subheadline: "2016 - 2019"
teaser: 
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

During 2017-'18, I was the sole electronics designer and firmware developer for [three Opentrons Modules](https://opentrons.com/modules):

 - Thermocycler Module
 - Temperature Module
 - Magnetic Module.

These devices connect to the Opentrons OT2 hardware platform to automate lab protocols.

## Thermocycler Module

The Thermocycler ramps up and down in temperature, at about 4 degrees Celsius per-second, between 4-100 degrees Celsius.

The lid can automatically open/close. This lid is also used as a heating element, heating to 110-degrees Celsius.

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

The main temperature control was driven by six peltier devices, driven separately to create a more uniform temperature gradient. In addition, the heated lid was driven by a heating pad, a stepper-motor driving system was needed to open/close the lid, and also a solenoid is used to latch the lid shut and pop it open.

Six separate thermistors are used to monitor the peltiers with an accuracy of <0.1 degrees Celsius. An RGBW LED strip was added as a basic status and progress indicator, and of course there is a power button on the side.

The PCBs pictured below were from the beta phase.

<img style="max-width:48.75%;" src="{{site.url}}/images/ot2-thermocycler-pcb-main.jpg" >
<img style="max-width:48.75%;margin-left:1.4%" src="{{site.url}}/images/ot2-thermocycler-pcb-peltiers.jpg" >

Below you can see about a dozen thermistors externally epoxied to the internal wells of an alpha prototype.

<img style="max-width:48.75%;" src="{{site.url}}/images/ot2-thermocycler-prototype-lid.jpg" >
<img style="max-width:48.75%;margin-left:1.4%" src="{{site.url}}/images/ot2-thermocycler-prototype-thermistors.jpg" >

## Temperature Module

The Temperature Module can hold a temperature between 4-94 Celsius with +/- 1 Celcius accuracy and uniformity. Unlike the thermocycler (above), it was not designed to cycle between temperatures, but to instead hold a single steady temperature.

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

It uses two peltier devices to either heat or cool the top plate. A heatsink and fan are then used to cool the bottom side of the peltier devices. A display at the top of the device shows the current temperature, and red or blue colors to indicate temperature.

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

<img style="max-width:31.75%;" src="{{site.url}}/images/ot2_temp_deck_2.jpg" >
<img style="max-width:31.75%;margin-left:1.4%" src="{{site.url}}/images/ot2_temp_deck_3.jpg" >
<img style="max-width:31.75%;margin-left:1.4%" src="{{site.url}}/images/ot2_temp_deck_4.jpg" >

<br />

## Magnetic Module

The Magnetic Module raises a set of magnets near the user's sample, in order to attract iron beads that have been attached to a specific DNA strand to be isolated.

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

This device is composed of a stepper motor moving along a rail (to raise/lower the magnets), plus the electronics to move said motor.

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

<img style="max-width:48.75%;" src="{{site.url}}/images/ot2_mag_deck_pcb.jpg" >
<img style="max-width:48.75%;margin-left:1.4%" src="{{site.url}}/images/ot2_modules_cables.jpg" >
