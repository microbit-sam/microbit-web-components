import DeviceTunnel from '../../device-tunnel';
export class MicrobitCompass {
    constructor() {
        this.services = undefined;
        this.bearing = 0;
    }
    async watchHandler() {
        if (!this.services || !this.services.magnetometerService) {
            return;
        }
        const service = this.services.magnetometerService;
        service.addEventListener("magnetometerbearingchanged", event => this.bearing = event.detail);
    }
    render() {
        const style = {
            position: "absolute",
            transform: `rotate(${this.bearing}deg)`
        };
        return (h("span", { style: style },
            h("slot", null)));
    }
    static get is() { return "microbit-compass"; }
    static get properties() { return {
        "bearing": {
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
DeviceTunnel.injectProps(MicrobitCompass, ['services']);
