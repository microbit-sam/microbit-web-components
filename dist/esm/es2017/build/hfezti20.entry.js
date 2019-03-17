import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-3d8ed500.js';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deviceInformation = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
exports.DeviceInformationUuid = "0000180a-0000-1000-8000-00805f9b34fb";
/**
 * @hidden
 */
var DeviceInformationCharacteristic;
(function (DeviceInformationCharacteristic) {
    DeviceInformationCharacteristic["modelNumber"] = "00002a24-0000-1000-8000-00805f9b34fb";
    DeviceInformationCharacteristic["serialNumber"] = "00002a25-0000-1000-8000-00805f9b34fb";
    DeviceInformationCharacteristic["firmwareRevision"] = "00002a26-0000-1000-8000-00805f9b34fb";
    DeviceInformationCharacteristic["hardwareRevision"] = "00002a27-0000-1000-8000-00805f9b34fb";
    DeviceInformationCharacteristic["manufacturer"] = "00002a29-0000-1000-8000-00805f9b34fb";
})(DeviceInformationCharacteristic = exports.DeviceInformationCharacteristic || (exports.DeviceInformationCharacteristic = {}));
var DeviceInformationService = /** @class */ (function () {
    function DeviceInformationService(service) {
        this.service = service;
    }
    DeviceInformationService.createService = function (services) {
        var found = services.find(function (service) { return service.uuid === exports.DeviceInformationUuid; });
        if (found) {
            return new DeviceInformationService(found);
        }
        return undefined;
    };
    DeviceInformationService.prototype.readDeviceInformation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var characteristics, info, modelNumberChar, _a, serialNumberChar, _b, firmwareRevisionChar, _c, hardwareRevisionChar, _d, manufacturerChar, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristics()];
                    case 1:
                        characteristics = _f.sent();
                        info = {};
                        modelNumberChar = characteristics.find(function (char) { return char.uuid === DeviceInformationCharacteristic.modelNumber; });
                        if (!modelNumberChar) return [3 /*break*/, 3];
                        _a = info;
                        return [4 /*yield*/, this.readStringCharacteristic(modelNumberChar)];
                    case 2:
                        _a.modelNumber = _f.sent();
                        _f.label = 3;
                    case 3:
                        serialNumberChar = characteristics.find(function (char) { return char.uuid === DeviceInformationCharacteristic.serialNumber; });
                        if (!serialNumberChar) return [3 /*break*/, 5];
                        _b = info;
                        return [4 /*yield*/, this.readStringCharacteristic(serialNumberChar)];
                    case 4:
                        _b.serialNumber = _f.sent();
                        _f.label = 5;
                    case 5:
                        firmwareRevisionChar = characteristics.find(function (char) { return char.uuid === DeviceInformationCharacteristic.firmwareRevision; });
                        if (!firmwareRevisionChar) return [3 /*break*/, 7];
                        _c = info;
                        return [4 /*yield*/, this.readStringCharacteristic(firmwareRevisionChar)];
                    case 6:
                        _c.firmwareRevision = _f.sent();
                        _f.label = 7;
                    case 7:
                        hardwareRevisionChar = characteristics.find(function (char) { return char.uuid === DeviceInformationCharacteristic.hardwareRevision; });
                        if (!hardwareRevisionChar) return [3 /*break*/, 9];
                        _d = info;
                        return [4 /*yield*/, this.readStringCharacteristic(hardwareRevisionChar)];
                    case 8:
                        _d.hardwareRevision = _f.sent();
                        _f.label = 9;
                    case 9:
                        manufacturerChar = characteristics.find(function (char) { return char.uuid === DeviceInformationCharacteristic.manufacturer; });
                        if (!manufacturerChar) return [3 /*break*/, 11];
                        _e = info;
                        return [4 /*yield*/, this.readStringCharacteristic(manufacturerChar)];
                    case 10:
                        _e.manufacturer = _f.sent();
                        _f.label = 11;
                    case 11: return [2 /*return*/, info];
                }
            });
        });
    };
    DeviceInformationService.prototype.readStringCharacteristic = function (characteristic) {
        return __awaiter(this, void 0, void 0, function () {
            var view, buffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, characteristic.readValue()];
                    case 1:
                        view = _a.sent();
                        buffer = view.buffer.slice(view.byteOffset, view.byteOffset + view.byteLength);
                        return [2 /*return*/, String.fromCharCode.apply(null, Array.from(new Uint8Array(buffer)))];
                }
            });
        });
    };
    return DeviceInformationService;
}());
exports.DeviceInformationService = DeviceInformationService;


});

unwrapExports(deviceInformation);
var deviceInformation_1 = deviceInformation.DeviceInformationUuid;
var deviceInformation_2 = deviceInformation.DeviceInformationCharacteristic;
var deviceInformation_3 = deviceInformation.DeviceInformationService;

var domain;

// This constructor is used to store event handlers. Instantiating this is
// faster than explicitly calling `Object.create(null)` to get a "clean" empty
// object (tested with v8 v4.9).
function EventHandlers() {}
EventHandlers.prototype = Object.create(null);

function EventEmitter() {
  EventEmitter.init.call(this);
}

// nodejs oddity
// require('events') === require('events').EventEmitter
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.usingDomains = false;

