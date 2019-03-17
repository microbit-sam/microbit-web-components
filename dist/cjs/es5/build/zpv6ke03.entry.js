"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitFirmware = function () { function e() { this.deviceInformation = void 0, this.disconnectedText = "Disconnected", this.noInfo = "No firmware version found"; } return e.prototype.render = function () { return this.deviceInformation ? this.deviceInformation.firmwareRevision || this.noInfo : this.disconnectedText; }, Object.defineProperty(e, "is", { get: function () { return "microbit-firmware"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { deviceInformation: { type: "Any", attr: "device-information" }, disconnectedText: { type: String, attr: "disconnected-text" }, el: { elementRef: !0 }, noInfo: { type: String, attr: "no-info" } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitFirmware = MicrobitFirmware;
chunk_3d8ed500_js_1.a.injectProps(MicrobitFirmware, ["deviceInformation"]);
