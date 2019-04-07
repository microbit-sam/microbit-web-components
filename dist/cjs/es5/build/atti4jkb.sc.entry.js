"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitCalibrate = function () { function e() { this.services = void 0, this.calibrateLabel = "Calibrate", this.disabled = !0; } return e.prototype.watchHandler = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (e) { return this.disabled = !this.services || !this.services.magnetometerService, [2]; }); }); }, e.prototype.render = function () { var e = this; return microbit_core_js_1.h("button", { disabled: this.disabled, onClick: function () { return e.calibrate(); } }, this.calibrateLabel); }, e.prototype.calibrate = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (e) { return [2]; }); }); }, Object.defineProperty(e, "is", { get: function () { return "microbit-calibrate"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { calibrateLabel: { type: String, attr: "calibrate-label" }, disabled: { state: !0 }, el: { elementRef: !0 }, services: { type: "Any", attr: "services", watchCallbacks: ["watchHandler"] } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitCalibrate = MicrobitCalibrate;
chunk_3d8ed500_js_1.a.injectProps(MicrobitCalibrate, ["services"]);
