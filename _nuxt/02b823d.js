(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{202:function(t,e,r){var content=r(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("7388ab72",content,!0,{sourceMap:!1})},231:function(t,e,r){"use strict";var n={data:function(){return{clipped:!1,title:"Mike Truso",fixed:!0}}},o=r(81),l=r(101),c=r.n(l),v=r(336),f=r(342),d=r(341),_=r(343),h=r(337),m=r(338),x=r(339),k=r(340),w=r(227),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:t.fixed,app:""}},[r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",target:"_blank",href:"https://github.com/mftruso"}},[r("v-icon",[t._v("mdi-github")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",target:"_blank",href:"https://linkedin.com/in/michaeltruso"}},[r("v-icon",[t._v("mdi-linkedin")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",target:"_blank",href:"https://twitter.com/miketruso"}},[r("v-icon",[t._v("mdi-twitter")])],1)],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear())+" Mike Truso")]),t._v(" "),r("span",{staticClass:"pl-2"},[t._v("This site is built with "),r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("NuxtJS")]),t._v(" and open sourced on "),r("a",{attrs:{href:"https://github.com/mftruso/mftruso.github.io",target:"_blank"}},[t._v("GitHub")]),t._v(".")])])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:v.a,VAppBar:f.a,VBtn:d.a,VContainer:_.a,VFooter:h.a,VIcon:m.a,VMain:x.a,VSpacer:k.a,VToolbarTitle:w.a})},241:function(t,e,r){r(242),t.exports=r(243)},273:function(t,e,r){"use strict";r(202)},274:function(t,e,r){var n=r(24)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},70:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(273),r(81)),l=r(101),c=r.n(l),v=r(336),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:v.a})}},[[241,7,3,8]]]);