"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitText = function () { function e() { this.services = void 0, this.buttonText = "Write", this.scrollDelay = 100, this.disabled = !0, this.text = ""; } return e.prototype.watchHandler = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (e) { switch (e.label) {
    case 0: return this.disabled = !this.services || !this.services.ledService, this.services && this.services.ledService ? [4, this.services.ledService.setScrollingDelay(this.scrollDelay)] : [3, 2];
    case 1: e.sent(), e.label = 2;
    case 2: return [2];
} }); }); }, e.prototype.render = function () { var e = this; return microbit_core_js_1.h("form", { onSubmit: function (t) { return e.handleSubmit(t); } }, microbit_core_js_1.h("input", { type: "input", disabled: this.disabled, maxLength: 20, onChange: function (t) { return e.handleChange(t); } }), microbit_core_js_1.h("input", { type: "submit", disabled: this.disabled, value: this.buttonText })); }, e.prototype.handleChange = function (e) { this.text = e.target.value; }, e.prototype.handleSubmit = function (e) { e.preventDefault(), this.services.ledService.writeText(this.text); }, Object.defineProperty(e, "is", { get: function () { return "microbit-text"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { buttonText: { type: String, attr: "button-text" }, disabled: { state: !0 }, el: { elementRef: !0 }, scrollDelay: { type: Number, attr: "scroll-delay" }, services: { type: "Any", attr: "services", watchCallbacks: ["watchHandler"] } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitText = MicrobitText;
chunk_3d8ed500_js_1.a.injectProps(MicrobitText, ["services"]);
