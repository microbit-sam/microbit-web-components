import '../stencil.core';
/// <reference types="web-bluetooth" />
import { Services } from 'microbit-web-bluetooth';
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
export declare class MicrobitApp {
    device: BluetoothDevice;
    services: Services;
    deviceInformation: DeviceInformation;
    setDevice: (device: BluetoothDevice) => void;
    setServices: (services: Services) => void;
    setDeviceInformation: (deviceInformation: DeviceInformation) => void;
    render(): JSX.Element;
}
