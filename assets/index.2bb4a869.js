import{ai as x,A as p,O as f,g as h,r as n,o as t,a as c,k as r,b as l,d as s,t as g,i as k,j as b,l as y}from"./index.86bb2f32.js";import{b as v}from"./pay.e317fce6.js";const w={class:"h-full bg-zinc-200 dark:bg-zinc-800 duration-400 xl:pt-1"},z={class:"mx-auto h-full pt-[50%] px-1 bg-white dark:bg-zinc-900 duration-400 xl:h-[360px] xl:rounded-sm xl:py-10 xl:border-zinc-200 xl:dark:border-zinc-600 xl:border-[1px] xl:px-4 xl:max-w-screen-lg"},C={key:0,class:"flex justify-center items-center"},N={class:"text-ml text-zinc-900 dark:text-zinc-200"},R=y("\u786E\u5B9A"),O={__name:"index",setup(B){const u=x(),i=p(),d=f(),e=h(null);(async()=>{const a=await v(u.query.out_trade_no);e.value=a})();const m=()=>{d.dispatch("user/profile"),i.push("/")};return(a,V)=>{const o=n("m-svg-icon"),_=n("m-button");return t(),c("div",w,[r("div",z,[JSON.stringify(e.value)!=="null"?(t(),c("div",C,[e.value?(t(),l(o,{key:0,name:"pay-success",class:"w-8 h-8 mr-4"})):s("",!0),e.value?s("",!0):(t(),l(o,{key:1,name:"pay-fail",class:"w-8 h-8 mr-4"})),r("p",N,g(e.value?"\u652F\u4ED8\u6210\u529F":"\u652F\u4ED8\u5931\u8D25"),1)])):s("",!0),k(_,{class:"w-full mt-8 mx-auto dark:bg-zinc-800 xl:w-[120px]",onClick:m},{default:b(()=>[R]),_:1})])])}}};export{O as default};
