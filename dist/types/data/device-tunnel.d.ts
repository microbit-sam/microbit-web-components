import '../stencil.core';
/// <reference types="web-bluetooth" />
import { Services } from 'microbit-web-bluetooth';
export interface State {
    device: BluetoothDevice;
    services: Services;
    setDevice?: (device: BluetoothDevice) => void;
    setServices?: (services: Services) => void;
}
declare const _default: {
    Provider: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{
        state: State;
    }>;
    Consumer: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{}>;
    wrapConsumer: (childComponent: any, fieldList: ("device" | "services" | "setDevice" | "setServices")[]) => ({ children, ...props }: any) => JSX.Element;
    injectProps: (childComponent: any, fieldList: ("device" | "services" | "setDevice" | "setServices")[]) => void;
};
export default _default;
