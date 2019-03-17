import DeviceTunnel from '../../device-tunnel';
export class MicrobitSerial {
    constructor() {
        this.deviceInformation = undefined;
        this.disconnectedText = "Disconnected";
        this.noInfo = "No serial number found";
    }
    render() {
        return this.deviceInformation ? this.deviceInformation.serialNumber || this.noInfo : this.disconnectedText;
    }
    static get is() { return "microbit-serial"; }
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
DeviceTunnel.injectProps(MicrobitSerial, ['deviceInformation']);
