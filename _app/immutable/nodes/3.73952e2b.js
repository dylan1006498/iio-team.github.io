import{S as He,i as Me,s as Be,k as p,q as C,a as B,l as g,m as v,r as S,h,c as G,n as _,R as x,b as I,F as d,G as ge,u as z,I as ve,T as ee,J as Ge,e as be,w as qe,y as ce,Q as Fe,z as fe,A as ue,g as Z,d as le,B as he,v as Oe,f as je,E as ae}from"../chunks/index.d04f8912.js";import{H as ze}from"../chunks/Hero.0a210701.js";import{C as Je}from"../chunks/Content.bbafa846.js";import{b as U}from"../chunks/paths.a0ee7d59.js";function we(o,e,s){const l=o.slice();return l[8]=e[s],l}function ke(o){let e,s,l,t=o[0].Country+"",a;return{c(){e=p("p"),s=C(`Country:\r
					`),l=p("span"),a=C(t),this.h()},l(n){e=g(n,"P",{class:!0});var r=v(e);s=S(r,`Country:\r
					`),l=g(r,"SPAN",{class:!0});var u=v(l);a=S(u,t),u.forEach(h),r.forEach(h),this.h()},h(){_(l,"class","font-semibold"),_(e,"class","text-lg w-full")},m(n,r){I(n,e,r),d(e,s),d(e,l),d(l,a)},p(n,r){r&1&&t!==(t=n[0].Country+"")&&z(a,t)},d(n){n&&h(e)}}}function Ee(o){let e,s,l,t=o[0].School+"",a,n;return{c(){e=p("p"),s=C(`School:\r
					`),l=p("span"),a=C(t),n=C("."),this.h()},l(r){e=g(r,"P",{class:!0});var u=v(e);s=S(u,`School:\r
					`),l=g(u,"SPAN",{class:!0});var k=v(l);a=S(k,t),k.forEach(h),n=S(u,"."),u.forEach(h),this.h()},h(){_(l,"class","font-semibold normal-case"),_(e,"class","text-lg w-full")},m(r,u){I(r,e,u),d(e,s),d(e,l),d(l,a),d(e,n)},p(r,u){u&1&&t!==(t=r[0].School+"")&&z(a,t)},d(r){r&&h(e)}}}function $e(o){let e,s,l,t=o[0].Total+"",a;return{c(){e=p("p"),s=C(`Total points:\r
                    `),l=p("span"),a=C(t),this.h()},l(n){e=g(n,"P",{class:!0});var r=v(e);s=S(r,`Total points:\r
                    `),l=g(r,"SPAN",{class:!0});var u=v(l);a=S(u,t),u.forEach(h),r.forEach(h),this.h()},h(){_(l,"class","badge h-fit w-fit transition-none text-2xl font-bold"),_(e,"class","text-lg flex items-center gap-1")},m(n,r){I(n,e,r),d(e,s),d(e,l),d(l,a)},p(n,r){r&1&&t!==(t=n[0].Total+"")&&z(a,t)},d(n){n&&h(e)}}}function Ae(o){let e,s,l,t,a;return{c(){e=p("p"),s=C(`Award:\r
					`),l=p("img"),this.h()},l(n){e=g(n,"P",{class:!0});var r=v(e);s=S(r,`Award:\r
					`),l=g(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(h),this.h()},h(){x(l.src,t=U+"/images/medals/"+o[0].Award+".png")||_(l,"src",t),_(l,"alt",a=o[0].Award),_(l,"class","h-9"),_(e,"class","text-lg grow-0 flex items-center gap-1")},m(n,r){I(n,e,r),d(e,s),d(e,l)},p(n,r){r&1&&!x(l.src,t=U+"/images/medals/"+n[0].Award+".png")&&_(l,"src",t),r&1&&a!==(a=n[0].Award)&&_(l,"alt",a)},d(n){n&&h(e)}}}function Te(o){let e,s,l=o[0][`${o[8]}`]+"",t,a,n,r,u=o[8]+"",k,$;return{c(){e=p("div"),s=p("span"),t=C(l),n=B(),r=p("p"),k=C(u),$=B(),this.h()},l(f){e=g(f,"DIV",{class:!0});var R=v(e);s=g(R,"SPAN",{class:!0});var A=v(s);t=S(A,l),A.forEach(h),n=G(R),r=g(R,"P",{class:!0});var w=v(r);k=S(w,u),w.forEach(h),$=G(R),R.forEach(h),this.h()},h(){_(s,"class",a="indicator-item indicator-top indicator-center badge "+(o[0][`${o[8]}`]==100?"badge-success":o[0][`${o[8]}`]==0?"badge-error":"badge-primary")),_(r,"class","bg-base-200 p-4 text-center rounded-box"),_(e,"class","indicator grow")},m(f,R){I(f,e,R),d(e,s),d(s,t),d(e,n),d(e,r),d(r,k),d(e,$)},p(f,R){R&3&&l!==(l=f[0][`${f[8]}`]+"")&&z(t,l),R&3&&a!==(a="indicator-item indicator-top indicator-center badge "+(f[0][`${f[8]}`]==100?"badge-success":f[0][`${f[8]}`]==0?"badge-error":"badge-primary"))&&_(s,"class",a),R&2&&u!==(u=f[8]+"")&&z(k,u)},d(f){f&&h(e)}}}function Ie(o){let e=!["Rank","Award","Team","Country","School","Total"].includes(o[8]),s,l=e&&Te(o);return{c(){l&&l.c(),s=be()},l(t){l&&l.l(t),s=be()},m(t,a){l&&l.m(t,a),I(t,s,a)},p(t,a){a&2&&(e=!["Rank","Award","Team","Country","School","Total"].includes(t[8])),e?l?l.p(t,a):(l=Te(t),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&h(s)}}}function Le(o){let e,s,l,t,a,n=(o[0].Rank?o[0].Rank:o[2])+"",r,u,k,$=o[0].Team+"",f,R,A,w,O,T,i,b,c,P,Y,F,j,q,K,se,re,L,te,ne,de,V=o[0].Country&&ke(o),N=o[0].School&&Ee(o),H=o[0].Total&&$e(o),M=o[0].Award&&Ae(o),W=o[1],D=[];for(let m=0;m<W.length;m+=1)D[m]=Ie(we(o,W,m));return{c(){e=p("div"),s=p("div"),l=p("h2"),t=p("span"),a=C("#"),r=C(n),u=B(),k=p("span"),f=C($),R=B(),A=p("img"),T=B(),i=p("div"),V&&V.c(),b=B(),N&&N.c(),c=B(),H&&H.c(),P=B(),M&&M.c(),Y=B(),F=p("div"),j=p("input"),q=B(),K=p("div"),se=C("Points for each task:"),re=B(),L=p("div");for(let m=0;m<D.length;m+=1)D[m].c();this.h()},l(m){e=g(m,"DIV",{class:!0});var y=v(e);s=g(y,"DIV",{class:!0});var E=v(s);l=g(E,"H2",{class:!0});var J=v(l);t=g(J,"SPAN",{class:!0});var oe=v(t);a=S(oe,"#"),r=S(oe,n),oe.forEach(h),u=G(J),k=g(J,"SPAN",{class:!0});var _e=v(k);f=S(_e,$),_e.forEach(h),R=G(J),A=g(J,"IMG",{class:!0,src:!0,alt:!0}),J.forEach(h),T=G(E),i=g(E,"DIV",{class:!0});var Q=v(i);V&&V.l(Q),b=G(Q),N&&N.l(Q),c=G(Q),H&&H.l(Q),P=G(Q),M&&M.l(Q),Q.forEach(h),Y=G(E),F=g(E,"DIV",{class:!0});var X=v(F);j=g(X,"INPUT",{type:!0}),q=G(X),K=g(X,"DIV",{class:!0});var me=v(K);se=S(me,"Points for each task:"),me.forEach(h),re=G(X),L=g(X,"DIV",{class:!0});var pe=v(L);for(let ie=0;ie<D.length;ie+=1)D[ie].l(pe);pe.forEach(h),X.forEach(h),E.forEach(h),y.forEach(h),this.h()},h(){_(t,"class","font-bold text-3xl"),_(k,"class","text-center self-center grow text-2xl"),_(A,"class","h-9 rounded-md"),x(A.src,w=U+"/images/flags/"+o[0].Country+".svg?"+Math.random())||_(A,"src",w),_(A,"alt",O=o[0].Country),_(l,"class","card-title flex items-start justify-between gap-4"),_(i,"class","flex flex-wrap gap-2"),_(j,"type","checkbox"),_(K,"class","collapse-title font-medium h-fit text-lg"),_(L,"class",te="collapse-content "+(o[4]?"mt-2":"")+" flex flex-wrap gap-x-4 gap-y-6"),_(F,"class","collapse collapse-arrow bg-base-300"),_(s,"class","card-body p-6 gap-4"),_(e,"class","card w-full bg-base-200 shadow-md border border-base-300")},m(m,y){I(m,e,y),d(e,s),d(s,l),d(l,t),d(t,a),d(t,r),d(l,u),d(l,k),d(k,f),d(l,R),d(l,A),o[6](A),d(s,T),d(s,i),V&&V.m(i,null),d(i,b),N&&N.m(i,null),d(i,c),H&&H.m(i,null),d(i,P),M&&M.m(i,null),d(s,Y),d(s,F),d(F,j),j.checked=o[4],d(F,q),d(F,K),d(K,se),d(F,re),d(F,L);for(let E=0;E<D.length;E+=1)D[E]&&D[E].m(L,null);ne||(de=[ge(A,"error",o[5]),ge(j,"change",o[7])],ne=!0)},p(m,[y]){if(y&5&&n!==(n=(m[0].Rank?m[0].Rank:m[2])+"")&&z(r,n),y&1&&$!==($=m[0].Team+"")&&z(f,$),y&1&&!x(A.src,w=U+"/images/flags/"+m[0].Country+".svg?"+Math.random())&&_(A,"src",w),y&1&&O!==(O=m[0].Country)&&_(A,"alt",O),m[0].Country?V?V.p(m,y):(V=ke(m),V.c(),V.m(i,b)):V&&(V.d(1),V=null),m[0].School?N?N.p(m,y):(N=Ee(m),N.c(),N.m(i,c)):N&&(N.d(1),N=null),m[0].Total?H?H.p(m,y):(H=$e(m),H.c(),H.m(i,P)):H&&(H.d(1),H=null),m[0].Award?M?M.p(m,y):(M=Ae(m),M.c(),M.m(i,null)):M&&(M.d(1),M=null),y&16&&(j.checked=m[4]),y&3){W=m[1];let E;for(E=0;E<W.length;E+=1){const J=we(m,W,E);D[E]?D[E].p(J,y):(D[E]=Ie(J),D[E].c(),D[E].m(L,null))}for(;E<D.length;E+=1)D[E].d(1);D.length=W.length}y&16&&te!==(te="collapse-content "+(m[4]?"mt-2":"")+" flex flex-wrap gap-x-4 gap-y-6")&&_(L,"class",te)},i:ve,o:ve,d(m){m&&h(e),o[6](null),V&&V.d(),N&&N.d(),H&&H.d(),M&&M.d(),ee(D,m),ne=!1,Ge(de)}}}function Qe(o,e,s){let{row:l}=e,{headers:t}=e,{rank:a=null}=e,n;function r(){s(3,n.src=`${U}/images/flags/Placeholder.svg`,n)}let u;function k(f){qe[f?"unshift":"push"](()=>{n=f,s(3,n)})}function $(){u=this.checked,s(4,u)}return o.$$set=f=>{"row"in f&&s(0,l=f.row),"headers"in f&&s(1,t=f.headers),"rank"in f&&s(2,a=f.rank)},[l,t,a,n,u,r,k,$]}class Ue extends He{constructor(e){super(),Me(this,e,Qe,Le,Be,{row:0,headers:1,rank:2})}}function Ce(o,e,s){const l=o.slice();return l[1]=e[s],l}function Se(o,e,s){const l=o.slice();return l[4]=e[s],l}function Pe(o,e,s){const l=o.slice();return l[7]=e[s],l}function Re(o,e,s){const l=o.slice();return l[1]=e[s],l[11]=s,l}function Ye(o){let e,s=o[0].year+"",l,t;return{c(){e=C("IIOT International Final "),l=C(s),t=C(" Results")},l(a){e=S(a,"IIOT International Final "),l=S(a,s),t=S(a," Results")},m(a,n){I(a,e,n),I(a,l,n),I(a,t,n)},p(a,n){n&1&&s!==(s=a[0].year+"")&&z(l,s)},d(a){a&&h(e),a&&h(l),a&&h(t)}}}function De(o){let e,s;return e=new Ue({props:{row:o[1],headers:o[0].headers,rank:o[11]+1}}),{c(){ce(e.$$.fragment)},l(l){fe(e.$$.fragment,l)},m(l,t){ue(e,l,t),s=!0},p(l,t){const a={};t&1&&(a.row=l[1]),t&1&&(a.headers=l[0].headers),e.$set(a)},i(l){s||(Z(e.$$.fragment,l),s=!0)},o(l){le(e.$$.fragment,l),s=!1},d(l){he(e,l)}}}function ye(o){let e,s=o[7]+"",l;return{c(){e=p("th"),l=C(s),this.h()},l(t){e=g(t,"TH",{class:!0});var a=v(e);l=S(a,s),a.forEach(h),this.h()},h(){_(e,"class","whitespace-break-spaces text-sm svelte-pu7ac8")},m(t,a){I(t,e,a),d(e,l)},p(t,a){a&1&&s!==(s=t[7]+"")&&z(l,s)},d(t){t&&h(e)}}}function Ke(o){let e=o[1][`${o[4]}`]+"",s;return{c(){s=C(e)},l(l){s=S(l,e)},m(l,t){I(l,s,t)},p(l,t){t&1&&e!==(e=l[1][`${l[4]}`]+"")&&z(s,e)},d(l){l&&h(s)}}}function We(o){let e,s,l,t,a;return{c(){e=p("div"),s=p("img"),this.h()},l(n){e=g(n,"DIV",{class:!0,"data-tip":!0});var r=v(e);s=g(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(h),this.h()},h(){_(s,"class","w-7 h-7"),x(s.src,l=U+"/images/medals/"+o[1].Award+".png")||_(s,"src",l),_(s,"alt",t=o[1].Award),_(e,"class","tooltip h-7 cursor-help"),_(e,"data-tip",a=o[1].Award)},m(n,r){I(n,e,r),d(e,s)},p(n,r){r&1&&!x(s.src,l=U+"/images/medals/"+n[1].Award+".png")&&_(s,"src",l),r&1&&t!==(t=n[1].Award)&&_(s,"alt",t),r&1&&a!==(a=n[1].Award)&&_(e,"data-tip",a)},d(n){n&&h(e)}}}function Ve(o){let e;function s(a,n){return a[4]=="Award"&&a[1].Award&&a[1].Award!=""?We:Ke}let l=s(o),t=l(o);return{c(){e=p("td"),t.c(),this.h()},l(a){e=g(a,"TD",{class:!0});var n=v(e);t.l(n),n.forEach(h),this.h()},h(){_(e,"class","svelte-pu7ac8"),ae(e,"left",["Team","Country","School"].includes(o[4])),ae(e,"font-bold",o[4]=="Total")},m(a,n){I(a,e,n),t.m(e,null)},p(a,n){l===(l=s(a))&&t?t.p(a,n):(t.d(1),t=l(a),t&&(t.c(),t.m(e,null))),n&1&&ae(e,"left",["Team","Country","School"].includes(a[4])),n&1&&ae(e,"font-bold",a[4]=="Total")},d(a){a&&h(e),t.d()}}}function Ne(o){let e,s,l=o[0].headers,t=[];for(let a=0;a<l.length;a+=1)t[a]=Ve(Se(o,l,a));return{c(){e=p("tr");for(let a=0;a<t.length;a+=1)t[a].c();s=B(),this.h()},l(a){e=g(a,"TR",{class:!0});var n=v(e);for(let r=0;r<t.length;r+=1)t[r].l(n);s=G(n),n.forEach(h),this.h()},h(){_(e,"class","svelte-pu7ac8")},m(a,n){I(a,e,n);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null);d(e,s)},p(a,n){if(n&1){l=a[0].headers;let r;for(r=0;r<l.length;r+=1){const u=Se(a,l,r);t[r]?t[r].p(u,n):(t[r]=Ve(u),t[r].c(),t[r].m(e,s))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(a){a&&h(e),ee(t,a)}}}function Xe(o){let e,s,l,t,a,n,r,u,k,$=o[0].rows,f=[];for(let i=0;i<$.length;i+=1)f[i]=De(Re(o,$,i));const R=i=>le(f[i],1,1,()=>{f[i]=null});let A=o[0].headers,w=[];for(let i=0;i<A.length;i+=1)w[i]=ye(Pe(o,A,i));let O=o[0].rows,T=[];for(let i=0;i<O.length;i+=1)T[i]=Ne(Ce(o,O,i));return{c(){e=p("div");for(let i=0;i<f.length;i+=1)f[i].c();s=B(),l=p("div"),t=p("table"),a=p("thead"),n=p("tr");for(let i=0;i<w.length;i+=1)w[i].c();r=B(),u=p("tbody");for(let i=0;i<T.length;i+=1)T[i].c();this.h()},l(i){e=g(i,"DIV",{class:!0});var b=v(e);for(let q=0;q<f.length;q+=1)f[q].l(b);b.forEach(h),s=G(i),l=g(i,"DIV",{class:!0});var c=v(l);t=g(c,"TABLE",{class:!0});var P=v(t);a=g(P,"THEAD",{class:!0});var Y=v(a);n=g(Y,"TR",{class:!0});var F=v(n);for(let q=0;q<w.length;q+=1)w[q].l(F);F.forEach(h),Y.forEach(h),r=G(P),u=g(P,"TBODY",{class:!0});var j=v(u);for(let q=0;q<T.length;q+=1)T[q].l(j);j.forEach(h),P.forEach(h),c.forEach(h),this.h()},h(){_(e,"class","gap-6 w-full flex-col flex md:hidden"),_(n,"class","svelte-pu7ac8"),_(a,"class","svelte-pu7ac8"),_(u,"class","svelte-pu7ac8"),_(t,"class","table w-fit mx-auto table-sm lg:table-md rounded-box bg-base-200"),_(l,"class","overflow-x-auto w-full xl:max-w-[80%] rounded-box hidden md:block")},m(i,b){I(i,e,b);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(e,null);I(i,s,b),I(i,l,b),d(l,t),d(t,a),d(a,n);for(let c=0;c<w.length;c+=1)w[c]&&w[c].m(n,null);d(t,r),d(t,u);for(let c=0;c<T.length;c+=1)T[c]&&T[c].m(u,null);k=!0},p(i,b){if(b&1){$=i[0].rows;let c;for(c=0;c<$.length;c+=1){const P=Re(i,$,c);f[c]?(f[c].p(P,b),Z(f[c],1)):(f[c]=De(P),f[c].c(),Z(f[c],1),f[c].m(e,null))}for(Oe(),c=$.length;c<f.length;c+=1)R(c);je()}if(b&1){A=i[0].headers;let c;for(c=0;c<A.length;c+=1){const P=Pe(i,A,c);w[c]?w[c].p(P,b):(w[c]=ye(P),w[c].c(),w[c].m(n,null))}for(;c<w.length;c+=1)w[c].d(1);w.length=A.length}if(b&1){O=i[0].rows;let c;for(c=0;c<O.length;c+=1){const P=Ce(i,O,c);T[c]?T[c].p(P,b):(T[c]=Ne(P),T[c].c(),T[c].m(u,null))}for(;c<T.length;c+=1)T[c].d(1);T.length=O.length}},i(i){if(!k){for(let b=0;b<$.length;b+=1)Z(f[b]);k=!0}},o(i){f=f.filter(Boolean);for(let b=0;b<f.length;b+=1)le(f[b]);k=!1},d(i){i&&h(e),ee(f,i),i&&h(s),i&&h(l),ee(w,i),ee(T,i)}}}function Ze(o){let e,s,l,t,a,n;return document.title=e=o[0].year+" Results",l=new ze({props:{$$slots:{default:[Ye]},$$scope:{ctx:o}}}),a=new Je({props:{$$slots:{default:[Xe]},$$scope:{ctx:o}}}),{c(){s=B(),ce(l.$$.fragment),t=B(),ce(a.$$.fragment)},l(r){Fe("svelte-16c3mb",document.head).forEach(h),s=G(r),fe(l.$$.fragment,r),t=G(r),fe(a.$$.fragment,r)},m(r,u){I(r,s,u),ue(l,r,u),I(r,t,u),ue(a,r,u),n=!0},p(r,[u]){(!n||u&1)&&e!==(e=r[0].year+" Results")&&(document.title=e);const k={};u&4097&&(k.$$scope={dirty:u,ctx:r}),l.$set(k);const $={};u&4097&&($.$$scope={dirty:u,ctx:r}),a.$set($)},i(r){n||(Z(l.$$.fragment,r),Z(a.$$.fragment,r),n=!0)},o(r){le(l.$$.fragment,r),le(a.$$.fragment,r),n=!1},d(r){r&&h(s),he(l,r),r&&h(t),he(a,r)}}}function xe(o,e,s){let{data:l}=e;return o.$$set=t=>{"data"in t&&s(0,l=t.data)},[l]}class sl extends He{constructor(e){super(),Me(this,e,xe,Ze,Be,{data:0})}}export{sl as component};
