!function(t,e,r,i,o,n,c,s,a,m,u,b,l,d){for(u=t.microbit=t.microbit||{},(b=e.createElement("style")).innerHTML=a+"{visibility:hidden}.hydrated{visibility:inherit}",b.setAttribute("data-styles",""),l=e.head.querySelector("meta[charset]"),e.head.insertBefore(b,l?l.nextSibling:e.head.firstChild),function(t,e,r){(t["s-apps"]=t["s-apps"]||[]).push("microbit"),r.componentOnReady||(r.componentOnReady=function(){var e=this;function r(r){if(e.nodeName.indexOf("-")>0){for(var i=t["s-apps"],o=0,n=0;n<i.length;n++)if(t[i[n]].componentOnReady){if(t[i[n]].componentOnReady(e,r))return;o++}if(o<i.length)return void(t["s-cr"]=t["s-cr"]||[]).push([e,r])}r(null)}return t.Promise?new t.Promise(r):{then:r}})}(t,0,m),o=o||u.resourcesUrl,b=(l=e.querySelectorAll("script")).length-1;b>=0&&!(d=l[b]).src&&!d.hasAttribute("data-resources-url");b--);l=d.getAttribute("data-resources-url"),!o&&l&&(o=l),!o&&d.src&&(o=(l=d.src.split("/").slice(0,-1)).join("/")+(l.length?"/":"")+"microbit/"),b=e.createElement("script"),function(t,e,r,i){return!(e.search.indexOf("core=esm")>0)&&(!(!(e.search.indexOf("core=es5")>0||"file:"===e.protocol)&&t.customElements&&t.customElements.define&&t.fetch&&t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")&&"noModule"in r)||function(t){try{return new Function('import("")'),!1}catch(t){}return!0}())}(t,t.location,b)?b.src=o+"microbit.3npdm1k1.js":(b.src=o+"microbit.n7hoaxtw.js",b.setAttribute("type","module"),b.setAttribute("crossorigin",!0)),b.setAttribute("data-resources-url",o),b.setAttribute("data-namespace","microbit"),e.head.appendChild(b)}(window,document,0,0,0,0,0,0,"context-consumer,microbit-app,microbit-compass,microbit-connect,microbit-firmware,microbit-hardware,microbit-manufacturer,microbit-matrix,microbit-model,microbit-name,microbit-serial,microbit-state-button-a,microbit-state-button-b,microbit-state-connection,microbit-state-movement,microbit-temperature,microbit-text",HTMLElement.prototype);