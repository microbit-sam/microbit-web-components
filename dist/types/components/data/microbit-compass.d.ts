import '../../stencil.core';
import { Services } from "microbit-web-bluetooth";
export declare class MicrobitCompass {
    el: any;
    services: Services;
    bearing: number;
    watchHandler(): Promise<void>;
    render(): JSX.Element;
}
