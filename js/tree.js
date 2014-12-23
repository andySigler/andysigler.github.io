/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

function Tree(x){
	this.canvas;
	this.context;
	this.branches = [];
	this.done = false;

	this.makeCanvas();
	makeWind(this.canvas);
	this.makeBranch(x);

	this.fadeCount = 0;
	this.fadeThresh = 40*2;
	this.ready2delete = false;
	this.startFading = false;
}

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

Tree.prototype.fadeOut = function(){
	this.canvas.style.opacity = 1-(this.fadeCount/this.fadeThresh);
	this.fadeCount++;
	if(this.fadeCount>this.fadeThresh){
		document.getElementById('forest').removeChild(this.canvas);
		this.ready2delete = true;
	}
}

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

Tree.prototype.update = function(){
	if(this.branches.length>0){
		this.drawTrunks();
		this.drawLeafs();
	}
	if(this.startFading){
		this.fadeOut();
	}
}

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

Tree.prototype.makeBranch = function(startX){
	var vi = Math.floor(Math.random()*v.length);
	var leftOverlap = window.innerWidth*percentOffset;
	var b = new Branch();
	var cIndex = Math.floor(Math.random()*colors.length);
	b.init(startX+leftOverlap,this.canvas.height+v[vi].size*.5,0,v[vi].size,v[vi].step,cIndex,v[vi].splitRad,v[vi].size,v[vi].splitProb,v[vi].splitAngle,v[vi].leafProb,v[vi].wiggle,v[vi].feedback);
	this.branches.push(b);
}

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

var percentOffset = .2;

Tree.prototype.makeCanvas = function(){
	var leftOverlap = window.innerWidth*percentOffset;
	this.canvas = document.createElement('canvas');
	this.canvas.className = 'canvas';
	this.canvas.width = Math.floor(window.innerWidth+leftOverlap*2);
	this.canvas.height = window.innerHeight;
	this.canvas.style.left = Math.round(-leftOverlap)+'px';
	this.context = this.canvas.getContext('2d');
	document.getElementById('forest').appendChild(this.canvas);
}

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

Tree.prototype.drawLeafs = function(){
	for(var i=0;i<this.branches.length;i++){
		if(this.branches[i].done===false){
			if(Math.random()<this.branches[i].leafProb && this.branches[i].rad<5){
				this.branches[i].leaf(this.branches[i].color,this.context);
			}
		}
		else{
			this.context.fillStyle = 'rgba(255,255,255,1)';
			this.context.beginPath();
			this.context.arc(this.branches[i].x,this.branches[i].y,this.branches[i].rad,0,Math.PI*2,false);
			this.context.fill();
			this.branches.splice(i,1);
			i--;
		}
	}
}

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

Tree.prototype.drawTrunks = function(){
	for(var i=0;i<this.branches.length;i++){
		if(this.branches[i].done===false){
			if(this.branches[i].rad<this.branches[i].splitThresh){
				this.splitBranch(i);
			}
			this.branches[i].updatePosition();
			this.branches[i].paint(this.context);
		}
	}
}

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

Tree.prototype.splitBranch = function(index){
	var odds = ((this.branches[index].startRad-this.branches[index].rad)/this.branches[index].startRad)*this.branches[index].splitProb;
	if(Math.random()<odds){
		var splitAmount = Math.PI*this.branches[index].splitAngle;
		var thisRot = this.branches[index].rot+splitAmount;
		this.branches[index].rot-=splitAmount;

		var b = new Branch();
		b.init(this.branches[index].x,this.branches[index].y,thisRot,this.branches[index].rad,this.branches[index].step,this.branches[index].color,this.branches[index].splitThresh,this.branches[index].startRad,this.branches[index].splitProb,this.branches[index].splitAngle,this.branches[index].leafProb,this.branches[index].wiggle,this.branches[index].radFeedback);
		this.branches.push(b);
	}
}

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////