"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitCompass = function () { function e() { this.services = void 0, this.bearing = 0; } return e.prototype.watchHandler = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { var e = this; return tslib_1.__generator(this, function (t) { return this.services && this.services.magnetometerService ? (this.services.magnetometerService.addEventListener("magnetometerbearingchanged", function (t) { return e.bearing = t.detail; }), [2]) : [2]; }); }); }, e.prototype.render = function () { return microbit_core_js_1.h("span", { style: { position: "absolute", transform: "rotate(" + this.bearing + "deg)" } }, microbit_core_js_1.h("slot", null)); }, Object.defineProperty(e, "is", { get: function () { return "microbit-compass"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { bearing: { state: !0 }, el: { elementRef: !0 }, services: { type: "Any", attr: "services", watchCallbacks: ["watchHandler"] } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitCompass = MicrobitCompass;
chunk_3d8ed500_js_1.a.injectProps(MicrobitCompass, ["services"]);
