webpackJsonp([0],{0:function(t,e){},"8ast":function(t,e){},"94M/":function(t,e){},"9BdQ":function(t,e){},ADM5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={name:"navigation",data:function(){return{items:[]}},methods:{fetchLinks:function(){var t=this;this.$http.get("http://sandbox.komachi.pomzed.ch/wp/wp-json/pomzed/v1/navigation").then(function(e){t.items=e.body.data,console.log(e)},function(t){console.log(t)})}},created:function(){this.fetchLinks()}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navigation"},[s("ul",t._l(t.items,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:"/"+e.slug}},[t._v(t._s(e.name))])],1)}))])},staticRenderFns:[]};var i={name:"topbar",components:{Navigation:s("VU/8")(a,o,!1,function(t){s("9BdQ")},"data-v-020f2ecc",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topbar"},[e("div",{staticClass:"brand"},[e("router-link",{attrs:{to:"/"}},[this._v("New logo")])],1),this._v(" "),e("div",{staticClass:"nav"},[e("navigation")],1)])},staticRenderFns:[]};var r=s("VU/8")(i,c,!1,function(t){s("djEO")},null,null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader-container"},[e("div",{staticClass:"spinner"},[e("div",{staticClass:"cube1"}),this._v(" "),e("div",{staticClass:"cube2"})])])}]};var d=s("VU/8")({name:"loader"},l,!1,function(t){s("kVoH")},null,null).exports,u={name:"App",components:{Topbar:r,Loader:d}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("topbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var h=s("VU/8")(u,p,!1,function(t){s("i4mR")},null,null).exports,m=s("8+8L"),f=s("/ocq"),v={name:"posts-grid",components:{Loader:d},data:function(){return{load:!0,posts:[]}},methods:{fetchPosts:function(t){var e=this;this.$http.get("http://sandbox.komachi.pomzed.ch/wp/wp-json/wp/v2/posts?_embed").then(function(t){e.posts=t.body,e.load=!1,console.log("fetched posts",e.post)},function(t){console.log(t)})}},watch:{$route:function(t){this.load=!0,this.fetchPage(t.params.slug)}},created:function(){console.log("query",this.$route.params.slug),this.fetchPosts(this.$route.params.slug)}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"site-content"},[t.load?s("loader"):s("div",{staticClass:"container"},[s("div",{staticClass:"row posts-grid"},t._l(t.posts,function(e){return s("div",{key:e.id,staticClass:"col-12 col-md-6 col-lg-4"},[s("router-link",{attrs:{to:"/posts/"+e.slug}},[s("div",{staticClass:"card"},[s("h2",[t._v(t._s(e.title.rendered))])])])],1)}))])],1)},staticRenderFns:[]};var _={name:"Home",components:{PostsGrid:s("VU/8")(v,g,!1,function(t){s("mjFj")},null,null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"page-content"},[e("posts-grid")],1)])},staticRenderFns:[]},w=s("VU/8")(_,C,!1,null,null,null).exports,$={name:"menu-listing",data:function(){return{menu:[]}},props:["id"],methods:{fetchMenu:function(t){var e=this,s="http://sandbox.komachi.pomzed.ch/wp/wp-json/acf/v3/pages/"+t;this.$http.get(s).then(function(t){e.menu=t.body.acf,e.load=!1,console.log("fetched posts",e.post)},function(t){console.log(t)})}},created:function(){this.fetchMenu(this.id)}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu-listing"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6 col-lg-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"menu-card-content",domProps:{innerHTML:t._s(t.menu.monday_menu)}})])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6 col-lg-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"menu-card-content",domProps:{innerHTML:t._s(t.menu.tuesday_menu)}})])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6 col-lg-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"menu-card-content",domProps:{innerHTML:t._s(t.menu.wednesday_menu)}})])])])])},staticRenderFns:[]};var P={name:"Page",components:{MenuListing:s("VU/8")($,b,!1,function(t){s("ADM5")},null,null).exports,Loader:d},data:function(){return{load:!0,page:[]}},methods:{fetchPage:function(t){var e=this,s="http://sandbox.komachi.pomzed.ch/wp/wp-json/wp/v2/pages?slug="+t;this.$http.get(s).then(function(t){e.page=t.body[0],e.load=!1,document.title=e.page.title.rendered,console.log("fetched page",e.page)},function(t){console.log(t)})}},watch:{$route:function(t){this.load=!0,this.fetchPage(t.params.slug)}},created:function(){console.log("query",this.$route.params.slug),this.fetchPage(this.$route.params.slug)}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"site-content"},[t.load?s("loader"):t._e(),t._v(" "),"menus-de-la-semaine"===t.page.slug?s("div",{staticClass:"page"},[t.page.title?s("div",{staticClass:"page-content"},[s("h1",{staticClass:"page-title"},[t._v(t._s(t.page.title.rendered))]),t._v(" "),s("menu-listing",{attrs:{id:t.page.id}})],1):t._e()]):s("div",{staticClass:"page"},[t.page.title?s("div",{staticClass:"page-content"},[s("h1",{staticClass:"page-title"},[t._v(t._s(t.page.title.rendered))]),t._v(" "),s("div",{staticClass:"entry-content",domProps:{innerHTML:t._s(t.page.content.rendered)}})]):t._e()])],1)},staticRenderFns:[]};var k=s("VU/8")(P,y,!1,function(t){s("94M/")},null,null).exports,x={name:"Post",components:{Loader:d},data:function(){return{load:!0,post:[]}},methods:{fetchPost:function(t){var e=this,s="http://sandbox.komachi.pomzed.ch/wp/wp-json/wp/v2/posts?slug="+t;this.$http.get(s).then(function(t){e.post=t.body[0],e.load=!1,document.title=e.post.title.rendered,console.log("fetched post single",e.post)},function(t){console.log(t)})}},watch:{$route:function(t){this.load=!0,this.fetchPost(t.params.slug)}},created:function(){console.log("query",this.$route.params.slug),this.fetchPost(this.$route.params.slug)}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"site-content"},[e("transition",{attrs:{name:"fade"}},[this.load?e("loader"):e("div",{staticClass:"page"},[e("div",{staticClass:"page-content"},[e("h1",{staticClass:"page-title"},[this._v(this._s(this.post.title.rendered))])])])],1)],1)},staticRenderFns:[]};var E=s("VU/8")(x,j,!1,function(t){s("8ast")},null,null).exports;n.a.use(f.a);var L=new f.a({mode:"history",routes:[{path:"/",name:"Home",component:w},{path:"/:slug",name:"Page",component:k},{path:"/posts/:slug",name:"Post",component:E}]});n.a.use(m.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:L,components:{App:h},template:"<App/>"})},djEO:function(t,e){},i4mR:function(t,e){},kVoH:function(t,e){},mjFj:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e53338fdd37eb29deab2.js.map