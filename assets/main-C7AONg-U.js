import{c as h,r as i,a as n,g as r,H as b,U as w,b as c,P,F as p,L as f}from"./render-CxHLvrfA.js";const m=e=>{const{subscribe:u,notify:s}=h(),t="/";console.log("basePath",t);const o=()=>window.location.pathname.replace(t,"/");console.log("getPath",o());const a=()=>e[o()];console.log("getTarget",a());const d=l=>{const g=t.endsWith("/")?t.slice(0,-1):t;console.log("push",`${g}${l}`),window.history.pushState(null,null,`${g}${l}`),s()};return window.addEventListener("popstate",()=>s()),{get path(){return o()},push:d,subscribe:u,getTarget:a}};i.set(m({"/":b,"/login":()=>{const{loggedIn:e}=r.getState();if(e)throw new p;return c(f,null)},"/profile":()=>{const{loggedIn:e}=r.getState();if(!e)throw new w;return c(P,null)}}));function S(){i.get().subscribe(n),r.subscribe(n),n()}S();
