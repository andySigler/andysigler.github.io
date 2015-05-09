///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

function Line(tempPrevX, tempPrevY) {

  //the color for this line
  this.rThis;
  this.gThis;
  this.bThis;
  
  //variables to allow the line to be drawn incrementally
  this.xDistance;
  this.yDistance;
  this.xIncrement;
  this.yIncrement;
  this.drawCounter = 5;
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
  this.swingAmount = .3;
  
  //how long a line can be at most
  this.moveAmount;
  
  //the transparency of the line, to count down
  this.illAmount = 255;
  
  //boolean to determine if it's time to reset the line
  //that is, if it totally faded away
  this.lineGone = false;
   
    
  //set starting point at center of screen
  this.prevX = tempPrevX;
  this.prevY = tempPrevY;
  
  //set size of line to be 10% of screen width
  this.moveAmount = width/10;
  
  this.setPoints = function(tempR,tempG,tempB){
    this.rThis = tempR;
    this.gThis = tempG;
    this.bThis = tempB;
    
    //set the swing amount to keep the values towards the middle
    this.swingX = (((prevX-width/2)*-1) / (width/2)) * moveAmount * swingAmount;
    this.swingY = (((prevY-height/2)*-1) / (height/2)) * moveAmount * swingAmount;
    
    //set the new x and y points to be within the size set above
    this.newX = prevX + random(-moveAmount,moveAmount) + swingX;
    this.newX = constrain(newX,0,width);
    this.newY = prevY + random(-moveAmount,moveAmount) + swingY;
    this.newY = constrain(newY,0,height);
    
    //set the distance so it can drawn slowly over time
    this.xDistance = newX - prevX;
    this.yDistance = newY - prevY;
    //find the increment amount to be added each frame
    this.xIncrement = xDistance / drawCounter;
    this.yIncrement = yDistance / drawCounter;
    //set the drawing point to start at the previous x and y
    this.tempNewX = prevX;
    this.tempNewY = prevY;
  }
  
  this.drawLine = function(){
    //if the line hasn't been fully drawn yet, keep drawing it
    if(counter<drawCounter){
      tempNewX+=xIncrement;
      tempNewY+=yIncrement;
      counter++;
    }
    
    //draw the line based of the temporary/incrementing new x and y
    stroke(rThis,gThis,bThis,fillAmount);
    strokeWeight(2);
    line(prevX,prevY,tempNewX,tempNewY);
    
    //if the line has been fully drawn alreay...
    if(counter>=drawCounter){
      //the parent sketch reads this test to see if the next segment should be drawn
      timeForNewLine = true;
      //count the fillAmount down so its eventually transparent
      fillAmount-=eraseAmount;
      //parent sketch reads this to see if it should ignore this segment or not
      if(fillAmount<0){
        lineGone = true;
      }
    }
  }
  
  //function for checking if this line intersections with the passed x and y points
  this.intersection = function(x1, y1, x2, y2){
    
    var theResult = false;
    
    //save the slopes and y-intercepts in variables
    var m, n;
    var b, d;
    var xIntersect;
    
    //if the line is vertical or horizontal, just redo it
    if(prevX-newX==0 || prevY-newY==0){
      //println("bad line");
      theResult = true;
    }
    else{
      //set the slope values
      m = (y1-y2)/(x1-x2);
      n = (prevY-newY)/(prevX-newX);
      
      //if the slopes aren't equal, keep going
      if(m==n){
        //println("they're parallel");
        theResult = true;
      }
      else{
        //find the y-intercepts
        b = y1 - m * x1;
        d = prevY - n * prevX;
        
        //now, find the x point of interception
        xIntersect = (d-b)/(m-n);
        
        //test if this x values is within both lines
        if(newX<prevX){
          if(x1<x2){
            if(xIntersect>newX && xIntersect<prevX && xIntersect>x1 && xIntersect<x2){
              //println("1 it's inside");
              theResult = true;
            }
          }
          if(x2<x1){
            if(xIntersect>newX && xIntersect<prevX && xIntersect>x2 && xIntersect<x1){
              //println("2 it's inside");
              theResult = true;
            }
          }
        }
        if(prevX<newX){
          if(x1<x2){
            if(xIntersect>prevX && xIntersect<newX && xIntersect>x1 && xIntersect<x2){
              //println("3 it's inside");
              theResult = true;
            }
          }
          if(x2<x1){
            if(xIntersect>prevX && xIntersect<newX && xIntersect>x2 && xIntersect<x1){
              //println("4 it's inside");
              theResult = true;
            }
          }
        }
      }
    }
    return theResult;
  }
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////