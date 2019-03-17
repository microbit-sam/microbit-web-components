var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}l((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};microbit.loadBundle("plre7ctq",["exports","./chunk-ebf5a341.js"],function(e,t){var n=window.microbit.h,r=function(){function e(){this.services=void 0,this.buttonText="Write",this.scrollDelay=100,this.disabled=!0,this.text=""}return e.prototype.watchHandler=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return this.disabled=!this.services||!this.services.ledService,this.services&&this.services.ledService?[4,this.services.ledService.setScrollingDelay(this.scrollDelay)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},e.prototype.render=function(){var e=this;return n("form",{onSubmit:function(t){return e.handleSubmit(t)}},n("input",{type:"input",disabled:this.disabled,maxLength:20,onChange:function(t){return e.handleChange(t)}}),n("input",{type:"submit",disabled:this.disabled,value:this.buttonText}))},e.prototype.handleChange=function(e){this.text=e.target.value},e.prototype.handleSubmit=function(e){e.preventDefault(),this.services.ledService.writeText(this.text)},Object.defineProperty(e,"is",{get:function(){return"microbit-text"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{buttonText:{type:String,attr:"button-text"},disabled:{state:!0},el:{elementRef:!0},scrollDelay:{type:Number,attr:"scroll-delay"},services:{type:"Any",attr:"services",watchCallbacks:["watchHandler"]}}},enumerable:!0,configurable:!0}),e}();t.DeviceTunnel.injectProps(r,["services"]),e.MicrobitText=r,Object.defineProperty(e,"__esModule",{value:!0})});