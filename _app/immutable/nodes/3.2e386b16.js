import{S as J,i as K,s as N,a as A,y as R,Q as U,h as f,c as E,z as H,b as $,A as q,g as B,d as O,B as F,q as I,r as y,k as d,l as m,m as v,n as u,D as w,R as T,u as j,T as S,C as V}from"../chunks/index.c81cefb2.js";import{H as W,C as X}from"../chunks/Content.408f155b.js";import{b as z}from"../chunks/paths.c0e3b009.js";function G(c,e,l){const s=c.slice();return s[1]=e[l],s}function L(c,e,l){const s=c.slice();return s[4]=e[l],s}function M(c,e,l){const s=c.slice();return s[7]=e[l],s}function Z(c){let e;return{c(){e=I("IIOT International Final 2023 Results")},l(l){e=y(l,"IIOT International Final 2023 Results")},m(l,s){$(l,e,s)},d(l){l&&f(e)}}}function P(c){let e,l=c[7]+"",s;return{c(){e=d("th"),s=I(l),this.h()},l(t){e=m(t,"TH",{class:!0});var n=v(e);s=y(n,l),n.forEach(f),this.h()},h(){u(e,"class","whitespace-break-spaces svelte-pu7ac8")},m(t,n){$(t,e,n),w(e,s)},p(t,n){n&1&&l!==(l=t[7]+"")&&j(s,l)},d(t){t&&f(e)}}}function x(c){let e=c[1][`${c[4]}`]+"",l;return{c(){l=I(e)},l(s){l=y(s,e)},m(s,t){$(s,l,t)},p(s,t){t&1&&e!==(e=s[1][`${s[4]}`]+"")&&j(l,e)},d(s){s&&f(l)}}}function ee(c){let e,l,s,t,n;return{c(){e=d("div"),l=d("img"),this.h()},l(a){e=m(a,"DIV",{class:!0,"data-tip":!0});var r=v(e);l=m(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(f),this.h()},h(){u(l,"class","w-7 h-7"),V(l.src,s=z+"/images/medals/"+c[1].Award+".png")||u(l,"src",s),u(l,"alt",t=c[1].Award),u(e,"class","tooltip h-7 cursor-help"),u(e,"data-tip",n=c[1].Award)},m(a,r){$(a,e,r),w(e,l)},p(a,r){r&1&&!V(l.src,s=z+"/images/medals/"+a[1].Award+".png")&&u(l,"src",s),r&1&&t!==(t=a[1].Award)&&u(l,"alt",t),r&1&&n!==(n=a[1].Award)&&u(e,"data-tip",n)},d(a){a&&f(e)}}}function Q(c){let e;function l(n,a){return n[4]=="Award"&&n[1].Award&&n[1].Award!=""?ee:x}let s=l(c),t=s(c);return{c(){e=d("td"),t.c(),this.h()},l(n){e=m(n,"TD",{class:!0});var a=v(e);t.l(a),a.forEach(f),this.h()},h(){u(e,"class","svelte-pu7ac8"),S(e,"left",c[4]=="Team"||c[4]=="Country")},m(n,a){$(n,e,a),t.m(e,null)},p(n,a){s===(s=l(n))&&t?t.p(n,a):(t.d(1),t=s(n),t&&(t.c(),t.m(e,null))),a&1&&S(e,"left",n[4]=="Team"||n[4]=="Country")},d(n){n&&f(e),t.d()}}}function Y(c){let e,l,s=c[0].headers,t=[];for(let n=0;n<s.length;n+=1)t[n]=Q(L(c,s,n));return{c(){e=d("tr");for(let n=0;n<t.length;n+=1)t[n].c();l=A(),this.h()},l(n){e=m(n,"TR",{class:!0});var a=v(e);for(let r=0;r<t.length;r+=1)t[r].l(a);l=E(a),a.forEach(f),this.h()},h(){u(e,"class","svelte-pu7ac8")},m(n,a){$(n,e,a);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null);w(e,l)},p(n,a){if(a&1){s=n[0].headers;let r;for(r=0;r<s.length;r+=1){const h=L(n,s,r);t[r]?t[r].p(h,a):(t[r]=Q(h),t[r].c(),t[r].m(e,l))}for(;r<t.length;r+=1)t[r].d(1);t.length=s.length}},d(n){n&&f(e),T(t,n)}}}function te(c){let e,l,s,t,n,a,r=c[0].headers,h=[];for(let i=0;i<r.length;i+=1)h[i]=P(M(c,r,i));let p=c[0].rows,_=[];for(let i=0;i<p.length;i+=1)_[i]=Y(G(c,p,i));return{c(){e=d("div"),l=d("table"),s=d("thead"),t=d("tr");for(let i=0;i<h.length;i+=1)h[i].c();n=A(),a=d("tbody");for(let i=0;i<_.length;i+=1)_[i].c();this.h()},l(i){e=m(i,"DIV",{class:!0});var g=v(e);l=m(g,"TABLE",{class:!0});var o=v(l);s=m(o,"THEAD",{class:!0});var b=v(s);t=m(b,"TR",{class:!0});var C=v(t);for(let k=0;k<h.length;k+=1)h[k].l(C);C.forEach(f),b.forEach(f),n=E(o),a=m(o,"TBODY",{class:!0});var D=v(a);for(let k=0;k<_.length;k+=1)_[k].l(D);D.forEach(f),o.forEach(f),g.forEach(f),this.h()},h(){u(t,"class","svelte-pu7ac8"),u(s,"class","svelte-pu7ac8"),u(a,"class","svelte-pu7ac8"),u(l,"class","table w-fit mx-auto table-sm lg:table-md rounded-2xl bg-base-200 "),u(e,"class","overflow-x-auto w-full rounded-2xl")},m(i,g){$(i,e,g),w(e,l),w(l,s),w(s,t);for(let o=0;o<h.length;o+=1)h[o]&&h[o].m(t,null);w(l,n),w(l,a);for(let o=0;o<_.length;o+=1)_[o]&&_[o].m(a,null)},p(i,g){if(g&1){r=i[0].headers;let o;for(o=0;o<r.length;o+=1){const b=M(i,r,o);h[o]?h[o].p(b,g):(h[o]=P(b),h[o].c(),h[o].m(t,null))}for(;o<h.length;o+=1)h[o].d(1);h.length=r.length}if(g&1){p=i[0].rows;let o;for(o=0;o<p.length;o+=1){const b=G(i,p,o);_[o]?_[o].p(b,g):(_[o]=Y(b),_[o].c(),_[o].m(a,null))}for(;o<_.length;o+=1)_[o].d(1);_.length=p.length}},d(i){i&&f(e),T(h,i),T(_,i)}}}function le(c){let e,l,s,t,n;return l=new W({props:{$$slots:{default:[Z]},$$scope:{ctx:c}}}),t=new X({props:{$$slots:{default:[te]},$$scope:{ctx:c}}}),{c(){e=A(),R(l.$$.fragment),s=A(),R(t.$$.fragment),this.h()},l(a){U("svelte-1tyhe8u",document.head).forEach(f),e=E(a),H(l.$$.fragment,a),s=E(a),H(t.$$.fragment,a),this.h()},h(){document.title="Results"},m(a,r){$(a,e,r),q(l,a,r),$(a,s,r),q(t,a,r),n=!0},p(a,[r]){const h={};r&1024&&(h.$$scope={dirty:r,ctx:a}),l.$set(h);const p={};r&1025&&(p.$$scope={dirty:r,ctx:a}),t.$set(p)},i(a){n||(B(l.$$.fragment,a),B(t.$$.fragment,a),n=!0)},o(a){O(l.$$.fragment,a),O(t.$$.fragment,a),n=!1},d(a){a&&f(e),F(l,a),a&&f(s),F(t,a)}}}function ae(c,e,l){let{data:s}=e;return c.$$set=t=>{"data"in t&&l(0,s=t.data)},[s]}class oe extends J{constructor(e){super(),K(this,e,ae,le,N,{data:0})}}export{oe as component};
