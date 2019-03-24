---
layout: page
title: Magnetic Hue Light Controller
subheadline: A Novel Interface to Control Light Scenes
teaser: I made a magnetic, wireless, four-sided die to control my Hue lights
breadcrumb: false
categories:
    - projects
tags:
    - wireless
    - homemade
    - iot

image:
    homepage: placeholder.png
    thumb: placeholder.png

header: no

author: Andy Sigler

published: true
---

![Pictures of the hue controller]({{site.url}}/images/hue-still.jpg)

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

![How the magnets work]({{site.url}}/images/hue-magnet-describe.jpg)

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

![The main PCB]({{site.url}}/images/hue-pcb-coin.jpg)

![Slotted PCBs fit together to make the sides]({{site.url}}/images/hue-pcb-slots.jpg)

![Components soldered on]({{site.url}}/images/hue-pcb-soldered.jpg)

![Images of a prototype]({{site.url}}/images/hue-prototype-grid.jpg)

![Bending some plywood for the enclosure]({{site.url}}/images/hue-bend-wood.jpg)
