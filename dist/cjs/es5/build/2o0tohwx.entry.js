"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitMatrix = function () { function t() { this.services = void 0, this.idTemplate = "microbit-matrix-${row}-${column}", this.offClass = "microbit-matrix-off", this.onClass = "microbit-matrix-on"; } return t.prototype.watchHandler = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { var t, e, i, r, s = this; return tslib_1.__generator(this, function (n) { switch (n.label) {
    case 0:
        for (t = [[], [], [], [], []], e = function (e) { for (var r = function (r) { var n = i.idTemplate.replace("${row}", e.toString()).replace("${column}", r.toString()), o = document.getElementById(n); o && (t[e][r] = o, o.onclick = function () { return s.toggle(e, r); }, o.classList.toggle(i.onClass, !1), o.classList.toggle(i.offClass, !1)); }, n = 0; n < 5; n++)
            r(n); }, i = this, r = 0; r < 5; r++)
            e(r);
        return this.elements = t, this.services && this.services.ledService ? [4, this.updateMatrix()] : [2];
    case 1: return n.sent(), [2];
} }); }); }, t.prototype.render = function () { return microbit_core_js_1.h("div", null); }, t.prototype.toggle = function (t, e) { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (i) { switch (i.label) {
    case 0: return this.matrix[t][e] = !this.matrix[t][e], [4, this.services.ledService.setMatrixState(this.matrix)];
    case 1: return i.sent(), [4, this.updateMatrix()];
    case 2: return i.sent(), [2];
} }); }); }, t.prototype.updateMatrix = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { var t, e = this; return tslib_1.__generator(this, function (i) { switch (i.label) {
    case 0: return t = this, [4, this.services.ledService.getMatrixState()];
    case 1: return t.matrix = i.sent(), this.matrix.forEach(function (t, i) { t.forEach(function (t, r) { var s = e.elements[i][r]; s && (s.classList.toggle(e.onClass, t), s.classList.toggle(e.offClass, !t)); }); }), [2];
} }); }); }, Object.defineProperty(t, "is", { get: function () { return "microbit-matrix"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { el: { elementRef: !0 }, idTemplate: { type: String, attr: "id-template" }, offClass: { type: String, attr: "off-class" }, onClass: { type: String, attr: "on-class" }, services: { type: "Any", attr: "services", watchCallbacks: ["watchHandler"] } }; }, enumerable: !0, configurable: !0 }), t; }();
exports.MicrobitMatrix = MicrobitMatrix;
chunk_3d8ed500_js_1.a.injectProps(MicrobitMatrix, ["services"]);
