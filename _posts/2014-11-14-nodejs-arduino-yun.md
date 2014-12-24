---
layout: post
title: NodeJS + Yun
image: nodejs_arduino.jpg
subtitle: Installing and Running NodeJS on the Arduino Yun
excerpt: Below are the steps to get NodeJS up and running on the Arduino Yun. This tutorial assumes you have already connected the Yun to your network, and have a basic understanding of NodeJS.
---

<div class="block"><div class="content-centered" markdown="1">

##Before you begin

Below are the steps to get NodeJS up and running on the Arduino Yun. This tutorial assumes you have already connected the Yun to your network, and have a basic understanding of NodeJS.

The final steps (red section) of this tutorial are optional and should be taken with caution. They show how to disable Bridge on the Yun, in order to allow NodeJS to speak directly with the Arduino side of the board using node-serialport.

This, however, means you can only access the Linux side of the board over the network. If you do not have control over the network between your computer and Yun, you will not be able to connect.

</div></div>
<div class="block"><div class="content-centered" markdown="1">

##Update and Expand your Yun

###Update the Yun's image

To do all the following, make sure you have updated your Yun to the latest image. This to to allow your Yun to have is disk space expanded in the next step.

<a href="http://arduino.cc/en/Tutorial/YunSysupgrade" class="inpost-link" target="_blank">Instructions on updating the Yun's image</a>

###Expand disk space with SD card

We will be moving the Yun's operating system and memory onto a micro-sd card, so that we have enough room to install and run NodeJS.

<a href="http://arduino.cc/en/Tutorial/ExpandingYunDiskSpace" class="inpost-link" target="_blank">Instructions on expanding the Yun's disk space</a>

</div></div>
<div class="block"><div class="content-centered" markdown="1">

##Install NodeJS and SFTP

###Install Node and node-modules with opkg

