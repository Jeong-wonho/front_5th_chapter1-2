var k=Object.defineProperty;var B=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var E=(e,t,n)=>B(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const F=()=>{const e=new Set;return{subscribe:r=>e.add(r),notify:()=>e.forEach(r=>r())}},$=(e,t)=>{const{subscribe:n,notify:r}=F();let o={...e};const a=u=>{o={...o,...u},r()},l=()=>({...o}),i=Object.fromEntries(Object.entries(t).map(([u,f])=>[u,(...S)=>a(f(l(),...S))]));return{getState:l,setState:a,subscribe:n,actions:i}},q=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:a=>t.setItem(e,JSON.stringify(a)),reset:()=>t.removeItem(e)});function s(e,t,...n){return{type:e,props:t,children:n.flat(1/0).filter(r=>r===0||!!r)}}const m=new Map;function G(e){const t=e.target;m.has(t)&&m.get(t).has(e.type)&&m.get(t).get(e.type).forEach(r=>r(e))}function W(){const e={};for(const[,t]of m)for(const n of t.keys())e[n]=!0;return Object.keys(e)}function z(e){W().forEach(n=>{e.addEventListener(n,G)})}function j(e,t,n){m.has(e)||m.set(e,new Map);const r=m.get(e);r.has(t)||r.set(t,[]),r.get(t).push(n)}function I(e,t,n){if(!m.has(e))return;const r=m.get(e);if(!r.has(t))return;const o=r.get(t),a=o.indexOf(n);a!==-1&&(o.splice(a,1),o.length===0&&(r.delete(t),r.size===0&&m.delete(e)))}function g(e){if(typeof e=="boolean"||typeof e>"u"||e===null)return document.createTextNode("");if(typeof e=="string"||typeof e=="number")return document.createTextNode(e);if(Array.isArray(e)){const n=document.createDocumentFragment();return n.append(...e.map(g)),n}typeof e.type=="function"&&document.createElement(e.type);const t=document.createElement(e.type);if(e.props&&J(t,e.props),e.children){const n=g(e.children);n&&t.appendChild(n)}return t}function J(e,t){t&&Object.entries(t).forEach(([n,r])=>{if(!(r===!1||r===null||r===void 0))if(n.startsWith("on")&&typeof r=="function"){const o=n.toLowerCase().substring(2);j(e,o,r)}else n==="className"?e.setAttribute("class",r):e.setAttribute(n,r)})}function y(e){if(typeof e=="boolean"||typeof e>"u"||e===null)return"";if(typeof e=="string"||typeof e=="number")return String(e);let t={},n={};if(typeof e.type=="function"){const r={children:e.children,...e.props??{}};return n=e.type(r),y(n)}return typeof e=="object"&&e.children&&(t.type=e.type,t.props=e.props,t.children=e.children.map(y)),Array.isArray(e.children)?t.children=e.children.map(y).filter(Boolean):t.children=[],t}function M(e,t,n,r=0){if(!t&&n)return e.removeChild(e.childNodes[r]);if(t&&!n)return e.appendChild(g(t));if(typeof t=="string"||typeof t=="number"){n!==t&&(e.childNodes[r].nodeValue=t);return}if(n.type!==t.type)return e.replaceChild(g(t),e.childNodes[r]);K(e.childNodes[r],t.props||{},n.props||{});const o=(t==null?void 0:t.children)||[],a=(n==null?void 0:n.children)||[],l=Array.isArray(o)?o:[o].filter(Boolean),i=Array.isArray(a)?a:[a].filter(Boolean),u=Math.max(o.length,a.length);for(let f=0;f<u;f++)M(e.childNodes[r],l[f],i[f],f)}function K(e,t,n){Object.keys(n).forEach(r=>{if(!(r in t))if(r.startsWith("on")){const o=r.toLowerCase().substring(2);I(e,o,n[r])}else r==="className"?e.removeAttribute("class"):r==="style"?e.removeAttribute("style"):e.removeAttribute(r)}),Object.entries(t).forEach(([r,o])=>{const a=n[r];if(o!==a)if(r.startsWith("on")){const l=r.toLowerCase().substring(2);a&&I(e,l,a),o&&j(e,l,o)}else r==="className"?o?e.setAttribute("class",o):e.removeAttribute("class"):o!=null&&o!==!1?e.setAttribute(r,o):e.removeAttribute(r)})}const N=new WeakMap;function R(e,t){if(!t||!(t instanceof HTMLElement))throw new Error("올바른 컨테이너 요소가 필요합니다.");const n=y(e),r=N.get(t);if(r)M(t,n,r),N.set(t,n);else{const o=g(n);t.innerHTML="",t.appendChild(o),N.set(t,n)}z(t)}const Y=1e3,C=Y*60,O=C*60,Q=O*24,V=e=>{const t=Date.now()-e;return t<C?"방금 전":t<O?`${Math.floor(t/C)}분 전`:t<Q?`${Math.floor(t/O)}시간 전`:new Date(e).toLocaleString()},h=q("user"),X=1e3,p=X*60,Z=p*60,c=$({currentUser:h.get(),loggedIn:!!h.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*p,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*p,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*p,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*p,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*Z,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return h.reset(),{...e,currentUser:null,loggedIn:!1}}}),_=({id:e,author:t,time:n,content:r,likeUsers:o,activationLike:a=!1})=>{const{loggedIn:l,currentUser:i,posts:u}=c.getState(),f=u.find(d=>d.id===e).likeUsers.includes(i==null?void 0:i.username),S=()=>{if(!l){alert("로그인 후 이용해주세요");return}const d=u.find(A=>A.id===e);f?d.likeUsers=d.likeUsers.filter(A=>A!==(i==null?void 0:i.username)):d.likeUsers.push(i==null?void 0:i.username),c.setState({posts:u})};return s("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},s("div",{className:"flex items-center mb-2"},s("div",null,s("div",{className:"font-bold"},t),s("div",{className:"text-gray-500 text-sm"},V(n)))),s("p",null,r),s("div",{className:"mt-2 flex justify-between text-gray-500"},s("span",{className:`like-button cursor-pointer${f?" text-blue-500":""}`,onClick:S},"좋아요 ",o.length),s("span",null,"댓글"),s("span",null,"공유")))},ee=()=>{const{currentUser:e,posts:t}=c.getState();return s("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},s("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),s("button",{id:"post-submit",className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded",onClick:()=>{const r=document.getElementById("post-content").value;if(!r){alert("내용을 입력해주세요");return}const a=[{id:t.length+1,author:e.username,time:Date.now(),content:r,likeUsers:[]},...t];c.setState({posts:a}),document.getElementById("post-content").value=""}},"게시"))},U=()=>s("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},s("h1",{className:"text-2xl font-bold"},"항해플러스")),T=()=>s("footer",{className:"bg-gray-200 p-4 text-center"},s("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),b={value:null,get(){return this.value},set(e){this.value=e}},v=e=>b.get().path===e?"text-blue-600 font-bold":"text-gray-600";function L({onClick:e,children:t,...n}){return s("a",{onClick:o=>{o.preventDefault(),e==null||e(),b.get().push(o.target.href.replace(window.location.origin,""))},...n},t)}const H=()=>{const{loggedIn:e}=c.getState(),{logout:t}=c.actions;return s("nav",{className:"bg-white shadow-md p-2 sticky top-14"},s("ul",{className:"flex justify-around"},s("li",null,s(L,{href:"/",className:v("/")},"홈")),!e&&s("li",null,s(L,{href:"/login",className:v("/login")},"로그인")),e&&s("li",null,s(L,{href:"/profile",className:v("/profile")},"프로필")),e&&s("li",null,s("a",{href:"#",id:"logout",className:"text-gray-600",onClick:n=>{n.preventDefault(),t()}},"로그아웃"))))},oe=()=>{const{posts:e}=c.getState(),{loggedIn:t}=c.getState();return s("div",{className:"bg-gray-100 min-h-screen flex justify-center"},s("div",{className:"max-w-md w-full"},s(U,null),s(H,null),s("main",{className:"p-4"},t&&s(ee,null),s("div",{id:"posts-container",className:"space-y-4"},[...e].sort((n,r)=>r.time-n.time).map(n=>s(_,{...n,activationLike:!1})))),s(T,null)))};function te(e){const t={username:e,email:"",bio:""};c.setState({currentUser:t,loggedIn:!0}),h.set(t)}const ae=()=>{const e=t=>{t.preventDefault();const n=document.getElementById("username").value;te(n)};return s("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},s("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},s("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),s("form",{id:"login-form",onSubmit:e},s("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),s("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),s("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded",onClick:e},"로그인")),s("div",{className:"mt-4 text-center"},s("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),s("hr",{className:"my-6"}),s("div",{className:"text-center"},s("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기"))))},se=()=>s("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},s("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},s("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),s("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),s("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),s("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),s("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function ne(e){const t={...c.getState().currentUser,...e};c.setState({currentUser:t}),h.set(t),alert("프로필이 업데이트되었습니다.")}const le=()=>{const{loggedIn:e,currentUser:t}=c.getState(),{username:n="",email:r="",bio:o=""}=t??{};return s("div",{className:"bg-gray-100 min-h-screen flex justify-center"},s("div",{className:"max-w-md w-full"},s(U,null),s(H,{loggedIn:e}),s("main",{className:"p-4"},s("div",{className:"bg-white p-8 rounded-lg shadow-md"},s("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),s("form",{id:"profile-form",onSubmit:l=>{l.preventDefault();const i=new FormData(l.target),u=Object.fromEntries(i);ne(u)}},s("div",{className:"mb-4"},s("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),s("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:n,required:!0})),s("div",{className:"mb-4"},s("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),s("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:r,required:!0})),s("div",{className:"mb-6"},s("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),s("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},o)),s("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),s(T,null)))},x=class x extends Error{constructor(){super(x.MESSAGE)}};E(x,"MESSAGE","ForbiddenError");let P=x;const w=class w extends Error{constructor(){super(w.MESSAGE)}};E(w,"MESSAGE","UnauthorizedError");let D=w;function ie(){const e=b.get().getTarget()??se,t=document.querySelector("#root");try{R(s(e,null),t)}catch(n){if(n instanceof P){b.get().push("/");return}if(n instanceof D){b.get().push("/login");return}console.error(n)}}export{P as F,oe as H,ae as L,le as P,D as U,ie as a,s as b,F as c,c as g,b as r};
