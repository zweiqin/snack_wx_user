(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/promoter_rank/index"],{"442d":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},6603:function(t,n,e){"use strict";e.r(n);var i=e("442d"),o=e("e41d");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("ecd3");var s,u=e("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"ca82275c",null,!1,i["a"],s);n["default"]=r.exports},"71d4":function(t,n,e){},"813e":function(t,n,e){"use strict";(function(t){e("b632");i(e("66fd"));var n=i(e("6603"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"85d0":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("7875"),o=e("2597"),a=e("26cb"),s=u(e("4757"));function u(t){return t&&t.__esModule?t:{default:t}}var r=function(){e.e("components/Authorize").then(function(){return resolve(e("60e6"))}.bind(null,e)).catch(e.oe)},c=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("9c4f"))}.bind(null,e)).catch(e.oe)},d={components:{authorize:r,home:c},mixins:[s.default],data:function(){return{navList:["周榜","月榜"],active:0,page:1,limit:10,type:"week",loading:!1,loadend:!1,rankList:[],Two:{},One:{},Three:{},isAuto:!1,isShowAuth:!1}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&this.getRanklist()},deep:!0}},onLoad:function(){this.isLogin?this.getRanklist():(0,o.toLogin)()},methods:{onLoadFun:function(){this.getRanklist()},authColse:function(t){this.isShowAuth=t},getRanklist:function(){var t=this;t.loadend||t.loading||(t.loading=!0,(0,i.getRankList)({page:t.page,limit:t.limit,type:t.type}).then((function(n){var e=n.data;t.rankList.push.apply(t.rankList,e),1==t.page&&(t.One=t.rankList.shift()||{},t.Two=t.rankList.shift()||{},t.Three=t.rankList.shift()||{}),t.loadend=e.length<t.limit,t.loading=!1,t.$set(t,"rankList",t.rankList),t.One=t.One,t.Two=t.Two,t.Three=t.Three,t.page=t.page+1})).catch((function(n){t.loading=!1})))},switchTap:function(t){this.active!==t&&(this.active=t,this.type=t?"month":"week",this.page=1,this.loadend=!1,this.$set(this,"rankList",[]),this.Two={},this.One={},this.Three={},this.getRanklist())}},onReachBottom:function(){this.getRanklist()}};n.default=d},e41d:function(t,n,e){"use strict";e.r(n);var i=e("85d0"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},ecd3:function(t,n,e){"use strict";var i=e("71d4"),o=e.n(i);o.a}},[["813e","common/runtime","common/vendor"]]]);