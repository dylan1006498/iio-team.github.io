import{S as C,i as q,s as U,a as j,e as d,c as z,b as E,d as h,f as P,g,h as w,j as W,o as F,k as G,l as H,m as J,n as A,p,q as K,r as M,u as Q,v as y,w as D,x as k,y as v,z as I,A as R,B as L}from"../chunks/index.6de17838.js";const X="modulepreload",Y=function(a,e){return new URL(a,e).href},O={},m=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(_=>{if(_=Y(_,i),_ in O)return;O[_]=!0;const t=_.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!i)for(let l=r.length-1;l>=0;l--){const u=r[l];if(u.href===_&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${s}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":X,t||(o.as="script",o.crossOrigin=""),o.href=_,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${_}`)))})})).then(()=>e())},ie={};function Z(a){let e,n,i;var r=a[1][0];function _(t){return{props:{data:t[3],form:t[2]}}}return r&&(e=k(r,_(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){const c={};if(s&8&&(c.data=t[3]),s&4&&(c.form=t[2]),s&2&&r!==(r=t[1][0])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=k(r,_(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&w(n),e&&L(e,t)}}}function $(a){let e,n,i;var r=a[1][0];function _(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return r&&(e=k(r,_(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){const c={};if(s&8&&(c.data=t[3]),s&8215&&(c.$$scope={dirty:s,ctx:t}),s&2&&r!==(r=t[1][0])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=k(r,_(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&w(n),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][1];function _(t){return{props:{data:t[4],form:t[2]}}}return r&&(e=k(r,_(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){const c={};if(s&16&&(c.data=t[4]),s&4&&(c.form=t[2]),s&2&&r!==(r=t[1][1])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=k(r,_(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&w(n),e&&L(e,t)}}}function T(a){let e,n=a[6]&&V(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(w),this.h()},h(){A(e,"id","svelte-announcer"),A(e,"aria-live","assertive"),A(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){E(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function V(a){let e;return{c(){e=K(a[7])},l(n){e=M(n,a[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&w(e)}}}function ee(a){let e,n,i,r,_;const t=[$,Z],s=[];function c(l,u){return l[1][1]?0:1}e=c(a),n=s[e]=t[e](a);let o=a[5]&&T(a);return{c(){n.c(),i=j(),o&&o.c(),r=d()},l(l){n.l(l),i=z(l),o&&o.l(l),r=d()},m(l,u){s[e].m(l,u),E(l,i,u),o&&o.m(l,u),E(l,r,u),_=!0},p(l,[u]){let b=e;e=c(l),e===b?s[e].p(l,u):(y(),h(s[b],1,1,()=>{s[b]=null}),P(),n=s[e],n?n.p(l,u):(n=s[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,u):(o=T(l),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},i(l){_||(g(n),_=!0)},o(l){h(n),_=!1},d(l){s[e].d(l),l&&w(i),o&&o.d(l),l&&w(r)}}}function te(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:c=null}=e,{data_1:o=null}=e;W(i.page.notify);let l=!1,u=!1,b=null;F(()=>{const f=i.page.subscribe(()=>{l&&(n(6,u=!0),n(7,b=document.title||"untitled page"))});return n(5,l=!0),f});function N(f){D[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function B(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,r=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,s=f.form),"data_0"in f&&n(3,c=f.data_0),"data_1"in f&&n(4,o=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,c,o,l,u,b,i,r,N,S,B]}class re extends C{constructor(e){super(),q(this,e,te,ee,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const se=[()=>m(()=>import("../nodes/0.a1e3fb23.js"),["..\\nodes\\0.a1e3fb23.js","..\\chunks\\index.6de17838.js","..\\chunks\\paths.78519742.js","..\\chunks\\stores.6672e1f1.js","..\\chunks\\singletons.c9efa486.js","..\\chunks\\index.a08b727d.js","..\\assets\\0.5c66d885.css"],import.meta.url),()=>m(()=>import("../nodes/1.ac5967ab.js"),["..\\nodes\\1.ac5967ab.js","..\\chunks\\index.6de17838.js","..\\chunks\\stores.6672e1f1.js","..\\chunks\\singletons.c9efa486.js","..\\chunks\\index.a08b727d.js","..\\chunks\\paths.78519742.js"],import.meta.url),()=>m(()=>import("../nodes/2.8e012cb3.js"),["..\\nodes\\2.8e012cb3.js","..\\chunks\\index.6de17838.js","..\\chunks\\paths.78519742.js","..\\chunks\\Content.772ca22b.js","..\\assets\\2.65c1bf5f.css"],import.meta.url),()=>m(()=>import("../nodes/3.291f77cf.js"),["..\\nodes\\3.291f77cf.js","..\\chunks\\index.6de17838.js","..\\chunks\\paths.78519742.js"],import.meta.url),()=>m(()=>import("../nodes/4.300cc4aa.js"),["..\\nodes\\4.300cc4aa.js","..\\chunks\\index.6de17838.js","..\\chunks\\Hero.38554a3e.js","..\\chunks\\Content.772ca22b.js","..\\chunks\\paths.78519742.js","..\\assets\\4.070225e8.css"],import.meta.url),()=>m(()=>import("../nodes/5.c5c6da5a.js"),["..\\nodes\\5.c5c6da5a.js","..\\chunks\\index.6de17838.js","..\\chunks\\paths.78519742.js","..\\chunks\\Hero.38554a3e.js","..\\chunks\\Content.772ca22b.js"],import.meta.url),()=>m(()=>import("../nodes/6.02769be3.js"),["..\\nodes\\6.02769be3.js","..\\chunks\\index.6de17838.js","..\\chunks\\Hero.38554a3e.js","..\\chunks\\Content.772ca22b.js","..\\chunks\\paths.78519742.js","..\\chunks\\Description.33d2b279.js"],import.meta.url),()=>m(()=>import("../nodes/7.fc30a816.js"),["..\\nodes\\7.fc30a816.js","..\\chunks\\index.6de17838.js","..\\chunks\\Hero.38554a3e.js","..\\chunks\\Content.772ca22b.js","..\\chunks\\index.a08b727d.js","..\\chunks\\paths.78519742.js"],import.meta.url),()=>m(()=>import("../nodes/8.c16bdbb0.js"),["..\\nodes\\8.c16bdbb0.js","..\\chunks\\index.6de17838.js","..\\chunks\\Hero.38554a3e.js","..\\chunks\\Content.772ca22b.js","..\\chunks\\paths.78519742.js","..\\chunks\\Picture.4cc3ea29.js"],import.meta.url),()=>m(()=>import("../nodes/9.ad2a3115.js"),["..\\nodes\\9.ad2a3115.js","..\\chunks\\index.6de17838.js","..\\chunks\\Hero.38554a3e.js","..\\chunks\\Content.772ca22b.js","..\\chunks\\paths.78519742.js","..\\chunks\\Picture.4cc3ea29.js"],import.meta.url),()=>m(()=>import("../nodes/10.9269e32a.js"),["..\\nodes\\10.9269e32a.js","..\\chunks\\index.6de17838.js","..\\chunks\\Hero.38554a3e.js","..\\chunks\\Content.772ca22b.js","..\\chunks\\paths.78519742.js","..\\assets\\10.937fba0a.css"],import.meta.url),()=>m(()=>import("../nodes/11.29be2218.js"),["..\\nodes\\11.29be2218.js","..\\chunks\\index.6de17838.js","..\\chunks\\Hero.38554a3e.js","..\\chunks\\Content.772ca22b.js","..\\chunks\\Description.33d2b279.js","..\\assets\\11.9ec33f3c.css"],import.meta.url)],oe=[],ae={"/":[2],"/404":[3],"/competition/results/[year]":[-5],"/competition/tasks/[year]":[-6],"/countries":[-7],"/editions":[-8],"/gallery":[-9],"/gallery/[year]":[-10],"/participate":[10],"/schedule":[11]},le={handleError:({error:a})=>{console.error(a)}};export{ae as dictionary,le as hooks,ie as matchers,se as nodes,re as root,oe as server_loads};