EventEmitter.prototype.domain = undefined;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

EventEmitter.init = function() {
  this.domain = null;
  if (EventEmitter.usingDomains) {
    // if there is an active domain, then attach to it.
    if (domain.active && !(this instanceof domain.Domain)) ;
  }

  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events, domain;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  domain = this.domain;

  // If there is no 'error' event listener then throw.
  if (doError) {
    er = arguments[1];
    if (domain) {
      if (!er)
        er = new Error('Uncaught, unspecified "error" event');
      er.domainEmitter = this;
      er.domain = domain;
      er.domainThrown = false;
      domain.emit('error', er);
    } else if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] :
                                          [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + type + ' listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }

  return target;
}
function emitWarning(e) {
  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || (list.listener && list.listener === listener)) {
        if (--this._eventsCount === 0)
          this._events = new EventHandlers();
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length; i-- > 0;) {
          if (list[i] === listener ||
              (list[i].listener && list[i].listener === listener)) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (list.length === 1) {
          list[0] = undefined;
          if (--this._eventsCount === 0) {
            this._events = new EventHandlers();
            return this;
          } else {
            delete events[type];
          }
        } else {
          spliceOne(list, position);
        }

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = new EventHandlers();
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        for (var i = 0, key; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = new EventHandlers();
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        do {
          this.removeListener(type, listeners[listeners.length - 1]);
        } while (listeners[0]);
      }

      return this;
    };

EventEmitter.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events = this._events;

  if (!events)
    ret = [];
  else {
    evlistener = events[type];
    if (!evlistener)
      ret = [];
    else if (typeof evlistener === 'function')
      ret = [evlistener.listener || evlistener];
    else
      ret = unwrapListeners(evlistener);
  }

  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, i) {
  var copy = new Array(i);
  while (i--)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

var eventDispatcher = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * @hidden
 */
var EventDispatcher = /** @class */ (function (_super) {
    __extends(EventDispatcher, _super);
    function EventDispatcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isEventListenerObject = function (listener) { return listener.handleEvent !== undefined; };
        return _this;
    }
    EventDispatcher.prototype.addEventListener = function (type, listener) {
        if (listener) {
            var handler = this.isEventListenerObject(listener) ? listener.handleEvent : listener;
            _super.prototype.addListener.call(this, type, handler);
        }
    };
    EventDispatcher.prototype.removeEventListener = function (type, callback) {
        if (callback) {
            var handler = this.isEventListenerObject(callback) ? callback.handleEvent : callback;
            _super.prototype.removeListener.call(this, type, handler);
        }
    };
    EventDispatcher.prototype.dispatchEvent = function (eventOrType, detail) {
        var event;
        if (typeof eventOrType === "string") {
            event = new CustomEvent(eventOrType, {
                detail: detail
            });
        }
        else {
            event = eventOrType;
        }
        return _super.prototype.emit.call(this, event.type, event);
    };
    return EventDispatcher;
}(EventEmitter.EventEmitter));
exports.EventDispatcher = EventDispatcher;


});

unwrapExports(eventDispatcher);
var eventDispatcher_1 = eventDispatcher.EventDispatcher;

var button = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * @hidden
 */
exports.ButtonUuid = "e95d9882-251d-470a-a062-fa1922dfa9a8";
/**
 * @hidden
 */
