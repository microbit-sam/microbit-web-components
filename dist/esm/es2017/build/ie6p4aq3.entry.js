import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-3d8ed500.js';

class MicrobitText {
    constructor() {
        this.services = undefined;
        this.buttonLabel = "";
        this.scrollDelay = 100;
        this.disabled = true;
        this.text = "";
    }
    async watchHandler() {
        this.disabled = !this.services || !this.services.ledService;
        if (this.services && this.services.ledService) {
            await this.services.ledService.setScrollingDelay(this.scrollDelay);
        }
    }
    render() {
        let button;
        if (this.buttonLabel) {
            button = h("input", { type: "submit", disabled: this.disabled, value: this.buttonLabel, onClick: () => this.writeText() });
        }
        return (h("span", null,
            h("input", { type: "input", disabled: this.disabled, maxLength: 20, onKeyPress: e => this.handleKeyPress(e) }),
            button));
    }
    handleKeyPress(event) {
        if (event.keyCode == 13) {
            this.writeText();
        }
        else {
            this.text = event.target.value;
        }
    }
    async writeText() {
        await this.services.ledService.writeText(this.text);
    }
    static get is() { return "microbit-text"; }
    static get properties() { return {
        "buttonLabel": {
            "type": String,
            "attr": "button-label"
        },
        "disabled": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "scrollDelay": {
            "type": Number,
            "attr": "scroll-delay"
        },
        "services": {
            "type": "Any",
            "attr": "services",
            "watchCallbacks": ["watchHandler"]
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitText, ['services']);

export { MicrobitText };
