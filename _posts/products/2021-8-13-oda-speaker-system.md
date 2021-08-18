---
layout: page
title:  "Oda Speaker System"
subheadline: "2020 - Present"
teaser: 
breadcrumb: false
categories:
    - products
tags:
    - automation

image:
    title: oda-banner-transparent.png
    thumb: oda-thumb.jpg

author: Andy Sigler

header: no

published: true

---

<!-- remove border from title image, b/c it has alpha channel -->
<script type="text/javascript">
    document.getElementById('titleImage').style.border = '0px';
</script>

The Oda speaker system ([oda.co](https://oda.co)) is designed for playing live performances. It consists of a pair of flat-panel (DML) speakers, a wireless amplifier, and the backend infrastructure for streaming live sound.

Upon connecting their speakers to WiFi, customers can listen to daily livestreams and musical performances from locations and artists around the world.

 - WiFi streams
 - Bluetooth audio
 - Line-In (Aux)
 - BLE App control

![oda-lighthouse]({{site.url}}/images/oda-lighthouse.png)
<!-- ![oda-accessories]({{site.url}}/images/oda-accessories.png)  -->

The flat-panel (DML) speakers are a novel design, which look simple and sleak, as well as being uniquely suited for live performances because of their spread-spectrum response.

High frequencies are scattered in multiple directions, creating a larger stereo image and presence for the listener.

See the slow-motion video below, showing how the speakers moves:

<video id="vid_oda_soundboard" style="width:100%;max-width:400px; height:auto; border:1px solid #aaa" width="640" height="360" controls loop muted>
  <source src="{{site.url}}/images/oda-moving-soundboard.webm" type="video/webm">
  <source src="{{site.url}}/images/oda-moving-soundboard.ogv" type="video/ogg">
  <source src="{{site.url}}/images/oda-moving-soundboard.mp4" type="video/mp4">
</video>
<script type="text/javascript">
    var vid_oda_soundboard = document.getElementById('vid_oda_soundboard');
    vid_oda_soundboard.removeAttribute('controls');
    vid_oda_soundboard.addEventListener('canplaythrough', function(e){
        vid_oda_soundboard.play();
    })
</script>

<!-- ![oda-table-top]({{site.url}}/images/oda-table-top.png) -->

Our 2nd-generation speakers (pictured below) achieve a frequency reponse of ~40Hz-20kHz, making them both look great and sound big.

![oda-inside-panel-v2]({{site.url}}/images/oda-inside-panel-v2.png)

The core electronics components are the ESP32 from Espressif, and the TAS5825M audio amplifier from TI.

![oda-pcb]({{site.url}}/images/oda-pcb.png)

A testing and fulfillment center was established in Brooklyn, NY to test and ship our first 1000 units to customers. A major component of our R&D and testing suite was the Klippel KA3 and a custom-build "panel-chamber" for acoustically isolated our speakers during evaluation.

![oda-panel-chamber]({{site.url}}/images/oda-panel-chamber.png)

Below is a picture of the many units we tested and shipped.

![oda-fulfillment-center]({{site.url}}/images/oda-fulfillment-center.png)


