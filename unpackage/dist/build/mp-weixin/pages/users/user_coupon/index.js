(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_coupon/index"],{3135:function(t,n,e){"use strict";e.r(n);var o=e("ef57"),i=e("9c30");for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("5a4f"),e("542a");var u,a=e("f0c5"),c=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"01a4dbdc",null,!1,o["a"],u);n["default"]=c.exports},4247:function(t,n,e){"use strict";(function(t){e("14e7");o(e("66fd"));var n=o(e("3135"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"542a":function(t,n,e){"use strict";var o=e("ddec"),i=e.n(o);i.a},"5a4f":function(t,n,e){"use strict";var o=e("9f07"),i=e.n(o);i.a},"9c30":function(t,n,e){"use strict";e.r(n);var o=e("efd7"),i=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);n["default"]=i.a},"9f07":function(t,n,e){},ddec:function(t,n,e){},ef57:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},s=[]},efd7:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("94c0"),i=e("7edb"),s=e("26cb"),u=a(e("8e3e"));function a(t){return t&&t.__esModule?t:{default:t}}var c=function(){e.e("components/Authorize").then(function(){return resolve(e("9442"))}.bind(null,e)).catch(e.oe)},d=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("6fc8"))}.bind(null,e)).catch(e.oe)},r={components:{authorize:c,home:d},mixins:[u.default],data:function(){return{couponsList:[],loading:!1,isAuto:!1,isShowAuth:!1,navOn:1,page:1,limit:15,finished:!1}},computed:(0,s.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&this.getUseCoupons()},deep:!0}},onLoad:function(){this.isLogin?this.getUseCoupons():(0,i.toLogin)()},onReachBottom:function(){this.getUseCoupons()},methods:{onNav:function(t){this.navOn=t,this.couponsList=[],this.page=1,this.finished=!1,this.getUseCoupons()},useCoupon:function(n){var e="";if(0==n.category_id&&""==n.product_id&&(e="/pages/goods_list/index?title=默认"),0!=n.category_id&&(e=1==n.category_type?"/pages/goods_list/index?cid="+n.category_id+"&title="+n.category_name:"/pages/goods_list/index?sid="+n.category_id+"&title="+n.category_name),""!=n.product_id){var o=n.product_id.split(","),i=o.length;e=1==i?"/pages/goods_details/index?id="+n.product_id:"/pages/goods_list/index?productId="+n.product_id+"&title=默认"}t.navigateTo({url:e})},onLoadFun:function(){this.getUseCoupons()},authColse:function(t){this.isShowAuth=t},getUseCoupons:function(){var n=this;n.loading||n.finished||(n.loading=!0,t.showLoading({title:"正在加载…"}),(0,o.getUserCoupons)(this.navOn,{page:this.page,limit:this.limit}).then((function(e){n.loading=!1,t.hideLoading(),n.couponsList=n.couponsList.concat(e.data),n.finished=e.data.length<n.limit,n.page+=1})).catch((function(e){n.loading=!1,t.showToast({title:e,icon:"none"})})))}}};n.default=r}).call(this,e("543d")["default"])}},[["4247","common/runtime","common/vendor"]]]);