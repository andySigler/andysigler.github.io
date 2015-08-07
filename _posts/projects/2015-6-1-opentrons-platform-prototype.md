---
layout: page
title: Opentrons Platform Prototype
subheadline: Liquid-handling platform prototype, using HTML5 and NodeJS
teaser: Beginning June 2014, I have worked with Opentrons in prototyping their liquid handling robot's software stack. It's been a wonderful experience and I learned some lasting lessons.
breadcrumb: false
categories:
    - projects
tags:
    - automation

image:
    homepage: opentrons.jpg
    thumb: opentrons_small.jpg

header: no

author: Andy Sigler

published: true
---

#My Role at Opentrons Labworks

Beginning June 2014, I have worked with Opentrons in developing their low-cost, open-source liquid handling robot. Working with Opentrons has allowed me to spend nearly a month living and working in Shenzhen, China, considered the hardware capitol of the world, and to work inside HAXLR8R, the hardware accelerator based there.

![The Opentrons Founders]({{ site.url }}/images/opentrons_team.jpg)

My role was to prototype the liquid handling platform's software stack. This means I was responsible for the early decisions and executions of the file format and used to design a protocol (the job), the robot's interface, how it would accurately calibration to it's surroundings and liquids, and finally what <strong>exactly</strong> it does on execution (aka how it moves).

#Platform Overview

Below is a quick video I shot to demonstrate my prototype. All designs and software used in the video (excluding the motor controller) were written by me.

<iframe src="https://player.vimeo.com/video/130249723" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<br />
Here's a general diagram showing the different blocks that I developed. Each was iterated upon to reflect what the robot's mechanics required, and to satisfy users' needs.

![Platform Prototype Flowchart]({{ site.url }}/images/opentrons_flowchart.png)

The file format fed in at the top ended up being a variation of the [Auto-Protocol standard proposed by Transcriptics](http://autoprotocol.org/), which uses JSON to describe a protocol's many details and procedures. Because I needed to work fast, I used NodeJS to communicate with with robot's motorcontroller, and created an HTML5 interface for the user to interact with. Everything written in NodeJS has since been translated to Python, and the front-end has been handed off to front-end engineers.

#A Lesson Learned

This was my first time working on a real-world product/tool, and the experience has left me with one lesson that I will hold on to:

##Narrow down to what the <u>core</u> experience of the product is, and get that single part working immediately, regardless of efficiencies and tools used.

<br />
Even if it's something that's already been done before, or if it's not even the entire minimum-viable-product. Get the thing doing what you say it can do, and see what you've learned. If the liquid handler can move hundreds of samples accurately, make it do that and that alone.

Odds are, you will see things that you didn't expect or previously misjudged. Everything else down the road will be built up ontop of that core feature, so it's important to not gloss over it.