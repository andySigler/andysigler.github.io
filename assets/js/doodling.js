///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////


/*

OMG, this is hideous code written while I was in grad school (2012-'14)
Please do not read beyond this line ;)

*/


///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

var oneLine = [];

var pMillis = 0;

//color variables
var r;
var g;
var b;

//counter so we don't kill it with testing too much
var stackOverflowCounter = 0;
var stackOverflowThresh = 200;

var width;
var height;

var canvas;
var context;

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// var myColors = [
//   '#008EB2',  // blue
//   '#8E7B99',  // purple
//   '#BDC0B5',  // yellow/green
//   '#B25600',  // orange/brown
//   '#BF2333',  // red
//   '#BAE4CB'   // green
// ];

var myColors = [
  '#008EB2',  // blue
  '#555555',  // mid gray
  '#CCCCCC'   // lightest gray
];

var thisColorArray;
var currentColor;
var currentColorIndex = 0;

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

function getPos(el) {
    var lx = 0;
    var ly = 0;
    while(el) {
        ly += el.offsetTop;
        lx += el.offsetLeft;
        el = el.offsetParent;
    }
    return {x: lx,y: ly};
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

var eraseQueue = [];

function showEraser (mouseX, mouseY){

  while(eraseQueue.length) {
    erase(eraseQueue[0].x,eraseQueue[0].y);
    eraseQueue.splice(0,1);
  }

  context.save();
  context.strokeStyle = 'rgba(0,0,0,0.3)';
  context.shadowBlur = null;
  context.lineWidth = 2;
  context.beginPath();
  context.arc(mouseX,mouseY,28,0,Math.PI*2,false);
  context.stroke();
  context.restore();

  for(var i=totalInvisibleLines;i<oneLine.length-1;i++) {
    var thisLine = oneLine[i];

    var lineXDiff = thisLine.newX - thisLine.prevX;
    var lineYDiff = thisLine.newY - thisLine.prevY;

    var lineLength = Math.sqrt(lineXDiff*lineXDiff+lineYDiff*lineYDiff);

    var middleX = (lineXDiff / 2) + thisLine.prevX;
    var middleY = (lineYDiff / 2) + thisLine.prevY;

    var xDiff = Math.abs(middleX-mouseX);
    var yDiff = Math.abs(middleY-mouseY);

    if(Math.sqrt(xDiff*xDiff+yDiff*yDiff)<Math.max(lineLength/2,30)) {
      timesAttempted--;
      if(timesAttempted<0) {
        timesAttempted = 0;
        QUITER = false;
      }
      thisLine.shouldErase = true;
    }
  }
  if (oneLine.length - totalInvisibleLines < 20) {
    timesAttempted = 0;
    QUITER = false;
  }
}

function erase (mouseX, mouseY,fill){

  if(!fill) fill = 1;

  context.save();
  context.fillStyle = 'rgba(253,253,253,'+fill+')';
  context.shadowBlur = 0;
  context.lineWidth = 0;
  context.beginPath();
  context.arc(mouseX,mouseY,30,0,Math.PI*2,false);
  context.fill();
  context.restore();
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

function setup(){

  document.getScroll = function() {
    if (window.pageYOffset != undefined) {
      return [pageXOffset, pageYOffset];
    }
    else {
      var sx, sy, d = document,
      r = d.documentElement,
      b = d.body;
      sx = r.scrollLeft || b.scrollLeft || 0;
      sy = r.scrollTop || b.scrollTop || 0;
      return [sx, sy];
    }
  }

  canvas = document.getElementById('seeds');

  var canvasOffsetY = getPos(canvas).y;

  window.addEventListener('mousemove',function (e){
    if(!isMobile) {
      var x = e.clientX;
      var y = (e.clientY-navHeight)+document.getScroll()[1];

      showEraser(x,y);

      eraseQueue.push({
        'x':x,
        'y':y,
        'count' : 0
      });
    }
  });

  window.addEventListener('touchmove',function (e){

    if(!isMobile) {
      e.preventDefault();
      var touches = e.changedTouches;
      for (var i=0; i < touches.length; i++) {
        var x = touches[i].clientX;
        var y = touches[i].clientY-navHeight;

        showEraser(x,y);
        eraseQueue.push({
          'x':x,
          'y':y,
          'count' : 0
        });
      }
    }
  });

  document.body.appendChild(canvas);

  context = canvas.getContext('2d');

  context.lineJoin = context.lineCap = 'round';
  context.shadowBlur = 4;

  context.lineWidth = 2;

  draw();
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

function draw(){

  if(!isMobile) {

    //context.clearRect(0,0,width,height);

    if(eraseQueue.length) {
      while(eraseQueue.length>1) {
        erase(eraseQueue[1].x,eraseQueue[1].y);
        eraseQueue.splice(1,1);
      }

      eraseQueue[0].count++;
      if(eraseQueue[0].count>20) {
        erase(eraseQueue[0].x,eraseQueue[0].y);
        eraseQueue = [];
      }
      else {
        erase(eraseQueue[0].x,eraseQueue[0].y,0.2);
      }
    }

    //reset the stack overflow counter to zero with each draw cycle
    stackOverflowCounter=0;
    for(var i=totalInvisibleLines;i<oneLine.length-1;i++){


      var isDead = oneLine[i].update();
      if(isDead) {
        oneLine.splice(i,1);
        i--;
      }
    }

    if(!QUITER) {
      //if the latest line segment has been fully drawn...
      if(oneLine[oneLine.length-1].timeForNewLine){
        //create new line, passing on the new x and y points from the latest line
        makeNewLine(oneLine[oneLine.length-1].newX,oneLine[oneLine.length-1].newY);

        //make the new point for the new line
        makeNewPoint();
        xDist = oneLine[oneLine.length-1].xDistance;
        yDist = oneLine[oneLine.length-1].yDistance;

        a_tan = Math.atan(yDist / xDist)
        if (xDist < 0) {
          a_tan += Math.PI
        }
        else if (yDist < 0) {
          a_tan += (Math.PI * 2)
        }
      }
      else {
        oneLine[oneLine.length-1].drawLine();
      }
    }

    //print(1000/(millis()-pMillis));
    //println(" frames-per-second");
    //pMillis = millis();

    window.requestAnimationFrame(draw);

  }
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

function makeNewLine(prevLineEndX, prevLineEndY){
  //create new instance with the previous line's
  //end point as its starting point
  var l = new Line(prevLineEndX,prevLineEndY);
  oneLine.push(l);
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

var timesAttempted = 0;
var attempThresh = 200;
var QUITER = false;

function makeNewPoint(){

  var insideTextBox = false;

  var currentLine = oneLine[oneLine.length-1];

  //set it's new points for drawing later
  currentLine.setPoints(oneLine[oneLine.length-2].currentAngle);

  //testing variable to redo this function if it ends up true
  var redoPoint = false;

  if (currentLine.newX >= width || currentLine.newX < 0) {
    redoPoint = true;
  }
  else if (currentLine.newY >= height || currentLine.newY < 0) {
    redoPoint = true;
  }

  for(var i=0;i<totalTextDivs;i++) {
    var index = i*4;
    if(currentLine.newX <= oneLine[index].newX && currentLine.newX >= oneLine[index].prevX) {
      if(currentLine.newY <= oneLine[index+1].newY && currentLine.newY >= oneLine[index+1].prevY) {
        redoPoint = true;
        stackOverflowCounter += 10;
        insideTextBox = true;
        break;
      }
    }
    else if(currentLine.prevX <= oneLine[index].newX && currentLine.prevX >= oneLine[index].prevX) {
      if(currentLine.prevY <= oneLine[index+1].newY && currentLine.prevY >= oneLine[index+1].prevY) {
        redoPoint = true;
        stackOverflowCounter += 10;
        insideTextBox = true;
        break;
      }
    }
    else if(currentLine.newX >= oneLine[index].newX && currentLine.newX <= oneLine[index].prevX) {
      if(currentLine.newY >= oneLine[index+1].newY && currentLine.newY <= oneLine[index+1].prevY) {
        redoPoint = true;
        stackOverflowCounter += 10;
        insideTextBox = true;
        break;
      }
    }
    else if(currentLine.prevX >= oneLine[index].newX && currentLine.prevX <= oneLine[index].prevX) {
      if(currentLine.prevY >= oneLine[index+1].newY && currentLine.prevY <= oneLine[index+1].prevY) {
        redoPoint = true;
        stackOverflowCounter += 10;
        insideTextBox = true;
        break;
      }
    }
  }

  //if this function has been called too many times, just overlap the lines
  if(stackOverflowCounter<stackOverflowThresh){
    //go through all other lines to check if they intersect
    for(var i=0;i<oneLine.length-1;i++){
      //compare it to the lines that haven't faded yet
      if(!oneLine[i].lineGone){
        //check if it intersects with all previous lines, and this check returns a boolean
        if(oneLine[oneLine.length-1].intersection (oneLine[i].prevX , oneLine[i].prevY , oneLine[i].newX , oneLine[i].newY)){
          //if any or all of them do intersect, redo this entire function
          if (i < totalInvisibleLines || Math.random() < 1.975) {
            redoPoint = true;
            break;
          }
        }
      }
    }
  }
  //redo the function
  if(redoPoint){
    //if this function gets called again, increment the counter
    stackOverflowCounter++;

    //if it's greater than the threshold, set the line to be somewhere else on screen
    if(stackOverflowCounter>=stackOverflowThresh){
      if(timesAttempted>=attempThresh) {
        QUITER = true;
      }
      else {

        if(Math.random()<0.1) lookDifferent();

        timesAttempted++;

        context.lineWidth = 1;

        var RAND = getSeed();

        oneLine[oneLine.length-1].prevX += (RAND.seed.x-0.5)*globalMoveAmount;
        if (oneLine[oneLine.length-1].prevX > width - 1) {
          oneLine[oneLine.length-1].prevX = width - 1;
        }
        oneLine[oneLine.length-1].prevY += (RAND.seed.y-0.5)*globalMoveAmount;
        if (oneLine[oneLine.length-1].prevY > height - 1) {
          oneLine[oneLine.length-1].prevY = height - 1;
        }

        oneLine[oneLine.length-1].counter = 0;

        currentColorIndex += Math.floor(((myColors.length-2)+1)*Math.random());
        currentColorIndex %= myColors.length

        //reset the color to draw with
        currentColor = hexToRGB(myColors[currentColorIndex]);

        //reset the counter
        stackOverflowCounter=0;

        //now call this very function again
        try {
          makeNewPoint();
        }
        catch (error) {
          QUITER = true;
        }
      }
    }
    else {
      try {
        makeNewPoint();
      }
      catch (error) {
        QUITER = true;
      }
    }
  }
}

var theLineWidth = 0;

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

function lookDifferent(){
  globalSwingAmount = Math.random()*0.5;
  globalMoveAmount = (Math.random()*width*.1) + 20;
  masterDrawCount = 5;
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

var totalInvisibleLines = 0;
var totalTextDivs = 0;

var navHeight = 0;

var getWindowHeight = function() {
  var body = document.body;
  var html = document.documentElement;

  var window_height = Math.max(
    body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

  return window_height;
}

var resizeCanvas = function(){

  canvas = document.getElementById('seeds');

  canvas.style.height = '0px';
  canvas.height = 0;

  navHeight = document.getElementById('navigation').offsetHeight;

  var window_height = getWindowHeight();

  width = window.innerWidth;
  height = (window_height - navHeight) - 0;
  canvas.style.width = width+'px';
  canvas.style.height = height+'px';
  canvas.style.top = navHeight+'px';

  canvas.width = width;
  canvas.height = height;

  context = canvas.getContext('2d');

  context.clearRect(0,0,width,height);

  thisColorArray = myColors[Math.floor(Math.random()*myColors.length)];


  currentColorIndex += Math.floor(((myColors.length-2)+1)*Math.random());
  currentColorIndex %= myColors.length

  //reset the color to draw with
  currentColor = hexToRGB(myColors[currentColorIndex]);

  oneLine = [];

  totalInvisibleLines = 0;
  totalTextDivs = 0;

  var padding = 20;
  var yOffset = navHeight * -1;

  var ignoreArray = [];

  var matchbooks = document.getElementsByClassName('matchbook');
  for(var n=0;n<matchbooks.length;n++) {
    ignoreArray.push(matchbooks[n]);
  }

  var subheadline = document.getElementsByClassName('subheadline');
  for(var n=0;n<subheadline.length;n++) {
    ignoreArray.push(subheadline[n]);
  }

  var noTouchTexts = document.getElementsByClassName('avoidMe');
  for(var n=0;n<noTouchTexts.length;n++) {
    ignoreArray.push(noTouchTexts[n]);
  }

  totalTextDivs += ignoreArray.length;
  for(var i=0;i<ignoreArray.length;i++) {
    var thisSpan = ignoreArray[i];

    var pos = getPos(thisSpan);
    var spanWidth = thisSpan.offsetWidth;
    var spanHeight = thisSpan.offsetHeight;
    var x1 = pos.x - (padding/2);
    var y1 = ((pos.y - 0) - (padding/2)) + yOffset;
    var x2 = x1+spanWidth+padding;
    var y2 = y1+spanHeight+padding;

    var top = new Line(x1,y1);
    top.newX = x2;
    top.newY = y1;
    top.doneFading = true;
    oneLine.push(top);
    totalInvisibleLines++;

    var right = new Line(x2,y1);
    right.newX = x2;
    right.newY = y2;
    right.doneFading = true;
    oneLine.push(right);
    totalInvisibleLines++;

    var bottom = new Line(x2,y2);
    bottom.newX = x1;
    bottom.newY = y2;
    bottom.doneFading = true;
    oneLine.push(bottom);
    totalInvisibleLines++;

    var left = new Line(x1,y2);
    left.newX = x1;
    left.newY = y1;
    left.doneFading = true;
    oneLine.push(left);
    totalInvisibleLines++;
  }

  //set the first instance to start in the center
  oneLine.push(new Line(width-1,1));
  //set it's new points for drawing later
  oneLine[oneLine.length-1].setPoints();

  lookDifferent();

  timesAttempted = 0;
  totalDrawCount = masterDrawCount;

  var shouldTriggerDraw = false;

  if(QUITER===true) shouldTriggerDraw = true;
  QUITER = false;

  // if(width < 500 || height < 300) {
  //   shouldTriggerDraw = false;
  //   isMobile = true;
  // }
  // else {
  //   if(isMobile===true) shouldTriggerDraw = true;
  //   isMobile = false;
  // }

  if(shouldTriggerDraw) window.requestAnimationFrame(draw);
}

function hexToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

window.addEventListener('resize', function(){
  // document.body.style.paddingTop = '0px';
  // document.body.style.overflow = 'hidden';
  resizeCanvas();
});

window.addEventListener("orientationchange", resizeCanvas, true);

var isMobile = false;

window.addEventListener('load', function(){

  var spacerThing = document.getElementById('spacer_thing');
  if (spacerThing) {
    spacerThing.parentNode.removeChild(spacerThing);
  }

  document.getElementsByClassName('top-bar-section ')[0].style.color = 'white';

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
    stackOverflowThresh = 200;
    attempThresh = 200;
    maxLineWidth = 3;
    shadowScale = 1;
  }
  else{
    stackOverflowThresh = 200;
    attempThresh = 200;
    maxLineWidth = 4;
    shadowScale = 2;
  }
  resizeCanvas();
  resizeCanvas();
  setup();
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

function getRandom(doit) {
  var r = (Math.asin(Math.random()) / Math.PI);
  if(Math.random()>0.5) r *= -1;

  r  += 0.5;
  if(doit) return r;
  else return r;

}

function getSeed(){
  var xAmount = .99;
  var yAmount = .99;

  var xOffset = (1 - xAmount) / 2;
  var yOffset = (1 - yAmount) / 2;

  if(Math.random()<0.5) {
    var xSeed = (getRandom(true)*xAmount)+xOffset;
    var ySeed = (getRandom()*yAmount)+yOffset;
  }
  else {
    var xSeed = (Math.random()*xAmount)+xOffset;
    var ySeed = (Math.random()*yAmount)+yOffset;
  }

  var xMin = width * xOffset;
  var xMax = width - xMin;
  var yMin = height * yOffset;
  var yMax = height - yMin;

  return {
    'seed' : {
      'x' : xSeed,
      'y' : ySeed
    },
    'min' : {
      'x' : xMin,
      'y' : yMin
    },
    'max' : {
      'x' : xMax,
      'y' : yMax
    }
  }
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

var globalSwingAmount;
var globalMoveAmount;
var masterDrawCount;
var totalDrawCount;
var maxLineWidth;
var shadowScale;

function Line(tempPrevX, tempPrevY) {

  totalDrawCount *= 1;
  if(totalDrawCount<2) totalDrawCount = 2;

  //the color for this line
  this.rThis;
  this.gThis;
  this.bThis;

  //variables to allow the line to be drawn incrementally
  this.xDistance;
  this.yDistance;
  this.xIncrement;
  this.yIncrement;
  this.drawCounter = Math.floor((Math.random()*totalDrawCount)+Math.floor(totalDrawCount/2)+1);
  //this.drawCounter = 1;
  this.tempNewX;
  this.tempNewY;
  this.timeForNewLine = false;

  //amount to erase the line with each frame
  this.eraseAmount = .02;

  //counter for testing if the line has been drawn fully or not
  this.counter = 0;

  //variables hold line's points
  this.prevX = tempPrevX;
  this.prevY = tempPrevX;
  this.newX;
  this.newY;

  //amounts to swing the new x and y values
  //to give them tendancies towards the middle
  this.swingX;
  this.swingY;
  //scale to keep it off the wall
  //1=always in center, 0=free ranging
  this.swingAmount = globalSwingAmount;

  //how long a line can be at most
  this.moveAmount = globalMoveAmount;

  //the transparency of the line, to count down
  this.fillAmount = 1;

  //boolean to determine if it's time to reset the line
  //that is, if it totally faded away
  this.lineGone = false;


  //set starting point at center of screen
  this.prevX = tempPrevX;
  this.prevY = tempPrevY;
  this.currentAngle = 0;

  this.setPoints = function(prevAngle){

    var totalAngles = 32;
    // divide radians by num angles (pick random index for radians)
    if (prevAngle === undefined) {
      prevAngle = Math.floor(Math.random() * totalAngles);
    }
    var oppositeAngle = (prevAngle + (totalAngles / 2)) % totalAngles;
    this.currentAngle = Math.floor(prevAngle);
    while (this.currentAngle == prevAngle || this.currentAngle == oppositeAngle) {
      this.currentAngle = Math.floor(Math.random() * totalAngles);
    }
    // encourage it to be an angled line
    // if (this.currentAngle % 2 == 0 && Math.random() < 0.95) {
    //   this.currentAngle = (this.currentAngle + 1) % totalAngles;
    // }
    var ranRadians = ((Math.PI * 2) / totalAngles) * this.currentAngle;
    ranRadians = (ranRadians + (Math.PI * 2 * 0.05)) % (Math.PI * 2)
    // ranRadians += Math.PI / (totalAngles * 2);
    // ranRadians += (Math.PI / 4);
    // if (ranRadians > Math.PI * 2) ranRadians -= (Math.PI * 2);
    // also, add a bit of randomness to the angle itself
    // if (Math.random() < 0.05) {
    //   ranRadians = ranRadians + ((Math.PI * 2) / (totalAngles * 2));
    //   if (ranRadians > Math.PI * 2) {
    //     ranRadians -= Math.PI * 2;
    //   }
    // }
    // console.log('Actual Radians = ', ranRadians);
    // radius is move amount (random amount)
    var ranRadius = (this.moveAmount * (1 - Math.pow(Math.random(), 1))) + 10;
    // calculate new XY from radian and radius
    //      x = r × cos( θ )
    //      y = r × sin( θ )
    this.newX = Math.round(this.prevX + (ranRadius * Math.cos(ranRadians)));
    this.newY = Math.round(this.prevY + (ranRadius * Math.sin(ranRadians)));

    //set the distance so it can drawn slowly over time
    this.xDistance = this.newX - this.prevX;
    this.yDistance = this.newY - this.prevY;
    //find the increment amount to be added each frame
    this.xIncrement = this.xDistance / this.drawCounter;
    this.yIncrement = this.yDistance / this.drawCounter;
    //set the drawing point to start at the previous x and y
    this.tempNewX = this.prevX;
    this.tempNewY = this.prevY;

    this.c = {r: currentColor.r, g: currentColor.g, b: currentColor.b};
  }

  this.drawLine = function(){
    //if the line hasn't been fully drawn yet, keep drawing it
    if(this.counter<this.drawCounter){
      this.tempNewX+=this.xIncrement;
      this.tempNewY+=this.yIncrement;
      this.counter++;
    }

    context.save();

    context.strokeStyle = 'black';
    context.shadowBlur = null
    context.shadowColor = null;
    context.lineWidth = 1;
    context.lineJoin = context.lineCap = 'round';

    //draw the line based of the temporary/incrementing new x and y
    context.beginPath();
    context.moveTo(this.tempNewX-this.xIncrement, this.tempNewY-this.yIncrement);
    context.lineTo(this.tempNewX, this.tempNewY);

    context.stroke();

    context.restore();

    //if the line has been fully drawn alreay...
    if(this.counter>=this.drawCounter){
      //the parent sketch reads this test to see if the next segment should be drawn
      this.timeForNewLine = true;
      var newWidth = Math.min(Math.max(context.lineWidth+(Math.random()-0.5),2),maxLineWidth);

      this.lineWidth = Number(newWidth);
      this.shadowBlur = Number(context.shadowBlue);

      context.lineWidth = newWidth;
      context.shadowBlur = newWidth*shadowScale;
    }
  }

  this.update = function(){
    if(this.shouldErase) {
      this.eraseLine();
      return true;
    }
    else {
      this.fillAmount *= 0.8;
      if(this.fillAmount<=0.001) {
        this.doneFading = true;
      }
      else {
        this.fadeLine();
      }
    }
  }

  this.fadeLine = function(){
    context.save();

    context.lineWidth = Math.round(this.lineWidth*1.2);

    if(!this.c) this.c = {'r':0,'g':0,'b':0};
    //context.shadowBlur = context.lineWidth/2;

    context.strokeStyle = 'rgba('+this.c.r+','+this.c.g+','+this.c.b+',0.075)';
    //context.shadowColor = 'rgba('+this.c.r+','+this.c.g+','+this.c.b+',0.9)';

    context.lineJoin = context.lineCap = 'round';
    context.beginPath();
    context.moveTo(this.prevX, this.prevY);
    context.lineTo(this.newX, this.newY);

    context.stroke();

    context.restore();
  }

  this.eraseLine = function(){
    context.save();

    context.lineWidth = Math.round(this.lineWidth*2.5);
    context.shadowBlur = Number(this.shadowBlur);
    context.lineJoin = context.lineCap = 'round';

    context.beginPath();
    context.moveTo(this.prevX, this.prevY);
    context.lineTo(this.newX, this.newY);

    context.strokeStyle = 'rgb(253,253,253)';
    context.shadowColor = 'rgb(253,253,253)';
    context.stroke();

    context.restore();
  }

  //function for checking if this line intersections with the passed x and y points
  this.intersection = function(x1, y1, x2, y2){

    //save the slopes and y-intercepts in variables
    var m, n;
    var b, d;

    var thisIsVerti = this.prevX === this.newX;
    var thisIsHoriz = this.prevY === this.newY;
    var inputIsVerti = x1 === x2;
    var inputIsHoriz = y1 === y2;

    if(thisIsVerti){
      if (inputIsVerti) {
        if (this.prevX === x1) {
          if ((this.prevY > y1 && this.prevY < y2) || (this.prevY > y2 && this.prevY < y1)) {
            return true;
          }
          else if ((this.newY > y1 && this.newY < y2) || (this.newY > y2 && this.newY < y1)) {
            return true;
          }
        }
      }
      else if (inputIsHoriz) {
        if ((this.prevX > x1 && this.prevX < x2) || (this.prevX > x2 && this.prevX < x1)) {
          if ((y1 > this.prevY && y1 < this.newY) || (y1 > this.newY && y1 < this.prevY)) {
            return true;
          }
        }
      }
      else {
        m = (y1-y2)/(x1-x2);
        b = y1 - (m * x1);
        var yIntersect = (m * this.prevX) + b;
        if ((yIntersect > y1 && yIntersect < y2) || (yIntersect > y2 && yIntersect < y1)) {
          return true;
        }
      }
    }
    else if(thisIsHoriz){
      if (inputIsHoriz) {
        if (this.prevY === y1) {
          if ((this.prevX > x1 && this.prevX < x2) || (this.prevX > x2 && this.prevX < x1)) {
            return true;
          }
          else if ((this.newX > x1 && this.newX < x2) || (this.newX > x2 && this.newX < x1)) {
            return true;
          }
        }
      }
      else if (inputIsVerti) {
        if ((this.prevY > y1 && this.prevY < y2) || (this.prevY > y2 && this.prevY < y1)) {
          if ((x1 > this.prevX && x1 < this.newX) || (x1 > this.newX && x1 < this.prevX)) {
            return true;
          }
        }
      }
      else {
        m = (y1-y2)/(x1-x2);
        b = y1 - (m * x1);
        var xIntersect = (this.prevY - b) / m;
        if ((xIntersect > x1 && xIntersect < x2) || (xIntersect > x2 && xIntersect < x1)) {
          return true;
        }
      }
    }
    else if(inputIsVerti){
      n = (this.prevY-this.newY)/(this.prevX-this.newX);
      d = this.prevY - (n * this.prevX);
      var yIntersect = (n * x1) + d;
      if ((yIntersect > this.prevY && yIntersect < this.newY) || (yIntersect > this.newY && yIntersect < this.prevY)) {
        return true;
      }
    }
    else if(inputIsHoriz){
      n = (this.prevY-this.newY)/(this.prevX-this.newX);
      d = this.prevY - (n * this.prevX);
      var xIntersect = (y1 - d) / n;
      if ((xIntersect > this.prevX && xIntersect < this.newX) || (xIntersect > this.newX && xIntersect < this.prevX)) {
        return true;
      }
    }
    else{
      //set the slope values
      m = (y1-y2)/(x1-x2);
      n = (this.prevY-this.newY)/(this.prevX-this.newX);

      //parallel lines
      if(m==n){
        // make sure they don't overlap
        var yInterceptInput = y1 + (m * x1);
        var yInterceptThis = this.prevY + (n * this.prevX);
        if (yInterceptInput == yInterceptThis) {
          return true;
        }
      }
      else{
        //find the y-intercepts
        b = y1 - m * x1;
        d = this.prevY - n * this.prevX;

        //now, find the x point of interception
        var xIntersect = (d-b)/(m-n);

        //test if this x values is within both lines
        if(this.newX<this.prevX){
          if(x1<x2){
            if(xIntersect>this.newX && xIntersect<this.prevX && xIntersect>x1 && xIntersect<x2){
              //println("1 it's inside");
              return true;
            }
          }
          if(x2<x1){
            if(xIntersect>this.newX && xIntersect<this.prevX && xIntersect>x2 && xIntersect<x1){
              //println("2 it's inside");
              return true;
            }
          }
        }
        if(this.prevX<this.newX){
          if(x1<x2){
            if(xIntersect>this.prevX && xIntersect<this.newX && xIntersect>x1 && xIntersect<x2){
              //println("3 it's inside");
              return true;
            }
          }
          if(x2<x1){
            if(xIntersect>this.prevX && xIntersect<this.newX && xIntersect>x2 && xIntersect<x1){
              //println("4 it's inside");
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
