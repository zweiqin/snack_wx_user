(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/Authorize"],{"0e71":function(t,e,n){"use strict";n.r(e);var o=n("7811"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"6e1d":function(t,e,n){"use strict";var o=n("c557"),a=n.n(o);a.a},7811:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n("8918")),a=n("d1d4"),i=n("7830"),u=n("26cb"),d=c(n("2804")),s=c(n("d0d9"));function c(t){return t&&t.__esModule?t:{default:t}}var r=getApp(),l={name:"Authorize",props:{isAuto:{type:Boolean,default:!0},isGoIndex:{type:Boolean,default:!0},isShowAuth:{type:Boolean,default:!1}},data:function(){return{logoUrl:"",authKey:""}},computed:(0,u.mapGetters)(["isLogin","userInfo"]),watch:{isLogin:function(t){!0===t&&this.$emit("onLoadFun",this.userInfo)}},mounted:function(){this.getLogoUrl();var t=this;this.isLogin||o.default.has(i.STATE_R_KEY)?this.setAuthStatus():wx.login({success:function(e){o.default.set(i.STATE_R_KEY,e.code,10800);var n=r.globalData.spid?r.globalData.spid:"";(0,a.silenceAuth)({code:e.code,spread:n,spid:r.globalData.code}).then((function(e){if(void 0!==e.data.key&&e.data.key)t.authKey=e.data.key;else{r.globalData.code=0;var n=e.data.expires_time-o.default.time();s.default.commit("LOGIN",{token:e.data.token,time:n})}})).catch((function(t){}))}})},methods:{setAuthStatus:function(){var t=this;d.default.authorize().then((function(e){!1===e.islogin?t.setUserInfo():t.$emit("onLoadFun",t.userInfo)})).catch((function(e){t.isAuto&&t.$emit("authColse",!0)}))},getUserInfo:function(e){var n=this;d.default.getUserInfo().then((function(o){var a=o.userInfo;a.code=e,a.spread_spid=r.globalData.spid,a.spread_code=r.globalData.code,d.default.authUserInfo(a).then((function(e){t.hideLoading(),n.$emit("authColse",!1),n.$emit("onLoadFun",n.userInfo)})).catch((function(e){t.hideLoading(),t.showToast({title:e.msg,icon:"none",duration:2e3})}))})).catch((function(e){t.hideLoading()}))},getUserPhoneNumber:function(e,n,o){var i=this;(0,a.getUserPhone)({encryptedData:e,iv:n,code:o,spid:r.globalData.spid,spread:r.globalData.code}).then((function(e){var n=e.data.expires_time-i.$Cache.time();i.$store.commit("LOGIN",{token:e.data.token,time:n}),i.$emit("authColse",!1),i.$emit("onLoadFun",e.data.userInfo),t.hideLoading()})).catch((function(e){t.hideLoading()}))},setUserInfo:function(e){var n=this;t.showLoading({title:"正在登录中"}),d.default.getCode().then((function(t){n.getUserPhoneNumber(e.detail.encryptedData,e.detail.iv,t)})).catch((function(e){t.hideLoading()}))},getLogoUrl:function(){var t=this;o.default.has(i.LOGO_URL)?this.logoUrl=o.default.get(i.LOGO_URL):(0,a.getLogo)().then((function(e){t.logoUrl=e.data.logo_url,o.default.set(i.LOGO_URL,t.logoUrl)}))},close:function(){var e=getCurrentPages();e[e.length-1];this.isGoIndex?t.navigateTo({url:"/pages/index/index"}):this.$emit("authColse",!1)}}};e.default=l}).call(this,n("543d")["default"])},9442:function(t,e,n){"use strict";n.r(e);var o=n("e6a5"),a=n("0e71");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("6e1d");var u,d=n("f0c5"),s=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,"03cc894a",null,!1,o["a"],u);e["default"]=s.exports},c557:function(t,e,n){},e6a5:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/Authorize-create-component',
    {
        'components/Authorize-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9442"))
        })
    },
    [['components/Authorize-create-component']]
]);
