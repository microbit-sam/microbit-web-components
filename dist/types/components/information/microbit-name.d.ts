import '../../stencil.core';
/// <reference types="web-bluetooth" />
export declare class MicrobitName {
    el: any;
    device: BluetoothDevice;
    /**
     * The text shown when disconnected
     */
    disconnectedText: string;
    render(): JSX.Element;
    private getText;
}
