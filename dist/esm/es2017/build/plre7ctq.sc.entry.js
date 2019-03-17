import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-3d8ed500.js';

class MicrobitText {
    constructor() {
        this.services = undefined;
        this.buttonText = "Write";
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
        return (h("form", { onSubmit: e => this.handleSubmit(e) },
            h("input", { type: "input", disabled: this.disabled, maxLength: 20, onChange: text => this.handleChange(text) }),
            h("input", { type: "submit", disabled: this.disabled, value: this.buttonText })));
    }
    handleChange(event) {
        this.text = event.target.value;
    }
    handleSubmit(event) {
        event.preventDefault();
        this.services.ledService.writeText(this.text);
    }
    static get is() { return "microbit-text"; }
    static get properties() { return {
        "buttonText": {
            "type": String,
            "attr": "button-text"
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
