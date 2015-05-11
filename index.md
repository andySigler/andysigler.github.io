---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: page
permalink: "/"
show_meta: false
header: no
---
<script type="text/javascript">
	document.getElementById('navigation').style.display = 'none';
</script>
<div style="margin-top:-54px;">
	<span class="avoidMe matchbook noselect" id="nameLogo">{{ site.nickname }}</span>
	<br />
	<span class="avoidMe matchbook noselect" id="subLogo">{{ site.slogan }}</span>
</div>
<span style="display:block;width:100%;max-width:320px;text-align:center;margin-top:10px;" markdown="1">
	<span class="avoidMe subheadline" style="float:left;">
	[projects]({{ site.url }}/projects/)
	</span>
	<span class="avoidMe subheadline" style="">
	[blog]({{ site.url }}/blog/)
	</span>
	<span class="avoidMe subheadline" style="float:right;">
	[about]({{ site.url }}/about)
	</span>
</span>

<canvas id="seeds" style="z-index:-100;position:absolute;top:-30px;left:0px;margin:0;padding:0;display:inline-block;margin-bottom:-6px">
</canvas>
<script type="text/javascript" src="{{ site.url }}/assets/js/doodling.js"></script>