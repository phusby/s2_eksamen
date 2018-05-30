(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Asset1 = function() {
	this.initialize(img.Asset1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1014,523);// helper functions:

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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset1();
	this.instance.parent = this;
	this.instance.setTransform(986,0,1,0.839);

	this.instance_1 = new lib.Asset1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,0.839);

	this.instance_2 = new lib.Asset1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1969,0,1,0.839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,2983,439), null);


// stage content:
(lib.jordenani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgFEAmyIhOgLQi8gcizg4Qoqivm8m9Qmdmci0n9Qgqh6gfh+QgIglgIglQgyj8AAkQQAAwKLcrdQLdrcQKAAQQLAALcLcQLdLdAAQKQAAGYhyFpQivIrm8G7QmcGen9CzQmKCMnEAAQimAAiegSg");
	mask.setTransform(250.5,250.5);

	// jord
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-991.5,250,1,1,0,0,0,1491.5,219.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-981.2},0).wait(1).to({x:-970.9},0).wait(1).to({x:-960.6},0).wait(1).to({x:-950.3},0).wait(1).to({x:-940},0).wait(1).to({x:-929.7},0).wait(1).to({x:-919.4},0).wait(1).to({x:-909.1},0).wait(1).to({x:-898.8},0).wait(1).to({x:-888.5},0).wait(1).to({x:-878.2},0).wait(1).to({x:-867.9},0).wait(1).to({x:-857.6},0).wait(1).to({x:-847.3},0).wait(1).to({x:-837},0).wait(1).to({x:-826.7},0).wait(1).to({x:-816.4},0).wait(1).to({x:-806.1},0).wait(1).to({x:-795.8},0).wait(1).to({x:-785.5},0).wait(1).to({x:-775.2},0).wait(1).to({x:-764.9},0).wait(1).to({x:-754.6},0).wait(1).to({x:-744.3},0).wait(1).to({x:-734},0).wait(1).to({x:-723.7},0).wait(1).to({x:-713.4},0).wait(1).to({x:-703.1},0).wait(1).to({x:-692.8},0).wait(1).to({x:-682.5},0).wait(1).to({x:-672.2},0).wait(1).to({x:-661.9},0).wait(1).to({x:-651.6},0).wait(1).to({x:-641.3},0).wait(1).to({x:-631},0).wait(1).to({x:-620.7},0).wait(1).to({x:-610.4},0).wait(1).to({x:-600.1},0).wait(1).to({x:-589.8},0).wait(1).to({x:-579.5},0).wait(1).to({x:-569.2},0).wait(1).to({x:-558.9},0).wait(1).to({x:-548.6},0).wait(1).to({x:-538.3},0).wait(1).to({x:-528},0).wait(1).to({x:-517.7},0).wait(1).to({x:-507.4},0).wait(1).to({x:-497.1},0).wait(1).to({x:-486.8},0).wait(1).to({x:-476.5},0).wait(1).to({x:-466.2},0).wait(1).to({x:-455.9},0).wait(1).to({x:-445.6},0).wait(1).to({x:-435.3},0).wait(1).to({x:-425},0).wait(1).to({x:-414.7},0).wait(1).to({x:-404.4},0).wait(1).to({x:-394.1},0).wait(1).to({x:-383.8},0).wait(1).to({x:-373.5},0).wait(1).to({x:-363.2},0).wait(1).to({x:-352.9},0).wait(1).to({x:-342.6},0).wait(1).to({x:-332.3},0).wait(1).to({x:-322},0).wait(1).to({x:-311.7},0).wait(1).to({x:-301.4},0).wait(1).to({x:-291.1},0).wait(1).to({x:-280.8},0).wait(1).to({x:-270.5},0).wait(1).to({x:-260.2},0).wait(1).to({x:-249.9},0).wait(1).to({x:-239.6},0).wait(1).to({x:-229.3},0).wait(1).to({x:-219},0).wait(1).to({x:-208.7},0).wait(1).to({x:-198.4},0).wait(1).to({x:-188.1},0).wait(1).to({x:-177.8},0).wait(1).to({x:-167.5},0).wait(1).to({x:-157.2},0).wait(1).to({x:-146.9},0).wait(1).to({x:-136.6},0).wait(1).to({x:-126.3},0).wait(1).to({x:-116},0).wait(1).to({x:-105.7},0).wait(1).to({x:-95.4},0).wait(1).to({x:-85.1},0).wait(1).to({x:-74.8},0).wait(1).to({x:-64.5},0).wait(1).to({x:-54.2},0).wait(1).to({x:-43.9},0).wait(1).to({x:-33.6},0).wait(1).to({x:-23.3},0).wait(1).to({x:-13},0).wait(1).to({x:-2.7},0).wait(1).to({x:7.6},0).wait(1).to({x:17.9},0).wait(1).to({x:28.2},0).wait(1).to({x:38.5},0).wait(1).to({x:48.8},0).wait(1).to({x:59.1},0).wait(1).to({x:69.4},0).wait(1).to({x:79.7},0).wait(1).to({x:90},0).wait(1).to({x:100.3},0).wait(1).to({x:110.6},0).wait(1).to({x:120.9},0).wait(1).to({x:131.2},0).wait(1).to({x:141.5},0).wait(1).to({x:151.8},0).wait(1).to({x:162.1},0).wait(1).to({x:172.4},0).wait(1).to({x:182.7},0).wait(1).to({x:193},0).wait(1).to({x:203.3},0).wait(1).to({x:213.6},0).wait(1).to({x:223.8},0).wait(1).to({x:234.2},0).wait(1).to({x:244.5},0).wait(1).to({x:254.7},0).wait(1).to({x:265.1},0).wait(1).to({x:275.3},0).wait(1).to({x:285.7},0).wait(1).to({x:296},0).wait(1).to({x:306.3},0).wait(1).to({x:316.5},0).wait(1).to({x:326.8},0).wait(1).to({x:337.1},0).wait(1).to({x:347.4},0).wait(1).to({x:357.7},0).wait(1).to({x:368},0).wait(1).to({x:378.3},0).wait(1).to({x:388.6},0).wait(1).to({x:398.9},0).wait(1).to({x:409.2},0).wait(1).to({x:419.5},0).wait(1).to({x:429.8},0).wait(1).to({x:440.1},0).wait(1).to({x:450.4},0).wait(1).to({x:460.7},0).wait(1).to({x:471},0).wait(1).to({x:481.3},0).wait(1).to({x:491.6},0).wait(1).to({x:501.9},0).wait(1).to({x:512.2},0).wait(1).to({x:522.5},0).wait(1).to({x:532.8},0).wait(1).to({x:543.1},0).wait(1).to({x:553.4},0).wait(1).to({x:563.7},0).wait(1).to({x:574},0).wait(1).to({x:584.3},0).wait(1).to({x:594.6},0).wait(1).to({x:604.9},0).wait(1).to({x:615.2},0).wait(1).to({x:625.5},0).wait(1).to({x:635.8},0).wait(1).to({x:646.1},0).wait(1).to({x:656.4},0).wait(1).to({x:666.7},0).wait(1).to({x:677},0).wait(1).to({x:687.3},0).wait(1).to({x:697.6},0).wait(1).to({x:707.9},0).wait(1).to({x:718.2},0).wait(1).to({x:728.5},0).wait(1).to({x:738.8},0).wait(1).to({x:749.1},0).wait(1).to({x:759.4},0).wait(1).to({x:769.7},0).wait(1).to({x:780},0).wait(1).to({x:790.3},0).wait(1).to({x:800.6},0).wait(1).to({x:810.9},0).wait(1).to({x:821.2},0).wait(1).to({x:831.5},0).wait(1).to({x:841.8},0).wait(1).to({x:852.1},0).wait(1).to({x:862.4},0).wait(1).to({x:872.7},0).wait(1).to({x:883},0).wait(1).to({x:893.3},0).wait(1).to({x:903.6},0).wait(1).to({x:913.9},0).wait(1).to({x:924.2},0).wait(1).to({x:934.5},0).wait(1).to({x:944.8},0).wait(1).to({x:955.1},0).wait(1).to({x:965.4},0).wait(1).to({x:975.7},0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0000FF","#00FFFF"],[0.224,0.816],0,-250,0,250).s().p("EgFFAmxIhMgJQi9gdiyg4Qoqivm8m8Qmdmei1n8Qgrh5gdh/QgKglgHgmQgyj6AAkRQAAwKLdrcQLbrdQLAAQQLAALdLdQLcLcAAQKQAAGYhyFpQivIrm7G8QmeGcn8C1QmKCLnEAAQimAAifgTg");
	this.shape.setTransform(250,250);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250.5,250.5,499.5,499.5);
// library properties:
lib.properties = {
	id: '0F49EA571C9A4CEAB5FEFC520B0E9979',
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Asset1.png", id:"Asset1"}
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