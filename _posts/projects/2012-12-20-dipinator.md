---
layout: video
subheadline: "2012"
title:  "Dipinator"
teaser: 
breadcrumb: false
categories:
    - projects
tags:
    - blog
    - content
    - post
    - post format

image:
    homepage: dipinator.png
    thumb: dipinator_small.png

header: no

author: Andy Sigler

iframe: "<iframe width='970' height='546' src='//player.vimeo.com/video/56198824' frameborder='0' allowfullscreen></iframe>"

---

Dipinator is a musical instrument and game, created with <a target="_blank" href="https://xc-xd.com/">Xuedi Chen</a> and <a target="_blank" href="https://taranagupta.com/">Tarana Gupta</a>. Dipinator is played with your fingers through simply touching the water, located in one of 14 different cups. This intuitive action will either allow the user to play a musical tone, or interact with the built in memory game. The sensation of submerging one's finger in liquid is connected with sound and light, creating a surreal experience and the ability to play music with water.

Dipinator uses an Arduino Mega, Max/MSP/Jitter, and Ableton Live. The Arduino Mega is used to measure the capacitance of each water cup, in addition to lighting the LEDs hidden under each cup. Max, receiving the capacitance measurements, creates a corresponding MIDI note when the capacitance of a water cup increases. This happens when the user touches their finger to the water, adding their body to the circuit and changing the values read. This MIDI note then triggers a sound in Ableton Live, and the level of this sound directly controls the brightness of the LEDs of the selected cup. This allows the LEDs to act in accordance with the triggered sound.