"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitStateButtonB = function () { function e() { this.services = void 0, this.releaseClass = "microbit-release", this.shortPressClass = "microbit-short-press", this.longPressClass = "microbit-long-press", this.className = this.releaseClass; } return e.prototype.watchHandler = function () { var e = this; this.services && this.services.buttonService ? this.services.buttonService.addEventListener("buttonbstatechanged", function (s) { e.className = 1 === s.detail ? e.shortPressClass : 2 === s.detail ? e.longPressClass : e.releaseClass; }) : this.className = this.releaseClass; }, e.prototype.render = function () { return microbit_core_js_1.h("span", { class: this.className }, microbit_core_js_1.h("slot", null)); }, Object.defineProperty(e, "is", { get: function () { return "microbit-state-button-b"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { className: { state: !0 }, el: { elementRef: !0 }, longPressClass: { type: String, attr: "long-press-class" }, releaseClass: { type: String, attr: "release-class" }, services: { type: "Any", attr: "services", watchCallbacks: ["watchHandler"] }, shortPressClass: { type: String, attr: "short-press-class" } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitStateButtonB = MicrobitStateButtonB;
chunk_3d8ed500_js_1.a.injectProps(MicrobitStateButtonB, ["services"]);
