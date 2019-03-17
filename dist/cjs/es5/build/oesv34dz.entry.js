"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var microbit_core_js_1 = require("../microbit.core.js");
var chunk_d2120d7f_js_1 = require("./chunk-d2120d7f.js");
var commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function unwrapExports(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
function createCommonjsModule(e, t) { return e(t = { exports: {} }, t.exports), t.exports; }
var deviceInformation = createCommonjsModule(function (e, t) { var n, r = commonjsGlobal && commonjsGlobal.__awaiter || function (e, t, n, r) { return new (n || (n = Promise))(function (i, a) { function o(e) { try {
    s(r.next(e));
}
catch (e) {
    a(e);
} } function c(e) { try {
    s(r.throw(e));
}
catch (e) {
    a(e);
} } function s(e) { e.done ? i(e.value) : new n(function (t) { t(e.value); }).then(o, c); } s((r = r.apply(e, t || [])).next()); }); }, i = commonjsGlobal && commonjsGlobal.__generator || function (e, t) { var n, r, i, a, o = { label: 0, sent: function () { if (1 & i[0])
        throw i[1]; return i[1]; }, trys: [], ops: [] }; return a = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this; }), a; function c(a) { return function (c) { return function (a) { if (n)
    throw new TypeError("Generator is already executing."); for (; o;)
    try {
        if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)
            return i;
        switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
            case 0:
            case 1:
                i = a;
                break;
            case 4: return o.label++, { value: a[1], done: !1 };
            case 5:
                o.label++, r = a[1], a = [0];
                continue;
            case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;
            default:
                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                    o = 0;
                    continue;
                }
                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    o.label = a[1];
                    break;
                }
                if (6 === a[0] && o.label < i[1]) {
                    o.label = i[1], i = a;
                    break;
                }
                if (i && o.label < i[2]) {
                    o.label = i[2], o.ops.push(a);
                    break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
        }
        a = t.call(e, o);
    }
    catch (e) {
        a = [6, e], r = 0;
    }
    finally {
        n = i = 0;
    } if (5 & a[0])
    throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; }([a, c]); }; } }; Object.defineProperty(t, "__esModule", { value: !0 }), t.DeviceInformationUuid = "0000180a-0000-1000-8000-00805f9b34fb", function (e) { e.modelNumber = "00002a24-0000-1000-8000-00805f9b34fb", e.serialNumber = "00002a25-0000-1000-8000-00805f9b34fb", e.firmwareRevision = "00002a26-0000-1000-8000-00805f9b34fb", e.hardwareRevision = "00002a27-0000-1000-8000-00805f9b34fb", e.manufacturer = "00002a29-0000-1000-8000-00805f9b34fb"; }(n = t.DeviceInformationCharacteristic || (t.DeviceInformationCharacteristic = {})); var a = function () { function e(e) { this.service = e; } return e.createService = function (n) { var r = n.find(function (e) { return e.uuid === t.DeviceInformationUuid; }); if (r)
    return new e(r); }, e.prototype.readDeviceInformation = function () { return r(this, void 0, void 0, function () { var e, t, r, a, o, c, s, u, l, f, h, d; return i(this, function (i) { switch (i.label) {
    case 0: return [4, this.service.getCharacteristics()];
    case 1: return e = i.sent(), t = {}, (r = e.find(function (e) { return e.uuid === n.modelNumber; })) ? (a = t, [4, this.readStringCharacteristic(r)]) : [3, 3];
    case 2: a.modelNumber = i.sent(), i.label = 3;
    case 3: return (o = e.find(function (e) { return e.uuid === n.serialNumber; })) ? (c = t, [4, this.readStringCharacteristic(o)]) : [3, 5];
    case 4: c.serialNumber = i.sent(), i.label = 5;
    case 5: return (s = e.find(function (e) { return e.uuid === n.firmwareRevision; })) ? (u = t, [4, this.readStringCharacteristic(s)]) : [3, 7];
    case 6: u.firmwareRevision = i.sent(), i.label = 7;
    case 7: return (l = e.find(function (e) { return e.uuid === n.hardwareRevision; })) ? (f = t, [4, this.readStringCharacteristic(l)]) : [3, 9];
    case 8: f.hardwareRevision = i.sent(), i.label = 9;
    case 9: return (h = e.find(function (e) { return e.uuid === n.manufacturer; })) ? (d = t, [4, this.readStringCharacteristic(h)]) : [3, 11];
    case 10: d.manufacturer = i.sent(), i.label = 11;
    case 11: return [2, t];
} }); }); }, e.prototype.readStringCharacteristic = function (e) { return r(this, void 0, void 0, function () { var t, n; return i(this, function (r) { switch (r.label) {
    case 0: return [4, e.readValue()];
    case 1: return t = r.sent(), n = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength), [2, String.fromCharCode.apply(null, Array.from(new Uint8Array(n)))];
} }); }); }, e; }(); t.DeviceInformationService = a; });
unwrapExports(deviceInformation);
var domain, deviceInformation_1 = deviceInformation.DeviceInformationUuid, deviceInformation_2 = deviceInformation.DeviceInformationCharacteristic, deviceInformation_3 = deviceInformation.DeviceInformationService;
function EventHandlers() { }
function EventEmitter() { EventEmitter.init.call(this); }
function $getMaxListeners(e) { return void 0 === e._maxListeners ? EventEmitter.defaultMaxListeners : e._maxListeners; }
function emitNone(e, t, n) { if (t)
    e.call(n);
else
    for (var r = e.length, i = arrayClone(e, r), a = 0; a < r; ++a)
        i[a].call(n); }
function emitOne(e, t, n, r) { if (t)
    e.call(n, r);
else
    for (var i = e.length, a = arrayClone(e, i), o = 0; o < i; ++o)
        a[o].call(n, r); }
function emitTwo(e, t, n, r, i) { if (t)
    e.call(n, r, i);
else
    for (var a = e.length, o = arrayClone(e, a), c = 0; c < a; ++c)
        o[c].call(n, r, i); }
function emitThree(e, t, n, r, i, a) { if (t)
    e.call(n, r, i, a);
else
    for (var o = e.length, c = arrayClone(e, o), s = 0; s < o; ++s)
        c[s].call(n, r, i, a); }
function emitMany(e, t, n, r) { if (t)
    e.apply(n, r);
else
    for (var i = e.length, a = arrayClone(e, i), o = 0; o < i; ++o)
        a[o].apply(n, r); }
function _addListener(e, t, n, r) { var i, a, o; if ("function" != typeof n)
    throw new TypeError('"listener" argument must be a function'); if ((a = e._events) ? (a.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), a = e._events), o = a[t]) : (a = e._events = new EventHandlers, e._eventsCount = 0), o) {
    if ("function" == typeof o ? o = a[t] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), !o.warned && (i = $getMaxListeners(e)) && i > 0 && o.length > i) {
        o.warned = !0;
        var c = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
        c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = o.length, emitWarning(c);
    }
}
else
    o = a[t] = n, ++e._eventsCount; return e; }
