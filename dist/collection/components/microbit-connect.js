import { requestMicrobit, getServices } from "microbit-web-bluetooth";
import DeviceTunnel from '../data/device-tunnel';
export class MicrobitConnect {
    constructor() {
        this.device = undefined;
        this.connectLabel = "Connect";
        this.disconnectLabel = "Disconnect";
    }
    render() {
        return (h("button", { onClick: () => this.connectDisconnect() }, this.getLabel()));
    }
    getLabel() {
        return this.device ? this.disconnectLabel : this.connectLabel;
    }
    async connectDisconnect() {
        if (this.device) {
            if (this.device.gatt.connected) {
                await this.device.gatt.disconnect();
            }
            this.setDevice(undefined);
            this.setServices(undefined);
            return;
        }
        const device = await requestMicrobit(window.navigator.bluetooth);
        if (device) {
            this.setDevice(device);
            const services = await getServices(device);
            this.setServices(services);
        }
    }
    static get is() { return "microbit-connect"; }
    static get properties() { return {
        "connectLabel": {
            "type": String,
            "attr": "connect-label"
        },
        "device": {
            "type": "Any",
            "attr": "device"
        },
        "disconnectLabel": {
            "type": String,
            "attr": "disconnect-label"
        },
        "el": {
            "elementRef": true
        },
        "setDevice": {
            "type": "Any",
            "attr": "set-device"
        },
        "setServices": {
            "type": "Any",
            "attr": "set-services"
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitConnect, ['device', 'setDevice', 'setServices']);
