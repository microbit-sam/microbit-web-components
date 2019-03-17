import DeviceTunnel from '../../device-tunnel';
export class MicrobitName {
    constructor() {
        this.device = undefined;
        this.disconnectedText = "Disconnected";
    }
    render() {
        return (h("div", null, this.getText()));
    }
    getText() {
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
