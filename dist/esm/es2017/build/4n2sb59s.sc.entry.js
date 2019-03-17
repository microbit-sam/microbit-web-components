import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-d2120d7f.js';

class MicrobitStatus {
    constructor() {
        this.device = undefined;
        this.connectedText = "Connected to ${device}";
        this.disconnectedText = "Disconnected";
    }
    render() {
        return (h("div", null, this.getText()));
    }
    getText() {
        return this.device ? this.connectedText.replace('${device}', this.device.name) : this.disconnectedText;
    }
    static get is() { return "microbit-status"; }
    static get properties() { return {
        "connectedText": {
            "type": String,
            "attr": "connected-text"
        },
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
DeviceTunnel.injectProps(MicrobitStatus, ['device', 'setDevice']);

export { MicrobitStatus };
