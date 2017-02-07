webpackJsonp([1],{

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var socket_service_1 = __webpack_require__(358);
var ColorPickerComponent = (function () {
    function ColorPickerComponent(socketEventsService) {
        this.socketEventsService = socketEventsService;
    }
    ColorPickerComponent.prototype.setColorRGB = function (color) {
        this.socketEventsService.setHexColors(color);
    };
    return ColorPickerComponent;
}());
ColorPickerComponent = __decorate([
    core_1.Component({
        selector: "th-color-picker",
        template: __webpack_require__(730),
        styles: [__webpack_require__(726)],
    }),
    __metadata("design:paramtypes", [socket_service_1.SocketEventsService])
], ColorPickerComponent);
exports.ColorPickerComponent = ColorPickerComponent;


/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "vl-home",
        template: __webpack_require__(731),
        styles: [__webpack_require__(727)],
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var socket_service_1 = __webpack_require__(358);
var LightsComponent = (function () {
    function LightsComponent(socketEventsService) {
        this.socketEventsService = socketEventsService;
        this.isTheLightOn = false;
    }
    LightsComponent.prototype.turnOnHalogenLight = function () {
        this.socketEventsService.turnOnHalogenLight();
    };
    LightsComponent.prototype.toggleRGB = function () {
        if (this.isTheLightOn) {
            this.socketEventsService.setHexColors("#000000");
        }
        else {
            this.socketEventsService.setHexColors("#F20FE3");
        }
        this.isTheLightOn = !this.isTheLightOn;
    };
    return LightsComponent;
}());
LightsComponent = __decorate([
    core_1.Component({
        moduleId: "lights",
        selector: "vl-lights",
        template: __webpack_require__(732),
        styles: [__webpack_require__(728)],
    }),
    __metadata("design:paramtypes", [socket_service_1.SocketEventsService])
], LightsComponent);
exports.LightsComponent = LightsComponent;


/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var PasswordGeneratorComponent = (function () {
    function PasswordGeneratorComponent() {
    }
    PasswordGeneratorComponent.prototype.ngOnInit = function () {
        this.passwordString = "";
    };
    PasswordGeneratorComponent.prototype.generatePassword = function () {
        this.passwordString = "";
        this.passwordString = Math.random().toString(36).substr(2, 10);
    };
    return PasswordGeneratorComponent;
}());
PasswordGeneratorComponent = __decorate([
    core_1.Component({
        selector: "vl-password-generator",
        template: __webpack_require__(733),
        styles: [__webpack_require__(729).toString()],
    }),
    __metadata("design:paramtypes", [])
], PasswordGeneratorComponent);
exports.PasswordGeneratorComponent = PasswordGeneratorComponent;


/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(io) {
var core_1 = __webpack_require__(0);
var SocketEventsService = (function () {
    function SocketEventsService() {
        this.socketIOConnection("http://localhost:3000");
    }
    SocketEventsService.prototype.setRGBColors = function (RGBColors) {
        this.socket.emit("setColors", { color: RGBColors });
    };
    SocketEventsService.prototype.setHexColors = function (hexColor) {
        this.socket.emit("setColors", { color: hexColor });
    };
    SocketEventsService.prototype.setIntensity = function (_intensity) {
        this.socket.emit("setIntensity", { intensity: _intensity });
    };
    SocketEventsService.prototype.rainbowEffect = function () {
        this.socket.emit("rainbowColors", { data: "" });
    };
    SocketEventsService.prototype.fadeEffect = function () {
        this.socket.emit("fadeColors", { data: "" });
    };
    SocketEventsService.prototype.turnOnHalogenLight = function () {
        this.socket.emit("relayToggle", { data: "" });
    };
    SocketEventsService.prototype.triggerCamera = function (timeOut) {
        var _this = this;
        this.socket.emit("triggerCamera", { stateTrigger: 1 });
        setTimeout(function () {
            _this.socket.emit("triggerCamera", { stateTrigger: 0 });
            _this.socket.emit("setColors", { color: "#000000" });
        }, timeOut);
    };
    SocketEventsService.prototype.startMotionSensor = function () {
        this.socket.emit("startMotionSensor", { data: "" });
    };
    SocketEventsService.prototype.endMotionSensor = function () {
        this.socket.emit("endMotionSensor", { data: "" });
    };
    SocketEventsService.prototype.turnOnMotionSensor = function () {
        this.socket.emit("turnOnMotionSensor", { data: "" });
    };
    SocketEventsService.prototype.turnOffMotionSensor = function () {
        this.socket.emit("turnOffMotionSensor", { data: "" });
    };
    SocketEventsService.prototype.socketIOConnection = function (server) {
        this.socket = io.connect(server);
        this.socket.on("connectionServer", function (data) {
            console.log(data.message);
        });
    };
    return SocketEventsService;
}());
SocketEventsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SocketEventsService);
exports.SocketEventsService = SocketEventsService;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(269)))

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(92);
var http_1 = __webpack_require__(267);
var app_component_1 = __webpack_require__(559);
var app_routes_1 = __webpack_require__(560);
var home_component_1 = __webpack_require__(355);
var shared_module_1 = __webpack_require__(561);
var password_generator_component_1 = __webpack_require__(357);
var color_picker_component_1 = __webpack_require__(354);
var lights_component_1 = __webpack_require__(356);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            shared_module_1.SharedModule,
            app_routes_1.AppRouting,
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            color_picker_component_1.ColorPickerComponent,
            lights_component_1.LightsComponent,
            password_generator_component_1.PasswordGeneratorComponent,
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;


