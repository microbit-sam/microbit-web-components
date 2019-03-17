"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var microbit_core_js_1 = require("../microbit.core.js");
function o(e, t) { for (var n, r, o = null, i = !1, u = !1, c = arguments.length; c-- > 2;)
    T.push(arguments[c]); for (; T.length > 0;) {
    var a = T.pop();
    if (a && void 0 !== a.pop)
        for (c = a.length; c--;)
            T.push(a[c]);
    else
        "boolean" == typeof a && (a = null), (u = "function" != typeof e) && (null == a ? a = "" : "number" == typeof a ? a = String(a) : "string" != typeof a && (u = !1)), u && i ? o[o.length - 1].vtext += a : null === o ? o = [u ? { vtext: a } : a] : o.push(u ? { vtext: a } : a), i = u;
} if (null != t) {
    if (t.className && (t.class = t.className), "object" == typeof t.class) {
        for (c in t.class)
            t.class[c] && T.push(c);
        t.class = T.join(" "), T.length = 0;
    }
    null != t.key && (n = t.key), null != t.name && (r = t.name);
} return "function" == typeof e ? e(t, o || [], P) : { vtag: e, vchildren: o, vtext: void 0, vattrs: t, vkey: n, vname: r, f: void 0, c: !1 }; }
function u(e) { return { vtag: e.vtag, vchildren: e.vchildren, vtext: e.vtext, vattrs: e.vattrs, vkey: e.vkey, vname: e.vname }; }
Object.setPrototypeOf || Array;
var T = [], P = { forEach: function (e, t) { e.forEach(function (e, n, r) { return t(u(e), n, r); }); }, map: function (e, t) { return e.map(function (e, n, r) { return function (e) { return { vtag: e.vtag, vchildren: e.vchildren, vtext: e.vtext, vattrs: e.vattrs, vkey: e.vkey, vname: e.vname }; }(t(u(e), n, r)); }); } }, __rest = function (e, t) { var n = {}; for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
} return n; };
function defaultConsumerRender(e, t) { return o("context-consumer", { subscribe: e, renderer: t }); }
function createProviderConsumer(e, t) { void 0 === t && (t = defaultConsumerRender); var n = new Map, r = e; function i(e, t) { Array.isArray(e) ? e.slice().forEach(function (e) { t[e] = r[e]; }) : t[e] = Object.assign({}, r), t.forceUpdate(); } function u(e) { return function (t) { n.has(t) || (n.set(t, e), i(e, t)); }; } function c(e, t) { return u(t)(e), function () { n.delete(e); }; } return { Provider: function (e, t) { return r = e.state, n.forEach(i), t; }, Consumer: function (e, n) { return t(c, n[0]); }, wrapConsumer: function (e, t) { var n = e.is; return function (e) { var r = e.children, i = __rest(e, ["children"]); return o(n, Object.assign({ ref: u(t) }, i), r); }; }, injectProps: function (e, t) { var n = null, r = Object.keys(e.properties).find(function (t) { return 1 == e.properties[t].elementRef; }); if (null == r)
        throw new Error("Please ensure that your Component " + e.is + ' has an attribtue with "@Element" decorator. This is required to be able to inject properties.'); var o = e.prototype.componentWillLoad; e.prototype.componentWillLoad = function () { if (n = c(this[r], t), o)
        return o.bind(this)(); }; var i = e.prototype.componentDidUnload; e.prototype.componentDidUnload = function () { if (n(), i)
        return i.bind(this)(); }; } }; }
var DeviceTunnel = createProviderConsumer({ device: void 0, services: void 0 }, function (e, t) { return microbit_core_js_1.h("context-consumer", { subscribe: e, renderer: t }); });
exports.a = DeviceTunnel;
