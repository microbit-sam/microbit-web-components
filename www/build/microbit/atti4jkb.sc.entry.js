const e=window.microbit.h;import{a as t}from"./chunk-3d8ed500.js";class a{constructor(){this.services=void 0,this.calibrateLabel="Calibrate",this.disabled=!0}async watchHandler(){this.disabled=!this.services||!this.services.magnetometerService}render(){return e("button",{disabled:this.disabled,onClick:()=>this.calibrate()},this.calibrateLabel)}async calibrate(){}static get is(){return"microbit-calibrate"}static get properties(){return{calibrateLabel:{type:String,attr:"calibrate-label"},disabled:{state:!0},el:{elementRef:!0},services:{type:"Any",attr:"services",watchCallbacks:["watchHandler"]}}}}t.injectProps(a,["services"]);export{a as MicrobitCalibrate};