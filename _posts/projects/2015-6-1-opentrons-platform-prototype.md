---
layout: page
title: Opentrons Platform Prototype
subheadline: Liquid-handling platform prototype, using HTML5 and NodeJS
teaser: I helped Opentrons this past year by prototyping their liquid handling software stack. It's been a great experience and I learned some lasting lessons.
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

## My Role at Opentrons Labworks

Beginning June 2014, I have worked with Opentrons in developing their low-cost, open-source liquid handling robot. Working with Opentrons has allowed me to spend nearly a month living and working in Shenzhen, China and HAXLR8R. Shenzhen is considered the hardware capitol of the world, and it was eye-opening to see a city completely centered around hardware manufacturing at all scales.

![The Opentrons Founders]({{site.url}}/images/opentrons_team.jpg)

My role with Opentrons was to prototype the liquid handling platform's software stack. This means I was responsible for the early decisions and executions of its design-file format (for writing experiments), for designing and making the robot's interface, experimenting with how it would accurately calibrate, and finally what <strong>exactly</strong> it does on execution (aka how it moves).

## Platform Overview

Below is a quick video I shot to demonstrate the prototype. All designs and software in the video (excluding the motor controller) were written by me.

<iframe src="https://player.vimeo.com/video/130249723" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<br />
Below is a diagram showing the different software blocks I developed. Each was iterated upon to reflect what the robot's mechanical requirements, and to satisfy users' needs.

![Platform Prototype Flowchart]({{site.url}}/images/opentrons_flowchart.png)

The file format fed in at the top ended up being a variation of the [Auto-Protocol standard proposed by Transcriptics](http://autoprotocol.org/specification/), which uses JSON to describe a protocol's many details and procedures. Because I needed to work fast, I used NodeJS to communicate with with robot's motorcontroller, and I created an HTML5 interface for the user to interact with. Everything written in NodeJS has since been translated to Python, and the front-end has been handed off to front-end engineers.

## A Lesson Learned

This was my first time working on a real-world product/tool, and the experience has left me with one lesson that I will hold on to: Narrow down to what the <u>core</u> experience of the product is, and get that single part working immediately, regardless of efficiencies and tools used.

Even if it's something that's already been done before, or if it's not even the entire minimum-viable-product. Get the thing doing what you say it can do, and see what you've learned. If you say the liquid handler can move hundreds of samples accurately, make it do that and that alone before working on any other problems.

Odds are, you will see things that you didn't expect or previously misjudged. Everything else down the road will be built up on top of that core feature, so it's important to not gloss over it.
