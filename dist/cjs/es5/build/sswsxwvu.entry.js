"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_d2120d7f_js_1 = require("./chunk-d2120d7f.js");
var MicrobitFirmware = function () { function e() { this.disconnectedText = "Disconnected", this.noInfo = "No firmware info found", this.services = void 0, this.info = this.disconnectedText; } return e.prototype.watchHandler = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { var e, i; return tslib_1.__generator(this, function (t) { switch (t.label) {
    case 0: return this.services ? (e = this.services.deviceInformationService) ? [4, e.readDeviceInformation()] : (this.info = this.noInfo, [2]) : (this.info = this.disconnectedText, [2]);
    case 1: return i = t.sent(), this.info = i.firmwareRevision || this.noInfo, [2];
} }); }); }, e.prototype.render = function () { return microbit_core_js_1.h("div", null, this.info); }, Object.defineProperty(e, "is", { get: function () { return "microbit-firmware"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { disconnectedText: { type: String, attr: "disconnected-text" }, el: { elementRef: !0 }, info: { state: !0 }, noInfo: { type: String, attr: "no-info" }, services: { type: "Any", attr: "services", watchCallbacks: ["watchHandler"] } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitFirmware = MicrobitFirmware;
chunk_d2120d7f_js_1.a.injectProps(MicrobitFirmware, ["services"]);