var ButtonCharacteristic;
(function (ButtonCharacteristic) {
    ButtonCharacteristic["buttonAState"] = "e95dda90-251d-470a-a062-fa1922dfa9a8";
    ButtonCharacteristic["buttonBState"] = "e95dda91-251d-470a-a062-fa1922dfa9a8";
})(ButtonCharacteristic = exports.ButtonCharacteristic || (exports.ButtonCharacteristic = {}));
var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["Release"] = 0] = "Release";
    ButtonState[ButtonState["ShortPress"] = 1] = "ShortPress";
    ButtonState[ButtonState["LongPress"] = 2] = "LongPress";
})(ButtonState = exports.ButtonState || (exports.ButtonState = {}));
var ButtonService = /** @class */ (function (_super) {
    __extends(ButtonService, _super);
    function ButtonService(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.on("newListener", _this.onNewListener.bind(_this));
        _this.on("removeListener", _this.onRemoveListener.bind(_this));
        return _this;
    }
    ButtonService.createService = function (services) {
        var found = services.find(function (service) { return service.uuid === exports.ButtonUuid; });
        if (found) {
            return new ButtonService(found);
        }
        return undefined;
    };
    ButtonService.prototype.readButtonAState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(ButtonCharacteristic.buttonAState)];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, value.getUint8(0)];
                }
            });
        });
    };
    ButtonService.prototype.readButtonBState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(ButtonCharacteristic.buttonBState)];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, value.getUint8(0)];
                }
            });
        });
    };
    ButtonService.prototype.getCharacteristValue = function (characteristic) {
        return __awaiter(this, void 0, void 0, function () {
            var service, char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service];
                    case 1:
                        service = _a.sent();
                        return [4 /*yield*/, service.getCharacteristic(characteristic)];
                    case 2:
                        char = _a.sent();
                        return [4 /*yield*/, char.readValue()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ButtonService.prototype.onNewListener = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var listenerCount, service, char, service, char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listenerCount = this.listenerCount(event);
                        if (listenerCount > 0) {
                            return [2 /*return*/];
                        }
                        if (!(event === "buttonastatechanged")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.service];
                    case 1:
                        service = _a.sent();
                        return [4 /*yield*/, service.getCharacteristic(ButtonCharacteristic.buttonAState)];
                    case 2:
                        char = _a.sent();
                        char.addEventListener("characteristicvaluechanged", this.buttonAStateChangedHandler.bind(this));
                        return [4 /*yield*/, char.startNotifications()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!(event === "buttonbstatechanged")) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.service];
                    case 5:
                        service = _a.sent();
                        return [4 /*yield*/, service.getCharacteristic(ButtonCharacteristic.buttonBState)];
                    case 6:
                        char = _a.sent();
                        char.addEventListener("characteristicvaluechanged", this.buttonBStateChangedHandler.bind(this));
                        return [4 /*yield*/, char.startNotifications()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ButtonService.prototype.onRemoveListener = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var listenerCount, service, char, service, char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listenerCount = this.listenerCount(event);
                        if (listenerCount > 0) {
                            return [2 /*return*/];
                        }
                        if (!(event === "buttonastatechanged")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.service];
                    case 1:
                        service = _a.sent();
                        return [4 /*yield*/, service.getCharacteristic(ButtonCharacteristic.buttonAState)];
                    case 2:
                        char = _a.sent();
                        char.removeEventListener("characteristicvaluechanged", this.buttonAStateChangedHandler.bind(this));
                        return [4 /*yield*/, char.stopNotifications()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!(event === "buttonbstatechanged")) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.service];
                    case 5:
                        service = _a.sent();
                        return [4 /*yield*/, service.getCharacteristic(ButtonCharacteristic.buttonBState)];
                    case 6:
                        char = _a.sent();
                        char.removeEventListener("characteristicvaluechanged", this.buttonBStateChangedHandler.bind(this));
                        return [4 /*yield*/, char.stopNotifications()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ButtonService.prototype.buttonAStateChangedHandler = function (event) {
        var view = event.target.value;
        this.dispatchEvent("buttonastatechanged", view.getUint8(0));
    };
    ButtonService.prototype.buttonBStateChangedHandler = function (event) {
        var view = event.target.value;
        this.dispatchEvent("buttonbstatechanged", view.getUint8(0));
    };
    return ButtonService;
}(eventDispatcher.EventDispatcher));
exports.ButtonService = ButtonService;


});

unwrapExports(button);
var button_1 = button.ButtonUuid;
var button_2 = button.ButtonCharacteristic;
var button_3 = button.ButtonState;
var button_4 = button.ButtonService;

var led = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
exports.LedUuid = "e95dd91d-251d-470a-a062-fa1922dfa9a8";
/**
 * @hidden
 */
var LedCharacteristic;
(function (LedCharacteristic) {
    LedCharacteristic["ledMatrixState"] = "e95d7b77-251d-470a-a062-fa1922dfa9a8";
    LedCharacteristic["ledText"] = "e95d93ee-251d-470a-a062-fa1922dfa9a8";
    LedCharacteristic["scrollingDelay"] = "e95d0d2d-251d-470a-a062-fa1922dfa9a8";
})(LedCharacteristic = exports.LedCharacteristic || (exports.LedCharacteristic = {}));
var LedService = /** @class */ (function () {
    function LedService(service) {
        this.service = service;
    }
    LedService.createService = function (services) {
        var found = services.find(function (service) { return service.uuid === exports.LedUuid; });
        if (found) {
            return new LedService(found);
        }
        return undefined;
    };
    LedService.prototype.writeText = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var characteristic, encoded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(LedCharacteristic.ledText)];
                    case 1:
                        characteristic = _a.sent();
                        encoded = this.encodeString(text);
                        return [2 /*return*/, characteristic.writeValue(encoded)];
                }
            });
        });
    };
    LedService.prototype.getMatrixState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(LedCharacteristic.ledMatrixState)];
                    case 1:
                        view = _a.sent();
                        return [2 /*return*/, this.viewToLedMatrix(view)];
                }
            });
        });
    };
    LedService.prototype.setMatrixState = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var characteristic, view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(LedCharacteristic.ledMatrixState)];
                    case 1:
                        characteristic = _a.sent();
                        view = this.ledMatrixToView(state);
                        return [2 /*return*/, characteristic.writeValue(view)];
                }
            });
        });
    };
    LedService.prototype.getScrollingDelay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(LedCharacteristic.scrollingDelay)];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, value.getUint16(0, true)];
                }
            });
        });
    };
    LedService.prototype.setScrollingDelay = function (delay) {
        return __awaiter(this, void 0, void 0, function () {
            var char, view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(LedCharacteristic.scrollingDelay)];
                    case 1:
                        char = _a.sent();
                        view = new DataView(new ArrayBuffer(2));
                        view.setUint16(0, delay, true);
                        return [2 /*return*/, char.writeValue(view)];
                }
            });
        });
    };
    LedService.prototype.getCharacteristValue = function (characteristic) {
        return __awaiter(this, void 0, void 0, function () {
            var char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(characteristic)];
                    case 1:
                        char = _a.sent();
                        return [4 /*yield*/, char.readValue()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LedService.prototype.encodeString = function (text) {
        var buffer = new ArrayBuffer(text.length);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < text.length; i++) {
            view[i] = text.charCodeAt(i);
        }
        return buffer;
    };
    LedService.prototype.viewToLedMatrix = function (view) {
        var matrix = [];
        for (var i = 0; i < 5; i++) {
            matrix[i] = this.byteToBoolArray(view.getUint8(i));
        }
        return matrix;
    };
    LedService.prototype.byteToBoolArray = function (byte) {
        var bools = [false, false, false, false, false];
        for (var i = 0; i < bools.length; i++) {
            bools[i] = (byte & 1) === 1;
            byte >>= 1;
        }
        return bools;
    };
    LedService.prototype.ledMatrixToView = function (matrix) {
        var view = new DataView(new ArrayBuffer(5));
        for (var i = 0; i < 5; i++) {
            view.setUint8(i, this.boolArrayToByte(matrix[i]));
        }
        return view;
    };
    LedService.prototype.boolArrayToByte = function (bools) {
        return bools.reduce(function (res, x) { return res << 1 | (x ? 1 : 0); }, 0);
    };
    return LedService;
}());
exports.LedService = LedService;


});

