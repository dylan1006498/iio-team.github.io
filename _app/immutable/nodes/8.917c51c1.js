import{S as B,i as F,s as M,a as b,y as C,Q as P,h as f,c as w,z as I,b as $,A as k,g as q,d as D,B as H,q as j,r as z,k as m,l as g,m as p,n as i,R as Q,C as A,D as _,u as U}from"../chunks/index.c81cefb2.js";import{H as J,C as K}from"../chunks/Content.408f155b.js";import{b as R}from"../chunks/paths.c0e3b009.js";function S(o,s,l){const t=o.slice();return t[1]=s[l],t}function L(o){let s;return{c(){s=j("Gallery")},l(l){s=z(l,"Gallery")},m(l,t){$(l,s,t)},d(l){l&&f(s)}}}function V(o){let s,l,t,a,n,e,r,u=o[1].name+"",d,y,v;return{c(){s=m("a"),l=m("figure"),t=m("img"),n=b(),e=m("div"),r=m("h2"),d=j(u),y=b(),this.h()},l(h){s=g(h,"A",{href:!0,class:!0});var c=p(s);l=g(c,"FIGURE",{class:!0});var E=p(l);t=g(E,"IMG",{src:!0,class:!0,alt:!0}),E.forEach(f),n=w(c),e=g(c,"DIV",{class:!0});var x=p(e);r=g(x,"H2",{class:!0});var G=p(r);d=z(G,u),G.forEach(f),x.forEach(f),y=w(c),c.forEach(f),this.h()},h(){A(t.src,a="https://picsum.photos/1366/768?random="+o[1].id)||i(t,"src",a),i(t,"class","min-h-full object-cover"),i(t,"alt",""),i(l,"class","w-full h-56 bg-base-200"),i(r,"class","card-title text-xl text-base-content"),i(e,"class","card-body bg-base-300 w-full h-16 transition-all svelte-1vwv9x9"),i(s,"href",v=R+"/gallery/"+o[1].id),i(s,"class","card card-compact w-full lg:w-72 xl:w-96 bg-base-300 shadow-lg overflow-hidden border border-base-300 svelte-1vwv9x9")},m(h,c){$(h,s,c),_(s,l),_(l,t),_(s,n),_(s,e),_(e,r),_(r,d),_(s,y)},p(h,c){c&1&&!A(t.src,a="https://picsum.photos/1366/768?random="+h[1].id)&&i(t,"src",a),c&1&&u!==(u=h[1].name+"")&&U(d,u),c&1&&v!==(v=R+"/gallery/"+h[1].id)&&i(s,"href",v)},d(h){h&&f(s)}}}function N(o){let s,l=o[0].galleries,t=[];for(let a=0;a<l.length;a+=1)t[a]=V(S(o,l,a));return{c(){s=m("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){s=g(a,"DIV",{class:!0});var n=p(s);for(let e=0;e<t.length;e+=1)t[e].l(n);n.forEach(f),this.h()},h(){i(s,"class","grid w-full lg:w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ")},m(a,n){$(a,s,n);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(s,null)},p(a,n){if(n&1){l=a[0].galleries;let e;for(e=0;e<l.length;e+=1){const r=S(a,l,e);t[e]?t[e].p(r,n):(t[e]=V(r),t[e].c(),t[e].m(s,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=l.length}},d(a){a&&f(s),Q(t,a)}}}function O(o){let s,l,t,a,n;return l=new J({props:{$$slots:{default:[L]},$$scope:{ctx:o}}}),a=new K({props:{$$slots:{default:[N]},$$scope:{ctx:o}}}),{c(){s=b(),C(l.$$.fragment),t=b(),C(a.$$.fragment),this.h()},l(e){P("svelte-fw82y6",document.head).forEach(f),s=w(e),I(l.$$.fragment,e),t=w(e),I(a.$$.fragment,e),this.h()},h(){document.title="Gallery"},m(e,r){$(e,s,r),k(l,e,r),$(e,t,r),k(a,e,r),n=!0},p(e,[r]){const u={};r&16&&(u.$$scope={dirty:r,ctx:e}),l.$set(u);const d={};r&17&&(d.$$scope={dirty:r,ctx:e}),a.$set(d)},i(e){n||(q(l.$$.fragment,e),q(a.$$.fragment,e),n=!0)},o(e){D(l.$$.fragment,e),D(a.$$.fragment,e),n=!1},d(e){e&&f(s),H(l,e),e&&f(t),H(a,e)}}}function T(o,s,l){let{data:t}=s;return o.$$set=a=>{"data"in a&&l(0,t=a.data)},[t]}class Z extends B{constructor(s){super(),F(this,s,T,O,M,{data:0})}}export{Z as component};
