import{S as F,i as z,s as A,a as k,y as x,Q as H,h,c as I,z as y,b as M,A as B,g as C,d as G,B as R,U as N,q as V,r as j,k as p,l as b,m as v,n as i,C as O,D as _,R as L,E as P,V as Q}from"../chunks/index.c81cefb2.js";import{H as J,C as K}from"../chunks/Content.408f155b.js";const{document:T}=N;function U(o,t,s){const a=o.slice();return a[3]=t[s],a}function W(o){let t;return{c(){t=V("Subgallery")},l(s){t=j(s,"Subgallery")},m(s,a){M(s,t,a)},d(s){s&&h(t)}}}function D(o){let t,s,a,l,r,e,m;return{c(){t=p("button"),s=p("figure"),a=p("img"),this.h()},l(d){t=b(d,"BUTTON",{class:!0});var u=v(t);s=b(u,"FIGURE",{class:!0});var $=v(s);a=b($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(h),u.forEach(h),this.h()},h(){O(a.src,l="https://picsum.photos/1366/768?random="+o[3].id)||i(a,"src",l),i(a,"alt",r=o[3].name),i(a,"class","min-h-full object-cover"),i(s,"class","w-full h-60 bg-base-200"),i(t,"class","sm:btn-active card card-compact w-full lg:w-72 xl:w-96 shadow-lg overflow-hidden cursor-pointer border border-base-300")},m(d,u){M(d,t,u),_(t,s),_(s,a),e||(m=P(t,"click",function(){Q(o[2](o[3]))&&o[2](o[3]).apply(this,arguments)}),e=!0)},p(d,u){o=d,u&1&&!O(a.src,l="https://picsum.photos/1366/768?random="+o[3].id)&&i(a,"src",l),u&1&&r!==(r=o[3].name)&&i(a,"alt",r)},d(d){d&&h(t),e=!1,m()}}}function X(o){let t,s,a,l,r,e,m,d,u,$,w=o[0].images,f=[];for(let c=0;c<w.length;c+=1)f[c]=D(U(o,w,c));return{c(){t=p("div");for(let c=0;c<f.length;c+=1)f[c].c();s=k(),a=p("dialog"),l=p("form"),r=p("img"),d=k(),u=p("form"),$=p("button"),this.h()},l(c){t=b(c,"DIV",{class:!0});var g=v(t);for(let S=0;S<f.length;S+=1)f[S].l(g);s=I(g),a=b(g,"DIALOG",{id:!0,class:!0});var n=v(a);l=b(n,"FORM",{method:!0,class:!0});var E=v(l);r=b(E,"IMG",{class:!0,src:!0,alt:!0}),E.forEach(h),d=I(n),u=b(n,"FORM",{method:!0,class:!0});var q=v(u);$=b(q,"BUTTON",{}),v($).forEach(h),q.forEach(h),n.forEach(h),g.forEach(h),this.h()},h(){i(r,"class","w-full"),O(r.src,e="https://picsum.photos/1366/768?random="+o[1].id)||i(r,"src",e),i(r,"alt",m=o[1].name),i(l,"method","dialog"),i(l,"class","modal-box p-0 w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl bg-base-300"),i(u,"method","dialog"),i(u,"class","modal-backdrop"),i(a,"id","imageModal"),i(a,"class","modal px-4 bg-black bg-opacity-60 backdrop-blur-md"),i(t,"class","grid w-full lg:w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8")},m(c,g){M(c,t,g);for(let n=0;n<f.length;n+=1)f[n]&&f[n].m(t,null);_(t,s),_(t,a),_(a,l),_(l,r),_(a,d),_(a,u),_(u,$)},p(c,g){if(g&5){w=c[0].images;let n;for(n=0;n<w.length;n+=1){const E=U(c,w,n);f[n]?f[n].p(E,g):(f[n]=D(E),f[n].c(),f[n].m(t,s))}for(;n<f.length;n+=1)f[n].d(1);f.length=w.length}g&2&&!O(r.src,e="https://picsum.photos/1366/768?random="+c[1].id)&&i(r,"src",e),g&2&&m!==(m=c[1].name)&&i(r,"alt",m)},d(c){c&&h(t),L(f,c)}}}function Y(o){let t,s,a,l,r;return s=new J({props:{$$slots:{default:[W]},$$scope:{ctx:o}}}),l=new K({props:{$$slots:{default:[X]},$$scope:{ctx:o}}}),{c(){t=k(),x(s.$$.fragment),a=k(),x(l.$$.fragment),this.h()},l(e){H("svelte-hqcz94",T.head).forEach(h),t=I(e),y(s.$$.fragment,e),a=I(e),y(l.$$.fragment,e),this.h()},h(){T.title="Some subgallery"},m(e,m){M(e,t,m),B(s,e,m),M(e,a,m),B(l,e,m),r=!0},p(e,[m]){const d={};m&64&&(d.$$scope={dirty:m,ctx:e}),s.$set(d);const u={};m&67&&(u.$$scope={dirty:m,ctx:e}),l.$set(u)},i(e){r||(C(s.$$.fragment,e),C(l.$$.fragment,e),r=!0)},o(e){G(s.$$.fragment,e),G(l.$$.fragment,e),r=!1},d(e){e&&h(t),R(s,e),e&&h(a),R(l,e)}}}function Z(o,t,s){let{data:a}=t,l={};function r(e){s(1,l=e),document.getElementById("imageModal").showModal()}return o.$$set=e=>{"data"in e&&s(0,a=e.data)},[a,l,r]}class ae extends F{constructor(t){super(),z(this,t,Z,Y,A,{data:0})}}export{ae as component};
