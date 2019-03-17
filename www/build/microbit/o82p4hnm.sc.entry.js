const e=window.microbit.h;import{a as t}from"./chunk-d2120d7f.js";class r{constructor(){this.services=void 0,this.temperaturePeriod=100,this.disconnectedText="Disconnected",this.noTemperature="No temperature found",this.temperature=this.disconnectedText}async watchHandler(){if(!this.services)return void(this.temperature=this.disconnectedText);const e=this.services.temperatureService;e?(await e.setTemperaturePeriod(this.temperaturePeriod),e.addEventListener("temperaturechanged",e=>this.temperature=`${e.detail}°c`)):this.temperature=this.noTemperature}render(){return e("div",null,this.temperature)}static get is(){return"microbit-temperature"}static get properties(){return{disconnectedText:{type:String,attr:"disconnected-text"},el:{elementRef:!0},noTemperature:{type:String,attr:"no-temperature"},services:{type:"Any",attr:"services",watchCallbacks:["watchHandler"]},temperature:{state:!0},temperaturePeriod:{type:Number,attr:"temperature-period"}}}}t.injectProps(r,["services"]);export{r as MicrobitTemperature};