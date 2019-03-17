import '../stencil.core';
import { Services } from "microbit-web-bluetooth";
export declare class MicrobitTemperature {
    el: any;
    services: Services;
    /**
     * The interval to check the temperature (ms)
     */
    temperaturePeriod: number;
    /**
     * The text shown when disconnected
     */
    disconnectedText: string;
    /**
     * The text shown when no temperature
     */
    noTemperature: string;
    temperature: string;
    watchHandler(): Promise<void>;
    render(): JSX.Element;
}
