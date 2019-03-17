"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitText = function () { function e() { this.services = void 0, this.buttonLabel = "", this.scrollDelay = 100, this.disabled = !0, this.text = ""; } return e.prototype.watchHandler = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (e) { switch (e.label) {
    case 0: return this.disabled = !this.services || !this.services.ledService, this.services && this.services.ledService ? [4, this.services.ledService.setScrollingDelay(this.scrollDelay)] : [3, 2];
    case 1: e.sent(), e.label = 2;
    case 2: return [2];
} }); }); }, e.prototype.render = function () { var e, t = this; return this.buttonLabel && (e = microbit_core_js_1.h("input", { type: "submit", disabled: this.disabled, value: this.buttonLabel, onClick: function () { return t.writeText(); } })), microbit_core_js_1.h("span", null, microbit_core_js_1.h("input", { type: "input", disabled: this.disabled, maxLength: 20, onKeyPress: function (e) { return t.handleKeyPress(e); } }), e); }, e.prototype.handleKeyPress = function (e) { 13 == e.keyCode ? this.writeText() : this.text = e.target.value; }, e.prototype.writeText = function () { this.services.ledService.writeText(this.text); }, Object.defineProperty(e, "is", { get: function () { return "microbit-text"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { buttonLabel: { type: String, attr: "button-label" }, disabled: { state: !0 }, el: { elementRef: !0 }, scrollDelay: { type: Number, attr: "scroll-delay" }, services: { type: "Any", attr: "services", watchCallbacks: ["watchHandler"] } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitText = MicrobitText;
chunk_3d8ed500_js_1.a.injectProps(MicrobitText, ["services"]);
