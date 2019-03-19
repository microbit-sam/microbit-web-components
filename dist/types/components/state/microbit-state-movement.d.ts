import '../../stencil.core';
import { Services } from "microbit-web-bluetooth";
export declare class MicrobitStateMovement {
    el: any;
    services: Services;
    /**
     * The sensitivity of the sensor
     */
    sensitivity: number;
    /**
     * The frequency to read the sensor
     */
    frequency: number;
    /**
     * The css class to use when still
     */
    stillClass: string;
    /**
     * The css class to use when moved
     */
    movedClass: string;
    className: string;
    watchHandler(): Promise<void>;
    render(): JSX.Element;
    private setClassName;
}
