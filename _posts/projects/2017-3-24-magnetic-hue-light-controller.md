---
layout: page
title: Magnetic Hue Light Controller
subheadline: A Novel Interface to Control Hue Lights
teaser: A magnetic, four-sided die to control my Hue lights
breadcrumb: false
categories:
    - projects
tags:
    - wireless
    - homemade
    - iot

image:
    homepage: hue-fridge-bulb.jpg
    thumb: hue-fridge-bulb.jpg

header: no

author: Andy Sigler

published: true
---

![Pictures of the hue controller]({{site.url}}/images/hue-fridge.jpg)

By simply changing the orientation of this device, it will control all the lights in my apartment. Plus, it can also work by sticking to a refrigerator (or anything else magnetic), and it's battery lasts an entire year without a recharge.

It's like a magical 4-sided die; change the face, and it sets my Hue light settings. I've grown tired of the Apps and voice commands available to control my lights, so I made something physical and more interesting than just a button or something.

This project started as a collaboration with [Jay Zehngebot](http://www.jayzehngebot.com/realjayz/?/about/) to redesign his 12-sided die, the "dod".

Watch the video below to see a quick demo of me controlling 3 Hue bulbs. It shows the device can work both on a tabletop, and also when magnetically attached to something (like a watering pot).

<video id="vid_demo" style="margin-left:auto;margin-right:auto;display:block;width:100%;max-width:640px; height:auto; border:1px solid #aaa" width="1280" height="720" controls loop poster="{{site.url}}/images/hue-demo-poster.png">
  <source src="{{site.url}}/images/hue-demo.webm" type="video/webm">
  <source src="{{site.url}}/images/hue-demo.ogv" type="video/ogg">
  <source src="{{site.url}}/images/hue-demo.mp4" type="video/mp4">
</video>
<script type="text/javascript">
//    var vid_demo = document.getElementById('vid_demo');
//    vid_demo.removeAttribute('controls');
//    vid_demo.addEventListener('canplaythrough', function(e){
//        vid_demo.play();
//    })
</script>

<br />

I thought it would be a fun interaction to keep this thing on my refrigerator, so it was available to me whenever I was in the kitchen (we have limited counter space).

The looping video below shows that if you change which face is against the fridge, then it will turn the kitchen light on or off.

<video id="vid_fridge" style="margin-left:auto;margin-right:auto;display:block;width:100%;max-width:640px; height:auto; border:1px solid #aaa" width="1280" height="720" controls loop muted>
  <source src="{{site.url}}/images/hue-fridge-loop.webm" type="video/webm">
  <source src="{{site.url}}/images/hue-fridge-loop.ogv" type="video/ogg">
  <source src="{{site.url}}/images/hue-fridge-loop.mp4" type="video/mp4">
</video>
<script type="text/javascript">
    var vid_fridge = document.getElementById('vid_fridge');
    vid_fridge.removeAttribute('controls');
    vid_fridge.addEventListener('canplaythrough', function(e){
        vid_fridge.play();
    })
</script>

<br />

Detecting this magnetic attachement is done using internal hall effect sensors. There are 4 total sensors, one next to each of the internal magnets. When a magnet is near another magnetic surface, the sensor detects the change in magnetic field.

![How the magnets work]({{site.url}}/images/hue-magnet-describe.jpg)

Even cats like it!

![On a cat]({{site.url}}/images/hue-cat.jpg)

<br />
<br />

## DIY Fabrication

I used a Bantam Tools Milling Machine to cut the circuit boards.

<video id="vid_pcb" style="margin-left:auto;margin-right:auto;display:block;width:100%;max-width:640px; height:auto; border:1px solid #aaa" width="1280" height="720" controls loop muted>
  <source src="{{site.url}}/images/hue-pcb.webm" type="video/webm">
  <source src="{{site.url}}/images/hue-pcb.ogv" type="video/ogg">
  <source src="{{site.url}}/images/hue-pcb.mp4" type="video/mp4">
</video>
<script type="text/javascript">
    var vid_pcb = document.getElementById('vid_pcb');
    vid_pcb.removeAttribute('controls');
    vid_pcb.addEventListener('canplaythrough', function(e){
        vid_pcb.play();
    })
</script>

<br />

![The main PCB]({{site.url}}/images/hue-pcb-coin.jpg)

The entire device is made up of 4 circuit boards, connected together with slots and solder.

![Slotted PCBs fit together to make the sides]({{site.url}}/images/hue-pcb-slots.jpg)

An ESP32 module is used to run the firmware, connect to the Hue lights system over WiFi, and to enter a deep sleep mode. A 3-axis accelerometer is used to detect both movements and which side is facing down. Finally, 4 hall-effect sensors are placed on each PCB near that side's magnet.

If a movement is detected, the device will wake up from deep sleep. Once it is no longer moving, it will first check to see if a magnetic field is being pulled in any direction. If not, then it will check to see which side is facing down. The user-selected face is then used to set a Hue lights Scene.

![Components soldered on]({{site.url}}/images/hue-pcb-soldered.jpg)

There's a 400mA/h lipo battery which fits snuggly inside. A micro-usb port is used to charge the battery, and also a small speaker can play sounds to let the user know what is going on.

![Images of a prototype]({{site.url}}/images/hue-prototype-grid.jpg)

The rounded shape of the device prevents it from resting on any side that does not have a magnet. Because the device is entirely covered in plywood, I needed to bend a piece to match near-perfectly with it's form.

To form the wood, I used a piece of 1" thick wood sanded down to match the shape, then some clamps and a sink full of water. The water allowed the wood to be more flexible, so as I slowly bent it to the rounded shape, it did not crack anywhere. I then left it clamped for 24 hours so it stayed put.

![Bending some plywood for the enclosure]({{site.url}}/images/hue-bend-wood.jpg)
