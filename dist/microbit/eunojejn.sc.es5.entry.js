var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function c(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,c)}u((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};microbit.loadBundle("eunojejn",["exports","./chunk-ebf5a341.js"],function(e,t){var n=window.microbit.h,r=function(){function e(){this.services=void 0,this.bearing=0}return e.prototype.watchHandler=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return this.services&&this.services.magnetometerService?(this.services.magnetometerService.addEventListener("magnetometerbearingchanged",function(t){return e.bearing=t.detail}),[2]):[2]})})},e.prototype.render=function(){return n("span",{style:{position:"absolute",transform:"rotate("+this.bearing+"deg)"}},n("slot",null))},Object.defineProperty(e,"is",{get:function(){return"microbit-compass"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{bearing:{state:!0},el:{elementRef:!0},services:{type:"Any",attr:"services",watchCallbacks:["watchHandler"]}}},enumerable:!0,configurable:!0}),e}();t.DeviceTunnel.injectProps(r,["services"]),e.MicrobitCompass=r,Object.defineProperty(e,"__esModule",{value:!0})});