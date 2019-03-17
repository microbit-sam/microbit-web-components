"use strict";
// microbit: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var microbit_core_js_1 = require("./microbit.core.js");
var microbit_components_js_1 = require("./microbit.components.js");
function defineCustomElements(win, opts) {
    return microbit_core_js_1.defineCustomElement(win, microbit_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
