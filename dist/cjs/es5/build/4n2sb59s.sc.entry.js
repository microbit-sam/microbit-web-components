"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_d2120d7f_js_1 = require("./chunk-d2120d7f.js");
var MicrobitStatus = function () { function e() { this.device = void 0, this.connectedText = "Connected to ${device}", this.disconnectedText = "Disconnected"; } return e.prototype.render = function () { return microbit_core_js_1.h("div", null, this.getText()); }, e.prototype.getText = function () { return this.device ? this.connectedText.replace("${device}", this.device.name) : this.disconnectedText; }, Object.defineProperty(e, "is", { get: function () { return "microbit-status"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { connectedText: { type: String, attr: "connected-text" }, device: { type: "Any", attr: "device" }, disconnectedText: { type: String, attr: "disconnected-text" }, el: { elementRef: !0 } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitStatus = MicrobitStatus;
chunk_d2120d7f_js_1.a.injectProps(MicrobitStatus, ["device", "setDevice"]);
