---
layout: page
title: The Patchbay Interface
subheadline: Design Decisions for Multi-Device Interactions
teaser: The Patchbay the graphical interface was developed for my 2014 master's thesis at ITP. It was designed to greatly simplify multi-device interactions, and allows users to make and break links between wireless objects.
breadcrumb: false
categories:
    - patchbay
tags:
    - mobile
    - interface
    - networks

image:
    homepage: patchbay.png
    thumb: patchbay.png

header: no

author: Andy Sigler
---

<style>
	#routerContainer {
		position:relative;
		display:block-inline;
		background-color:rgb(79,79,79);
	}
	#patchbayTitle {
		color:rgb(79,79,79);
	}
	canvas{
		display:inline;
		position:absolute;
		left:0px;
		top:0px;
	}
</style>

<script type="text/javascript" src="{{ site.url }}/assets/js/patchbay/hammer.min.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/patchbay/websocketStuff.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/patchbay/canvasStuff.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/patchbay/touchStuff.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/patchbay/cord.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/patchbay/port.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/patchbay/arc.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/patchbay/circle.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/patchbay/mouse.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/patchbay/initPatchbay.js"></script>


The Patchbay is a graphical interface, developed for my 2014 master's thesis at ITP. It was designed to greatly simplify multi-device interactions, and allows users to make and break links between wireless objects.

Skip ahead to [5:10](http://vimeo.com/96851567#t=5m10s) to see my explanation of the Patchbay interface.

<iframe src="https://player.vimeo.com/video/96851567" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="width:100%;max-width:500px;"></iframe>

The term Patchbay refers to a piece of equipment found in most recording studios. Patchbays are boxes that live in a studio, and an engineer will wire the audio inputs and outputs from all their equipment into it.

![patchbay]({{ site.url }}/images/patchbay.jpg)

What it provides is convenience in connecting their equipment, by have one central place to do it. The studio's engineer is now able to quickly design sounds using the links between her gear.

#Demo

A working demo of the Patchbay can be found below. It's interactive! Rotate the arcs to view different project, and connect inputs and output.

<div id="routerContainer" style="margin-bottom:1.5rem">
	<div id="patchbayTitle">PatchBay</div>
	<canvas id="canvas"></canvas>
</div>	

The devices you see, and their corresponding <code>INPUTs</code> and <code>OUTPUTs</code>, are actualy toys and objects developed for my 2014 thesis. It was a lot of fun playing with the connections between them :)

#An Interface for Interop

What the Patchbay assumes (and all patching intefaces for that matter, digital and physical) is that all nodes in the network are interoperable, meaning that they are able to seamlessly communicate with each other. The people who made them have come to some agreement over how they will communicate.

The Patchbay's role in such an ecosystem is to simply say "This talk to That."

Each device has what's called <code>INPUTs</code> and <code>OUTPUTs</code>. For a simple example, imagine two devices. The first has three buttons, the second has two lights. The first device has three <code>INPUTs</code>, and the second has two <code>OUTPUTs</code>.

Using the Patchbay, I could connect button #2 to light #1. This would be done by connecting the device's <code>INPUT</code> #2 to the other's <code>OUTPUT</code> #1.

![patchbay_make]({{ site.url }}/images/patchbay_make.gif)

When I no longer want that button to control that light, I erase the connection on the interface.

![patchbay_break]({{ site.url }}/images/patchbay_break.gif)

With a simple interface come constraints. The Patchbay is for devices that share only simple values between them. Buttons and lights are a good example: the button could send a <code>1</code> when pressed, and a <code>0</code> when released. These numbers would be received by the light, and it would interpret them as meaning "Turn ON" and "Turn OFF."

#Too Many Things

The past few years, I have seen a growing interest in connected devices, and how to best interact with an Internet of Things on a day-to-day bases. "Patching" interfaces have arose, ranging from simple I/O mapping, to more richly featured environments for controlling a network's data flow.

![spacebrew]({{ site.url }}/images/spacebrew.png)
[Spacebrew](http://docs.spacebrew.cc/) - a framework for mapping simple I/O over a WebSocket connection.

![node-red]({{ site.url }}/images/node-red.png)
[Node-RED](http://docs.spacebrew.cc/) - a framework for connecting devices, APIs and online services.

All these interfaces have one serious design flaw: they become easily over-crowded and difficult to use once the network grows. The more devices that are displayed, the more concentration a user must put into navigating and using one of these interfaces.

![zombies]({{ site.url }}/images/zombie.jpg)

The Patchbay hides most of this complexity, using its adaptive circular design. When a new device comes within range of the interface, it will be represented by a new arc.

By rotating either circle, you are allowed to see only a couple of the devices' <code>INPUTs</code> and <code>OUTPUTs</code>. This allows the user to focus on only the devices they are currently interacting with, freeing them to look up and experience physical sensations.

#How it was Made

The Patchbay is an HTML5 graphical interface, designed to work on any device that supports modern web technologies. All animations are done an a Canvas element using custom Javascript. The only framework used was [Hammer.js](http://hammerjs.github.io/), a Javascript library for handling both mouse and touch events for tablets.

For my thesis, the interface was connected over a WebSocket connection to a local [NodeJS](http://nodejs.org/) server. This NodeJS server was constantly scanning for surrounding devices, and relaying the space's state on the interface. The decision to run a NodeJS server was made because my devices were all communicating using the [RFm12b radio](http://www.hoperf.com/rf/fsk_module/RFM12B.htm), operating at 433MHz, and using the [Arduino library from JeeNode](https://github.com/jcw/jeelib). Smartphones sadly do not support these frequencies, so I fellback to running a local server.

However, for future implementations I would like to use Bluetooth 4.0. This would allow devices to communicate over broadcasted, stateless communication channels, while being able to communicate directly with a user's smartphone, tablet, or laptop.

You can download the Patchbay from (https://github.com/andySigler/patchbay)[GitHub]. The repo comes with the NodeJS server, HTML5 inteface, and Arduino Library for using the RFm12b.