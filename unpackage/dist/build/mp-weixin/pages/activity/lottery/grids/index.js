(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/lottery/grids/index"],{1132:function(t,e,n){"use strict";var o=n("402c"),a=n.n(o);a.a},"402c":function(t,e,n){},"516f":function(t,e,n){"use strict";(function(t){n("b632");o(n("66fd"));var e=o(n("b01d"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"532d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("f62a"),a=(n("7875"),n("2597")),r=n("26cb"),i=c(n("4757"));function c(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([n.e("common/vendor"),n.e("components/zb-code/zb-code")]).then(function(){return resolve(n("30b9"))}.bind(null,n)).catch(n.oe)},s=function(){Promise.all([n.e("common/vendor"),n.e("components/lottery/index")]).then(function(){return resolve(n("4e65"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("pages/activity/lottery/components/showbox").then(function(){return resolve(n("6d1f"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("pages/activity/lottery/components/noticeBar").then(function(){return resolve(n("8aa7"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("pages/activity/lottery/components/lotteryAleart").then(function(){return resolve(n("7acf"))}.bind(null,n)).catch(n.oe)},h=function(){Promise.all([n.e("common/vendor"),n.e("pages/activity/lottery/components/userAddress")]).then(function(){return resolve(n("e139"))}.bind(null,n)).catch(n.oe)},p=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("9c4f"))}.bind(null,n)).catch(n.oe)},y=(getApp(),{components:{gridsLottery:s,showBox:l,noticeBar:u,lotteryAleart:f,userAddress:h,zbCode:d,home:p},mixins:[i.default],data:function(){return{lotteryShow:!0,loading:!1,H5ShareBox:!1,addressModel:!1,lottery_num:0,aleartType:0,aleartStatus:!1,lottery_draw_param:{startIndex:3,totalCount:3,winingIndex:1,speed:100},userList:{type:"user",data:[]},myList:{type:"me",data:[]},htmlData:{type:"html",data:""},prize:[],factor_num:0,id:0,alData:{},type:"",followCode:!1,codeShow:!1,cid:"1",ifShow:!0,val:"",lv:3,onval:!0,loadMake:!0,src:"",codeSrc:"",image:"",is_content:0,is_all_record:0,is_personal_record:0,factor:0}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getLotteryData(this.type)},deep:!0}},onLoad:function(t){this.type=t.type,this.isLogin?this.getLotteryData(this.type):(0,a.toLogin)()},methods:{getLotteryData:function(e){var n=this;t.showLoading({title:"获取抽奖信息"}),(0,o.getLotteryData)(e).then((function(e){n.loading=!0,n.factor_num=e.data.lottery.factor_num,n.id=e.data.lottery.id,n.image=e.data.lottery.image,n.prize=e.data.lottery.prize,n.lottery_num=e.data.lottery_num,n.htmlData.data=e.data.lottery.content,n.is_content=e.data.lottery.is_content,n.is_personal_record=e.data.lottery.is_personal_record,n.is_all_record=e.data.lottery.is_all_record,n.factor=e.data.lottery.factor,n.userList.data=e.data.all_record,n.myList.data=e.data.user_record,n.prize.push({}),t.hideLoading()})).catch((function(e){t.hideLoading(),n.lotteryShow=!1,n.loading=!0,n.$util.Tips({title:e})}))},closeLottery:function(t){this.aleartStatus=!1,this.getLotteryData(this.type),6===this.alData.type&&(this.addressModel=!0)},getAddress:function(t){var e=this,n=t;n.id=this.alData.lottery_record_id,n.address=t.address.province+t.address.city+t.address.district+t.detail,(0,o.receiveLottery)(n).then((function(t){e.$util.Tips({title:"领取成功"}),e.addressModel=!1})).catch((function(t){e.$util.Tips({title:t})}))},getWiningIndex:function(t){var e=this;this.aleartType=0;var n=this;(0,o.startLottery)({id:this.id,type:this.type}).then((function(o){if("subscribe"===o.data.code)return n.$set(n,"followCode",!0),void(e.codeSrc=o.data.url);e.prize.forEach((function(n,a){o.data.id===n.id&&(e.alData=o.data,e.lottery_draw_param.winingIndex=a,t(e.lottery_draw_param))}))})).catch((function(t){e.$util.Tips({title:t})}))},luck_draw_finish:function(t){this.aleartType=2,this.aleartStatus=!0},qrR:function(t){this.codeSrc=t}}});e.default=y}).call(this,n("543d")["default"])},"91b93":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(){t.addressModel=!1})},r=[]},b01d:function(t,e,n){"use strict";n.r(e);var o=n("91b93"),a=n("ece3");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("1132");var i,c=n("f0c5"),d=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"3ba03948",null,!1,o["a"],i);e["default"]=d.exports},ece3:function(t,e,n){"use strict";n.r(e);var o=n("532d"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a}},[["516f","common/runtime","common/vendor"]]]);