---
layout: page
subheadline: "2016 - 2019"
title:  "Python API: Moving Liquids"
teaser: 
breadcrumb: false
categories:
    - products
tags:
    - automation

image:
    thumb: opentrons_api_small.png

author: Andy Sigler

header: no

---

<video id="vid_aspirate" style="width:100%;max-width:400px; height:auto; border:1px solid #aaa" width="854" height="480" controls loop muted>
  <source src="{{site.url}}/images/aspirate-loop.webm" type="video/webm">
  <source src="{{site.url}}/images/aspirate-loop.ogv" type="video/ogg">
  <source src="{{site.url}}/images/aspirate-loop.mp4" type="video/mp4">
</video>
<script type="text/javascript">
    var vid_aspirate = document.getElementById('vid_aspirate');
    vid_aspirate.removeAttribute('controls');
    vid_aspirate.addEventListener('canplaythrough', function(e){
        vid_aspirate.play();
    })
</script>

The [Opentrons API](https://docs.opentrons.com/) is an opensource software interface, written in Python, to control the set of Opentrons liquid-handlers. It was designed to allow simple commands to perform relatively complex procedures, while at the same time exposing a lower level that gives the author control over the machine's atomic movements.

See the project live [on GitHub](https://github.com/opentrons/opentrons), and [read the docs](https://docs.opentrons.com/atomic%20commands.html)

<!-- In the chart below, <strong style="color:#EEA33B">my contributions are shown in orange</strong>.

![API Contributions]({{site.url}}/images/opentrons_api_contributions_chart.png) -->

Within the Opentrons Python API, I mostly worked on:

 - Designing protocol commands
 - Designing pipette actions
 - Programming pipette movements
 - Programming motion control and hardware abstractions

Here's a video demoing my work. It shows protocol commands creating real-world liquid transfers:

<video id="vid_demo" style="width:100%;max-width:600px; height:auto; border:1px solid #aaa" width="1280" height="720" controls loop muted>
  <source src="{{site.url}}/images/opentrons_api.webm" type="video/webm">
  <source src="{{site.url}}/images/opentrons_api.ogv" type="video/ogg">
  <source src="{{site.url}}/images/opentrons_api.mp4" type="video/mp4">
</video>
<script type="text/javascript">
    var vid_demo = document.getElementById('vid_demo');
    vid_demo.removeAttribute('controls');
    vid_demo.addEventListener('canplaythrough', function(e){
        vid_demo.play();
    })
</script>

As part of a team of four software developers in 2016, I played an outsized role in shaping the API, as well as the underlying motion-control system:

 - How a pipette moves
 - What parameters are required to allow fine control of liquid transfers
 - Software interfaces for controlling the stepper-motor-driving system
 - Communication with the machine's stepper-motor-driver through GCode
