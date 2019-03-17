import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-d2120d7f.js';

class MicrobitApp {
    constructor() {
        this.device = undefined;
        this.services = undefined;
        this.setDevice = (device) => {
            this.device = device;
        };
        this.setServices = (services) => {
            this.services = services;
        };
    }
    render() {
        const deviceState = {
            device: this.device,
            services: this.services,
            setDevice: this.setDevice,
            setServices: this.setServices
        };
        return (h(DeviceTunnel.Provider, { state: deviceState },
            h("slot", null)));
    }
    static get is() { return "microbit-app"; }
    static get properties() { return {
        "device": {
            "state": true
        },
        "services": {
            "state": true
        }
    }; }
}

export { MicrobitApp };