unwrapExports(led);
var led_1 = led.LedUuid;
var led_2 = led.LedCharacteristic;
var led_3 = led.LedService;

var temperature = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * @hidden
 */
exports.TemperatureUuid = "e95d6100-251d-470a-a062-fa1922dfa9a8";
/**
 * @hidden
 */
var TemperatureCharacteristic;
(function (TemperatureCharacteristic) {
    TemperatureCharacteristic["temperature"] = "e95d9250-251d-470a-a062-fa1922dfa9a8";
    TemperatureCharacteristic["temperaturePeriod"] = "e95d1b25-251d-470a-a062-fa1922dfa9a8";
})(TemperatureCharacteristic = exports.TemperatureCharacteristic || (exports.TemperatureCharacteristic = {}));
var TemperatureService = /** @class */ (function (_super) {
    __extends(TemperatureService, _super);
    function TemperatureService(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.on("newListener", _this.onNewListener.bind(_this));
        _this.on("removeListener", _this.onRemoveListener.bind(_this));
        return _this;
    }
    TemperatureService.createService = function (services) {
        var found = services.find(function (service) { return service.uuid === exports.TemperatureUuid; });
        if (found) {
            return new TemperatureService(found);
        }
        return undefined;
    };
    TemperatureService.prototype.readTemperature = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(TemperatureCharacteristic.temperature)];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, value.getInt8(0)];
                }
            });
        });
    };
    TemperatureService.prototype.getTemperaturePeriod = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(TemperatureCharacteristic.temperaturePeriod)];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, value.getUint16(0, true)];
                }
            });
        });
    };
    TemperatureService.prototype.setTemperaturePeriod = function (frequency) {
        return __awaiter(this, void 0, void 0, function () {
            var char, view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(TemperatureCharacteristic.temperaturePeriod)];
                    case 1:
                        char = _a.sent();
                        view = new DataView(new ArrayBuffer(2));
                        view.setUint16(0, frequency, true);
                        return [2 /*return*/, char.writeValue(view)];
                }
            });
        });
    };
    TemperatureService.prototype.getCharacteristValue = function (characteristic) {
        return __awaiter(this, void 0, void 0, function () {
            var char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(characteristic)];
                    case 1:
                        char = _a.sent();
                        return [4 /*yield*/, char.readValue()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TemperatureService.prototype.onNewListener = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var listenerCount, char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listenerCount = this.listenerCount(event);
                        if (listenerCount > 0) {
                            return [2 /*return*/];
                        }
                        if (!(event === "temperaturechanged")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.getCharacteristic(TemperatureCharacteristic.temperature)];
                    case 1:
                        char = _a.sent();
                        char.addEventListener("characteristicvaluechanged", this.temperatureChangedHandler.bind(this));
                        return [4 /*yield*/, char.startNotifications()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TemperatureService.prototype.onRemoveListener = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var listenerCount, char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listenerCount = this.listenerCount(event);
                        if (listenerCount > 0) {
                            return [2 /*return*/];
                        }
                        if (!(event === "temperaturechanged")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.getCharacteristic(TemperatureCharacteristic.temperature)];
                    case 1:
                        char = _a.sent();
                        char.removeEventListener("characteristicvaluechanged", this.temperatureChangedHandler.bind(this));
                        return [4 /*yield*/, char.stopNotifications()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TemperatureService.prototype.temperatureChangedHandler = function (event) {
        var view = event.target.value;
        this.dispatchEvent("temperaturechanged", view.getInt8(0));
    };
    return TemperatureService;
}(eventDispatcher.EventDispatcher));
exports.TemperatureService = TemperatureService;


});

unwrapExports(temperature);
var temperature_1 = temperature.TemperatureUuid;
var temperature_2 = temperature.TemperatureCharacteristic;
var temperature_3 = temperature.TemperatureService;

var accelerometer = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * @hidden
 */
exports.AccelerometerUuid = "e95d0753-251d-470a-a062-fa1922dfa9a8";
/**
 * @hidden
 */
var AccelerometerCharacteristic;
(function (AccelerometerCharacteristic) {
    AccelerometerCharacteristic["accelerometerData"] = "e95dca4b-251d-470a-a062-fa1922dfa9a8";
    AccelerometerCharacteristic["accelerometerPeriod"] = "e95dfb24-251d-470a-a062-fa1922dfa9a8";
})(AccelerometerCharacteristic = exports.AccelerometerCharacteristic || (exports.AccelerometerCharacteristic = {}));
var AccelerometerService = /** @class */ (function (_super) {
    __extends(AccelerometerService, _super);
    function AccelerometerService(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.on("newListener", _this.onNewListener.bind(_this));
        _this.on("removeListener", _this.onRemoveListener.bind(_this));
        return _this;
    }
    AccelerometerService.createService = function (services) {
        var found = services.find(function (service) { return service.uuid === exports.AccelerometerUuid; });
        if (found) {
            return new AccelerometerService(found);
        }
        return undefined;
    };
    AccelerometerService.prototype.readAccelerometerData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(AccelerometerCharacteristic.accelerometerData)];
                    case 1:
                        view = _a.sent();
                        return [2 /*return*/, this.dataViewToAccelerometerData(view)];
                }
            });
        });
    };
    AccelerometerService.prototype.getAccelerometerPeriod = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(AccelerometerCharacteristic.accelerometerPeriod)];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, value.getUint16(0, true)];
                }
            });
        });
    };
    AccelerometerService.prototype.setAccelerometerPeriod = function (frequency) {
        return __awaiter(this, void 0, void 0, function () {
            var char, view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(AccelerometerCharacteristic.accelerometerPeriod)];
                    case 1:
                        char = _a.sent();
                        view = new DataView(new ArrayBuffer(2));
                        view.setUint16(0, frequency, true);
                        return [2 /*return*/, char.writeValue(view)];
                }
            });
        });
    };
    AccelerometerService.prototype.getCharacteristValue = function (characteristic) {
        return __awaiter(this, void 0, void 0, function () {
            var char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(characteristic)];
                    case 1:
                        char = _a.sent();
                        return [4 /*yield*/, char.readValue()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AccelerometerService.prototype.onNewListener = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var listenerCount, char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listenerCount = this.listenerCount(event);
                        if (listenerCount > 0) {
                            return [2 /*return*/];
                        }
                        if (!(event === "accelerometerdatachanged")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.getCharacteristic(AccelerometerCharacteristic.accelerometerData)];
                    case 1:
                        char = _a.sent();
                        char.addEventListener("characteristicvaluechanged", this.accelerometerDataChangedHandler.bind(this));
                        return [4 /*yield*/, char.startNotifications()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccelerometerService.prototype.onRemoveListener = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var listenerCount, char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listenerCount = this.listenerCount(event);
                        if (listenerCount > 0) {
                            return [2 /*return*/];
                        }
                        if (!(event === "accelerometerdatachanged")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.getCharacteristic(AccelerometerCharacteristic.accelerometerData)];
                    case 1:
                        char = _a.sent();
                        char.removeEventListener("characteristicvaluechanged", this.accelerometerDataChangedHandler.bind(this));
                        return [4 /*yield*/, char.stopNotifications()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccelerometerService.prototype.accelerometerDataChangedHandler = function (event) {
        var view = event.target.value;
        var value = this.dataViewToAccelerometerData(view);
        this.dispatchEvent("accelerometerdatachanged", value);
    };
    AccelerometerService.prototype.dataViewToAccelerometerData = function (view) {
        return {
            x: view.getInt16(0, true) / 1000.0,
            y: view.getInt16(1, true) / 1000.0,
            z: view.getInt16(2, true) / 1000.0
        };
    };
    return AccelerometerService;
}(eventDispatcher.EventDispatcher));
exports.AccelerometerService = AccelerometerService;


});

unwrapExports(accelerometer);
var accelerometer_1 = accelerometer.AccelerometerUuid;
var accelerometer_2 = accelerometer.AccelerometerCharacteristic;
var accelerometer_3 = accelerometer.AccelerometerService;

var magnetometer = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * @hidden
 */
exports.MagnetometerUuid = "e95df2d8-251d-470a-a062-fa1922dfa9a8";
/**
 * @hidden
 */
var MagnetometerCharacteristic;
(function (MagnetometerCharacteristic) {
    MagnetometerCharacteristic["magnetometerData"] = "e95dfb11-251d-470a-a062-fa1922dfa9a8";
    MagnetometerCharacteristic["magnetometerPeriod"] = "e95d386c-251d-470a-a062-fa1922dfa9a8";
    MagnetometerCharacteristic["magnetometerBearing"] = "e95d9715-251d-470a-a062-fa1922dfa9a8";
    MagnetometerCharacteristic["magnetometerCalibration"] = "e95db358-251d-470a-a062-fa1922dfa9a8";
})(MagnetometerCharacteristic = exports.MagnetometerCharacteristic || (exports.MagnetometerCharacteristic = {}));
var MagnetometerService = /** @class */ (function (_super) {
    __extends(MagnetometerService, _super);
    function MagnetometerService(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.on("newListener", _this.onNewListener.bind(_this));
        _this.on("removeListener", _this.onRemoveListener.bind(_this));
        return _this;
    }
    MagnetometerService.createService = function (services) {
        var found = services.find(function (service) { return service.uuid === exports.MagnetometerUuid; });
        if (found) {
            return new MagnetometerService(found);
        }
        return undefined;
    };
    MagnetometerService.prototype.readMagnetometerData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(MagnetometerCharacteristic.magnetometerData)];
                    case 1:
                        view = _a.sent();
                        return [2 /*return*/, this.dataViewToMagnetometerData(view)];
                }
            });
        });
    };
    MagnetometerService.prototype.getMagnetometerBearing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(MagnetometerCharacteristic.magnetometerBearing)];
                    case 1:
                        view = _a.sent();
                        if (view.byteLength === 2) {
                            return [2 /*return*/, view.getUint16(0, true)];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    MagnetometerService.prototype.getMagnetometerPeriod = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(MagnetometerCharacteristic.magnetometerPeriod)];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, value.getUint16(0, true)];
                }
            });
        });
    };
    MagnetometerService.prototype.setMagnetometerPeriod = function (frequency) {
        return __awaiter(this, void 0, void 0, function () {
            var char, view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(MagnetometerCharacteristic.magnetometerPeriod)];
                    case 1:
                        char = _a.sent();
                        view = new DataView(new ArrayBuffer(2));
                        view.setUint16(0, frequency, true);
                        return [2 /*return*/, char.writeValue(view)];
                }
            });
        });
    };
    MagnetometerService.prototype.getCharacteristValue = function (characteristic) {
        return __awaiter(this, void 0, void 0, function () {
            var char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(characteristic)];
                    case 1:
                        char = _a.sent();
                        return [4 /*yield*/, char.readValue()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MagnetometerService.prototype.onNewListener = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var listenerCount, char, char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listenerCount = this.listenerCount(event);
                        if (listenerCount > 0) {
                            return [2 /*return*/];
                        }
                        if (!(event === "magnetometerdatachanged")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.getCharacteristic(MagnetometerCharacteristic.magnetometerData)];
                    case 1:
                        char = _a.sent();
                        char.addEventListener("characteristicvaluechanged", this.magnetometerDataChangedHandler.bind(this));
                        return [4 /*yield*/, char.startNotifications()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(event === "magnetometerbearingchanged")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.service.getCharacteristic(MagnetometerCharacteristic.magnetometerBearing)];
                    case 4:
                        char = _a.sent();
                        char.addEventListener("characteristicvaluechanged", this.magnetometerBearingChangedHandler.bind(this));
                        return [4 /*yield*/, char.startNotifications()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    MagnetometerService.prototype.onRemoveListener = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var listenerCount, char, char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listenerCount = this.listenerCount(event);
                        if (listenerCount > 0) {
                            return [2 /*return*/];
                        }
                        if (!(event === "magnetometerdatachanged")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.getCharacteristic(MagnetometerCharacteristic.magnetometerData)];
                    case 1:
                        char = _a.sent();
                        char.removeEventListener("characteristicvaluechanged", this.magnetometerDataChangedHandler.bind(this));
                        return [4 /*yield*/, char.stopNotifications()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(event === "magnetometerbearingchanged")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.service.getCharacteristic(MagnetometerCharacteristic.magnetometerBearing)];
                    case 4:
                        char = _a.sent();
                        char.removeEventListener("characteristicvaluechanged", this.magnetometerBearingChangedHandler.bind(this));
                        return [4 /*yield*/, char.stopNotifications()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    MagnetometerService.prototype.magnetometerDataChangedHandler = function (event) {
        var view = event.target.value;
        var value = this.dataViewToMagnetometerData(view);
        this.dispatchEvent("magnetometerdatachanged", value);
    };
    MagnetometerService.prototype.magnetometerBearingChangedHandler = function (event) {
        var view = event.target.value;
        if (view.byteLength === 2) {
            this.dispatchEvent("magnetometerbearingchanged", view.getUint16(0, true));
        }
    };
    MagnetometerService.prototype.dataViewToMagnetometerData = function (view) {
        return {
            x: view.getInt16(0, true),
            y: view.getInt16(1, true),
            z: view.getInt16(2, true)
        };
    };
    return MagnetometerService;
}(eventDispatcher.EventDispatcher));
exports.MagnetometerService = MagnetometerService;


});

unwrapExports(magnetometer);
var magnetometer_1 = magnetometer.MagnetometerUuid;
var magnetometer_2 = magnetometer.MagnetometerCharacteristic;
var magnetometer_3 = magnetometer.MagnetometerService;

var ioPin = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
exports.IoPinUuid = "e95d127b-251d-470a-a062-fa1922dfa9a8";
/**
 * @hidden
 */
var IoPinCharacteristic;
(function (IoPinCharacteristic) {
    IoPinCharacteristic["pinData"] = "e95d8d00-251d-470a-a062-fa1922dfa9a8";
    IoPinCharacteristic["pinAdConfiguration"] = "e95d5899-251d-470a-a062-fa1922dfa9a8";
    IoPinCharacteristic["pinIoConfiguration"] = "e95db9fe-251d-470a-a062-fa1922dfa9a8";
    IoPinCharacteristic["pwmControl"] = "e95dd822-251d-470a-a062-fa1922dfa9a8";
})(IoPinCharacteristic = exports.IoPinCharacteristic || (exports.IoPinCharacteristic = {}));


});

