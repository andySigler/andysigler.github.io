/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

function Seed(x,y,w,h){
	this.x = x;
	this.y = y;
	this.step = 5;
	this.feedback = 1.1;
	this.done = false;
	this.rot = Math.random()*Math.PI*2;
	this.rotStep = Math.random()-.5;
	this.width = w;
	this.height = h;

	this.lifeCount = 0;
}

Seed.prototype.update = function(){
	this.y+=this.step;
	this.step*=this.feedback;
	this.rot+=this.rotStep;
	if(this.y>seedCanvas.height+this.height*3 || this.lifeCount>200){
		this.done=true;
	}
	this.lifeCount++;
}

Seed.prototype.paint = function(){
	seedContext.translate(this.x,this.y);
	seedContext.rotate(this.rot);
	seedContext.drawImage(seedImg,-this.width/2,-this.height/2,this.width,this.height);
	seedContext.rotate(-this.rot);
	seedContext.translate(-this.x,-this.y);
}

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////	