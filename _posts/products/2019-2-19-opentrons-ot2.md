---
layout: page
title: OT2 Liquid Handler Electronics
subheadline: "2016 - 2019"
teaser: 
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
    thumb: ot2-small.jpg

author: Andy Sigler

published: true
---

The Opentrons OT2 liquid handler is the 2nd generation liquid handler from Opentrons.

I had the privelege of owning the planning, development, and implementation of all electronics in the machine, as well as leading firmware and motion-control systems.

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

## Circuit Boards

The OT2 has 13 circuit boards inside it (plus a Raspberry Pi 3 and USB camera):

![OT2 with PCBs]({{site.url}}/images/ot2_pcb_artwork.jpg)

The motor-driver PCB is in the machine's head. It can control 6 stepper motors, and runs on a fork of the open-source [Smoothieware](https://github.com/opentrons/Smoothiewareot) firwmare.

![OT2 PCBs]({{site.url}}/images/ot2_production_boards.jpg)

<img style="max-width:32%" src="{{site.url}}/images/ot2_production_caitlyn.jpg" >
<img style="max-width:61%;margin-left:3.5%" src="{{site.url}}/images/ot2_production_kris.jpg" >

<br />

## Flex Ribbon Cable

A 2-meter-long ribbon cable is used to route 32 conductors (power, data, and motor signals):

![OT2 Ribbon Cables]({{site.url}}/images/ot2_production_cables.jpg)

<br />

## Electronic Pipettes

The OT2 electronic pipettes use a fairly simple mechanism to move the plunger up and down. The pipette's stepper motor is being driven by the main driver PCB, so no motor driver was required inside the pipette. The electronics inside the pipette also store the unique serial and model numbers.

<img style="max-width:63%" src="{{site.url}}/images/pipette_diagram.gif" >
<img style="max-width:33%;margin-left:3.5%" src="{{site.url}}/images/ot2_production_pipette.png" >

<br />

## Tip Probe

The tip-probe is a series of 5 switches, used to detect the precise and accurate position of a disposable tip on a pipette.

The tip-probe allows the OT2 to calculate the position, height, and diameter of a pipette tip.

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

## More PCB Artwork

![OT2 PCBs Artwork]({{site.url}}/images/ot2_pcb_art_vertical.jpg)

<br />

## Some Pictures from Before & After Launch

![OT2 on Camera]({{site.url}}/images/ot2_camera.jpg)

![OT2 Prototype]({{site.url}}/images/ot2_prototype_gantry.jpg)

![OT2 Prototype Batch]({{site.url}}/images/ot2_prototype_pcbs.jpg)

<img style="max-width:32%" src="{{site.url}}/images/ot2_prototype_caitlyn.jpg" >
<img style="max-width:62%;margin-left:3.5%" src="{{site.url}}/images/ot2_prototype_face.png" >

![OT2 CE]({{site.url}}/images/ot2_prototype_CE.jpg)

<!-- ![Opentrons Employees in Shenzhen]({{site.url}}/images/ot2_factory_people.jpg) -->
