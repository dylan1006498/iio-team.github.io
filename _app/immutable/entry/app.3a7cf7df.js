import{S as C,i as q,s as U,a as j,e as d,c as z,b as E,d as h,f as P,g,h as w,j as W,o as F,k as G,l as H,m as J,n as A,p,q as K,r as M,u as Q,v as y,w as D,x as k,y as v,z as I,A as R,B as L}from"../chunks/index.f6098fd6.js";const X="modulepreload",Y=function(a,e){return new URL(a,e).href},O={},m=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Y(f,i),f in O)return;O[f]=!0;const t=f.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!i)for(let l=r.length-1;l>=0;l--){const u=r[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${s}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":X,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},ie={};function Z(a){let e,n,i;var r=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return r&&(e=k(r,f(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){const c={};if(s&8&&(c.data=t[3]),s&4&&(c.form=t[2]),s&2&&r!==(r=t[1][0])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=k(r,f(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&w(n),e&&L(e,t)}}}function $(a){let e,n,i;var r=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return r&&(e=k(r,f(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){const c={};if(s&8&&(c.data=t[3]),s&8215&&(c.$$scope={dirty:s,ctx:t}),s&2&&r!==(r=t[1][0])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=k(r,f(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&w(n),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return r&&(e=k(r,f(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){const c={};if(s&16&&(c.data=t[4]),s&4&&(c.form=t[2]),s&2&&r!==(r=t[1][1])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=k(r,f(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&w(n),e&&L(e,t)}}}function T(a){let e,n=a[6]&&V(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(w),this.h()},h(){A(e,"id","svelte-announcer"),A(e,"aria-live","assertive"),A(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){E(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function V(a){let e;return{c(){e=K(a[7])},l(n){e=M(n,a[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&w(e)}}}function ee(a){let e,n,i,r,f;const t=[$,Z],s=[];function c(l,u){return l[1][1]?0:1}e=c(a),n=s[e]=t[e](a);let o=a[5]&&T(a);return{c(){n.c(),i=j(),o&&o.c(),r=d()},l(l){n.l(l),i=z(l),o&&o.l(l),r=d()},m(l,u){s[e].m(l,u),E(l,i,u),o&&o.m(l,u),E(l,r,u),f=!0},p(l,[u]){let b=e;e=c(l),e===b?s[e].p(l,u):(y(),h(s[b],1,1,()=>{s[b]=null}),P(),n=s[e],n?n.p(l,u):(n=s[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,u):(o=T(l),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},i(l){f||(g(n),f=!0)},o(l){h(n),f=!1},d(l){s[e].d(l),l&&w(i),o&&o.d(l),l&&w(r)}}}function te(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:f}=e,{components:t=[]}=e,{form:s}=e,{data_0:c=null}=e,{data_1:o=null}=e;W(i.page.notify);let l=!1,u=!1,b=null;F(()=>{const _=i.page.subscribe(()=>{l&&(n(6,u=!0),n(7,b=document.title||"untitled page"))});return n(5,l=!0),_});function N(_){D[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){D[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function B(_){D[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return a.$$set=_=>{"stores"in _&&n(8,i=_.stores),"page"in _&&n(9,r=_.page),"constructors"in _&&n(1,f=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,s=_.form),"data_0"in _&&n(3,c=_.data_0),"data_1"in _&&n(4,o=_.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,f,s,c,o,l,u,b,i,r,N,S,B]}class re extends C{constructor(e){super(),q(this,e,te,ee,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const se=[()=>m(()=>import("../nodes/0.44317993.js"),["..\\nodes\\0.44317993.js","..\\chunks\\index.f6098fd6.js","..\\chunks\\paths.6aebeb5d.js","..\\chunks\\stores.8f01f94e.js","..\\chunks\\singletons.32dde365.js","..\\chunks\\index.ee9b8c79.js","..\\assets\\0.f771f297.css"],import.meta.url),()=>m(()=>import("../nodes/1.5feda031.js"),["..\\nodes\\1.5feda031.js","..\\chunks\\index.f6098fd6.js","..\\chunks\\stores.8f01f94e.js","..\\chunks\\singletons.32dde365.js","..\\chunks\\index.ee9b8c79.js","..\\chunks\\paths.6aebeb5d.js"],import.meta.url),()=>m(()=>import("../nodes/2.37505856.js"),["..\\nodes\\2.37505856.js","..\\chunks\\index.f6098fd6.js","..\\chunks\\paths.6aebeb5d.js","..\\chunks\\Content.5eceaa74.js","..\\assets\\2.65c1bf5f.css"],import.meta.url),()=>m(()=>import("../nodes/3.dff1826d.js"),["..\\nodes\\3.dff1826d.js","..\\chunks\\index.f6098fd6.js","..\\chunks\\Hero.4751f764.js","..\\chunks\\Content.5eceaa74.js","..\\chunks\\paths.6aebeb5d.js","..\\assets\\3.070225e8.css"],import.meta.url),()=>m(()=>import("../nodes/4.b6ea1e7f.js"),["..\\nodes\\4.b6ea1e7f.js","..\\chunks\\index.f6098fd6.js","..\\chunks\\Hero.4751f764.js","..\\chunks\\Content.5eceaa74.js","..\\chunks\\paths.6aebeb5d.js"],import.meta.url),()=>m(()=>import("../nodes/5.f2cc8288.js"),["..\\nodes\\5.f2cc8288.js","..\\chunks\\index.f6098fd6.js","..\\chunks\\Hero.4751f764.js","..\\chunks\\Content.5eceaa74.js","..\\chunks\\paths.6aebeb5d.js"],import.meta.url),()=>m(()=>import("../nodes/6.54861977.js"),["..\\nodes\\6.54861977.js","..\\chunks\\index.f6098fd6.js","..\\chunks\\Hero.4751f764.js","..\\chunks\\Content.5eceaa74.js","..\\chunks\\index.ee9b8c79.js","..\\chunks\\paths.6aebeb5d.js"],import.meta.url),()=>m(()=>import("../nodes/7.08a61a5b.js"),["..\\nodes\\7.08a61a5b.js","..\\chunks\\index.f6098fd6.js","..\\chunks\\Hero.4751f764.js","..\\chunks\\Content.5eceaa74.js","..\\chunks\\paths.6aebeb5d.js"],import.meta.url),()=>m(()=>import("../nodes/8.ffe9b5d6.js"),["..\\nodes\\8.ffe9b5d6.js","..\\chunks\\index.f6098fd6.js","..\\chunks\\Hero.4751f764.js","..\\chunks\\Content.5eceaa74.js","..\\chunks\\paths.6aebeb5d.js"],import.meta.url),()=>m(()=>import("../nodes/9.bf8836e7.js"),["..\\nodes\\9.bf8836e7.js","..\\chunks\\index.f6098fd6.js","..\\chunks\\Hero.4751f764.js","..\\chunks\\Content.5eceaa74.js","..\\chunks\\paths.6aebeb5d.js","..\\assets\\9.937fba0a.css"],import.meta.url),()=>m(()=>import("../nodes/10.20856104.js"),["..\\nodes\\10.20856104.js","..\\chunks\\index.f6098fd6.js","..\\chunks\\Hero.4751f764.js","..\\chunks\\Content.5eceaa74.js","..\\assets\\10.9ec33f3c.css"],import.meta.url)],oe=[],ae={"/":[2],"/competition/results/[year]":[-4],"/competition/tasks/[year]":[-5],"/countries":[-6],"/editions":[-7],"/gallery":[-8],"/gallery/[year]":[-9],"/participate":[9],"/schedule":[10]},le={handleError:({error:a})=>{console.error(a)}};export{ae as dictionary,le as hooks,ie as matchers,se as nodes,re as root,oe as server_loads};
