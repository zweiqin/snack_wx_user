(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_pay_status/index"],{1403:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("68db")),o=n("0c82"),r=n("9207"),a=n("5047"),d=n("26cb"),u=s(n("9676"));function s(t){return t&&t.__esModule?t:{default:t}}var c=function(){n.e("components/Authorize").then(function(){return resolve(n("3474"))}.bind(null,n)).catch(n.oe)},l={components:{lotteryModel:i.default,authorize:c},mixins:[u.default],data:function(){return{loading:!1,lotteryLoading:!1,orderLottery:!1,orderId:"",order_pay_info:{paid:1,_status:{}},isAuto:!1,isShowAuth:!1,status:0,msg:"",couponsHidden:!0,couponList:[],options:{}}},computed:(0,d.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getOrderPayInfo()},deep:!0}},onLoad:function(t){if(this.options=t,!t.order_id)return this.$util.Tips({title:"缺少参数无法查看订单支付状态"},{tab:3,url:1});this.orderId=t.order_id,this.status=t.status||0,this.msg=t.msg||""},onShow:function(){this.isLogin?this.getOrderPayInfo():(0,a.toLogin)()},methods:{getOrderLottery:function(t){this.orderLottery=t,this.lotteryLoading=!0},openTap:function(){this.$set(this,"couponsHidden",!this.couponsHidden)},onLoadFun:function(){this.getOrderPayInfo()},getOrderPayInfo:function(){var e=this,n=this;t.showLoading({title:"正在加载中"}),(0,o.getOrderDetail)(n.orderId).then((function(i){t.hideLoading(),n.$set(n,"order_pay_info",i.data),t.setNavigationBarTitle({title:i.data.paid?"支付成功":"未支付"}),e.loading=!0,e.getOrderCoupon()})).catch((function(n){e.loading=!0,t.hideLoading()}))},getOrderCoupon:function(){var t=this;(0,o.orderCoupon)(t.orderId).then((function(e){t.couponList=e.data}))},goIndex:function(e){t.switchTab({url:"/pages/index/index"})},goPink:function(e){t.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+e})},goOrderDetails:function(e){var n=this;t.showLoading({title:"正在加载"}),(0,r.openOrderSubscribe)().then((function(e){t.hideLoading(),t.navigateTo({url:"/pages/users/order_details/index?order_id="+n.orderId})})).catch((function(){nui.hideLoading()}))}}};e.default=l}).call(this,n("543d")["default"])},1554:function(t,e,n){"use strict";(function(t){n("384f");i(n("66fd"));var e=i(n("3611"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"21c5":function(t,e,n){"use strict";n.r(e);var i=n("1403"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},3611:function(t,e,n){"use strict";n.r(e);var i=n("ca90"),o=n("21c5");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("b66f");var a,d=n("f0c5"),u=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=u.exports},"3c39":function(t,e,n){"use strict";n.r(e);var i=n("a657"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"68db":function(t,e,n){"use strict";n.r(e);var i=n("7e26"),o=n("3c39");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("a060");var a,d=n("f0c5"),u=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"4c66d466",null,!1,i["a"],a);e["default"]=u.exports},"7e26":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(){t.addressModel=!1})},r=[]},9544:function(t,e,n){},"99c7":function(t,e,n){},a060:function(t,e,n){"use strict";var i=n("99c7"),o=n.n(i);o.a},a657:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("0c82");var i,o=n("9207"),r=n("5047"),a=n("6df4"),d=n("26cb"),u=s(n("9676"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){Promise.all([n.e("common/vendor"),n.e("components/lottery/index")]).then(function(){return resolve(n("93b7"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("pages/order_pay_status/components/lotteryAleart").then(function(){return resolve(n("d6be"))}.bind(null,n)).catch(n.oe)},h=function(){Promise.all([n.e("common/vendor"),n.e("pages/order_pay_status/components/userAddress")]).then(function(){return resolve(n("7500"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/Authorize").then(function(){return resolve(n("3474"))}.bind(null,n)).catch(n.oe)},g={components:{authorize:p,gridsLottery:l,lotteryAleart:f,userAddress:h},mixins:[u.default],props:{options:{type:Object}},data:function(){return{lotteryShow:!1,addressModel:!1,lottery_num:0,aleartType:0,aleartStatus:!1,lottery_draw_param:{startIndex:3,totalCount:3,winingIndex:1,speed:100},alData:{},type:"",prize:[],orderId:"",order_pay_info:{paid:1,_status:{}},isAuto:!1,isShowAuth:!1,couponsHidden:!0,couponList:[],totalPrice:0}},computed:(0,d.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){},deep:!0},options:{handler:function(t,e){t&&(this.orderId=t.order_id,this.totalPrice=t.totalPrice,this.type=t.type,this.getLotteryData(t.type))},deep:!0}},created:function(t){this.isLogin?this.getLotteryData(this.type):(0,r.toLogin)()},methods:(i={openTap:function(){this.$set(this,"couponsHidden",!this.couponsHidden)},orderDetails:function(){this.$emit("orderDetails")},getWiningIndex:function(t){var e=this;this.aleartType=0,(0,a.startLottery)({id:this.id}).then((function(n){e.prize.forEach((function(i,o){n.data.id===i.id&&(e.alData=n.data,e.lottery_draw_param.winingIndex=o,t(e.lottery_draw_param))}))})).catch((function(t){e.$util.Tips({title:t})}))},goIndex:function(e){t.switchTab({url:"/pages/index/index"})},goOrderDetails:function(e){var n=this;t.showLoading({title:"正在加载"}),(0,o.openOrderSubscribe)().then((function(e){t.hideLoading(),t.navigateTo({url:"/pages/users/order_details/index?order_id="+n.orderId})})).catch((function(){nui.hideLoading()}))},getLotteryData:function(t){var e=this;(0,a.getLotteryData)(t).then((function(t){e.factor_num=t.data.lottery.factor_num,e.id=t.data.lottery.id,e.prize=t.data.lottery.prize,e.lottery_num=t.data.lottery_num,e.prize.push({a:1}),e.$emit("lotteryShow",!0),e.lotteryShow=!0})).catch((function(t){e.$emit("lotteryShow",!1),e.lotteryShow=!1}))},closeLottery:function(t){this.aleartStatus=!1,this.getLotteryData(this.type),6===this.alData.type&&(this.addressModel=!0)},getAddress:function(t){var e=this,n=t;n.id=this.alData.lottery_record_id,n.address=t.address.province+t.address.city+t.address.district+t.detail,(0,a.receiveLottery)(n).then((function(t){e.$util.Tips({title:"领取成功"}),e.addressModel=!1})).catch((function(t){e.$util.Tips({title:t})}))}},c(i,"getWiningIndex",(function(t){var e=this;this.aleartType=0,(0,a.startLottery)({id:this.id}).then((function(n){e.prize.forEach((function(i,o){n.data.id===i.id&&(e.alData=n.data,e.lottery_draw_param.winingIndex=o,t(e.lottery_draw_param))}))})).catch((function(t){e.$util.Tips({title:t})}))})),c(i,"luck_draw_finish",(function(t){this.aleartType=2,this.aleartStatus=!0})),i)};e.default=g}).call(this,n("543d")["default"])},b66f:function(t,e,n){"use strict";var i=n("9544"),o=n.n(i);o.a},ca90:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},r=[]}},[["1554","common/runtime","common/vendor"]]]);