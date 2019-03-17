import './stencil.core';
/// <reference types="web-bluetooth" />
import { Services } from 'microbit-web-bluetooth';
import { DeviceInformation } from 'microbit-web-bluetooth/types/services/device-information';
export interface State {
    device: BluetoothDevice;
    services: Services;
    deviceInformation: DeviceInformation;
    setDevice?: (device: BluetoothDevice) => void;
    setServices?: (services: Services) => void;
    setDeviceInformation?: (deviceInformation: DeviceInformation) => void;
}
declare const _default: {
    Provider: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{
        state: State;
    }>;
    Consumer: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{}>;
    wrapConsumer: (childComponent: any, fieldList: ("services" | "device" | "deviceInformation" | "setDevice" | "setServices" | "setDeviceInformation")[]) => ({ children, ...props }: any) => JSX.Element;
    injectProps: (childComponent: any, fieldList: ("services" | "device" | "deviceInformation" | "setDevice" | "setServices" | "setDeviceInformation")[]) => void;
};
export default _default;
