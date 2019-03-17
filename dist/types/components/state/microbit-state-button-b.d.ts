import '../../stencil.core';
import { Services } from "microbit-web-bluetooth";
export declare class MicrobitStateButtonB {
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
    watchHandler(): void;
    render(): JSX.Element;
}
