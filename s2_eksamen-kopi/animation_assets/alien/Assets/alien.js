(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"alien_atlas_", frames: [[1370,0,390,479],[0,0,1368,171]]}
];


// symbols:



(lib.alien_1 = function() {
	this.spriteSheet = ss["alien_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["alien_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiNDCQhLg7gMhfQgLhdA6hMQA7hLBfgLQBegMBKA6IABABQBLA6ALBfQAMBdg7BMQgPAUgTAQQgKgVgRgRQgngng3AAQg2AAgnAnQgcAdgHAlQgUgKgTgOg");
	this.shape.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-23,46.1,43.7);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQARAAAQACQBIAKA2A2IAHAIQA7A/AABXQAABdhCBCQg2A2hIAKQgQACgRAAQhcAAhChCg");
	this.shape.setTransform(-3.2,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-25,45,45);


(lib.alienai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.alien_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-240,390,479);


// stage content:
(lib.alien = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// iris
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(126.3,330.6,0.39,0.39,-7,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:116.7,y:328.7},23).to({x:131.7,y:322.3},20).to({x:125.9,y:330.9},19).wait(10).to({startPosition:0},0).to({y:325.5},10).to({x:126.2,y:330.9},9).wait(29));

	// øje
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9DeQgrgMglgcQhLg7gMhfQgLhdA6hMQA7hLBfgLQBegMBKA6IABABQBLA6ALBfQAMBdg7BMQg6BLhfAMQgPABgNAAQggAAgdgIg");
	this.shape.setTransform(125,330.7);

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(125,330.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_1}]},72).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},9).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).to({y:325.8},10).to({y:330.6},9).wait(29));

	// alien
	this.instance_2 = new lib.alienai("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(138.6,440.1,0.39,0.39,-7,0,0,195.2,239.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// baggrund
	this.instance_3 = new lib.Bitmap3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,329);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(684,494.9,1368,255.2);
// library properties:
lib.properties = {
	id: 'F2A4B94D17F9469A9BF19C5BFC965076',
	width: 1368,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/alien_atlas_.png", id:"alien_atlas_"}
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
an.compositions['F2A4B94D17F9469A9BF19C5BFC965076'] = {
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