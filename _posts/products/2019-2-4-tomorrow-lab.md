---
layout: page
title:  "Tomorrow Lab"
subheadline: "Works Done at Tomorrow Lab"
teaser: "Some work designed while at Tomorrow Lab"
breadcrumb: false
categories:
    - products
tags:
    - automation

image:
    title: tomorrow-lab-banner.jpg
    thumb: tomorrow_lab_small.png

author: Andy Sigler

header: no

published: true

---

I spent about a year working as a Electronics Design Engineer at [Tomorrow Lab](https://www.tomorrow-lab.com). It was a wonderful experience, as it was my first job outside of the NYU sphere, and we were constantly working on new initiatives and technologies.

Below I have described three products that I contributed to, some with more contributions than others. However, as Tomorrow Lab is hired by outside companies to design, some of the products that we spent considerable time on were never revealed to the world for any number of reasons outside of our control. Those that did not make it are not shown on this page, which is too bad (sad-face).

<br/>
<br/>

### WayCount - Traffic Counter

[See documentation on Tomorrow Lab's website](https://www.tomorrow-lab.com/work/waycount)

The WayCount it a car-counting device. It uses long tubes stretched across a rode to sense a car, logs the time it happened, and then transfers the accumulated data over Bluetooth to the owner's smartphone.

![WayCount Traffic Counter]({{site.url}}/images/waycount-1.jpg)

The motivations behind making the, as conceived by Ted Ulrich at Tomorrow Lab, was to be an affordable, easy to use, and well designed device help monitor and plan traffic flows. The original WayCount transferred it's data over USB, and had a more DIY feel. This next generation model was better designed, more accurate, and allowed data transfer wirelessly to make retrieval easier.

My personal contributions to this project were early component testing and selection, systems design, firmware development, electrical/PCB design, and testing.

![WayCount Traffic Counter]({{site.url}}/images/waycount-2.jpg)

#### How it Works

When a wheel passes over the rubber tubes, it compresses the air inside, sending that pressure out to the ends of the tube. There are two tubes a few inches apart, so that the direction of the wheel can be estimated. Inside the device, a small piezo microphone is press-fit against the tube, to detect when there is a change in air pressure.

Small amplifiers are used to boost the signal into a higher voltage. This signal then triggers the onboard analog counting ICs. These ICs were able to increment their binary outputs on every rising edge of the input signal, allowing very fast consecutive pulses to be temporarily recorded. Once a counter hit its limit, the microntroller would wake up from deep sleep and record the number of pulses that have occured since the last recording.

The microcontroller inside is the NRF51822 from Nordic, which has built-in Bluetooth LE capabilities, as well as ultra low-power features to conserve battery power. With the combination of the analog counting ICs and the NRF51's low-power consumption, the device is able to stay powered on a single battery for a few years.

<br/>
<br/>

### Lotik - Water Monitor

[See documentation on Tomorrow Lab's website](https://www.tomorrow-lab.com/work/lotik)

This device, designed for [Lotik Labs](https://lotik.com), is a water-usage monitor of for residential plumbing. The device is clamped onto any water pipe, like for a sink, faucet, or toilet, and it can detect when and how much water is flowing. This data is then sent wireless to a central hub located in the building, to transmit to Lotik's central monitoring service.

![Lotik Labs' Water Monitor]({{site.url}}/images/lotik-1.jpg)

Intended to be used by apartment building owners, installing many devices within a single building not only helps the devices communicate back to the internet, but also gives greater understanding into how, when, and who is using water in a building. Traditionally, a single apartment is given a single meter to track how much water is used, but with Lotik's technology, the detail can be focused down to individual uses.

My personal contributions to this project were early component testing and selection, systems design, firmware development, electrical/PCB design, and testing.

![Lotik Labs' Water Monitor]({{site.url}}/images/lotik-2.jpg)

#### How it Works

The Lotick water monitor detects vibrations along a water pipe to detect and analyze the water usage. First, the device is mechanically clamped down and lock onto a water pipe. Once powered on, it's onboard acclerometer measures the vibrations' intensity, frequency, and duration. This information is then sent wirelessly to a central hub and then on to Lotik's central servers.

The microcontroller used was the NRF51422 from Nordic, selected primarily to utilize its built-in ANT+ wireless technology. ANT+ is a protocol which uses the same physical layer as Bluetooth LE, however it was designed for use with low-power mesh networking.

<br/>
<br/>

### Rally - Phone Charger

[See documentation on Tomorrow Lab's website](https://www.tomorrow-lab.com/work/rally)

The Rally Charging Cable was designed for [Rally](https://rallycharge.com/), to a simple iPhone charging cable for public use. Any user, whether at a restaurant, bar, or other public space, can simply connect their phone to get a quick charge. When connected, the device charges the iPhone like normal, except the iPhone will display advertisements while being charged. Once the user is done charging, simply unplug and the advertisements stop.

![Rally's iPhone Charger]({{site.url}}/images/rally-1.jpg)

My contributions to this project were minimal, as it was finishing up when I first joined Tomorrow Lab. I contributed to final PCB design and testing for the integrated iPhone cable.
