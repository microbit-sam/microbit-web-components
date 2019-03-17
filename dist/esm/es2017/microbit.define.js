
// microbit: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './microbit.core.js';
import { COMPONENTS } from './microbit.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
