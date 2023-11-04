import{o as n,c as l,a as M,d as g,r as b,b as k,e as I,f as w,n as $,g as f,h as V,i,F as u,j as _,u as p,k as d,w as h,l as v,t as m,m as x,p as J,v as O,q as B,s as j,x as H,y as W,z as N,A as U,B as G,C as z,D as Q,E as Y,G as q,V as K}from"./vendor.7d5c6f3f.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};X();var S=(o,t)=>{const r=o.__vccOpts||o;for(const[a,e]of t)r[a]=e;return r};const Z={},ee={id:"welcome",class:"container h-[250px] md:h-[682px]"},te=M('<div class="with-background w-full h-full absolute top-0 opacity-50" data-v-09fc5ebe></div><div class="w-full h-full flex flex-col items-center justify-center relative -top-3.5" data-v-09fc5ebe><span class="text-[1.375rem] md:text-[2.5rem] text-shadow" data-v-09fc5ebe> Welcome </span><span class="text-2xl md:text-[2.75rem] text-orange-600 text-shadow" data-v-09fc5ebe> I&#39;m Ivan Deinichenko </span><div class="frontend-button" data-v-09fc5ebe>Frontend Developer</div></div>',2),se=[te];function oe(o,t){return n(),l("div",ee,se)}var ne=S(Z,[["render",oe],["__scopeId","data-v-09fc5ebe"]]);const ie=g("about",{state:()=>({overall:["More than 10 years experience in web and mobile game development as frontend / fullstack.","Have expertise with browsers API, social networks API, Google API (e.g. Firebase), REST. Worked at some Unity 3D projects as C# developer.","Have backend expertise including PHP, MySQL, Memcached, Redis, Yii, Yii2, CodeIgniter, Laravel.","Few year partially worked at team lead of game development team. Meet-ups, Jira, planning and estimating projects."],info:[{title:"From:",content:"Russia, Petrozavodsk",delay:750},{title:"Lives In:",content:"Serbia, Belgrade",delay:2e3},{title:"Gender:",content:"Male",delay:3250},{title:"Age:",content:"34",delay:3600}],cvLink:"https://google.com"})});const y={setup(o){const t=b(null),r=b(!1);return k(()=>{var a;return(a=t.value)==null?void 0:a.addEventListener("animationend",e=>r.value=!1)}),I(()=>{var a;return(a=t.value)==null?void 0:a.removeAllListeners("animationend")}),(a,e)=>(n(),l("div",{ref_key:"button",ref:t,class:$(["neuromorph-button",{"neuromorph-button--active":r.value}]),onClick:e[0]||(e[0]=s=>r.value=!0)},[w(a.$slots,"default")],2))}};const ae={id:"about",class:"container flex flex-col items-center px-7 md:mt-13"},le={class:"flex flex-col items-center md:hidden"},re=i("div",{class:"photo mt-14 mb-7"},null,-1),ce={class:"items-list px-5 mb-6 text-justify font-roboto"},de={class:"info-list w-full mb-7"},ue={class:"hidden md:flex md:justify-between md:px-4"},pe={class:"items-list text-justify font-roboto mr-12 text-xl max-w-[50%]"},me={class:"flex flex-col flex-grow"},_e=i("div",{class:"photo mt-2 mb-8"},null,-1),ve={class:"info-list w-full text-xl"},fe=v(" Download CV "),he=f({setup(o){const t=ie();return(r,a)=>{const e=V("VueWriter");return n(),l("div",ae,[i("div",le,[re,i("ul",ce,[(n(!0),l(u,null,_(p(t).overall,(s,c)=>(n(),l("li",{key:c},m(s),1))),128))]),i("ul",de,[(n(!0),l(u,null,_(p(t).info,(s,c)=>(n(),l("li",{key:c},[v(m(s.title)+" ",1),d(e,{array:[s.content],iterations:1,"type-speed":50,start:s.delay},null,8,["array","start"])]))),128))])]),i("div",ue,[i("ul",pe,[(n(!0),l(u,null,_(p(t).overall,(s,c)=>(n(),l("li",{key:c,class:"mb-6 leading-8"},m(s),1))),128))]),i("div",me,[_e,i("ul",ve,[(n(!0),l(u,null,_(p(t).info,(s,c)=>(n(),l("li",{key:c},[v(m(s.title)+" ",1),d(e,{array:[s.content],iterations:1,"type-speed":50,start:s.delay},null,8,["array","start"])]))),128))])])]),d(y,{class:"px-16 py-4 mt-13 text-orange-600 text-xl"},{default:h(()=>[fe]),_:1})])}}}),T=document.scrollingElement,E="element-appeared";var F=(o,t)=>{const r=document.getElementById(o);if(!r)return;const a=()=>{T&&T.scrollTop>=t&&!r.classList.contains(E)&&(document.removeEventListener("scroll",a),r.classList.add(E))};document.addEventListener("scroll",a)};const be=g("experience",{state:()=>({items:[{period:"Nov 2022 - Present",company:"Acronis (Belgrade, Serbia)",position:"Senior Software Developer",responsibilities:"Development of the client side of the Acronis website, project evaluation, code review, SEO features."},{period:"Feb 2022 - Nov 2022",company:"Noveo (St. Petersburg, Russia)",position:"Middle+ VueJS Developer",responsibilities:"Development of frontend of applications, Projects estimation, Code Review."},{period:"May 2021 - Jun 2022",company:"Startup Company (St. Petersburg, Russia)",position:"Unity / Frontend Developer",responsibilities:"Development of visual novels game for Play Market and App Store based on Unity3D Engine. Integration of billing, notifications, metrics, social plugins and etc. Development of project`s administration SPA based on VueJS. Technologies: Unity 3D, C#, OOP, SOLID, Logcat, JarResolver. JS ES6+, VueJS, Vuex, Vue Router, Vue Bootstrap, Firebase API"},{period:"Jun 2020 - May 2021",company:"Startup Company (St. Petersburg, Russia)",position:"Fullstack Developer",responsibilities:"Development of text novels game for Play Market based on HTML5, VueJS and WebView. Development of project`s administration SPA based on VueJS. Technologies: Git, JavaScript ES6+, VueJS, Vuex, Vuetify, Vue Router, Vue i18n, Vue Draggable, Vue SVG Icons, Webpack, npm, composer, docker, Laravel, CodeIgniter, MySQL, Redis, CI/CD."},{period:"Sep 2019 - Jun 2020",company:"Publisher company (St. Petersburg, Russia)",position:"Unity Developer",responsibilities:"Development of mobile games for Play Market and App Store in hyper-casual genre. Core functionality of games, integration of billing, localiaztion, notifcations, ads providers, socials etc. Technologies: Git, Unity 3D, C#, REST API, OOP, SOLID, Figma, Logcat, XCode, CocoaPods, JarResolver."},{period:"Oct 2018 - Sep 2019",company:"Social Platform (St. Petersburg, Russia)",position:"Frontend Developer",responsibilities:"Development and support of HTML 5 canvas games. Match 3, some clickers, arcades, mahjong, puzzles etc. Additionally refactoring and optimization of platform`s legacy. Technologies: Git, JavaScript ES6+, WebSockets, Webpack, npm, HTML5 + Canvas, CSS 3, SASS."},{period:"Oct 2017 - Oct 2018",company:"Social Platform (St. Petersburg, Russia)",position:"Frontend Developer",responsibilities:"Development of new functionality for farm-like game on social platform. Supports and updated actual functionality, communicate with community, re-runs regular activities, creates the new ones. Technologies: Git, Javascript ES5, HTML5, CSS3, SASS, Gulp, WebSockets, Lodash, Social API, REST API, Photoshop. Partially PHP, Yii 2, MySQL."},{period:"Oct 2012 - Oct 2017",company:"Game Development Company (Petrozavodsk, Russia)",position:"Fullstack Developer, Team Lead",responsibilities:"As a developer: Development of HTML games. Markup, frontend logic, backend logic, database design. As a team lead: meet-ups / stand-ups, communication between product owners and development team, Jira tracking, sprints planning, tasks and projects estimates. Consulting, research of new ideas and technologies, takes part in products brainstorms. Technologies: Git, JavaScript ES5, HTML5, CSS3, Canvas, jQuery, REST API, PHP5, Yii, MySQL, Photoshop, WebSockets/Long Polling, Social networks APIs, Unity 3D (partially, last year)."},{period:"Sep 2006 - Jun 2012",company:"Petrozavodsk State University (Faculty of Mathematics)",position:"IT Specialist",responsibilities:"I graduated cathedra of Information Systems and Technologies as an IT specialist."}]})});const ye={class:"timeline-item__period"},ge={class:"timeline-item__details"},xe={class:"timeline-item__company"},Se={class:"timeline-item__position"},ke={key:0,class:"timeline-item__toggle md:text-base"},we=i("b",{class:"text-orange-600"},"\u25B2",-1),$e=v(" Collapse "),Ce=[we,$e],Pe={key:1,class:"timeline-item__toggle md:text-base"},Le=i("b",{class:"text-orange-600"},"\u25BC",-1),De=v(" Expand "),Te=[Le,De],Ee=f({props:{period:null,company:null,position:null,responsibilities:null},setup(o){const t=b(!1);return(r,a)=>(n(),l("li",{class:"timeline-item font-roboto",onClick:a[0]||(a[0]=e=>t.value=!t.value)},[i("div",ye,m(o.period),1),i("div",ge,[i("p",xe,m(o.company),1),i("p",Se,m(o.position),1),i("p",{class:$(["timeline-item__responsibilities",{"whitespace-normal":t.value}])},m(o.responsibilities),3),i("p",null,[t.value?(n(),l("span",ke,Ce)):(n(),l("span",Pe,Te))])])]))}});const Ae={class:"timeline"},Me=f({setup(o){const t=be();return(r,a)=>(n(),l("ul",Ae,[(n(!0),l(u,null,_(p(t).items,(e,s)=>(n(),x(Ee,{key:s,period:e.period,company:e.company,position:e.position,responsibilities:e.responsibilities},null,8,["period","company","position","responsibilities"]))),128))]))}});const Ie={id:"experience",class:"container px-7 md:mt-16"},Ve=i("h1",{class:"md:mb-8"},"My Experience",-1),Fe=f({setup(o){return k(()=>F("experience",650)),(t,r)=>(n(),l("div",Ie,[Ve,d(Me,{class:"mb-7"})]))}}),Re=g("skills",{state:()=>({skills:[{title:"Programming Languages",list:["JavaScript ES5+","PHP 5-7+","C/C++","HTML 5","CSS 3","MySQL","ActionScript 3"]},{title:"Development and Production",list:["Software development","Object-oriented architecture and design","Front-end development","HTML games development","Unity games development","Documentation creation","Cross-browser markup/development","Third-party widgets integration","Code quality assurance (code review, refactoring)"]},{title:"Soft Skills",list:["Communication","Team Leadership","Productivity and Efficiency","Research","Planning and Estimates","Jira Management","Agile / Scrum"]},{title:"Languages",list:["Russian - Native","English - Intermediate (B1-B2)"]}]})});const Je={class:"mb-3 last:mb-10 font-roboto text-sm"},Oe=f({props:{title:null,list:null},setup(o){return(t,r)=>(n(),l(u,null,[i("h2",null,m(o.title),1),i("ul",Je,[(n(!0),l(u,null,_(o.list,(a,e)=>(n(),l("li",{key:e,class:"relative pl-4"},m(a),1))),128))])],64))}});var Be=S(Oe,[["__scopeId","data-v-79f3a3f5"]]);const je={id:"skills",class:"container px-7 md:mt-16 md:mb-32"},He=i("h1",{class:"block md:hidden"},"My Skills",-1),We=i("h1",{class:"hidden md:block"},"Skills and Technologies",-1),Ne={class:"block md:hidden"},Ue=M('<div class="hidden md:flex mt-6 justify-between"><div class="flex basis-[55%] flex-col mr-4"><h2 class="mb-3">Skills</h2><ul class="md-skills-list font-roboto"><li>Software development</li><li>Object-oriented architecture and design</li><li>Frontend development</li><li>HTML games development</li><li>Unity games development</li><li>Documentation creation</li><li>Cross-browser markup / development</li><li>Third-party widgets integration</li><li>Code quality assurance (code review, refactoring)</li></ul></div><div class="flex basis-[45%]"><ul class="md-techs-list font-roboto"><li><b>Languages: </b> JavaScript ES 5/6+, HTML5, CSS3, SASS, LESS, C#, PHP </li><li><b>Frameworks/libraries: </b> Vue 2/3, Nuxt 2/3, Vuex, Vue Router, Vuetify, Vue Bootstrap, Lodash, jQuery, Phaser, Spine, Axios, TweenJS, ChartJS </li><li><b>Technologies: </b> Social API (e.g. Facebook, VK), Firebase API (remote config, realtime database) </li><li><b>DBMS: </b> MySQL </li><li><b>Tools: </b> Git, Jira, Confluence, Bash, Webpack, NPM, Composer, Yarn, Brew, Docker, Figma, Photoshop, Browsers DevTools </li><li><b>IDEs: </b> VSCode, PhpStorm </li></ul></div></div>',1),Ge=f({setup(o){const t=Re();return k(()=>F("skills",2040)),(r,a)=>(n(),l("div",je,[He,We,i("div",Ne,[(n(!0),l(u,null,_(p(t).skills,(e,s)=>(n(),x(Be,{key:s,title:e.title,list:e.list},null,8,["title","list"]))),128))]),Ue]))}});const ze=o=>(B("data-v-436f985b"),o=o(),j(),o),Qe=ze(()=>i("span",{class:"-mr-1 -mt-[1px]"},"\u25B2",-1)),Ye={setup(o){const r=b(!1),a=()=>r.value=document.scrollingElement.scrollTop>=1100;k(()=>document.addEventListener("scroll",a)),I(()=>document.removeEventListener("scroll",a));const e=()=>window.scrollTo({top:0,behavior:"smooth"});return(s,c)=>J((n(),x(y,{class:"scroll-up-button",onClick:e},{default:h(()=>[Qe]),_:1},512)),[[O,r.value]])}};var qe=S(Ye,[["__scopeId","data-v-436f985b"]]);const Ke=f({setup(o){return(t,r)=>(n(),l(u,null,[d(ne),d(he),d(Fe),d(Ge),d(qe)],64))}}),Xe=[{path:"/",name:"Home",component:Ke}],Ze=H({history:W(),routes:Xe}),L=g("nav",{state:()=>({navigation:[{name:"About me",name_short:"About",link:"about"},{name:"My Experience",name_short:"Experience",link:"experience"},{name:"My Skills",name_short:"Skills",link:"skills"}]})}),P={};var D=o=>{var t;P[o]||(P[o]=document.getElementById(o)),window==null||window.scrollTo({top:((t=P[o])==null?void 0:t.offsetTop)||0,behavior:"smooth"})};const et=["onClick"],tt=i("span",{class:"text-orange-600"},"\u25B6",-1),st=v(" \u2715 "),ot=f({props:{visible:{type:Boolean}},emits:["close"],setup(o,{emit:t}){const{navigation:r}=L(),a=e=>{D(e),t("close")};return(e,s)=>(n(),l("div",{class:$(["absolute top-0 left-0 w-[100vw] h-[100vh] z-10 transition-all -translate-x-full will-change-transform px-8 py-8 bg-dark-primary",{"translate-x-0":o.visible}])},[i("ul",null,[(n(!0),l(u,null,_(p(r),(c,C)=>(n(),l("li",{key:C,onClick:Tt=>a(c.link),class:"mb-2 text-xl select-none"},[tt,v(" "+m(c.name),1)],8,et))),128))]),d(y,{class:"absolute bottom-20 left-1/2 -translate-x-1/2 rounded-full w-16 h-16 flex items-center justify-center text-3xl text-orange-600",onClick:s[0]||(s[0]=c=>e.$emit("close"))},{default:h(()=>[st]),_:1})],2))}}),nt={class:"bg-header h-16 w-full flex items-center justify-center px-4 relative sm:hidden"},it=i("div",{class:"w-5 h-1 bg-orange-600 rounded-sm pointer-events-none"},null,-1),at=i("div",{class:"w-5 h-1 bg-orange-600 rounded-sm pointer-events-none"},null,-1),lt=i("div",{class:"w-5 h-1 bg-orange-600 rounded-sm pointer-events-none"},null,-1),rt=v(" @Deathklaat "),ct={class:"hidden sm:flex items-center justify-between px-8 py-4 max-w-[1180px] mx-auto"},dt=i("div",{class:"text-lg"},"@Deathklaat",-1),ut={class:"flex items-center text-lg"},pt=["onClick"],mt=v(" En "),_t={setup(o){const{navigation:t}=L(),r=b(!1);return(a,e)=>(n(),l(u,null,[i("div",nt,[d(y,{class:"w-8 h-8 absolute left-4 flex flex-col justify-evenly items-center",onClick:e[0]||(e[0]=s=>r.value=!0)},{default:h(()=>[it,at,lt]),_:1}),rt]),d(ot,{visible:r.value,class:"sm:hidden",onClose:e[1]||(e[1]=s=>r.value=!1)},null,8,["visible"]),i("div",ct,[dt,i("div",ut,[(n(!0),l(u,null,_(p(t),(s,c)=>(n(),l("a",{key:c,class:"mx-4 cursor-pointer",onClick:N(C=>p(D)(s.link),["prevent"])},m(s.name_short),9,pt))),128)),d(y,{class:"w-9 h-9 flex flex-col justify-evenly items-center text-orange-600 ml-4"},{default:h(()=>[mt]),_:1})])])],64))}},vt=g("contacts",{state:()=>({contacts:[{type:"google",href:"mailto:deathklaat89@gmail.com"},{type:"vk",href:"https://vk.com/deathklaat"},{type:"telegram",href:"https://t.me/frostklaat"},{type:"facebook",href:"https://facebook.com/ivan.deinichenko"},{type:"github",href:"https://github.com/deathklaat"}]})});const ft={class:"footer"},ht=i("div",{class:"border mb-5 border-dark-primary shadow-separator"},null,-1),bt={class:"inline-block text-center w-full mb-4 md:text-2xl md:mb-6 md:mt-2"},yt=["onClick"],gt={class:"inline-block text-center w-full mb-4 md:mb-6"},xt=["href"],St=i("p",{class:"text-center mb-4 text-xs md:text-xl md:mb-6"},[v(" Created by \xA9 2023 Ivan Deinichenko."),i("br"),v(" All Rights Reserved. ")],-1),kt={setup(o){const{navigation:t}=L(),{contacts:r}=vt();return(a,e)=>(n(),l("div",ft,[ht,i("div",bt,[(n(!0),l(u,null,_(p(t),(s,c)=>(n(),l("span",{key:c,class:"mx-2",onClick:C=>p(D)(s.link)},m(s.name_short),9,yt))),128))]),i("div",gt,[(n(!0),l(u,null,_(p(r),(s,c)=>(n(),l("a",{key:c,href:s.href,class:"mx-2",target:"_blank"},[i("i",{class:$(["icon inline-block w-5 h-5 bg-cover md:w-6 md:h-6",`icon--${s.type}`])},null,2)],8,xt))),128))]),St]))}},wt={};function $t(o,t){return w(o.$slots,"default")}var A=S(wt,[["render",$t]]);const Ct={};function Pt(o,t){return w(o.$slots,"default")}var Lt=S(Ct,[["render",Pt]]);const R=f({setup(o){const t=U(A),r=G();return z(()=>r.meta,a=>{switch(a.layout){case"AuthLayout":t.value=Lt;break;default:t.value=A;break}},{immediate:!0}),(a,e)=>(n(),x(Q(p(t)),null,{default:h(()=>[d(_t),w(a.$slots,"default"),d(kt)]),_:3}))}}),Dt=f({setup(o){return(t,r)=>{const a=V("router-view");return n(),x(R,null,{default:h(()=>[d(a)]),_:1})}}});Y(Dt).use(q()).use(Ze).use(K).component("AppLayout",R).mount("#app");
