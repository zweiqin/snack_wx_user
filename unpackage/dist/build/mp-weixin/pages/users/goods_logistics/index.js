(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/goods_logistics/index"],{"0b42":function(t,e,n){},"1a30":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},4737:function(t,e,n){"use strict";n.r(e);var o=n("1a30"),r=n("9a2c");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("fabc");var u,s=n("f0c5"),c=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"46ec77f7",null,!1,o["a"],u);e["default"]=c.exports},7623:function(t,e,n){"use strict";(function(t){n("b632");o(n("66fd"));var e=o(n("4737"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"9a2c":function(t,e,n){"use strict";n.r(e);var o=n("fe72"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},fabc:function(t,e,n){"use strict";var o=n("0b42"),r=n.n(o);r.a},fe72:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("b4b4"),r=n("5e82"),i=(c(n("8493")),n("2597")),u=n("26cb"),s=c(n("4757"));function c(t){return t&&t.__esModule?t:{default:t}}var a=function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("f2be"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/Authorize").then(function(){return resolve(n("60e6"))}.bind(null,n)).catch(n.oe)},f={components:{recommend:a,authorize:d},mixins:[s.default],data:function(){return{orderId:"",product:[],orderInfo:{},expressList:[],hostProduct:[]}},computed:(0,u.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getExpress(),this.get_host_product())},deep:!0}},onLoad:function(t){if(!t.orderId)return this.$util.Tips({title:"缺少订单号"});this.orderId=t.orderId,this.type=t.type,this.isLogin?(this.getExpress(),this.get_host_product()):(0,i.toLogin)()},onReady:function(){},methods:{onLoadFun:function(){this.getExpress(),this.get_host_product()},copyOrderId:function(){t.setClipboardData({data:this.orderInfo.delivery_id})},getExpress:function(){var t=this,e=this;(0,o.express)(e.orderId,e.type).then((function(t){var n=t.data.express.result||{};e.$set(e,"product",t.data.order.cartInfo||[]),e.$set(e,"orderInfo",t.data.order),e.$set(e,"expressList",n.list||[])})).catch((function(e){t.$util.Tips({title:e})}))},get_host_product:function(){var t=this;(0,r.getProductHot)().then((function(e){t.$set(t,"hostProduct",e.data)}))}}};e.default=f}).call(this,n("543d")["default"])}},[["7623","common/runtime","common/vendor"]]]);