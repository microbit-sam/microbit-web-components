import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-3d8ed500.js';

class MicrobitName {
    constructor() {
        this.device = undefined;
        this.disconnectedText = "Disconnected";
    }
    render() {
        return this.device ? this.device.name : this.disconnectedText;
    }
    static get is() { return "microbit-name"; }
    static get properties() { return {
        "device": {
            "type": "Any",
            "attr": "device"
        },
        "disconnectedText": {
            "type": String,
            "attr": "disconnected-text"
        },
        "el": {
            "elementRef": true
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitName, ['device']);

export { MicrobitName };