function emitWarning(e) { "function" == typeof console.warn ? console.warn(e) : console.log(e); }
function _onceWrap(e, t, n) { var r = !1; function i() { e.removeListener(t, i), r || (r = !0, n.apply(e, arguments)); } return i.listener = n, i; }
function listenerCount(e) { var t = this._events; if (t) {
    var n = t[e];
    if ("function" == typeof n)
        return 1;
    if (n)
        return n.length;
} return 0; }
function spliceOne(e, t) { for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1)
    e[n] = e[r]; e.pop(); }
function arrayClone(e, t) { for (var n = new Array(t); t--;)
    n[t] = e[t]; return n; }
function unwrapListeners(e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n]; return t; }
EventHandlers.prototype = Object.create(null), EventEmitter.EventEmitter = EventEmitter, EventEmitter.usingDomains = !1, EventEmitter.prototype.domain = void 0, EventEmitter.prototype._events = void 0, EventEmitter.prototype._maxListeners = void 0, EventEmitter.defaultMaxListeners = 10, EventEmitter.init = function () { this.domain = null, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new EventHandlers, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0; }, EventEmitter.prototype.setMaxListeners = function (e) { if ("number" != typeof e || e < 0 || isNaN(e))
    throw new TypeError('"n" argument must be a positive number'); return this._maxListeners = e, this; }, EventEmitter.prototype.getMaxListeners = function () { return $getMaxListeners(this); }, EventEmitter.prototype.emit = function (e) { var t, n, r, i, a, o, c, s = "error" === e; if (o = this._events)
    s = s && null == o.error;
else if (!s)
    return !1; if (c = this.domain, s) {
    if (t = arguments[1], !c) {
        if (t instanceof Error)
            throw t;
        var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
        throw u.context = t, u;
    }
    return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = c, t.domainThrown = !1, c.emit("error", t), !1;
} if (!(n = o[e]))
    return !1; var l = "function" == typeof n; switch (r = arguments.length) {
    case 1:
        emitNone(n, l, this);
        break;
    case 2:
        emitOne(n, l, this, arguments[1]);
        break;
    case 3:
        emitTwo(n, l, this, arguments[1], arguments[2]);
        break;
    case 4:
        emitThree(n, l, this, arguments[1], arguments[2], arguments[3]);
        break;
    default:
        for (i = new Array(r - 1), a = 1; a < r; a++)
            i[a - 1] = arguments[a];
        emitMany(n, l, this, i);
} return !0; }, EventEmitter.prototype.addListener = function (e, t) { return _addListener(this, e, t, !1); }, EventEmitter.prototype.on = EventEmitter.prototype.addListener, EventEmitter.prototype.prependListener = function (e, t) { return _addListener(this, e, t, !0); }, EventEmitter.prototype.once = function (e, t) { if ("function" != typeof t)
    throw new TypeError('"listener" argument must be a function'); return this.on(e, _onceWrap(this, e, t)), this; }, EventEmitter.prototype.prependOnceListener = function (e, t) { if ("function" != typeof t)
    throw new TypeError('"listener" argument must be a function'); return this.prependListener(e, _onceWrap(this, e, t)), this; }, EventEmitter.prototype.removeListener = function (e, t) { var n, r, i, a, o; if ("function" != typeof t)
    throw new TypeError('"listener" argument must be a function'); if (!(r = this._events))
    return this; if (!(n = r[e]))
    return this; if (n === t || n.listener && n.listener === t)
    0 == --this._eventsCount ? this._events = new EventHandlers : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
else if ("function" != typeof n) {
    for (i = -1, a = n.length; a-- > 0;)
        if (n[a] === t || n[a].listener && n[a].listener === t) {
            o = n[a].listener, i = a;
            break;
        }
    if (i < 0)
        return this;
    if (1 === n.length) {
        if (n[0] = void 0, 0 == --this._eventsCount)
            return this._events = new EventHandlers, this;
        delete r[e];
    }
    else
        spliceOne(n, i);
    r.removeListener && this.emit("removeListener", e, o || t);
} return this; }, EventEmitter.prototype.removeAllListeners = function (e) { var t, n; if (!(n = this._events))
    return this; if (!n.removeListener)
    return 0 === arguments.length ? (this._events = new EventHandlers, this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = new EventHandlers : delete n[e]), this; if (0 === arguments.length) {
    for (var r, i = Object.keys(n), a = 0; a < i.length; ++a)
        "removeListener" !== (r = i[a]) && this.removeAllListeners(r);
    return this.removeAllListeners("removeListener"), this._events = new EventHandlers, this._eventsCount = 0, this;
} if ("function" == typeof (t = n[e]))
    this.removeListener(e, t);
else if (t)
    do {
        this.removeListener(e, t[t.length - 1]);
    } while (t[0]); return this; }, EventEmitter.prototype.listeners = function (e) { var t, n = this._events; return n && (t = n[e]) ? "function" == typeof t ? [t.listener || t] : unwrapListeners(t) : []; }, EventEmitter.listenerCount = function (e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : listenerCount.call(e, t); }, EventEmitter.prototype.listenerCount = listenerCount, EventEmitter.prototype.eventNames = function () { return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []; };
