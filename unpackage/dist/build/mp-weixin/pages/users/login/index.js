(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/login/index"],{"020c":function(t,e,n){"use strict";var i=n("4dbf"),r=n.n(i);r.a},"1cee":function(t,e,n){"use strict";(function(t){n("b632");i(n("66fd"));var e=i(n("98bb"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"4dbf":function(t,e,n){},"5a71":function(t,e,n){"use strict";n.r(e);var i=n("cbf4"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"671f":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.current=1},t.e1=function(e){t.current=0})},a=[]},"71e9":function(t,e,n){"use strict";var i=n("bee2"),r=n.n(i);r.a},"98bb":function(t,e,n){"use strict";n.r(e);var i=n("671f"),r=n("5a71");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("020c"),n("71e9");var c,o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=u.exports},bee2:function(t,e,n){},cbf4:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=p(n("a34a")),r=(p(n("554b")),p(n("2534"))),a=n("7875"),c=(f(n("5562")),n("0d9b"),n("e5ac")),o=n("a07c"),u=p(n("4757"));function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function f(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var a=i?Object.getOwnPropertyDescriptor(t,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=t[r]}return n.default=t,e&&e.set(t,n),n}function p(t){return t&&t.__esModule?t:{default:t}}function l(t,e,n,i,r,a,c){try{var o=t[a](c),u=o.value}catch(s){return void n(s)}o.done?e(u):Promise.resolve(u).then(i,r)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function c(t){l(a,i,r,c,o,"next",t)}function o(t){l(a,i,r,c,o,"throw",t)}c(void 0)}))}}var h="login_back_url",g={name:"Login",mixins:[r.default,u.default],data:function(){return{navList:["快速登录","账号登录"],current:1,account:"",password:"",captcha:"",formItem:1,type:"login",logoUrl:"",keyCode:"",codeUrl:"",codeVal:"",isShowCode:!1,appLoginStatus:!1,appUserInfo:null,appleLoginStatus:!1,appleUserInfo:null,appleShow:!1,keyLock:!0}},watch:{formItem:function(t,e){this.type=1==t?"login":"register"}},onLoad:function(){var e=this,n=this;t.getSystemInfo({success:function(t){"ios"==t.platform.toLowerCase()&&e.getSystem(t.system)&&(n.appleShow=!0)}})},mounted:function(){this.getLogoImage()},methods:{getSystem:function(t){var e;return e=-1===t.toLowerCase().indexOf("ios")?t:t.split(" ")[1],e.indexOf(".")?e.split(".")[0]>=13:e>=13},appleLogin:function(){var e=this;this.account="",this.captcha="",t.showLoading({title:"登录中"}),t.login({provider:"apple",timeout:1e4,success:function(n){t.getUserInfo({provider:"apple",success:function(t){e.appleUserInfo=t.userInfo,e.appleLoginApi()},fail:function(){t.showToast({title:"获取用户信息失败",icon:"none",duration:2e3})},complete:function(){t.hideLoading()}})},fail:function(t){}})},appleLoginApi:function(){var e=this;(0,a.appleLogin)({openId:e.appleUserInfo.openId,email:e.appleUserInfo.email||"",phone:this.account,captcha:this.captcha}).then((function(n){var i=n.data;if(i.isbind)t.showModal({title:"提示",content:"请绑定手机号后，继续操作",showCancel:!1,success:function(t){t.confirm&&(e.current=1,e.appleLoginStatus=!0)}});else{e.$store.commit("LOGIN",{token:i.token,time:i.expires_time-e.$Cache.time()});var r=e.$Cache.get(h)||"/pages/index/index";e.$Cache.clear(h),e.$store.commit("SETUID",i.userInfo.uid),t.reLaunch({url:r})}})).catch((function(e){t.showModal({title:"提示",content:"错误信息".concat(e),success:function(t){t.confirm||t.cancel}})}))},wxLogin:function(){var e=this;this.account="",this.captcha="",t.showLoading({title:"登录中"}),t.login({provider:"weixin",success:function(n){t.getUserInfo({provider:"weixin",success:function(t){e.appUserInfo=t.userInfo,e.wxLoginApi()},fail:function(){t.showToast({title:"获取用户信息失败",icon:"none",duration:2e3})},complete:function(){t.hideLoading()}})},fail:function(){t.showToast({title:"登录失败",icon:"none",duration:2e3})}})},wxLoginApi:function(){var e=this;wechatAppAuth({userInfo:e.appUserInfo,phone:this.account,code:this.captcha}).then((function(n){var i=n.data;if(i.isbind)t.showModal({title:"提示",content:"请绑定手机号后，继续操作",showCancel:!1,success:function(t){t.confirm&&(e.current=1,e.appLoginStatus=!0)}});else{e.$store.commit("LOGIN",{token:i.token,time:i.expires_time-e.$Cache.time()});var r=e.$Cache.get(h)||"/pages/index/index";e.$Cache.clear(h),e.$store.commit("SETUID",i.userInfo.uid),t.reLaunch({url:r})}})).catch((function(e){t.showModal({title:"提示",content:"错误信息".concat(e),success:function(t){t.confirm||t.cancel}})}))},again:function(){this.codeUrl=o.VUE_APP_API_URL+"/sms_captcha?key="+this.keyCode+Date.parse(new Date)},code:function(){var t=this;(0,a.getCodeApi)().then((function(e){t.keyCode=e.data.key,t.getCode()})).catch((function(e){t.$util.Tips({title:e})}))},getLogoImage:function(){var t=this;return d(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,(0,c.getLogo)(2).then((function(t){n.logoUrl=t.data.logo_url}));case 2:case"end":return e.stop()}}),e)})))()},loginMobile:function(){var e=this;return d(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e,r.account){n.next=3;break}return n.abrupt("return",r.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(r.account)){n.next=5;break}return n.abrupt("return",r.$util.Tips({title:"请输入正确的手机号码"}));case 5:if(r.captcha){n.next=7;break}return n.abrupt("return",r.$util.Tips({title:"请填写验证码"}));case 7:if(/^[\w\d]+$/i.test(r.captcha)){n.next=9;break}return n.abrupt("return",r.$util.Tips({title:"请输入正确的验证码"}));case 9:if(!r.appLoginStatus){n.next=13;break}r.wxLoginApi(),n.next=23;break;case 13:if(!r.appleLoginStatus){n.next=17;break}r.appleLoginApi(),n.next=23;break;case 17:if(!e.keyLock){n.next=21;break}e.keyLock=!e.keyLock,n.next=22;break;case 21:return n.abrupt("return",r.$util.Tips({title:"请勿重复点击"}));case 22:(0,a.loginMobile)({phone:r.account,captcha:r.captcha,spread:r.$Cache.get("spread")}).then((function(n){var i=n.data;r.$store.commit("LOGIN",{token:i.token,time:i.expires_time-e.$Cache.time()});var c=r.$Cache.get(h)||"/pages/index/index";r.$Cache.clear(h),(0,a.getUserInfo)().then((function(n){e.keyLock=!0,r.$store.commit("SETUID",n.data.uid),-1!==c.indexOf("/pages/users/login/index")&&(c="/pages/index/index"),t.reLaunch({url:c})}))})).catch((function(t){e.keyLock=!0,r.$util.Tips({title:t})}));case 23:case"end":return n.stop()}}),n)})))()},register:function(){var t=this;return d(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 5:if(n.captcha){e.next=7;break}return e.abrupt("return",n.$util.Tips({title:"请填写验证码"}));case 7:if(/^[\w\d]+$/i.test(n.captcha)){e.next=9;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的验证码"}));case 9:if(n.password){e.next=11;break}return e.abrupt("return",n.$util.Tips({title:"请填写密码"}));case 11:if(!/^([0-9]|[a-z]|[A-Z]){0,6}$/i.test(n.password)){e.next=13;break}return e.abrupt("return",n.$util.Tips({title:"您输入的密码过于简单"}));case 13:(0,a.register)({account:n.account,captcha:n.captcha,password:n.password,spread:n.$Cache.get("spread")}).then((function(t){n.$util.Tips({title:t}),n.formItem=1})).catch((function(t){n.$util.Tips({title:t})}));case 14:case"end":return e.stop()}}),e)})))()},getCode:function(){var t=this;return d(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 5:return 2==n.formItem&&(n.type="register"),e.next=8,(0,a.registerVerify)({phone:n.account,type:n.type,key:n.keyCode,code:n.codeVal}).then((function(t){n.$util.Tips({title:t.msg}),n.sendCode()})).catch((function(t){n.$util.Tips({title:t})}));case 8:case"end":return e.stop()}}),e)})))()},navTap:function(t){this.current=t},submit:function(){var e=this;return d(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e,r.account){n.next=3;break}return n.abrupt("return",r.$util.Tips({title:"请填写账号"}));case 3:if(/^[\w\d]{5,16}$/i.test(r.account)){n.next=5;break}return n.abrupt("return",r.$util.Tips({title:"请输入正确的账号"}));case 5:if(r.password){n.next=7;break}return n.abrupt("return",r.$util.Tips({title:"请填写密码"}));case 7:if(!e.keyLock){n.next=11;break}e.keyLock=!e.keyLock,n.next=12;break;case 11:return n.abrupt("return",r.$util.Tips({title:"请勿重复点击"}));case 12:(0,a.loginH5)({account:r.account,password:r.password,spread:r.$Cache.get("spread")}).then((function(n){var i=n.data;r.$store.commit("LOGIN",{token:i.token,time:i.expires_time-e.$Cache.time()});var c=r.$Cache.get(h)||"/pages/index/index";r.$Cache.clear(h),(0,a.getUserInfo)().then((function(n){e.keyLock=!0,r.$store.commit("SETUID",n.data.uid),t.reLaunch({url:c})})).catch((function(t){e.keyLock=!0}))})).catch((function(t){e.keyLock=!0,r.$util.Tips({title:t})}));case 13:case"end":return n.stop()}}),n)})))()}}};e.default=g}).call(this,n("543d")["default"])}},[["1cee","common/runtime","common/vendor"]]]);