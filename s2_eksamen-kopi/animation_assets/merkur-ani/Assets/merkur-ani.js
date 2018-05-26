(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.merkurspinningblur = function() {
	this.initialize(img.merkurspinningblur);
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
	this.instance = new lib.merkurspinningblur();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.832);

	this.instance_1 = new lib.merkurspinningblur();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2128,0,1,0.832);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,4693,416), null);


// stage content:
(lib.merkurani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgFEAmyIhOgLQi8gcizg4Qoqivm8m9Qmdmci0n9Qgqh6gfh+QgIglgIglQgyj8AAkQQAAwKLcrdQLdrcQKAAQQLAALcLcQLdLdAAQKQAAGYhyFpQivIrm8G7QmcGen9CzQmKCMnEAAQimAAiegSg");
	mask.setTransform(250.5,250.5);

	// blur
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-1350.5,253,1,1,0,0,0,2346.5,208);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-1332.7},0).wait(1).to({x:-1315},0).wait(1).to({x:-1297.3},0).wait(1).to({x:-1279.6},0).wait(1).to({x:-1261.9},0).wait(1).to({x:-1244.2},0).wait(1).to({x:-1226.5},0).wait(1).to({x:-1208.8},0).wait(1).to({x:-1191.1},0).wait(1).to({x:-1173.4},0).wait(1).to({x:-1155.6},0).wait(1).to({x:-1137.9},0).wait(1).to({x:-1120.2},0).wait(1).to({x:-1102.5},0).wait(1).to({x:-1084.8},0).wait(1).to({x:-1067.1},0).wait(1).to({x:-1049.4},0).wait(1).to({x:-1031.7},0).wait(1).to({x:-1014},0).wait(1).to({x:-996.3},0).wait(1).to({x:-978.6},0).wait(1).to({x:-960.8},0).wait(1).to({x:-943.1},0).wait(1).to({x:-925.4},0).wait(1).to({x:-907.7},0).wait(1).to({x:-890},0).wait(1).to({x:-872.3},0).wait(1).to({x:-854.6},0).wait(1).to({x:-836.9},0).wait(1).to({x:-819.2},0).wait(1).to({x:-801.5},0).wait(1).to({x:-783.7},0).wait(1).to({x:-766},0).wait(1).to({x:-748.3},0).wait(1).to({x:-730.6},0).wait(1).to({x:-712.9},0).wait(1).to({x:-695.2},0).wait(1).to({x:-677.5},0).wait(1).to({x:-659.8},0).wait(1).to({x:-642.1},0).wait(1).to({x:-624.4},0).wait(1).to({x:-606.7},0).wait(1).to({x:-588.9},0).wait(1).to({x:-571.2},0).wait(1).to({x:-553.5},0).wait(1).to({x:-535.8},0).wait(1).to({x:-518.1},0).wait(1).to({x:-500.4},0).wait(1).to({x:-482.7},0).wait(1).to({x:-465},0).wait(1).to({x:-447.3},0).wait(1).to({x:-429.6},0).wait(1).to({x:-411.9},0).wait(1).to({x:-394.1},0).wait(1).to({x:-376.4},0).wait(1).to({x:-358.7},0).wait(1).to({x:-341},0).wait(1).to({x:-323.3},0).wait(1).to({x:-305.6},0).wait(1).to({x:-287.9},0).wait(1).to({x:-270.2},0).wait(1).to({x:-252.5},0).wait(1).to({x:-234.8},0).wait(1).to({x:-217},0).wait(1).to({x:-199.3},0).wait(1).to({x:-181.6},0).wait(1).to({x:-163.9},0).wait(1).to({x:-146.2},0).wait(1).to({x:-128.5},0).wait(1).to({x:-110.8},0).wait(1).to({x:-93.1},0).wait(1).to({x:-75.4},0).wait(1).to({x:-57.7},0).wait(1).to({x:-39.9},0).wait(1).to({x:-22.2},0).wait(1).to({x:-4.5},0).wait(1).to({x:13.2},0).wait(1).to({x:30.9},0).wait(1).to({x:48.6},0).wait(1).to({x:66.3},0).wait(1).to({x:84},0).wait(1).to({x:101.7},0).wait(1).to({x:119.4},0).wait(1).to({x:137.1},0).wait(1).to({x:154.9},0).wait(1).to({x:172.6},0).wait(1).to({x:190.3},0).wait(1).to({x:208},0).wait(1).to({x:225.7},0).wait(1).to({x:243.4},0).wait(1).to({x:261.1},0).wait(1).to({x:278.8},0).wait(1).to({x:296.5},0).wait(1).to({x:314.2},0).wait(1).to({x:331.9},0).wait(1).to({x:349.7},0).wait(1).to({x:367.4},0).wait(1).to({x:385.1},0).wait(1).to({x:402.8},0).wait(1).to({x:420.5},0).wait(1).to({x:438.2},0).wait(1).to({x:455.9},0).wait(1).to({x:473.6},0).wait(1).to({x:491.3},0).wait(1).to({x:509},0).wait(1).to({x:526.7},0).wait(1).to({x:544.5},0).wait(1).to({x:562.2},0).wait(1).to({x:579.9},0).wait(1).to({x:597.6},0).wait(1).to({x:615.3},0).wait(1).to({x:633},0).wait(1).to({x:650.7},0).wait(1).to({x:668.4},0).wait(1).to({x:686.1},0).wait(1).to({x:703.8},0).wait(1).to({x:721.6},0).wait(1).to({x:739.3},0).wait(1).to({x:757},0).wait(1).to({x:774.7},0).wait(1).to({x:792.4},0).wait(1).to({x:810.1},0).wait(1).to({x:827.8},0).wait(1).to({x:845.5},0).wait(1).to({x:863.2},0).wait(1).to({x:880.9},0).wait(1).to({x:898.7},0).wait(1).to({x:916.4},0).wait(1).to({x:934.1},0).wait(1).to({x:951.8},0).wait(1).to({x:969.5},0).wait(1).to({x:987.2},0).wait(1).to({x:1004.9},0).wait(1).to({x:1022.6},0).wait(1).to({x:1040.3},0).wait(1).to({x:1058},0).wait(1).to({x:1075.7},0).wait(1).to({x:1093.5},0).wait(1).to({x:1111.2},0).wait(1).to({x:1128.9},0).wait(1).to({x:1146.6},0).wait(1).to({x:1164.3},0).wait(1).to({x:1182},0).wait(1).to({x:1199.7},0).wait(1).to({x:1217.4},0).wait(1).to({x:1235.1},0).wait(1).to({x:1252.8},0).wait(1).to({x:1270.6},0).wait(1).to({x:1288.3},0).wait(1).to({x:1306},0).wait(1).to({x:1323.7},0).wait(1).to({x:1341.4},0).wait(1).to({x:1359.1},0).wait(1).to({x:1376.8},0).wait(1).to({x:1394.5},0).wait(1).to({x:1412.2},0).wait(1).to({x:1429.9},0).wait(1).to({x:1447.6},0).wait(1).to({x:1465.4},0).wait(1).to({x:1483.1},0).wait(1).to({x:1500.8},0).wait(1).to({x:1518.5},0).wait(1).to({x:1536.2},0).wait(1).to({x:1553.9},0).wait(1).to({x:1571.6},0).wait(1).to({x:1589.3},0).wait(1).to({x:1607},0).wait(1).to({x:1624.7},0).wait(1).to({x:1642.5},0).wait(1).to({x:1660.2},0).wait(1).to({x:1677.9},0).wait(1).to({x:1695.6},0).wait(1).to({x:1713.3},0).wait(1).to({x:1731},0).wait(1).to({x:1748.7},0).wait(1).to({x:1766.4},0).wait(1).to({x:1784.1},0).wait(1).to({x:1801.8},0).wait(1).to({x:1819.5},0).wait(1).to({x:1837.3},0).wait(1).to({x:1855},0).wait(1).to({x:1872.7},0).wait(1).to({x:1890.4},0).wait(1).to({x:1908.1},0).wait(1).to({x:1925.8},0).wait(1).to({x:1943.5},0).wait(1).to({x:1961.2},0).wait(1).to({x:1978.9},0).wait(1).to({x:1996.6},0).wait(1).to({x:2014.3},0).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#44372F","#BFB8B0"],[0.224,0.816],0,-250,0,250).s().p("EgFEAmxIhOgJQi8gdizg4Qoqivm8m8Qmdmdi0n9Qgqh5gfh/QgIglgIglQgyj8AAkQQAAwKLcrdQLdrcQKAAQQLAALcLcQLdLdAAQKQAAGYhyFpQivIrm8G8QmcGcn9C1QmKCLnEAAQimAAiegTg");
	this.shape.setTransform(250.1,250.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250.5,250.5,500,499.6);
// library properties:
lib.properties = {
	id: '0F49EA571C9A4CEAB5FEFC520B0E9979',
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/merkurspinningblur.png", id:"merkurspinningblur"}
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