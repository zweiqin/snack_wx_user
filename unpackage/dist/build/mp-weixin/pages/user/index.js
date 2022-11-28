(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{"0068":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("8540"),a=(n("d1d4"),n("7edb")),o=n("26cb"),u=c(n("c860")),s=c(n("2804")),r=c(n("8e3e"));n("6645");function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=e.getSystemInfoSync().statusBarHeight+"px",g=getApp(),p=function(){Promise.all([n.e("common/vendor"),n.e("pages/index/components/tabBar")]).then(function(){return resolve(n("2024"))}.bind(null,n)).catch(n.oe)},m={components:{tabBar:p},computed:f({},(0,o.mapGetters)({cartNum:"cartNum",isLogin:"isLogin"})),filters:{coundTime:function(e){var t=1e3*e,n=new Date,i=t-n.getTime(),a=parseInt(i/864e5);return a+"天"},dateFormat:function(e){return(0,u.default)(1e3*e).format("YYYY-MM-DD")}},mixins:[r.default],data:function(){return{storeMenu:[],orderMenu:[{img:"icon-daifukuan",title:"待付款",url:"/pages/users/order_list/index?status=0"},{img:"icon-daifahuo",title:"待发货",url:"/pages/users/order_list/index?status=1"},{img:"icon-daishouhuo",title:"待收货",url:"/pages/users/order_list/index?status=2"},{img:"icon-daipingjia",title:"待评价",url:"/pages/users/order_list/index?status=3"},{img:"icon-a-shouhoutuikuan",title:"售后/退款",url:"/pages/users/user_return_list/index"}],imgUrls:[],autoplay:!0,circular:!0,interval:3e3,duration:500,isAuto:!1,isShowAuth:!1,orderStatusNum:{},userInfo:{},MyMenus:[],sysHeight:l,mpHeight:0,showStatus:1,newData:{},activeRouter:"",pageHeight:"100%",routineContact:0,footerSee:!1,member_style:1,my_banner_status:1}},created:function(){var t=this;e.hideTabBar();this.$store.getters.isLogin||s.default.getCode().then((function(e){s.default.silenceAuth(e).then((function(e){t.onLoadFun()}))})).catch((function(t){e.hideLoading()}));var n=getCurrentPages(),i=n[n.length-1].route;this.activeRouter="/"+i},onReady:function(){var t=this,n=e.createSelectorQuery().select(".sys-head");n.boundingClientRect((function(e){t.mpHeight=e.height})).exec()},onShow:function(){var e=this;e.isLogin&&(this.getUserInfo(),this.getMyMenus(),this.setVisit())},onPullDownRefresh:function(){this.onLoadFun()},methods:{getWechatuserinfo:function(){},getRoutineUserInfo:function(e){var t=this;(0,i.updateUserInfo)({userInfo:e.detail.userInfo}).then((function(e){return t.getUserInfo(),t.$util.Tips("更新用户信息成功")})).catch((function(e){}))},setVisit:function(){(0,i.setVisit)({url:"/pages/user/index"}).then((function(e){}))},openAuto:function(){(0,a.toLogin)()},onLoadFun:function(){this.getUserInfo(),this.getMyMenus(),this.setVisit()},Setting:function(){e.openSetting({success:function(e){}})},authColse:function(e){this.isShowAuth=e},bindPhone:function(){e.navigateTo({url:"/pages/users/user_phone/index"})},getUserInfo:function(){var t=this;(0,i.getUserInfo)().then((function(n){t.userInfo=n.data,t.$store.commit("SETUID",n.data.uid),t.orderMenu.forEach((function(e,t){switch(e.title){case"待付款":e.num=n.data.orderStatusNum.unpaid_count;break;case"待发货":e.num=n.data.orderStatusNum.unshipped_count;break;case"待收货":e.num=n.data.orderStatusNum.received_count;break;case"待评价":e.num=n.data.orderStatusNum.evaluated_count;break;case"售后/退款":e.num=n.data.orderStatusNum.refunding_count;break}})),e.stopPullDownRefresh()}))},getUserProfile:function(){var t=this;e.showLoading({title:"获取中"});var n=this;s.default.getUserProfile().then((function(i){s.default.getCode().then((function(a){var o=i.userInfo;o.code=a,o.spread_spid=g.globalData.spid,o.spread_code=g.globalData.code,s.default.authUserInfo(o).then((function(i){if(void 0!==i.data.key&&i.data.key)e.hideLoading(),n.authKey=i.data.key,n.isPhoneBox=!0;else{e.hideLoading();var a=i.data.expires_time-n.$Cache.time();n.$store.commit("LOGIN",{token:i.data.token,time:a}),t.getUserInfo()}})).catch((function(t){e.hideLoading(),e.showToast({title:t.msg,icon:"none",duration:2e3})}))})).catch((function(t){e.hideLoading()}))})).catch((function(t){e.hideLoading()}))},switchTab:function(e){this.orderMenu.forEach((function(t,n){switch(t.title){case"待付款":t.img=e.dfk;break;case"待发货":t.img=e.dfh;break;case"待收货":t.img=e.dsh;break;case"待评价":t.img=e.dpj;break;case"售后/退款":t.img=e.sh;break}}))},getMyMenus:function(){var e=this,t=this;(0,i.getMenuList)().then((function(n){var i=[],a=[];n.data.routine_my_menus.forEach((function(e,t,n){"/pages/admin/order/index"==e.url||"/pages/admin/order_cancellation/index"==e.url||"客服接待"==e.name?i.push(e):a.push(e)})),e.member_style=Number(n.data.diy_data.value),e.my_banner_status=n.data.diy_data.my_banner_status;var o={dfk:"icon-daifukuan",dfh:"icon-daifahuo",dsh:"icon-daishouhuo",dpj:"icon-daipingjia",sh:"icon-a-shouhoutuikuan"},u={dfk:"icon-daifukuan-lan",dfh:"icon-daifahuo-lan",dsh:"icon-daishouhuo-lan",dpj:"icon-daipingjia-lan",sh:"icon-shouhou-tuikuan-lan"},s={dfk:"icon-daifukuan-ju",dfh:"icon-daifahuo-ju",dsh:"icon-daishouhuo-ju",dpj:"icon-daipingjia-ju",sh:"icon-shouhou-tuikuan-ju"},r={dfk:"icon-daifukuan-fen",dfh:"icon-daifahuo-fen",dsh:"icon-daishouhuo-fen",dpj:"icon-daipingjia-fen",sh:"icon-a-shouhoutuikuan-fen"},c={dfk:"icon-daifukuan-lv",dfh:"icon-daifahuo-lv",dsh:"icon-daishouhuo-lv",dpj:"icon-daipingjia-lv",sh:"icon-shouhou-tuikuan-lv"};switch(n.data.diy_data.order_status){case 1:e.switchTab(o);break;case 2:e.switchTab(u);break;case 3:e.switchTab(s);break;case 4:e.switchTab(r);break;case 5:e.switchTab(c);break}t.$set(t,"MyMenus",a),t.$set(t,"storeMenu",i),e.imgUrls=n.data.routine_my_banner,e.routineContact=Number(n.data.routine_contact_type)}))},goEdit:function(){0==this.isLogin?(0,a.toLogin)():e.navigateTo({url:"/pages/users/user_info/index"})},goSignIn:function(){e.navigateTo({url:"/pages/users/user_sgin/index"})},goMenuPage:function(t,n){this.isLogin?-1===t.indexOf("http")?("#"!=t&&"/pages/users/user_info/index"==t&&e.openSetting({success:function(e){}}),e.navigateTo({url:t})):e.navigateTo({url:"/pages/annex/web_view/index?url=".concat(t)}):this.openAuto()},goRouter:function(t){var n=getCurrentPages(),i=n[n.length-1].$page.fullPath;t.link!=i&&e.switchTab({url:t.link,fail:function(n){e.redirectTo({url:t.link})}})}}};t.default=m}).call(this,n("543d")["default"])},"0d64":function(e,t,n){"use strict";var i=n("11ea"),a=n.n(i);a.a},"11ea":function(e,t,n){},6285:function(e,t,n){"use strict";n.r(t);var i=n("c46b"),a=n("db89");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("0d64");var u,s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=r.exports},c46b:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e._f("dateFormat")(e.userInfo.overdue_time):null),i=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e._f("dateFormat")(e.userInfo.overdue_time):null,a=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e._f("dateFormat")(e.userInfo.overdue_time):null;e.$mp.data=Object.assign({},{$root:{f0:n,f1:i,f2:a}})},o=[]},db89:function(e,t,n){"use strict";n.r(t);var i=n("0068"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},f7ab:function(e,t,n){"use strict";(function(e){n("14e7");i(n("66fd"));var t=i(n("6285"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["f7ab","common/runtime","common/vendor"]]]);