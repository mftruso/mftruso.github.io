(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{342:function(t,e,r){"use strict";r.r(e);var n={props:{article:Object}},c=r(78),l=r(96),o=r.n(l),v=r(321),d=r(341),f=r(324),h=r(318),m=r(223),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("NuxtLink",{attrs:{to:"projects/"+t.article.slug}},[r("v-img",{staticClass:"align-end",attrs:{src:t.article.img,alt:t.article.img,height:"200px"}}),t._v(" "),r("v-card-title",{staticClass:"text--primary"},[t._v("\n        "+t._s(t.article.title)+"\n      ")])],1),t._v(" "),r("v-card-text",[r("p",[t._v(t._s(t.article.description))])]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"primary",to:"projects/"+t.article.slug,text:""}},[t._v("\n        Details\n      ")]),t._v(" "),t.article.link?r("v-btn",{attrs:{color:"primary",href:t.article.link,target:"_blank",text:""}},[t._v("\n        View Project "),r("v-icon",{attrs:{small:""}},[t._v("\n          mdi-open-in-new\n        ")])],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:v.a,VCard:d.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VIcon:h.a,VImg:m.a})},351:function(t,e,r){var content=r(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("5ee2ef52",content,!0,{sourceMap:!1})},352:function(t,e,r){var n=r(23)(!1);n.push([t.i,".v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;line-height:normal;position:relative;text-align:center;vertical-align:middle;overflow:hidden}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar .v-responsive__content,.v-avatar img,.v-avatar svg{border-radius:inherit;display:inline-flex;height:inherit;width:inherit}",""]),t.exports=n},365:function(t,e,r){"use strict";r.r(e);var n=r(16),c=(r(69),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("projects",n.slug).only(["title","description","img","alt","slug","author","link"]).sortBy("createdAt","desc").fetch();case 3:return c=e.sent,e.abrupt("return",{articles:c});case 5:case"end":return e.stop()}}),e)})))()}}),l=r(78),o=r(96),v=r.n(o),d=(r(13),r(8),r(12),r(19),r(11),r(20),r(2)),f=(r(35),r(351),r(81)),h=r(119),m=r(201),y=r(1),_=r(25);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=Object(_.a)(f.a,h.a,m.a).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return w({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return w({height:Object(y.d)(this.size),minWidth:Object(y.d)(this.size),width:Object(y.d)(this.size)},this.measurableStyles)}},render:function(t){var data={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,data),this.$slots.default)}}),x=r(341),C=r(324),V=r(362),k=r(223),P=r(363),S=r(320),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("article",[r("section",[r("v-card",{staticClass:"text-center"},[r("v-card-title"),t._v(" "),r("v-avatar",{attrs:{size:"162"}},[r("v-img",{attrs:{src:"/images/miketruso.jpg","lazy-src":"/images/miketruso.jpg",alt:"Mike Truso"}})],1),t._v(" "),r("v-card-text",[r("p",{staticClass:"text-h5"},[t._v("\n              Howdy! I'm a Software Engineer based in St. Paul, MN.\n              I love crafting software using Java, Groovy and JavaScript tools.\n            ")])])],1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("section",{staticClass:"my-5"},[r("h2",{staticClass:"headline"},[t._v("\n          Projects\n        ")]),t._v(" "),r("p",{staticClass:"text-h6"},[t._v("\n          Here are a few things I've been working on in my spare time.\n        ")]),t._v(" "),r("v-row",t._l(t.articles,(function(article){return r("v-col",{key:article.slug,attrs:{cols:"12",md:"4"}},[r("ArticleCard",{attrs:{article:article}})],1)})),1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{ArticleCard:r(342).default}),v()(component,{VAvatar:O,VCard:x.a,VCardText:C.b,VCardTitle:C.c,VCol:V.a,VImg:k.a,VRow:P.a,VSpacer:S.a})}}]);