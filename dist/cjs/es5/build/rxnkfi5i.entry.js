"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitCompass = function () { function e() { this.services = void 0, this.bearing = 0; } return e.prototype.watchHandler = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { var e, t, r = this; return tslib_1.__generator(this, function (i) { switch (i.label) {
    case 0: return this.services && this.services.magnetometerService ? (t = this, [4, (e = this.services.magnetometerService).getMagnetometerBearing()]) : [2];
    case 1: return t.bearing = i.sent(), [4, e.addEventListener("magnetometerbearingchanged", function (e) { return r.bearing = e.detail; })];
    case 2: return i.sent(), [2];
} }); }); }, e.prototype.render = function () { return microbit_core_js_1.h("span", { style: { position: "absolute", transform: "rotate(" + this.bearing + "deg)" } }, microbit_core_js_1.h("slot", null)); }, Object.defineProperty(e, "is", { get: function () { return "microbit-compass"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { bearing: { state: !0 }, el: { elementRef: !0 }, services: { type: "Any", attr: "services", watchCallbacks: ["watchHandler"] } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitCompass = MicrobitCompass;
chunk_3d8ed500_js_1.a.injectProps(MicrobitCompass, ["services"]);
