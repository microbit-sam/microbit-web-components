import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-3d8ed500.js';

class MicrobitStateConnection {
    constructor() {
        this.device = undefined;
        this.connectedClass = "microbit-connected";
        this.disconnectedClass = "microbit-disconnected";
    }
    render() {
        const className = this.device ? this.connectedClass : this.disconnectedClass;
        return (h("span", { class: className },
            h("slot", null)));
    }
    static get is() { return "microbit-state-connection"; }
    static get properties() { return {
        "connectedClass": {
            "type": String,
            "attr": "connected-class"
        },
        "device": {
            "type": "Any",
            "attr": "device"
        },
        "disconnectedClass": {
            "type": String,
            "attr": "disconnected-class"
        },
        "el": {
            "elementRef": true
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitStateConnection, ['device']);

export { MicrobitStateConnection };
