(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.marsspinningblur = function() {
	this.initialize(img.marsspinningblur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2566,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.marsspinningblur();
	this.instance.parent = this;

	this.instance_1 = new lib.marsspinningblur();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2282,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,4848,500), null);


// stage content:
(lib.marsaniblur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgFFAmxIhMgJQi9gdiyg4Qoqivm8m8Qmdmei1n8Qgrh5gdh/QgKglgHgmQgyj6AAkRQAAwKLdrcQLbrdQLAAQQLAALdLdQLcLcAAQKQAAGYhyFpQivIrm7G8QmdGcn9C1QmKCLnEAAQimAAifgTg");
	mask.setTransform(250,250);

	// blur
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(-1333,250.1,1,0.671,0,0,0,2424,250.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:250,scaleY:0.67,x:-1315.8,y:250},0).wait(1).to({x:-1298.5},0).wait(1).to({scaleY:0.67,x:-1281.3},0).wait(1).to({scaleY:0.67,x:-1264},0).wait(1).to({x:-1246.8},0).wait(1).to({scaleY:0.67,x:-1229.5},0).wait(1).to({x:-1212.3},0).wait(1).to({scaleY:0.67,x:-1195},0).wait(1).to({x:-1177.8},0).wait(1).to({scaleY:0.67,x:-1160.5},0).wait(1).to({scaleY:0.66,x:-1143.3},0).wait(1).to({x:-1126},0).wait(1).to({scaleY:0.66,x:-1108.8},0).wait(1).to({x:-1091.6},0).wait(1).to({scaleY:0.66,x:-1074.3},0).wait(1).to({scaleY:0.66,x:-1057.1},0).wait(1).to({x:-1039.8},0).wait(1).to({scaleY:0.66,x:-1022.6},0).wait(1).to({x:-1005.3},0).wait(1).to({scaleY:0.66,x:-988.1},0).wait(1).to({scaleY:0.66,x:-970.8},0).wait(1).to({x:-953.6},0).wait(1).to({scaleY:0.66,x:-936.3},0).wait(1).to({x:-919.1},0).wait(1).to({scaleY:0.66,x:-901.8},0).wait(1).to({x:-884.6},0).wait(1).to({scaleY:0.66,x:-867.3},0).wait(1).to({scaleY:0.65,x:-850.1},0).wait(1).to({x:-832.9},0).wait(1).to({scaleY:0.65,x:-815.6},0).wait(1).to({x:-798.4},0).wait(1).to({scaleY:0.65,x:-781.1},0).wait(1).to({scaleY:0.65,x:-763.9},0).wait(1).to({x:-746.6},0).wait(1).to({scaleY:0.65,x:-729.4},0).wait(1).to({x:-712.1},0).wait(1).to({scaleY:0.65,x:-694.9},0).wait(1).to({scaleY:0.65,x:-677.6},0).wait(1).to({x:-660.4},0).wait(1).to({scaleY:0.65,x:-643.1},0).wait(1).to({x:-625.9},0).wait(1).to({scaleY:0.65,x:-608.7},0).wait(1).to({x:-591.4},0).wait(1).to({scaleY:0.65,x:-574.2},0).wait(1).to({scaleY:0.64,x:-556.9},0).wait(1).to({x:-539.7},0).wait(1).to({scaleY:0.64,x:-522.4},0).wait(1).to({x:-505.2},0).wait(1).to({scaleY:0.64,x:-487.9},0).wait(1).to({scaleY:0.64,x:-470.7},0).wait(1).to({x:-453.4},0).wait(1).to({scaleY:0.64,x:-436.2},0).wait(1).to({x:-419},0).wait(1).to({scaleY:0.64,x:-401.7},0).wait(1).to({scaleY:0.64,x:-384.5},0).wait(1).to({x:-367.2},0).wait(1).to({scaleY:0.64,x:-350},0).wait(1).to({x:-332.7},0).wait(1).to({scaleY:0.64,x:-315.5},0).wait(1).to({x:-298.2},0).wait(1).to({scaleY:0.64,x:-281},0).wait(1).to({scaleY:0.63,x:-263.7},0).wait(1).to({x:-246.5},0).wait(1).to({scaleY:0.63,x:-229.2},0).wait(1).to({x:-212},0).wait(1).to({scaleY:0.63,x:-194.7},0).wait(1).to({scaleY:0.63,x:-177.5},0).wait(1).to({x:-160.3},0).wait(1).to({scaleY:0.63,x:-143},0).wait(1).to({x:-125.8},0).wait(1).to({scaleY:0.63,x:-108.5},0).wait(1).to({scaleY:0.63,x:-91.3},0).wait(1).to({x:-74},0).wait(1).to({scaleY:0.63,x:-56.8},0).wait(1).to({x:-39.5},0).wait(1).to({scaleY:0.63,x:-22.3},0).wait(1).to({scaleY:0.63,x:-5},0).wait(1).to({x:12.2},0).wait(1).to({scaleY:0.62,x:29.5},0).wait(1).to({x:46.7},0).wait(1).to({scaleY:0.62,x:64},0).wait(1).to({x:81.2},0).wait(1).to({scaleY:0.62,x:98.4},0).wait(1).to({scaleY:0.62,x:115.7},0).wait(1).to({x:132.9},0).wait(1).to({scaleY:0.62,x:150.2},0).wait(1).to({x:167.4},0).wait(1).to({scaleY:0.62,x:184.7},0).wait(1).to({scaleY:0.62,x:201.9},0).wait(1).to({x:219.2},0).wait(1).to({scaleY:0.62,x:236.4},0).wait(1).to({x:253.7},0).wait(1).to({scaleY:0.62,x:270.9},0).wait(1).to({scaleY:0.62,x:288.2},0).wait(1).to({x:305.4},0).wait(1).to({scaleY:0.61,x:322.6},0).wait(1).to({x:339.9},0).wait(1).to({scaleY:0.61,x:357.1},0).wait(1).to({x:374.4},0).wait(1).to({scaleY:0.61,x:391.6},0).wait(1).to({scaleY:0.61,x:408.9},0).wait(1).to({x:426.1},0).wait(1).to({scaleY:0.61,x:443.4},0).wait(1).to({x:460.6},0).wait(1).to({scaleY:0.61,x:477.9},0).wait(1).to({scaleY:0.61,x:495.1},0).wait(1).to({x:512.4},0).wait(1).to({scaleY:0.61,x:529.6},0).wait(1).to({x:546.8},0).wait(1).to({scaleY:0.61,x:564.1},0).wait(1).to({scaleY:0.61,x:581.3},0).wait(1).to({x:598.6},0).wait(1).to({scaleY:0.6,x:615.8},0).wait(1).to({x:633.1},0).wait(1).to({scaleY:0.6,x:650.3},0).wait(1).to({x:667.6},0).wait(1).to({scaleY:0.6,x:684.8},0).wait(1).to({scaleY:0.6,x:702.1},0).wait(1).to({x:719.3},0).wait(1).to({scaleY:0.6,x:736.6},0).wait(1).to({x:753.8},0).wait(1).to({scaleY:0.6,x:771.1},0).wait(1).to({scaleY:0.6,x:788.3},0).wait(1).to({x:805.5},0).wait(1).to({scaleY:0.6,x:822.8},0).wait(1).to({x:840},0).wait(1).to({scaleY:0.6,x:857.3},0).wait(1).to({scaleY:0.6,x:874.5},0).wait(1).to({x:891.8},0).wait(1).to({scaleY:0.59,x:909},0).wait(1).to({x:926.3},0).wait(1).to({scaleY:0.59,x:943.5},0).wait(1).to({x:960.8},0).wait(1).to({scaleY:0.59,x:978},0).wait(1).to({scaleY:0.59,x:995.3},0).wait(1).to({x:1012.5},0).wait(1).to({scaleY:0.59,x:1029.7},0).wait(1).to({x:1047},0).wait(1).to({scaleY:0.59,x:1064.2},0).wait(1).to({scaleY:0.59,x:1081.5},0).wait(1).to({x:1098.7},0).wait(1).to({scaleY:0.59,x:1116},0).wait(1).to({x:1133.2},0).wait(1).to({scaleY:0.59,x:1150.5},0).wait(1).to({scaleY:0.59,x:1167.7},0).wait(1).to({x:1185},0).wait(1).to({scaleY:0.58,x:1202.2},0).wait(1).to({x:1219.5},0).wait(1).to({scaleY:0.58,x:1236.7},0).wait(1).to({x:1253.9},0).wait(1).to({scaleY:0.58,x:1271.2},0).wait(1).to({scaleY:0.58,x:1288.4},0).wait(1).to({x:1305.7},0).wait(1).to({scaleY:0.58,x:1322.9},0).wait(1).to({x:1340.2},0).wait(1).to({scaleY:0.58,x:1357.4},0).wait(1).to({scaleY:0.58,x:1374.7},0).wait(1).to({x:1391.9},0).wait(1).to({scaleY:0.58,x:1409.2},0).wait(1).to({x:1426.4},0).wait(1).to({scaleY:0.58,x:1443.7},0).wait(1).to({scaleY:0.57,x:1460.9},0).wait(1).to({x:1478.1},0).wait(1).to({scaleY:0.57,x:1495.4},0).wait(1).to({x:1512.6},0).wait(1).to({scaleY:0.57,x:1529.9},0).wait(1).to({x:1547.1},0).wait(1).to({scaleY:0.57,x:1564.4},0).wait(1).to({scaleY:0.57,x:1581.6},0).wait(1).to({x:1598.9},0).wait(1).to({scaleY:0.57,x:1616.1},0).wait(1).to({x:1633.4},0).wait(1).to({scaleY:0.57,x:1650.6},0).wait(1).to({scaleY:0.57,x:1667.9},0).wait(1).to({x:1685.1},0).wait(1).to({scaleY:0.57,x:1702.4},0).wait(1).to({x:1719.6},0).wait(1).to({scaleY:0.57,x:1736.8},0).wait(1).to({scaleY:0.56,x:1754.1},0).wait(1).to({x:1771.3},0).wait(1).to({scaleY:0.56,x:1788.6},0).wait(1).to({x:1805.8},0).wait(1).to({scaleY:0.56,x:1823.1},0).wait(1).to({x:1840.3},0).wait(1).to({scaleY:0.56,x:1857.6},0).wait(1).to({scaleY:0.56,x:1874.8},0).wait(1).to({x:1892.1},0).wait(1).to({scaleY:0.56,x:1909.3},0).wait(1).to({x:1926.6},0).wait(1).to({scaleY:0.56,x:1943.8},0).wait(1).to({scaleY:1,x:1943.7},0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D61C24","#F991A0"],[0.224,0.816],0,-250,0,250).s().p("EgFFAmxIhMgJQi9gdiyg4QnbiWmKlcQhCg6g/g/Qmdmei1n8Qgrh5gdh/QgKglgHgmQgyj6AAkRQAAwKLdrcQEPkRE6iqQITkiKKAAQKLAAITEiQE5CqERERQLcLcAAQKQAAGYhyFpQivIrm7G8QhAA/hCA6QlqE/muCZQmKCLnEAAQimAAifgTg");
	this.shape.setTransform(250,250);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D61C24","#F14852","#F5707D","#F991A0"],[0.224,0.31,0.702,0.816],0,-250,0,250).s().p("EgFFAmxIhMgJQi9gdiyg4Qoqivm8m8Qmdmei1n8Qgrh5gdh/QgKglgHgmQgyj6AAkRQAAwKLdrcQLbrdQLAAQQLAALdLdQLcLcAAQKQAAGYhyFpQivIrm7G8QmdGcn9C1QmKCLnEAAQimAAifgTg");
	this.shape_1.setTransform(250,250);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},191).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,250,500,500);
// library properties:
lib.properties = {
	id: '18F244A9ABC44B5AB61617A46072BABF',
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/marsspinningblur.png", id:"marsspinningblur"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['18F244A9ABC44B5AB61617A46072BABF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;