"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitStateMovement = function () { function e() { this.services = void 0, this.sensitivity = 1, this.frequency = 20, this.stillClass = "microbit-still", this.movedClass = "microbit-moved", this.className = this.stillClass; } return e.prototype.watchHandler = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { var e, t, s = this; return tslib_1.__generator(this, function (i) { switch (i.label) {
    case 0: return this.services && this.services.accelerometerService ? [4, (e = this.services.accelerometerService).setAccelerometerPeriod(this.frequency)] : (this.className = this.stillClass, [2]);
    case 1: return i.sent(), [4, e.readAccelerometerData()];
    case 2: return t = i.sent(), this.setClassName(t), e.addEventListener("accelerometerdatachanged", function (e) { return s.setClassName(e.detail); }), [2];
} }); }); }, e.prototype.render = function () { return microbit_core_js_1.h("span", { class: this.className }, microbit_core_js_1.h("slot", null)); }, e.prototype.setClassName = function (e) { console.log(this.sensitivity), this.className = Math.abs(e.x) > this.sensitivity || Math.abs(e.y) > this.sensitivity || Math.abs(e.z) > this.sensitivity ? this.movedClass : this.stillClass; }, Object.defineProperty(e, "is", { get: function () { return "microbit-state-movement"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { className: { state: !0 }, el: { elementRef: !0 }, frequency: { type: Number, attr: "frequency" }, movedClass: { type: String, attr: "moved-class" }, sensitivity: { type: Number, attr: "sensitivity" }, services: { type: "Any", attr: "services", watchCallbacks: ["watchHandler"] }, stillClass: { type: String, attr: "still-class" } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitStateMovement = MicrobitStateMovement;
chunk_3d8ed500_js_1.a.injectProps(MicrobitStateMovement, ["services"]);
