import '../../stencil.core';
import { Services } from "microbit-web-bluetooth";
export declare class MicrobitStateButtonA {
    el: any;
    services: Services;
    /**
     * The css class to use when released
     */
    releaseClass: string;
    /**
     * The css class to use when short-pressed
     */
    shortPressClass: string;
    /**
     * The css class to use when long-pressed
     */
    longPressClass: string;
    className: string;
    watchHandler(): Promise<void>;
    render(): JSX.Element;
    private setClassName;
}