var eventDispatcher = createCommonjsModule(function (e, t) { var n, r = commonjsGlobal && commonjsGlobal.__extends || (n = function (e, t) { return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]); })(e, t); }, function (e, t) { function r() { this.constructor = e; } n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r); }); Object.defineProperty(t, "__esModule", { value: !0 }); var i = function (e) { function t() { var t = null !== e && e.apply(this, arguments) || this; return t.isEventListenerObject = function (e) { return void 0 !== e.handleEvent; }, t; } return r(t, e), t.prototype.addEventListener = function (t, n) { if (n) {
    var r = this.isEventListenerObject(n) ? n.handleEvent : n;
    e.prototype.addListener.call(this, t, r);
} }, t.prototype.removeEventListener = function (t, n) { if (n) {
    var r = this.isEventListenerObject(n) ? n.handleEvent : n;
    e.prototype.removeListener.call(this, t, r);
} }, t.prototype.dispatchEvent = function (t, n) { var r; return r = "string" == typeof t ? new CustomEvent(t, { detail: n }) : t, e.prototype.emit.call(this, r.type, r); }, t; }(EventEmitter.EventEmitter); t.EventDispatcher = i; });
unwrapExports(eventDispatcher);
var eventDispatcher_1 = eventDispatcher.EventDispatcher, button = createCommonjsModule(function (e, t) { var n, r, i = commonjsGlobal && commonjsGlobal.__extends || (n = function (e, t) { return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]); })(e, t); }, function (e, t) { function r() { this.constructor = e; } n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r); }), a = commonjsGlobal && commonjsGlobal.__awaiter || function (e, t, n, r) { return new (n || (n = Promise))(function (i, a) { function o(e) { try {
    s(r.next(e));
}
catch (e) {
    a(e);
} } function c(e) { try {
    s(r.throw(e));
}
catch (e) {
    a(e);
} } function s(e) { e.done ? i(e.value) : new n(function (t) { t(e.value); }).then(o, c); } s((r = r.apply(e, t || [])).next()); }); }, o = commonjsGlobal && commonjsGlobal.__generator || function (e, t) { var n, r, i, a, o = { label: 0, sent: function () { if (1 & i[0])
        throw i[1]; return i[1]; }, trys: [], ops: [] }; return a = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this; }), a; function c(a) { return function (c) { return function (a) { if (n)
    throw new TypeError("Generator is already executing."); for (; o;)
    try {
        if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)
            return i;
        switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
            case 0:
            case 1:
                i = a;
                break;
            case 4: return o.label++, { value: a[1], done: !1 };
            case 5:
                o.label++, r = a[1], a = [0];
                continue;
            case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;
            default:
                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                    o = 0;
                    continue;
                }
                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    o.label = a[1];
                    break;
                }
                if (6 === a[0] && o.label < i[1]) {
                    o.label = i[1], i = a;
                    break;
                }
                if (i && o.label < i[2]) {
                    o.label = i[2], o.ops.push(a);
                    break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
        }
        a = t.call(e, o);
    }
    catch (e) {
        a = [6, e], r = 0;
    }
    finally {
        n = i = 0;
    } if (5 & a[0])
    throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; }([a, c]); }; } }; Object.defineProperty(t, "__esModule", { value: !0 }), t.ButtonUuid = "e95d9882-251d-470a-a062-fa1922dfa9a8", function (e) { e.buttonAState = "e95dda90-251d-470a-a062-fa1922dfa9a8", e.buttonBState = "e95dda91-251d-470a-a062-fa1922dfa9a8"; }(r = t.ButtonCharacteristic || (t.ButtonCharacteristic = {})), function (e) { e[e.Release = 0] = "Release", e[e.ShortPress = 1] = "ShortPress", e[e.LongPress = 2] = "LongPress"; }(t.ButtonState || (t.ButtonState = {})); var c = function (e) { function n(t) { var n = e.call(this) || this; return n.service = t, n.on("newListener", n.onNewListener.bind(n)), n.on("removeListener", n.onRemoveListener.bind(n)), n; } return i(n, e), n.createService = function (e) { var r = e.find(function (e) { return e.uuid === t.ButtonUuid; }); if (r)
    return new n(r); }, n.prototype.readButtonAState = function () { return a(this, void 0, void 0, function () { return o(this, function (e) { switch (e.label) {
    case 0: return [4, this.getCharacteristValue(r.buttonAState)];
    case 1: return [2, e.sent().getUint8(0)];
} }); }); }, n.prototype.readButtonBState = function () { return a(this, void 0, void 0, function () { return o(this, function (e) { switch (e.label) {
    case 0: return [4, this.getCharacteristValue(r.buttonBState)];
    case 1: return [2, e.sent().getUint8(0)];
} }); }); }, n.prototype.getCharacteristValue = function (e) { return a(this, void 0, void 0, function () { return o(this, function (t) { switch (t.label) {
    case 0: return [4, this.service];
    case 1: return [4, t.sent().getCharacteristic(e)];
    case 2: return [4, t.sent().readValue()];
    case 3: return [2, t.sent()];
} }); }); }, n.prototype.onNewListener = function (e) { return a(this, void 0, void 0, function () { var t; return o(this, function (n) { switch (n.label) {
    case 0: return this.listenerCount(e) > 0 ? [2] : "buttonastatechanged" !== e ? [3, 4] : [4, this.service];
    case 1: return [4, n.sent().getCharacteristic(r.buttonAState)];
    case 2: return (t = n.sent()).addEventListener("characteristicvaluechanged", this.buttonAStateChangedHandler.bind(this)), [4, t.startNotifications()];
    case 3: n.sent(), n.label = 4;
    case 4: return "buttonbstatechanged" !== e ? [3, 8] : [4, this.service];
    case 5: return [4, n.sent().getCharacteristic(r.buttonBState)];
    case 6: return (t = n.sent()).addEventListener("characteristicvaluechanged", this.buttonBStateChangedHandler.bind(this)), [4, t.startNotifications()];
    case 7: n.sent(), n.label = 8;
    case 8: return [2];
} }); }); }, n.prototype.onRemoveListener = function (e) { return a(this, void 0, void 0, function () { var t; return o(this, function (n) { switch (n.label) {
    case 0: return this.listenerCount(e) > 0 ? [2] : "buttonastatechanged" !== e ? [3, 4] : [4, this.service];
    case 1: return [4, n.sent().getCharacteristic(r.buttonAState)];
    case 2: return (t = n.sent()).removeEventListener("characteristicvaluechanged", this.buttonAStateChangedHandler.bind(this)), [4, t.stopNotifications()];
    case 3: n.sent(), n.label = 4;
    case 4: return "buttonbstatechanged" !== e ? [3, 8] : [4, this.service];
    case 5: return [4, n.sent().getCharacteristic(r.buttonBState)];
    case 6: return (t = n.sent()).removeEventListener("characteristicvaluechanged", this.buttonBStateChangedHandler.bind(this)), [4, t.stopNotifications()];
    case 7: n.sent(), n.label = 8;
    case 8: return [2];
} }); }); }, n.prototype.buttonAStateChangedHandler = function (e) { this.dispatchEvent("buttonastatechanged", e.target.value.getUint8(0)); }, n.prototype.buttonBStateChangedHandler = function (e) { this.dispatchEvent("buttonbstatechanged", e.target.value.getUint8(0)); }, n; }(eventDispatcher.EventDispatcher); t.ButtonService = c; });
unwrapExports(button);
var button_1 = button.ButtonUuid, button_2 = button.ButtonCharacteristic, button_3 = button.ButtonState, button_4 = button.ButtonService, led = createCommonjsModule(function (e, t) { var n, r = commonjsGlobal && commonjsGlobal.__awaiter || function (e, t, n, r) { return new (n || (n = Promise))(function (i, a) { function o(e) { try {
    s(r.next(e));
}
catch (e) {
    a(e);
} } function c(e) { try {
    s(r.throw(e));
}
catch (e) {
    a(e);
} } function s(e) { e.done ? i(e.value) : new n(function (t) { t(e.value); }).then(o, c); } s((r = r.apply(e, t || [])).next()); }); }, i = commonjsGlobal && commonjsGlobal.__generator || function (e, t) { var n, r, i, a, o = { label: 0, sent: function () { if (1 & i[0])
        throw i[1]; return i[1]; }, trys: [], ops: [] }; return a = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this; }), a; function c(a) { return function (c) { return function (a) { if (n)
    throw new TypeError("Generator is already executing."); for (; o;)
    try {
        if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)
            return i;
        switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
            case 0:
            case 1:
                i = a;
                break;
            case 4: return o.label++, { value: a[1], done: !1 };
            case 5:
                o.label++, r = a[1], a = [0];
                continue;
            case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;
            default:
                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                    o = 0;
                    continue;
                }
                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    o.label = a[1];
                    break;
                }
                if (6 === a[0] && o.label < i[1]) {
                    o.label = i[1], i = a;
                    break;
                }
                if (i && o.label < i[2]) {
                    o.label = i[2], o.ops.push(a);
                    break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
        }
        a = t.call(e, o);
    }
    catch (e) {
        a = [6, e], r = 0;
    }
    finally {
        n = i = 0;
    } if (5 & a[0])
    throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; }([a, c]); }; } }; Object.defineProperty(t, "__esModule", { value: !0 }), t.LedUuid = "e95dd91d-251d-470a-a062-fa1922dfa9a8", function (e) { e.ledMatrixState = "e95d7b77-251d-470a-a062-fa1922dfa9a8", e.ledText = "e95d93ee-251d-470a-a062-fa1922dfa9a8", e.scrollingDelay = "e95d0d2d-251d-470a-a062-fa1922dfa9a8"; }(n = t.LedCharacteristic || (t.LedCharacteristic = {})); var a = function () { function e(e) { this.service = e; } return e.createService = function (n) { var r = n.find(function (e) { return e.uuid === t.LedUuid; }); if (r)
    return new e(r); }, e.prototype.writeText = function (e) { return r(this, void 0, void 0, function () { var t, r; return i(this, function (i) { switch (i.label) {
    case 0: return [4, this.service.getCharacteristic(n.ledText)];
    case 1: return t = i.sent(), r = this.encodeString(e), [2, t.writeValue(r)];
} }); }); }, e.prototype.getMatrixState = function () { return r(this, void 0, void 0, function () { var e; return i(this, function (t) { switch (t.label) {
    case 0: return [4, this.getCharacteristValue(n.ledMatrixState)];
    case 1: return e = t.sent(), [2, this.viewToLedMatrix(e)];
} }); }); }, e.prototype.setMatrixState = function (e) { return r(this, void 0, void 0, function () { var t, r; return i(this, function (i) { switch (i.label) {
    case 0: return [4, this.service.getCharacteristic(n.ledMatrixState)];
    case 1: return t = i.sent(), r = this.ledMatrixToView(e), [2, t.writeValue(r)];
} }); }); }, e.prototype.getScrollingDelay = function () { return r(this, void 0, void 0, function () { return i(this, function (e) { switch (e.label) {
    case 0: return [4, this.getCharacteristValue(n.scrollingDelay)];
    case 1: return [2, e.sent().getUint16(0, !0)];
} }); }); }, e.prototype.setScrollingDelay = function (e) { return r(this, void 0, void 0, function () { var t, r; return i(this, function (i) { switch (i.label) {
    case 0: return [4, this.service.getCharacteristic(n.scrollingDelay)];
    case 1: return t = i.sent(), (r = new DataView(new ArrayBuffer(2))).setUint16(0, e, !0), [2, t.writeValue(r)];
} }); }); }, e.prototype.getCharacteristValue = function (e) { return r(this, void 0, void 0, function () { return i(this, function (t) { switch (t.label) {
    case 0: return [4, this.service.getCharacteristic(e)];
    case 1: return [4, t.sent().readValue()];
    case 2: return [2, t.sent()];
} }); }); }, e.prototype.encodeString = function (e) { for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), r = 0; r < e.length; r++)
    n[r] = e.charCodeAt(r); return t; }, e.prototype.viewToLedMatrix = function (e) { for (var t = [], n = 0; n < 5; n++)
    t[n] = this.byteToBoolArray(e.getUint8(n)); return t; }, e.prototype.byteToBoolArray = function (e) { for (var t = [!1, !1, !1, !1, !1], n = 0; n < t.length; n++)
    t[n] = 1 == (1 & e), e >>= 1; return t; }, e.prototype.ledMatrixToView = function (e) { for (var t = new DataView(new ArrayBuffer(5)), n = 0; n < 5; n++)
    t.setUint8(n, this.boolArrayToByte(e[n])); return t; }, e.prototype.boolArrayToByte = function (e) { return e.reduce(function (e, t) { return e << 1 | (t ? 1 : 0); }, 0); }, e; }(); t.LedService = a; });