unwrapExports(ioPin);
var ioPin_1 = ioPin.IoPinUuid;
var ioPin_2 = ioPin.IoPinCharacteristic;

var uart = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
exports.UartUuid = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
/**
 * @hidden
 */
var UartCharacteristic;
(function (UartCharacteristic) {
    UartCharacteristic["tx"] = "6e400002-b5a3-f393-e0a9-e50e24dcca9e";
    UartCharacteristic["rx"] = "6e400003-b5a3-f393-e0a9-e50e24dcca9e";
})(UartCharacteristic = exports.UartCharacteristic || (exports.UartCharacteristic = {}));


});

unwrapExports(uart);
var uart_1 = uart.UartUuid;
var uart_2 = uart.UartCharacteristic;

var event = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * @hidden
 */
exports.EventUuid = "e95d93af-251d-470a-a062-fa1922dfa9a8";
/**
 * @hidden
 */
var EventCharacteristic;
(function (EventCharacteristic) {
    EventCharacteristic["microBitRequirements"] = "e95db84c-251d-470a-a062-fa1922dfa9a8";
    EventCharacteristic["microBitEvent"] = "e95d9775-251d-470a-a062-fa1922dfa9a8";
    EventCharacteristic["clientRequirements"] = "e95d23c4-251d-470a-a062-fa1922dfa9a8";
    EventCharacteristic["clientEvent"] = "e95d5404-251d-470a-a062-fa1922dfa9a8";
})(EventCharacteristic = exports.EventCharacteristic || (exports.EventCharacteristic = {}));
var EventService = /** @class */ (function (_super) {
    __extends(EventService, _super);
    function EventService(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.on("newListener", _this.onNewListener.bind(_this));
        _this.on("removeListener", _this.onRemoveListener.bind(_this));
        return _this;
    }
    EventService.createService = function (services) {
        var found = services.find(function (service) { return service.uuid === exports.EventUuid; });
        if (found) {
            return new EventService(found);
        }
        return undefined;
    };
    EventService.prototype.getMicrobitRequirements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(EventCharacteristic.microBitRequirements)];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, this.viewToMicrobitEvent(value)];
                }
            });
        });
    };
    EventService.prototype.setClientRequirements = function (type, value) {
        return __awaiter(this, void 0, void 0, function () {
            var char, view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(EventCharacteristic.clientRequirements)];
                    case 1:
                        char = _a.sent();
                        view = new DataView(new ArrayBuffer(4));
                        view.setUint16(0, type, true);
                        view.setUint16(1, value, true);
                        return [2 /*return*/, char.writeValue(view)];
                }
            });
        });
    };
    EventService.prototype.readMicrobitEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCharacteristValue(EventCharacteristic.microBitEvent)];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, this.viewToMicrobitEvent(value)];
                }
            });
        });
    };
    EventService.prototype.writeClientEvent = function (type, value) {
        return __awaiter(this, void 0, void 0, function () {
            var char, view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(EventCharacteristic.clientEvent)];
                    case 1:
                        char = _a.sent();
                        view = new DataView(new ArrayBuffer(4));
                        view.setUint16(0, type, true);
                        view.setUint16(1, value, true);
                        return [2 /*return*/, char.writeValue(view)];
                }
            });
        });
    };
    EventService.prototype.getCharacteristValue = function (characteristic) {
        return __awaiter(this, void 0, void 0, function () {
            var char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getCharacteristic(characteristic)];
                    case 1:
                        char = _a.sent();
                        return [4 /*yield*/, char.readValue()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventService.prototype.onNewListener = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var listenerCount, char, char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listenerCount = this.listenerCount(event);
                        if (listenerCount > 0) {
                            return [2 /*return*/];
                        }
                        if (!(event === "microbitevent")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.getCharacteristic(EventCharacteristic.microBitEvent)];
                    case 1:
                        char = _a.sent();
                        char.addEventListener("characteristicvaluechanged", this.eventHandler.bind(this));
                        return [4 /*yield*/, char.startNotifications()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(event === "microbitrequirementschanged")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.service.getCharacteristic(EventCharacteristic.microBitRequirements)];
                    case 4:
                        char = _a.sent();
                        char.addEventListener("characteristicvaluechanged", this.microbitRequirementsChangedHandler.bind(this));
                        return [4 /*yield*/, char.startNotifications()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EventService.prototype.onRemoveListener = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var listenerCount, char, char;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listenerCount = this.listenerCount(event);
                        if (listenerCount > 0) {
                            return [2 /*return*/];
                        }
                        if (!(event === "microbitevent")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.getCharacteristic(EventCharacteristic.microBitEvent)];
                    case 1:
                        char = _a.sent();
                        char.removeEventListener("characteristicvaluechanged", this.eventHandler.bind(this));
                        return [4 /*yield*/, char.stopNotifications()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(event === "microbitrequirementschanged")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.service.getCharacteristic(EventCharacteristic.microBitRequirements)];
                    case 4:
                        char = _a.sent();
                        char.removeEventListener("characteristicvaluechanged", this.microbitRequirementsChangedHandler.bind(this));
                        return [4 /*yield*/, char.stopNotifications()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EventService.prototype.microbitRequirementsChangedHandler = function (event) {
        var view = event.target.value;
        var microbitEvent = this.viewToMicrobitEvent(view);
        this.dispatchEvent("microbitrequirementschanged", microbitEvent);
    };
    EventService.prototype.eventHandler = function (event) {
        var view = event.target.value;
        var microbitEvent = this.viewToMicrobitEvent(view);
        this.dispatchEvent("microbitevent", microbitEvent);
    };
    EventService.prototype.viewToMicrobitEvent = function (view) {
        var type = view.getUint16(0, true);
        var value = view.getUint16(1, true);
        return {
            type: type,
            value: value
        };
    };
    return EventService;
}(eventDispatcher.EventDispatcher));
exports.EventService = EventService;


});

unwrapExports(event);
var event_1 = event.EventUuid;
var event_2 = event.EventCharacteristic;
var event_3 = event.EventService;

var dfuControl = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
exports.DfuUuid = "e95d93b0-251d-470a-a062-fa1922dfa9a8";
/**
 * @hidden
 */
var DfuCharacteristic;
(function (DfuCharacteristic) {
    DfuCharacteristic["dfuControl"] = "e95d93b1-251d-470a-a062-fa1922dfa9a8";
})(DfuCharacteristic = exports.DfuCharacteristic || (exports.DfuCharacteristic = {}));


});

