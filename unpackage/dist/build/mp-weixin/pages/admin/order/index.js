(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admin/order/index"],{"1a10":function(t,n,e){"use strict";e.r(n);var i=e("ee67"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"5bb6":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},a3c4:function(t,n,e){"use strict";var i=e("b37f"),a=e.n(i);a.a},a6e3:function(t,n,e){"use strict";e.r(n);var i=e("5bb6"),a=e("1a10");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("a3c4");var u,c=e("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=r.exports},b37f:function(t,n,e){},e720:function(t,n,e){"use strict";(function(t){e("384f");i(e("66fd"));var n=i(e("a6e3"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},ee67:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("951c"),a=function(){e.e("components/Loading/index").then(function(){return resolve(e("e032"))}.bind(null,e)).catch(e.oe)},o={name:"adminOrder",components:{Loading:a},data:function(){return{census:{},list:[],where:{page:1,limit:15},loaded:!1,loading:!1}},onLoad:function(){this.getIndex(),this.getList()},methods:{getIndex:function(){var t=this;(0,i.getStatisticsInfo)().then((function(n){t.census=n.data}),(function(n){t.$util.Tips({title:n})}))},getList:function(){var t=this;t.loading||t.loaded||(t.loading=!0,(0,i.getStatisticsMonth)(t.where).then((function(n){t.loading=!1,t.loaded=n.data.length<t.where.limit,t.list.push.apply(t.list,n.data),t.where.page=t.where.page+1}),(function(n){t.$util.Tips({title:n})}),300))}},onReachBottom:function(){this.getList()}};n.default=o}},[["e720","common/runtime","common/vendor"]]]);