unwrapExports(led);
var led_1 = led.LedUuid, led_2 = led.LedCharacteristic, led_3 = led.LedService, temperature = createCommonjsModule(function (e, t) { var n, r, i = commonjsGlobal && commonjsGlobal.__extends || (n = function (e, t) { return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]); })(e, t); }, function (e, t) { function r() { this.constructor = e; } n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r); }), a = commonjsGlobal && commonjsGlobal.__awaiter || function (e, t, n, r) { return new (n || (n = Promise))(function (i, a) { function o(e) { try {
    s(r.next(e));
}
catch (e) {
    a(e);
} } function c(e) { try {
    s(r.throw(e));
}
catch (e) {
    a(e);
} } function s(e) { e.done ? i(e.value) : new n(function (t) { t(e.value); }).then(o, c); } s((r = r.apply(e, t || [])).next()); }); }, o = commonjsGlobal && commonjsGlobal.__generator || function (e, t) { var n, r, i, a, o = { label: 0, sent: function () { if (1 & i[0])
        throw i[1]; return i[1]; }, trys: [], ops: [] }; return a = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this; }), a; function c(a) { return function (c) { return function (a) { if (n)
    throw new TypeError("Generator is already executing."); for (; o;)
    try {
        if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)
            return i;
        switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
            case 0:
            case 1:
                i = a;
                break;
            case 4: return o.label++, { value: a[1], done: !1 };
            case 5:
                o.label++, r = a[1], a = [0];
                continue;
            case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;
            default:
                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                    o = 0;
                    continue;
                }
                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    o.label = a[1];
                    break;
                }
                if (6 === a[0] && o.label < i[1]) {
                    o.label = i[1], i = a;
                    break;
                }
                if (i && o.label < i[2]) {
                    o.label = i[2], o.ops.push(a);
                    break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
        }
        a = t.call(e, o);
    }
    catch (e) {
        a = [6, e], r = 0;
    }
    finally {
        n = i = 0;
    } if (5 & a[0])
    throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; }([a, c]); }; } }; Object.defineProperty(t, "__esModule", { value: !0 }), t.TemperatureUuid = "e95d6100-251d-470a-a062-fa1922dfa9a8", function (e) { e.temperature = "e95d9250-251d-470a-a062-fa1922dfa9a8", e.temperaturePeriod = "e95d1b25-251d-470a-a062-fa1922dfa9a8"; }(r = t.TemperatureCharacteristic || (t.TemperatureCharacteristic = {})); var c = function (e) { function n(t) { var n = e.call(this) || this; return n.service = t, n.on("newListener", n.onNewListener.bind(n)), n.on("removeListener", n.onRemoveListener.bind(n)), n; } return i(n, e), n.createService = function (e) { var r = e.find(function (e) { return e.uuid === t.TemperatureUuid; }); if (r)
    return new n(r); }, n.prototype.readTemperature = function () { return a(this, void 0, void 0, function () { return o(this, function (e) { switch (e.label) {
    case 0: return [4, this.getCharacteristValue(r.temperature)];
    case 1: return [2, e.sent().getInt8(0)];
} }); }); }, n.prototype.getTemperaturePeriod = function () { return a(this, void 0, void 0, function () { return o(this, function (e) { switch (e.label) {
    case 0: return [4, this.getCharacteristValue(r.temperaturePeriod)];
    case 1: return [2, e.sent().getUint16(0, !0)];
} }); }); }, n.prototype.setTemperaturePeriod = function (e) { return a(this, void 0, void 0, function () { var t, n; return o(this, function (i) { switch (i.label) {
    case 0: return [4, this.service.getCharacteristic(r.temperaturePeriod)];
    case 1: return t = i.sent(), (n = new DataView(new ArrayBuffer(2))).setUint16(0, e, !0), [2, t.writeValue(n)];
} }); }); }, n.prototype.getCharacteristValue = function (e) { return a(this, void 0, void 0, function () { return o(this, function (t) { switch (t.label) {
    case 0: return [4, this.service.getCharacteristic(e)];
    case 1: return [4, t.sent().readValue()];
    case 2: return [2, t.sent()];
} }); }); }, n.prototype.onNewListener = function (e) { return a(this, void 0, void 0, function () { var t; return o(this, function (n) { switch (n.label) {
    case 0: return this.listenerCount(e) > 0 ? [2] : "temperaturechanged" !== e ? [3, 3] : [4, this.service.getCharacteristic(r.temperature)];
    case 1: return (t = n.sent()).addEventListener("characteristicvaluechanged", this.temperatureChangedHandler.bind(this)), [4, t.startNotifications()];
    case 2: n.sent(), n.label = 3;
    case 3: return [2];
} }); }); }, n.prototype.onRemoveListener = function (e) { return a(this, void 0, void 0, function () { var t; return o(this, function (n) { switch (n.label) {
    case 0: return this.listenerCount(e) > 0 ? [2] : "temperaturechanged" !== e ? [3, 3] : [4, this.service.getCharacteristic(r.temperature)];
    case 1: return (t = n.sent()).removeEventListener("characteristicvaluechanged", this.temperatureChangedHandler.bind(this)), [4, t.stopNotifications()];
    case 2: n.sent(), n.label = 3;
    case 3: return [2];
} }); }); }, n.prototype.temperatureChangedHandler = function (e) { this.dispatchEvent("temperaturechanged", e.target.value.getInt8(0)); }, n; }(eventDispatcher.EventDispatcher); t.TemperatureService = c; });
unwrapExports(temperature);
var temperature_1 = temperature.TemperatureUuid, temperature_2 = temperature.TemperatureCharacteristic, temperature_3 = temperature.TemperatureService, accelerometer = createCommonjsModule(function (e, t) { var n, r, i = commonjsGlobal && commonjsGlobal.__extends || (n = function (e, t) { return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]); })(e, t); }, function (e, t) { function r() { this.constructor = e; } n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r); }), a = commonjsGlobal && commonjsGlobal.__awaiter || function (e, t, n, r) { return new (n || (n = Promise))(function (i, a) { function o(e) { try {
    s(r.next(e));
}
catch (e) {
    a(e);
} } function c(e) { try {
    s(r.throw(e));
}
catch (e) {
    a(e);
} } function s(e) { e.done ? i(e.value) : new n(function (t) { t(e.value); }).then(o, c); } s((r = r.apply(e, t || [])).next()); }); }, o = commonjsGlobal && commonjsGlobal.__generator || function (e, t) { var n, r, i, a, o = { label: 0, sent: function () { if (1 & i[0])
        throw i[1]; return i[1]; }, trys: [], ops: [] }; return a = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this; }), a; function c(a) { return function (c) { return function (a) { if (n)
    throw new TypeError("Generator is already executing."); for (; o;)
    try {
        if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)
            return i;
        switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
            case 0:
            case 1:
                i = a;
                break;
            case 4: return o.label++, { value: a[1], done: !1 };
            case 5:
                o.label++, r = a[1], a = [0];
                continue;
            case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;
            default:
                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                    o = 0;
                    continue;
                }
                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    o.label = a[1];
                    break;
                }
                if (6 === a[0] && o.label < i[1]) {
                    o.label = i[1], i = a;
                    break;
                }
                if (i && o.label < i[2]) {
                    o.label = i[2], o.ops.push(a);
                    break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
        }
        a = t.call(e, o);
    }
    catch (e) {
        a = [6, e], r = 0;
    }
    finally {
        n = i = 0;
    } if (5 & a[0])
    throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; }([a, c]); }; } }; Object.defineProperty(t, "__esModule", { value: !0 }), t.AccelerometerUuid = "e95d0753-251d-470a-a062-fa1922dfa9a8", function (e) { e.accelerometerData = "e95dca4b-251d-470a-a062-fa1922dfa9a8", e.accelerometerPeriod = "e95dfb24-251d-470a-a062-fa1922dfa9a8"; }(r = t.AccelerometerCharacteristic || (t.AccelerometerCharacteristic = {})); var c = function (e) { function n(t) { var n = e.call(this) || this; return n.service = t, n.on("newListener", n.onNewListener.bind(n)), n.on("removeListener", n.onRemoveListener.bind(n)), n; } return i(n, e), n.createService = function (e) { var r = e.find(function (e) { return e.uuid === t.AccelerometerUuid; }); if (r)
    return new n(r); }, n.prototype.readAccelerometerData = function () { return a(this, void 0, void 0, function () { var e; return o(this, function (t) { switch (t.label) {
    case 0: return [4, this.getCharacteristValue(r.accelerometerData)];
    case 1: return e = t.sent(), [2, this.dataViewToAccelerometerData(e)];
} }); }); }, n.prototype.getAccelerometerPeriod = function () { return a(this, void 0, void 0, function () { return o(this, function (e) { switch (e.label) {
    case 0: return [4, this.getCharacteristValue(r.accelerometerPeriod)];
    case 1: return [2, e.sent().getUint16(0, !0)];
} }); }); }, n.prototype.setAccelerometerPeriod = function (e) { return a(this, void 0, void 0, function () { var t, n; return o(this, function (i) { switch (i.label) {
    case 0: return [4, this.service.getCharacteristic(r.accelerometerPeriod)];
    case 1: return t = i.sent(), (n = new DataView(new ArrayBuffer(2))).setUint16(0, e, !0), [2, t.writeValue(n)];
} }); }); }, n.prototype.getCharacteristValue = function (e) { return a(this, void 0, void 0, function () { return o(this, function (t) { switch (t.label) {
    case 0: return [4, this.service.getCharacteristic(e)];
    case 1: return [4, t.sent().readValue()];
    case 2: return [2, t.sent()];
} }); }); }, n.prototype.onNewListener = function (e) { return a(this, void 0, void 0, function () { var t; return o(this, function (n) { switch (n.label) {
    case 0: return this.listenerCount(e) > 0 ? [2] : "accelerometerdatachanged" !== e ? [3, 3] : [4, this.service.getCharacteristic(r.accelerometerData)];
    case 1: return (t = n.sent()).addEventListener("characteristicvaluechanged", this.accelerometerDataChangedHandler.bind(this)), [4, t.startNotifications()];
    case 2: n.sent(), n.label = 3;
    case 3: return [2];
} }); }); }, n.prototype.onRemoveListener = function (e) { return a(this, void 0, void 0, function () { var t; return o(this, function (n) { switch (n.label) {
    case 0: return this.listenerCount(e) > 0 ? [2] : "accelerometerdatachanged" !== e ? [3, 3] : [4, this.service.getCharacteristic(r.accelerometerData)];
    case 1: return (t = n.sent()).removeEventListener("characteristicvaluechanged", this.accelerometerDataChangedHandler.bind(this)), [4, t.stopNotifications()];
    case 2: n.sent(), n.label = 3;
    case 3: return [2];
} }); }); }, n.prototype.accelerometerDataChangedHandler = function (e) { var t = this.dataViewToAccelerometerData(e.target.value); this.dispatchEvent("accelerometerdatachanged", t); }, n.prototype.dataViewToAccelerometerData = function (e) { return { x: e.getInt16(0, !0) / 1e3, y: e.getInt16(1, !0) / 1e3, z: e.getInt16(2, !0) / 1e3 }; }, n; }(eventDispatcher.EventDispatcher); t.AccelerometerService = c; });
unwrapExports(accelerometer);
var accelerometer_1 = accelerometer.AccelerometerUuid, accelerometer_2 = accelerometer.AccelerometerCharacteristic, accelerometer_3 = accelerometer.AccelerometerService, magnetometer = createCommonjsModule(function (e, t) { var n, r, i = commonjsGlobal && commonjsGlobal.__extends || (n = function (e, t) { return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]); })(e, t); }, function (e, t) { function r() { this.constructor = e; } n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r); }), a = commonjsGlobal && commonjsGlobal.__awaiter || function (e, t, n, r) { return new (n || (n = Promise))(function (i, a) { function o(e) { try {
    s(r.next(e));
}
catch (e) {
    a(e);
} } function c(e) { try {
    s(r.throw(e));
}
catch (e) {
    a(e);
} } function s(e) { e.done ? i(e.value) : new n(function (t) { t(e.value); }).then(o, c); } s((r = r.apply(e, t || [])).next()); }); }, o = commonjsGlobal && commonjsGlobal.__generator || function (e, t) { var n, r, i, a, o = { label: 0, sent: function () { if (1 & i[0])
        throw i[1]; return i[1]; }, trys: [], ops: [] }; return a = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this; }), a; function c(a) { return function (c) { return function (a) { if (n)
    throw new TypeError("Generator is already executing."); for (; o;)
    try {
        if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)
            return i;
        switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
            case 0:
            case 1:
                i = a;
                break;
            case 4: return o.label++, { value: a[1], done: !1 };
            case 5:
                o.label++, r = a[1], a = [0];
                continue;
            case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;
            default:
                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                    o = 0;
                    continue;
                }
                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    o.label = a[1];
                    break;
                }
                if (6 === a[0] && o.label < i[1]) {
                    o.label = i[1], i = a;
                    break;
                }
                if (i && o.label < i[2]) {
                    o.label = i[2], o.ops.push(a);
                    break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
        }
        a = t.call(e, o);
    }
    catch (e) {
        a = [6, e], r = 0;
    }
    finally {
        n = i = 0;
    } if (5 & a[0])
    throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; }([a, c]); }; } }; Object.defineProperty(t, "__esModule", { value: !0 }), t.MagnetometerUuid = "e95df2d8-251d-470a-a062-fa1922dfa9a8", function (e) { e.magnetometerData = "e95dfb11-251d-470a-a062-fa1922dfa9a8", e.magnetometerPeriod = "e95d386c-251d-470a-a062-fa1922dfa9a8", e.magnetometerBearing = "e95d9715-251d-470a-a062-fa1922dfa9a8", e.magnetometerCalibration = "e95db358-251d-470a-a062-fa1922dfa9a8"; }(r = t.MagnetometerCharacteristic || (t.MagnetometerCharacteristic = {})); var c = function (e) { function n(t) { var n = e.call(this) || this; return n.service = t, n.on("newListener", n.onNewListener.bind(n)), n.on("removeListener", n.onRemoveListener.bind(n)), n; } return i(n, e), n.createService = function (e) { var r = e.find(function (e) { return e.uuid === t.MagnetometerUuid; }); if (r)
    return new n(r); }, n.prototype.readMagnetometerData = function () { return a(this, void 0, void 0, function () { var e; return o(this, function (t) { switch (t.label) {
    case 0: return [4, this.getCharacteristValue(r.magnetometerData)];
    case 1: return e = t.sent(), [2, this.dataViewToMagnetometerData(e)];
} }); }); }, n.prototype.getMagnetometerBearing = function () { return a(this, void 0, void 0, function () { var e; return o(this, function (t) { switch (t.label) {
    case 0: return [4, this.getCharacteristValue(r.magnetometerBearing)];
    case 1: return 2 === (e = t.sent()).byteLength ? [2, e.getUint16(0, !0)] : [2, void 0];
} }); }); }, n.prototype.getMagnetometerPeriod = function () { return a(this, void 0, void 0, function () { return o(this, function (e) { switch (e.label) {
    case 0: return [4, this.getCharacteristValue(r.magnetometerPeriod)];
    case 1: return [2, e.sent().getUint16(0, !0)];
} }); }); }, n.prototype.setMagnetometerPeriod = function (e) { return a(this, void 0, void 0, function () { var t, n; return o(this, function (i) { switch (i.label) {
    case 0: return [4, this.service.getCharacteristic(r.magnetometerPeriod)];
    case 1: return t = i.sent(), (n = new DataView(new ArrayBuffer(2))).setUint16(0, e, !0), [2, t.writeValue(n)];
} }); }); }, n.prototype.getCharacteristValue = function (e) { return a(this, void 0, void 0, function () { return o(this, function (t) { switch (t.label) {
    case 0: return [4, this.service.getCharacteristic(e)];
    case 1: return [4, t.sent().readValue()];
    case 2: return [2, t.sent()];
} }); }); }, n.prototype.onNewListener = function (e) { return a(this, void 0, void 0, function () { var t; return o(this, function (n) { switch (n.label) {
    case 0: return this.listenerCount(e) > 0 ? [2] : "magnetometerdatachanged" !== e ? [3, 3] : [4, this.service.getCharacteristic(r.magnetometerData)];
    case 1: return (t = n.sent()).addEventListener("characteristicvaluechanged", this.magnetometerDataChangedHandler.bind(this)), [4, t.startNotifications()];
    case 2: n.sent(), n.label = 3;
    case 3: return "magnetometerbearingchanged" !== e ? [3, 6] : [4, this.service.getCharacteristic(r.magnetometerBearing)];
    case 4: return (t = n.sent()).addEventListener("characteristicvaluechanged", this.magnetometerBearingChangedHandler.bind(this)), [4, t.startNotifications()];
    case 5: n.sent(), n.label = 6;
    case 6: return [2];
} }); }); }, n.prototype.onRemoveListener = function (e) { return a(this, void 0, void 0, function () { var t; return o(this, function (n) { switch (n.label) {
    case 0: return this.listenerCount(e) > 0 ? [2] : "magnetometerdatachanged" !== e ? [3, 3] : [4, this.service.getCharacteristic(r.magnetometerData)];
    case 1: return (t = n.sent()).removeEventListener("characteristicvaluechanged", this.magnetometerDataChangedHandler.bind(this)), [4, t.stopNotifications()];
    case 2: n.sent(), n.label = 3;
    case 3: return "magnetometerbearingchanged" !== e ? [3, 6] : [4, this.service.getCharacteristic(r.magnetometerBearing)];
    case 4: return (t = n.sent()).removeEventListener("characteristicvaluechanged", this.magnetometerBearingChangedHandler.bind(this)), [4, t.stopNotifications()];
    case 5: n.sent(), n.label = 6;
    case 6: return [2];
} }); }); }, n.prototype.magnetometerDataChangedHandler = function (e) { var t = this.dataViewToMagnetometerData(e.target.value); this.dispatchEvent("magnetometerdatachanged", t); }, n.prototype.magnetometerBearingChangedHandler = function (e) { var t = e.target.value; 2 === t.byteLength && this.dispatchEvent("magnetometerbearingchanged", t.getUint16(0, !0)); }, n.prototype.dataViewToMagnetometerData = function (e) { return { x: e.getInt16(0, !0), y: e.getInt16(1, !0), z: e.getInt16(2, !0) }; }, n; }(eventDispatcher.EventDispatcher); t.MagnetometerService = c; });
unwrapExports(magnetometer);
var magnetometer_1 = magnetometer.MagnetometerUuid, magnetometer_2 = magnetometer.MagnetometerCharacteristic, magnetometer_3 = magnetometer.MagnetometerService, ioPin = createCommonjsModule(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.IoPinUuid = "e95d127b-251d-470a-a062-fa1922dfa9a8", function (e) { e.pinData = "e95d8d00-251d-470a-a062-fa1922dfa9a8", e.pinAdConfiguration = "e95d5899-251d-470a-a062-fa1922dfa9a8", e.pinIoConfiguration = "e95db9fe-251d-470a-a062-fa1922dfa9a8", e.pwmControl = "e95dd822-251d-470a-a062-fa1922dfa9a8"; }(t.IoPinCharacteristic || (t.IoPinCharacteristic = {})); });
unwrapExports(ioPin);
var ioPin_1 = ioPin.IoPinUuid, ioPin_2 = ioPin.IoPinCharacteristic, uart = createCommonjsModule(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.UartUuid = "6e400001-b5a3-f393-e0a9-e50e24dcca9e", function (e) { e.tx = "6e400002-b5a3-f393-e0a9-e50e24dcca9e", e.rx = "6e400003-b5a3-f393-e0a9-e50e24dcca9e"; }(t.UartCharacteristic || (t.UartCharacteristic = {})); });
unwrapExports(uart);
var uart_1 = uart.UartUuid, uart_2 = uart.UartCharacteristic, event = createCommonjsModule(function (e, t) { var n, r, i = commonjsGlobal && commonjsGlobal.__extends || (n = function (e, t) { return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]); })(e, t); }, function (e, t) { function r() { this.constructor = e; } n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r); }), a = commonjsGlobal && commonjsGlobal.__awaiter || function (e, t, n, r) { return new (n || (n = Promise))(function (i, a) { function o(e) { try {
    s(r.next(e));
}
catch (e) {
    a(e);
} } function c(e) { try {
    s(r.throw(e));
}
catch (e) {
    a(e);
} } function s(e) { e.done ? i(e.value) : new n(function (t) { t(e.value); }).then(o, c); } s((r = r.apply(e, t || [])).next()); }); }, o = commonjsGlobal && commonjsGlobal.__generator || function (e, t) { var n, r, i, a, o = { label: 0, sent: function () { if (1 & i[0])
        throw i[1]; return i[1]; }, trys: [], ops: [] }; return a = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this; }), a; function c(a) { return function (c) { return function (a) { if (n)
    throw new TypeError("Generator is already executing."); for (; o;)
    try {
        if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)
            return i;
        switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
            case 0:
            case 1:
                i = a;
                break;
            case 4: return o.label++, { value: a[1], done: !1 };
            case 5:
                o.label++, r = a[1], a = [0];
                continue;
            case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;
            default:
                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                    o = 0;
                    continue;
                }
                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    o.label = a[1];
                    break;
                }
                if (6 === a[0] && o.label < i[1]) {
                    o.label = i[1], i = a;
                    break;
                }
                if (i && o.label < i[2]) {
                    o.label = i[2], o.ops.push(a);
                    break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
        }
        a = t.call(e, o);
    }
    catch (e) {
        a = [6, e], r = 0;
    }
    finally {
        n = i = 0;
    } if (5 & a[0])
    throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; }([a, c]); }; } }; Object.defineProperty(t, "__esModule", { value: !0 }), t.EventUuid = "e95d93af-251d-470a-a062-fa1922dfa9a8", function (e) { e.microBitRequirements = "e95db84c-251d-470a-a062-fa1922dfa9a8", e.microBitEvent = "e95d9775-251d-470a-a062-fa1922dfa9a8", e.clientRequirements = "e95d23c4-251d-470a-a062-fa1922dfa9a8", e.clientEvent = "e95d5404-251d-470a-a062-fa1922dfa9a8"; }(r = t.EventCharacteristic || (t.EventCharacteristic = {})); var c = function (e) { function n(t) { var n = e.call(this) || this; return n.service = t, n.on("newListener", n.onNewListener.bind(n)), n.on("removeListener", n.onRemoveListener.bind(n)), n; } return i(n, e), n.createService = function (e) { var r = e.find(function (e) { return e.uuid === t.EventUuid; }); if (r)
    return new n(r); }, n.prototype.getMicrobitRequirements = function () { return a(this, void 0, void 0, function () { var e; return o(this, function (t) { switch (t.label) {
    case 0: return [4, this.getCharacteristValue(r.microBitRequirements)];
    case 1: return e = t.sent(), [2, this.viewToMicrobitEvent(e)];
} }); }); }, n.prototype.setClientRequirements = function (e, t) { return a(this, void 0, void 0, function () { var n, i; return o(this, function (a) { switch (a.label) {
    case 0: return [4, this.service.getCharacteristic(r.clientRequirements)];
    case 1: return n = a.sent(), (i = new DataView(new ArrayBuffer(4))).setUint16(0, e, !0), i.setUint16(1, t, !0), [2, n.writeValue(i)];
} }); }); }, n.prototype.readMicrobitEvent = function () { return a(this, void 0, void 0, function () { var e; return o(this, function (t) { switch (t.label) {
    case 0: return [4, this.getCharacteristValue(r.microBitEvent)];
    case 1: return e = t.sent(), [2, this.viewToMicrobitEvent(e)];
} }); }); }, n.prototype.writeClientEvent = function (e, t) { return a(this, void 0, void 0, function () { var n, i; return o(this, function (a) { switch (a.label) {
    case 0: return [4, this.service.getCharacteristic(r.clientEvent)];
    case 1: return n = a.sent(), (i = new DataView(new ArrayBuffer(4))).setUint16(0, e, !0), i.setUint16(1, t, !0), [2, n.writeValue(i)];
} }); }); }, n.prototype.getCharacteristValue = function (e) { return a(this, void 0, void 0, function () { return o(this, function (t) { switch (t.label) {
    case 0: return [4, this.service.getCharacteristic(e)];
    case 1: return [4, t.sent().readValue()];
    case 2: return [2, t.sent()];
} }); }); }, n.prototype.onNewListener = function (e) { return a(this, void 0, void 0, function () { var t; return o(this, function (n) { switch (n.label) {
    case 0: return this.listenerCount(e) > 0 ? [2] : "microbitevent" !== e ? [3, 3] : [4, this.service.getCharacteristic(r.microBitEvent)];
    case 1: return (t = n.sent()).addEventListener("characteristicvaluechanged", this.eventHandler.bind(this)), [4, t.startNotifications()];
    case 2: n.sent(), n.label = 3;
    case 3: return "microbitrequirementschanged" !== e ? [3, 6] : [4, this.service.getCharacteristic(r.microBitRequirements)];
    case 4: return (t = n.sent()).addEventListener("characteristicvaluechanged", this.microbitRequirementsChangedHandler.bind(this)), [4, t.startNotifications()];
    case 5: n.sent(), n.label = 6;
    case 6: return [2];
} }); }); }, n.prototype.onRemoveListener = function (e) { return a(this, void 0, void 0, function () { var t; return o(this, function (n) { switch (n.label) {
    case 0: return this.listenerCount(e) > 0 ? [2] : "microbitevent" !== e ? [3, 3] : [4, this.service.getCharacteristic(r.microBitEvent)];
    case 1: return (t = n.sent()).removeEventListener("characteristicvaluechanged", this.eventHandler.bind(this)), [4, t.stopNotifications()];
    case 2: n.sent(), n.label = 3;
    case 3: return "microbitrequirementschanged" !== e ? [3, 6] : [4, this.service.getCharacteristic(r.microBitRequirements)];
    case 4: return (t = n.sent()).removeEventListener("characteristicvaluechanged", this.microbitRequirementsChangedHandler.bind(this)), [4, t.stopNotifications()];
    case 5: n.sent(), n.label = 6;
    case 6: return [2];
} }); }); }, n.prototype.microbitRequirementsChangedHandler = function (e) { var t = this.viewToMicrobitEvent(e.target.value); this.dispatchEvent("microbitrequirementschanged", t); }, n.prototype.eventHandler = function (e) { var t = this.viewToMicrobitEvent(e.target.value); this.dispatchEvent("microbitevent", t); }, n.prototype.viewToMicrobitEvent = function (e) { return { type: e.getUint16(0, !0), value: e.getUint16(1, !0) }; }, n; }(eventDispatcher.EventDispatcher); t.EventService = c; });
unwrapExports(event);
var event_1 = event.EventUuid, event_2 = event.EventCharacteristic, event_3 = event.EventService, dfuControl = createCommonjsModule(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.DfuUuid = "e95d93b0-251d-470a-a062-fa1922dfa9a8", (t.DfuCharacteristic || (t.DfuCharacteristic = {})).dfuControl = "e95d93b1-251d-470a-a062-fa1922dfa9a8"; });
unwrapExports(dfuControl);
var dfuControl_1 = dfuControl.DfuUuid, dfuControl_2 = dfuControl.DfuCharacteristic, microbit = createCommonjsModule(function (e, t) { var n = commonjsGlobal && commonjsGlobal.__awaiter || function (e, t, n, r) { return new (n || (n = Promise))(function (i, a) { function o(e) { try {
    s(r.next(e));
}
catch (e) {
    a(e);
} } function c(e) { try {
    s(r.throw(e));
}
catch (e) {
    a(e);
} } function s(e) { e.done ? i(e.value) : new n(function (t) { t(e.value); }).then(o, c); } s((r = r.apply(e, t || [])).next()); }); }, r = commonjsGlobal && commonjsGlobal.__generator || function (e, t) { var n, r, i, a, o = { label: 0, sent: function () { if (1 & i[0])
        throw i[1]; return i[1]; }, trys: [], ops: [] }; return a = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this; }), a; function c(a) { return function (c) { return function (a) { if (n)
    throw new TypeError("Generator is already executing."); for (; o;)
    try {
        if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)
            return i;
        switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
            case 0:
            case 1:
                i = a;
                break;
            case 4: return o.label++, { value: a[1], done: !1 };
            case 5:
                o.label++, r = a[1], a = [0];
                continue;
            case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;
            default:
                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                    o = 0;
                    continue;
                }
                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    o.label = a[1];
                    break;
                }
                if (6 === a[0] && o.label < i[1]) {
                    o.label = i[1], i = a;
                    break;
                }
                if (i && o.label < i[2]) {
                    o.label = i[2], o.ops.push(a);
                    break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
        }
        a = t.call(e, o);
    }
    catch (e) {
        a = [6, e], r = 0;
    }
    finally {
        n = i = 0;
    } if (5 & a[0])
    throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; }([a, c]); }; } }, i = commonjsGlobal; Object.defineProperty(t, "__esModule", { value: !0 }), t.requestMicrobit = function (e) { return n(i, void 0, void 0, function () { var t; return r(this, function (n) { switch (n.label) {
    case 0: return [4, e.requestDevice({ filters: [{ namePrefix: "BBC micro:bit" }], optionalServices: [deviceInformation.DeviceInformationUuid, button.ButtonUuid, led.LedUuid, temperature.TemperatureUuid, accelerometer.AccelerometerUuid, magnetometer.MagnetometerUuid, ioPin.IoPinUuid, uart.UartUuid, event.EventUuid, dfuControl.DfuUuid] })];
    case 1: return (t = n.sent()) ? t.gatt ? [4, t.gatt.connect()] : [3, 3] : [2, void 0];
    case 2: n.sent(), n.label = 3;
    case 3: return [2, t];
} }); }); }, t.getServices = function (e) { return n(i, void 0, void 0, function () { var t; return r(this, function (n) { switch (n.label) {
    case 0: return [4, e.gatt.getPrimaryServices()];
    case 1: return t = n.sent(), [2, { deviceInformationService: deviceInformation.DeviceInformationService.createService(t), buttonService: button.ButtonService.createService(t), ledService: led.LedService.createService(t), temperatureService: temperature.TemperatureService.createService(t), accelerometerService: accelerometer.AccelerometerService.createService(t), magnetometerService: magnetometer.MagnetometerService.createService(t), eventService: event.EventService.createService(t) }];
} }); }); }; });
unwrapExports(microbit);
var microbit_1 = microbit.requestMicrobit, microbit_2 = microbit.getServices, lib = createCommonjsModule(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), function (e) { for (var n in e)
    t.hasOwnProperty(n) || (t[n] = e[n]); }(microbit); });
