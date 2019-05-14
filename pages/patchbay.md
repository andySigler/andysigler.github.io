---
layout: page
title: "Patchbay"
subheadline: "Patchbay"
teaser: ""
permalink: "/patchbay/"
markdown: 1
show_meta: false
<!-- header: no -->
header:
    image_fullwidth: uselessThings.jpg
---

Patchbay is a wireless framework and interface, built to facilitate improvisation and play with a network of connected instruments and toys.

I love tech because of the new toys and magical powers it makes possible for us to enjoy and play with. In 2014, I had been fascinated with the promises of interoperability and mesh networking when applied to playful objects. This thesis project was my answer to how I could improvise with the links between mine and my classmates' projects.

<video poster="{{ site.url }}/patchbay_old/img/patchbay_demo.png" id="bgvid" style="max-width: 100%" controls loop muted>
    <source src="{{ site.url }}/patchbay_old/img/patchbay_demo.mp4" type="video/mp4">
    <source src="{{ site.url }}/patchbay_old/img/patchbay_demo.webm" type="video/webm">
    <source src="{{ site.url }}/patchbay_old/img/patchbay_demo.ogv" type="video/ogv">
</video>
<script type="text/javascript">
    var bgvid = document.getElementById('bgvid');
    bgvid.removeAttribute('controls');
    bgvid.addEventListener('canplaythrough', function(e){
        bgvid.play();
    })
</script>

It was built in the Spring of 2014 for my master's thesis at ITP. The interface was made in HTML, so it can be easily ported to different platforms. The electronics were custom milled and assembled microcontrollers and radio combinations, and all the toys and instruments were either found objects or gifts given to me.

Here is a <a href="https://github.com/andysigler/patchbay">link to the Github repository</a>, containing the App, and Arduino library, and PCB designs and hookup guide.

You can see my thesis presentation from 2014 in the video below:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/137709063" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

<br>

And here is a 2 minute demonstration video:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/140340194" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

<br>

I've also got a demo of the interface here. Click the fake touchpad to start, and you can rotate the circle, and make/break links.

<script type="text/javascript" src="{{ site.url }}/patchbay_old/js/patchbay/hammer.min.js"></script>
<script type="text/javascript" src="{{ site.url }}/patchbay_old/js/patchbay/websocketStuff.js"></script>
<script type="text/javascript" src="{{ site.url }}/patchbay_old/js/patchbay/canvasStuff.js"></script>
<script type="text/javascript" src="{{ site.url }}/patchbay_old/js/patchbay/touchStuff.js"></script>
<script type="text/javascript" src="{{ site.url }}/patchbay_old/js/patchbay/cord.js"></script>
<script type="text/javascript" src="{{ site.url }}/patchbay_old/js/patchbay/port.js"></script>
<script type="text/javascript" src="{{ site.url }}/patchbay_old/js/patchbay/arc.js"></script>
<script type="text/javascript" src="{{ site.url }}/patchbay_old/js/patchbay/circle.js"></script>
<script type="text/javascript" src="{{ site.url }}/patchbay_old/js/patchbay/mouse.js"></script>
<script type="text/javascript" src="{{ site.url }}/patchbay_old/js/patchbay/initPatchbay.js"></script>
<div id="ipad_div">
    <style type="text/css">
        .vert_align{
            position: relative;
            top: 50%;
            -moz-transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            overflow: hidden;
        }

        #ipad_div{
            display: block;
            position: relative;
            width:100%;
            height:100%;
            margin-left:auto;
            margin-right: auto;
            background-color:rgb(79,79,79);
            color:white;
            border-radius: 4.2%;
        }

        #ipad_image{
            position:relative;
            top:0px;
            left:0px;
            width:100%;
            height:100%;
            z-index: 0;
        }

        #routerContainer{
            position: absolute;
            left:8.9%;
            top:10.5%;
            width:81%;
            height:60%;
            z-index:2000;
        }

        #ipad_text_top{
            display:none;
            text-align: right;
            width:45%;
            position:absolute;
            top:6%;
            right:13%;
        }

        #ipad_text_bottom{
            display:none;
            width:45%;
            position:absolute;
            bottom:10%;
            left:11%;
        }

        #canvas{
        }

        #demo_alert{
            position: absolute;
            background-color: rgba(0,0,0,0.0);
            color:white;
            left:8.9%;
            top:10.5%;
            width:81.3%;
            height:78.5%;
            z-index:3000;
            cursor: pointer;
            text-align: center;

            -webkit-animation: colorFade 3s ease-in-out infinite;
            -moz-animation:    colorFade 3s ease-in-out infinite;
            -o-animation:    colorFade 3s ease-in-out infinite;
            animation:         colorFade 3s ease-in-out infinite;
        }
        @-webkit-keyframes colorFade {
            0%   { background-color: rgba(79,79,79,1) }
            50% { background-color: rgba(79,79,79,0.7) }
            100% { background-color: rgba(79,79,79,1) }
        }
        @-moz-keyframes colorFade {
            0%   { background-color: rgba(79,79,79,1) }
            50% { background-color: rgba(79,79,79,0.7) }
            100% { background-color: rgba(79,79,79,1) }
        }
        @-o-keyframes colorFade {
            0%   { background-color: rgba(79,79,79,1) }
            50% { background-color: rgba(79,79,79,0.7) }
            100% { background-color: rgba(79,79,79,1) }
        }
        @keyframes colorFade {
            0%   { background-color: rgba(79,79,79,1) }
            50% { background-color: rgba(79,79,79,0.7) }
            100% { background-color: rgba(79,79,79,1) }
        }

        #demo_alert:hover{
            color:rgb(43,211,252);
        }
    </style>
    <div id="routerContainer">
        <canvas id="canvas"></canvas>
    </div>
    <img id="ipad_image" src="{{ site.url }}/patchbay_old/img/ipad.png"/>
    <div id="ipad_text_top">
        <h2 style="color:white">
            Wireless Links I can Touch
        </h2>
        <p>
            <span style="color:rgb(43,211,252)">INPUTS</span> in the left circle, <span style="color:rgb(43,211,252)">OUTPUTS</span> in the right. Rotate the circles to explore the connections.
        </p>
    </div>
    <div id="ipad_text_bottom">
        <h2 style="color:white">Hiding Network Complexity</h2>
        <p>Circles can display many devices, yet the interface focuses on just one at a time.</p>
    </div>
    <div id="demo_alert">
        <div class="vert_align" style="width:70%;margin-left:auto;margin-right:auto;">
            <h1 style="color:white"><strong>Click to start demo.</strong></h1>
        </div>
    </div>
    <script type="text/javascript">
        document.getElementById('demo_alert').addEventListener('click',function(){
            document.getElementById('demo_alert').parentNode.removeChild(document.getElementById('demo_alert'));
            document.getElementById('ipad_text_top').style.display = 'inline';
            document.getElementById('ipad_text_bottom').style.display = 'inline';
        });
    </script>
</div>
