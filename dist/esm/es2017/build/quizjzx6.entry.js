import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-3d8ed500.js';

class MicrobitTemperature {
    constructor() {
        this.services = undefined;
        this.temperaturePeriod = 100;
        this.disconnectedText = "Disconnected";
        this.noTemperature = "No temperature found";
        this.temperature = this.disconnectedText;
    }
    async watchHandler() {
        if (!this.services) {
            this.temperature = this.disconnectedText;
            return;
        }
        const service = this.services.temperatureService;
        if (!service) {
            this.temperature = this.noTemperature;
            return;
        }
        await service.setTemperaturePeriod(this.temperaturePeriod);
        service.addEventListener("temperaturechanged", temp => this.temperature = `${temp.detail}°c`);
    }
    render() {
        return this.temperature;
    }
    static get is() { return "microbit-temperature"; }
    static get properties() { return {
        "disconnectedText": {
            "type": String,
            "attr": "disconnected-text"
        },
        "el": {
            "elementRef": true
        },
        "noTemperature": {
            "type": String,
            "attr": "no-temperature"
        },
        "services": {
            "type": "Any",
            "attr": "services",
            "watchCallbacks": ["watchHandler"]
        },
        "temperature": {
            "state": true
        },
        "temperaturePeriod": {
            "type": Number,
            "attr": "temperature-period"
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitTemperature, ['services']);

export { MicrobitTemperature };