unwrapExports(lib);
var lib_1 = lib.getServices, lib_2 = lib.requestMicrobit, MicrobitConnect = function () { function e() { this.device = void 0, this.connectLabel = "Connect", this.disconnectLabel = "Disconnect"; } return e.prototype.render = function () { var e = this; return microbit_core_js_1.h("button", { onClick: function () { return e.connectDisconnect(); } }, this.getLabel()); }, e.prototype.getLabel = function () { return this.device ? this.disconnectLabel : this.connectLabel; }, e.prototype.connectDisconnect = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { var e, t; return tslib_1.__generator(this, function (n) { switch (n.label) {
    case 0: return this.device ? this.device.gatt.connected ? [4, this.device.gatt.disconnect()] : [3, 2] : [3, 3];
    case 1: n.sent(), n.label = 2;
    case 2: return this.setDevice(void 0), this.setServices(void 0), [2];
    case 3: return [4, lib_2(window.navigator.bluetooth)];
    case 4: return (e = n.sent()) ? (this.setDevice(e), [4, lib_1(e)]) : [3, 6];
    case 5: t = n.sent(), this.setServices(t), n.label = 6;
    case 6: return [2];
} }); }); }, Object.defineProperty(e, "is", { get: function () { return "microbit-connect"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { connectLabel: { type: String, attr: "connect-label" }, device: { type: "Any", attr: "device" }, disconnectLabel: { type: String, attr: "disconnect-label" }, el: { elementRef: !0 }, setDevice: { type: "Any", attr: "set-device" }, setServices: { type: "Any", attr: "set-services" } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.MicrobitConnect = MicrobitConnect;
chunk_d2120d7f_js_1.a.injectProps(MicrobitConnect, ["device", "setDevice", "setServices"]);
