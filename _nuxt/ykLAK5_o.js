const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D3KKt-hX.js","./B1ciqwwT.js","./entry.D68hq6dl.css","./We0SHAjj.js","./C8IBBZbw.js","./GW34aOAv.js"])))=>i.map(i=>d[i]);
import{q as m,w as c,e as v,s as l,j as d,a as g,u as y}from"./We0SHAjj.js";import{y as h,z as _,A as w,m as C,_ as x,q as P,B as $,C as N,s as E,x as p}from"./B1ciqwwT.js";import{h as f,u as T}from"./C8IBBZbw.js";import{_ as j}from"./C10aX1Id.js";const S="$s";function b(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=S+n,r=h(),s=_(r.payload.state,a);if(s.value===void 0&&o){const i=o();if(w(i))return r.payload.state[a]=i,i;s.value=i}return s}const A=async t=>{const{content:e}=C().public;typeof(t==null?void 0:t.params)!="function"&&(t=m(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${v(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(l())return(await x(()=>import("./D3KKt-hX.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(s=>s.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:d(n),previewToken:T().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},D=P({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=$(t),n=N(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&b("dd-navigation").value){const{navigation:a}=g();return{navigation:a}}const{data:o}=await y(`content-navigation-${f(n.value)}`,()=>A(n.value));return{navigation:o}},render(t){const e=E(),{navigation:n}=t,o=s=>p(j,{to:s._path},()=>s.title),a=(s,i)=>p("ul",i?{"data-level":i}:null,s.map(u=>u.children?p("li",null,[o(u),a(u.children,i+1)]):p("li",null,o(u)))),r=s=>a(s,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),Q=D;export{Q as default};
