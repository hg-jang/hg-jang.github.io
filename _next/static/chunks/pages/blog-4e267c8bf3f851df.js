(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(1268)}])},2148:function(e,t,r){"use strict";var n=r(8598);let s=e=>{let{tag:t}=e;return(0,n.jsx)("li",{className:" inline-flex justify-center items-center py-1 px-2 bg-blue-300 rounded font-notoSans font-normal text-xs cursor-pointer hover:bg-blue-400 ",children:t})};t.Z=s},1171:function(e,t,r){"use strict";var n=r(8598);let s=e=>(0,n.jsxs)("div",{className:"flex items-center justify-center gap-1 text-slate-800 dark:text-slate-800",children:[(0,n.jsx)("button",{onClick:()=>e.handler("first"),type:"button",className:"h-7 py-0 px-2 bg-slate-300 appearance-none border-none rounded text-inherit tracking-widest transition-colors duration-300 ease-in-out cursor-pointer hover:bg-slate-200",children:"start"}),(0,n.jsx)("button",{onClick:()=>e.handler("prev"),type:"button",className:"h-7 py-0 px-2 bg-slate-300 appearance-none border-none rounded text-inherit tracking-widest transition-colors duration-300 ease-in-out cursor-pointer hover:bg-slate-200",children:"prev"}),function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=function(e,t,r){if(t>e)return Array.from({length:e},(e,t)=>t+1);let n=Math.floor(t/2),s=t;r+n>=e?s=e:r>n&&(s=r+n);let a=s-t;return Array.from({length:t},(e,t)=>t+1+a)}(t,r,s),l=a.map(t=>t===e.currentPage?(0,n.jsx)("button",{type:"button",className:"h-7 w-7 py-0 px-2 bg-slate-400 appearance-none border-none rounded text-inherit tracking-widest transition-colors duration-300 ease-in-out cursor-pointer ",onClick:()=>e.handler(t),children:t},t):(0,n.jsx)("button",{type:"button",className:"h-7 w-7 py-0 px-2 bg-slate-200 appearance-none border-none rounded text-inherit tracking-widest transition-colors duration-300 ease-in-out cursor-pointer hover:bg-slate-300 ",onClick:()=>e.handler(t),children:t},t));return l}(e.totalPages,e.maxVisiblePages,e.currentPage),(0,n.jsx)("button",{onClick:()=>e.handler("next"),type:"button",className:"h-7 py-0 px-2 bg-slate-300 appearance-none border-none rounded text-inherit tracking-widest transition-colors duration-300 ease-in-out cursor-pointer hover:bg-slate-200",children:"next"}),(0,n.jsx)("button",{onClick:()=>e.handler("last"),type:"button",className:"h-7 py-0 px-2 bg-slate-300 appearance-none border-none rounded text-inherit tracking-widest transition-colors duration-300 ease-in-out cursor-pointer hover:bg-slate-200",children:"end"})]});t.Z=s},8323:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(8598),s=r(4376),a=r(2148);let l=e=>(0,n.jsxs)("li",{className:" px-2 py-2 bg-white border-2 border-solid border-slate-500 rounded shadow-normal cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 dark:bg-zinc-800 dark:shadow-whiteNormal ",onClick:e.handler,children:[(0,n.jsx)("h1",{className:"m-0 text-xl",children:e.post.title}),(0,n.jsx)("p",{className:"mt-0 mb-1 text-xs tracking-widest",children:e.post.date}),(0,n.jsx)("p",{className:"my-0 text-slate-400",children:e.post.summary}),(0,n.jsx)("ul",{className:"flex flex-row gap-1 m-0 p-0 mt-2",children:e.post.tags.map((e,t)=>(0,n.jsx)(a.Z,{tag:e},t))})]}),o=e=>{let t=(0,s.useRouter)(),r=async()=>{t.push("/blog/post/".concat(e.post.id))};return(0,n.jsx)(l,{post:e.post,handler:r})};var i=o},7475:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(8598),s=r(2684),a=r(2691),l=r.n(a),o=r(3346),i=r(2148);let c=e=>{let t=(0,o.v9)(e=>e.user.user),r="/hogwarts/post?p=".concat(e.id);return(0,n.jsx)("header",{className:"wrapper",children:e.title?(0,n.jsx)(s.Fragment,{children:(0,n.jsxs)("div",{className:"my-8 p-16 bg-white border-4 border-blue-500 rounded font-oswald font-bold shadow-normal dark:bg-zinc-800 dark:shadow-whiteNormal ",children:[(0,n.jsx)("h1",{className:"mt-0 mb-4 text-7xl text-blue-500 font-normal",children:e.title}),(0,n.jsx)("span",{className:"block mb-12 text-base text-blue-500",children:e.date}),t&&(0,n.jsx)(l(),{href:r,children:"수정하기"}),(0,n.jsx)("ul",{className:"flex gap-2 m-0 p-0",children:e.tags.map((e,t)=>(0,n.jsx)(i.Z,{tag:e},t))})]})}):(0,n.jsx)(s.Fragment,{children:(0,n.jsxs)("div",{className:"my-8 p-16 bg-white border-4 border-blue-500 rounded font-blackSans shadow-normal dark:bg-zinc-800 dark:shadow-whiteNormal ",children:[(0,n.jsx)("h1",{className:"m-0 text-7xl text-blue-500 font-normal",children:"블로그"}),(0,n.jsx)("h2",{className:"m-0 text-4xl text-blue-400 text-right font-normal",children:"무엇이든지 적힐 수 있고"}),(0,n.jsx)("h2",{className:"m-0 text-4xl text-blue-400 text-right font-normal",children:"무엇이든지 안 적힐 수 있다"})]})})})};var d=r(8665);let x=e=>{let{children:t,post:r}=e;return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)(c,{id:null==r?void 0:r.id,title:null==r?void 0:r.title,date:null==r?void 0:r.date,tags:null==r?void 0:r.tags}),(0,n.jsx)(d.Z,{children:t})]})},u=e=>{let{children:t,post:r}=e;return(0,n.jsx)(x,{post:r,children:t})};var h=u},8665:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(8598),s=r(2684),a=r(3346);let l=()=>(0,n.jsx)("footer",{className:"py-10 bg-slate-800 dark:bg-slate-100",children:(0,n.jsxs)("div",{className:"wrapper text-slate-100 dark:text-slate-800",children:[(0,n.jsx)("h1",{className:"mb-2 text-lg text-inherit font-bold italic",children:"킹왕짱바다"}),(0,n.jsxs)("div",{className:"flex flex-row text-inherit",children:[(0,n.jsxs)("div",{className:"flex flex-col w-16",children:[(0,n.jsxs)("span",{className:"flex justify-between",children:[(0,n.jsx)("span",{children:"이"}),(0,n.jsx)("span",{children:"름"})]}),(0,n.jsxs)("span",{className:"flex justify-between",children:[(0,n.jsx)("span",{children:"이"}),(0,n.jsx)("span",{children:"메"}),(0,n.jsx)("span",{children:"일"})]})]}),(0,n.jsxs)("div",{className:"flex flex-col mx-1",children:[(0,n.jsx)("span",{children:":"}),(0,n.jsx)("span",{children:":"})]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{children:"장현광"}),(0,n.jsx)("span",{children:"wkdgusrhkd@gmail.com"})]})]}),(0,n.jsx)("h2",{className:"mt-2 text-base text-inherit",children:"\xa9\xa0Created by King-Bada, 2023."})]})});var o=r(2691),i=r.n(o),c=r(5602);let d=()=>{let{theme:e,setTheme:t}=(0,c.F)();return(0,n.jsxs)("label",{className:"inline-block relative w-20 h-9 my-0 mx-[10px]",children:[(0,n.jsx)("input",{type:"checkbox",className:" hidden peer ",checked:"dark"===e,readOnly:!0}),(0,n.jsx)("span",{className:" absolute top-0 left-0 right-0 bottom-0 bg-slate-100 rounded-full duration-300 cursor-pointer before:absolute before:content-[''] before:w-6 before:h-6 before:left-2 before:top-1/2 before:translate-y-[-50%] before:bg-slate-800 before:duration-300 before:rounded-full peer-checked:bg-slate-800 peer-checked:before:bg-slate-100 peer-checked:before:left-12 ",onClick:function(){t("dark"===e?"light":"dark")}})]})},x=e=>{let{menus:t}=e,r=(0,s.useRef)();return(0,s.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.intersectionRatio<1?(t.target.classList.add("shadow-normal"),t.target.classList.remove("wrapper")):(t.target.classList.add("wrapper"),t.target.classList.remove("shadow-normal"))},{threshold:[1],rootMargin:"0px 2000px"});e.observe(r.current)},[r]),(0,n.jsxs)("nav",{ref:r,className:" wrapper flex justify-between items-center sticky top-[-1px] z-50 w-full mx-auto py-4 px-6 bg-blue-500 text-white transition-all duration-700 east-in-out dark:text-slate-800 ",children:[(0,n.jsx)(i(),{href:"/",className:"text-inherit no-underline hover:text-orange-400",children:"바다"}),(0,n.jsx)("ul",{children:t.map(e=>(0,n.jsx)("li",{className:"inline-block px-4",children:(0,n.jsx)(i(),{href:e.path,className:" text-inherit no-underline hover:text-orange-400 ",children:e.name})},e.id))}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(d,{}),(0,n.jsx)(i(),{href:"/info",className:"text-inherit no-underline py-2 px-6 bg-orange-400 hover:bg-orange-400/80 rounded-full",children:"Contact"})]})]})},u=e=>{let{children:t,menus:r}=e,{user:o}=(0,a.v9)(e=>e.user);return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)(x,{menus:r}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)("main",{className:"py-8",children:t})}),(0,n.jsx)(l,{})]})};var h=r(9512),p=r(4621);let m=e=>{let{children:t}=e,{menus:r}=(0,a.v9)(e=>e.menu),l=(0,a.I0)();return(0,s.useEffect)(()=>{l((0,h.b4)(p.Dt))},[r]),(0,n.jsx)(u,{menus:r,children:t})};var b=m},3295:function(e,t,r){"use strict";var n=r(8598),s=r(4376),a=r(1171);let l=e=>{let t=(0,s.useRouter)();return(0,n.jsx)(a.Z,{currentPage:e.currentPage,totalPages:e.totalPages,maxVisiblePages:e.maxVisiblePages,handler:function(r){if(("last"!==r&&"next"!==r||e.totalPages!==e.currentPage)&&("first"!==r&&"prev"!==r||1!==e.currentPage))switch(r){case"first":t.push("/blog/1");break;case"last":t.push("/blog/".concat(e.totalPages));break;case"prev":t.push("/blog/".concat(e.currentPage-1));break;case"next":t.push("/blog/".concat(e.currentPage+1));break;default:t.push("/blog/".concat(r))}}})};t.Z=l},1268:function(e,t,r){"use strict";r.r(t);var n=r(8598),s=r(1887),a=r.n(s),l=r(4376),o=r(2684),i=r(3346),c=r(8323),d=r(7475),x=r(3295),u=r(4621);let h=e=>{let t=(0,l.useRouter)(),{posts:r}=(0,i.v9)(e=>e.post);return(0,o.useEffect)(()=>{t.push("/blog/1")},[e]),(0,n.jsxs)(o.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"킹왕짱바다 - 블로그"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{name:"description",content:"블로그. 공부 내용, 일상을 자유롭게 기록."}),(0,n.jsx)("meta",{name:"keyword",content:"장현광, 킹왕짱바다, 웹, 개발, 개발자, 개발자 블로그, 일상, 잡담, 공부, 취미, 기록"}),(0,n.jsx)("meta",{name:"robots",content:"index, follow"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:"킹왕짱바다 - 블로그"}),(0,n.jsx)("meta",{property:"og:description",content:"블로그. 자유롭고 잡다한 기록들."}),(0,n.jsx)("meta",{property:"og:image",content:u.qT}),(0,n.jsx)("meta",{property:"og:image:width",content:"630"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:url",content:"/blog"}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{property:"twitter:title",content:"킹왕짱바다 - 블로그"}),(0,n.jsx)("meta",{property:"twitter:description",content:"블로그. 자유롭고 잡다한 기록들."}),(0,n.jsx)("meta",{property:"twitter:image",content:u.qT}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("div",{className:"mb-4 text-3xl font-bold",children:"새 글들"}),(0,n.jsx)("ul",{className:"flex flex-col gap-5 m-0 mb-8 p-0 list-none",children:r.map(e=>(0,n.jsx)(c.Z,{post:e},e.id))}),(0,n.jsx)(x.Z,{totalPages:e.totalPages,maxVisiblePages:5,currentPage:e.currentPage})]})]})};t.default=h}},function(e){e.O(0,[453,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);