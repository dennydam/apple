(function(t){function e(e){for(var i,r,c=e[0],a=e[1],u=e[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},s={app:0},o=[];function c(t){return a.p+"js/"+({list:"list",settings:"settings"}[t]||t)+"."+{list:"44e04c2e",settings:"7408adc2"}[t]+".js"}function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n={settings:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var i="css/"+({list:"list",settings:"settings"}[t]||t)+"."+{list:"31d6cfe0",settings:"a1abcc66"}[t]+".css",s=a.p+i,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===s))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===i||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete r[t],d.parentNode.removeChild(d),n(o)},d.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[t]=0})));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,n){i=s[t]=[e,n]}));e.push(i[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",f.name="ChunkLoadError",f.type=i,f.request=r,n[1](f)}s[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1771:function(t,e,n){var i={"./alarm.mp3":"a362","./logo.png":"cf05","./tomato01.png":"f978","./yay.mp3":"c7a5"};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=s,t.exports=r,r.id="1771"},"21bb":function(t,e,n){"use strict";n("2dad")},"2dad":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var i=n("2b0e"),r=n("5f5b"),s=n("b1e0");n("ab8b"),n("2dd8");i["default"].use(r["a"]),i["default"].use(s["a"]);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"top"}},[i("b-container",[i("h2",[t._v("トマトの時計")]),i("hr"),i("b-row",[i("b-col",{staticClass:"aa",attrs:{cols:"12",lg:"6"}},[i("div",{staticClass:"jj"},[i("img",{staticClass:"cc",attrs:{src:n("f978"),alt:""}})]),i("div",{staticClass:"zz"},[i("h1",[t._v(t._s(t.timeText))]),i("h3",{staticClass:"text-center"},[t._v(t._s(t.currentText))]),1!==t.status?i("b-btn",{staticClass:"mx-auto",attrs:{variant:"dark"},on:{click:t.start}},[t._v("Start")]):i("b-btn",{staticClass:"mr-2",attrs:{variant:"outline-danger",pill:""},on:{click:t.pause}},[i("b-icon",{attrs:{icon:"pause-fill"}})],1),t.current.length>0?i("b-btn",{attrs:{variant:"outline-dark",pill:""},on:{click:function(e){return t.finish(!0)}}},[i("b-icon",{attrs:{icon:"skip-end-fill"}})],1):t._e()],1)]),i("b-col",{staticClass:"checklist"},[i("b-btn",{staticClass:"btn1",attrs:{to:"/#"}},[t._v("Check list")]),i("b-btn",{staticClass:"btn2",attrs:{to:"/settings"}},[t._v("Daily report")])],1)],1)],1)],1),i("keep-alive",[i("router-view",{staticClass:"mt5 router"})],1)],1)},c=[],a=(n("4d90"),n("d3b7"),n("25f0"),n("99af"),n("d81d"),{data:function(){return{status:0,timer:0,suckmydick:"","喝尿":[{key:"name",label:"名稱"},{key:"action",label:"操作"}]}},computed:{"你爸爸":function(){return this.$store.state.你爸爸},currentText:function(){return this.current.length>0?this.current:this.你爸爸.length>0?"點擊開始":"沒有事項"},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60).toString().padStart(2,"0"),e=Math.floor(this.timeleft%60).toString().padStart(2,"0");return"".concat(t," : ").concat(e)},current:function(){return this.$store.state.current},"幹大的":function(){return this.suckmydick.length>2||0===this.suckmydick.length&&null},"吃屎":function(){return this.$store.state.你爸爸.map((function(t){return t.state=t.model.length>2,t}))}},methods:{hh:function(){this.suckmydick.length>2&&(this.$store.commit("hh",this.suckmydick),this.suckmydick="")},edititem:function(t){this.$store.commit("edititem",t)},delitem:function(t){this.$store.commit("delitem",t)},submitedit:function(t){this.吃屎[t].state&&this.$store.commit("submitedit",t)},canceledit:function(t){this.$store.commit("canceledit",t)},start:function(){var t=this;0===this.status&&this.你爸爸.length>0&&this.$store.commit("start"),this.current.length&&(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=-1&&t.finish(!1)}),1e3))},pause:function(){this.status=2,clearInterval(this.timer)},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src=n("1771")("./"+this.$store.state.sound),e.play()}this.你爸爸.length>0&&this.start()}}}),u=a,l=(n("5c0b"),n("2877")),f=Object(l["a"])(u,o,c,!1,null,null,null),d=f.exports,h=n("9483");Object(h["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("3ca3"),n("ddb0");var m=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("b-container",[n("b-col",{attrs:{cols:"6"}},[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"text-center"})]),n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"What are we going today","label-for":"suckmydick","invalid-feedback":"字數太少"}},[n("b-form-input",{attrs:{id:"suckmydick",state:t.stats},model:{value:t.suckmydick,callback:function(e){t.suckmydick=e},expression:"suckmydick"}})],1),n("b-btn",{staticClass:"btn3",attrs:{variant:"light"},on:{click:t.hh}},[t._v("+")]),n("hr"),n("h4",[t._v("To-do")])],1),n("b-col",{staticClass:"my-3",attrs:{cols:"12"}},[n("b-table",{attrs:{items:t.ite,fields:t.fie,"show-empty":""},scopedSlots:t._u([{key:"empty",fn:function(){return[n("p",{staticClass:"text-center"},[t._v("沒有項目")])]},proxy:!0},{key:"cell(name)",fn:function(e){return[e.item.edit?n("b-form-input",{attrs:{state:e.item.state},on:{keydown:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.submitedit(e.index)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.canceledit(e.index)}]},model:{value:e.item.model,callback:function(n){t.$set(e.item,"model",n)},expression:"data.item.model"}}):n("span",[t._v(t._s(e.value))])]}},{key:"cell(action)",fn:function(e){return[e.item.edit?n("span",[n("b-btn",{staticClass:"mx-1",attrs:{variant:"sucess"}},[n("b-icon",{attrs:{icon:"check"},on:{click:function(n){return t.submitedit(e.index)}}})],1),n("b-btn",{attrs:{variant:"danger"}},[n("b-icon",{attrs:{icon:"arrow-counterclockwise"},on:{click:function(n){return t.canceledit(e.index)}}})],1)],1):n("span",[n("b-btn",{attrs:{variant:"dark"}},[n("b-icon",{attrs:{icon:"pencil"},on:{click:function(n){return t.edititem(e.index)}}})],1),n("b-btn",{attrs:{variant:"dark"}},[n("b-icon",{attrs:{icon:"trash"},on:{click:function(n){return t.delitem(e.index)}}})],1)],1)]}}])})],1),n("b-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"text-center"},[t._v("已完成")])]),n("b-col",{attrs:{cols:"12"}},[n("b-table-simple",[n("thead",[n("th",[t._v("名稱")]),n("th",[t._v("操作")])]),n("tbody",t._l(t.finished,(function(e,i){return n("tr",[n("td",[t._v(t._s(e))]),n("td"),n("b-btn",{attrs:{variant:"danger"},on:{click:function(e){return t.delfinish(i)}}},[n("b-icon",{attrs:{icon:"trash"}})],1)],1)})),0)]),0===t.finished.length?n("tr",[n("td",{staticClass:"text-center",attrs:{colspan:"2"}},[t._v("沒有項目")])]):t._e()],1)],1)],1)],1)],1)},b=[],g={data:function(){return{status:0,timer:0,suckmydick:"",fie:[{key:"name",label:"名稱"},{key:"action",label:"操作"}]}},computed:{"你爸爸":function(){return this.$store.state.你爸爸},currentText:function(){return this.current.length>0?this.current:this.你爸爸.length>0?"點擊開始":"沒有事項"},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60).toString().padStart(2,"0"),e=Math.floor(this.timeleft%60).toString().padStart(2,"0");return"".concat(t," : ").concat(e)},current:function(){return this.$store.state.current},stats:function(){return this.suckmydick.length>2||0===this.suckmydick.length&&null},ite:function(){return this.$store.state.你爸爸.map((function(t){return t.state=t.model.length>2,t}))},finished:function(){return this.$store.state.finished}},methods:{hh:function(){this.suckmydick.length>2&&(this.$store.commit("hh",this.suckmydick),this.suckmydick="")},edititem:function(t){this.$store.commit("edititem",t)},delitem:function(t){this.$store.commit("delitem",t)},submitedit:function(t){this.ite[t].state&&this.$store.commit("submitedit",t)},canceledit:function(t){this.$store.commit("canceledit",t)},delfinish:function(t){this.$store.commit("delfinish",t)},start:function(){var t=this;0===this.status&&this.你爸爸.length>0&&this.$store.commit("start"),this.current.length&&(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=-1&&t.finish(!1)}),1e3))},pause:function(){this.status=2,clearInterval(this.timer)},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src=n("1771")("./"+this.$store.state.sound),e.play()}this.你爸爸.length>0&&this.start()}}},v=g,k=(n("21bb"),Object(l["a"])(v,p,b,!1,null,null,null)),y=k.exports;i["default"].use(m["a"]);var w=[{path:"/",name:"Home",component:y,meta:{title:"番茄鐘",keepLlive:!0}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘 || 設定"}},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))},meta:{title:"番茄鐘 || 事項"}},{path:"/404",name:"NotFound",component:function(){return n.e("list").then(n.bind(null,"9703"))},meta:{title:"番茄鐘 || 404"}},{path:"*",redirect:"404"}],_=new m["a"]({routes:w});_.afterEach((function(t){document.title=t.meta.title}));var x=_,$=(n("a434"),n("b0c0"),n("2f62")),C=n("0e44");i["default"].use($["a"]);var S=parseInt("1500"),O=parseInt("300"),j=new $["a"].Store({state:{sound:"alarm.mp3","你爸爸":[],current:"",finished:[],timeleft:S},mutations:{selectSound:function(t,e){t.sound=e},hh:function(t,e){t.你爸爸.push({name:e,edit:!1,model:e})},edititem:function(t,e){t.你爸爸[e].edit=!0},delitem:function(t,e){t.你爸爸.splice(e,1)},submitedit:function(t,e){t.你爸爸[e].name=t.你爸爸[e].model,t.你爸爸[e].edit=!1},canceledit:function(t,e){t.你爸爸[e].model=t.你爸爸[e].name,t.你爸爸[e].edit=!1},start:function(t){t.current=t.break?"休息一下":t.你爸爸.shift().name},countdown:function(t){t.timeleft--},finish:function(t){t.break||t.finished.push(t.current),t.current="",t.你爸爸.length>0&&(t.break=!t.break),t.timeleft=t.break?O:S},delfinish:function(t,e){t.finished.splice(e,1)}},actions:{},modules:{},plugins:[Object(C["a"])({key:"pomodoro"})]});i["default"].config.productionTip=!1,new i["default"]({router:x,store:j,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},a362:function(t,e,n){t.exports=n.p+"media/alarm.965b614d.mp3"},c7a5:function(t,e,n){t.exports=n.p+"media/yay.46c744f5.mp3"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},f978:function(t,e,n){t.exports=n.p+"img/tomato01.30e7ef0e.png"}});
//# sourceMappingURL=app.ab72d1a1.js.map