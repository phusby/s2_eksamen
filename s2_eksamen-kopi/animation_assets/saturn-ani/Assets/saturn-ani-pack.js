(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"saturn_ani_pack_atlas_", frames: [[0,490,500,500],[502,490,500,274],[0,0,700,488]]}
];


// symbols:



(lib.ring = function() {
	this.spriteSheet = ss["saturn_ani_pack_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ring2 = function() {
	this.spriteSheet = ss["saturn_ani_pack_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.stribe = function() {
	this.spriteSheet = ss["saturn_ani_pack_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

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
	this.instance = new lib.stribe();
	this.instance.parent = this;
	this.instance.setTransform(367.6,54.4,1,1,-4.5);

	this.instance_1 = new lib.stribe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,59.9,1,1,-4.5);

	this.instance_2 = new lib.stribe();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1148.4,59.7,1,1,-4.5);

	this.instance_3 = new lib.stribe();
	this.instance_3.parent = this;
	this.instance_3.setTransform(780.7,65.3,1,1,-4.5);

	this.instance_4 = new lib.stribe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1550,54.4,1,1,-4.5);

	this.instance_5 = new lib.stribe();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1182.4,59.9,1,1,-4.5);

	this.instance_6 = new lib.stribe();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2330.8,59.7,1,1,-4.5);

	this.instance_7 = new lib.stribe();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1963.1,65.3,1,1,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,3066.6,551.9), null);


