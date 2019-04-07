import DeviceTunnel from '../device-tunnel';
export class MicrobitCalibrate {
    constructor() {
        this.services = undefined;
        this.calibrateLabel = "Calibrate";
        this.disabled = true;
    }
    async watchHandler() {
        this.disabled = !this.services || !this.services.magnetometerService;
    }
    render() {
        return (h("button", { disabled: this.disabled, onClick: () => this.calibrate() }, this.calibrateLabel));
    }
    async calibrate() {
    }
    static get is() { return "microbit-calibrate"; }
    static get properties() { return {
        "calibrateLabel": {
            "type": String,
            "attr": "calibrate-label"
        },
        "disabled": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "services": {
            "type": "Any",
            "attr": "services",
            "watchCallbacks": ["watchHandler"]
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitCalibrate, ['services']);
