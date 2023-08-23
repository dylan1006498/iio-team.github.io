import{S as Ie,i as De,s as Ve,a as C,y as ue,R as Ne,h as c,c as I,z as he,b as V,A as _e,g as pe,d as ve,B as ge,q as E,r as k,k as _,l as p,m as g,n,E as i,T as Se,D as be,u as G}from"../chunks/index.f6098fd6.js";import{H as Ae}from"../chunks/Hero.4751f764.js";import{C as He}from"../chunks/Content.5eceaa74.js";import{b as $e}from"../chunks/paths.ee95db50.js";function we(f,e,a){const o=f.slice();return o[1]=e[a],o}function Pe(f){let e;return{c(){e=E("Countries")},l(a){e=k(a,"Countries")},m(a,o){V(a,e,o)},d(a){a&&c(e)}}}function Ee(f){let e,a,o,r,d,t=f[1].school.name+"",l,u;return{c(){e=_("a"),a=_("span"),o=E("Leader School / Organization"),d=C(),l=E(t),this.h()},l(s){e=p(s,"A",{class:!0,href:!0});var m=g(e);a=p(m,"SPAN",{id:!0,class:!0});var A=g(a);o=k(A,"Leader School / Organization"),A.forEach(c),d=I(m),l=k(m,t),m.forEach(c),this.h()},h(){n(a,"id",r=f[1].name),n(a,"class","rounded-t-md rounded-b-none badge badge-primary badge-sm xs:badge-md absolute -top-px -translate-y-full h-auto"),n(e,"class","relative h-auto py-2 box-border btn btn-neutral text-lg w-full normal-case flex-col"),n(e,"href",u=f[1].school.url)},m(s,m){V(s,e,m),i(e,a),i(a,o),i(e,d),i(e,l)},p(s,m){m&1&&r!==(r=s[1].name)&&n(a,"id",r),m&1&&t!==(t=s[1].school.name+"")&&G(l,t),m&1&&u!==(u=s[1].school.url)&&n(e,"href",u)},d(s){s&&c(e)}}}function ke(f){let e,a,o;return{c(){e=_("a"),a=E("Competition website"),this.h()},l(r){e=p(r,"A",{class:!0,href:!0});var d=g(e);a=k(d,"Competition website"),d.forEach(c),this.h()},h(){n(e,"class","h-auto py-2 btn btn-outline text-lg w-full normal-case"),n(e,"href",o=f[1].iiot)},m(r,d){V(r,e,d),i(e,a)},p(r,d){d&1&&o!==(o=r[1].iiot)&&n(e,"href",o)},d(r){r&&c(e)}}}function Ce(f){let e,a,o,r=f[1].name+"",d,t,l,u,s,m,A,X,v,F,M,x,Y,Z,z,N,L=(f[1].national_referent.name||"Referent Name")+"",T,ee,H,O=(f[1].national_referent.email||"referent-email@gmail.com")+"",U,te,R,ae,le,j,S,y=(f[1].scientific_coordinator.name||"Coordinator Name")+"",J,se,P,B=(f[1].scientific_coordinator.email||"coordinator-email@gmail.com")+"",K,re,$=f[1].school&&Ee(f),w=f[1].iiot&&ke(f);return{c(){e=_("div"),a=_("figure"),o=_("h1"),d=E(r),t=C(),l=_("div"),u=C(),s=_("img"),X=C(),v=_("div"),$&&$.c(),F=C(),w&&w.c(),M=C(),x=_("div"),Y=E("National referent"),Z=C(),z=_("div"),N=_("p"),T=E(L),ee=E(`,
							`),H=_("a"),U=E(O),te=C(),R=_("div"),ae=E("Scientific coordinator"),le=C(),j=_("div"),S=_("p"),J=E(y),se=E(`,
							`),P=_("a"),K=E(B),re=C(),this.h()},l(h){e=p(h,"DIV",{class:!0});var b=g(e);a=p(b,"FIGURE",{class:!0});var q=g(a);o=p(q,"H1",{class:!0});var ie=g(o);d=k(ie,r),ie.forEach(c),t=I(q),l=p(q,"DIV",{class:!0}),g(l).forEach(c),u=I(q),s=p(q,"IMG",{class:!0,src:!0,alt:!0}),q.forEach(c),X=I(b),v=p(b,"DIV",{class:!0});var D=g(v);$&&$.l(D),F=I(D),w&&w.l(D),M=I(D),x=p(D,"DIV",{class:!0});var oe=g(x);Y=k(oe,"National referent"),oe.forEach(c),Z=I(D),z=p(D,"DIV",{class:!0});var ne=g(z);N=p(ne,"P",{class:!0});var Q=g(N);T=k(Q,L),ee=k(Q,`,
							`),H=p(Q,"A",{href:!0,class:!0});var fe=g(H);U=k(fe,O),fe.forEach(c),Q.forEach(c),ne.forEach(c),te=I(D),R=p(D,"DIV",{class:!0});var ce=g(R);ae=k(ce,"Scientific coordinator"),ce.forEach(c),le=I(D),j=p(D,"DIV",{class:!0});var de=g(j);S=p(de,"P",{class:!0});var W=g(S);J=k(W,y),se=k(W,`,
							`),P=p(W,"A",{href:!0,class:!0});var me=g(P);K=k(me,B),me.forEach(c),W.forEach(c),de.forEach(c),D.forEach(c),re=I(b),b.forEach(c),this.h()},h(){n(o,"class","card-title h-fit justify-center text-2xl"),n(l,"class","divider divider-horizontal before:rounded-t-full after:rounded-b-full md:hidden"),n(s,"class","w-20 md:w-32 rounded-md md:rounded-lg"),be(s.src,m=$e+"/images/flags/"+f[1].name+".svg")||n(s,"src",m),n(s,"alt",A="flag of "+f[1].name),n(a,"class","md:flex-col-reverse min-w-fit justify-start items-start md:gap-4 p-8 pb-4 md:pb-8 md:pr-0"),n(x,"class","divider m-0 mt-2 font-bold"),n(H,"href","mailto:"),n(H,"class","btn-link link-secondary font-semibold"),n(N,"class","text-lg text-center"),n(z,"class","w-full flex flex-wrap"),n(R,"class","divider m-0 font-bold"),n(P,"href","mailto:"),n(P,"class","btn-link link-secondary font-semibold"),n(S,"class","text-lg text-center"),n(j,"class","w-full flex flex-wrap"),n(v,"class","card-body w-full md:items-start gap-4 p-8 pt-0 md:pt-8 md:pl-0"),n(e,"class","card md:card-side min-w-fit w-full justify-center gap-8 bg-base-200 shadow-md border border-base-300")},m(h,b){V(h,e,b),i(e,a),i(a,o),i(o,d),i(a,t),i(a,l),i(a,u),i(a,s),i(e,X),i(e,v),$&&$.m(v,null),i(v,F),w&&w.m(v,null),i(v,M),i(v,x),i(x,Y),i(v,Z),i(v,z),i(z,N),i(N,T),i(N,ee),i(N,H),i(H,U),i(v,te),i(v,R),i(R,ae),i(v,le),i(v,j),i(j,S),i(S,J),i(S,se),i(S,P),i(P,K),i(e,re)},p(h,b){b&1&&r!==(r=h[1].name+"")&&G(d,r),b&1&&!be(s.src,m=$e+"/images/flags/"+h[1].name+".svg")&&n(s,"src",m),b&1&&A!==(A="flag of "+h[1].name)&&n(s,"alt",A),h[1].school?$?$.p(h,b):($=Ee(h),$.c(),$.m(v,F)):$&&($.d(1),$=null),h[1].iiot?w?w.p(h,b):(w=ke(h),w.c(),w.m(v,M)):w&&(w.d(1),w=null),b&1&&L!==(L=(h[1].national_referent.name||"Referent Name")+"")&&G(T,L),b&1&&O!==(O=(h[1].national_referent.email||"referent-email@gmail.com")+"")&&G(U,O),b&1&&y!==(y=(h[1].scientific_coordinator.name||"Coordinator Name")+"")&&G(J,y),b&1&&B!==(B=(h[1].scientific_coordinator.email||"coordinator-email@gmail.com")+"")&&G(K,B)},d(h){h&&c(e),$&&$.d(),w&&w.d()}}}function xe(f){let e,a,o,r,d=f[0].countries,t=[];for(let l=0;l<d.length;l+=1)t[l]=Ce(we(f,d,l));return{c(){e=_("p"),a=E("Here's the list of the participating countries and their websites."),o=C(),r=_("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=p(l,"P",{class:!0});var u=g(e);a=k(u,"Here's the list of the participating countries and their websites."),u.forEach(c),o=I(l),r=p(l,"DIV",{class:!0});var s=g(r);for(let m=0;m<t.length;m+=1)t[m].l(s);s.forEach(c),this.h()},h(){n(e,"class","px-2 text-lg text-center max-w-4xl"),n(r,"class","flex flex-col items-center w-full max-w-2xl gap-8")},m(l,u){V(l,e,u),i(e,a),V(l,o,u),V(l,r,u);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(r,null)},p(l,u){if(u&1){d=l[0].countries;let s;for(s=0;s<d.length;s+=1){const m=we(l,d,s);t[s]?t[s].p(m,u):(t[s]=Ce(m),t[s].c(),t[s].m(r,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=d.length}},d(l){l&&c(e),l&&c(o),l&&c(r),Se(t,l)}}}function ze(f){let e,a,o,r,d;return a=new Ae({props:{$$slots:{default:[Pe]},$$scope:{ctx:f}}}),r=new He({props:{$$slots:{default:[xe]},$$scope:{ctx:f}}}),{c(){e=C(),ue(a.$$.fragment),o=C(),ue(r.$$.fragment),this.h()},l(t){Ne("svelte-mh3du2",document.head).forEach(c),e=I(t),he(a.$$.fragment,t),o=I(t),he(r.$$.fragment,t),this.h()},h(){document.title="Countries"},m(t,l){V(t,e,l),_e(a,t,l),V(t,o,l),_e(r,t,l),d=!0},p(t,[l]){const u={};l&16&&(u.$$scope={dirty:l,ctx:t}),a.$set(u);const s={};l&17&&(s.$$scope={dirty:l,ctx:t}),r.$set(s)},i(t){d||(pe(a.$$.fragment,t),pe(r.$$.fragment,t),d=!0)},o(t){ve(a.$$.fragment,t),ve(r.$$.fragment,t),d=!1},d(t){t&&c(e),ge(a,t),t&&c(o),ge(r,t)}}}function Re(f,e,a){let{data:o}=e;return f.$$set=r=>{"data"in r&&a(0,o=r.data)},[o]}class Oe extends Ie{constructor(e){super(),De(this,e,Re,ze,Ve,{data:0})}}export{Oe as component};