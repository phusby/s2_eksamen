(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.venusspinning = function() {
	this.initialize(img.venusspinning);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2052,400);// helper functions:

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
	this.instance = new lib.venusspinning();
	this.instance.parent = this;

	this.instance_1 = new lib.venusspinning();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1801,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,3853,412), null);


// stage content:
(lib.venusaniblur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgFFAmxIhMgJQi9gdiyg4Qoqivm8m8Qmdmei1n8Qgrh5gdh/QgKglgHgmQgyj6AAkRQAAwKLdrcQLbrdQLAAQQLAALdLdQLcLcAAQKQAAGYhyFpQivIrm7G8QmdGcn9C1QmKCLnEAAQimAAifgTg");
	mask.setTransform(250,250);

	// blur
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-1214.5,226,1,1,0,0,0,1926.5,206);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-1199.3},0).wait(1).to({x:-1184.2},0).wait(1).to({x:-1169},0).wait(1).to({x:-1153.8},0).wait(1).to({x:-1138.6},0).wait(1).to({x:-1123.5},0).wait(1).to({x:-1108.3},0).wait(1).to({x:-1093.1},0).wait(1).to({x:-1077.9},0).wait(1).to({x:-1062.8},0).wait(1).to({x:-1047.6},0).wait(1).to({x:-1032.4},0).wait(1).to({x:-1017.2},0).wait(1).to({x:-1002.1},0).wait(1).to({x:-986.9},0).wait(1).to({x:-971.7},0).wait(1).to({x:-956.6},0).wait(1).to({x:-941.4},0).wait(1).to({x:-926.2},0).wait(1).to({x:-911},0).wait(1).to({x:-895.9},0).wait(1).to({x:-880.7},0).wait(1).to({x:-865.5},0).wait(1).to({x:-850.3},0).wait(1).to({x:-835.2},0).wait(1).to({x:-820},0).wait(1).to({x:-804.8},0).wait(1).to({x:-789.7},0).wait(1).to({x:-774.5},0).wait(1).to({x:-759.3},0).wait(1).to({x:-744.1},0).wait(1).to({x:-729},0).wait(1).to({x:-713.8},0).wait(1).to({x:-698.6},0).wait(1).to({x:-683.4},0).wait(1).to({x:-668.3},0).wait(1).to({x:-653.1},0).wait(1).to({x:-637.9},0).wait(1).to({x:-622.7},0).wait(1).to({x:-607.6},0).wait(1).to({x:-592.4},0).wait(1).to({x:-577.2},0).wait(1).to({x:-562},0).wait(1).to({x:-546.9},0).wait(1).to({x:-531.7},0).wait(1).to({x:-516.5},0).wait(1).to({x:-501.3},0).wait(1).to({x:-486.2},0).wait(1).to({x:-471},0).wait(1).to({x:-455.8},0).wait(1).to({x:-440.7},0).wait(1).to({x:-425.5},0).wait(1).to({x:-410.3},0).wait(1).to({x:-395.1},0).wait(1).to({x:-380},0).wait(1).to({x:-364.8},0).wait(1).to({x:-349.6},0).wait(1).to({x:-334.4},0).wait(1).to({x:-319.3},0).wait(1).to({x:-304.1},0).wait(1).to({x:-288.9},0).wait(1).to({x:-273.7},0).wait(1).to({x:-258.6},0).wait(1).to({x:-243.4},0).wait(1).to({x:-228.2},0).wait(1).to({x:-213.1},0).wait(1).to({x:-197.9},0).wait(1).to({x:-182.7},0).wait(1).to({x:-167.5},0).wait(1).to({x:-152.4},0).wait(1).to({x:-137.2},0).wait(1).to({x:-122},0).wait(1).to({x:-106.8},0).wait(1).to({x:-91.7},0).wait(1).to({x:-76.5},0).wait(1).to({x:-61.3},0).wait(1).to({x:-46.1},0).wait(1).to({x:-31},0).wait(1).to({x:-15.8},0).wait(1).to({x:-0.6},0).wait(1).to({x:14.5},0).wait(1).to({x:29.7},0).wait(1).to({x:44.9},0).wait(1).to({x:60.1},0).wait(1).to({x:75.2},0).wait(1).to({x:90.4},0).wait(1).to({x:105.6},0).wait(1).to({x:120.8},0).wait(1).to({x:135.9},0).wait(1).to({x:151.1},0).wait(1).to({x:166.3},0).wait(1).to({x:181.5},0).wait(1).to({x:196.6},0).wait(1).to({x:211.8},0).wait(1).to({x:227},0).wait(1).to({x:242.1},0).wait(1).to({x:257.3},0).wait(1).to({x:272.5},0).wait(1).to({x:287.7},0).wait(1).to({x:302.8},0).wait(1).to({x:318},0).wait(1).to({x:333.2},0).wait(1).to({x:348.4},0).wait(1).to({x:363.5},0).wait(1).to({x:378.7},0).wait(1).to({x:393.9},0).wait(1).to({x:409.1},0).wait(1).to({x:424.2},0).wait(1).to({x:439.4},0).wait(1).to({x:454.6},0).wait(1).to({x:469.7},0).wait(1).to({x:484.9},0).wait(1).to({x:500.1},0).wait(1).to({x:515.3},0).wait(1).to({x:530.4},0).wait(1).to({x:545.6},0).wait(1).to({x:560.8},0).wait(1).to({x:576},0).wait(1).to({x:591.1},0).wait(1).to({x:606.3},0).wait(1).to({x:621.5},0).wait(1).to({x:636.7},0).wait(1).to({x:651.8},0).wait(1).to({x:667},0).wait(1).to({x:682.2},0).wait(1).to({x:697.4},0).wait(1).to({x:712.5},0).wait(1).to({x:727.7},0).wait(1).to({x:742.9},0).wait(1).to({x:758},0).wait(1).to({x:773.2},0).wait(1).to({x:788.4},0).wait(1).to({x:803.6},0).wait(1).to({x:818.7},0).wait(1).to({x:833.9},0).wait(1).to({x:849.1},0).wait(1).to({x:864.3},0).wait(1).to({x:879.4},0).wait(1).to({x:894.6},0).wait(1).to({x:909.8},0).wait(1).to({x:925},0).wait(1).to({x:940.1},0).wait(1).to({x:955.3},0).wait(1).to({x:970.5},0).wait(1).to({x:985.6},0).wait(1).to({x:1000.8},0).wait(1).to({x:1016},0).wait(1).to({x:1031.2},0).wait(1).to({x:1046.3},0).wait(1).to({x:1061.5},0).wait(1).to({x:1076.7},0).wait(1).to({x:1091.9},0).wait(1).to({x:1107},0).wait(1).to({x:1122.2},0).wait(1).to({x:1137.4},0).wait(1).to({x:1152.6},0).wait(1).to({x:1167.7},0).wait(1).to({x:1182.9},0).wait(1).to({x:1198.1},0).wait(1).to({x:1213.2},0).wait(1).to({x:1228.4},0).wait(1).to({x:1243.6},0).wait(1).to({x:1258.8},0).wait(1).to({x:1273.9},0).wait(1).to({x:1289.1},0).wait(1).to({x:1304.3},0).wait(1).to({x:1319.5},0).wait(1).to({x:1334.6},0).wait(1).to({x:1349.8},0).wait(1).to({x:1365},0).wait(1).to({x:1380.2},0).wait(1).to({x:1395.3},0).wait(1).to({x:1410.5},0).wait(1).to({x:1425.7},0).wait(1).to({x:1440.8},0).wait(1).to({x:1456},0).wait(1).to({x:1471.2},0).wait(1).to({x:1486.4},0).wait(1).to({x:1501.5},0).wait(1).to({x:1516.7},0).wait(1).to({x:1531.9},0).wait(1).to({x:1547.1},0).wait(1).to({x:1562.2},0).wait(1).to({x:1577.4},0).wait(1).to({x:1592.6},0).wait(1).to({x:1607.8},0).wait(1).to({x:1622.9},0).wait(1).to({x:1638.1},0).wait(1).to({x:1653.3},0).wait(1).to({x:1668.4},0).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9B4021","#F2A57E"],[0.224,0.816],0,-250,0,250).s().p("EgFFAmxIhMgJQi9gdiyg4Qoqivm8m8Qmdmei1n8Qgrh5gdh/QgKglgHgmQgyj6AAkRQAAwKLdrcQLbrdQLAAQQLAALdLdQLcLcAAQKQAAGYhyFpQivIrm7G8QmdGcn9C1QmKCLnEAAQimAAifgTg");
	this.shape.setTransform(250,250);

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
		{src:"images/venusspinning.png", id:"venusspinning"}
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