/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "app-root",
        template: "\n        <div class=\"vl-content\">\n            <router-outlet></router-outlet>\n        </div>",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(268);
var home_component_1 = __webpack_require__(355);
var password_generator_component_1 = __webpack_require__(357);
var color_picker_component_1 = __webpack_require__(354);
var lights_component_1 = __webpack_require__(356);
var APP_ROUTES = [
    { path: "", component: home_component_1.HomeComponent, pathMatch: "full" },
    { path: "color-picker", component: color_picker_component_1.ColorPickerComponent },
    { path: "lights", component: lights_component_1.LightsComponent },
    { path: "password-generator", component: password_generator_component_1.PasswordGeneratorComponent },
];
exports.AppRouting = router_1.RouterModule.forRoot(APP_ROUTES);


/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(78);
var forms_1 = __webpack_require__(266);
var socket_service_1 = __webpack_require__(358);
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
        ],
        declarations: [],
        providers: [socket_service_1.SocketEventsService],
    }),
    __metadata("design:paramtypes", [])
], SharedModule);
exports.SharedModule = SharedModule;


/***/ },

/***/ 726:
/***/ function(module, exports) {

module.exports = "/*\r\n$bp-small : 24em;\r\n$bp-small-2 : 29.75em;\r\n$bp-small-3 : 39.8em;\r\n$bp-med : 46.8em;\r\n$bp-med-2 : 48em;\r\n$bp-large : 50em;\r\n$bp-large-2 : 54.5em;\r\n$bp-xl : 60em;\r\n$bp-xl-2 : 67em;\r\n*/\n.clear-padding {\n  padding: 0 !important; }\n\n.vl-color-picker-grid {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0; }\n  .vl-color-picker-grid .vl-color-item {\n    width: 20%;\n    height: 20%;\n    float: left;\n    display: inline-block;\n    color: #ffffff;\n    position: relative;\n    cursor: pointer;\n    -moz-transition: opacity 0.5s ease;\n    -o-transition: opacity 0.5s ease;\n    -webkit-transition: opacity 0.5s ease;\n    transition: opacity 0.5s ease; }\n    .vl-color-picker-grid .vl-color-item:hover, .vl-color-picker-grid .vl-color-item:focus, .vl-color-picker-grid .vl-color-item:active {\n      /* IE 8 */\n      -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=85)\";\n      /* IE 5-7 */\n      filter: alpha(opacity=85);\n      /* Netscape */\n      -moz-opacity: 0.85;\n      /* Safari 1.x */\n      -khtml-opacity: 0.85;\n      /* Good browsers */\n      opacity: 0.85 !important; }\n    .vl-color-picker-grid .vl-color-item.turquoise {\n      background: #1abc9c; }\n    .vl-color-picker-grid .vl-color-item.emerland {\n      background: #2ecc71; }\n    .vl-color-picker-grid .vl-color-item.peterriver {\n      background: #3498db; }\n    .vl-color-picker-grid .vl-color-item.amethyst {\n      background: #9b59b6; }\n    .vl-color-picker-grid .vl-color-item.wetasphalt {\n      background: #34495e; }\n    .vl-color-picker-grid .vl-color-item.greensea {\n      background: #16a085; }\n    .vl-color-picker-grid .vl-color-item.nephritis {\n      background: #27ae60; }\n    .vl-color-picker-grid .vl-color-item.belizehole {\n      background: #2980b9; }\n    .vl-color-picker-grid .vl-color-item.wisteria {\n      background: #8e44ad; }\n    .vl-color-picker-grid .vl-color-item.midnightblue {\n      background: #2c3e50; }\n    .vl-color-picker-grid .vl-color-item.sunflower {\n      background: #f1c40f; }\n    .vl-color-picker-grid .vl-color-item.carrot {\n      background: #e67e22; }\n    .vl-color-picker-grid .vl-color-item.alizarin {\n      background: #e74c3c; }\n    .vl-color-picker-grid .vl-color-item.clouds {\n      background: #ecf0f1; }\n    .vl-color-picker-grid .vl-color-item.concrete {\n      background: #95a5a6; }\n    .vl-color-picker-grid .vl-color-item.orange {\n      background: #f39c12; }\n    .vl-color-picker-grid .vl-color-item.pumpkin {\n      background: #d35400; }\n    .vl-color-picker-grid .vl-color-item.pomegranate {\n      background: #c0392b; }\n    .vl-color-picker-grid .vl-color-item.silver {\n      background: #bdc3c7; }\n    .vl-color-picker-grid .vl-color-item.asbestos {\n      background: #7f8c8d; }\n    .vl-color-picker-grid .vl-color-item.red {\n      background: #ff0000; }\n    .vl-color-picker-grid .vl-color-item.green {\n      background: #00ff00; }\n    .vl-color-picker-grid .vl-color-item.blue {\n      background: #0000ff; }\n    .vl-color-picker-grid .vl-color-item.purple {\n      background: #F20FE3; }\n    .vl-color-picker-grid .vl-color-item.aquamarine {\n      background: #0FC9F2; }\n"

/***/ },

