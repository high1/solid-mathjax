const ue=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}};ue();const h={},de=(e,t)=>e===t,me=Symbol("solid-proxy"),I={equals:de};let he=se;const k={},b=1,L=2,z={owned:null,cleanups:null,context:null,owner:null};var g=null;let M=null,u=null,E=null,d=null,x=null,v=0;function Te(e,t){const n=u,s=g,i=e.length===0,l=i?z:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>P(l));g=l,u=null;try{return O(r,!0)}finally{u=n,g=s}}function p(e,t,n){const s=te(e,t,!1,b);S(s)}function Z(e,t,n){n=n?Object.assign({},I,n):I;const s=te(e,t,!0,0);return s.pending=k,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,S(s),Qe.bind(s)}function ge(e){if(E)return e();let t;const n=E=[];try{t=e()}finally{E=null}return O(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==k){const l=i.pending;i.pending=k,ee(i,l)}}},!1),t}function J(e){let t,n=u;return u=null,t=e(),u=n,t}function Qe(){const e=M;if(this.sources&&(this.state||e)){const t=d;d=null,this.state===b||e?S(this):N(this),d=t}if(u){const t=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(t)):(u.sources=[this],u.sourceSlots=[t]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function ee(e,t,n){if(E)return e.pending===k&&E.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&O(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&M.disposed.has(l),(s&&!l.tState||!s&&!l.state)&&(l.pure?d.push(l):x.push(l),l.observers&&ie(l)),s||(l.state=b)}if(d.length>1e6)throw d=[],new Error},!1),t}function S(e){if(!e.fn)return;P(e);const t=g,n=u,s=v;u=g=e,xe(e,e.value,s),u=n,g=t}function xe(e,t,n){let s;try{s=e.fn(t)}catch(i){le(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?ee(e,s):e.value=s,e.updatedAt=n)}function te(e,t,n,s=b,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==z&&(g.owned?g.owned.push(l):g.owned=[l]),l}function ne(e){const t=M;if(e.state===0||t)return;if(e.state===L||t)return N(e);if(e.suspense&&J(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<v);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===b||t)S(e);else if(e.state===L||t){const i=d;d=null,N(e,n[0]),d=i}}function O(e,t){if(d)return e();let n=!1;t||(d=[]),x?n=!0:x=[],v++;try{const s=e();return ye(n),s}catch(s){le(s)}finally{d=null,n||(x=null)}}function ye(e){d&&(se(d),d=null),!e&&(x.length?ge(()=>{he(x),x=null}):x=null)}function se(e){for(let t=0;t<e.length;t++)ne(e[t])}function N(e,t){const n=M;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===b||n?i!==t&&ne(i):(i.state===L||n)&&N(i,t))}}function ie(e){const t=M;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=L,s.pure?d.push(s):x.push(s),s.observers&&ie(s))}}function P(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)P(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function le(e){throw e}function $(e,t){return J(()=>e(t||{}))}function X(){return!0}const re={get(e,t,n){return t===me?n:e.get(t)},has(e,t){return e.has(t)},set:X,deleteProperty:X,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:X,deleteProperty:X}},ownKeys(e){return e.keys()}};function j(e){return(e=typeof e=="function"?e():e)==null?{}:e}function pe(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const s=j(e[n])[t];if(s!==void 0)return s}},has(t){for(let n=e.length-1;n>=0;n--)if(t in j(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(j(e[n])));return[...new Set(t)]}},re)}function we(e,...t){const n=new Set(t.flat()),s=Object.getOwnPropertyDescriptors(e),i=t.map(l=>{const r={};for(let o=0;o<l.length;o++){const f=l[o];Object.defineProperty(r,f,s[f]?s[f]:{get(){return e[f]},set(){return!0}})}return r});return i.push(new Proxy({get(l){return n.has(l)?void 0:e[l]},has(l){return n.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!n.has(l))}},re)),i}const be=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ee=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...be]),Me=new Set(["innerHTML","textContent","innerText","children"]),Xe={className:"class",htmlFor:"for"},_={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},ke=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Le=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Ne={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Se(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,f=t[i-1].nextSibling,c=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const m=l<s?o?n[o-1].nextSibling:n[l-o]:f;for(;o<l;)e.insertBefore(n[o++],m)}else if(l===o)for(;r<i;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const m=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],m),t[i]=n[l]}else{if(!c){c=new Map;let Q=o;for(;Q<l;)c.set(n[Q],Q++)}const m=c.get(t[r]);if(m!=null)if(o<m&&m<l){let Q=r,H=1,G;for(;++Q<i&&Q<l&&!((G=c.get(t[Q]))==null||G!==m+H);)H++;if(H>m-o){const fe=t[r];for(;o<m;)e.insertBefore(n[o++],fe)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const B="_$DX_DELEGATE";function He(e,t,n){let s;return Te(i=>{s=i,t===document?e():oe(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function F(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function je(e,t=window.document){const n=t[B]||(t[B]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,Fe))}}function Ae(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ce(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function De(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ve(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=l=>i.call(e,n[1],l))}else e.addEventListener(t,n)}function ve(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let l,r;for(l=0,r=i.length;l<r;l++){const o=i[l];!o||o==="undefined"||t[o]||(q(e,o,!1),delete n[o])}for(l=0,r=s.length;l<r;l++){const o=s[l],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(q(e,o,!0),n[o]=f)}return n}function Je(e,t,n={}){const s=e.style,i=typeof n=="string";if(t==null&&i||typeof t=="string")return s.cssText=t;i&&(s.cssText=void 0,n={}),t||(t={});let l,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)l=t[r],l!==n[r]&&(s.setProperty(r,l),n[r]=l);return n}function C(e,t,n,s){typeof t=="function"?p(i=>U(e,t(),i,n,s)):U(e,t,void 0,n,s)}function oe(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return w(e,t,s,n);p(i=>w(e,t(),i,n),s)}function Oe(e,t,n,s,i={},l=!1){t||(t={});for(const r in i)if(!(r in t)){if(r==="children")continue;R(e,r,null,i[r],n,l)}for(const r in t){if(r==="children"){s||w(e,t.children);continue}const o=t[r];i[r]=R(e,r,o,i[r],n,l)}}function Pe(e){let t,n;return!h.context||!(t=h.registry.get(n=Ge()))?e.cloneNode(!0):(h.completed&&h.completed.add(t),h.registry.delete(n),t)}function $e(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function q(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,l=s.length;i<l;i++)e.classList.toggle(s[i],n)}function R(e,t,n,s,i,l){let r,o,f;if(t==="style")return Je(e,n,s);if(t==="classList")return ve(e,n,s);if(n===s)return s;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);s&&e.removeEventListener(c,s),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);s&&e.removeEventListener(c,s,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),m=ke.has(c);if(!m&&s){const Q=Array.isArray(s)?s[0]:s;e.removeEventListener(c,Q)}(m||n)&&(Ve(e,c,n,m),m&&je([c]))}else if((f=Me.has(t))||!i&&(_[t]||(o=Ee.has(t)))||(r=e.nodeName.includes("-")))t==="class"||t==="className"?De(e,n):r&&!o&&!f?e[$e(t)]=n:e[_[t]||t]=n;else{const c=i&&t.indexOf(":")>-1&&Ne[t.split(":")[0]];c?Ce(e,c,t,n):Ae(e,Xe[t]||t,n)}return n}function Fe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),h.registry&&!h.done&&(h.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function U(e,t,n={},s,i){return t||(t={}),!i&&"children"in t&&p(()=>n.children=w(e,t.children,n.children)),t.ref&&t.ref(e),p(()=>Oe(e,t,s,!0,n,!0)),n}function w(e,t,n,s,i){for(h.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(h.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=y(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(h.context)return n;n=y(e,n,s)}else{if(l==="function")return p(()=>{let o=t();for(;typeof o=="function";)o=o();n=w(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[];if(D(o,t,i))return p(()=>n=w(e,o,n,s,!0)),()=>n;if(h.context){for(let f=0;f<o.length;f++)if(o[f].parentNode)return n=o}if(o.length===0){if(n=y(e,n,s),r)return n}else Array.isArray(n)?n.length===0?K(e,o,s):Se(e,n,o):(n&&y(e),K(e,o));n=o}else if(t instanceof Node){if(h.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=y(e,n,s,t);y(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function D(e,t,n){let s=!1;for(let i=0,l=t.length;i<l;i++){let r=t[i],o;if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))s=D(e,r)||s;else if((o=typeof r)=="string")e.push(document.createTextNode(r));else if(o==="function")if(n){for(;typeof r=="function";)r=r();s=D(e,Array.isArray(r)?r:[r])||s}else e.push(r),s=!0;else e.push(document.createTextNode(r.toString()))}return s}function K(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function y(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(i,o):e.insertBefore(i,n):f&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}function Ge(){const e=h.context;return`${e.id}${e.count++}`}const Ie="http://www.w3.org/2000/svg";function Ze(e,t=!1){return t?document.createElementNS(Ie,e):document.createElement(e)}function _e(e){const[t,n]=we(e,["component"]),s=Z(()=>t.component);return Z(()=>{const i=s();switch(typeof i){case"function":return J(()=>i(n));case"string":const l=Le.has(i),r=h.context?Pe():Ze(i,l);return C(r,n,l),r}})}var Be=e=>e[0]!==e[0].toLowerCase(),qe=/e(r[HRWrv]|[Vawy])|Con|l(e[Tcs]|c)|s(eP|y)|a(t[rt]|u|v)|Of|Ex|f[XYa]|gt|hR|d[Pg]|t[TXYd]|[UZq]/,W={},Re=/[A-Z]/g,Ue=e=>W[e]||(W[e]=qe.test(e)?e:e.replace(Re,t=>`-${t.toLowerCase()}`)),Ke=/^(t(ext$|s)|s[vwy]|g)|^set|tad|ker|p(at|s)|s(to|c$|ca|k)|r(ec|cl)|ew|us|f($|e|s)|cu|n[ei]|l[ty]|[GOP]/,A={},We=e=>e in A?A[e]:A[e]=Ke.test(e)&&!e.includes("-"),Ye=new Set(["mjx"]),ze=new RegExp(`(?:${[...Ye].join("|")})-.+`,"g"),Y={},ae=e=>{var t;return typeof e=="string"?(t=Y[e])!=null?t:Y[e]=e.replace(ze,n=>n.replace(/-/g,"_")):e},V=(e,t)=>{let n={};for(let s of Object.keys(e))n[et(s,t)]=typeof e[s]=="object"&&!Array.isArray(e[s])?V(e[s],t):ae(e[s]);return n},ce=e=>e.children,a=(e,t)=>typeof e=="function"?e.name==="Fragment"?ce(t):e(V(t)):$(_e,pe(Be(e)?t:V(t,e),{component:ae(e)})),et=(e,t="")=>We(t)?e=e==="xlinkHref"||e==="xlink:href"?"href":Ue(e):e,T=a;function tt(e={}){const{wrapper:t}=e.components||{};return t?a(t,Object.assign({},e,{children:a(n,{})})):n();function n(){const s=Object.assign({h1:"h1",span:"span","mjx-container":"mjx-container",svg:"svg",defs:"defs",path:"path",g:"g",use:"use",rect:"rect",h2:"h2",style:"style"},e.components);return T(ce,{children:[a(s.h1,{children:a(s.span,{className:"math math-inline",children:a(s["mjx-container"],{className:"MathJax",jax:"SVG",children:T(s.svg,{style:{verticalAlign:"-0.212ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.838ex",height:"2.398ex",role:"img",focusable:"false",viewBox:"0 -966.5 3906.6 1060",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[T(s.defs,{children:[a(s.path,{id:"MJX-1-TEX-N-221A",d:"M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z"}),a(s.path,{id:"MJX-1-TEX-I-1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}),a(s.path,{id:"MJX-1-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}),a(s.path,{id:"MJX-1-TEX-N-2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}),a(s.path,{id:"MJX-1-TEX-I-1D44F",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"})]}),a(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:a(s.g,{"data-mml-node":"math",children:T(s.g,{"data-mml-node":"msqrt",children:[T(s.g,{transform:"translate(853,0)",children:[T(s.g,{"data-mml-node":"msup",children:[a(s.g,{"data-mml-node":"mi",children:a(s.use,{"data-c":"1D44E",xlinkHref:"#MJX-1-TEX-I-1D44E"})}),a(s.g,{"data-mml-node":"mn",transform:"translate(562,289) scale(0.707)",children:a(s.use,{"data-c":"32",xlinkHref:"#MJX-1-TEX-N-32"})})]}),a(s.g,{"data-mml-node":"mo",transform:"translate(1187.8,0)",children:a(s.use,{"data-c":"2B",xlinkHref:"#MJX-1-TEX-N-2B"})}),T(s.g,{"data-mml-node":"msup",transform:"translate(2188,0)",children:[a(s.g,{"data-mml-node":"mi",children:a(s.use,{"data-c":"1D44F",xlinkHref:"#MJX-1-TEX-I-1D44F"})}),a(s.g,{"data-mml-node":"mn",transform:"translate(462,289) scale(0.707)",children:a(s.use,{"data-c":"32",xlinkHref:"#MJX-1-TEX-N-32"})})]})]}),a(s.g,{"data-mml-node":"mo",transform:"translate(0,106.5)",children:a(s.use,{"data-c":"221A",xlinkHref:"#MJX-1-TEX-N-221A"})}),a(s.rect,{width:"3053.6",height:"60",x:"853",y:"846.5"})]})})})]})})})}),`
`,a(s.h2,{children:a(s.span,{className:"math math-inline",children:a(s["mjx-container"],{className:"MathJax",jax:"SVG",children:T(s.svg,{style:{verticalAlign:"-0.781ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.962ex",height:"2.737ex",role:"img",focusable:"false",viewBox:"0 -864.9 6171.2 1209.9",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[T(s.defs,{children:[a(s.path,{id:"MJX-2-TEX-I-1D43F",d:"M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"}),a(s.path,{id:"MJX-2-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}),a(s.path,{id:"MJX-2-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}),a(s.path,{id:"MJX-2-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}),a(s.path,{id:"MJX-2-TEX-I-1D70C",d:"M58 -216Q25 -216 23 -186Q23 -176 73 26T127 234Q143 289 182 341Q252 427 341 441Q343 441 349 441T359 442Q432 442 471 394T510 276Q510 219 486 165T425 74T345 13T266 -10H255H248Q197 -10 165 35L160 41L133 -71Q108 -168 104 -181T92 -202Q76 -216 58 -216ZM424 322Q424 359 407 382T357 405Q322 405 287 376T231 300Q217 269 193 170L176 102Q193 26 260 26Q298 26 334 62Q367 92 389 158T418 266T424 322Z"}),a(s.path,{id:"MJX-2-TEX-I-1D463",d:"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"}),a(s.path,{id:"MJX-2-TEX-I-1D446",d:"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"}),a(s.path,{id:"MJX-2-TEX-I-1D436",d:"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"})]}),a(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:T(s.g,{"data-mml-node":"math",children:[a(s.g,{"data-mml-node":"mi",children:a(s.use,{"data-c":"1D43F",xlinkHref:"#MJX-2-TEX-I-1D43F"})}),a(s.g,{"data-mml-node":"mo",transform:"translate(958.8,0)",children:a(s.use,{"data-c":"3D",xlinkHref:"#MJX-2-TEX-N-3D"})}),T(s.g,{"data-mml-node":"mfrac",transform:"translate(2014.6,0)",children:[a(s.g,{"data-mml-node":"mn",transform:"translate(220,394) scale(0.707)",children:a(s.use,{"data-c":"31",xlinkHref:"#MJX-2-TEX-N-31"})}),a(s.g,{"data-mml-node":"mn",transform:"translate(220,-345) scale(0.707)",children:a(s.use,{"data-c":"32",xlinkHref:"#MJX-2-TEX-N-32"})}),a(s.rect,{width:"553.6",height:"60",x:"120",y:"220"})]}),a(s.g,{"data-mml-node":"mi",transform:"translate(2808.1,0)",children:a(s.use,{"data-c":"1D70C",xlinkHref:"#MJX-2-TEX-I-1D70C"})}),T(s.g,{"data-mml-node":"msup",transform:"translate(3325.1,0)",children:[a(s.g,{"data-mml-node":"mi",children:a(s.use,{"data-c":"1D463",xlinkHref:"#MJX-2-TEX-I-1D463"})}),a(s.g,{"data-mml-node":"mn",transform:"translate(518,363) scale(0.707)",children:a(s.use,{"data-c":"32",xlinkHref:"#MJX-2-TEX-N-32"})})]}),a(s.g,{"data-mml-node":"mi",transform:"translate(4246.7,0)",children:a(s.use,{"data-c":"1D446",xlinkHref:"#MJX-2-TEX-I-1D446"})}),T(s.g,{"data-mml-node":"msub",transform:"translate(4891.7,0)",children:[a(s.g,{"data-mml-node":"mi",children:a(s.use,{"data-c":"1D436",xlinkHref:"#MJX-2-TEX-I-1D436"})}),a(s.g,{"data-mml-node":"mi",transform:"translate(748,-150) scale(0.707)",children:a(s.use,{"data-c":"1D43F",xlinkHref:"#MJX-2-TEX-I-1D43F"})})]})]})})]})})})}),a(s.style,{children:`
mjx-container[jax="SVG"] {
  direction: ltr;
}

mjx-container[jax="SVG"] > svg {
  overflow: visible;
  min-height: 1px;
  min-width: 1px;
}

mjx-container[jax="SVG"] > svg a {
  fill: blue;
  stroke: blue;
}

mjx-container[jax="SVG"][display="true"] {
  display: block;
  text-align: center;
  margin: 1em 0;
}

mjx-container[jax="SVG"][display="true"][width="full"] {
  display: flex;
}

mjx-container[jax="SVG"][justify="left"] {
  text-align: left;
}

mjx-container[jax="SVG"][justify="right"] {
  text-align: right;
}

g[data-mml-node="merror"] > g {
  fill: red;
  stroke: red;
}

g[data-mml-node="merror"] > rect[data-background] {
  fill: yellow;
  stroke: none;
}

g[data-mml-node="mtable"] > line[data-line], svg[data-table] > g > line[data-line] {
  stroke-width: 70px;
  fill: none;
}

g[data-mml-node="mtable"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {
  stroke-width: 70px;
  fill: none;
}

g[data-mml-node="mtable"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {
  stroke-dasharray: 140;
}

g[data-mml-node="mtable"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {
  stroke-linecap: round;
  stroke-dasharray: 0,140;
}

g[data-mml-node="mtable"] > g > svg {
  overflow: visible;
}

[jax="SVG"] mjx-tool {
  display: inline-block;
  position: relative;
  width: 0;
  height: 0;
}

[jax="SVG"] mjx-tool > mjx-tip {
  position: absolute;
  top: 0;
  left: 0;
}

mjx-tool > mjx-tip {
  display: inline-block;
  padding: .2em;
  border: 1px solid #888;
  font-size: 70%;
  background-color: #F8F8F8;
  color: black;
  box-shadow: 2px 2px 5px #AAAAAA;
}

g[data-mml-node="maction"][data-toggle] {
  cursor: pointer;
}

mjx-status {
  display: block;
  position: fixed;
  left: 1em;
  bottom: 1em;
  min-width: 25%;
  padding: .2em .4em;
  border: 1px solid #888;
  font-size: 90%;
  background-color: #F8F8F8;
  color: black;
}

foreignObject[data-mjx-xml] {
  font-family: initial;
  line-height: normal;
  overflow: visible;
}

mjx-container[jax="SVG"] path[data-c], mjx-container[jax="SVG"] use[data-c] {
  stroke-width: 3;
}
`})]})}}const nt=F('<div class="flex flex-col items-center justify-center h-full bg-amber-50"></div>'),st=F('<h1 class="text-sky-600"></h1>'),it=F('<div class="text-9xl text-teal-700"></div>'),lt=()=>(()=>{const e=nt.cloneNode(!0);return oe(e,$(tt,{components:{h1:t=>(()=>{const n=st.cloneNode(!0);return C(n,t,!1,!1),n})(),h2:t=>(()=>{const n=it.cloneNode(!0);return C(n,t,!1,!1),n})()}})),e})();He(()=>$(lt,{}),document.querySelector("#root"));