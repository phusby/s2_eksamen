(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.neptunspinningblur = function() {
	this.initialize(img.neptunspinningblur);
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
	this.instance = new lib.neptunspinningblur();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.84);

	this.instance_1 = new lib.neptunspinningblur();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2179,21,1,0.84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,4744,441), null);


// stage content:
(lib.neptunani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgFEAmyIhOgLQi8gcizg4Qoqivm8m9Qmdmci0n9Qgqh6gfh+QgIglgIglQgyj8AAkQQAAwKLcrdQLdrcQKAAQQLAALcLcQLdLdAAQKQAAGYhyFpQivIrm8G7QmcGen9CzQmKCMnEAAQimAAiegSg");
	mask.setTransform(250.5,250.5);

	// blur
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-1608.9,250,1,1,0,0,0,2372,220.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-1590},0).wait(1).to({x:-1571},0).wait(1).to({x:-1552.1},0).wait(1).to({x:-1533.1},0).wait(1).to({x:-1514.1},0).wait(1).to({x:-1495.1},0).wait(1).to({x:-1476.2},0).wait(1).to({rotation:-0.1,x:-1457.2},0).wait(1).to({x:-1438.2},0).wait(1).to({x:-1419.2},0).wait(1).to({x:-1400.3},0).wait(1).to({x:-1381.3},0).wait(1).to({x:-1362.3},0).wait(1).to({x:-1343.3},0).wait(1).to({x:-1324.4},0).wait(1).to({x:-1305.4},0).wait(1).to({x:-1286.4},0).wait(1).to({x:-1267.4},0).wait(1).to({x:-1248.5},0).wait(1).to({x:-1229.5},0).wait(1).to({x:-1210.5,y:250.1},0).wait(1).to({x:-1191.5,y:250},0).wait(1).to({x:-1172.6},0).wait(1).to({rotation:-0.2,x:-1153.6},0).wait(1).to({x:-1134.6},0).wait(1).to({x:-1115.6},0).wait(1).to({x:-1096.7},0).wait(1).to({x:-1077.7},0).wait(1).to({x:-1058.7},0).wait(1).to({x:-1039.7},0).wait(1).to({x:-1020.8},0).wait(1).to({x:-1001.8},0).wait(1).to({x:-982.8},0).wait(1).to({x:-963.8},0).wait(1).to({x:-944.9},0).wait(1).to({x:-925.9},0).wait(1).to({x:-907},0).wait(1).to({x:-888},0).wait(1).to({rotation:-0.3,x:-869},0).wait(1).to({x:-850},0).wait(1).to({x:-831.1},0).wait(1).to({x:-812.1},0).wait(1).to({x:-793.1},0).wait(1).to({x:-774.1},0).wait(1).to({x:-755.2},0).wait(1).to({x:-736.2},0).wait(1).to({x:-717.2,y:250.1},0).wait(1).to({x:-698.2,y:250},0).wait(1).to({x:-679.3},0).wait(1).to({x:-660.3,y:250.1},0).wait(1).to({x:-641.3,y:250},0).wait(1).to({x:-622.3},0).wait(1).to({x:-603.4},0).wait(1).to({x:-584.4},0).wait(1).to({rotation:-0.4,x:-565.4},0).wait(1).to({x:-546.4},0).wait(1).to({x:-527.5},0).wait(1).to({x:-508.5},0).wait(1).to({x:-489.5},0).wait(1).to({x:-470.5},0).wait(1).to({x:-451.6},0).wait(1).to({x:-432.6},0).wait(1).to({x:-413.6},0).wait(1).to({x:-394.6},0).wait(1).to({x:-375.7},0).wait(1).to({x:-356.7},0).wait(1).to({x:-337.7},0).wait(1).to({x:-318.7},0).wait(1).to({x:-299.8},0).wait(1).to({rotation:-0.5,x:-280.8},0).wait(1).to({x:-261.9},0).wait(1).to({x:-242.9},0).wait(1).to({x:-223.9,y:250.1},0).wait(1).to({x:-204.9,y:250},0).wait(1).to({x:-186},0).wait(1).to({x:-167,y:250.1},0).wait(1).to({x:-148,y:250},0).wait(1).to({x:-129},0).wait(1).to({x:-110.1,y:250.1},0).wait(1).to({x:-91.1,y:250},0).wait(1).to({x:-72.1},0).wait(1).to({x:-53.1,y:250.1},0).wait(1).to({x:-34.2,y:250},0).wait(1).to({x:-15.2},0).wait(1).to({x:3.7},0).wait(1).to({rotation:-0.6,x:22.7},0).wait(1).to({x:41.7},0).wait(1).to({x:60.7},0).wait(1).to({x:79.6},0).wait(1).to({x:98.6},0).wait(1).to({x:117.6},0).wait(1).to({x:136.6},0).wait(1).to({x:155.6},0).wait(1).to({x:174.6},0).wait(1).to({x:193.5},0).wait(1).to({x:212.5},0).wait(1).to({x:231.5},0).wait(1).to({x:250.5},0).wait(1).to({x:269.4},0).wait(1).to({x:288.4,y:250.1},0).wait(1).to({rotation:-0.7,x:307.3,y:250},0).wait(1).to({x:326.3,y:250.1},0).wait(1).to({x:345.3},0).wait(1).to({x:364.3,y:250},0).wait(1).to({x:383.2,y:250.1},0).wait(1).to({x:402.2,y:250},0).wait(1).to({x:421.2},0).wait(1).to({x:440.2,y:250.1},0).wait(1).to({x:459.1,y:250},0).wait(1).to({x:478.1},0).wait(1).to({x:497.1,y:250.1},0).wait(1).to({x:516.1,y:250},0).wait(1).to({x:535},0).wait(1).to({x:554},0).wait(1).to({x:573},0).wait(1).to({x:592},0).wait(1).to({rotation:-0.8,x:610.9},0).wait(1).to({x:629.9},0).wait(1).to({x:648.9},0).wait(1).to({x:667.9},0).wait(1).to({x:686.8},0).wait(1).to({x:705.8},0).wait(1).to({x:724.7},0).wait(1).to({x:743.7},0).wait(1).to({x:762.7},0).wait(1).to({x:781.7,y:250.1},0).wait(1).to({x:800.6,y:250},0).wait(1).to({x:819.6,y:250.1},0).wait(1).to({x:838.6},0).wait(1).to({x:857.6,y:250},0).wait(1).to({x:876.5},0).wait(1).to({rotation:-0.9,x:895.5},0).wait(1).to({x:914.5},0).wait(1).to({x:933.4},0).wait(1).to({x:952.4},0).wait(1).to({x:971.4},0).wait(1).to({x:990.4},0).wait(1).to({x:1009.4},0).wait(1).to({x:1028.3},0).wait(1).to({x:1047.2},0).wait(1).to({x:1066.2},0).wait(1).to({x:1085.2},0).wait(1).to({x:1104.2},0).wait(1).to({x:1123.1},0).wait(1).to({x:1142.1},0).wait(1).to({x:1161.1},0).wait(1).to({x:1180.1},0).wait(1).to({rotation:-1,x:1199},0).wait(1).to({x:1218},0).wait(1).to({x:1237},0).wait(1).to({x:1256},0).wait(1).to({x:1275},0).wait(1).to({x:1294},0).wait(1).to({x:1312.9},0).wait(1).to({x:1331.9},0).wait(1).to({x:1350.8},0).wait(1).to({x:1369.8},0).wait(1).to({x:1388.8},0).wait(1).to({x:1407.8},0).wait(1).to({x:1426.7},0).wait(1).to({x:1445.7},0).wait(1).to({x:1464.7},0).wait(1).to({rotation:-1.1,x:1483.6},0).wait(1).to({x:1502.6},0).wait(1).to({x:1521.6},0).wait(1).to({x:1540.5},0).wait(1).to({x:1559.5},0).wait(1).to({x:1578.5},0).wait(1).to({x:1597.5},0).wait(1).to({x:1616.5},0).wait(1).to({x:1635.5},0).wait(1).to({x:1654.4},0).wait(1).to({x:1673.4},0).wait(1).to({x:1692.4},0).wait(1).to({x:1711.4},0).wait(1).to({x:1730.3},0).wait(1).to({x:1749.3},0).wait(1).to({x:1768.2},0).wait(1).to({rotation:-1.2,x:1787.2},0).wait(1).to({x:1806.2},0).wait(1).to({x:1825.2},0).wait(1).to({x:1844.1},0).wait(1).to({x:1863.2},0).wait(1).to({x:1882.1},0).wait(1).to({x:1901.1},0).wait(1).to({x:1920},0).wait(1).to({x:1939},0).wait(1).to({x:1958},0).wait(1).to({x:1977},0).wait(1).to({x:1995.9},0).wait(1).to({rotation:-1.1,x:1996,y:250.1},0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2029A0","#7D83F4"],[0.224,0.816],0,-250,0,250).s().p("EgFFAmxIhMgJQi9gdiyg4Qoqivm8m8Qmdmdi1n9Qgrh5gdh/QgKglgHglQgyj8AAkQQAAwKLdrdQLbrcQLAAQQLAALdLcQLcLdAAQKQAAGYhyFpQivIrm7G8QmeGcn8C1QmKCLnEAAQimAAifgTg");
	this.shape.setTransform(250,250.1);

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
		{src:"images/neptunspinningblur.png", id:"neptunspinningblur"}
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