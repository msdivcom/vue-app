webpackJsonp([0],{0:function(t,e){},"8Ip9":function(t,e){},"98Q/":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={name:"navigation",data:function(){return{items:[]}},methods:{fetchLinks:function(){var t=this;this.$http.get("https://sandbox.komachi.pomzed.ch/wp/wp-json/pomzed/v1/navigation").then(function(e){t.items=e.body.data,console.log(e)},function(t){console.log(t)})}},created:function(){this.fetchLinks()}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navigation"},[s("ul",t._l(t.items,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:"/"+e.slug}},[t._v(t._s(e.name))])],1)}))])},staticRenderFns:[]};var o={name:"topbar",components:{Navigation:s("VU/8")(a,i,!1,function(t){s("vXep")},"data-v-4eb5ac0a",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topbar"},[e("div",{staticClass:"brand"},[e("router-link",{attrs:{to:"/"}},[this._v("Logo")])],1),this._v(" "),e("div",{staticClass:"nav"},[e("navigation")],1)])},staticRenderFns:[]};var c=s("VU/8")(o,r,!1,function(t){s("8Ip9")},null,null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader-container"},[e("div",{staticClass:"spinner"},[e("div",{staticClass:"cube1"}),this._v(" "),e("div",{staticClass:"cube2"})])])}]};var u=s("VU/8")({name:"loader"},l,!1,function(t){s("bg4y")},null,null).exports,d=s("kQOR"),p={components:{VueperSlides:d.VueperSlides,VueperSlide:d.VueperSlide},data:function(){return{slides:[{title:"Slide 1",image:"https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},{title:"Slide 2",image:"https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}]}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slider"},[e("vueper-slides",{attrs:{fade:"","slide-content-outside-class":"max-widthed",touchable:!1,"slide-ratio":.3}},this._l(this.slides,function(t,s){return e("vueper-slide",{key:s,attrs:{title:t.title,content:t.content,image:t.image}})}))],1)},staticRenderFns:[]};var h={name:"App",components:{Topbar:c,Loader:u,Slider:s("VU/8")(p,m,!1,function(t){s("t8ly")},null,null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("topbar"),this._v(" "),e("slider"),this._v(" "),e("router-view"),this._v(" "),e("vue-progress-bar")],1)},staticRenderFns:[]};var v=s("VU/8")(h,g,!1,function(t){s("Tm2n")},null,null).exports,f=s("8+8L"),_=s("/ocq"),C={name:"posts-grid",components:{Loader:u},data:function(){return{load:!0,posts:[]}},methods:{fetchPosts:function(t){var e=this;this.$Progress.start();this.$http.get("https://sandbox.komachi.pomzed.ch/wp/wp-json/wp/v2/posts?_embed").then(function(t){e.posts=t.body,e.load=!1,e.$Progress.finish(),console.log("fetched posts",e.post)},function(t){console.log(t),e.$Progress.fail()})}},watch:{$route:function(t){this.load=!0,this.fetchPage(t.params.slug)}},created:function(){console.log("query",this.$route.params.slug),this.fetchPosts(this.$route.params.slug)}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"site-content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row posts-grid"},t._l(t.posts,function(e){return s("div",{key:e.id,staticClass:"col-12 col-md-6 col-lg-4"},[s("router-link",{attrs:{to:"/posts/"+e.slug}},[s("div",{staticClass:"card"},[s("h2",[t._v(t._s(e.title.rendered))])])])],1)}))])])},staticRenderFns:[]};var w={name:"Home",components:{PostsGrid:s("VU/8")(C,b,!1,function(t){s("l9cc")},null,null).exports}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"page-content"},[e("posts-grid")],1)])},staticRenderFns:[]},x=s("VU/8")(w,y,!1,null,null,null).exports,$={name:"menu-listing",data:function(){return{today:"",menus:[]}},props:["id"],methods:{fetchMenu:function(t){var e=this,s="https://sandbox.komachi.pomzed.ch/wp/wp-json/acf/v3/pages/"+t;this.$http.get(s).then(function(t){e.menus=t.body.acf.week_menus,e.load=!1,console.log("fetched posts",e.post)},function(t){console.log(t)})}},computed:{},created:function(){var t=new Date;this.today=t.getDay(),this.fetchMenu(this.id)}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu-listing"},[s("div",{staticClass:"row"},t._l(t.menus,function(e){return s("div",{key:e.menu_day.value,staticClass:"col-12 col-md-6 col-lg-4",class:{today:e.menu_day.value==t.today}},[s("div",{staticClass:"card",class:{}},[s("h2",[t._v(" "+t._s(e.menu_day.label)+" ")]),t._v(" "),s("div",{staticClass:"menu-content",domProps:{innerHTML:t._s(e.menu_content)}})])])}))])},staticRenderFns:[]};var j=s("VU/8")($,P,!1,function(t){s("98Q/")},null,null).exports,L={name:"contact-form",data:function(){return{lastname:"",firstname:"",subject:"",message:""}},methods:{submitForm:function(){this.$http.post("http://localhost:8888/wpadmin/wp-json/pomzed/v1/sendmail",{lastname:this.lastname,firstname:this.firstname,subject:this.subject,message:this.message}).then(function(t){console.log(t)},function(t){console.log(t)})}}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstname,expression:"firstname"}],attrs:{type:"text",placeholder:"Votre prénom"},domProps:{value:t.firstname},on:{input:function(e){e.target.composing||(t.firstname=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastname,expression:"lastname"}],attrs:{type:"text",placeholder:"Votre nom"},domProps:{value:t.lastname},on:{input:function(e){e.target.composing||(t.lastname=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"Sujet"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",placeholder:"Message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),s("input",{staticClass:"submit-button",attrs:{type:"submit"},on:{click:t.submitForm}})])},staticRenderFns:[]};var M=s("VU/8")(L,k,!1,function(t){s("nmYR")},null,null).exports,U=s("DPFL"),V=s.n(U),E={name:"NotreCarteListing",props:["id"],data:function(){return{menu:[]}},methods:{fetchMenu:function(t){var e=this,s="https://sandbox.komachi.pomzed.ch/wp/wp-json/acf/v3/pages/"+t;this.$http.get(s).then(function(t){e.menu=t.body.acf.notre_carte,console.log("fetched posts",e.post)},function(t){console.log(t)})}},mounted:function(){this.fetchMenu(this.id)}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notre-carte-listing"},[s("div",{staticClass:"row"},t._l(t.menu,function(e,n){return s("div",{key:n,staticClass:"col-12 col-md-6 col-lg-4"},[s("div",{staticClass:"card"},[s("h3",{staticClass:"title"},[t._v(t._s(e.carte_main_title))]),t._v(" "),t._l(e.carte_plats,function(e,n){return s("div",{key:n,staticClass:"item"},[s("p",{staticClass:"name"},[t._v(t._s(e.carte_nom_plat))]),t._v(" "),e.carte_des_plat?s("p",{staticClass:"des"},[t._v(t._s(e.carte_des_plat))]):t._e(),t._v(" "),s("p",[t._v("***")])])})],2)])}))])},staticRenderFns:[]};var F=s("VU/8")(E,R,!1,function(t){s("UfGU")},"data-v-1ee7349a",null).exports,z={name:"Page",components:{ContactForm:M,MenuListing:j,Loader:u,Lightbox:V.a,NotreCarteListing:F},data:function(){return{load:!0,page:[],galerie:[],images:[],options:{closeText:"X"}}},methods:{fetchPage:function(t){var e=this;this.$Progress.start();var s="http://sandbox.komachi.pomzed.ch/wp/wp-json/wp/v2/pages?slug="+t;this.$http.get(s).then(function(t){if(e.page=t.body[0],e.images.length=0,"galerie"===e.page.slug){e.galerie=t.body[0].acf.galerie;for(var s=0;s<e.galerie.length;s++){var n={src:e.galerie[s].url,title:e.galerie[s].title};console.log("push"),e.images.push(n)}}e.load=!1,e.$Progress.finish(),document.title=e.page.title.rendered+" | Komachi"},function(t){console.log(t)})}},watch:{$route:function(t){this.load=!0,this.fetchPage(t.params.slug)}},created:function(){this.fetchPage(this.$route.params.slug)},updated:function(){for(var t=document.getElementsByClassName("img-galerie"),e=0;e<t.length;e++)t[e].parentNode.classList.add("col-12"),t[e].parentNode.classList.add("col-md-6"),t[e].parentNode.classList.add("col-lg-4")}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"site-content"},[t.page.title?s("div",{staticClass:"page"},[s("div",{staticClass:"page-content"},[s("h1",{staticClass:"page-title"},[t._v(t._s(t.page.title.rendered))]),t._v(" "),"menus-de-la-semaine"===t.page.slug?s("div",{staticClass:"template-menus-de-la-semaine"},[s("menu-listing",{attrs:{id:t.page.id}})],1):t._e(),t._v(" "),"notre-carte"===t.page.slug?s("div",{staticClass:"template-menus-de-la-semaine"},[s("notre-carte-listing",{attrs:{id:t.page.id}})],1):t._e(),t._v(" "),"contact"===t.page.slug?s("div",{staticClass:"template-menus-de-la-semaine"},[s("contact-form")],1):t._e(),t._v(" "),"galerie"===t.page.slug?s("div",{},[s("lightbox",{attrs:{id:"mylightbox",images:t.images,image_class:"img-galerie",album_class:"row",options:t.options}})],1):s("div",[s("div",{staticClass:"entry-content",domProps:{innerHTML:t._s(t.page.content.rendered)}})])])]):t._e()])},staticRenderFns:[]};var T=s("VU/8")(z,N,!1,function(t){s("wspU")},null,null).exports,I={name:"Post",components:{Loader:u},data:function(){return{load:!0,post:[]}},methods:{fetchPost:function(t){var e=this;this.$Progress.start();var s="http://sandbox.komachi.pomzed.ch/wp/wp-json/wp/v2/posts?slug="+t;this.$http.get(s).then(function(t){e.post=t.body[0],e.load=!1,document.title=e.post.title.rendered+" | Komachi",e.$Progress.finish(),console.log("fetched post single",e.post)},function(t){console.log(t)})}},watch:{$route:function(t){this.load=!0,this.fetchPost(t.params.slug)}},created:function(){console.log("query",this.$route.params.slug),this.fetchPost(this.$route.params.slug)}},J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"site-content"},[e("div",{staticClass:"page"},[e("div",{staticClass:"page-content"},[e("h1",{staticClass:"page-title"},[this._v(this._s(this.post.title.rendered))]),this._v(" "),e("div",{staticClass:"entry-content",domProps:{innerHTML:this._s(this.post.content.rendered)}})])])])},staticRenderFns:[]};var A=s("VU/8")(I,J,!1,function(t){s("thJw")},null,null).exports,O=s("zYko"),X=s.n(O);n.a.use(_.a),n.a.use(X.a,{color:"rgb(17,178,138)",failedColor:"red",thickness:"4px"});var H=new _.a({mode:"history",routes:[{path:"/",name:"Home",component:x},{path:"/:slug",name:"Page",component:T},{path:"/posts/:slug",name:"Post",component:A}]});n.a.use(f.a),n.a.config.productionTip=!1,n.a.http.headers.common["Content-Type"]="application/json",n.a.http.headers.common.Accept="application/json",n.a.http.headers.common.Authorization="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2FuZGJveC5rb21hY2hpLnBvbXplZC5jaFwvd3AiLCJpYXQiOjE1MzEyMTAzNzgsIm5iZiI6MTUzMTIxMDM3OCwiZXhwIjoxNTMxODE1MTc4LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.Tu-4Km8AAHB-bYEwYDXWIje0RACeERLLpBan5gjyCxM",new n.a({el:"#app",router:H,components:{App:v},template:"<App/>"})},Tm2n:function(t,e){},UfGU:function(t,e){},bg4y:function(t,e){},l9cc:function(t,e){},nmYR:function(t,e){},t8ly:function(t,e){},thJw:function(t,e){},vXep:function(t,e){},wspU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3809521dc8087e433550.js.map