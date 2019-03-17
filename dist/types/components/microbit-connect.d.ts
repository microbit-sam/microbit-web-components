import '../stencil.core';
/// <reference types="web-bluetooth" />
import { Services } from "microbit-web-bluetooth";
export declare class MicrobitConnect {
    el: any;
    device: BluetoothDevice;
    setDevice: (device: BluetoothDevice) => void;
    setServices: (services: Services) => void;
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
