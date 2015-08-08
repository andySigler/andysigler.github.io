---
layout: page
subheadline: "Tag any webpage with digital BitTorrent stickers"
title:  "Browser Tag"
teaser: "Drag the 'BitTorrent Is Not A Crime' image to your bookmark bar, and cover any webpage with digital stickers."
breadcrumb: false
categories:
    - projects
tags:
    - blog
    - content
    - post
    - post format

image:
    homepage: bookmarklet.png
    thumb: bookmarklet_small.png

author: Andy Sigler

header: no

---
<a markdown="1" class="span8 offset3" title="BitTorrent-Sticker" name="BitTorrent-Sticker" href="javascript:(function()%7Bvar%20bk%3D%7Bmouse:%7Bx:0,y:0%7D,imgCounter:0,allImages:%5B%5D,maxImages:500,maxWidth:500,minWidth:10,ratio:270/880,prev:0.5,slide:2,move:false,toggle:true,highestZ:100000,img:document.createElement(%22img%22)%7D%3Bbk.img.src%3D%22{{ site.url }}/images/btnc.png%22%3Bfunction%20cloneImage(a,f,d)%7Bvar%20c%3DgetWidth()%3Bif(c%3Cbk.minWidth)%7Bc%3D200%7Dvar%20b%3DMath.floor(c*bk.ratio)%3Bvar%20e%3Dbk.img.cloneNode(true)%3Be.style.position%3D%22absolute%22%3Be.style.width%3Dc%2B%22px%22%3Be.style.height%3Db%2B%22px%22%3Be.style.top%3D(f-(b/2))%2B%22px%22%3Be.style.left%3D(a-(c/2))%2B%22px%22%3Be.style.zindex%3Dbk.highestZ%2Bbk.imgCounter%3Bif(e.style.webkitTransform!%3D%3Dundefined)%7Be.style.webkitTransform%3D%22rotate(%22%2Bd%2B%22deg)%22%7Delse%7Bif(e.style.MozTransform!%3D%3Dundefined)%7Be.style.MozTransform%3D%22rotate(%22%2Bd%2B%22deg)%22%7Delse%7Bif(e.style.msTransform!%3D%3Dundefined)%7Be.style.msTransform%3D%22rotate(%22%2Bd%2B%22deg)%22%7Delse%7Bif(e.style.OTransform!%3D%3Dundefined)%7Be.style.OTransform%3D%22rotate(%22%2Bd%2B%22deg)%22%7Delse%7Bif(e.style.transform!%3D%3Dundefined)%7Be.style.transform%3D%22rotate(%22%2Bd%2B%22deg)%22%7D%7D%7D%7D%7De.id%3D%22img_%22%2Bbk.imgCounter%3Bbk.imgCounter%2B%2B%3Bdocument.body.appendChild(e)%7Dfunction%20getWidth()%7Bvar%20a%3D((Math.tan(((Math.random()*2)-1)*(Math.PI/4))%2B1)/2)%3Bbk.prev%3Dbk.prev%2B((a-bk.prev)/bk.slide)%3Breturn%20Math.floor((bk.prev*bk.maxWidth)%2Bbk.minWidth)%7Dwindow.onmousemove%3Dfunction(a)%7Bbk.mouse.x%3Da.pageX%3Bbk.mouse.y%3Da.pageY%3Bbk.move%3Dtrue%7D%3Bwindow.onclick%3Dfunction(a)%7Bbk.toggle%3D!bk.toggle%7D%3Bfunction%20findHighestZIndex()%7Bvar%20g%3D%5B%22div%22,%22p%22,%22img%22%5D%3Bvar%20f%3D0%3Bvar%20a%3Dg.length%3Bfor(var%20b%3D0%3Bb%3Ca%3Bb%2B%2B)%7Bvar%20c%3Ddocument.getElementsByTagName(g%5Bb%5D)%3Bfor(var%20e%3D0%3Be%3Cc.length%3Be%2B%2B)%7Bvar%20d%3Ddocument.defaultView.getComputedStyle(c%5Be%5D,null).getPropertyValue(%22z-index%22)%3Bif((d%3Ef)%26%26(d!%3D%22auto%22))%7Bf%3Dd%7D%7D%7Dbk.highestZ%3Df%7DsetInterval(function()%7Bif(bk.move%26%26bk.toggle)%7BcloneImage(bk.mouse.x,bk.mouse.y,Math.floor(Math.random()*80-40))%3Bbk.move%3Dfalse%7D%7D,100)%3BfindHighestZIndex()%3B%7D)()%3B" alt="BitTorrent-Sticker" >
  <img id="sticker" width="360" border="3" title="BitTorrent-Sticker" src="{{ site.url }}/images/btnc_fold.png" name="BitTorrent-Sticker" alt="BitTorrent-Sticker" style="border:2px solid black"/>
</a>

## Instructions:
1. <strong>Drag</strong> the sticker to your <strong>bookmark bar</strong>.
2. Go to any website and <strong>click</strong> the "BitTorrent-Sticker" bookmarklet.
3. <strong>Move</strong> your cursor to start tagging the page, click to turn on/off.

This bookmarklet was my first and favorite thing I made while interning for <strong>BitTorrent</strong> during the summer of 2013. It is a bookmarklet that, when pressed on any webpage, injects a small script to cover the page with the <strong>BitTorrent Is Not a Crime</strong> campaign sticker. Simple and fun.