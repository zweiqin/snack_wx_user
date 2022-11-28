(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/order_list/index"],{"0038":function(t,e,i){"use strict";i.r(e);var n=i("40e2"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"027c":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"40e2":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("d240"),o=i("8540"),a=i("3f53"),r=i("7edb"),s=i("26cb"),u=c(i("8e3e"));function c(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("6fc8"))}.bind(null,i)).catch(i.oe)},l=function(){Promise.all([i.e("common/vendor"),i.e("components/payment/index")]).then(function(){return resolve(i("789b"))}.bind(null,i)).catch(i.oe)},h=function(){i.e("components/Authorize").then(function(){return resolve(i("9442"))}.bind(null,i)).catch(i.oe)},f=function(){i.e("components/emptyPage").then(function(){return resolve(i("5db6"))}.bind(null,i)).catch(i.oe)},p={components:{payment:l,home:d,emptyPage:f,authorize:h},mixins:[u.default],data:function(){return{loading:!1,loadend:!1,loadTitle:"加载更多",orderList:[],orderData:{},orderStatus:0,page:1,limit:20,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"使用微信快捷支付",payStatus:!0},{name:"支付宝支付",icon:"icon-zhifubao",value:"alipay",title:"使用线上支付宝支付",payStatus:!0},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"当前可用余额：",number:0,payStatus:!0}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1}},computed:(0,s.mapGetters)(["isLogin"]),onShow:function(){this.$set(this,"loadend",!1),this.$set(this,"page",this.page>1?this.page-1:this.page),this.isLogin?(this.$set(this,"orderList",[]),this.onLoadFun()):(0,r.toLogin)()},onPullDownRefresh:function(){t.stopPullDownRefresh()},methods:{onLoadFun:function(){this.getOrderData(),this.getOrderList(),this.getUserInfo()},authColse:function(t){this.isShowAuth=t},onChangeFun:function(t){var e=t,i=e.action||null,n=void 0!=e.value?e.value:null;i&&this[i]&&this[i](n)},getUserInfo:function(){var t=this;(0,o.getUserInfo)().then((function(e){t.payMode[2].number=e.data.now_money,t.$set(t,"payMode",t.payMode)}))},payClose:function(){this.pay_close=!1},onLoad:function(t){t.status&&(this.orderStatus=t.status)},getOrderData:function(){var t=this,e=this;(0,n.orderData)().then((function(i){e.$set(e,"orderData",i.data),e.payMode.map((function(t){"weixin"==t.value&&(t.payStatus=!!i.data.pay_weixin_open),"alipay"==t.value&&(t.payStatus=!!i.data.ali_pay_status),"yue"==t.value&&(t.payStatus=1==i.data.yue_pay_status)})),t.payMode[1].payStatus=!1}))},cancelOrder:function(t,e){var i=this;if(!e)return i.$util.Tips({title:"缺少订单号无法取消订单"});(0,n.orderCancel)(e).then((function(e){return i.$util.Tips({title:e.msg,icon:"success"},(function(){i.orderList.splice(t,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData()}))})).catch((function(t){return i.$util.Tips({title:t})}))},goPay:function(t,e){this.$set(this,"pay_close",!0),this.$set(this,"pay_order_id",e),this.$set(this,"totalPrice",t)},pay_complete:function(){this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.pay_close=!1,t.navigateTo({url:"/pages/order_pay_status/index?order_id="+this.pay_order_id+"&msg=支付成功&type=3&totalPrice="+this.totalPrice}),this.pay_order_id="",this.getOrderData(),this.getOrderList()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},goOrderDetails:function(e){if(!e)return that.$util.Tips({title:"缺少订单号无法查看订单详情"});t.showLoading({title:"正在加载"}),(0,a.openOrderSubscribe)().then((function(){t.hideLoading(),t.navigateTo({url:"/pages/users/order_details/index?order_id="+e})})).catch((function(e){t.hideLoading()}))},statusClick:function(t){t!=this.orderStatus&&(this.orderStatus=t,this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.getOrderList())},getOrderList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="加载更多",(0,n.getOrderList)({type:t.orderStatus,page:t.page,limit:t.limit}).then((function(e){var i=e.data||[],n=i.length<t.limit;t.orderList=t.$util.SplitArray(i,t.orderList),t.$set(t,"orderList",t.orderList),t.loadend=n,t.loading=!1,t.loadTitle=n?"我也是有底线的":"加载更多",t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))},delOrder:function(e,i){var o=this;t.showModal({title:"删除订单",content:"确定删除该订单",success:function(t){if(t.confirm)(0,n.orderDel)(e).then((function(t){return o.orderList.splice(i,1),o.$set(o,"orderList",o.orderList),o.$set(o.orderData,"unpaid_count",o.orderData.unpaid_count-1),o.getOrderData(),o.$util.Tips({title:"删除成功",icon:"success"})})).catch((function(t){return o.$util.Tips({title:t})}));else if(t.cancel)return o.$util.Tips({title:"已取消"})}})}},onReachBottom:function(){this.getOrderList()}};e.default=p}).call(this,i("543d")["default"])},"44e3":function(t,e,i){"use strict";i.r(e);var n=i("027c"),o=i("0038");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("55c2");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"71e5ab6c",null,!1,n["a"],r);e["default"]=u.exports},"55c2":function(t,e,i){"use strict";var n=i("5e29"),o=i.n(n);o.a},"5e29":function(t,e,i){},"9aca":function(t,e,i){"use strict";(function(t){i("14e7");n(i("66fd"));var e=n(i("44e3"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])}},[["9aca","common/runtime","common/vendor"]]]);