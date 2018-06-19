'use strict';

const  five = require("johnny-five");
const temporal = require("temporal");
const minimist =  require('minimist');

class Vlinker {

	constructor() {
		this._led = null;
		this._lcd = null;
    	this._relay = null;
		this._board = null;
		this._interval = null;
		this._motionSensor = null;
		this._isVlinkerReady = false;
		this._fadeTemporal = null;
		this.startMinimist();
	}

	startMinimist() {
		this.arguments = minimist(process.argv.slice(2));
		if (this.arguments.h) {
			this.printMinimistHelp();
		} else {
			console.log("Type -h for help");
			this.startBoard();
		}
	}

	startBoard() {
		this._board = new five.Board();
		this._board.on("ready", () => { 
			this.initializeComponents();
			this._isVlinkerReady = true;
		});
	}

	printMinimistHelp() {
		console.log("*********************************************");
		console.log("*** HELP                                  ***");
		console.log("*** -l led light (boolean ej: -l true)    ***");
		console.log("*** -c catode light (boolean ej: -c true) ***");
		console.log("*** -r rgb color (exa ej: -r '#ffffff)'   ***");
		console.log("*** -h help                               ***");
		console.log("*********************************************");
	}

	initializeComponents() {
		if (this.arguments.l) {
			this.startLedRGB();
		}
		
		if (this.arguments.c) {
			this.startRelay();
		}

		// this.startCameraTrigger();
		// this.startMotionSensor();
		// this.startLCDController();
	}

	startLedRGB() {
		this._led = new five.Led.RGB({
		 	pins: { red: 10, green: 11, blue: 3 },
		 	isAnode: false,
		 	board: this._board
		});

		if (this.arguments.r) {
			this.setLigthColor(this.arguments.r)
		} else {
			this.setLigthColor("#F20FE3")
		}
	}

	startLCDController() {
		// Parallel LCD
		this._lcd = new five.LCD({
			pins: [8, 9, 4, 5, 6, 7],
			rows: 2,
			cols: 16,
		});
	}

    startRelay() {
        this._relay = new five.Relay(5);
        this._relay.toggle();
    }

    relayToggle() {
        console.log("llego a toogle");
        this._relay.toggle();
    }

	startMotionSensor() {
		this._motionSensor = new five.Motion(7);

		this._motionSensor.on("calibrated", () => {
			console.log("Motion sensor calibrated");
		});

		this.turnOnMotionSensor();

		this._motionSensor.on("change", () => {
			console.log("MOTION CHANGE");
		});
	}

	restartMotionSensor() {
		console.log("Sensor on")
		this._motionSensor.on("motionend", () => {
			console.log("motion end");
			this._led.intensity(0);
			console.log("Motion end on sensor on")
		});
	}

	endMotionSensor() {
		console.log("Sensor off")
		this._motionSensor.on("motionend", () => {
			console.log("motion end");
			this._led.intensity(100);
			console.log("Motion end on sensor off")
		});
	}

	turnOffMotionSensor() {
		this._motionSensor.on("motionstart", () => {
			console.log("motionstart");
			this._led.intensity(0);
		});

		this._motionSensor.on("motionend", () => {
			this._led.intensity(0);
		});
	}

	turnOnMotionSensor() {
		this._motionSensor.on("motionstart", () => {
			console.log("motionstart");
			this._led.intensity(100);
		});

		this._motionSensor.on("motionend", () => {
			console.log("motion end");
			this._led.intensity(0);
		});
	}

	startCameraTrigger() {
		this._board.pinMode(5, this._board.MODES.OUTPUT);
	}

	triggerCamera(stateTrigger) {
		if(this.isVlinkerReady) {
			this._board.digitalWrite(5,stateTrigger);
		}
	}

	turnLigthOn() { 
		if(this.isVlinkerReady) {
			this.clearIntervals();
			this._isTheLigthOn = true;
			this._led.color("#00FF00");
		}
	}

	turnLigthOff() {
		if(this.isVlinkerReady) {
			this.clearIntervals();
			this._led.color("#000000");
			this._isTheLigthOn = false;
		}
	}

	setLigthColor(color) {
		if(this.isVlinkerReady) {
			this.clearIntervals();
			this._led.color(color);
		}
	}

	setLigthIntensity(intensity) {
		if(this.isVlinkerReady) {
			this._led.intensity(intensity);
		}
	}

	isVlinkerReady() {
		return this._isVlinkerReady;
	}

	setLCDMessage(message) {
		if(this.isVlinkerReady) {
			this._lcd.clear();
			this._lcd.print(message);
		}
	}

	rainbowEfect() {
		if(this.isVlinkerReady) {
			let iterator = 0,
			colorArray = ["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#8F00FF"]
			this.clearIntervals();
			this._interval = setInterval(() => {
				this._led.color(colorArray[iterator]);
				++iterator
				iterator = (iterator === colorArray.length) ? 0 :  iterator;
			}, 300);
		}
	}

	fadeEffect(loopTime, loopWait) {
		let ledIntensity = 100;
		let isDecreasing =  true;
		this.clearIntervals();

		this._fadeTemporal = temporal.loop(loopTime, () => {
		  if(ledIntensity > 0 && isDecreasing) {
		  	--ledIntensity;
		  } else {	isDecreasing = false; }

		  if(ledIntensity <= 100 && !isDecreasing ) {
		  	++ledIntensity;
		  } else { isDecreasing = true; }

		  this._led.intensity(ledIntensity);
		});
	}

	clearIntervals() {
		clearInterval(this._interval);
		if(this._fadeTemporal !==null ) {
			this._fadeTemporal.stop();
			this._fadeTemporal = null;
		}
	}
} 


module.exports = new Vlinker();
