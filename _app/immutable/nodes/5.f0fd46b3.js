import{S as Ve,i as Ne,s as Se,a as C,y as _e,R as Ae,h as c,c as I,z as pe,b as V,A as ve,g as ge,d as be,B as $e,q as E,r as k,k as p,l as v,m as b,n,E as i,T as He,D as we,u as L}from"../chunks/index.03d53f8e.js";import{H as Pe}from"../chunks/Hero.c75f42c5.js";import{C as ze}from"../chunks/Content.b1691822.js";import{b as Ee}from"../chunks/paths.79f288fa.js";function ke(f,e,a){const o=f.slice();return o[1]=e[a],o}function Re(f){let e;return{c(){e=E("Countries")},l(a){e=k(a,"Countries")},m(a,o){V(a,e,o)},d(a){a&&c(e)}}}function Ce(f){let e,a,o,s,d,t=f[1].school.name+"",l,u;return{c(){e=p("a"),a=p("span"),o=E("Leader School / Organization"),d=C(),l=E(t),this.h()},l(r){e=v(r,"A",{class:!0,href:!0});var m=b(e);a=v(m,"SPAN",{id:!0,class:!0});var P=b(a);o=k(P,"Leader School / Organization"),P.forEach(c),d=I(m),l=k(m,t),m.forEach(c),this.h()},h(){n(a,"id",s=f[1].name),n(a,"class","group-hover:bg-primary-focus border-none rounded-t-md rounded-b-none badge badge-primary badge-sm xs:badge-md absolute top-0 -translate-y-full h-auto"),n(e,"class","group relative h-auto py-2 box-border border-none btn btn-neutral text-lg w-full normal-case flex-col"),n(e,"href",u=f[1].school.url)},m(r,m){V(r,e,m),i(e,a),i(a,o),i(e,d),i(e,l)},p(r,m){m&1&&s!==(s=r[1].name)&&n(a,"id",s),m&1&&t!==(t=r[1].school.name+"")&&L(l,t),m&1&&u!==(u=r[1].school.url)&&n(e,"href",u)},d(r){r&&c(e)}}}function Ie(f){let e,a,o;return{c(){e=p("a"),a=E("Competition website"),this.h()},l(s){e=v(s,"A",{class:!0,href:!0});var d=b(e);a=k(d,"Competition website"),d.forEach(c),this.h()},h(){n(e,"class","h-auto py-2 btn btn-secondary text-lg w-full normal-case"),n(e,"href",o=f[1].iiot)},m(s,d){V(s,e,d),i(e,a)},p(s,d){d&1&&o!==(o=s[1].iiot)&&n(e,"href",o)},d(s){s&&c(e)}}}function De(f){let e,a,o,s=f[1].name+"",d,t,l,u,r,m,P,x,g,M,T,z,ee,te,R,N,O=(f[1].national_referent.name||"Referent Name")+"",U,ae,S,y=(f[1].national_referent.email||"referent-email@gmail.com")+"",J,K,le,j,re,se,q,A,B=(f[1].scientific_coordinator.name||"Coordinator Name")+"",Q,ie,H,F=(f[1].scientific_coordinator.email||"coordinator-email@gmail.com")+"",W,X,oe,$=f[1].school&&Ce(f),w=f[1].iiot&&Ie(f);return{c(){e=p("div"),a=p("figure"),o=p("h1"),d=E(s),t=C(),l=p("div"),u=C(),r=p("img"),x=C(),g=p("div"),$&&$.c(),M=C(),w&&w.c(),T=C(),z=p("div"),ee=E("National referent"),te=C(),R=p("div"),N=p("p"),U=E(O),ae=E(`,
							`),S=p("a"),J=E(y),le=C(),j=p("div"),re=E("Scientific coordinator"),se=C(),q=p("div"),A=p("p"),Q=E(B),ie=E(`,
							`),H=p("a"),W=E(F),oe=C(),this.h()},l(h){e=v(h,"DIV",{class:!0});var _=b(e);a=v(_,"FIGURE",{class:!0});var G=b(a);o=v(G,"H1",{class:!0});var ne=b(o);d=k(ne,s),ne.forEach(c),t=I(G),l=v(G,"DIV",{class:!0}),b(l).forEach(c),u=I(G),r=v(G,"IMG",{class:!0,src:!0,alt:!0}),G.forEach(c),x=I(_),g=v(_,"DIV",{class:!0});var D=b(g);$&&$.l(D),M=I(D),w&&w.l(D),T=I(D),z=v(D,"DIV",{class:!0});var fe=b(z);ee=k(fe,"National referent"),fe.forEach(c),te=I(D),R=v(D,"DIV",{class:!0});var ce=b(R);N=v(ce,"P",{class:!0});var Y=b(N);U=k(Y,O),ae=k(Y,`,
							`),S=v(Y,"A",{href:!0,class:!0});var de=b(S);J=k(de,y),de.forEach(c),Y.forEach(c),ce.forEach(c),le=I(D),j=v(D,"DIV",{class:!0});var me=b(j);re=k(me,"Scientific coordinator"),me.forEach(c),se=I(D),q=v(D,"DIV",{class:!0});var ue=b(q);A=v(ue,"P",{class:!0});var Z=b(A);Q=k(Z,B),ie=k(Z,`,
							`),H=v(Z,"A",{href:!0,class:!0});var he=b(H);W=k(he,F),he.forEach(c),Z.forEach(c),ue.forEach(c),D.forEach(c),oe=I(_),_.forEach(c),this.h()},h(){n(o,"class","card-title h-fit justify-center text-2xl"),n(l,"class","divider divider-horizontal before:rounded-t-full after:rounded-b-full md:hidden"),n(r,"class","w-20 md:w-32 rounded-md md:rounded-lg"),we(r.src,m=Ee+"/images/flags/"+f[1].name+".svg")||n(r,"src",m),n(r,"alt",P="flag of "+f[1].name),n(a,"class","md:flex-col-reverse min-w-fit justify-start items-start md:gap-4 p-8 pb-4 md:pb-8 md:pr-0"),n(z,"class","divider m-0 mt-2 font-bold"),n(S,"href",K="mailto:"+(f[1].national_referent.email||"")),n(S,"class","btn-link link-secondary font-semibold"),n(N,"class","text-lg text-center"),n(R,"class","w-full flex flex-wrap"),n(j,"class","divider m-0 font-bold"),n(H,"href",X="mailto:"+(f[1].scientific_coordinator.email||"")),n(H,"class","btn-link link-secondary font-semibold"),n(A,"class","text-lg text-center"),n(q,"class","w-full flex flex-wrap"),n(g,"class","card-body w-full md:items-start gap-4 p-8 pt-0 md:pt-8 md:pl-0"),n(e,"class","card md:card-side min-w-fit w-full justify-center gap-8 bg-base-200 shadow-md border border-base-300")},m(h,_){V(h,e,_),i(e,a),i(a,o),i(o,d),i(a,t),i(a,l),i(a,u),i(a,r),i(e,x),i(e,g),$&&$.m(g,null),i(g,M),w&&w.m(g,null),i(g,T),i(g,z),i(z,ee),i(g,te),i(g,R),i(R,N),i(N,U),i(N,ae),i(N,S),i(S,J),i(g,le),i(g,j),i(j,re),i(g,se),i(g,q),i(q,A),i(A,Q),i(A,ie),i(A,H),i(H,W),i(e,oe)},p(h,_){_&1&&s!==(s=h[1].name+"")&&L(d,s),_&1&&!we(r.src,m=Ee+"/images/flags/"+h[1].name+".svg")&&n(r,"src",m),_&1&&P!==(P="flag of "+h[1].name)&&n(r,"alt",P),h[1].school?$?$.p(h,_):($=Ce(h),$.c(),$.m(g,M)):$&&($.d(1),$=null),h[1].iiot?w?w.p(h,_):(w=Ie(h),w.c(),w.m(g,T)):w&&(w.d(1),w=null),_&1&&O!==(O=(h[1].national_referent.name||"Referent Name")+"")&&L(U,O),_&1&&y!==(y=(h[1].national_referent.email||"referent-email@gmail.com")+"")&&L(J,y),_&1&&K!==(K="mailto:"+(h[1].national_referent.email||""))&&n(S,"href",K),_&1&&B!==(B=(h[1].scientific_coordinator.name||"Coordinator Name")+"")&&L(Q,B),_&1&&F!==(F=(h[1].scientific_coordinator.email||"coordinator-email@gmail.com")+"")&&L(W,F),_&1&&X!==(X="mailto:"+(h[1].scientific_coordinator.email||""))&&n(H,"href",X)},d(h){h&&c(e),$&&$.d(),w&&w.d()}}}function je(f){let e,a,o,s,d=f[0].countries,t=[];for(let l=0;l<d.length;l+=1)t[l]=De(ke(f,d,l));return{c(){e=p("p"),a=E("Here's the list of the participating countries and their websites."),o=C(),s=p("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=v(l,"P",{class:!0});var u=b(e);a=k(u,"Here's the list of the participating countries and their websites."),u.forEach(c),o=I(l),s=v(l,"DIV",{class:!0});var r=b(s);for(let m=0;m<t.length;m+=1)t[m].l(r);r.forEach(c),this.h()},h(){n(e,"class","px-2 text-lg text-center max-w-4xl"),n(s,"class","flex flex-col items-center w-full max-w-2xl gap-8")},m(l,u){V(l,e,u),i(e,a),V(l,o,u),V(l,s,u);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(s,null)},p(l,u){if(u&1){d=l[0].countries;let r;for(r=0;r<d.length;r+=1){const m=ke(l,d,r);t[r]?t[r].p(m,u):(t[r]=De(m),t[r].c(),t[r].m(s,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=d.length}},d(l){l&&c(e),l&&c(o),l&&c(s),He(t,l)}}}function qe(f){let e,a,o,s,d;return a=new Pe({props:{$$slots:{default:[Re]},$$scope:{ctx:f}}}),s=new ze({props:{$$slots:{default:[je]},$$scope:{ctx:f}}}),{c(){e=C(),_e(a.$$.fragment),o=C(),_e(s.$$.fragment),this.h()},l(t){Ae("svelte-mh3du2",document.head).forEach(c),e=I(t),pe(a.$$.fragment,t),o=I(t),pe(s.$$.fragment,t),this.h()},h(){document.title="Countries"},m(t,l){V(t,e,l),ve(a,t,l),V(t,o,l),ve(s,t,l),d=!0},p(t,[l]){const u={};l&16&&(u.$$scope={dirty:l,ctx:t}),a.$set(u);const r={};l&17&&(r.$$scope={dirty:l,ctx:t}),s.$set(r)},i(t){d||(ge(a.$$.fragment,t),ge(s.$$.fragment,t),d=!0)},o(t){be(a.$$.fragment,t),be(s.$$.fragment,t),d=!1},d(t){t&&c(e),$e(a,t),t&&c(o),$e(s,t)}}}function Ge(f,e,a){let{data:o}=e;return f.$$set=s=>{"data"in s&&a(0,o=s.data)},[o]}class Fe extends Ve{constructor(e){super(),Ne(this,e,Ge,qe,Se,{data:0})}}export{Fe as component};
