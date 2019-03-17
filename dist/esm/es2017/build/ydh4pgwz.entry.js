import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-3d8ed500.js';

class MicrobitApp {
    constructor() {
        this.device = undefined;
        this.services = undefined;
        this.deviceInformation = undefined;
        this.setDevice = (device) => {
            this.device = device;
        };
        this.setServices = (services) => {
            this.services = services;
        };
        this.setDeviceInformation = (deviceInformation) => {
            this.deviceInformation = deviceInformation;
        };
    }
    render() {
        const deviceState = {
            device: this.device,
            services: this.services,
            deviceInformation: this.deviceInformation,
            setDevice: this.setDevice,
            setServices: this.setServices,
            setDeviceInformation: this.setDeviceInformation
        };
        return (h(DeviceTunnel.Provider, { state: deviceState },
            h("slot", null)));
    }
    static get is() { return "microbit-app"; }
    static get properties() { return {
        "device": {
            "state": true
        },
        "deviceInformation": {
            "state": true
        },
        "services": {
            "state": true
        }
    }; }
}

export { MicrobitApp };