With an updated Yun image and more memory, we can install Node using opkg (the Yun's package management system). Be sure the Yun is connected to the internet.

Enter the following line into the Yun to prepare opkg.

{% highlight html %}
	opkg update
{% endhighlight %}

After each call to opkg, you should see some lines about downloading and installing some files.

Next install NodeJS with the following line.

{% highlight html %}
opkg install node
{% endhighlight %}

This may take a few moments. After it's finished, install the pre-compiled node-modules using opkg.

{% highlight html %}
opkg install node-ws 
opkg install node-serialport
{% endhighlight %}

There are a few other pre-compiled node-modules you can install through opkg. All modules are installed globally, so there is no need to ever run npm (especially because npm doesn't work on the Yun...)

###Add SFTP to transfer files

Uploading files to the Yun is much faster if you don't have to turn it off every time. To do this, we have enable our Yun to be accessed over SFTP. Now, applications like CyberDuck can connect to and upload files to your Yun

Enter the following line to install the SFTP package, and now you can connect to it using an FTP client like CyberDuck.

{% highlight html %}
opkg update 
opkg install openssh-sftp-server
{% endhighlight %}

In CyberDuck, connect with SFTP, port 22, username 'root', and the server-name being your Yun's IP address.

![cyberDuck_yun]({{ site.baseurl }}public/images/cyberDuck_yun.png)

I store all the node and web files on the micro-sd card, at <code>/mnt/sda1/arduino/node</code>. "sda1" is the external memory, "arduino" is a folder that should already exist, and "node" is a folder I created to store my Node scripts.

![cyberDuck_yun_2]({{ site.baseurl }}public/images/cyberDuck_yun_2.png)

Now you can upload and run NodeJS scripts on your Yun! See the below link for you can get NodeJS and the Arduino side of the Yun talking with Bridge:

<a href="http://www.tigoe.com/pcomp/code/arduinowiring/1216/#more-1216" class="inpost-link" target="_blank">Node.js on the Arduino Yun</a> - Tom Igoe's example for getting NodeJS and the ATmega32U4 to communicate with Bridge.

</div></div>
<div class="block"><div class="content-centered" markdown="1">

##Make the Yun Unabridged

###Give the ethernet port a static IP

To my mind, the biggest disadvantage of removing Bridge from the Yun, is that you are taking away the ability to access the Linino through the ATmega32U4. This is especially helpul during initial setup, and while configuring the Yun's network.

To give some added security, I have chosen to give my Yun's ethernet port a static, never changing IP address. With this, I can ssh into the Yun over an ethernet cable, using the following steps.

We will edit a file to change the Yun's network settings. The nano command opens it in terminal:

{% highlight html %}
nano /etc/config/network
{% endhighlight %}

If you get the error <code>Error opening terminal: xterm-256color.</code>, the following worked for me.

{% highlight html %}
ln -s x /usr/share/terminfo/78 
export TERM=xterm-color 
nano /etc/config/network
{% endhighlight %}

Find the part of the document that looks like this:

{% highlight html %}
config interface 'wan'
   option iframe 'eth1'
   option proto 'dhcp'
   option metric '10'
{% endhighlight %}

And change it to look like this:

{% highlight html %}
config interface 'wan'
   option iframe 'eth1'
   option 'proto' 'static'
   option 'ipaddr' '192.168.0.200'
   option 'netmask' '255.255.255.0'
   option 'gateway' '192.168.0.1'
   option 'dns' '192.168.0.1'
   option metric '10'
{% endhighlight %}

Instructions on the bottom show how to Write Out (save the file), and Exit.

To Write Out (save your changes), hit <code>CONTROL-O</code>. It will ask if you want to save changes to this file, hit <code>ENTER</code> to save. To Exit hit <code>CONTROL-X</code>.

Restart your Yun, and you will find it's ethernet port has the permanent address <code>192.168.0.200</code>.

In order to ssh into the Yun over an ethernet cable, your laptop's ethernet IP address must share the same two first digits as the Yun's IP. In this example, the laptop's IP should beging width 192 and 168 in order for the two to communicate.

![staticEthernet_mac]({{ site.baseurl }}public/images/staticEthernet_mac.png)

On a Mac, I can go to <code>System Preferences > Network</code>, select the ethernet port, and tell it to be a Manual IP Address (not DHCP). For example, I could set my laptop to be <code>192.168.0.42</code>.

</div></div>
<div class="block"><div class="content-centered" markdown="1">

##Disable Bridge on the Yun

<p class="message">
Warning: Proceed with Caution!
To disable Bridge and free the serial port between the Linux processor and the ATmega32U4, you simply have to comment out one line, and then restart the Yun. To bring Bridge back, simply uncomment the line, and restart the Yun.
</p>

Open the file we must in edit in Terminal with the following command.

{% highlight html %}
nano /etc/inittab
{% endhighlight %}

If you get the error <code>Error opening terminal: xterm-256color.</code>, the following worked for me.

{% highlight html %}
ln -s x /usr/share/terminfo/78 
export TERM=xterm-color 
nano /etc/inittab
{% endhighlight %}

The nano command will open up a text editor in Terminal, where you can move around with the arrow keys.

Find the line that says this:

{% highlight html %}
ttyATH0::askfirst:/bin/ash --login
{% endhighlight %}

And comment it out with pound sign at the beginning, like this:

{% highlight html %}
#ttyATH0::askfirst:/bin/ash --login
{% endhighlight %}

Instructions on the bottom show how to Write Out (save the file), and Exit.

To Write Out (save your changes), hit <code>CONTROL-O</code>. It will ask if you want to save changes to this file, hit <code>ENTER</code> to save. To Exit hit <code>CONTROL-X</code>.

Restart your Yun, and Bridge will not run. Once again, simply uncomment the line to bring Bridge back.

</div></div>
<div class="block"><div class="content-centered" markdown="1">

##Using the new setup

###Modify code and run

The Arduino on your Yun can now open a plain Serial connection to the Linux processor. However, it uses <code>Serial1</code> instead of <code>Serial</code>. <code>Serial</code> (without the 1) is connected to the micro-USB, and is used to upload code and communicate with a laptop.

So to begin in your setup(), your Arduino code should read:

{% highlight c++ %}
Serial1.begin(115200); 
while(!Serial1){}
{% endhighlight %}

And to read and write, continue using <code>Serial1</code>:

{% highlight c++ %}
while(Serial1.available()){
   Serial1.print(Serial1.read());
}
Serial1.println();
{% endhighlight %}

Any process running on Linux side of the board can access the Arduino's serial port with the name <code>/dev/ttyATH0</code>.

Now any NodeJS script using the node-serialport module can access the Atmel32u4 using port <code>/dev/ttyATH0</code>.

###Resources

<a href="https://github.com/andySigler/NodeJS_Yun_Example" class="inpost-link" target="_blank">NodeJS_Yun_Example</a> - Some example code, showing a NodeJS server mediating the connection between a browser and an Arduino.

<a href="https://github.com/voodootikigod/node-serialport/blob/master/README.md" class="inpost-link" target="_blank">Reference for node-serialport</a> - Connect a Node script to the ATmega32U4

<a href="https://github.com/einaros/ws/blob/master/README.md" class="inpost-link" target="_blank">Reference for node-ws</a> - Run a WebSocket server on the Yun to have fast, real-time communication with a browser or other devices.

<a href="https://github.com/arduino/openwrt-packages-yun/tree/master/arduino" class="inpost-link" target="_blank">Node-modules available through opkg</a> - the repo containing all pre-compiled node-modules for the Yun. Others include Noble, Bleno, and socket.io.

<a href="http://www.tigoe.com/pcomp/code/arduinowiring/1216/#more-1216" class="inpost-link" target="_blank">Node.js on the Arduino Yun</a> - Tom Igoe's example for getting NodeJS and the ATmega32U4 to communicate with Bridge. Its a bit of a hack that uses the stdin and stdout of a process.

</div>








