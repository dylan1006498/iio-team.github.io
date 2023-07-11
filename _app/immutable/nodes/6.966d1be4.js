import{S as st,i as nt,s as lt,a as D,y as L,Q as rt,h as c,c as T,z as M,b as A,A as R,g as U,d as W,B as X,q as g,r as $,k as f,l as h,m as u,n as d,T as ot,C as l,u as Y}from"../chunks/index.e60b48c8.js";import{H as ct}from"../chunks/Hero.8fb50249.js";import{C as it}from"../chunks/Content.8b4e0286.js";import{b as tt}from"../chunks/paths.46aec4b4.js";function et(i,n,s){const e=i.slice();return e[1]=n[s],e}function dt(i){let n;return{c(){n=g("IIOT International Final 2023 Tasks")},l(s){n=$(s,"IIOT International Final 2023 Tasks")},m(s,e){A(s,n,e)},d(s){s&&c(n)}}}function at(i){let n,s,e,a=i[1].name+"",o,t,r=i[1].id+"",E,I,H,v,_,k,q,w,y,C,N,b,P,O,S,Z,z;return{c(){n=f("div"),s=f("div"),e=f("h2"),o=g(a),t=g(" ("),E=g(r),I=g(")"),H=D(),v=f("div"),_=f("a"),k=f("p"),q=g("Statement "),w=f("span"),y=g("PDF"),N=D(),b=f("a"),P=f("p"),O=g("Solutions and test data "),S=f("span"),Z=g("ZIP"),z=D(),this.h()},l(m){n=h(m,"DIV",{class:!0});var p=u(n);s=h(p,"DIV",{class:!0});var F=u(s);e=h(F,"H2",{class:!0});var x=u(e);o=$(x,a),t=$(x," ("),E=$(x,r),I=$(x,")"),x.forEach(c),H=T(F),v=h(F,"DIV",{class:!0});var V=u(v);_=h(V,"A",{class:!0,href:!0,target:!0});var j=u(_);k=h(j,"P",{});var B=u(k);q=$(B,"Statement "),w=h(B,"SPAN",{class:!0});var G=u(w);y=$(G,"PDF"),G.forEach(c),B.forEach(c),j.forEach(c),N=T(V),b=h(V,"A",{class:!0,href:!0,download:!0});var J=u(b);P=h(J,"P",{});var Q=u(P);O=$(Q,"Solutions and test data "),S=h(Q,"SPAN",{class:!0});var K=u(S);Z=$(K,"ZIP"),K.forEach(c),Q.forEach(c),J.forEach(c),V.forEach(c),F.forEach(c),z=T(p),p.forEach(c),this.h()},h(){d(e,"class","card-title text-xl"),d(w,"class","badge badge-sm badge-info"),d(_,"class","text-lg normal-case h-auto px-4 py-2 btn btn-outline grow w-fit"),d(_,"href",C=tt+"/tasks/2023/"+i[1].id+"/english.pdf"),d(_,"target","_blank"),d(S,"class","badge badge-sm badge-warning"),d(b,"class","btn-disabled text-lg normal-case h-auto px-4 py-2 btn btn-outline grow w-fit"),d(b,"href","#"),d(b,"download",""),d(v,"class","card-actions items-stretch gap-4"),d(s,"class","card-body gap-4 p-8"),d(n,"class","card bg-base-200 shadow-lg border border-base-300")},m(m,p){A(m,n,p),l(n,s),l(s,e),l(e,o),l(e,t),l(e,E),l(e,I),l(s,H),l(s,v),l(v,_),l(_,k),l(k,q),l(k,w),l(w,y),l(v,N),l(v,b),l(b,P),l(P,O),l(P,S),l(S,Z),l(n,z)},p(m,p){p&1&&a!==(a=m[1].name+"")&&Y(o,a),p&1&&r!==(r=m[1].id+"")&&Y(E,r),p&1&&C!==(C=tt+"/tasks/2023/"+m[1].id+"/english.pdf")&&d(_,"href",C)},d(m){m&&c(n)}}}function ft(i){let n,s=i[0].tasks,e=[];for(let a=0;a<s.length;a+=1)e[a]=at(et(i,s,a));return{c(){n=f("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){n=h(a,"DIV",{class:!0});var o=u(n);for(let t=0;t<e.length;t+=1)e[t].l(o);o.forEach(c),this.h()},h(){d(n,"class","grid w-fit grid-cols-1 md:grid-cols-2 gap-8")},m(a,o){A(a,n,o);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(n,null)},p(a,o){if(o&1){s=a[0].tasks;let t;for(t=0;t<s.length;t+=1){const r=et(a,s,t);e[t]?e[t].p(r,o):(e[t]=at(r),e[t].c(),e[t].m(n,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=s.length}},d(a){a&&c(n),ot(e,a)}}}function ht(i){let n,s,e,a,o;return s=new ct({props:{$$slots:{default:[dt]},$$scope:{ctx:i}}}),a=new it({props:{$$slots:{default:[ft]},$$scope:{ctx:i}}}),{c(){n=D(),L(s.$$.fragment),e=D(),L(a.$$.fragment),this.h()},l(t){rt("svelte-1hbdog2",document.head).forEach(c),n=T(t),M(s.$$.fragment,t),e=T(t),M(a.$$.fragment,t),this.h()},h(){document.title="Tasks"},m(t,r){A(t,n,r),R(s,t,r),A(t,e,r),R(a,t,r),o=!0},p(t,[r]){const E={};r&16&&(E.$$scope={dirty:r,ctx:t}),s.$set(E);const I={};r&17&&(I.$$scope={dirty:r,ctx:t}),a.$set(I)},i(t){o||(U(s.$$.fragment,t),U(a.$$.fragment,t),o=!0)},o(t){W(s.$$.fragment,t),W(a.$$.fragment,t),o=!1},d(t){t&&c(n),X(s,t),t&&c(e),X(a,t)}}}function ut(i,n,s){let{data:e}=n;return i.$$set=a=>{"data"in a&&s(0,e=a.data)},[e]}class $t extends st{constructor(n){super(),nt(this,n,ut,ht,lt,{data:0})}}export{$t as component};
