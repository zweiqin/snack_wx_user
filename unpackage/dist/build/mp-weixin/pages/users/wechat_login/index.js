(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/wechat_login/index"],{"0588":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("f00d"),i=(n("0dd7"),n("5baf")),a=c(n("4965")),s=(c(n("d4d2")),c(n("9676")));function c(e){return e&&e.__esModule?e:{default:e}}var d=getApp(),r=e.getSystemInfoSync().statusBarHeight+"px",u=function(){Promise.all([n.e("common/vendor"),n.e("components/login_mobile/index")]).then(function(){return resolve(n("e944"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/login_mobile/routine_phone").then(function(){return resolve(n("90cc"))}.bind(null,n)).catch(n.oe)},l={mixins:[s.default],data:function(){return{isUp:!1,phone:"",statusBarHeight:r,isHome:!1,isPhoneBox:!1,logoUrl:"",code:"",authKey:"",options:"",userInfo:{},codeNum:0,canUseGetUserProfile:!1}},components:{mobileLogin:u,routinePhone:f},onLoad:function(t){var n=this;e.getUserProfile&&(this.canUseGetUserProfile=!0),(0,o.getLogo)().then((function(e){n.logoUrl=e.data.logo_url}));a.default.getCode().then((function(e){n.code=e}));var i=getCurrentPages(),s=i[i.length-2];s&&"pages/order_addcart/order_addcart"==s.route?this.isHome=!0:this.isHome=!1},methods:{back:function(){e.navigateBack()},home:function(){e.switchTab({url:"/pages/index/index"})},maskClose:function(){this.isUp=!1},bindPhoneClose:function(e){e.isStatus?(this.isPhoneBox=!1,this.$util.Tips({title:"登录成功",icon:"success"},{tab:3})):this.isPhoneBox=!1},getphonenumber:function(t){var n=this;e.showLoading({title:"正在登录中"}),a.default.getCode().then((function(e){n.getUserPhoneNumber(t.detail.encryptedData,t.detail.iv,e)})).catch((function(t){e.$emit("closePage",!1),e.hideLoading()}))},getUserPhoneNumber:function(t,n,i){var a=this;(0,o.getUserPhone)({encryptedData:t,iv:n,code:i,spread_spid:d.globalData.spid,spread_code:d.globalData.code}).then((function(e){var t=e.data.expires_time-a.$Cache.time();a.$store.commit("LOGIN",{token:e.data.token,time:t}),a.userInfo=e.data.userInfo,a.$store.commit("SETUID",e.data.userInfo.uid),a.$store.commit("UPDATE_USERINFO",e.data.userInfo),a.$Cache.clear("snsapiKey"),a.$util.Tips({title:"登录成功",icon:"success"},{tab:3})})).catch((function(t){e.hideLoading()}))},getUserInfo:function(){var t=this;(0,i.getUserInfo)().then((function(n){e.hideLoading(),t.userInfo=n.data,t.$store.commit("SETUID",n.data.uid),t.$store.commit("UPDATE_USERINFO",n.data),t.$util.Tips({title:"登录成功",icon:"success"},{tab:3})}))},setUserInfo:function(t){var n=this;e.showLoading({title:"正在登录中"}),a.default.getCode().then((function(e){n.getWxUser(e)})).catch((function(t){e.hideLoading()}))},getUserProfile:function(){var t=this;e.showLoading({title:"正在登录中"});var n=this;a.default.getUserProfile().then((function(o){var i=o.userInfo;i.code=t.code,i.spread_spid=d.globalData.spid||t.$Cache.get("spread"),i.spread_code=d.globalData.code,a.default.authUserInfo(i).then((function(o){if(void 0!==o.data.key&&o.data.key)e.hideLoading(),n.authKey=o.data.key,n.isPhoneBox=!0;else{e.hideLoading();var i=o.data.expires_time-n.$Cache.time();n.$store.commit("LOGIN",{token:o.data.token,time:i}),t.getUserInfo()}})).catch((function(t){e.hideLoading(),e.showToast({title:t.msg,icon:"none",duration:2e3})}))})).catch((function(t){e.hideLoading()}))},getWxUser:function(t){var n=this;a.default.getUserInfo().then((function(o){var i=o.userInfo;i.code=t,i.spread_spid=d.globalData.spid,i.spread_code=d.globalData.code,a.default.authUserInfo(i).then((function(t){if(void 0!==t.data.key&&t.data.key)e.hideLoading(),n.authKey=t.data.key,n.isPhoneBox=!0;else{e.hideLoading();var o=t.data.expires_time-n.$Cache.time();n.$store.commit("LOGIN",{token:t.data.token,time:o}),n.$util.Tips({title:t.msg,icon:"success"},{tab:3})}})).catch((function(t){e.hideLoading(),e.showToast({title:t.msg,icon:"none",duration:2e3})}))})).catch((function(t){e.hideLoading()}))}}};t.default=l}).call(this,n("543d")["default"])},"0e47":function(e,t,n){"use strict";(function(e){n("384f");o(n("66fd"));var t=o(n("8755"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"46bd":function(e,t,n){"use strict";n.r(t);var o=n("0588"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},8755:function(e,t,n){"use strict";n.r(t);var o=n("c5e8"),i=n("46bd");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("c53f");var s,c=n("f0c5"),d=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=d.exports},c53f:function(e,t,n){"use strict";var o=n("fb83"),i=n.n(o);i.a},c5e8:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.isUp=!0})},a=[]},fb83:function(e,t,n){}},[["0e47","common/runtime","common/vendor"]]]);