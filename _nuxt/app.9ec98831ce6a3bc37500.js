webpackJsonp([18],{"08PB":function(t,n,e){var r=e("XzJy");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("c929d410",r,!1,{sourceMap:!1})},"0F0d":function(t,n,e){"use strict";n.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"4Atj":function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="4Atj"},"5Cwt":function(t,n,e){"use strict";n.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},F88d:function(t,n,e){"use strict";var r=e("GdvJ"),o=e("P+aQ"),a=!1;var i=function(t){a||e("08PB")},u=e("VU/8")(r.a,o.a,!1,i,null,null);u.options.__file=".nuxt/components/nuxt-loading.vue",n.a=u.exports},GdvJ:function(t,n,e){"use strict";var r=e("/5sW");n.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},"HBB+":function(t,n,e){"use strict";n.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,n){var e=n.parent,a=n.data,i=n.props;a.nuxtChild=!0;for(var u=e,s=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition,p=0;e;)e.$vnode&&e.$vnode.data.nuxtChild&&p++,e=e.$parent;a.nuxtChildDepth=p;var f=s[p]||c,l={};r.forEach(function(t){void 0!==f[t]&&(l[t]=f[t])});var d={};o.forEach(function(t){"function"==typeof f[t]&&(d[t]=f[t].bind(u))});var h=d.beforeEnter;d.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(u,t)};var m=[t("router-view",a)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:l,on:d},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,n,e){"use strict";var r=e("/5sW"),o=e("HBB+"),a=e("ct3O"),i=e("YLfZ");n.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},MUOP:function(t,n,e){var r=e("YBIN");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("24f187c3",r,!1,{sourceMap:!1})},"P+aQ":function(t,n,e){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};n.a=o},QhKw:function(t,n,e){"use strict";var r=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),n("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"logo"},[n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};n.a=o},T23V:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("pFYg"),o=e.n(r),a=e("//Fk"),i=e.n(a),u=e("Xxa5"),s=e.n(u),c=e("mvHQ"),p=e.n(c),f=e("exGp"),l=e.n(f),d=e("fZjL"),h=e.n(d),m=e("woOf"),x=e.n(m),v=e("/5sW"),y=e("unZF"),g=e("qcny"),b=e("YLfZ"),w=function(){var t=l()(s.a.mark(function t(n,e,r){var o,a,i=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!$.nuxt.err||e.path!==n.path,this._queryChanged=p()(n.query)!==p()(e.query),this._diffQuery=this._queryChanged?Object(b.g)(n.query,e.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(b.k)(n);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var n=t.options.watchQuery;return!0===n||!!Array.isArray(n)&&n.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",n,e,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}));return function(n,e,r){return t.apply(this,arguments)}}(),_=function(){var t=l()(s.a.mark(function t(n,e,r){var o,a,u,c,p,f,l,d,h=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(e.path===t.path&&h.$loading.finish&&h.$loading.finish(),e.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!o){o=!0;var n=[];k=Object(b.e)(e,n).map(function(t,r){return Object(b.b)(e.matched[n[r]].path)(e.params)}),r(t)}},t.next=6,Object(b.m)($,{route:n,from:e,next:a.bind(this)});case 6:if(this._dateLastError=$.nuxt.dateErr,this._hadError=!!$.nuxt.err,u=[],(c=Object(b.e)(n,u)).length){t.next=24;break}return t.next=13,A.call(this,c,$.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof g.a.layout?g.a.layout($.context):g.a.layout);case 17:return p=t.sent,t.next=20,A.call(this,c,$.context,p);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return $.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(R(c,n,e)),t.prev=26,t.next=29,A.call(this,c,$.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!$.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(f=c[0].options.layout)&&(f=f($.context)),t.next=37,this.loadLayout(f);case 37:return f=t.sent,t.next=40,A.call(this,c,$.context,f);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!$.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(l=!0,c.forEach(function(t){l&&"function"==typeof t.options.validate&&(l=t.options.validate({params:n.params||{},query:n.query||{}}))}),l){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,i.a.all(c.map(function(t,e){if(t._path=Object(b.b)(n.matched[u[e]].path)(n.params),t._dataRefresh=!1,h._pathChanged&&t._path!==k[e])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return i.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,c=a&&s?30:45;if(a){var p=Object(b.j)(t.options.asyncData,$.context).then(function(n){Object(b.a)(t,n),h.$loading.increase&&h.$loading.increase(c)});o.push(p)}if(s){var f=t.options.fetch($.context);f&&(f instanceof i.a||"function"==typeof f.then)||(f=i.a.resolve(f)),f.then(function(t){h.$loading.increase&&h.$loading.increase(c)}),o.push(f)}return i.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),k=c.map(function(t,e){return Object(b.b)(n.matched[u[e]].path)(n.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),k=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(d=g.a.layout)&&(d=d($.context)),t.next=63,this.loadLayout(d);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",n,e,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])}));return function(n,e,r){return t.apply(this,arguments)}}(),C=function(){var t=l()(s.a.mark(function t(n){var e,r,o,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $=n.app,E=n.router,t.next=4,i.a.all(T(E));case 4:return e=t.sent,r=new v.default($),o=j.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),v.default.nextTick(function(){L(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),e.length&&(r.setTransitions(R(e,E.currentRoute)),k=E.currentRoute.matched.map(function(t){return Object(b.b)(t.path)(E.currentRoute.params)})),r.$loading={},j.error&&r.error(j.error),E.beforeEach(w.bind(r)),E.beforeEach(_.bind(r)),E.afterEach(S),E.afterEach(F.bind(r)),!j.serverRendered){t.next=22;break}return a(),t.abrupt("return");case 22:_.call(r,E.currentRoute,E.currentRoute,function(t){if(!t)return S(E.currentRoute,E.currentRoute),q.call(r,E.currentRoute),void a();E.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 23:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}(),k=[],$=void 0,E=void 0,j=window.__NUXT__||{};function R(t,n,e){var r=function(t){var r=function(t,n){if(!t||!t.options||!t.options[n])return{};var e=t.options[n];if("function"==typeof e){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return e.apply(void 0,o)}return e}(t,"transition",n,e)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var n=x()({},r(t));if(e&&e.matched.length&&e.matched[0].components.default){var o=r(e.matched[0].components.default);h()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){n[t]=o[t]})}return n})}function O(t,n){return j.serverRendered&&n&&Object(b.a)(t,n),t._Ctor=t,t}function T(t){var n=this,e=Object(b.d)(t.options.base,t.options.mode);return Object(b.c)(t.match(e),function(){var t=l()(s.a.mark(function t(e,r,o,a,i){var u;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return u=O(Object(b.l)(e),j.data?j.data[i]:null),o.components[a]=u,t.abrupt("return",u);case 7:case"end":return t.stop()}},t,n)}));return function(n,e,r,o,a){return t.apply(this,arguments)}}())}function A(t,n,e){var r=this,o=[],a=!1;if(void 0!==e&&(o=[],e.middleware&&(o=o.concat(e.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y.a[t])}),!a)return Object(b.i)(o,n)}function S(t,n){Object(b.c)(t,function(t,n,e,r){return"object"!==(void 0===t?"undefined":o()(t))||t.options||((t=v.default.extend(t))._Ctor=t,e.components[r]=t),t})}function q(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var n=this.$options.nuxt.err?g.a.layout:t.matched[0].components.default.options.layout;"function"==typeof n&&(n=n($.context)),this.setLayout(n)}function F(t,n){var e=this;!1===this._pathChanged&&!1===this._queryChanged||v.default.nextTick(function(){Object(b.f)(t,[]).forEach(function(t,n){if(t&&t.constructor._dataRefresh&&k[n]===t.constructor._path&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var r in e)v.default.set(t.$data,r,e[r])}}),q.call(e,t)})}function L(t){window._nuxtReadyCbs.forEach(function(n){"function"==typeof n&&n(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),E.afterEach(function(n,e){v.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",n,e)})})}Object(g.b)().then(C).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},WRRc:function(t,n,e){"use strict";n.a={name:"nuxt-link",functional:!0,render:function(t,n){return t("router-link",n.data,n.children)}}},XzJy:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n",""])},YBIN:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.__nuxt-error-page {\n  padding: 16px;\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased; \n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 24px;\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n",""])},YLfZ:function(t,n,e){"use strict";n.a=function(t,n){var e=t.options.data||y;if(!n&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=e.call(this);return this.$ssrContext&&(n=this.$ssrContext.asyncData[t.cid]),x()({},r,n)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},n.l=g,n.e=b,n.f=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,e){return h()(t.instances).map(function(r){return n&&n.push(e),t.instances[r]})}))},n.c=w,n.k=_,e.d(n,"h",function(){return C}),e.d(n,"m",function(){return k}),n.i=function t(n,e){if(!n.length||e._redirected||e._errored)return l.a.resolve();return $(n[0],e).then(function(){return t(n.slice(1),e)})},n.j=$,n.d=function(t,n){var e=window.location.pathname;if("hash"===n)return window.location.hash.replace(/^#\//,"");t&&0===e.indexOf(t)&&(e=e.slice(t.length));return(e||"/")+window.location.search+window.location.hash},n.b=function(t,n){return function(t){for(var n=new Array(t.length),e=0;e<t.length;e++)"object"===i()(t[e])&&(n[e]=new RegExp("^(?:"+t[e].pattern+")$"));return function(e,r){for(var a="",i=e||{},u=r||{},s=u.pretty?j:encodeURIComponent,c=0;c<t.length;c++){var p=t[c];if("string"!=typeof p){var f,l=i[p.name];if(null==l){if(p.optional){p.partial&&(a+=p.prefix);continue}throw new TypeError('Expected "'+p.name+'" to be defined')}if(Array.isArray(l)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but received `'+o()(l)+"`");if(0===l.length){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(f=s(l[d]),!n[c].test(f))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'", but received `'+o()(f)+"`");a+=(0===d?p.prefix:p.delimiter)+f}}else{if(f=p.asterisk?R(l):s(l),!n[c].test(f))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but received "'+f+'"');a+=p.prefix+f}}else a+=p}return a}}(function(t,n){var e,r=[],o=0,a=0,i="",u=n&&n.delimiter||"/";for(;null!=(e=E.exec(t));){var s=e[0],c=e[1],p=e.index;if(i+=t.slice(a,p),a=p+s.length,c)i+=c[1];else{var f=t[a],l=e[2],d=e[3],h=e[4],m=e[5],x=e[6],v=e[7];i&&(r.push(i),i="");var y=null!=l&&null!=f&&f!==l,g="+"===x||"*"===x,b="?"===x||"*"===x,w=e[2]||u,_=h||m;r.push({name:d||o++,prefix:l||"",delimiter:w,optional:b,repeat:g,partial:y,asterisk:!!v,pattern:_?T(_):v?".*":"[^"+O(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,n))},n.g=function(t,n){var e={},r=x()({},t,n);for(var o in r)String(t[o])!==String(n[o])&&(e[o]=!0);return e};var r=e("mvHQ"),o=e.n(r),a=e("pFYg"),i=e.n(a),u=e("Xxa5"),s=e.n(u),c=e("exGp"),p=e.n(c),f=e("//Fk"),l=e.n(f),d=e("fZjL"),h=e.n(d),m=e("Dd8w"),x=e.n(m),v=e("/5sW"),y=function(){return{}};function g(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=v.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function b(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,e){return h()(t.components).map(function(r){return n&&n.push(e),t.components[r]})}))}function w(t,n){return Array.prototype.concat.apply([],t.matched.map(function(t,e){return h()(t.components).map(function(r){return n(t.components[r],t.instances[r],t,r,e)})}))}function _(t){var n=this;return l.a.all(w(t,function(){var t=p()(s.a.mark(function t(e,r,o,a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=g(e));case 5:case"end":return t.stop()}},t,n)}));return function(n,e,r,o){return t.apply(this,arguments)}}()))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C=function(){var t=p()(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(n);case 2:return t.abrupt("return",x()({},n,{meta:b(n).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}(),k=function(){var t=p()(s.a.mark(function t(n,e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.to?e.to:e.route,n.context){t.next=13;break}t.t0=!0,t.t1=n,t.t2=e.payload,t.t3=e.error,t.t4={},n.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,payload:t.t2,error:t.t3,base:"/",env:t.t4},e.req&&(n.context.req=e.req),e.res&&(n.context.res=e.res),n.context.redirect=function(t,e,r){if(t){n.context._redirected=!0;var o=void 0===e?"undefined":i()(e);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=e||{},o=void 0===(e=t)?"undefined":i()(e),t=302),"object"===o&&(e=n.router.resolve(e).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(e))throw e=A(e,r),window.location.replace(e),new Error("ERR_REDIRECT");n.context.next({path:e,query:r,status:t})}},n.context.nuxtState=window.__NUXT__;case 13:if(n.context.next=e.next,n.context._redirected=!1,n.context._errored=!1,n.context.isHMR=!!e.isHMR,!e.route){t.next=21;break}return t.next=20,C(e.route);case 20:n.context.route=t.sent;case 21:if(n.context.params=n.context.route.params||{},n.context.query=n.context.route.query||{},!e.from){t.next=27;break}return t.next=26,C(e.from);case 26:n.context.from=t.sent;case 27:case"end":return t.stop()}},t,this)}));return function(n,e){return t.apply(this,arguments)}}();function $(t,n){var e=void 0;return(e=2===t.length?new l.a(function(e){t(n,function(t,r){t&&n.error(t),e(r=r||{})})}):t(n))&&(e instanceof l.a||"function"==typeof e.then)||(e=l.a.resolve(e)),e}var E=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function j(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function A(t,n){var e=void 0,r=t.indexOf("://");-1!==r?(e=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(e?e+"://":"//")+a.shift(),u=a.filter(Boolean).join("/"),s=void 0;return 2===(a=u.split("#")).length&&(u=a[0],s=a[1]),i+=u?"/"+u:"",n&&"{}"!==o()(n)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(n){var e=t[n];return null==e?"":Array.isArray(e)?e.slice().map(function(t){return[n,"=",t].join("")}).join("&"):n+"="+e}).filter(Boolean).join("&")}(n)),i+=s?"#"+s:""}},ct3O:function(t,n,e){"use strict";var r=e("5Cwt"),o=e("QhKw"),a=!1;var i=function(t){a||e("MUOP")},u=e("VU/8")(r.a,o.a,!1,i,null,null);u.options.__file=".nuxt/components/nuxt-error.vue",n.a=u.exports},mtxM:function(t,n,e){"use strict";n.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:_,routes:[{path:"/tran",component:u,name:"tran"},{path:"/qrlist",component:s,name:"qrlist"},{path:"/filesmanage",component:c,name:"filesmanage"},{path:"/ppt/list",component:p,name:"ppt-list"},{path:"/ppt/05",component:f,name:"ppt-05"},{path:"/ppt/03",component:l,name:"ppt-03"},{path:"/ppt/07",component:d,name:"ppt-07"},{path:"/ppt/06",component:h,name:"ppt-06"},{path:"/ppt/04",component:m,name:"ppt-04"},{path:"/four/invitation",component:x,name:"four-invitation"},{path:"/ppt/02",component:v,name:"ppt-02"},{path:"/notuse/pptbase",component:y,name:"notuse-pptbase"},{path:"/notuse/ppt",component:g,name:"notuse-ppt"},{path:"/ppt/01",component:b,name:"ppt-01"},{path:"/",component:w,name:"index"}],fallback:!1})};var r=e("//Fk"),o=e.n(r),a=e("/5sW"),i=e("/ocq");a.default.use(i.default);var u=function(){return e.e(12).then(e.bind(null,"P2aK")).then(function(t){return t.default||t})},s=function(){return e.e(16).then(e.bind(null,"zYlV")).then(function(t){return t.default||t})},c=function(){return e.e(10).then(e.bind(null,"jiqP")).then(function(t){return t.default||t})},p=function(){return e.e(0).then(e.bind(null,"Z49F")).then(function(t){return t.default||t})},f=function(){return e.e(3).then(e.bind(null,"zd5w")).then(function(t){return t.default||t})},l=function(){return e.e(5).then(e.bind(null,"IzQ+")).then(function(t){return t.default||t})},d=function(){return e.e(1).then(e.bind(null,"76yE")).then(function(t){return t.default||t})},h=function(){return e.e(2).then(e.bind(null,"lIY+")).then(function(t){return t.default||t})},m=function(){return e.e(4).then(e.bind(null,"aLHy")).then(function(t){return t.default||t})},x=function(){return e.e(15).then(e.bind(null,"sZ81")).then(function(t){return t.default||t})},v=function(){return e.e(6).then(e.bind(null,"mNfD")).then(function(t){return t.default||t})},y=function(){return e.e(8).then(e.bind(null,"F4QI")).then(function(t){return t.default||t})},g=function(){return e.e(9).then(e.bind(null,"p+UU")).then(function(t){return t.default||t})},b=function(){return e.e(7).then(e.bind(null,"RVFi")).then(function(t){return t.default||t})},w=function(){return e.e(11).then(e.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var _=function(t,n,e){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),e&&(r=e),new o.a(function(n){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(r={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}n(r)})})}},qcny:function(t,n,e){"use strict";e.d(n,"b",function(){return E});var r=e("Xxa5"),o=e.n(r),a=e("//Fk"),i=(e.n(a),e("C4MV")),u=e.n(i),s=e("woOf"),c=e.n(s),p=e("Dd8w"),f=e.n(p),l=e("exGp"),d=e.n(l),h=e("MU8w"),m=(e.n(h),e("/5sW")),x=e("p3jY"),v=e.n(x),y=e("mtxM"),g=e("0F0d"),b=e("HBB+"),w=e("WRRc"),_=e("ct3O"),C=e("Hot+"),k=e("yTq1"),$=e("YLfZ");e.d(n,"a",function(){return _.a});var E=function(){var t=d()(o.a.mark(function t(n){var e,r,a,i,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(y.a)(n),r=f()({router:e,nuxt:{defaultTransition:j,transitions:[j],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},j,{name:t}):c()({},j,t):j}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var e=this.nuxt||this.$options.nuxt;return e.dateErr=Date.now(),e.err=t,n&&(n.nuxt.error=t),t}}},k.a),a=n?n.next:function(t){return r.router.push(t)},i=void 0,n?i=e.resolve(n.url).route:(s=Object($.d)(e.options.base),i=e.resolve(s).route),t.next=7,Object($.m)(r,{route:i,next:a,error:r.nuxt.error.bind(r),payload:n?n.payload:void 0,req:n?n.req:void 0,res:n?n.res:void 0,beforeRenderFns:n?n.beforeRenderFns:void 0});case 7:(function(t,n){if(!t)throw new Error("inject(key, value) has no key provided");if(!n)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=n;var e="__nuxt_"+t+"_installed__";m.default[e]||(m.default[e]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||u()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=11;break;case 11:return t.abrupt("return",{app:r,router:e});case 12:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}();m.default.component(g.a.name,g.a),m.default.component(b.a.name,b.a),m.default.component(w.a.name,w.a),m.default.component(C.a.name,C.a),m.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var j={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},unZF:function(t,n,e){"use strict";var r=e("BO1k"),o=e.n(r),a=e("4Atj"),i=a.keys();function u(t){var n=a(t);return n.default?n.default:n}var s={},c=!0,p=!1,f=void 0;try{for(var l,d=o()(i);!(c=(l=d.next()).done);c=!0){var h=l.value;s[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=u(h)}}catch(t){p=!0,f=t}finally{try{!c&&d.return&&d.return()}finally{if(p)throw f}}n.a=s},yTq1:function(t,n,e){"use strict";var r=e("//Fk"),o=e.n(r),a=e("/5sW"),i=e("F88d"),u={_default:function(){return e.e(14).then(e.bind(null,"Ma2J")).then(function(t){return t.default||t})},_four:function(){return e.e(13).then(e.bind(null,"NiOe")).then(function(t){return t.default||t})}},s={};n.a={head:{title:"sux",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"build songxiaocaiUX files"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,n){var e=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[e,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&s["_"+t]||(t="default"),this.layoutName=t;var n="_"+t;return this.layout=s[n],this.layout},loadLayout:function(t){var n=this;t&&(u["_"+t]||s["_"+t])||(t="default");var e="_"+t;return s[e]?o.a.resolve(s[e]):u[e]().then(function(t){return s[e]=t,delete u[e],s[e]}).catch(function(t){if(n.$nuxt)return n.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);