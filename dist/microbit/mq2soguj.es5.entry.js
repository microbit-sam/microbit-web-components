microbit.loadBundle("mq2soguj",["exports","./chunk-ebf5a341.js"],function(e,n){var t=function(){function e(){this.deviceInformation=void 0,this.disconnectedText="Disconnected",this.noInfo="No manufacturer name found"}return e.prototype.render=function(){return this.deviceInformation?this.deviceInformation.manufacturer||this.noInfo:this.disconnectedText},Object.defineProperty(e,"is",{get:function(){return"microbit-manufacturer"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{deviceInformation:{type:"Any",attr:"device-information"},disconnectedText:{type:String,attr:"disconnected-text"},el:{elementRef:!0},noInfo:{type:String,attr:"no-info"}}},enumerable:!0,configurable:!0}),e}();n.DeviceTunnel.injectProps(t,["deviceInformation"]),e.MicrobitManufacturer=t,Object.defineProperty(e,"__esModule",{value:!0})});