(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{339:function(t,e,r){"use strict";r.r(e);var n={props:{article:Object}},c=r(67),l=r(91),o=r.n(l),v=r(318),d=r(338),_=r(322),m=r(315),f=r(208),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("NuxtLink",{attrs:{to:"projects/"+t.article.slug}},[r("v-img",{staticClass:"align-end",attrs:{src:t.article.img,alt:t.article.img,height:"200px"}}),t._v(" "),r("v-card-title",{staticClass:"text--primary"},[t._v("\n        "+t._s(t.article.title)+"\n      ")])],1),t._v(" "),r("v-card-text",[r("p",[t._v(t._s(t.article.description))])]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"primary",to:"projects/"+t.article.slug,text:""}},[t._v("\n        Details\n      ")]),t._v(" "),t.article.link?r("v-btn",{attrs:{color:"primary",href:t.article.link,target:"_blank",text:""}},[t._v("\n        View Project "),r("v-icon",{attrs:{small:""}},[t._v("\n          mdi-open-in-new\n        ")])],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:v.a,VCard:d.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VIcon:m.a,VImg:f.a})},362:function(t,e,r){"use strict";r.r(e);r(57);var n=r(10),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("projects",n.slug).only(["title","description","img","alt","slug","author","link"]).sortBy("createdAt","desc").fetch();case 3:return c=e.sent,e.abrupt("return",{articles:c});case 5:case"end":return e.stop()}}),e)})))()}},l=r(67),o=r(91),v=r.n(o),d=r(358),_=r(359),m=r(317),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("article",[r("section",[r("h2",{staticClass:"headline"},[t._v("\n          About\n        ")]),t._v(" "),r("p",[t._v("Howdy! I'm a Software Developer based in St. Paul, MN.")])]),t._v(" "),r("v-spacer"),t._v(" "),r("section",[r("h2",{staticClass:"headline"},[t._v("\n          Projects\n        ")]),t._v(" "),r("p",[t._v("Here are a few things I've been working on in my spare time.")]),t._v(" "),r("v-row",t._l(t.articles,(function(article){return r("v-col",{key:article.slug,attrs:{cols:"12",md:"4"}},[r("ArticleCard",{attrs:{article:article}})],1)})),1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{ArticleCard:r(339).default}),v()(component,{VCol:d.a,VRow:_.a,VSpacer:m.a})}}]);