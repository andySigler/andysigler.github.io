---
layout: video
subheadline: "How to Make the Internet of Useless Things"
title:  "ITP Master's Thesis"
teaser: "An exploration in fabrication, process, and interaction while making an internet of useless things."
breadcrumb: false
categories:
    - projects
tags:
    - blog
    - content
    - post
    - post format

image:
    title: "How to Make the Internet of Useless Things"
    homepage: uselessThings.jpg
    thumb: uselessThings_thumb.jpg

author: Andy Sigler

header:
    image_fullwidth: uselessThings.jpg

iframe: "<iframe width='970' height='546' src='//player.vimeo.com/video/96851567' frameborder='0' allowfullscreen></iframe>"

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


Below is a demo for the Patchbay interface. Turn the circles to view the projects, and make or break the links between inputs and outputs. The interface works on desktop, laptop, and touchscreen (recommended).

I more detailed explanation of the interface can be found in [this blog post]({{sitle.url}}/patchbay/patchbay-interface).


<div id="routerContainer" style="margin-bottom:1.5rem">
	<div id="patchbayTitle">PatchBay</div>
	<canvas id="canvas"></canvas>
</div>

Download the Patchbay framework (as it was upon presenting my thesis) from [GitHub]({{site.github}}/patchbay). The package includes the nodeJS server, HTML5 interface, Arduino library and examples for making a physical computing projects work with the patchbay.