/***/ 727:
/***/ function(module, exports) {

module.exports = "/*\r\n$bp-small : 24em;\r\n$bp-small-2 : 29.75em;\r\n$bp-small-3 : 39.8em;\r\n$bp-med : 46.8em;\r\n$bp-med-2 : 48em;\r\n$bp-large : 50em;\r\n$bp-large-2 : 54.5em;\r\n$bp-xl : 60em;\r\n$bp-xl-2 : 67em;\r\n*/\n.clear-padding {\n  padding: 0 !important; }\n\n.vl-home {\n  display: flex;\n  line-height: 1;\n  margin: 0;\n  overflow-x: hidden;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  font-size: calc(18px + 1vh); }\n\n.vl-menu {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n  .vl-menu li {\n    display: flex;\n    flex: 100%; }\n    .vl-menu li:nth-child(5n+1) a {\n      background-color: #4B6C96;\n      color: #d3dff1; }\n    .vl-menu li:nth-child(5n+2) a {\n      background-color: #DFDBC9;\n      color: #656048; }\n    .vl-menu li:nth-child(5n+3) a {\n      background-color: #9FC7CC;\n      color: #496063; }\n    .vl-menu li:nth-child(5n+4) a {\n      background-color: #9B8DAA;\n      color: #f2e5ff; }\n    .vl-menu li:nth-child(5n+5) a {\n      background-color: #D1535D;\n      color: #ffd9dc; }\n    .vl-menu li a {\n      align-items: center;\n      color: #fff;\n      display: flex;\n      justify-content: space-between;\n      padding: 1.25rem 1.5rem;\n      text-decoration: none;\n      touch-action: manipulation;\n      width: 100%;\n      transition: filter 0.25s cubic-bezier(1, 0, 0, 1);\n      -webkit-tap-highlight-color: transparent; }\n      .vl-menu li a:active {\n        filter: brightness(1.2); }\n      .vl-menu li a::after {\n        border: solid currentColor;\n        border-width: 0.125rem 0.125rem 0 0;\n        content: \"\";\n        height: 0.5rem;\n        transform: rotate(45deg);\n        width: 0.5rem; }\n"

/***/ },

