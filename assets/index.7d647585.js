import{_ as V,o,a as u,k as m,M as w,N as C,t as z,O as y,g as f,P as N,Q as R,p as P,r as h,i as c,B as S,n as b,j as g,u as $,R as B,b as k,S as j,v as D,A as F,U,d as M,l as I}from"./index.86bb2f32.js";import{g as A}from"./pexels.076993bf.js";const X={},q={class:"py-2 h-[80vh] flex flex-col"},E=m("h2",{class:"text-xl text-zinc-900 dark:text-zinc-200 font-bold mb-2 px-1"}," \u6240\u6709\u5206\u7C7B ",-1),G={class:"overflow-y-scroll"},H=["onClick"];function Q(s,t){return o(),u("div",q,[E,m("ul",G,[(o(!0),u(w,null,C(s.$store.getters.categorys,e=>(o(),u("li",{key:e.id,class:"text-lg text-zinc-900 dark:text-zinc-300 px-1 py-1.5 duration-100 active:bg-zinc-100 active:dark:bg-zinc-900",onClick:n=>s.$emit("onItemClick",e)},z(e.name),9,H))),128))])])}var W=V(X,[["render",Q]]);const Y={class:"bg-white dark:bg-zinc-900 duration-500 sticky top-0 left-0 z-10"},J=["onClick"],K={__name:"index",setup(s){const t=y(),e=f({transform:"translateX(0px)",width:"52px"});let n=[];const d=a=>{a&&n.push(a)};N(()=>{n=[]});const r=f(null),{x:_}=R(r);P(()=>t.getters.currentCategoryIndex,a=>{const{left:l,width:v}=n[a].getBoundingClientRect();e.value={transform:`translateX(${_.value+l-10+"px"})`,width:v+"px"}});const p=a=>{t.commit("app/changeCurrentCategory",a),i.value=!1},i=f(!1);return(a,l)=>{const v=h("m-svg-icon"),O=h("m-popup");return o(),u("div",Y,[m("ul",{class:"relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden",ref_key:"ulTarget",ref:r},[m("li",{class:"z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white dark:bg-zinc-900 shadow-l-white dark:shadow-l-zinc",onClick:l[0]||(l[0]=x=>i.value=!i.value)},[c(v,{class:"w-1.5 h-1.5",name:"hamburger"})]),m("li",{class:"absolute h-[22px] bg-zinc-900 dark:bg-zinc-800 rounded-lg duration-200",style:S(e.value)},null,4),(o(!0),u(w,null,C(a.$store.getters.categorys,(x,L)=>(o(),u("li",{key:x.id,class:b(["shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4",{"text-zinc-100 ":a.$store.getters.currentCategoryIndex===L}]),ref_for:!0,ref:d,onClick:de=>p(x)},z(x.name),11,J))),128))],512),c(O,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=x=>i.value=x)},{default:g(()=>[c(W,{onOnItemClick:p})]),_:1},8,["modelValue"])])}}},Z={class:"bg-white dark:bg-zinc-800 duration-500 sticky top-0 left-0 w-full z-10"},ee=["onClick"],te={__name:"index",setup(s){const t=y(),e=f(!1),n=()=>{e.value=!e.value},d=r=>{t.commit("app/changeCurrentCategory",r)};return(r,_)=>{const p=h("m-svg-icon");return o(),u("div",Z,[m("ul",{class:b(["w-[800px] relative flex flex-wrap justify-center overflow-x-auto px-[10px] py-1 text-xs text-zinc-600 duration-300 overflow-hidden mx-auto",[e.value?"h-[206px]":"h-[56px]"]])},[m("div",{class:"absolute right-1 bottom-1 z-20 p-1 rounded cursor-pointer duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-900",onClick:n},[c(p,{name:e.value?"fold":"unfold",class:"w-1 h-1",fillClass:"fill-zinc-900 dark:fill-zinc-300"},null,8,["name"])]),(o(!0),u(w,null,C(r.$store.getters.categorys,(i,a)=>(o(),u("li",{key:i.id,class:b(["shrink-0 px-1.5 py-0 z-10 duration-200 last:mr-4 text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300 text-base font-bold h-4 leading-4 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded mr-1 mb-1",{"text-zinc-900 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-900":r.$store.getters.currentCategoryIndex===a}]),onClick:l=>d(i)},z(i.name),11,ee))),128))],2)])}}},ne={__name:"index",setup(s){return y().dispatch("category/useCategoryData"),(e,n)=>$(B)?(o(),k(K,{key:0})):(o(),k(te,{key:1}))}},ae=()=>{const s=Math.floor(Math.random()*255),t=Math.floor(Math.random()*255),e=Math.floor(Math.random()*255),n=Math.random();return`rgba(${s}, ${t}, ${e}, ${n})`};const oe=["src"],se={__name:"item",props:{data:{type:Object,default:()=>{}},width:{type:Number,default:0}},setup(s){return(t,e)=>{const n=j("lazy");return o(),u("div",null,[D(m("img",{style:S([{width:"100%"},{width:s.width+"px",height:s.width/s.data.photoWidth*s.data.photoHeight+"px","background-color":$(ae)()}]),src:s.data.photo},null,12,oe),[[n]])])}}};var re=V(se,[["__scopeId","data-v-570ea33b"]]);const T={__name:"index",setup(s){let t={page:1,size:20,categoryId:"",searchText:""};const e=f(!1),n=f(!1),d=f([]),r=async()=>{if(n.value)return;d.value.length&&(t.page+=1);const _=await A(t);t.page===1?d.value=_.list:d.value.push(..._.list),d.value.length===_.total&&(n.value=!0),e.value=!1,console.log(e.value,"--")};return(_,p)=>{const i=h("m-waterfall"),a=h("m-infinite-list");return o(),u("div",null,[c(a,{loading:e.value,"onUpdate:loading":p[0]||(p[0]=l=>e.value=l),isFinished:n.value,onOnLoad:r},{default:g(()=>[c(i,{data:d.value,column:5,picturePreReading:!1},{default:g(({item:l,width:v})=>[c(re,{data:l,width:v},null,8,["data","width"])]),_:1},8,["data"])]),_:1},8,["loading","isFinished"])])}}},le={class:"max-w-screen-xl mx-auto relative m-1 xl:mt-4"},ie=I(" \u9996\u9875 "),ce=I(" VIP "),ue={name:"home"},me=Object.assign(ue,{setup(s){const t=y(),e=F(),n=()=>{t.commit("app/changeRouterType","push"),e.push("/member")},d=()=>{t.commit("app/changeRouterType","push"),t.getters.token?e.push("/profile"):e.push("/login")},r=f(null),{y:_}=R(r);return U(()=>{!r.value||(r.value.scrollTop=_.value)}),(p,i)=>{const a=h("m-trigger-menu-item"),l=h("m-trigger-menu");return o(),u("div",{class:"h-full overflow-auto bg-white dark:bg-zinc-800 duration-500 scrollbar-thin scrollbar-thumb-transparent xl:scrollbar-thumb-zinc-200 xl:dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent",ref_key:"containerTarget",ref:r},[c(T),c(ne),m("div",le,[c(T)]),$(B)?(o(),k(l,{key:0,class:"fixed bottom-6 m-auto left-0 right-0 w-[220px]"},{default:g(()=>[c(a,{icon:"home",iconClass:"fill-zinc-900 dark:fill-zinc-200"},{default:g(()=>[ie]),_:1}),p.$store.getters.token?(o(),k(a,{key:0,icon:"vip",iconClass:"fill-zinc-400 dark:fill-zinc-500",textClass:"text-zinc-400 dark:text-zinc-500",onClick:n},{default:g(()=>[ce]),_:1})):M("",!0),c(a,{icon:"profile",iconClass:"fill-zinc-400 dark:fill-zinc-500",textClass:"text-zinc-400 dark:text-zinc-500",onClick:d},{default:g(()=>[I(z(p.$store.getters.token?"\u6211\u7684":"\u767B\u5F55"),1)]),_:1})]),_:1})):M("",!0)],512)}}});export{me as default};
