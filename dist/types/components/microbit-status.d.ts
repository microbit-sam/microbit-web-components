import '../stencil.core';
/// <reference types="web-bluetooth" />
export declare class MicrobitStatus {
    el: any;
    device: BluetoothDevice;
    /**
     * The text shown when connected
     */
    connectedText: string;
    /**
     * The text shown when disconnected
     */
    disconnectedText: string;
    render(): JSX.Element;
    private getText;
}
