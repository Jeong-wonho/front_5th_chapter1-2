var k=Object.defineProperty;var F=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>F(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const M=()=>{const e=new Set;return{subscribe:r=>e.add(r),notify:()=>e.forEach(r=>r())}},q=(e,t)=>{const{subscribe:n,notify:r}=M();let o={...e};const l=u=>{o={...o,...u},r()},a=()=>({...o}),i=Object.fromEntries(Object.entries(t).map(([u,f])=>[u,(...A)=>l(f(a(),...A))]));return{getState:a,setState:l,subscribe:n,actions:i}},G=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:l=>t.setItem(e,JSON.stringify(l)),reset:()=>t.removeItem(e)}),W=e=>{const{subscribe:t,notify:n}=M(),r="/front_5th_chapter1-2/",o=a=>a.replace(new RegExp(`^${r}`),"/"),l=a=>r+a.replace(/^\//,"");return{get path(){return o(window.location.pathname)},getTarget:()=>e[o(window.location.pathname)],push:a=>{window.history.pushState(null,null,l(a)),n()},subscribe:t}};function s(e,t,...n){return{type:e,props:t,children:n.flat(1/0).filter(r=>r===0||!!r)}}const m=new Map;function z(e){const t=e.target;m.has(t)&&m.get(t).has(e.type)&&m.get(t).get(e.type).forEach(r=>r(e))}function R(){const e={};for(const[,t]of m)for(const n of t.keys())e[n]=!0;return Object.keys(e)}function J(e){R().forEach(n=>{e.addEventListener(n,z)})}function U(e,t,n){m.has(e)||m.set(e,new Map);const r=m.get(e);r.has(t)||r.set(t,[]),r.get(t).push(n)}function j(e,t,n){if(!m.has(e))return;const r=m.get(e);if(!r.has(t))return;const o=r.get(t),l=o.indexOf(n);l!==-1&&(o.splice(l,1),o.length===0&&(r.delete(t),r.size===0&&m.delete(e)))}function b(e){if(typeof e=="boolean"||typeof e>"u"||e===null)return document.createTextNode("");if(typeof e=="string"||typeof e=="number")return document.createTextNode(e);if(Array.isArray(e)){const n=document.createDocumentFragment();return n.append(...e.map(b)),n}typeof e.type=="function"&&document.createElement(e.type);const t=document.createElement(e.type);if(e.props&&K(t,e.props),e.children){const n=b(e.children);n&&t.appendChild(n)}return t}function K(e,t){t&&Object.entries(t).forEach(([n,r])=>{if(!(r===!1||r===null||r===void 0))if(n.startsWith("on")&&typeof r=="function"){const o=n.toLowerCase().substring(2);U(e,o,r)}else n==="className"?e.setAttribute("class",r):e.setAttribute(n,r)})}function y(e){if(typeof e=="boolean"||typeof e>"u"||e===null)return"";if(typeof e=="string"||typeof e=="number")return String(e);let t={},n={};if(typeof e.type=="function"){const r={children:e.children,...e.props??{}};return n=e.type(r),y(n)}return typeof e=="object"&&e.children&&(t.type=e.type,t.props=e.props,t.children=e.children.map(y)),Array.isArray(e.children)?t.children=e.children.map(y).filter(Boolean):t.children=[],t}function T(e,t,n,r=0){if(!t&&n)return e.removeChild(e.childNodes[r]);if(t&&!n)return e.appendChild(b(t));if(typeof t=="string"||typeof t=="number"){n!==t&&(e.childNodes[r].nodeValue=t);return}if(n.type!==t.type)return e.replaceChild(b(t),e.childNodes[r]);V(e.childNodes[r],t.props||{},n.props||{});const o=(t==null?void 0:t.children)||[],l=(n==null?void 0:n.children)||[],a=Array.isArray(o)?o:[o].filter(Boolean),i=Array.isArray(l)?l:[l].filter(Boolean),u=Math.max(o.length,l.length);for(let f=0;f<u;f++)T(e.childNodes[r],a[f],i[f],f)}function V(e,t,n){Object.keys(n).forEach(r=>{if(console.log(r in t),!(r in t))if(r.startsWith("on")){const o=r.toLowerCase().substring(2);j(e,o,n[r])}else r==="className"?e.removeAttribute("class"):r==="style"?e.removeAttribute("style"):e.removeAttribute(r)}),Object.entries(t).forEach(([r,o])=>{const l=n[r];if(console.log("oldValue",l),o!==l)if(r.startsWith("on")){const a=r.toLowerCase().substring(2);l&&j(e,a,l),o&&U(e,a,o)}else r==="className"?o?e.setAttribute("class",o):e.removeAttribute("class"):o!=null&&o!==!1?e.setAttribute(r,o):e.removeAttribute(r)})}const L=new WeakMap;function Y(e,t){if(!t||!(t instanceof HTMLElement))throw new Error("올바른 컨테이너 요소가 필요합니다.");const n=y(e),r=L.get(t);if(r)T(t,n,r),L.set(t,n);else{const o=b(n);t.innerHTML="",t.appendChild(o),L.set(t,n)}J(t)}const Q=1e3,P=Q*60,D=P*60,X=D*24,Z=e=>{const t=Date.now()-e;return t<P?"방금 전":t<D?`${Math.floor(t/P)}분 전`:t<X?`${Math.floor(t/D)}시간 전`:new Date(e).toLocaleString()},g=G("user"),_=1e3,h=_*60,ee=h*60,c=q({currentUser:g.get(),loggedIn:!!g.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*h,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*h,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*h,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*h,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*ee,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return g.reset(),{...e,currentUser:null,loggedIn:!1}}}),te=({id:e,author:t,time:n,content:r,likeUsers:o,activationLike:l=!1})=>{const{loggedIn:a,currentUser:i,posts:u}=c.getState(),f=u.find(p=>p.id===e).likeUsers.includes(i==null?void 0:i.username),A=()=>{if(!a){alert("로그인 후 이용해주세요");return}const p=u.find(N=>N.id===e);f?p.likeUsers=p.likeUsers.filter(N=>N!==(i==null?void 0:i.username)):p.likeUsers.push(i==null?void 0:i.username),c.setState({posts:u})};return s("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},s("div",{className:"flex items-center mb-2"},s("div",null,s("div",{className:"font-bold"},t),s("div",{className:"text-gray-500 text-sm"},Z(n)))),s("p",null,r),s("div",{className:"mt-2 flex justify-between text-gray-500"},s("span",{className:`like-button cursor-pointer${f?" text-blue-500":""}`,onClick:A},"좋아요 ",o.length),s("span",null,"댓글"),s("span",null,"공유")))},se=()=>{const{currentUser:e,posts:t}=c.getState();return s("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},s("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),s("button",{id:"post-submit",className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded",onClick:()=>{const r=document.getElementById("post-content").value;if(!r){alert("내용을 입력해주세요");return}const l=[{id:t.length+1,author:e.username,time:Date.now(),content:r,likeUsers:[]},...t];c.setState({posts:l}),document.getElementById("post-content").value=""}},"게시"))},B=()=>s("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},s("h1",{className:"text-2xl font-bold"},"항해플러스")),$=()=>s("footer",{className:"bg-gray-200 p-4 text-center"},s("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),d={value:null,get(){return this.value},set(e){this.value=e}},I=e=>window.location.pathname===e?"text-blue-600 font-bold":"text-gray-600";function C({onClick:e,children:t,...n}){return s("a",{onClick:o=>{o.preventDefault(),e==null||e(),d.get().push(o.target.href.replace(window.location.origin,""))},...n},t)}const H=()=>{const{loggedIn:e}=c.getState(),{logout:t}=c.actions;return s("nav",{className:"bg-white shadow-md p-2 sticky top-14"},s("ul",{className:"flex justify-around"},s("li",null,s(C,{href:"/",className:I("/")},"홈")),!e&&s("li",null,s(C,{href:"/login",className:I("/login")},"로그인")),e&&s("li",null,s(C,{href:"/profile",className:I("/profile")},"프로필")),e&&s("li",null,s("a",{href:"#",id:"logout",className:"text-gray-600",onClick:n=>{n.preventDefault(),t()}},"로그아웃"))))},ne=()=>{const{posts:e}=c.getState(),{loggedIn:t}=c.getState();return s("div",{className:"bg-gray-100 min-h-screen flex justify-center"},s("div",{className:"max-w-md w-full"},s(B,null),s(H,null),s("main",{className:"p-4"},t&&s(se,null),s("div",{id:"posts-container",className:"space-y-4"},[...e].sort((n,r)=>r.time-n.time).map(n=>s(te,{...n,activationLike:!1})))),s($,null)))};function re(e){const t={username:e,email:"",bio:""};c.setState({currentUser:t,loggedIn:!0}),g.set(t)}const oe=()=>{const e=t=>{t.preventDefault();const n=document.getElementById("username").value;re(n)};return s("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},s("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},s("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),s("form",{id:"login-form",onSubmit:e},s("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),s("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),s("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded",onClick:e},"로그인")),s("div",{className:"mt-4 text-center"},s("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),s("hr",{className:"my-6"}),s("div",{className:"text-center"},s("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기"))))},le=()=>s("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},s("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},s("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),s("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),s("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),s("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),s("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function ae(e){const t={...c.getState().currentUser,...e};c.setState({currentUser:t}),g.set(t),alert("프로필이 업데이트되었습니다.")}const ie=()=>{const{loggedIn:e,currentUser:t}=c.getState(),{username:n="",email:r="",bio:o=""}=t??{};return s("div",{className:"bg-gray-100 min-h-screen flex justify-center"},s("div",{className:"max-w-md w-full"},s(B,null),s(H,{loggedIn:e}),s("main",{className:"p-4"},s("div",{className:"bg-white p-8 rounded-lg shadow-md"},s("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),s("form",{id:"profile-form",onSubmit:a=>{a.preventDefault();const i=new FormData(a.target),u=Object.fromEntries(i);ae(u)}},s("div",{className:"mb-4"},s("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),s("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:n,required:!0})),s("div",{className:"mb-4"},s("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),s("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:r,required:!0})),s("div",{className:"mb-6"},s("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),s("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},o)),s("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),s($,null)))},S=class S extends Error{constructor(){super(S.MESSAGE)}};v(S,"MESSAGE","ForbiddenError");let x=S;const E=class E extends Error{constructor(){super(E.MESSAGE)}};v(E,"MESSAGE","UnauthorizedError");let w=E;function O(){const e=d.get().getTarget()??le,t=document.querySelector("#root");try{Y(s(e,null),t)}catch(n){if(n instanceof x){d.get().push("/");return}if(n instanceof w){d.get().push("/login");return}console.error(n)}}d.set(W({"/":ne,"/login":()=>{const{loggedIn:e}=c.getState();if(e)throw new x;return s(oe,null)},"/profile":()=>{const{loggedIn:e}=c.getState();if(!e)throw new w;return s(ie,null)}}));function ce(){d.get().subscribe(O),c.subscribe(O),O()}ce();
