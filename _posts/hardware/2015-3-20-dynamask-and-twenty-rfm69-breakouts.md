---
layout: page
title: Dynamask and Twenty RFm69 Breakouts
subheadline: strong and cheap wireless tranceiver
teaser: Twenty RFm69 wireless tranceiver breakout boards, and
breadcrumb: false
categories:
    - hardware
tags:
    - wireless
    - pcb
    - diy

image:
    thumb: rfm69_thumb.jpg

header: no

author: Andy Sigler
---

The radio is a great solution for making a DIY mesh network, especially since an [Arduino library's](https://github.com/LowPowerLab/RFM69) already been written and well tested. I used their predecessor, the RFm12b, for my master's thesis, and this semester Benedetta Piantella's [Networked Sensor for Development](https://itp.nyu.edu/classes/nsfd/) class needs 20 of them.

This post also shows some of my early experiences (failures) with the Dynamask solder mask. I followed [this video tutorial](https://www.youtube.com/watch?v=B0Syj4awcc8) on preparing the materials and applying the film.

### Step 1: Mill the Panel

I milled the double-sided breakout boards on ITP's Roland Modela CNC, using my [Nodela]({{ site.url }}/hardware/nodela/) software.

![rfm69_finished_panel]({{ site.url }}/images/rfm69_finished_panel.png)

### Step 2: Print UV Mask onto Transparency Paper

When we expose our board to UV light, we want to block the light from hitting parts of our PCB that need to be soldered to.

![rfm69_printed_sheet]({{ site.url }}/images/rfm69_printed_sheet.jpg)

Using transparency paper and a standard laser printer, I printed the tStop and bStop Eagle layers, makiing sure that they were spaced just as my panels were.

![rfm69_next_to_boards]({{ site.url }}/images/rfm69_next_to_boards.jpg)

### Step 3: Laminate Dynamask onto PCB

First cut our a desired amount of Dynamask film to fit onto the panel. The glossier side of the Dynamask film has adhesive under the plastic covering. Peel the plastic off, stick the Dynamask to the PCB, and pass it through a laminator 4 times.

![rfm69-1_cut]({{ site.url }}/images/rfm69-1_cut.jpg)

When passing it through the laminator like in the picture below, be sure all air bubbles have been pushed out and the Dynamask is applied as evenly as possible.

![rfm69-2_laminate]({{ site.url }}/images/rfm69-2_laminate.jpg)

### Step 4: Expose to UV Light

Align the PCB and transparency paper, and expose to UV light until fully exposed. The amount of time required depends on the power of the UV light being used. For my DIY lightbox, I only have to expose for 30-60 seconds.

![rfm69-3_align]({{ site.url }}/images/rfm69-3_align.jpg)

### Step 5: Develop to Expose Copper

Add the developer to water, and scrub the board for 1-2 minutes. I forgot to add documentation for this step in making the radios, so just pretened I showed you ;)

Instead, here's a video of me developing two PCBs for making microcontrollers. They're different boards, but the process is identical.

<iframe src="https://player.vimeo.com/video/127789344" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="max-width:500px;width:100%;"></iframe>

### Step 6: Finish and Test

As you can see in the image below, my solder mask did <strong>not</strong> get exposed evenly. Way too much solder mask was removed during the developing process. This is because those pieces of solder mask were not hit with enought UV light.

![rfm69-5_mask_done]({{ site.url }}/images/rfm69-5_mask_done.jpg)

But, they all work! Good luck to the class, and I hope they enjoy using them!

I learned through making these breakout boards that my UV lightbox does not spread light evenly, and that I needed to give more distance between the UV LED's and my PCB.

![rfm69]({{ site.url }}/images/rfm69.jpg)

I built a new UV lightbox from a deeper metal box I had lying around

![metal-lightbox]({{ site.url }}/images/lightbox_10_metal_box.jpg)






