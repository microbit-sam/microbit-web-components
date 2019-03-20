import { h } from '../microbit.core.js';

import { a as DeviceTunnel } from './chunk-3d8ed500.js';

class MicrobitMatrix {
    constructor() {
        this.services = undefined;
        this.idTemplate = "microbit-matrix-${row}-${column}";
        this.offClass = "microbit-matrix-off";
        this.onClass = "microbit-matrix-on";
    }
    async watchHandler() {
        const els = [[], [], [], [], []];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const id = this.idTemplate.replace("${row}", i.toString()).replace("${column}", j.toString());
                const led = document.getElementById(id);
                if (led) {
                    els[i][j] = led;
                    led.onclick = () => this.toggle(i, j);
                    led.classList.toggle(this.onClass, false);
                    led.classList.toggle(this.offClass, false);
                }
            }
        }
        this.elements = els;
        if (!this.services || !this.services.ledService) {
            return;
        }
        await this.updateMatrix();
    }
    render() {
        return h("div", null);
    }
    async toggle(row, column) {
        this.matrix[row][column] = !this.matrix[row][column];
        await this.services.ledService.setMatrixState(this.matrix);
        await this.updateMatrix();
    }
    async updateMatrix() {
        this.matrix = await this.services.ledService.getMatrixState();
        this.matrix.forEach((rows, row) => {
            rows.forEach((value, column) => {
                const led = this.elements[row][column];
                if (led) {
                    led.classList.toggle(this.onClass, value);
                    led.classList.toggle(this.offClass, !value);
                }
            });
        });
    }
    static get is() { return "microbit-matrix"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "idTemplate": {
            "type": String,
            "attr": "id-template"
        },
        "offClass": {
            "type": String,
            "attr": "off-class"
        },
        "onClass": {
            "type": String,
            "attr": "on-class"
        },
        "services": {
            "type": "Any",
            "attr": "services",
            "watchCallbacks": ["watchHandler"]
        }
    }; }
}
DeviceTunnel.injectProps(MicrobitMatrix, ['services']);

export { MicrobitMatrix };