// stage content:
(lib.saturnani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ring2
	this.instance = new lib.ring2();
	this.instance.parent = this;
	this.instance.setTransform(10,95,1.26,1.131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(192));

	// back (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7hbiQrarZAAwJQAApLDsnqQC0lyE6k7QLarZQHAAQQIAALaLZQEOEOCpE3QEjITAAKKQAAQJraLZQraLawIAAQwHAArarag");
	mask.setTransform(325,250);

	// stribe
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-647.9,250,1,1,0,0,0,1533.3,275.9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-638.3},0).wait(1).to({x:-628.8},0).wait(1).to({x:-619.3,y:250.1},0).wait(1).to({x:-609.8},0).wait(1).to({x:-600.2},0).wait(1).to({x:-590.7},0).wait(1).to({x:-581.2},0).wait(1).to({x:-571.7},0).wait(1).to({x:-562.2,y:250.2},0).wait(1).to({x:-552.6},0).wait(1).to({x:-543.1},0).wait(1).to({x:-533.6},0).wait(1).to({x:-524.1},0).wait(1).to({x:-514.6},0).wait(1).to({x:-505,y:250.3},0).wait(1).to({x:-495.5},0).wait(1).to({x:-486},0).wait(1).to({x:-476.5},0).wait(1).to({x:-466.9},0).wait(1).to({x:-457.4},0).wait(1).to({x:-447.9,y:250.4},0).wait(1).to({x:-438.4},0).wait(1).to({x:-428.9},0).wait(1).to({x:-419.3},0).wait(1).to({x:-409.8},0).wait(1).to({x:-400.3},0).wait(1).to({x:-390.8,y:250.5},0).wait(1).to({x:-381.3},0).wait(1).to({x:-371.7},0).wait(1).to({x:-362.2},0).wait(1).to({x:-352.7},0).wait(1).to({x:-343.2},0).wait(1).to({x:-333.6,y:250.6},0).wait(1).to({x:-324.1},0).wait(1).to({x:-314.6},0).wait(1).to({x:-305.1},0).wait(1).to({x:-295.5},0).wait(1).to({x:-286},0).wait(1).to({x:-276.5,y:250.7},0).wait(1).to({x:-267},0).wait(1).to({x:-257.5},0).wait(1).to({x:-247.9},0).wait(1).to({x:-238.4},0).wait(1).to({x:-228.9},0).wait(1).to({x:-219.4,y:250.8},0).wait(1).to({x:-209.9},0).wait(1).to({x:-200.3},0).wait(1).to({x:-190.8},0).wait(1).to({x:-181.3},0).wait(1).to({x:-171.8},0).wait(1).to({x:-162.2,y:250.9},0).wait(1).to({x:-152.7},0).wait(1).to({x:-143.2},0).wait(1).to({x:-133.7},0).wait(1).to({x:-124.2},0).wait(1).to({x:-114.6},0).wait(1).to({x:-105.1,y:251},0).wait(1).to({x:-95.6},0).wait(1).to({x:-86.1},0).wait(1).to({x:-76.5},0).wait(1).to({x:-67},0).wait(1).to({x:-57.5},0).wait(1).to({x:-48,y:251.1},0).wait(1).to({x:-38.5},0).wait(1).to({x:-28.9},0).wait(1).to({x:-19.4},0).wait(1).to({x:-9.9},0).wait(1).to({x:-0.4},0).wait(1).to({x:9.1,y:251.2},0).wait(1).to({x:18.7},0).wait(1).to({x:28.2},0).wait(1).to({x:37.7},0).wait(1).to({x:47.2},0).wait(1).to({x:56.8},0).wait(1).to({x:66.3,y:251.3},0).wait(1).to({x:75.8},0).wait(1).to({x:85.3},0).wait(1).to({x:94.8},0).wait(1).to({x:104.4},0).wait(1).to({x:113.9},0).wait(1).to({x:123.4,y:251.4},0).wait(1).to({x:132.9},0).wait(1).to({x:142.5},0).wait(1).to({x:152},0).wait(1).to({x:161.5},0).wait(1).to({x:171},0).wait(1).to({x:180.5,y:251.5},0).wait(1).to({x:190.1},0).wait(1).to({x:199.6},0).wait(1).to({x:209.1},0).wait(1).to({x:218.6},0).wait(1).to({x:228.1},0).wait(1).to({x:237.7,y:251.6},0).wait(1).to({x:247.2},0).wait(1).to({x:256.7},0).wait(1).to({x:266.2},0).wait(1).to({x:275.8},0).wait(1).to({x:285.3},0).wait(1).to({x:294.8,y:251.7},0).wait(1).to({x:304.3},0).wait(1).to({x:313.8},0).wait(1).to({x:323.4},0).wait(1).to({x:332.9},0).wait(1).to({x:342.4},0).wait(1).to({x:351.9,y:251.8},0).wait(1).to({x:361.5},0).wait(1).to({x:371},0).wait(1).to({x:380.5},0).wait(1).to({x:390},0).wait(1).to({x:399.5},0).wait(1).to({x:409.1,y:251.9},0).wait(1).to({x:418.6},0).wait(1).to({x:428.1},0).wait(1).to({x:437.6},0).wait(1).to({x:447.1},0).wait(1).to({x:456.7},0).wait(1).to({x:466.2,y:252},0).wait(1).to({x:475.7},0).wait(1).to({x:485.2},0).wait(1).to({x:494.8},0).wait(1).to({x:504.3},0).wait(1).to({x:513.8},0).wait(1).to({x:523.3,y:252.1},0).wait(1).to({x:532.8},0).wait(1).to({x:542.4},0).wait(1).to({x:551.9},0).wait(1).to({x:561.4},0).wait(1).to({x:570.9},0).wait(1).to({x:580.5,y:252.2},0).wait(1).to({x:590},0).wait(1).to({x:599.5},0).wait(1).to({x:609},0).wait(1).to({x:618.5},0).wait(1).to({x:628.1},0).wait(1).to({x:637.6,y:252.3},0).wait(1).to({x:647.1},0).wait(1).to({x:656.6},0).wait(1).to({x:666.1},0).wait(1).to({x:675.7},0).wait(1).to({x:685.2},0).wait(1).to({x:694.7,y:252.4},0).wait(1).to({x:704.2},0).wait(1).to({x:713.8},0).wait(1).to({x:723.3},0).wait(1).to({x:732.8},0).wait(1).to({x:742.3},0).wait(1).to({x:751.8,y:252.5},0).wait(1).to({x:761.4},0).wait(1).to({x:770.9},0).wait(1).to({x:780.4},0).wait(1).to({x:789.9},0).wait(1).to({x:799.5},0).wait(1).to({x:809,y:252.6},0).wait(1).to({x:818.5},0).wait(1).to({x:828},0).wait(1).to({x:837.5},0).wait(1).to({x:847.1},0).wait(1).to({x:856.6},0).wait(1).to({x:866.1,y:252.7},0).wait(1).to({x:875.6},0).wait(1).to({x:885.1},0).wait(1).to({x:894.7},0).wait(1).to({x:904.2},0).wait(1).to({x:913.7},0).wait(1).to({x:923.2,y:252.8},0).wait(1).to({x:932.8},0).wait(1).to({x:942.3},0).wait(1).to({x:951.8},0).wait(1).to({x:961.3},0).wait(1).to({x:970.8},0).wait(1).to({x:980.4,y:252.9},0).wait(1).to({x:989.9},0).wait(1).to({x:999.4},0).wait(1).to({x:1008.9},0).wait(1).to({x:1018.5},0).wait(1).to({x:1028},0).wait(1).to({x:1037.5,y:253},0).wait(1).to({x:1047},0).wait(1).to({x:1056.5},0).wait(1).to({x:1066.1},0).wait(1).to({x:1075.6},0).wait(1).to({x:1085.1},0).wait(1).to({x:1094.6,y:253.1},0).wait(1).to({x:1104.1},0).wait(1).to({x:1113.7},0).wait(1).to({x:1123.2},0).wait(1).to({x:1132.7},0).wait(1).to({x:1142.2},0).wait(1).to({x:1151.8,y:253.2},0).wait(1).to({x:1161.3},0).wait(1).to({x:1170.8},0).wait(1));

	// upper back
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C9974C","#FDD089"],[0.224,0.816],0,-150.4,0,348).s().p("A6wVfQsLiPAAj0QAApMDsnpQC0lyE6k7QLarZQHAAQQIAALaLZQEOEOCpE3QEjISAAKLQAAD0sKCPQq+CBv0AAQvzAAq9iBg");
	this.shape.setTransform(325,151.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(192));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C9974C","#FDD089"],[0.224,0.816],0,-249.2,0,249.2).s().p("A7hbiQrarZAAwJQAApLDsnqQC0lyE6k7QLarZQHAAQQIAALaLZQEOEOCpE3QEjITAAKKQAAQJraLZQraLawIAAQwHAArarag");
	this.shape_1.setTransform(325,250);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(192));

	// ring
	this.instance_2 = new lib.ring();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7,-40,1.272,1.16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(332,210,635.9,579.9);
// library properties:
lib.properties = {
	id: '0F49EA571C9A4CEAB5FEFC520B0E9979',
	width: 650,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/saturn_ani_pack_atlas_.png", id:"saturn_ani_pack_atlas_"}
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