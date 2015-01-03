var testingGUI = true;

var testingGUI_Nodes = [
	{
		'name':'Phone',
		'inputs':['Dial','Receiver','Volume'],
		'outputs':['Ringer']
	},
	{
		'name':'Biggie',
		'inputs':[],
		'outputs':['Nod','Position']
	},
	{
		'name':'Switch',
		'inputs':['State'],
		'outputs':[]
	},
	{
		'name':'Horse',
		'inputs':[],
		'outputs':['speed']
	},

	{
		'name':'Thunder',
		'inputs':['Volume'],
		'outputs':[]
	},
	{
		'name':'Guitar',
		'inputs':['Volume','Speed','Pitch'],
		'outputs':[]
	},
	{
		'name':'Frogger',
		'inputs':[],
		'outputs':['Speed']
	},
	{
		'name':'Lamp',
		'inputs':[],
		'outputs':['Brightness']
	},
	{
		'name':'Music',
		'inputs':['Beat','Volume'],
		'outputs':['Volume','Song']
	},
	{
		'name':'PrintOBot',
		'inputs':[],
		'outputs':['Print','Speed']
	},
	{
		'name':'Hair',
		'inputs':['Bow'],
		'outputs':['Music']
	}
];

window.onload = function(){
	setupCanvas();
	setupWebsockets();
	if(testingGUI){
		makeTestingNodes();
	}
	adjustCanvas();
	drawLoop();
}

function makeTestingNodes(){
	// test nodes for playing with patchbay
	// create a new arc for the Tester
	var startingIndex = Math.floor(Math.random()*testingGUI_Nodes.length)%testingGUI_Nodes.length;
	for(var index=0;index<testingGUI_Nodes.length;index++){
		var i = (index+startingIndex)%testingGUI_Nodes.length;
		var rColorIndex = i % colorPalette.length;
		var color = colorPalette[rColorIndex];
	    outCircle.addArc(testingGUI_Nodes[i].name,color,i+2);
	    inCircle.addArc(testingGUI_Nodes[i].name,color,i+2);

	    var rOutputs =testingGUI_Nodes[i].outputs.length;
	    for(var o=0;o<rOutputs;o++){
	        outCircle.arcs[outCircle.arcs.length-1].addPort(o);
	        outCircle.arcs[outCircle.arcs.length-1].ports[o].name = testingGUI_Nodes[i].outputs[o];
	        outCircle.arcs[outCircle.arcs.length-1].paletteIndex = rColorIndex;
	    }

	    var rInputs = testingGUI_Nodes[i].inputs.length;
	    for(var o=0;o<rInputs;o++){
	        inCircle.arcs[inCircle.arcs.length-1].addPort(o);
	        inCircle.arcs[inCircle.arcs.length-1].ports[o].name = testingGUI_Nodes[i].inputs[o];
	        inCircle.arcs[inCircle.arcs.length-1].paletteIndex = rColorIndex;
	    }
	}

	for(var c=0;c<inCircle.arcs.length;c++){
		var inArc = c;
		if(inCircle.arcs[inArc].ports.length>0){
			for(var d=0;d<20;d++){
				var outArc = Math.floor(Math.random()*outCircle.arcs.length);
				if(outCircle.arcs[outArc].ports.length>0){
					var inPort = Math.floor(Math.random()*inCircle.arcs[inArc].ports.length);
					var outPort = Math.floor(Math.random()*outCircle.arcs[outArc].ports.length);
					sendRoute(outCircle.arcs[outArc].id,inCircle.arcs[inArc].id,inPort,outPort);
					console.log('port made');
				}
			}
		}
	}
}