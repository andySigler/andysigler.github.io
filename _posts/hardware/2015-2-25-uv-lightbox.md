---
layout: page
title: UV Light Cigar Box
subheadline: cigar box made into a uv lightbox
teaser: I needed an ultra-violet lightbox to make solder mask for PCBs, so I made one from a ton of UV LEDs and a cigar box I had lying around.
breadcrumb: false
categories:
    - hardware
tags:
    - tools
    - pcb
    - diy

image:
    homepage: lightbox.jpg
    thumb: lightbox_thumb.jpg

header:
    image: "lightbox-header.jpg"
    background-color: "rgb(14,72,155)"

author: Andy Sigler
---

DIY solder mask, like seen in [this video tutorial](https://www.youtube.com/watch?v=B0Syj4awcc8), is amazingly useful once you start making more than just a couple PCBs. However, it requires having access to an ultra-violet lightbox to expose the material. These lightboxes are way too expensive for what they are, a box with some LEDs in it. So, I'll make one!

### Step 1: Buy LEDs

First I went searching for the right LEDs. An LED panel is the perfect excuse to power on the pick-and-place here, but the SMD ultra-violet LEDs I found on digikey were over $2 a piece. So I instead found this much cheaper [5mm version](https://www.superbrightleds.com/moreinfo/component-leds/5mm-uv-led-30-degree-viewing-angle-380-nm-20mw/631/), at the cost of having to use a soldering iron.

I also got a [24VDC power supply](http://www.amazon.com/dp/B002LMQ6G2/ref=pe_825000_114660910_TE_item) to power the circuit.

### Step 2: Make the Circuit

![lightbox_2_finished_pcb]({{ site.url }}/images/lightbox_2_finished_pcb.png)

Next I needed a board to mount the LEDs and resistors needed to complete a circuit. I decided to mill a PCB to house all the LEDs, which took forever! I'll either be acid-etching or buying a perf-board for my next lightbox.

![lightbox_3_testing_leds]({{ site.url }}/images/lightbox_3_testing_leds.jpg)

Ths picture above is me testing the PCB after fully assembling it. But don't be fooled by my poor documentation, before I assembled the PCB, I tested the circuit and parts on a breadboard to make sure it all worked correctly.

It's a simple circuit. 6 LEDs and a 1k resistor are wired in series, and I feed 24VDC into it. This small circuit is then repeated many times in parallel, so the voltage doesn't change, but the current goes up.

### Step 3: Assemble the Box

So I had been looking around for a good box to turn into a lightbox, and I decided to try this cigar box lying around my room. It seemed to be the perfect fit for a 6x6inch copper plate, and it looked nice on a desktop.

![lightbox_5_box_closed]({{ site.url }}/images/lightbox_5_box_closed.jpg)

Small screws and washers were used to hold the PCB in place on the lid. Then, trying to be fancy, I wired a hall-effect sensor between my circuit and ground, and then glued a magnet to the lid. Now, the LEDs only powers when the lid is closed :)

I then used 2 small hinges to hold a piece of transparent acrylic (for pressing the PCB down during exposure). The opposite end of the acrylic has magnets super-glued on, which lock onto other magnets I put in the base of the box. When a PCB is placed onto the foam and the acrlic is lowered, the magnets hold the acrylic tightly, so as not to let anything move during exposure.

I finally lined the inside with some aluminum foil to let the light bounce around more before either being absorbed or lost.

![lightbox_4_box_open]({{ site.url }}/images/lightbox_4_box_open.jpg)

### Step 4: Make Some Solder Mask

Below is an image of the first PCB exposed in the lightbox. The acrylic and foam are holding the board well, but you'll notice the LEDs are only an inch or two from the PCB. This reduces the surface area the LEDs can evenly spread, meaning that whatever is put in the middle will "cook" faster than what's on the outer areas... oops.

![lightbox_6_box_interior]({{ site.url }}/images/lightbox_6_box_interior.jpg)

But, these boards turned out great! These PCBs will be used to make function generators in Eric Rosenthal's [Basic Analog Circuits class](http://www.basicanalogcircuits.com/Syllabus.html). I hope the class enjoys them!

![lightbox_7_solder_mask_applied]({{ site.url }}/images/lightbox_7_solder_mask_applied.jpg)
