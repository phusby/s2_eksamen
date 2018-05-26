(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.uranusspinning = function() {
	this.initialize(img.uranusspinning);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2565,500);// helper functions:

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
	this.instance = new lib.uranusspinning();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.784);

	this.instance_1 = new lib.uranusspinning();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2260,20,1,0.784);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,4825,412.1), null);


// stage content:
(lib.uranusaniblur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgFFAmxIhMgJQi9gdiyg4Qoqivm8m8Qmdmei1n8Qgrh5gdh/QgKglgHgmQgyj6AAkRQAAwKLdrcQLbrdQLAAQQLAALdLdQLcLcAAQKQAAGYhyFpQivIrm7G8QmdGcn9C1QmKCLnEAAQimAAifgTg");
	mask.setTransform(250,250);

	// blur
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-1683.1,250.1,1,1,0,0,0,2412.5,206.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:206,x:-1663.5,y:250},0).wait(1).to({x:-1643.9,y:249.9},0).wait(1).to({x:-1624.4},0).wait(1).to({x:-1604.8,y:250},0).wait(1).to({x:-1585.2,y:249.9},0).wait(1).to({x:-1565.7},0).wait(1).to({x:-1546.1,y:250},0).wait(1).to({x:-1526.5},0).wait(1).to({x:-1506.9,y:249.9},0).wait(1).to({x:-1487.4,y:250},0).wait(1).to({x:-1467.8},0).wait(1).to({x:-1448.2,y:249.9},0).wait(1).to({x:-1428.7,y:250},0).wait(1).to({x:-1409.1},0).wait(1).to({x:-1389.5},0).wait(1).to({x:-1369.9,y:249.9},0).wait(1).to({x:-1350.4,y:250},0).wait(1).to({x:-1330.8},0).wait(1).to({x:-1311.2,y:249.9},0).wait(1).to({x:-1291.7,y:250},0).wait(1).to({x:-1272.1},0).wait(1).to({rotation:-0.1,x:-1252.5},0).wait(1).to({x:-1232.9},0).wait(1).to({x:-1213.4},0).wait(1).to({x:-1193.8},0).wait(1).to({x:-1174.3},0).wait(1).to({x:-1154.6},0).wait(1).to({x:-1135.1},0).wait(1).to({x:-1115.5},0).wait(1).to({x:-1095.9},0).wait(1).to({x:-1076.4},0).wait(1).to({x:-1056.8},0).wait(1).to({x:-1037.2},0).wait(1).to({x:-1017.6},0).wait(1).to({x:-998.1},0).wait(1).to({x:-978.5},0).wait(1).to({x:-959},0).wait(1).to({x:-939.4},0).wait(1).to({x:-919.8},0).wait(1).to({x:-900.2},0).wait(1).to({x:-880.6},0).wait(1).to({x:-861.1},0).wait(1).to({x:-841.5},0).wait(1).to({x:-822},0).wait(1).to({x:-802.3},0).wait(1).to({x:-782.8},0).wait(1).to({x:-763.2},0).wait(1).to({x:-743.7},0).wait(1).to({x:-724.1},0).wait(1).to({x:-704.5},0).wait(1).to({x:-684.9,y:249.9},0).wait(1).to({x:-665.3,y:250},0).wait(1).to({x:-645.8,y:249.9},0).wait(1).to({x:-626.2},0).wait(1).to({x:-606.7,y:250},0).wait(1).to({x:-587.1},0).wait(1).to({x:-567.5,y:249.9},0).wait(1).to({x:-547.9,y:250},0).wait(1).to({x:-528.4},0).wait(1).to({x:-508.8,y:249.9},0).wait(1).to({x:-489.2},0).wait(1).to({x:-469.7,y:250},0).wait(1).to({x:-450},0).wait(1).to({rotation:-0.2,x:-430.5,y:249.9},0).wait(1).to({x:-410.9,y:250},0).wait(1).to({x:-391.4},0).wait(1).to({x:-371.8,y:249.9},0).wait(1).to({x:-352.2,y:250},0).wait(1).to({x:-332.6},0).wait(1).to({x:-313.1},0).wait(1).to({x:-293.5},0).wait(1).to({x:-273.9},0).wait(1).to({x:-254.4},0).wait(1).to({x:-234.7,y:249.9},0).wait(1).to({x:-215.2,y:250},0).wait(1).to({x:-195.6},0).wait(1).to({x:-176.1},0).wait(1).to({x:-156.5},0).wait(1).to({x:-136.9},0).wait(1).to({x:-117.3},0).wait(1).to({x:-97.8},0).wait(1).to({x:-78.2},0).wait(1).to({x:-58.6},0).wait(1).to({x:-39.1},0).wait(1).to({x:-19.5},0).wait(1).to({x:0.1},0).wait(1).to({x:19.7},0).wait(1).to({x:39.2},0).wait(1).to({x:58.8},0).wait(1).to({x:78.4},0).wait(1).to({x:97.9},0).wait(1).to({x:117.5},0).wait(1).to({x:137.1},0).wait(1).to({x:156.7},0).wait(1).to({x:176.2},0).wait(1).to({x:195.8},0).wait(1).to({x:215.4},0).wait(1).to({x:235},0).wait(1).to({x:254.5},0).wait(1).to({x:274.1},0).wait(1).to({x:293.7},0).wait(1).to({x:313.2},0).wait(1).to({x:332.8,y:249.9},0).wait(1).to({x:352.4,y:250},0).wait(1).to({x:372,y:249.9},0).wait(1).to({x:391.5},0).wait(1).to({rotation:-0.3,x:411.1,y:250},0).wait(1).to({x:430.7,y:249.9},0).wait(1).to({x:450.2},0).wait(1).to({x:469.8,y:250},0).wait(1).to({x:489.4},0).wait(1).to({x:509,y:249.9},0).wait(1).to({x:528.5,y:250},0).wait(1).to({x:548.1},0).wait(1).to({x:567.7},0).wait(1).to({x:587.3},0).wait(1).to({x:606.8},0).wait(1).to({x:626.4},0).wait(1).to({x:646,y:249.9},0).wait(1).to({x:665.5,y:250},0).wait(1).to({x:685.1},0).wait(1).to({x:704.7},0).wait(1).to({x:724.3},0).wait(1).to({x:743.8},0).wait(1).to({x:763.4},0).wait(1).to({x:783},0).wait(1).to({x:802.5},0).wait(1).to({x:822.1},0).wait(1).to({x:841.7},0).wait(1).to({x:861.3},0).wait(1).to({x:880.8},0).wait(1).to({x:900.4},0).wait(1).to({x:920},0).wait(1).to({x:939.6},0).wait(1).to({x:959.1},0).wait(1).to({x:978.7},0).wait(1).to({x:998.3},0).wait(1).to({x:1017.8},0).wait(1).to({x:1037.4},0).wait(1).to({x:1057},0).wait(1).to({x:1076.6},0).wait(1).to({x:1096.1},0).wait(1).to({x:1115.7},0).wait(1).to({x:1135.3},0).wait(1).to({x:1154.8},0).wait(1).to({x:1174.4},0).wait(1).to({x:1194},0).wait(1).to({x:1213.6},0).wait(1).to({rotation:-0.4,x:1233.1},0).wait(1).to({x:1252.7},0).wait(1).to({x:1272.3},0).wait(1).to({x:1291.9},0).wait(1).to({x:1311.4},0).wait(1).to({x:1331},0).wait(1).to({x:1350.6},0).wait(1).to({x:1370.1},0).wait(1).to({x:1389.8,y:249.9},0).wait(1).to({x:1409.3,y:250},0).wait(1).to({x:1428.9},0).wait(1).to({x:1448.4,y:249.9},0).wait(1).to({x:1468},0).wait(1).to({x:1487.6,y:250},0).wait(1).to({x:1507.2},0).wait(1).to({x:1526.7,y:249.9},0).wait(1).to({x:1546.3,y:250},0).wait(1).to({x:1565.9},0).wait(1).to({x:1585.4,y:249.9},0).wait(1).to({x:1605,y:250},0).wait(1).to({x:1624.6},0).wait(1).to({x:1644.2},0).wait(1).to({x:1663.7},0).wait(1).to({x:1683.3},0).wait(1).to({x:1702.9},0).wait(1).to({x:1722.4},0).wait(1).to({x:1742.1},0).wait(1).to({x:1761.6},0).wait(1).to({x:1781.2},0).wait(1).to({x:1800.7},0).wait(1).to({x:1820.3},0).wait(1).to({x:1839.9},0).wait(1).to({x:1859.5},0).wait(1).to({x:1879.1},0).wait(1).to({x:1898.6},0).wait(1).to({x:1918.2},0).wait(1).to({x:1937.7},0).wait(1).to({x:1957.3},0).wait(1).to({x:1976.9},0).wait(1).to({x:1996.5},0).wait(1).to({x:2016.1},0).wait(1).to({x:2035.6},0).wait(1).to({regX:2412.2,rotation:-0.3,x:2035.5},0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#24726C","#7EF2E7"],[0.224,0.816],0,-250,0,250).s().p("EgFEAmxIhOgJQi8gdizg4Qoqivm8m8Qmdmei0n8Qgqh5gfh/QgIglgIgmQgyj6AAkRQAAwKLcrcQLdrdQKAAQQLAALcLdQLdLcAAQKQAAGYhxFpQiwIrm8G8QmcGcn9C1QmKCLnEAAQimAAiegTg");
	this.shape.setTransform(251,250);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(192));

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
		{src:"images/uranusspinning.png", id:"uranusspinning"}
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