unwrapExports(dfuControl);
var dfuControl_1 = dfuControl.DfuUuid;
var dfuControl_2 = dfuControl.DfuCharacteristic;

var microbit = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = commonjsGlobal;
Object.defineProperty(exports, "__esModule", { value: true });










exports.requestMicrobit = function (bluetooth) { return __awaiter(_this, void 0, void 0, function () {
    var device;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bluetooth.requestDevice({
                    filters: [
                        {
                            namePrefix: "BBC micro:bit"
                        }
                    ],
                    optionalServices: [
                        deviceInformation.DeviceInformationUuid,
                        button.ButtonUuid,
                        led.LedUuid,
                        temperature.TemperatureUuid,
                        accelerometer.AccelerometerUuid,
                        magnetometer.MagnetometerUuid,
                        ioPin.IoPinUuid,
                        uart.UartUuid,
                        event.EventUuid,
                        dfuControl.DfuUuid
                    ]
                })];
            case 1:
                device = _a.sent();
                if (!device)
                    return [2 /*return*/, undefined];
                if (!device.gatt) return [3 /*break*/, 3];
                return [4 /*yield*/, device.gatt.connect()];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, device];
        }
    });
}); };
exports.getServices = function (device) { return __awaiter(_this, void 0, void 0, function () {
    var services, microbitServices;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, device.gatt.getPrimaryServices()];
            case 1:
                services = _a.sent();
                microbitServices = {
                    deviceInformationService: deviceInformation.DeviceInformationService.createService(services),
                    buttonService: button.ButtonService.createService(services),
                    ledService: led.LedService.createService(services),
                    temperatureService: temperature.TemperatureService.createService(services),
                    accelerometerService: accelerometer.AccelerometerService.createService(services),
                    magnetometerService: magnetometer.MagnetometerService.createService(services),
                    eventService: event.EventService.createService(services)
                };
                return [2 /*return*/, microbitServices];
        }
    });
}); };


});

