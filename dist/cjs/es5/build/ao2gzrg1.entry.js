"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitStateButtonB = function () { function s() { this.services = void 0, this.releaseClass = "microbit-release", this.shortPressClass = "microbit-short-press", this.longPressClass = "microbit-long-press", this.className = this.releaseClass; } return s.prototype.watchHandler = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { var s, e, t = this; return tslib_1.__generator(this, function (r) { switch (r.label) {
    case 0: return this.services && this.services.buttonService ? [4, (s = this.services.buttonService).readButtonBState()] : (this.className = this.releaseClass, [2]);
    case 1: return e = r.sent(), this.setClassName(e), s.addEventListener("buttonbstatechanged", function (s) { return t.setClassName(s.detail); }), [2];
} }); }); }, s.prototype.render = function () { return microbit_core_js_1.h("span", { class: this.className }, microbit_core_js_1.h("slot", null)); }, s.prototype.setClassName = function (s) { this.className = 1 === s ? this.shortPressClass : 2 === s ? this.longPressClass : this.releaseClass; }, Object.defineProperty(s, "is", { get: function () { return "microbit-state-button-b"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(s, "properties", { get: function () { return { className: { state: !0 }, el: { elementRef: !0 }, longPressClass: { type: String, attr: "long-press-class" }, releaseClass: { type: String, attr: "release-class" }, services: { type: "Any", attr: "services", watchCallbacks: ["watchHandler"] }, shortPressClass: { type: String, attr: "short-press-class" } }; }, enumerable: !0, configurable: !0 }), s; }();
exports.MicrobitStateButtonB = MicrobitStateButtonB;
chunk_3d8ed500_js_1.a.injectProps(MicrobitStateButtonB, ["services"]);
