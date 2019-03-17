import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-d2120d7f.js';

class MicrobitFirmware {
    constructor() {
        this.disconnectedText = "Disconnected";
        this.noInfo = "No firmware info found";
        this.services = undefined;
        this.info = this.disconnectedText;
    }
    async watchHandler() {
        if (!this.services) {
            this.info = this.disconnectedText;
            return;
        }
        const service = this.services.deviceInformationService;
        if (!service) {
            this.info = this.noInfo;
            return;
        }
        const info = await service.readDeviceInformation();
        this.info = info.firmwareRevision || this.noInfo;
    }
    render() {
        return (h("div", null, this.info));
    }
    static get is() { return "microbit-firmware"; }
    static get properties() { return {
        "disconnectedText": {
            "type": String,
            "attr": "disconnected-text"
        },
        "el": {
            "elementRef": true
        },
        "info": {
            "state": true
        },
        "noInfo": {
            "type": String,
            "attr": "no-info"
        },
        "services": {
            "type": "Any",
            "attr": "services",
            "watchCallbacks": ["watchHandler"]
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitFirmware, ['services']);

export { MicrobitFirmware };
