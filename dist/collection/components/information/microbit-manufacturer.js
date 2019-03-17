import DeviceTunnel from '../../device-tunnel';
export class MicrobitManufacturer {
    constructor() {
        this.deviceInformation = undefined;
        this.disconnectedText = "Disconnected";
        this.noInfo = "No manufacturer name found";
    }
    render() {
        return this.deviceInformation ? this.deviceInformation.manufacturer || this.noInfo : this.disconnectedText;
    }
    static get is() { return "microbit-manufacturer"; }
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
DeviceTunnel.injectProps(MicrobitManufacturer, ['deviceInformation']);
