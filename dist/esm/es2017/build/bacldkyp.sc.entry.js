import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-3d8ed500.js';

class MicrobitStateMovement {
    constructor() {
        this.services = undefined;
        this.sensitivity = 1;
        this.frequency = 20;
        this.stillClass = "microbit-still";
        this.movedClass = "microbit-moved";
        this.className = this.stillClass;
    }
    async watchHandler() {
        if (!this.services || !this.services.accelerometerService) {
            this.className = this.stillClass;
            return;
        }
        const service = this.services.accelerometerService;
        await service.setAccelerometerPeriod(this.frequency);
        const data = await service.readAccelerometerData();
        this.setClassName(data);
        service.addEventListener("accelerometerdatachanged", event => this.setClassName(event.detail));
    }
    render() {
        return (h("span", { class: this.className },
            h("slot", null)));
    }
    setClassName(data) {
        this.className =
            (Math.abs(data.x) > this.sensitivity
                || Math.abs(data.y) > this.sensitivity
                || Math.abs(data.z) > this.sensitivity) ? this.movedClass
                : this.stillClass;
    }
    static get is() { return "microbit-state-movement"; }
    static get properties() { return {
        "className": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "frequency": {
            "type": Number,
            "attr": "frequency"
        },
        "movedClass": {
            "type": String,
            "attr": "moved-class"
        },
        "sensitivity": {
            "type": Number,
            "attr": "sensitivity"
        },
        "services": {
            "type": "Any",
            "attr": "services",
            "watchCallbacks": ["watchHandler"]
        },
        "stillClass": {
            "type": String,
            "attr": "still-class"
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitStateMovement, ['services']);

export { MicrobitStateMovement };
