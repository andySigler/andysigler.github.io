---
layout: page
title: Opentrons Platform Prototype
subheadline: "2014 - 2015"
teaser: 
breadcrumb: false
categories:
    - projects
tags:
    - automation

image:
    homepage: opentrons.jpg
    title: opentrons-ot-one-app.png
    thumb: opentrons_small.jpg

header: no

author: Andy Sigler

published: true
---

<!-- remove border from title image, b/c it has alpha channel -->
<script type="text/javascript">
    document.getElementById('titleImage').style.border = '0px';
</script>

I worked with Opentrons to build a prototype of their liquid-handling platform's software stack.

![The Opentrons Founders]({{site.url}}/images/opentrons_team.jpg)

Below is a quick video from 2015, demonstrating the prototype. All designs and software in the video (excluding the motor controller) were made by me.

<iframe src="https://player.vimeo.com/video/130249723" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<br />

<!-- Below is a diagram showing the different software blocks I developed. Each was iterated upon to reflect what the robot's mechanical requirements, and to satisfy users' needs.

![Platform Prototype Flowchart]({{site.url}}/images/opentrons_flowchart.png) -->

The commands were based on the [Auto-Protocol standard proposed by Transcriptics](https://autoprotocol.org/specification/), and the system was written in NodeJS and HTML5.
