import '../stencil.core';
import { Services } from "microbit-web-bluetooth";
export declare class MicrobitCalibrate {
    el: any;
    services: Services;
    /**
     * The button label to calibrate
     */
    calibrateLabel: string;
    disabled: boolean;
    watchHandler(): Promise<void>;
    render(): JSX.Element;
    private calibrate;
}
