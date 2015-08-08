---
layout: video
subheadline: "Interactive installation for books on a shelf"
title:  "Bookmapping"
teaser: "Books on a shelf come to life when used as a medium for animation and interaction."
breadcrumb: false
categories:
    - projects
tags:
    - blog
    - content
    - post
    - post format

image:
    homepage: bookmapping.png
    thumb: bookmapping_small.png

header: no

author: Andy Sigler

iframe: "<iframe width='970' height='546' src='//player.vimeo.com/video/60603629' frameborder='0' allowfullscreen></iframe>"

---
Bookmapping was made in collaboration with <a href="http://johncapogna.com/" target="blank">John Capogna</a>, as a part of our Spatial Media during the Spring 2013 semester at ITP. The piece is a prototype for an installation for Strand Bookstore, located near Tisch on Broadway. It is an interactive video sculpture, which allows the user to highlight selected books, and interact with animations made to bounce off the books and walls of the shelf.

The piece begins with an illuminated book shelf, drawing the user to approach and interact. Upon pulling a book out fromt the rest of the shelf, it's binding will be illuminated, highlighting the bindings contents, as well as triggering an animation that lives on top of the other books. These animated balls move around at will, only reacting to the walls of the shelf, and the pulled out books. Both singular and groups of books can be selected, creating a color palette and environment for the animations to live within.

Made using Max/MSP/Jitter for the sensing and blob detection (using Microsoft's Kinect and the cv.jit library), Processing to create the colors and animations, and finally MadMapper to projection map the images back onto the book shelf.