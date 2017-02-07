'use strict';

const Vlinker = require("./vlinker/vlinker.js");
const http = require('http');
const url = require("url");
const path = require("path");
const fs = require("fs")
const io = require('socket.io')(3000);
const bs = require("browser-sync").create();
const fallback = require('connect-history-api-fallback');
const log = require('connect-logger');

class VServer { 
	constructor() {
		this.server = null;
		this.socket = null;
		this.initServer();
		this.initEvents();
	}

	initServer() {
        bs.init({
            injectChanges: false, // workaround for Angular 2 styleUrls loading
            files: ['./**/*.{html,htm,css,js}'],
            watchOptions: {
                ignored: 'node_modules'
            },
            server: {
                baseDir: './www',
                middleware: [
                    log({ format: '%date %status %method %url' }),
                    fallback({
                        index: '/index.html',
                        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
                    })
                ]
            },
            socket: {
                domain: 'localhost:3001'
            }
        });
	}


	initEvents() {
		//this.nodeEvents();
		this.socketIOEvents();
	}

	socketIOEvents() {
		let listener = io.on('connection', (socket) => {
			this.socket = socket;
		    this.socketConectionEvent();
		    this.socketSetColorEvent();
		    this.socketRainbowEvent();
		    this.socketFadeEvent();
			this.socketSetLigthIntensityEvent();
            this.socketRelayEvent();
		});
	}

	socketConectionEvent() {
		this.socket.emit('connectionServer', {'message': 'Successfully connection'});
	}

	socketSetColorEvent() {
			this.socket.on('setColors', (RGBcolors) => {
			  Vlinker.clearIntervals();
			  Vlinker.setLigthColor(RGBcolors.color);
			//Vlinker.setLCDMessage(`R:${RGBcolors.red},G:${RGBcolors.green},B:${RGBcolors.blue} `);
			});
	}

	socketSetLigthIntensityEvent() {
			this.socket.on('setIntensity', (data) => {
				Vlinker.clearIntervals();
				Vlinker.setLigthIntensity(data.intensity);
			});
	}

	socketRainbowEvent() {
			this.socket.on('rainbowColors', (data) => {
			  Vlinker.rainbowEfect();
			});
	}

	socketFadeEvent() {
			this.socket.on('fadeColors', (data) => {
			  	Vlinker.fadeEffect(100,2000);
			});
	}
	
	socketTriggercameraEvent() {
			this.socket.on('triggerCamera', (data) => {
				Vlinker.triggerCamera(data.stateTrigger);
			});
	}

	socketStartMotionSensorEvent() {
		this.socket.on('startMotionSensor', (data) => {
			Vlinker.restartMotionSensor();
		});
	}

	socketEndMotionSensorEvent() {
		this.socket.on('endMotionSensor', (data) => {
			Vlinker.endMotionSensor();
		});
	}

    socketRelayEvent() {
       this.socket.on("relayToggle", (data) => {
           Vlinker.relayToggle();
       })
    }

	socketTurnOnMotionSensorEvent() {
		this.socket.on('turnOnMotionSensor', (data) => {
			Vlinker.turnOnMotionSensor();
		});
	}

	socketTurnOffMotionSensorEvent() {
		this.socket.on('turnOffMotionSensor', (data) => {
			Vlinker.turnOffMotionSensor();
		});
	}

}

new VServer();



