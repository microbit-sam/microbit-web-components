import DeviceTunnel from '../../device-tunnel';
export class MicrobitHardware {
    constructor() {
        this.deviceInformation = undefined;
        this.disconnectedText = "Disconnected";
        this.noInfo = "No hardware version found";
    }
    render() {
        return this.deviceInformation ? this.deviceInformation.hardwareRevision || this.noInfo : this.disconnectedText;
    }
    static get is() { return "microbit-hardware"; }
    static get properties() { return {
        "deviceInformation": {
            "type": "Any",
            "attr": "device-information"
        },
        "disconnectedText": {
            "type": String,
            "attr": "disconnected-text"
        },
        "el": {
            "elementRef": true
        },
        "noInfo": {
            "type": String,
            "attr": "no-info"
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitHardware, ['deviceInformation']);
