"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var chunk_3d8ed500_js_1 = require("./chunk-3d8ed500.js");
var MicrobitMatrix = function () { function t() { this.services = void 0, this.idTemplate = "microbit-matrix-${row}-${column}", this.offClass = "microbit-matrix-off", this.onClass = "microbit-matrix-on"; } return t.prototype.watchHandler = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { var t, e, i, r, s, n = this; return tslib_1.__generator(this, function (a) { switch (a.label) {
    case 0:
        for (t = [[], [], [], [], []], e = function (e) { for (var r = function (r) { var s = i.idTemplate.replace("${row}", e.toString()).replace("${column}", r.toString()), a = document.getElementById(s); a && (t[e][r] = a, a.onclick = function () { return n.toggle(e, r); }, a.classList.toggle(i.onClass, !1), a.classList.toggle(i.offClass, !1)); }, s = 0; s < 5; s++)
            r(s); }, i = this, r = 0; r < 5; r++)
            e(r);
        return this.elements = t, this.services && this.services.ledService ? (s = this, [4, this.services.ledService.getMatrixState()]) : [2];
    case 1: return s.matrix = a.sent(), [4, this.updateMatrix()];
    case 2: return a.sent(), [2];
} }); }); }, t.prototype.toggle = function (t, e) { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (i) { switch (i.label) {
    case 0: return this.matrix[t][e] = !this.matrix[t][e], [4, this.services.ledService.setMatrixState(this.matrix)];
    case 1: return i.sent(), this.updateMatrix(), [2];
} }); }); }, t.prototype.updateMatrix = function () { var t = this; this.matrix.forEach(function (e, i) { e.forEach(function (e, r) { var s = t.elements[i][r]; s && (s.classList.toggle(t.onClass, e), s.classList.toggle(t.offClass, !e)); }); }); }, Object.defineProperty(t, "is", { get: function () { return "microbit-matrix"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { el: { elementRef: !0 }, idTemplate: { type: String, attr: "id-template" }, offClass: { type: String, attr: "off-class" }, onClass: { type: String, attr: "on-class" }, services: { type: "Any", attr: "services", watchCallbacks: ["watchHandler"] } }; }, enumerable: !0, configurable: !0 }), t; }();
exports.MicrobitMatrix = MicrobitMatrix;
chunk_3d8ed500_js_1.a.injectProps(MicrobitMatrix, ["services"]);
