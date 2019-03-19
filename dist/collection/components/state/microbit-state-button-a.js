import DeviceTunnel from '../../device-tunnel';
export class MicrobitStateButtonA {
    constructor() {
        this.services = undefined;
        this.releaseClass = "microbit-release";
        this.shortPressClass = "microbit-short-press";
        this.longPressClass = "microbit-long-press";
        this.className = this.releaseClass;
    }
    async watchHandler() {
        if (!this.services || !this.services.buttonService) {
            this.className = this.releaseClass;
            return;
        }
        const service = this.services.buttonService;
        const state = await service.readButtonAState();
        this.setClassName(state);
        service.addEventListener("buttonastatechanged", event => this.setClassName(event.detail));
    }
    render() {
        return (h("span", { class: this.className },
            h("slot", null)));
    }
    setClassName(state) {
        this.className = state === 1 ? this.shortPressClass
            : state === 2 ? this.longPressClass
                : this.releaseClass;
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
