import{N as f,L as p}from"./navbar.0be95e79.js";import{d as c,r as u,a as s,c as t,q as o,e as _,y,m as g,Q as v,D as I,j as l}from"./index.76ee433a.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";const E=c({name:"iframe-renderer",components:{Navbar:f,Loading:p},props:{src:{type:String,required:!0},repository:{type:String,required:!0},legacy:{type:Boolean,default:!1},fullnav:{type:Boolean,default:!1}},setup(){const e=u({loading:!0,error:null}),r=()=>{e.loading=!1};return{state:e,handleIframeLoaded:r,handleIframeError:n=>{r(),e.error=String(n)}}}});const L=["src"],B={key:0,class:"loading-box"};function C(e,r,d,n,N,b){const i=l("navbar"),m=l("loading");return s(),t("div",{class:I(["iframe-renderer",{legacy:e.legacy}])},[o(i,{class:"header",repository:e.repository,full:e.fullnav},null,8,["repository","full"]),_("iframe",{class:"iframe",src:e.src,onLoad:r[0]||(r[0]=(...a)=>e.handleIframeLoaded&&e.handleIframeLoaded(...a)),onError:r[1]||(r[1]=(...a)=>e.handleIframeError&&e.handleIframeError(...a))},null,40,L),o(v,{name:"module"},{default:y(()=>[e.state.loading?(s(),t("div",B,[o(m)])):g("",!0)]),_:1})],2)}const S=h(E,[["render",C],["__scopeId","data-v-8ad22703"]]);export{S as I};