/***/ 728:
/***/ function(module, exports) {

module.exports = "/*\r\n$bp-small : 24em;\r\n$bp-small-2 : 29.75em;\r\n$bp-small-3 : 39.8em;\r\n$bp-med : 46.8em;\r\n$bp-med-2 : 48em;\r\n$bp-large : 50em;\r\n$bp-large-2 : 54.5em;\r\n$bp-xl : 60em;\r\n$bp-xl-2 : 67em;\r\n*/\n.clear-padding {\n  padding: 0 !important; }\n\n.vl-lights-wrapper {\n  width: 100%;\n  height: 100%;\n  clear: both;\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background: #FF9900; }\n\n.vl-lights-c {\n  width: 100px;\n  height: 190px;\n  clear: both;\n  display: block;\n  margin: 25% auto; }\n  .vl-lights-c .vl-arcade-button {\n    width: 75px;\n    height: 75px;\n    clear: both;\n    display: block;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    background-clip: padding-box;\n    /* stops bg color from leaking outside the border: */\n    width: 75px;\n    height: 75px;\n    -moz-transition: all 35ms linea;\n    -o-transition: all 35ms linea;\n    -webkit-transition: all 35ms linea;\n    transition: all 35ms linea;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    margin-bottom: 15px; }\n    .vl-lights-c .vl-arcade-button .inner {\n      width: 75px;\n      height: 75px;\n      position: relative;\n      margin-top: -8px;\n      -moz-box-sizing: border-box;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      -moz-border-radius: 50%;\n      -webkit-border-radius: 50%;\n      border-radius: 50%;\n      -moz-transition: margin 35ms 35ms linear, box-shadow 35ms linear;\n      -o-transition: margin 35ms 35ms linear, box-shadow 35ms linear;\n      -webkit-transition: margin 35ms 35ms, box-shadow 35ms linear;\n      -webkit-transition-delay: linear, 0s;\n      transition: margin 35ms 35ms linear, box-shadow 35ms linear;\n      -ms-transition: margin 35ms 35ms linear, box-shadow 35ms linear; }\n    .vl-lights-c .vl-arcade-button.sea {\n      border: 5px solid #039BE5;\n      background-color: #0277BD; }\n      .vl-lights-c .vl-arcade-button.sea .inner {\n        background-color: #039BE5; }\n    .vl-lights-c .vl-arcade-button.red {\n      border: 5px solid #F44336;\n      background-color: #C62828; }\n      .vl-lights-c .vl-arcade-button.red .inner {\n        background-color: #F44336; }\n    .vl-lights-c .vl-arcade-button:active .inner {\n      margin-top: 0;\n      -moz-transition: margin 35ms linear, box-shadow 17.5ms 17.5ms linear;\n      -o-transition: margin 35ms linear, box-shadow 17.5ms 17.5ms linear;\n      -webkit-transition: margin 35ms linear, box-shadow 17.5ms 17.5ms;\n      -webkit-transition-delay: 0s, linear;\n      transition: margin 35ms linear, box-shadow 17.5ms 17.5ms linear;\n      -ms-transition: margin 35ms linear, box-shadow 17.5ms 17.5ms linear; }\n    .vl-lights-c .vl-arcade-button:active.sea .inner {\n      -moz-box-shadow: #0277BD 0 8px 0 inset;\n      -webkit-box-shadow: #0277BD 0 8px 0 inset;\n      box-shadow: #0277BD 0 8px 0 inset; }\n    .vl-lights-c .vl-arcade-button:active.red .inner {\n      -moz-box-shadow: #C62828 0 8px 0 inset;\n      -webkit-box-shadow: #C62828 0 8px 0 inset;\n      box-shadow: #C62828 0 8px 0 inset; }\n  .vl-lights-c .text {\n    position: absolute;\n    top: 26px;\n    left: 0;\n    right: 0;\n    text-align: center;\n    text-transform: uppercase;\n    font-family: Courier New;\n    font-size: 13px;\n    color: white;\n    font-weight: 300;\n    letter-spacing: 1px;\n    text-shadow: rgba(0, 0, 0, 0.5) 0 0 5px; }\n"

/***/ },

