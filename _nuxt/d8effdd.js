(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(t,e,r){var content=r(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("7388ab72",content,!0,{sourceMap:!1})},218:function(t,e,r){"use strict";var n={data:function(){return{clipped:!1,title:"Mike Truso",fixed:!0}}},o=r(74),c=r(101),l=r.n(c),v=r(317),d=r(323),f=r(322),_=r(324),h=r(318),m=r(319),x=r(320),k=r(321),V=r(214),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:t.fixed,app:""}},[r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",target:"_blank",href:"https://github.com/mftruso"}},[r("v-icon",[t._v("mdi-github")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",target:"_blank",href:"https://linkedin.com/in/michaeltruso"}},[r("v-icon",[t._v("mdi-linkedin")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",target:"_blank",href:"https://twitter.com/miketruso"}},[r("v-icon",[t._v("mdi-twitter")])],1)],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear())+" Mike Truso")])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:v.a,VAppBar:d.a,VBtn:f.a,VContainer:_.a,VFooter:h.a,VIcon:m.a,VMain:x.a,VSpacer:k.a,VToolbarTitle:V.a})},229:function(t,e,r){r(230),t.exports=r(231)},255:function(t,e,r){"use strict";r(190)},256:function(t,e,r){(e=r(16)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},60:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(255),r(74)),c=r(101),l=r.n(c),v=r(317),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[229,4,1,5]]]);