import '../stencil.core';
/// <reference types="web-bluetooth" />
import { Services } from 'microbit-web-bluetooth';
export declare class MicrobitApp {
    device: BluetoothDevice;
    services: Services;
    setDevice: (device: BluetoothDevice) => void;
    setServices: (services: Services) => void;
    render(): JSX.Element;
}
