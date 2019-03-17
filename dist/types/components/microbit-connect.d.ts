import '../stencil.core';
/// <reference types="web-bluetooth" />
import { Services } from "microbit-web-bluetooth";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
export declare class MicrobitConnect {
    el: any;
    device: BluetoothDevice;
    setDevice: (device: BluetoothDevice) => void;
    setServices: (services: Services) => void;
    setDeviceInformation: (deviceInformation: DeviceInformation) => void;
    /**
     * The button label to connect
     */
    connectLabel: string;
    /**
     * The button label to disconnect
     */
    disconnectLabel: string;
    render(): JSX.Element;
    private getLabel;
    private connectDisconnect;
}
