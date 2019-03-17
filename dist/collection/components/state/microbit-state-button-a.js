import DeviceTunnel from '../../device-tunnel';
export class MicrobitStateButtonA {
    constructor() {
        this.services = undefined;
        this.releaseClass = "microbit-release";
        this.shortPressClass = "microbit-short-press";
        this.longPressClass = "microbit-long-press";
        this.className = this.releaseClass;
    }
    watchHandler() {
        if (!this.services || !this.services.buttonService) {
            this.className = this.releaseClass;
            return;
        }
        const service = this.services.buttonService;
        service.addEventListener("buttonastatechanged", event => {
            this.className = event.detail === 1 ? this.shortPressClass
                : event.detail === 2 ? this.longPressClass
                    : this.releaseClass;
        });
    }
    render() {
        return (h("span", { class: this.className },
            h("slot", null)));
    }
    static get is() { return "microbit-state-button-a"; }
    static get properties() { return {
        "className": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "longPressClass": {
            "type": String,
            "attr": "long-press-class"
        },
        "releaseClass": {
            "type": String,
            "attr": "release-class"
        },
        "services": {
            "type": "Any",
            "attr": "services",
            "watchCallbacks": ["watchHandler"]
        },
        "shortPressClass": {
            "type": String,
            "attr": "short-press-class"
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitStateButtonA, ['services']);
