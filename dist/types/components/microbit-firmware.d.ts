import '../stencil.core';
import { Services } from "microbit-web-bluetooth";
export declare class MicrobitFirmware {
    /**
     * The text shown when disconnected
     */
    disconnectedText: string;
    /**
     * The text shown when no firmware info
     */
    noInfo: string;
    el: any;
    services: Services;
    info: string;
    watchHandler(): Promise<void>;
    render(): JSX.Element;
}
