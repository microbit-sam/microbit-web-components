"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitTemperature = function () { function e() { this.services = void 0, this.temperaturePeriod = 100, this.disconnectedText = "Disconnected", this.noTemperature = "No temperature found", this.temperature = this.disconnectedText; } return e.prototype.watchHandler = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { var e, t, r = this; return tslib_1.__generator(this, function (i) { switch (i.label) {
    case 0: return this.services ? (e = this.services.temperatureService) ? [4, e.readTemperature()] : (this.temperature = this.noTemperature, [2]) : (this.temperature = this.disconnectedText, [2]);
    case 1: return t = i.sent(), this.temperature = t + "°c", [4, e.setTemperaturePeriod(this.temperaturePeriod)];
    case 2: return i.sent(), [4, e.addEventListener("temperaturechanged", function (e) { return r.temperature = e.detail + "°c"; })];
    case 3: return i.sent(), [2];
} }); }); }, e.prototype.render = function () { return this.temperature; }, Object.defineProperty(e, "is", { get: function () { return "microbit-temperature"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { disconnectedText: { type: String, attr: "disconnected-text" }, el: { elementRef: !0 }, noTemperature: { type: String, attr: "no-temperature" }, services: { type: "Any", attr: "services", watchCallbacks: ["watchHandler"] }, temperature: { state: !0 }, temperaturePeriod: { type: Number, attr: "temperature-period" } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitTemperature = MicrobitTemperature;
chunk_3d8ed500_js_1.a.injectProps(MicrobitTemperature, ["services"]);