unwrapExports(microbit);
var microbit_1 = microbit.requestMicrobit;
var microbit_2 = microbit.getServices;

var lib = createCommonjsModule(function (module, exports) {
/*
* micro:bit Web Bluetooth
* Copyright (c) 2019 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(microbit);


});

unwrapExports(lib);
var lib_1 = lib.getServices;
var lib_2 = lib.requestMicrobit;

class MicrobitConnect {
    constructor() {
        this.device = undefined;
        this.connectLabel = "Connect";
        this.disconnectLabel = "Disconnect";
    }
    render() {
        return (h("button", { onClick: () => this.connectDisconnect() }, this.getLabel()));
    }
    getLabel() {
        return this.device ? this.disconnectLabel : this.connectLabel;
    }
    async connectDisconnect() {
        if (this.device) {
            if (this.device.gatt.connected) {
                await this.device.gatt.disconnect();
            }
            this.setDevice(undefined);
            this.setServices(undefined);
            this.setDeviceInformation(undefined);
            return;
        }
        const device = await lib_2(window.navigator.bluetooth);
        if (device) {
            this.setDevice(device);
            const services = await lib_1(device);
            this.setServices(services);
            if (services.deviceInformationService) {
                const deviceInformation = await services.deviceInformationService.readDeviceInformation();
                this.setDeviceInformation(deviceInformation);
            }
        }
    }
    static get is() { return "microbit-connect"; }
    static get properties() { return {
        "connectLabel": {
            "type": String,
            "attr": "connect-label"
        },
        "device": {
            "type": "Any",
            "attr": "device"
        },
        "disconnectLabel": {
            "type": String,
            "attr": "disconnect-label"
        },
        "el": {
            "elementRef": true
        },
        "setDevice": {
            "type": "Any",
            "attr": "set-device"
        },
        "setDeviceInformation": {
            "type": "Any",
            "attr": "set-device-information"
        },
        "setServices": {
            "type": "Any",
            "attr": "set-services"
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitConnect, ['device', 'setDevice', 'setServices', 'setDeviceInformation']);

export { MicrobitConnect };