/***/ 729:
/***/ function(module, exports) {

module.exports = "/*\r\n$bp-small : 24em;\r\n$bp-small-2 : 29.75em;\r\n$bp-small-3 : 39.8em;\r\n$bp-med : 46.8em;\r\n$bp-med-2 : 48em;\r\n$bp-large : 50em;\r\n$bp-large-2 : 54.5em;\r\n$bp-xl : 60em;\r\n$bp-xl-2 : 67em;\r\n*/\n.clear-padding {\n  padding: 0 !important; }\n\n.vl-password-wrapper-c {\n  width: 100%;\n  height: 100%;\n  display: block;\n  background: #03A9F4;\n  position: fixed;\n  top: 0;\n  left: 0; }\n  .vl-password-wrapper-c .vl-pen {\n    width: auto;\n    height: 60px;\n    display: block;\n    position: absolute;\n    top: 20px;\n    right: auto;\n    bottom: auto;\n    left: 20px;\n    -webkit-border-radius: 3px;\n    border-radius: 3px;\n    background-clip: padding-box;\n    /* stops bg color from leaking outside the border: */\n    font-size: 14px;\n    font-size: 0.875rem;\n    -moz-transition: all 0.2s ease;\n    -o-transition: all 0.2s ease;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    text-indent: 70px;\n    color: #ffffff;\n    font-weight: bolder;\n    line-height: 35px;\n    overflow: hidden; }\n    .vl-password-wrapper-c .vl-pen:before {\n      position: absolute;\n      top: 0;\n      right: auto;\n      bottom: auto;\n      left: 0;\n      width: 60px;\n      height: 60px;\n      display: block;\n      -webkit-border-radius: 3px;\n      border-radius: 3px;\n      background-clip: padding-box;\n      /* stops bg color from leaking outside the border: */\n      -moz-transition: all 0.2s ease;\n      -o-transition: all 0.2s ease;\n      -webkit-transition: all 0.2s ease;\n      transition: all 0.2s ease;\n      font-family: 'FontAwesome';\n      content: '\\f023';\n      line-height: 60px;\n      text-indent: 0;\n      color: #03A9F4;\n      font-size: 250%;\n      text-align: center;\n      background: #ffffff; }\n  .vl-password-wrapper-c .vl-random-password {\n    width: 230px;\n    height: 50px;\n    clear: both;\n    display: block;\n    font-size: 14px;\n    font-size: 0.875rem;\n    background: #ffffff;\n    border: none;\n    border-radius: 5px;\n    outline: none;\n    line-height: 50px;\n    text-align: center;\n    color: #03A9F4;\n    position: fixed;\n    top: -webkit-calc( 50vh - 25px);\n    left: -webkit-calc( 50vw - 135px);\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.1);\n    -webkit-transition: transform 0.15s cubic-bezier(0.63, 0.15, 0.03, 1.32);\n    padding-right: 15px; }\n  .vl-password-wrapper-c .vl-reload-password {\n    width: 30px;\n    height: 30px;\n    border: 2px solid #66A5FF;\n    background: none;\n    border-radius: 100%;\n    outline: none;\n    line-height: 50px;\n    font-size: 30px;\n    font-weight: bolder;\n    text-align: center;\n    color: #66A5FF;\n    position: fixed;\n    top: -webkit-calc( 50vh - 15px);\n    left: -webkit-calc( 50vw + 65px);\n    z-index: 10;\n    cursor: pointer;\n    transition: background .1s ease; }\n    .vl-password-wrapper-c .vl-reload-password:hover {\n      background: rgba(81, 153, 255, 0.1); }\n    .vl-password-wrapper-c .vl-reload-password:active {\n      background: rgba(81, 153, 255, 0.2); }\n    .vl-password-wrapper-c .vl-reload-password:active ~ .vl-random-password {\n      transform: scale3d(1.05, 0.9, 1); }\n"

/***/ },

