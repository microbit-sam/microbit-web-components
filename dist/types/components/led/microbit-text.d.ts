import '../../stencil.core';
import { Services } from "microbit-web-bluetooth";
export declare class MicrobitText {
    el: any;
    services: Services;
    /**
     * The text shown on the button
     */
    buttonText: string;
    /**
     * The speed to scroll the text
     */
    scrollDelay: number;
    disabled: boolean;
    private text;
    watchHandler(): Promise<void>;
    render(): JSX.Element;
    private handleChange;
    private handleSubmit;
}
