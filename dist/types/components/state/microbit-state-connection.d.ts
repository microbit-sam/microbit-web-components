import '../../stencil.core';
/// <reference types="web-bluetooth" />
export declare class MicrobitStateConnection {
    el: any;
    device: BluetoothDevice;
    /**
     * The css class to use when connected
     */
    connectedClass: string;
    /**
     * The css class to use when disconnected
     */
    disconnectedClass: string;
    render(): JSX.Element;
}
