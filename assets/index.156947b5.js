var z=Object.defineProperty,q=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var D=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&D(e,r,t[r]);if(b)for(var r of b(t))T.call(t,r)&&D(e,r,t[r]);return e},A=(e,t)=>q(e,K(t));var v=(e,t)=>{var r={};for(var s in e)P.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&b)for(var s of b(e))t.indexOf(s)<0&&T.call(e,s)&&(r[s]=e[s]);return r};import{H as Z,o as Q,g as Y,c as X,s as ee,p as te,x as re,j as se,b as ne,l as oe,a as ae,d as ie,n as ce,e as ue,f as le,h as de,t as ge,i as O,k as y,m as G,r as U,q as pe,u as me,v as he,w as _e,y as fe,z as ve,A as ye,B as be,C as Ae,D as Se,E as Ee,F as Oe,G as Re,I as De,J as Pe,K as Te,L as Le}from"./vendor.028298b3.js";const ke=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}};ke();const L={go:Y,css:X,sql:ee,php:te,xml:re,json:se,bash:ne,less:oe,scss:ae,shell:ie,nginx:ce,stylus:ue,python:le,javascript:de,typescript:ge};Object.keys(L).forEach(e=>Z.registerLanguage(e,L[e]));const Ie=(e,t={})=>new Promise((r,s)=>{const n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script"),R=t,{src:a,domain:c,type:u="text/javascript",charset:_="utf-8",defer:p=!1,async:m=!1}=R,f=v(R,["src","domain","type","charset","defer","async"]);if(o.type=u,o.defer=p,o.async=m,o.src=a||e,Object.keys(f).forEach(h=>{o[h]=f[h]}),c){const h=document.createElement("link");h.href=c,h.rel="preconnect",n.appendChild(h)}n.appendChild(o),o.onload=r,o.onerror=s}),N="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",we=e=>O({name:"Adsense",props:{class:String,insClass:{type:String,default:""},insStyle:{type:String,default:"display:block;"},dataAdClient:String,dataAdSlot:String,dataAdLayoutKey:String,dataAdTest:String,dataAdFormat:String,dataFullWidthResponsive:[Boolean,String]},setup(t){return()=>{const f=t,{class:r,insClass:s,insStyle:n,dataAdClient:o,dataAdSlot:a,dataAdLayoutKey:c,dataAdTest:u,dataAdFormat:_,dataFullWidthResponsive:p}=f,m=v(f,["class","insClass","insStyle","dataAdClient","dataAdSlot","dataAdLayoutKey","dataAdTest","dataAdFormat","dataFullWidthResponsive"]);return y("div",{class:["mammon-box",r||""],placeholder:"AD"},[y("script",{type:"text/javascript",async:"true",crossorigin:"anonymous",src:`${N}?client=${e}`}),y("ins",d({class:["adsbygoogle",s],style:n,"data-ad-client":o||e,"data-ad-slot":a,"data-ad-layout-key":c,"data-ad-test":u,"data-ad-format":_,"data-full-width-responsive":p},m)),y("script","(adsbygoogle = window.adsbygoogle || []).push({})")])}}});var Ce={install(e,t){const r=we(t.ID);e.component(r.name,r),t.enabledAutoAD&&Ie(N,{async:!0}).then(()=>{(window.adsbygoogle||[]).push({google_ad_client:t.ID,enable_page_level_ads:!0})})}};const V=e=>localStorage.getItem(e),j=(e,t)=>localStorage.setItem(e,t),Ge=e=>localStorage.removeItem(e),Ue=(e,t)=>j(e,JSON.stringify(t)),Ne=e=>{let t=null;const r=V(e);if(!r)return t;try{t=JSON.parse(r)}catch{t=null}return t};var H={get:V,set:j,remove:Ge,setJSON:Ue,getJSON:Ne},Ve=(e=>(e.Light="light",e.Dark="dark",e))(Ve||{});const M="__theme",je=()=>{const e=H.get(M);return e?e==="dark"?"dark":"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":(window.matchMedia("(prefers-color-scheme: light)").matches,"light")},B=Symbol("theme"),He=e=>{const t=pe(e),r=n=>{["light","dark"].includes(n)&&n!==t.value&&(t.value=n,H.set(M,n))},s=()=>{r(t.value==="dark"?"light":"dark")};return{theme:U(t),set:r,toggle:s}},Me=e=>{const t=He(e);return A(d({},t),{install(r){r.provide(B,t)}})},Be=()=>G(B),$e="github.surmon.me",xe="Surmon's GitHub repositories homepage.",Fe="2.0.0",Je="https://github.surmon.me",We={name:"Surmon",url:"https://github.com/surmon-china"},ze={type:"git",url:"https://github.com/surmon-china/surmon-china.github.io"},qe={dev:"vite",build:"vite build",generate:"node prerender",preview:"vite preview"},Ke={"@codemirror/basic-setup":"^0.19.1","@codemirror/lang-javascript":"^0.19.7","@highlightjs/vue-plugin":"^2.1.0","@vueuse/head":"^0.7.5",axios:"^0.26.1",dedent:"^0.7.0","gh-lang-colors":"^0.0.19","highlight.js":"^11.5.0","js-base64":"^3.7.2",lodash:"^4.17.21",naivebayes:"^0.5.0",pinia:"^2.0.11",segmentit:"^2.0.3",swiper:"^8.0.7",vue:"^3.2.31","vue-router":"^4.0.14","vue-touch-ripple":"^4.0.0-rc.4"},Ze={"@types/dedent":"^0.7.0","@types/node":"^17.0.21","@vitejs/plugin-vue":"^2.2.4",eslint:"^8.11.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^8.5.0",prettier:"^2.5.1",sass:"^1.49.9",typescript:"^4.6.2",vite:"^2.8.6"};var Qe={name:$e,description:xe,version:Fe,homepage:Je,author:We,repository:ze,scripts:qe,dependencies:Ke,devDependencies:Ze},i=(e=>(e.Readme="README.md",e.Naivebayes="naivebayes",e.VueAwesomeSwiper="vue-awesome-swiper",e.VueQuillEditor="vue-quill-editor",e.VueVideoPlayer="vue-video-player",e.VueCodemirror="vue-codemirror",e.VueTouchRipple="vue-touch-ripple",e.VueDragZone="vue-drag-zone",e))(i||{});const Ye=Qe.homepage,Xe="surmon",g="surmon-china",$="surmon-china.github.io",x="surmon.me",et=`https://github.com/${g}`,tt=`https://github.com/${g}?tab=followers`,rt=`https://github.com/sponsors/${g}`,st={image:"",url:""},nt=[{image:"",url:""}],ot=`https://cdn.jsdelivr.net/gh/${g}/${$}@release/`,F="https://v1.github.surmon.me/",at=e=>`${F}${e}`,J="ca-pub-4710915636313788",it={title:"Surmon's open-source projects",description:"Surmon's GitHub repository pages.",keywords:[g,...Object.values(i)].join(",")};var At=Object.freeze(Object.defineProperty({__proto__:null,Repository:i,PROJECT_URL:Ye,NPM_UID:Xe,GITHUB_UID:g,GITHUB_PROJECT_NAME:$,GITHUB_PAGES_ROOT_DOMAIN:x,GITHUB_USER_URL:et,GITHUB_FOLLOWERS_URL:tt,GITHUB_SPONSORS_URL:rt,IMAGE_AD:st,SWIPER_ADS:nt,CDN_PREFIX:ot,V1_LEGACY_URL:F,getLegacyURL:at,GOOGLE_ADSENSE_CLIENT:J,APP_META:it},Symbol.toStringTag,{value:"Module"}));const ct=()=>{const e=fe();return A(d({},e),{renderToString(){return _e(e)},install(t,...r){return t.use(e,...r),e}})};function ut(e){const t=he(()=>{const u=typeof e=="function"?e():e,{title:s,keywords:n,description:o}=u,a=v(u,["title","keywords","description"]),c=a.meta||[];return n&&c.push({key:"keywords",name:"keywords",content:n}),o&&c.push({key:"description",name:"description",content:o}),A(d({},a),{title:s,meta:c})});return me(t)}const k=e=>({language:e.language,userAgent:e.userAgent,isZhLangGuest:e.language.includes("zh-CN"),isMobileDevice:/Android/i.test(e.userAgent)||/webOS/i.test(e.userAgent)||/iPhone/i.test(e.userAgent)||/iPad/i.test(e.userAgent)||/iPod/i.test(e.userAgent)||/BlackBerry/i.test(e.userAgent)||/Windows Phone/i.test(e.userAgent)}),W=Symbol("visitor"),lt=e=>{const t=ve(k(e)),r=()=>{Object.assign(t,k({language:navigator.language,userAgent:navigator.userAgent}))},s=U(t);return{state:s,resetStateOnClient:r,install(n){n.provide(W,s)}}},St=()=>G(W);var I=O({name:"ulink",props:{text:String,href:{type:String,required:!0},blank:{type:Boolean,default:!0},external:{type:Boolean,default:!1}},setup(e,t){return()=>{var p,m;const _=e,{text:r,href:s,external:n,blank:o}=_,a=v(_,["text","href","external","blank"]),c={},u=new URL(s);return(n||!u.host.endsWith(x))&&(c.rel="external nofollow noopener"),o&&(c.target="_blank"),y("a",d(d({href:s},a),c),((m=(p=t.slots).default)==null?void 0:m.call(p))||r)}}});const dt="modulepreload",w={},gt="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/",l=function(t,r){return!r||r.length===0?t():Promise.all(r.map(s=>{if(s=`${gt}${s}`,s in w)return;w[s]=!0;const n=s.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":dt,n||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),n)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},pt=[{name:"home",path:"/",component:()=>l(()=>import("./home.fa76671b.js"),["assets/home.fa76671b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.028298b3.js"])},{name:i.Readme,path:"/readme-md",component:()=>l(()=>import("./readme-md.68f2ae77.js"),["assets/readme-md.68f2ae77.js","assets/navbar.b5801c40.js","assets/vendor.028298b3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vue.bdb7d92d.js"])},{name:i.Naivebayes,path:"/naivebayes",component:()=>l(()=>import("./naivebayes.2917a35c.js"),["assets/naivebayes.2917a35c.js","assets/navbar.b5801c40.js","assets/vendor.028298b3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/iframe.ee18cd90.js"])},{name:i.VueAwesomeSwiper,path:"/"+i.VueAwesomeSwiper,component:()=>l(()=>import("./vue-awesome-swiper.4a15b5b6.js"),["assets/vue-awesome-swiper.4a15b5b6.js","assets/examples.00f1491d.js","assets/navbar.b5801c40.js","assets/vendor.028298b3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vue.bdb7d92d.js"])},{name:i.VueCodemirror,path:"/"+i.VueCodemirror,component:()=>l(()=>import("./vue-codemirror.bc602dc8.js"),["assets/vue-codemirror.bc602dc8.js","assets/navbar.b5801c40.js","assets/vendor.028298b3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/iframe.ee18cd90.js"])},{name:i.VueDragZone,path:"/"+i.VueDragZone,component:()=>l(()=>import("./vue-drag-zone.c7f1177e.js"),["assets/vue-drag-zone.c7f1177e.js","assets/navbar.b5801c40.js","assets/vendor.028298b3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/iframe.ee18cd90.js"])},{name:i.VueQuillEditor,path:"/"+i.VueQuillEditor,component:()=>l(()=>import("./vue-quill-editor.bf390228.js"),["assets/vue-quill-editor.bf390228.js","assets/navbar.b5801c40.js","assets/vendor.028298b3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/iframe.ee18cd90.js"])},{name:i.VueTouchRipple,path:"/"+i.VueTouchRipple,component:()=>l(()=>import("./vue-touch-ripple.ee3f6792.js"),["assets/vue-touch-ripple.ee3f6792.js","assets/examples.00f1491d.js","assets/navbar.b5801c40.js","assets/vendor.028298b3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vue.bdb7d92d.js"])},{name:"error",path:"/:error(.*)",component:()=>l(()=>import("./home.fa76671b.js"),["assets/home.fa76671b.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.028298b3.js"])}],E=ye.create();E.interceptors.response.use(e=>e.data,e=>(console.warn("Fetch failed:",e),Promise.reject(e)));const C=e=>{const t=g,r="release",s=`https://raw.githubusercontent.com/${t}/${t}/${r}/${e}`,n=`https://api.github.com/repos/${t}/${t}/contents/${e}?ref=${r}`;return E.get(s).catch(()=>E.get(n).then(o=>{if(o.encoding==="base64"){const a=Ae(o.content);return e.endsWith(".json")?JSON.parse(a):a}return null}))},mt=be("global",{state:()=>({initialized:!1,githubData:null,npmData:null}),getters:{githubUserinfo:e=>{var t;return(t=e.githubData)==null?void 0:t.userinfo},githubRepositories:e=>{var t;return((t=e.githubData)==null?void 0:t.repositories)||[]},githubOrganizations:e=>{var t;return((t=e.githubData)==null?void 0:t.organizations)||[]},npmPackages:e=>{var t;return((t=e.npmData)==null?void 0:t.packages)||[]},npmPackagesDownloadsMap:e=>{var r;const t=((r=e.npmData)==null?void 0:r.downloads)||{};return new Map(Object.keys(t).map(s=>[s,t[s]]))},githubOwnRepositories(){return this.githubRepositories.filter(e=>!e.fork).sort((e,t)=>t.stargazers_count-e.stargazers_count)},githubNPMRepositories(){return this.githubRepositories.filter(e=>Boolean(this.getRepositoryNPMPackage(e.name)))},getGitHubRepositoryDetail(){return e=>this.githubRepositories.find(t=>t.name===e)},getRepositoryNPMPackage(){return e=>{const t=this.getGitHubRepositoryDetail(e);if(t)return this.npmPackages.find(r=>r.package.name===e||r.package.links.repository===t.html_url)}}},actions:{fetchGitHubAggregateData(){return C("github.json").then(e=>{this.githubData=e})},fetchNPMAggregateData(){return C("npm.json").then(e=>{this.npmData=e})},init(){return Promise.all([this.fetchGitHubAggregateData(),this.fetchNPMAggregateData()]).finally(()=>{this.initialized=!0})}}}),ht=O({setup(e){const t=mt(),r=Be();return ut(()=>({htmlAttrs:{theme:r.theme.value}})),Se(()=>t.init()),(s,n)=>{const o=Ee("router-view");return Oe(),Re(o)}}}),_t=e=>{const t=e.appCreator(ht),r=De(),s=ct(),n=Me(e.initTheme),o=lt({language:e.language,userAgent:e.userAgent}),a=Pe({routes:pt,strict:!0,history:e.routerHistory,linkActiveClass:"link-active",scrollBehavior:()=>({top:0,behavior:"smooth"})});return t.use(a),t.use(r),t.use(s),t.use(n),t.use(o),t.component(I.name,I),{app:t,router:a,pinia:r,meta:s,theme:n,visitor:o}};const{app:S,router:ft,visitor:vt}=_t({appCreator:Te,routerHistory:Le(),initTheme:je(),language:navigator.language,userAgent:navigator.userAgent});S.use(Q);S.use(Ce,{ID:J,enabledAutoAD:!1});vt.resetStateOnClient();ft.isReady().finally(()=>{S.mount("#app").$nextTick(()=>{console.log("App mounted:",S)})});export{it as A,At as C,et as G,st as I,i as R,nt as S,Ve as T,g as a,Be as b,mt as c,$ as d,J as e,St as f,at as g,ut as u};
