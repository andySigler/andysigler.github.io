---
layout: page
title: OT2 Electronics
subheadline: Affordable Open-Source Liquid Handler
teaser: Creating a hardware platform, from early design to manufacture
breadcrumb: false
categories:
    - products
tags:
    - opentrons
    - pcb
    - opensource

header: no

image:
    title: ot2_pcb_art_landscape.jpg

author: Andy Sigler

published: true
---

The Opentrons OT2 liquid handler is the next step in opensource lab automation, and I'm proud to have been one of the few designers and engineers to work on it.

During the OT2's design and production, I had complete ownership of the machine's electronics and firmware aspects (small startups, yea!).

<video id="vid_ot2" style="width:100%; height:auto; border:1px solid #aaa" width="854" height="480" controls loop muted>
  <source src="{{site.url}}/images/ot2_video.webm" type="video/webm">
  <source src="{{site.url}}/images/ot2_video.ogv" type="video/ogg">
  <source src="{{site.url}}/images/ot2_video.mp4" type="video/mp4">
</video>
<script type="text/javascript">
    var vid_ot2 = document.getElementById('vid_ot2');
    vid_ot2.removeAttribute('controls');
    vid_ot2.addEventListener('canplaythrough', function(e){
        vid_ot2.play();
    })
</script>

<br />

# Circuit Boards

The machine has 13 circuit boards inside it (plus a Raspberry Pi 3 and USB camera). Each of these boards was designed, prototyped, tested, certified (CE/FCC) and brought to production by me (small startups, yea!).

See where each boards lives in the graphic below:

![OT2 with PCBs]({{site.url}}/images/ot2_pcb_artwork.jpg)

The most important PCB is the motor driver board in the machines head. This board is a 4-layer bad boy, which can control 6 stepper motors, and runs a fork of the opensource [Smoothieware](https://github.com/opentrons/Smoothiewareot) firwmare.

All the rest of the boards are used to route signals between the driver board, the Raspberry Pi 3, and elsewhere. Plus there are boards for switches, connectors, buttons, etc.

Below are some pictures of the real-life PCBs in an opened up machine:

![OT2 PCBs]({{site.url}}/images/ot2_production_boards.jpg)

<img style="max-width:33%" src="{{site.url}}/images/ot2_production_caitlyn.jpg" >
<img style="max-width:63%;margin-left:3.5%" src="{{site.url}}/images/ot2_production_kris.jpg" >

<br />

# Flex Ribbon Cable

One exciting part of the design was to figure out how to route 32 conductors (power, data, and motor signals) across a 2-meter long ribbon cable. Not only is this cable being bent and twisted all over the place, but it's carrying multiple types of signals that could all interfere during a protocol run.

See the 2-meter ribbon cable in the picture below:

![OT2 Ribbon Cables]({{site.url}}/images/ot2_production_cables.jpg)

<br />

# Electronic Pipettes

The OT2 electronic pipettes use a fairly simple mechanism to move the plunger up and down (seen in the animation below). The stepper motor inside the pipette is actually being driven by one of the 6 stepper axis on the main driver PCB, so no motor driver was required in the pipette.

The electronics inside the pipette are mostly used for storing unique serial and model numbers, and data lines for communicating that information back.

<img style="max-width:63%" src="{{site.url}}/images/pipette_diagram.gif" >
<img style="max-width:33%;margin-left:3.5%" src="{{site.url}}/images/ot2_production_pipette.png" >

<br />

# Tip Probe

This thing is cool. It's a series of 5 switches, used to detect the precise and accurate position of a disposable tip on a pipette.

By simply moving to press against each switch, the OT2's system is able to calculate the position, height, and diameter of a pipette tip. This allows the machine to then move the point of that tip accurately within any labware.

<video id="vid_tip_probe" style="width:100%;max-width:600px; height:auto; border:1px solid #aaa" width="854" height="480" controls loop muted>
  <source src="{{site.url}}/images/tip_probe.webm" type="video/webm">
  <source src="{{site.url}}/images/tip_probe.ogv" type="video/ogg">
  <source src="{{site.url}}/images/tip_probe.mp4" type="video/mp4">
</video>
<script type="text/javascript">
    var vid_tip_probe = document.getElementById('vid_tip_probe');
    vid_tip_probe.removeAttribute('controls');
    vid_tip_probe.addEventListener('canplaythrough', function(e){
        vid_tip_probe.play();
    })
</script>

<br />

# More PCB Artwork

![OT2 PCBs Artwork]({{site.url}}/images/ot2_pcb_art_vertical.jpg)

<br />

# Some Pictures from Before & After Launch

![OT2 on Camera]({{site.url}}/images/ot2_camera.jpg)

![OT2 Prototype]({{site.url}}/images/ot2_prototype_gantry.jpg)

![OT2 Prototype Batch]({{site.url}}/images/ot2_prototype_pcbs.jpg)

<img style="max-width:33%" src="{{site.url}}/images/ot2_prototype_caitlyn.jpg" >
<img style="max-width:63%;margin-left:3.5%" src="{{site.url}}/images/ot2_prototype_face.png" >

![OT2 CE]({{site.url}}/images/ot2_prototype_CE.jpg)

![Opentrons Employees in Shenzhen]({{site.url}}/images/ot2_factory_people.jpg)
