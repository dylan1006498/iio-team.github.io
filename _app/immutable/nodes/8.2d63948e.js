import{S as N,i as Q,s as R,a as I,y as j,Q as U,h,c as k,z,b as E,A as D,g as P,d as T,B as V,q as H,r as S,k as v,l as $,m as w,n as u,C as p,T as J,K as x,u as M}from"../chunks/index.e60b48c8.js";import{H as W}from"../chunks/Hero.8fb50249.js";import{C as X}from"../chunks/Content.8b4e0286.js";import{b as y}from"../chunks/paths.46aec4b4.js";function G(o,e,l){const n=o.slice();return n[1]=e[l],n}function Y(o){let e;return{c(){e=H("Friend pages")},l(l){e=S(l,"Friend pages")},m(l,n){E(l,e,n)},d(l){l&&h(e)}}}function L(o){let e,l,n,s,r,t=o[1].school.name+"",a,f;return{c(){e=v("a"),l=v("span"),n=H("Leader School / Organization"),r=I(),a=H(t),this.h()},l(i){e=$(i,"A",{class:!0,href:!0});var c=w(e);l=$(c,"SPAN",{id:!0,class:!0});var g=w(l);n=S(g,"Leader School / Organization"),g.forEach(h),r=k(c),a=S(c,t),c.forEach(h),this.h()},h(){u(l,"id",s=o[1].name),u(l,"class","badge badge-sm xs:badge-md absolute top-0 -translate-y-full rounded-b-none rounded-t-lg badge-info transition-none h-auto"),u(e,"class","relative h-auto py-2 box-border btn btn-outline text-lg w-full normal-case flex-col"),u(e,"href",f=o[1].school.url)},m(i,c){E(i,e,c),p(e,l),p(l,n),p(e,r),p(e,a)},p(i,c){c&1&&s!==(s=i[1].name)&&u(l,"id",s),c&1&&t!==(t=i[1].school.name+"")&&M(a,t),c&1&&f!==(f=i[1].school.url)&&u(e,"href",f)},d(i){i&&h(e)}}}function B(o){let e,l,n;return{c(){e=v("a"),l=H("IIOT website"),this.h()},l(s){e=$(s,"A",{class:!0,href:!0});var r=w(e);l=S(r,"IIOT website"),r.forEach(h),this.h()},h(){u(e,"class","h-auto py-2 btn btn-outline text-lg w-full"),u(e,"href",n=o[1].iiot)},m(s,r){E(s,e,r),p(e,l)},p(s,r){r&1&&n!==(n=s[1].iiot)&&u(e,"href",n)},d(s){s&&h(e)}}}function K(o){let e,l,n,s,r,t,a,f=o[1].name+"",i,c,g,q,F,m=o[1].school&&L(o),d=o[1].iiot&&B(o);return{c(){e=v("div"),l=v("figure"),n=v("img"),t=I(),a=v("h1"),i=H(f),c=I(),g=v("div"),m&&m.c(),q=I(),d&&d.c(),F=I(),this.h()},l(_){e=$(_,"DIV",{class:!0});var b=w(e);l=$(b,"FIGURE",{class:!0});var A=w(l);n=$(A,"IMG",{class:!0,src:!0,alt:!0}),t=k(A),a=$(A,"H1",{class:!0});var O=w(a);i=S(O,f),O.forEach(h),A.forEach(h),c=k(b),g=$(b,"DIV",{class:!0});var C=w(g);m&&m.l(C),q=k(C),d&&d.l(C),C.forEach(h),F=k(b),b.forEach(h),this.h()},h(){u(n,"class","w-36 rounded-lg"),x(n.src,s=y+"/images/flags/"+o[1].name+".svg")||u(n,"src",s),u(n,"alt",r="flag of "+o[1].name),u(a,"class","card-title h-fit justify-center text-2xl"),u(l,"class","flex-col min-w-fit justify-center items-center gap-4 p-8 pb-0 md:pb-8 md:pr-0"),u(g,"class","card-body w-full md:items-start gap-4 p-8 pt-0 md:pt-8 md:pl-0"),u(e,"class","card md:card-side min-w-fit w-full justify-center gap-8 bg-base-200 shadow-lg border border-base-300")},m(_,b){E(_,e,b),p(e,l),p(l,n),p(l,t),p(l,a),p(a,i),p(e,c),p(e,g),m&&m.m(g,null),p(g,q),d&&d.m(g,null),p(e,F)},p(_,b){b&1&&!x(n.src,s=y+"/images/flags/"+_[1].name+".svg")&&u(n,"src",s),b&1&&r!==(r="flag of "+_[1].name)&&u(n,"alt",r),b&1&&f!==(f=_[1].name+"")&&M(i,f),_[1].school?m?m.p(_,b):(m=L(_),m.c(),m.m(g,q)):m&&(m.d(1),m=null),_[1].iiot?d?d.p(_,b):(d=B(_),d.c(),d.m(g,null)):d&&(d.d(1),d=null)},d(_){_&&h(e),m&&m.d(),d&&d.d()}}}function Z(o){let e,l,n,s,r=o[0].countries,t=[];for(let a=0;a<r.length;a+=1)t[a]=K(G(o,r,a));return{c(){e=v("p"),l=H("Here's the list of the participating countries and their websites."),n=I(),s=v("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=$(a,"P",{class:!0});var f=w(e);l=S(f,"Here's the list of the participating countries and their websites."),f.forEach(h),n=k(a),s=$(a,"DIV",{class:!0});var i=w(s);for(let c=0;c<t.length;c+=1)t[c].l(i);i.forEach(h),this.h()},h(){u(e,"class","px-2 text-lg max-w-4xl"),u(s,"class","flex flex-col items-center w-full max-w-2xl gap-8")},m(a,f){E(a,e,f),p(e,l),E(a,n,f),E(a,s,f);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(s,null)},p(a,f){if(f&1){r=a[0].countries;let i;for(i=0;i<r.length;i+=1){const c=G(a,r,i);t[i]?t[i].p(c,f):(t[i]=K(c),t[i].c(),t[i].m(s,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=r.length}},d(a){a&&h(e),a&&h(n),a&&h(s),J(t,a)}}}function ee(o){let e,l,n,s,r;return l=new W({props:{$$slots:{default:[Y]},$$scope:{ctx:o}}}),s=new X({props:{$$slots:{default:[Z]},$$scope:{ctx:o}}}),{c(){e=I(),j(l.$$.fragment),n=I(),j(s.$$.fragment),this.h()},l(t){U("svelte-1clnq4w",document.head).forEach(h),e=k(t),z(l.$$.fragment,t),n=k(t),z(s.$$.fragment,t),this.h()},h(){document.title="Friend pages"},m(t,a){E(t,e,a),D(l,t,a),E(t,n,a),D(s,t,a),r=!0},p(t,[a]){const f={};a&16&&(f.$$scope={dirty:a,ctx:t}),l.$set(f);const i={};a&17&&(i.$$scope={dirty:a,ctx:t}),s.$set(i)},i(t){r||(P(l.$$.fragment,t),P(s.$$.fragment,t),r=!0)},o(t){T(l.$$.fragment,t),T(s.$$.fragment,t),r=!1},d(t){t&&h(e),V(l,t),t&&h(n),V(s,t)}}}function te(o,e,l){let{data:n}=e;return o.$$set=s=>{"data"in s&&l(0,n=s.data)},[n]}class ne extends N{constructor(e){super(),Q(this,e,te,ee,R,{data:0})}}export{ne as component};
