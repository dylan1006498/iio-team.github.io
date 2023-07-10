import{S as K,i as L,s as M,a as E,y as O,P as W,h as f,c as I,z as P,b,A as q,g as B,d as H,B as N,Q as X,q as D,r as R,k as $,l as v,m as g,n as u,R as Y,C as h,D as Z,u as ee,F as U}from"../chunks/index.dcfc5502.js";import{H as te,C as se}from"../chunks/Content.13626392.js";import{b as G}from"../chunks/paths.ace6b1b1.js";const{document:S}=X;function x(n,e,l){const s=n.slice();return s[2]=e[l],s}function ae(n){let e;return{c(){e=D("Archive of IIOT tasks and results")},l(l){e=R(l,"Archive of IIOT tasks and results")},m(l,s){b(l,e,s)},d(l){l&&f(e)}}}function z(n){let e,l;return{c(){e=$("a"),l=D("Tasks"),this.h()},l(s){e=v(s,"A",{class:!0,href:!0});var a=g(e);l=R(a,"Tasks"),a.forEach(f),this.h()},h(){u(e,"class","grow btn btn-outline text-lg rounded-lg"),u(e,"href",G+"/competition/tasks/2023")},m(s,a){b(s,e,a),h(e,l)},p:U,d(s){s&&f(e)}}}function F(n){let e,l;return{c(){e=$("a"),l=D("Results"),this.h()},l(s){e=v(s,"A",{class:!0,href:!0});var a=g(e);l=R(a,"Results"),a.forEach(f),this.h()},h(){u(e,"class","grow btn btn-outline text-lg rounded-lg"),u(e,"href",G+"/competition/results/2023")},m(s,a){b(s,e,a),h(e,l)},p:U,d(s){s&&f(e)}}}function Q(n){let e,l,s,a,o,t=n[2]+"",i,k,_,m,w,T,V,C;function J(...p){return n[1](n[2],...p)}let r=n[0].competitions[`${n[2]}`].tasks&&z(),c=n[0].competitions[`${n[2]}`].results&&F();return{c(){e=$("div"),l=$("input"),a=E(),o=$("div"),i=D(t),k=E(),_=$("div"),m=$("div"),r&&r.c(),w=E(),c&&c.c(),T=E(),this.h()},l(p){e=v(p,"DIV",{class:!0});var d=g(e);l=v(d,"INPUT",{type:!0,name:!0,id:!0}),a=I(d),o=v(d,"DIV",{class:!0});var j=g(o);i=R(j,t),j.forEach(f),k=I(d),_=v(d,"DIV",{class:!0});var y=g(_);m=v(y,"DIV",{class:!0});var A=g(m);r&&r.l(A),w=I(A),c&&c.l(A),A.forEach(f),y.forEach(f),T=I(d),d.forEach(f),this.h()},h(){u(l,"type","checkbox"),u(l,"name","archiveRadio"),u(l,"id",s="radio"+n[2]),u(o,"class","collapse-title text-xl font-semibold"),u(m,"class","flex gap-4 flex-col sm:flex-row"),u(_,"class","collapse-content"),u(e,"class","join-item collapse collapse-plus bg-base-200 border border-base-300")},m(p,d){b(p,e,d),h(e,l),h(e,a),h(e,o),h(o,i),h(e,k),h(e,_),h(_,m),r&&r.m(m,null),h(m,w),c&&c.m(m,null),h(e,T),V||(C=Z(l,"change",J),V=!0)},p(p,d){n=p,d&1&&s!==(s="radio"+n[2])&&u(l,"id",s),d&1&&t!==(t=n[2]+"")&&ee(i,t),n[0].competitions[`${n[2]}`].tasks?r?r.p(n,d):(r=z(),r.c(),r.m(m,w)):r&&(r.d(1),r=null),n[0].competitions[`${n[2]}`].results?c?c.p(n,d):(c=F(),c.c(),c.m(m,null)):c&&(c.d(1),c=null)},d(p){p&&f(e),r&&r.d(),c&&c.d(),V=!1,C()}}}function le(n){let e,l=n[0].years,s=[];for(let a=0;a<l.length;a+=1)s[a]=Q(x(n,l,a));return{c(){e=$("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=v(a,"DIV",{class:!0,id:!0});var o=g(e);for(let t=0;t<s.length;t+=1)s[t].l(o);o.forEach(f),this.h()},h(){u(e,"class","join join-vertical w-full max-w-2xl shadow-lg rounded-2xl"),u(e,"id","accordion")},m(a,o){b(a,e,o);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(a,o){if(o&1){l=a[0].years;let t;for(t=0;t<l.length;t+=1){const i=x(a,l,t);s[t]?s[t].p(i,o):(s[t]=Q(i),s[t].c(),s[t].m(e,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=l.length}},d(a){a&&f(e),Y(s,a)}}}function ne(n){let e,l,s,a,o;return l=new te({props:{$$slots:{default:[ae]},$$scope:{ctx:n}}}),a=new se({props:{$$slots:{default:[le]},$$scope:{ctx:n}}}),{c(){e=E(),O(l.$$.fragment),s=E(),O(a.$$.fragment),this.h()},l(t){W("svelte-3ee87a",S.head).forEach(f),e=I(t),P(l.$$.fragment,t),s=I(t),P(a.$$.fragment,t),this.h()},h(){S.title="Archive"},m(t,i){b(t,e,i),q(l,t,i),b(t,s,i),q(a,t,i),o=!0},p(t,[i]){const k={};i&32&&(k.$$scope={dirty:i,ctx:t}),l.$set(k);const _={};i&33&&(_.$$scope={dirty:i,ctx:t}),a.$set(_)},i(t){o||(B(l.$$.fragment,t),B(a.$$.fragment,t),o=!0)},o(t){H(l.$$.fragment,t),H(a.$$.fragment,t),o=!1},d(t){t&&f(e),N(l,t),t&&f(s),N(a,t)}}}function oe(n){document.getElementsByName("archiveRadio").forEach(e=>{e.id!=n&&(e.checked=!1)})}function ie(n,e,l){let{data:s}=e;const a=(o,t)=>oe(`radio${o}`);return n.$$set=o=>{"data"in o&&l(0,s=o.data)},[s,a]}class de extends K{constructor(e){super(),L(this,e,ie,ne,M,{data:0})}}export{de as component};
