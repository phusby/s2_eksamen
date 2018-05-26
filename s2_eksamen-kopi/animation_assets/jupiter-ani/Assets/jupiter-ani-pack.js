(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.jupiter1 = function() {
	this.initialize(img.jupiter1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);// helper functions:

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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.jupiter1();
	this.instance.parent = this;
	this.instance.setTransform(915.7,23.7,1,1,-2);

	this.instance_1 = new lib.jupiter1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1614,21.6,1,1,-2);

	this.instance_2 = new lib.jupiter1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1264.8,20.7,1,1,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(915.7,3.4,1215.3,520), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(607.6,260,1,1,0,0,0,1523.2,263.4);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1345.9,260,1,1,0,0,0,1523.2,263.4);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2080.6,274,1,1,0,0,0,1523.2,263.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,2688.3,534), null);


// stage content:
(lib.jupiterani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A7hbiQrarZAAwJQAApLDtnqQCzlyE6k7QLZrZQIAAQQIAALaLZQENEOCrE3QEiITAAKKQAAQJraLZQraLawIAAQwIAArZrag");
	var mask_graphics_191 = new cjs.Graphics().p("EgFEAmyIhOgLQi8gcizg4Qoqivm8m9Qmdmci0n9Qgqh6gfh+QgIglgIglQgyj8AAkQQAAwKLcrdQLdrcQKAAQQLAALcLcQLdLdAAQKQAAGYhyFpQivIrm8G7QmcGen9CzQmKCMnEAAQimAAiegSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:250,y:250}).wait(191).to({graphics:mask_graphics_191,x:250.5,y:250.5}).wait(1));

	// blur
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-553,250,1,1,-0.8,0,0,1344.1,267);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-0.9,x:-545.3},0).wait(1).to({x:-537.6},0).wait(1).to({x:-529.9},0).wait(1).to({x:-522.2},0).wait(1).to({x:-514.5},0).wait(1).to({x:-506.8},0).wait(1).to({x:-499.1},0).wait(1).to({x:-491.3},0).wait(1).to({x:-483.6},0).wait(1).to({x:-475.9},0).wait(1).to({x:-468.2},0).wait(1).to({x:-460.5},0).wait(1).to({x:-452.8},0).wait(1).to({x:-445.1},0).wait(1).to({x:-437.4},0).wait(1).to({x:-429.7},0).wait(1).to({x:-422},0).wait(1).to({x:-414.3},0).wait(1).to({x:-406.6},0).wait(1).to({x:-398.9},0).wait(1).to({x:-391.2},0).wait(1).to({x:-383.5},0).wait(1).to({x:-375.8},0).wait(1).to({x:-368.1},0).wait(1).to({x:-360.4},0).wait(1).to({x:-352.7},0).wait(1).to({x:-345},0).wait(1).to({x:-337.3},0).wait(1).to({x:-329.6},0).wait(1).to({x:-321.9},0).wait(1).to({x:-314.1},0).wait(1).to({x:-306.4},0).wait(1).to({x:-298.7},0).wait(1).to({x:-291},0).wait(1).to({x:-283.3},0).wait(1).to({x:-275.6},0).wait(1).to({x:-267.9},0).wait(1).to({x:-260.2},0).wait(1).to({x:-252.5},0).wait(1).to({x:-244.8},0).wait(1).to({x:-237.1},0).wait(1).to({x:-229.4},0).wait(1).to({x:-221.7},0).wait(1).to({x:-214},0).wait(1).to({x:-206.3},0).wait(1).to({x:-198.6},0).wait(1).to({x:-190.9},0).wait(1).to({x:-183.2},0).wait(1).to({x:-175.5},0).wait(1).to({x:-167.8},0).wait(1).to({x:-160.1},0).wait(1).to({x:-152.4},0).wait(1).to({x:-144.7},0).wait(1).to({x:-137},0).wait(1).to({x:-129.2},0).wait(1).to({x:-121.6},0).wait(1).to({x:-113.8},0).wait(1).to({x:-106.1},0).wait(1).to({x:-98.4},0).wait(1).to({x:-90.7},0).wait(1).to({x:-83},0).wait(1).to({x:-75.3},0).wait(1).to({x:-67.6},0).wait(1).to({x:-59.9},0).wait(1).to({x:-52.2},0).wait(1).to({x:-44.5},0).wait(1).to({x:-36.8},0).wait(1).to({x:-29.1},0).wait(1).to({x:-21.4},0).wait(1).to({x:-13.7},0).wait(1).to({x:-6},0).wait(1).to({x:1.7},0).wait(1).to({x:9.4},0).wait(1).to({x:17.1},0).wait(1).to({x:24.8},0).wait(1).to({x:32.5},0).wait(1).to({x:40.2},0).wait(1).to({x:47.9},0).wait(1).to({x:55.7},0).wait(1).to({x:63.4},0).wait(1).to({x:71.1},0).wait(1).to({x:78.8},0).wait(1).to({x:86.5},0).wait(1).to({x:94.2},0).wait(1).to({x:101.9},0).wait(1).to({x:109.6},0).wait(1).to({x:117.3},0).wait(1).to({x:125},0).wait(1).to({x:132.7},0).wait(1).to({x:140.4},0).wait(1).to({x:148.1},0).wait(1).to({x:155.8},0).wait(1).to({x:163.5},0).wait(1).to({x:171.2},0).wait(1).to({x:178.9},0).wait(1).to({x:186.6},0).wait(1).to({x:194.3},0).wait(1).to({x:202},0).wait(1).to({x:209.7},0).wait(1).to({x:217.4},0).wait(1).to({x:225.1},0).wait(1).to({x:232.8},0).wait(1).to({x:240.5},0).wait(1).to({x:248.3},0).wait(1).to({x:256},0).wait(1).to({x:263.7},0).wait(1).to({x:271.4},0).wait(1).to({x:279.1},0).wait(1).to({x:286.8},0).wait(1).to({x:294.5},0).wait(1).to({x:302.2},0).wait(1).to({x:309.9},0).wait(1).to({x:317.6},0).wait(1).to({x:325.3},0).wait(1).to({x:333},0).wait(1).to({x:340.7},0).wait(1).to({x:348.4},0).wait(1).to({x:356.1},0).wait(1).to({x:363.8},0).wait(1).to({x:371.5},0).wait(1).to({x:379.2},0).wait(1).to({x:386.9},0).wait(1).to({x:394.6},0).wait(1).to({x:402.3},0).wait(1).to({x:410},0).wait(1).to({x:417.7},0).wait(1).to({x:425.4},0).wait(1).to({x:433.2},0).wait(1).to({x:440.9},0).wait(1).to({x:448.6},0).wait(1).to({x:456.3},0).wait(1).to({x:464},0).wait(1).to({x:471.7},0).wait(1).to({x:479.4},0).wait(1).to({x:487.1},0).wait(1).to({x:494.8},0).wait(1).to({x:502.5},0).wait(1).to({x:510.2},0).wait(1).to({x:517.9},0).wait(1).to({x:525.6},0).wait(1).to({x:533.3},0).wait(1).to({x:541},0).wait(1).to({x:548.7},0).wait(1).to({x:556.4},0).wait(1).to({x:564.1},0).wait(1).to({x:571.8},0).wait(1).to({x:579.5},0).wait(1).to({x:587.2},0).wait(1).to({x:594.9},0).wait(1).to({x:602.6},0).wait(1).to({x:610.4},0).wait(1).to({x:618.1},0).wait(1).to({x:625.8},0).wait(1).to({x:633.5},0).wait(1).to({x:641.2},0).wait(1).to({x:648.9},0).wait(1).to({x:656.6},0).wait(1).to({x:664.3},0).wait(1).to({x:672},0).wait(1).to({x:679.7},0).wait(1).to({x:687.4},0).wait(1).to({x:695.1},0).wait(1).to({x:702.8},0).wait(1).to({x:710.5},0).wait(1).to({x:718.2},0).wait(1).to({x:725.9},0).wait(1).to({x:733.6},0).wait(1).to({x:741.3},0).wait(1).to({x:749},0).wait(1).to({x:756.7},0).wait(1).to({x:764.4},0).wait(1).to({x:772.1},0).wait(1).to({x:779.8},0).wait(1).to({x:787.5},0).wait(1).to({x:795.3},0).wait(1).to({x:803},0).wait(1).to({x:810.7},0).wait(1).to({x:818.4},0).wait(1).to({x:826.1},0).wait(1).to({x:833.8},0).wait(1).to({x:841.5},0).wait(1).to({x:849.2},0).wait(1).to({x:856.9},0).wait(1).to({x:864.6},0).wait(1).to({x:872.3},0).wait(1).to({x:880},0).wait(1).to({x:887.7},0).wait(1).to({x:895.4},0).wait(1).to({x:903.1},0).wait(1).to({x:910.8},0).wait(1).to({x:918.5},0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7C6E70","#D69A80"],[0.224,0.816],0,-250,0,250).s().p("EgFFAmxIhMgJQi9gdiyg4Qoqivm8m8Qmdmei1n8Qgrh5gdh/QgKglgHgmQgyj6AAkRQAAwKLdrcQLbrdQLAAQQLAALdLdQLcLcAAQKQAAGYhyFpQivIrm7G8QmeGcn8C1QmKCLnEAAQimAAifgTg");
	this.shape.setTransform(250,250.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250.8,250.8,498.4,498.4);
// library properties:
lib.properties = {
	id: '0F49EA571C9A4CEAB5FEFC520B0E9979',
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/jupiter1.png", id:"jupiter1"}
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
an.compositions['0F49EA571C9A4CEAB5FEFC520B0E9979'] = {
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