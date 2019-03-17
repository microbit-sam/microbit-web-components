"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitName = function () { function e() { this.device = void 0, this.disconnectedText = "Disconnected"; } return e.prototype.render = function () { return microbit_core_js_1.h("div", null, this.getText()); }, e.prototype.getText = function () { return this.device ? this.device.name : this.disconnectedText; }, Object.defineProperty(e, "is", { get: function () { return "microbit-name"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { device: { type: "Any", attr: "device" }, disconnectedText: { type: String, attr: "disconnected-text" }, el: { elementRef: !0 } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitName = MicrobitName;
chunk_3d8ed500_js_1.a.injectProps(MicrobitName, ["device"]);
