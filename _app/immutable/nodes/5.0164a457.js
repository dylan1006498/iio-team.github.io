import{S as ge,i as ve,s as be,a as w,y as se,R as $e,h as f,c as E,z as re,b as D,A as ie,g as oe,d as ne,B as ce,q as C,r as I,k as h,l as _,m as p,n,E as i,T as we,D as fe,u as pe}from"../chunks/index.d28e9737.js";import{H as Ee,C as ke}from"../chunks/Content.a9b29b69.js";import{b as de}from"../chunks/paths.6b40668b.js";function ue(d,e,a){const o=d.slice();return o[1]=e[a],o}function Ce(d){let e;return{c(){e=C("Countries")},l(a){e=I(a,"Countries")},m(a,o){D(a,e,o)},d(a){a&&f(e)}}}function me(d){let e,a,o,r,c,t=d[1].school.name+"",l,m;return{c(){e=h("a"),a=h("span"),o=C("Leader School / Organization"),c=w(),l=C(t),this.h()},l(s){e=_(s,"A",{class:!0,href:!0});var u=p(e);a=_(u,"SPAN",{id:!0,class:!0});var y=p(a);o=I(y,"Leader School / Organization"),y.forEach(f),c=E(u),l=I(u,t),u.forEach(f),this.h()},h(){n(a,"id",r=d[1].name),n(a,"class","group-hover:bg-[#2e97c4] transition-colors badge badge-sm xs:badge-md absolute -top-px -translate-y-full rounded-b-none rounded-t-lg badge-info transition-none h-auto"),n(e,"class","group relative h-auto py-2 box-border btn btn-neutral text-lg w-full normal-case flex-col"),n(e,"href",m=d[1].school.url)},m(s,u){D(s,e,u),i(e,a),i(a,o),i(e,c),i(e,l)},p(s,u){u&1&&r!==(r=s[1].name)&&n(a,"id",r),u&1&&t!==(t=s[1].school.name+"")&&pe(l,t),u&1&&m!==(m=s[1].school.url)&&n(e,"href",m)},d(s){s&&f(e)}}}function he(d){let e,a,o;return{c(){e=h("a"),a=C("Competition website"),this.h()},l(r){e=_(r,"A",{class:!0,href:!0});var c=p(e);a=I(c,"Competition website"),c.forEach(f),this.h()},h(){n(e,"class","h-auto py-2 btn btn-outline text-lg w-full normal-case"),n(e,"href",o=d[1].iiot)},m(r,c){D(r,e,c),i(e,a)},p(r,c){c&1&&o!==(o=r[1].iiot)&&n(e,"href",o)},d(r){r&&f(e)}}}function _e(d){let e,a,o,r=d[1].name+"",c,t,l,m,s,u,y,R,g,N,G,H,B,F,S,P,M,T,A,U,J,V,z,K,Q,j,W,X,v=d[1].school&&me(d),b=d[1].iiot&&he(d);return{c(){e=h("div"),a=h("figure"),o=h("h1"),c=C(r),t=w(),l=h("div"),m=w(),s=h("img"),R=w(),g=h("div"),v&&v.c(),N=w(),b&&b.c(),G=w(),H=h("div"),B=C("Contacts"),F=w(),S=h("div"),P=h("p"),M=C("National referent:"),T=w(),A=h("a"),U=C("national-referent@gmail.com"),J=w(),V=h("div"),z=h("p"),K=C("Scientific coordinator:"),Q=w(),j=h("a"),W=C("scientific-coordinator@gmail.com"),X=w(),this.h()},l($){e=_($,"DIV",{class:!0});var k=p(e);a=_(k,"FIGURE",{class:!0});var q=p(a);o=_(q,"H1",{class:!0});var Y=p(o);c=I(Y,r),Y.forEach(f),t=E(q),l=_(q,"DIV",{class:!0}),p(l).forEach(f),m=E(q),s=_(q,"IMG",{class:!0,src:!0,alt:!0}),q.forEach(f),R=E(k),g=_(k,"DIV",{class:!0});var x=p(g);v&&v.l(x),N=E(x),b&&b.l(x),G=E(x),H=_(x,"DIV",{class:!0});var Z=p(H);B=I(Z,"Contacts"),Z.forEach(f),F=E(x),S=_(x,"DIV",{class:!0});var L=p(S);P=_(L,"P",{class:!0});var ee=p(P);M=I(ee,"National referent:"),ee.forEach(f),T=E(L),A=_(L,"A",{href:!0,class:!0});var te=p(A);U=I(te,"national-referent@gmail.com"),te.forEach(f),L.forEach(f),J=E(x),V=_(x,"DIV",{class:!0});var O=p(V);z=_(O,"P",{class:!0});var ae=p(z);K=I(ae,"Scientific coordinator:"),ae.forEach(f),Q=E(O),j=_(O,"A",{href:!0,class:!0});var le=p(j);W=I(le,"scientific-coordinator@gmail.com"),le.forEach(f),O.forEach(f),x.forEach(f),X=E(k),k.forEach(f),this.h()},h(){n(o,"class","card-title h-fit justify-center text-2xl"),n(l,"class","divider divider-horizontal before:rounded-t-full after:rounded-b-full md:hidden"),n(s,"class","w-20 md:w-32 rounded-md md:rounded-lg"),fe(s.src,u=de+"/images/flags/"+d[1].name+".svg")||n(s,"src",u),n(s,"alt",y="flag of "+d[1].name),n(a,"class","md:flex-col-reverse min-w-fit justify-start items-start md:gap-4 p-8 pb-4 md:pb-8 md:pr-0"),n(H,"class","divider m-2"),n(P,"class","grow-0 mr-2"),n(A,"href","mailto:"),n(A,"class","btn-link link-secondary font-semibold"),n(S,"class","w-full flex flex-wrap justify-betwee"),n(z,"class","grow-0 mr-2"),n(j,"href","mailto:"),n(j,"class","btn-link link-secondary font-semibold"),n(V,"class","w-full flex flex-wrap justify-betwee"),n(g,"class","card-body w-full md:items-start gap-4 p-8 pt-0 md:pt-8 md:pl-0"),n(e,"class","card md:card-side min-w-fit w-full justify-center gap-8 bg-base-200 shadow-lg border border-base-300")},m($,k){D($,e,k),i(e,a),i(a,o),i(o,c),i(a,t),i(a,l),i(a,m),i(a,s),i(e,R),i(e,g),v&&v.m(g,null),i(g,N),b&&b.m(g,null),i(g,G),i(g,H),i(H,B),i(g,F),i(g,S),i(S,P),i(P,M),i(S,T),i(S,A),i(A,U),i(g,J),i(g,V),i(V,z),i(z,K),i(V,Q),i(V,j),i(j,W),i(e,X)},p($,k){k&1&&r!==(r=$[1].name+"")&&pe(c,r),k&1&&!fe(s.src,u=de+"/images/flags/"+$[1].name+".svg")&&n(s,"src",u),k&1&&y!==(y="flag of "+$[1].name)&&n(s,"alt",y),$[1].school?v?v.p($,k):(v=me($),v.c(),v.m(g,N)):v&&(v.d(1),v=null),$[1].iiot?b?b.p($,k):(b=he($),b.c(),b.m(g,G)):b&&(b.d(1),b=null)},d($){$&&f(e),v&&v.d(),b&&b.d()}}}function Ie(d){let e,a,o,r,c=d[0].countries,t=[];for(let l=0;l<c.length;l+=1)t[l]=_e(ue(d,c,l));return{c(){e=h("p"),a=C("Here's the list of the participating countries and their websites."),o=w(),r=h("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=_(l,"P",{class:!0});var m=p(e);a=I(m,"Here's the list of the participating countries and their websites."),m.forEach(f),o=E(l),r=_(l,"DIV",{class:!0});var s=p(r);for(let u=0;u<t.length;u+=1)t[u].l(s);s.forEach(f),this.h()},h(){n(e,"class","px-2 text-lg text-center max-w-4xl"),n(r,"class","flex flex-col items-center w-full max-w-2xl gap-8")},m(l,m){D(l,e,m),i(e,a),D(l,o,m),D(l,r,m);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(r,null)},p(l,m){if(m&1){c=l[0].countries;let s;for(s=0;s<c.length;s+=1){const u=ue(l,c,s);t[s]?t[s].p(u,m):(t[s]=_e(u),t[s].c(),t[s].m(r,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=c.length}},d(l){l&&f(e),l&&f(o),l&&f(r),we(t,l)}}}function xe(d){let e,a,o,r,c;return a=new Ee({props:{$$slots:{default:[Ce]},$$scope:{ctx:d}}}),r=new ke({props:{$$slots:{default:[Ie]},$$scope:{ctx:d}}}),{c(){e=w(),se(a.$$.fragment),o=w(),se(r.$$.fragment),this.h()},l(t){$e("svelte-mh3du2",document.head).forEach(f),e=E(t),re(a.$$.fragment,t),o=E(t),re(r.$$.fragment,t),this.h()},h(){document.title="Countries"},m(t,l){D(t,e,l),ie(a,t,l),D(t,o,l),ie(r,t,l),c=!0},p(t,[l]){const m={};l&16&&(m.$$scope={dirty:l,ctx:t}),a.$set(m);const s={};l&17&&(s.$$scope={dirty:l,ctx:t}),r.$set(s)},i(t){c||(oe(a.$$.fragment,t),oe(r.$$.fragment,t),c=!0)},o(t){ne(a.$$.fragment,t),ne(r.$$.fragment,t),c=!1},d(t){t&&f(e),ce(a,t),t&&f(o),ce(r,t)}}}function De(d,e,a){let{data:o}=e;return d.$$set=r=>{"data"in r&&a(0,o=r.data)},[o]}class Ae extends ge{constructor(e){super(),ve(this,e,De,xe,be,{data:0})}}export{Ae as component};
