import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-3d8ed500.js';

class MicrobitStateButtonB {
    constructor() {
        this.services = undefined;
        this.releaseClass = "microbit-release";
        this.shortPressClass = "microbit-short-press";
        this.longPressClass = "microbit-long-press";
        this.className = this.releaseClass;
    }
    async watchHandler() {
        if (!this.services || !this.services.buttonService) {
            this.className = this.releaseClass;
            return;
        }
        const service = this.services.buttonService;
        const state = await service.readButtonBState();
        this.setClassName(state);
        service.addEventListener("buttonbstatechanged", event => this.setClassName(event.detail));
    }
    render() {
        return (h("span", { class: this.className },
            h("slot", null)));
    }
    setClassName(state) {
        this.className = state === 1 ? this.shortPressClass
            : state === 2 ? this.longPressClass
                : this.releaseClass;
    }
    static get is() { return "microbit-state-button-b"; }
    static get properties() { return {
        "className": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "longPressClass": {
            "type": String,
            "attr": "long-press-class"
        },
        "releaseClass": {
            "type": String,
            "attr": "release-class"
        },
        "services": {
            "type": "Any",
            "attr": "services",
            "watchCallbacks": ["watchHandler"]
        },
        "shortPressClass": {
            "type": String,
            "attr": "short-press-class"
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitStateButtonB, ['services']);

export { MicrobitStateButtonB };
