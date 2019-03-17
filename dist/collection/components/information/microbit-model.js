import DeviceTunnel from '../../device-tunnel';
export class MicrobitModel {
    constructor() {
        this.deviceInformation = undefined;
        this.disconnectedText = "Disconnected";
        this.noInfo = "No model number found";
    }
    render() {
        return this.deviceInformation ? this.deviceInformation.modelNumber || this.noInfo : this.disconnectedText;
    }
    static get is() { return "microbit-model"; }
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
DeviceTunnel.injectProps(MicrobitModel, ['deviceInformation']);
