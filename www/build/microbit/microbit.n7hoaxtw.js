/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='microbit']"));
function e(e,t){let n,o,l=null,i=!1,s=!1,r=arguments.length;for(;r-- >2;)m.push(arguments[r]);for(;m.length>0;){let t=m.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)m.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&i?l[l.length-1].vtext+=t:null===l?l=[s?{vtext:t}:t]:l.push(s?{vtext:t}:t),i=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&m.push(r);t.class=m.join(" "),m.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],y):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,t:void 0,o:!1}}const t={},o=e=>null!=e,l=e=>e.toLowerCase(),i="http://www.w3.org/1999/xlink",s=(e,t,n,o,s,r)=>{if("class"!==n||r)if("style"===n){for(const e in o)s&&null!=s[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in s)o&&s[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,s[e]):t.style[e]=s[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!r&&(n in t||-1!==["object","function"].indexOf(typeof s)&&null!==s)){const o=e.l(t);o&&o.i&&o.i[n]?f(t,n,s):"ref"!==n&&(f(t,n,null==s?"":s),null!=s&&!1!==s||e.u.s(t,n))}else null!=s&&"key"!==n?((e,t,n,o="boolean"==typeof n,s)=>{s=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?s?e.removeAttributeNS(i,l(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),s?e.setAttributeNS(i,l(t),n):e.setAttribute(t,n))})(t,n,s):(r||e.u.p(t,n)&&(null==s||!1===s))&&e.u.s(t,n);else n=l(n)in t?l(n.substring(2)):l(n[2])+n.substring(3),s?s!==o&&e.u.v(t,n,s,0):e.u.m(t,n,0);else if(o!==s){const e=a(o),n=a(s),l=e.filter(e=>!n.includes(e)),i=a(t.className).filter(e=>!l.includes(e)),r=n.filter(t=>!e.includes(t)&&!i.includes(t));i.push(...r),t.className=i.join(" ")}},a=e=>null==e||""===e?[]:e.trim().split(/\s+/),f=(e,t,n)=>{try{e[t]=n}catch(e){}},u=(e,n,o,l,i)=>{const r=11===o.t.nodeType&&o.t.host?o.t.host:o.t,a=n&&n.vattrs||t,c=o.vattrs||t;for(i in a)c&&null!=c[i]||null==a[i]||s(e,r,i,a[i],void 0,l,o.o);for(i in c)i in a&&c[i]===("value"===i||"checked"===i?r[i]:a[i])||s(e,r,i,a[i],c[i],l,o.o)};let p=!1;const v=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.t),e.vchildren&&e.vchildren.forEach(e=>{v(e,t)}))},b=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),i=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(v))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},v=()=>{n++,p(a);const t=i?l()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(v):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(c)}}},m=[],y={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},M=(e,t,n)=>{const[o,l,,i,s,r]=e,a={color:{M:"color"}};if(i)for(t=0;t<i.length;t++)a[(n=i[t])[0]]={g:n[1],k:!!n[2],M:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,j:n[4]};return{C:o,W:l,i:Object.assign({},a),N:s,O:r?r.map($):void 0}},$=e=>({S:e[0],A:e[1],T:!!e[2],R:!!e[3],L:!!e[4]}),g=(e,t)=>o(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,k=(e,t,n)=>{e.D.add(t),e.q.has(t)||(e.q.set(t,!0),e.B?e.queue.write(()=>j(e,t,n)):e.queue.tick(()=>j(e,t,n)))},j=async(t,n,o,l,i,s)=>{if(t.q.delete(n),!t.I.has(n)){if(!(i=t.P.get(n))){if((s=t.F.get(n))&&!s["s-rn"])return void(s["s-rc"]=s["s-rc"]||[]).push(()=>{j(t,n,o)});if(i=S(t,n,t.H.get(n),o))try{i.componentWillLoad&&await i.componentWillLoad()}catch(e){t.U(e,3,n)}}((t,n,o,l)=>{try{const i=n.Z.host,s=n.Z.encapsulation,r=!1;let a,c=o;if(l.render||l.hostData||i||a){t.G=!0;const n=l.render&&l.render();let i;t.G=!1;const a=e(null,i,n),f=t.J.get(o)||{};f.t=c,t.J.set(o,t.render(o,f,a,r,s))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(e=>e()),o["s-rc"]=null)}catch(e){t.G=!1,t.U(e,8,o,!0)}})(t,t.l(n),n,i),n["s-init"]()}},C=(e,t,n,l,i,s,r,a,c)=>{if(t.type||t.state){const f=e.K.get(n);t.state||(!t.attr||void 0!==f[i]&&""!==f[i]||(a=s&&s.V)&&o(c=a[t.attr])&&(f[i]=g(t.type,c)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=g(t.type,n[i])),"mode"!==i&&delete n[i])),l.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=l[i]),t.watchCallbacks&&(f[O+i]=t.watchCallbacks.slice()),E(l,i,function f(t){return(t=e.K.get(e.X.get(this)))&&t[i]},function u(n,o){(o=e.X.get(this))&&(t.state||t.mutable)&&W(e,o,i,n,r)})}else t.elementRef&&N(l,i,n)},W=(e,t,n,o,l,i,s)=>{(s=e.K.get(t))||e.K.set(t,s={});const r=s[n];if(o!==r&&(s[n]=o,i=e.P.get(t))){{const e=s[O+n];if(e)for(let t=0;t<e.length;t++)try{i[e[t]].call(i,o,r,n)}catch(e){console.error(e)}}!e.G&&t["s-rn"]&&k(e,t,l)}},N=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},E=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},O="wc-",S=(e,t,n,o,l,i)=>{try{l=new(i=e.l(t).Z),((e,t,n,o,l,i)=>{e.X.set(o,n),e.K.has(n)||e.K.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{C(e,s,n,o,t,l,i)})})(e,i,t,l,n,o)}catch(n){l={},e.U(n,7,t,!0)}return e.P.set(t,l),l},A=(e,t,n,o,l,i)=>{if(e.D.delete(t),(l=e.F.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.F.delete(t)),e.Y.length&&!e.D.size)for(;i=e.Y.shift();)i()},T=(e,t,n,o)=>{t.forEach(([t,l])=>{3&l.g&&E(n,t,function n(){return(e.K.get(this)||{})[t]},function n(i){W(e,this,t,g(l.j,i),o)})})},R=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.I.delete(n),e._.has(n)||(e.ee=!0,e.D.add(n),e._.set(n,!0),((e,t,n)=>{for(n=t;n=e.u.te(n);)if(e.ne(n)){e.oe.has(t)||(e.F.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.H.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.le(n)),n["s-cr"]||e.ie(n,"ssrv")||e.se&&1===t.N||(n["s-cr"]=e.re(""),n["s-cr"]["s-cn"]=!0,e.ae(n,n["s-cr"],e.ce(n)[0])),o={V:{}},t.i&&Object.keys(t.i).forEach(i=>{(l=t.i[i].M)&&(o.V[l]=e.ie(n,l))}),o))(e.u,t,n)),e.fe(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{if(!e.ue&&((e,t)=>{for(;t;){if(!e.pe(t))return 9!==e.de(t);t=e.pe(t)}})(e.u,t)){e.I.set(t,!0),A(e,t),v(e.J.get(t),!0);{const n=e.P.get(t);n&&n.componentDidUnload&&n.componentDidUnload()}e.u.m(t),e.ve.delete(t),[e.F,e.be,e.H].forEach(e=>e.delete(t))}})(e,this)},n["s-init"]=function(){((e,t,n,o,l,i)=>{if(e.P.get(t)&&!e.I.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.oe.set(t,!0),e.me.has(t)||(e.me.set(t,!0),t["s-ld"]=void 0,e.u.ye(t,n));try{v(e.J.get(t)),(i=e.be.get(t))&&(i.forEach(e=>e(t)),e.be.delete(t))}catch(n){e.U(n,4,t)}A(e,t)}})(e,this,o)},n.forceUpdate=function(){k(e,this,i)},t.i){const o=Object.entries(t.i);{let e={};o.forEach(([t,{M:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[l(n)];i&&(t[i]=(null!==o||"boolean"!=typeof t[i])&&o)})(e,this,t,o)}}T(e,o,n,i)}};((t,n,i,s,r,a,c)=>{const f=i.performance,d={html:{}},v=i[t]=i[t]||{},m=((e,t,n)=>{const o=new WeakMap,i={he:n,se:!!n.documentElement.attachShadow,we:!1,de:e=>e.nodeType,Me:e=>n.createElement(e),$e:(e,t)=>n.createElementNS(e,t),re:e=>n.createTextNode(e),ge:e=>n.createComment(e),ae:(e,t,n)=>e.insertBefore(t,n),ke:e=>e.remove(),je:(e,t)=>e.appendChild(t),ye:(e,t)=>{e.classList.add(t)},ce:e=>e.childNodes,pe:e=>e.parentNode,Ce:e=>e.nextSibling,We:e=>e.previousSibling,Ne:e=>l(e.nodeName),Ee:e=>e.textContent,Oe:(e,t)=>e.textContent=t,ie:(e,t)=>e.getAttribute(t),Se:(e,t,n)=>e.setAttribute(t,n),s:(e,t)=>e.removeAttribute(t),p:(e,t)=>e.hasAttribute(t),le:t=>t.getAttribute("mode")||(e.Context||{}).mode,xe:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.te(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,v:(t,n,l,s,r,a,c,f,u,p)=>{let d=t,v=l,b=o.get(t);p=n+s,b&&b[p]&&b[p](),"object"==typeof c&&(d=c),d&&(f=i.we?{capture:!!r,passive:!!a}:!!r,e.ael(d,n,v,f),b||o.set(t,b={}),b[p]=(()=>{d&&e.rel(d,n,v,f),b[p]=null}))},m:(e,t,n,l)=>{(l=o.get(e))&&(t?l[t+n]&&l[t+n]():Object.keys(l).forEach(e=>{l[e]&&l[e]()}))},Ae:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),te:(e,t)=>(t=i.pe(e))&&11===i.de(t)?t.host:t,Te:(e,t,n,o)=>e.setAttributeNS(t,n,o)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),i})(v,i,s),y=m.he.documentElement,h=i["s-defined"]=i["s-defined"]||{},w=(e,t)=>{i.customElements.get(e.C)||(R($,d[e.C]=e,t.prototype,a,f),t.observedAttributes=Object.values(e.i).map(e=>e.M).filter(e=>!!e),i.customElements.define(e.C,t))},$={u:m,Re:w,l:e=>d[m.Ne(e)],Le:e=>n[e],isClient:!0,ne:e=>!(!h[m.Ne(e)]&&!$.l(e)),U:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:n.queue=b(v,i),fe:(e,t)=>{{const n=e.W;let o=r+n+".entry.js";import(o).then(n=>{try{e.Z=n[(e=>l(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.C)],k($,t,f)}catch(t){console.error(t),e.Z=class{}}},e=>console.error(e,o))}},G:!1,B:!1,ue:!1,De:void 0,F:new WeakMap,qe:new WeakMap,_:new WeakMap,ve:new WeakMap,me:new WeakMap,oe:new WeakMap,X:new WeakMap,H:new WeakMap,P:new WeakMap,I:new WeakMap,q:new WeakMap,be:new WeakMap,Be:new WeakMap,J:new WeakMap,K:new WeakMap,D:new Set,Y:[]};return n.isServer=n.isPrerender=!(n.isClient=!0),n.window=i,n.location=i.location,n.document=s,n.resourcesUrl=n.publicPath=r,v.h=e,v.Context=n,v.onReady=(()=>new Promise(e=>$.queue.write(()=>$.D.size?$.Y.push(e):e()))),$.render=((e,t)=>{let n,l,i,s,r,a,c;const f=(i,v,b,m,y,h,w,M,$)=>{if(M=v.vchildren[b],n||(s=!0,"slot"===M.vtag&&(l&&t.ye(m,l+"-s"),M.vchildren?M.Ie=!0:M.Pe=!0)),o(M.vtext))M.t=t.re(M.vtext);else if(M.Pe)M.t=t.re("");else{if(h=M.t=p||"svg"===M.vtag?t.$e("http://www.w3.org/2000/svg",M.vtag):t.Me(M.Ie?"slot-fb":M.vtag),e.ne(h)&&e.oe.delete(c),p="svg"===M.vtag||"foreignObject"!==M.vtag&&p,u(e,null,M,p),o(l)&&h["s-si"]!==l&&t.ye(h,h["s-si"]=l),M.vchildren)for(y=0;y<M.vchildren.length;++y)(w=f(i,M,y,h))&&t.je(h,w);"svg"===M.vtag&&(p=!1)}return M.t["s-hn"]=a,(M.Ie||M.Pe)&&(M.t["s-sr"]=!0,M.t["s-cr"]=r,M.t["s-sn"]=M.vname||"",($=i&&i.vchildren&&i.vchildren[b])&&$.vtag===M.vtag&&i.t&&d(i.t)),M.t},d=(n,o,l,i)=>{e.ue=!0;const r=t.ce(n);for(l=r.length-1;l>=0;l--)(i=r[l])["s-hn"]!==a&&i["s-ol"]&&(t.ke(i),t.ae(h(i),i,y(i)),t.ke(i["s-ol"]),i["s-ol"]=null,s=!0),o&&d(i,o);e.ue=!1},v=(e,n,l,i,s,r,c,u)=>{const p=e["s-cr"];for((c=p&&t.pe(p)||e).shadowRoot&&t.Ne(c)===a&&(c=c.shadowRoot);s<=r;++s)i[s]&&(u=o(i[s].vtext)?t.re(i[s].vtext):f(null,l,s,e))&&(i[s].t=u,t.ae(c,u,y(n)))},b=(e,n,l,s)=>{for(;n<=l;++n)o(e[n])&&(s=e[n].t,i=!0,s["s-ol"]?t.ke(s["s-ol"]):d(s,!0),t.ke(s))},m=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),y=e=>e&&e["s-ol"]?e["s-ol"]:e,h=e=>t.pe(e["s-ol"]?e["s-ol"]:e),w=(n,l,i)=>{const s=l.t=n.t,r=n.vchildren,a=l.vchildren;p=l.t&&o(t.te(l.t))&&void 0!==l.t.ownerSVGElement,p="svg"===l.vtag||"foreignObject"!==l.vtag&&p,o(l.vtext)?(i=s["s-cr"])?t.Oe(t.pe(i),l.vtext):n.vtext!==l.vtext&&t.Oe(s,l.vtext):("slot"!==l.vtag&&u(e,n,l,p),o(r)&&o(a)?((e,n,l,i,s,r,a,c)=>{let u=0,p=0,M=n.length-1,$=n[0],g=n[M],k=i.length-1,j=i[0],C=i[k];for(;u<=M&&p<=k;)if(null==$)$=n[++u];else if(null==g)g=n[--M];else if(null==j)j=i[++p];else if(null==C)C=i[--k];else if(m($,j))w($,j),$=n[++u],j=i[++p];else if(m(g,C))w(g,C),g=n[--M],C=i[--k];else if(m($,C))"slot"!==$.vtag&&"slot"!==C.vtag||d(t.pe($.t)),w($,C),t.ae(e,$.t,t.Ce(g.t)),$=n[++u],C=i[--k];else if(m(g,j))"slot"!==$.vtag&&"slot"!==C.vtag||d(t.pe(g.t)),w(g,j),t.ae(e,g.t,$.t),g=n[--M],j=i[++p];else{for(s=null,r=u;r<=M;++r)if(n[r]&&o(n[r].vkey)&&n[r].vkey===j.vkey){s=r;break}o(s)?((c=n[s]).vtag!==j.vtag?a=f(n&&n[p],l,s,e):(w(c,j),n[s]=void 0,a=c.t),j=i[++p]):(a=f(n&&n[p],l,p,e),j=i[++p]),a&&t.ae(h($.t),a,y($.t))}u>M?v(e,null==i[k+1]?null:i[k+1].t,l,i,p,k):p>k&&b(n,u,M)})(s,r,l,a):o(a)?(o(n.vtext)&&t.Oe(s,""),v(s,null,l,a,0,a.length-1)):o(r)&&b(r,0,r.length-1)),p&&"svg"===l.vtag&&(p=!1)},M=(e,n,o,l,i,s,r,a)=>{for(l=0,i=(o=t.ce(e)).length;l<i;l++)if(n=o[l],1===t.de(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<i;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.de(o[s]),""!==r){if(1===a&&r===t.ie(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Ee(o[s]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,l,s,r,a,c,f,u)=>{for(s=0,r=(n=t.ce(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(l=o["s-cr"]))for(c=t.ce(t.pe(l)),f=o["s-sn"],a=c.length-1;a>=0;a--)(l=c[a])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.de(l))||8===u)&&""===f||1===u&&null===t.ie(l,"slot")&&""===f||1===u&&t.ie(l,"slot")===f)&&($.some(e=>e.Fe===l)||(i=!0,l["s-sn"]=f,$.push({He:o,Fe:l})));1===t.de(o)&&g(o)}};return(o,f,u,p,d,v,b,m,y,h,k,j)=>{if(c=o,a=t.Ne(c),r=c["s-cr"],n=p,l=c["s-sc"],s=i=!1,w(f,u),s){for(g(u.t),b=0;b<$.length;b++)(m=$[b]).Fe["s-ol"]||((y=t.re(""))["s-nr"]=m.Fe,t.ae(t.pe(m.Fe),m.Fe["s-ol"]=y,m.Fe));for(e.ue=!0,b=0;b<$.length;b++){for(m=$[b],k=t.pe(m.He),j=t.Ce(m.He),y=m.Fe["s-ol"];y=t.We(y);)if((h=y["s-nr"])&&h&&h["s-sn"]===m.Fe["s-sn"]&&k===t.pe(h)&&(h=t.Ce(h))&&h&&!h["s-nr"]){j=h;break}(!j&&k!==t.pe(m.Fe)||t.Ce(m.Fe)!==j)&&m.Fe!==j&&(t.ke(m.Fe),t.ae(k,m.Fe,j))}e.ue=!1}return i&&M(u.t),$.length=0,u}})($,m),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=(()=>{$.oe.set(y,v.loaded=$.B=!0),m.Ae(i,"appload",{detail:{namespace:t}})}),c.map(M).forEach(e=>w(e,class extends HTMLElement{})),$.ee||y["s-init"](),((e,t,n,o,l,i)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.l(t);if(o)if(e.oe.has(t))n(t);else{const o=e.be.get(t)||[];o.push(n),e.be.set(t,o)}return!!o}),l){for(i=l.length-1;i>=0;i--)t.componentOnReady(l[i][0],l[i][1])&&l.splice(i,1);for(i=0;i<o.length;i++)if(!n[o[i]].componentOnReady)return;for(i=0;i<l.length;i++)l[i][1](null);l.length=0}})($,v,i,i["s-apps"],i["s-cr"]),v.initialized=!0,$})(n,x,w,d,r,h,c);
})(window,document,{},"microbit","hydrated",[["context-consumer","ye0ydyx1",0,[["context",1],["el",64],["renderer",1,0,1,1],["subscribe",1],["unsubscribe",16]]],["microbit-app","ydh4pgwz",0,[["device",16],["deviceInformation",16],["services",16]]],["microbit-compass","rxnkfi5i",0,[["bearing",16],["el",64],["services",1]]],["microbit-connect","ykuei6jn",0,[["connectLabel",1,0,"connect-label",2],["device",1],["disconnectLabel",1,0,"disconnect-label",2],["el",64],["setDevice",1],["setDeviceInformation",1],["setServices",1]]],["microbit-firmware","zpv6ke03",0,[["deviceInformation",1],["disconnectedText",1,0,"disconnected-text",2],["el",64],["noInfo",1,0,"no-info",2]]],["microbit-hardware","3bvuy434",0,[["deviceInformation",1],["disconnectedText",1,0,"disconnected-text",2],["el",64],["noInfo",1,0,"no-info",2]]],["microbit-manufacturer","mq2soguj",0,[["deviceInformation",1],["disconnectedText",1,0,"disconnected-text",2],["el",64],["noInfo",1,0,"no-info",2]]],["microbit-matrix","8mqc1pnq",0,[["el",64],["idTemplate",1,0,"id-template",2],["offClass",1,0,"off-class",2],["onClass",1,0,"on-class",2],["services",1]]],["microbit-model","1byxevky",0,[["deviceInformation",1],["disconnectedText",1,0,"disconnected-text",2],["el",64],["noInfo",1,0,"no-info",2]]],["microbit-name","6xiy26lc",0,[["device",1],["disconnectedText",1,0,"disconnected-text",2],["el",64]]],["microbit-serial","qgdwc5hl",0,[["deviceInformation",1],["disconnectedText",1,0,"disconnected-text",2],["el",64],["noInfo",1,0,"no-info",2]]],["microbit-state-button-a","lcnu3gub",0,[["className",16],["el",64],["longPressClass",1,0,"long-press-class",2],["releaseClass",1,0,"release-class",2],["services",1],["shortPressClass",1,0,"short-press-class",2]]],["microbit-state-button-b","icwlryww",0,[["className",16],["el",64],["longPressClass",1,0,"long-press-class",2],["releaseClass",1,0,"release-class",2],["services",1],["shortPressClass",1,0,"short-press-class",2]]],["microbit-state-connection","6ufvumt3",0,[["connectedClass",1,0,"connected-class",2],["device",1],["disconnectedClass",1,0,"disconnected-class",2],["el",64]]],["microbit-state-movement","npprrjhv",0,[["className",16],["el",64],["frequency",1,0,1,8],["movedClass",1,0,"moved-class",2],["sensitivity",1,0,1,8],["services",1],["stillClass",1,0,"still-class",2]]],["microbit-temperature","wb5csnrm",0,[["disconnectedText",1,0,"disconnected-text",2],["el",64],["noTemperature",1,0,"no-temperature",2],["services",1],["temperature",16],["temperaturePeriod",1,0,"temperature-period",8]]],["microbit-text","ie6p4aq3",0,[["buttonLabel",1,0,"button-label",2],["disabled",16],["el",64],["scrollDelay",1,0,"scroll-delay",8],["services",1]]]]);