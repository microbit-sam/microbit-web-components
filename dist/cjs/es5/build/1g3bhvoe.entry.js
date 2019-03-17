"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_d2120d7f_js_1 = require("./chunk-d2120d7f.js");
var MicrobitApp = function () { function e() { var e = this; this.device = void 0, this.services = void 0, this.setDevice = function (i) { e.device = i; }, this.setServices = function (i) { e.services = i; }; } return e.prototype.render = function () { return microbit_core_js_1.h(chunk_d2120d7f_js_1.a.Provider, { state: { device: this.device, services: this.services, setDevice: this.setDevice, setServices: this.setServices } }, microbit_core_js_1.h("slot", null)); }, Object.defineProperty(e, "is", { get: function () { return "microbit-app"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { device: { state: !0 }, services: { state: !0 } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitApp = MicrobitApp;
