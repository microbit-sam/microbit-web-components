"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitStateConnection = function () { function e() { this.device = void 0, this.connectedClass = "microbit-connected", this.disconnectedClass = "microbit-disconnected"; } return e.prototype.render = function () { return microbit_core_js_1.h("span", { class: this.device ? this.connectedClass : this.disconnectedClass }, microbit_core_js_1.h("slot", null)); }, Object.defineProperty(e, "is", { get: function () { return "microbit-state-connection"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { connectedClass: { type: String, attr: "connected-class" }, device: { type: "Any", attr: "device" }, disconnectedClass: { type: String, attr: "disconnected-class" }, el: { elementRef: !0 } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitStateConnection = MicrobitStateConnection;
chunk_3d8ed500_js_1.a.injectProps(MicrobitStateConnection, ["device"]);
