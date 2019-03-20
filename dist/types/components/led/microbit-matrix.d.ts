import { Services } from "microbit-web-bluetooth";
export declare class MicrobitMatrix {
    el: any;
    services: Services;
    /**
     * The template for identifying child LEDs
     */
    idTemplate: string;
    /**
     * The css class for off LEDs
     */
    offClass: string;
    /**
     * The css class for on LEDs
     */
    onClass: string;
    private matrix;
    private elements;
    watchHandler(): Promise<void>;
    private toggle;
    private updateMatrix;
}