/***/ 730:
/***/ function(module, exports) {

module.exports = "<div class=\"vl-color-picker-grid animated fadeIn\">\r\n    <div (click)=\"setColorRGB('#ff0000')\" class=\"vl-color-item red\"></div>\r\n    <div (click)=\"setColorRGB('#00ff00')\" class=\"vl-color-item green\"></div>\r\n    <div (click)=\"setColorRGB('#0000ff')\" class=\"vl-color-item blue\"></div>\r\n    <div (click)=\"setColorRGB('#F20FE3')\" class=\"vl-color-item purple\"></div>\r\n    <div (click)=\"setColorRGB('#0FC9F2')\" class=\"vl-color-item aquamarine\"></div>\r\n    <div (click)=\"setColorRGB('#1abc9c')\" class=\"vl-color-item turquoise\"></div>\r\n    <div (click)=\"setColorRGB('#2ecc71')\" class=\"vl-color-item emerland\"></div>\r\n    <div (click)=\"setColorRGB('#3498db')\" class=\"vl-color-item peterriver\"></div>\r\n    <div (click)=\"setColorRGB('#9b59b6')\" class=\"vl-color-item amethyst\"></div>\r\n    <div (click)=\"setColorRGB('#34495e')\" class=\"vl-color-item wetasphalt\"></div>\r\n    <div (click)=\"setColorRGB('#16a085')\" class=\"vl-color-item greensea\"></div>\r\n    <div (click)=\"setColorRGB('#27ae60')\" class=\"vl-color-item nephritis\"></div>\r\n    <div (click)=\"setColorRGB('#2980b9')\" class=\"vl-color-item belizehole\"></div>\r\n    <div (click)=\"setColorRGB('#8e44ad')\" class=\"vl-color-item wisteria\"></div>\r\n    <div (click)=\"setColorRGB('#2c3e50')\" class=\"vl-color-item midnightblue\"></div>\r\n    <div (click)=\"setColorRGB('#f1c40f')\" class=\"vl-color-item sunflower\"></div>\r\n    <div (click)=\"setColorRGB('#e67e22')\" class=\"vl-color-item carrot\"></div>\r\n    <div (click)=\"setColorRGB('#e74c3c')\" class=\"vl-color-item alizarin\"></div>\r\n    <div (click)=\"setColorRGB('#ecf0f1')\" class=\"vl-color-item clouds\"></div>\r\n    <div (click)=\"setColorRGB('#95a5a6')\" class=\"vl-color-item concrete\"></div>\r\n    <div (click)=\"setColorRGB('#f39c12')\" class=\"vl-color-item orange\"></div>\r\n    <div (click)=\"setColorRGB('#d35400')\" class=\"vl-color-item pumpkin\"></div>\r\n    <div (click)=\"setColorRGB('#c0392b')\" class=\"vl-color-item pomegranate\"></div>\r\n    <div (click)=\"setColorRGB('#bdc3c7')\" class=\"vl-color-item silver\"></div>\r\n    <div (click)=\"setColorRGB('#7f8c8d')\" class=\"vl-color-item asbestos\"></div>\r\n</div>"

/***/ },

/***/ 731:
/***/ function(module, exports) {

module.exports = "<div class=\"vl-home animated fadeIn\">\r\n    <ul class=\"vl-menu\">\r\n        <li>\r\n            <a [routerLink]=\"'/password-generator'\">\r\n                <div class=\"vl-icons vl-lab-icon\">New Developments </div>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a [routerLink]=\"'/color-picker'\">\r\n                <div class=\"vl-icons vl-bars-icon\">Color picker</div>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a [routerLink]=\"'/lights'\">\r\n                <div class=\"vl-icons vl-bulb-icon\">Turn On/Off lights</div>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a [routerLink]=\"'/password-generator'\">\r\n                <div class=\"vl-icons vl-shield-icon\">Password Generator</div>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">\r\n                <div class=\"vl-icons vl-toilet-icon\">Test</div>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ },

/***/ 732:
/***/ function(module, exports) {

module.exports = "<div class=\"vl-lights-wrapper animated bounceInDown\">\r\n    <div class=\"vl-lights-c\">\r\n\r\n        <div class=\"vl-arcade-button sea\" (click)=\"turnOnHalogenLight()\">\r\n            <div class=\"inner\">\r\n                <span class=\"text\"><i class=\"fa fa-lightbulb-o fa-2x\" aria-hidden=\"true\"></i></span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"vl-arcade-button red\" (click)=\"toggleRGB()\"><div class=\"inner\"><span class=\"text\"><i class=\"fa fa-bars fa-2x\" aria-hidden=\"true\"></i></span></div></div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ },

/***/ 733:
/***/ function(module, exports) {

module.exports = "<div class=\"vl-password-wrapper-c animated bounceIn\">\r\n    <div class=\"vl-pen\">Random password generator</div>\r\n    <form name=\"vl-random-password-o\">\r\n        <input class=\"vl-reload-password\" type=\"button\" autofocus (click)=\"generatePassword()\"  >\r\n        <input class=\"vl-random-password\" type=\"text\" name=\"random_password\" [(ngModel)]=\"passwordString\" onclick=\"this.select();\" disabled>\r\n    </form>\r\n</div>\r\n"

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var platform_browser_dynamic_1 = __webpack_require__(172);
var environment_config_1 = __webpack_require__(93);
var app_module_1 = __webpack_require__(422);
if (environment_config_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
});


/***/ }

},[760]);
//# sourceMappingURL=main.map