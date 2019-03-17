"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitHardware = function () { function e() { this.deviceInformation = void 0, this.disconnectedText = "Disconnected", this.noInfo = "No hardware version found"; } return e.prototype.render = function () { return this.deviceInformation ? this.deviceInformation.hardwareRevision || this.noInfo : this.disconnectedText; }, Object.defineProperty(e, "is", { get: function () { return "microbit-hardware"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { deviceInformation: { type: "Any", attr: "device-information" }, disconnectedText: { type: String, attr: "disconnected-text" }, el: { elementRef: !0 }, noInfo: { type: String, attr: "no-info" } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitHardware = MicrobitHardware;
chunk_3d8ed500_js_1.a.injectProps(MicrobitHardware, ["deviceInformation"]);
