(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_combination/index"],{"05d7":function(n,t,i){"use strict";i.r(t);var e=i("dbc5"),a=i("c961");for(var o in a)"default"!==o&&function(n){i.d(t,n,(function(){return a[n]}))}(o);i("425e");var c,u=i("f0c5"),d=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);t["default"]=d.exports},"0f54":function(n,t,i){},"425e":function(n,t,i){"use strict";var e=i("0f54"),a=i.n(e);a.a},c961:function(n,t,i){"use strict";i.r(t);var e=i("f8428"),a=i.n(e);for(var o in e)"default"!==o&&function(n){i.d(t,n,(function(){return e[n]}))}(o);t["default"]=a.a},d012:function(n,t,i){"use strict";(function(n){i("384f");e(i("66fd"));var t=e(i("05d7"));function e(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=i,n(t.default)}).call(this,i("543d")["createPage"])},dbc5:function(n,t,i){"use strict";var e;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return e}));var a=function(){var n=this,t=n.$createElement;n._self._c},o=[]},f8428:function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=i("12be"),a=i("9207"),o=c(i("9676"));function c(n){return n&&n.__esModule?n:{default:n}}var u=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("45a7"))}.bind(null,i)).catch(i.oe)},d=(getApp(),{components:{home:u},mixins:[o.default],data:function(){return{pinkPeople:[],pinkCount:0,bannerList:[],circular:!0,autoplay:!0,interval:3e3,duration:500,combinationList:[],limit:10,page:1,loading:!1,loadend:!1}},onLoad:function(){n.setNavigationBarTitle({title:"拼团列表"}),this.getCombinationList(),this.getBannerList(),this.getPink()},methods:{getPink:function(){var n=this;(0,e.getPink)().then((function(t){n.pinkPeople=t.data.avatars,n.pinkCount=t.data.pink_count}))},getBannerList:function(){var n=this;(0,e.getCombinationBannerList)().then((function(t){n.bannerList=t.data}))},goDetail:function(t){var i=t.link;-1!=i.indexOf("http")||(-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index","/pages/index/index"].indexOf(i)?n.navigateTo({url:i}):n.switchTab({url:i}))},openSubcribe:function(t){n.showLoading({title:"正在加载"}),(0,a.openPinkSubscribe)().then((function(i){n.hideLoading(),n.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.id)})})).catch((function(){n.hideLoading()}))},getCombinationList:function(){var n=this;if(!n.loadend&&!n.loading){var t={page:n.page,limit:n.limit};this.loading=!0,(0,e.getCombinationList)(t).then((function(t){var i=n.combinationList,e=n.limit;n.page++,n.loadend=e>t.data.length,n.combinationList=i.concat(t.data),n.page=n.data.page,n.loading=!1})).catch((function(){n.loading=!1}))}}},onReachBottom:function(){this.getCombinationList()}});t.default=d}).call(this,i("543d")["default"])}},[["d012","common/runtime","common/vendor"]]]);