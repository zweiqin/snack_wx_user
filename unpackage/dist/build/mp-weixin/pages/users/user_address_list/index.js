(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_address_list/index"],{"820f":function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return d})),i.d(e,"a",(function(){return s}));var n=function(){var t=this,e=t.$createElement;t._self._c},d=[]},"8f60":function(t,e,i){"use strict";(function(t){i("384f");s(i("66fd"));var e=s(i("e4e2"));function s(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},be1d:function(t,e,i){"use strict";var s=i("edd3"),n=i.n(s);n.a},e4e2:function(t,e,i){"use strict";i.r(e);var s=i("820f"),n=i("fb58");for(var d in n)"default"!==d&&function(t){i.d(e,t,(function(){return n[t]}))}(d);i("be1d");var o,r=i("f0c5"),u=Object(r["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],o);e["default"]=u.exports},edd3:function(t,e,i){},fb58:function(t,e,i){"use strict";i.r(e);var s=i("fd80"),n=i.n(s);for(var d in s)"default"!==d&&function(t){i.d(e,t,(function(){return s[t]}))}(d);e["default"]=n.a},fd80:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("5baf"),n=i("5047"),d=i("26cb"),o=r(i("9676"));function r(t){return t&&t.__esModule?t:{default:t}}var u=function(){i.e("components/Authorize").then(function(){return resolve(i("3474"))}.bind(null,i)).catch(i.oe)},c=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("45a7"))}.bind(null,i)).catch(i.oe)},a={components:{authorize:u,home:c},mixins:[o.default],data:function(){return{addressList:[],cartId:"",pinkId:0,couponId:0,loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:20,isAuto:!1,isShowAuth:!1,news:"",noCoupon:0}},computed:(0,d.mapGetters)(["isLogin"]),onLoad:function(t){this.isLogin?(this.cartId=t.cartId||"",this.noCoupon=t.noCoupon||0,this.pinkId=t.pinkId||0,this.couponId=t.couponId||0,this.news=t.news||0,this.getAddressList(!0)):(0,n.toLogin)()},onShow:function(){var t=this;t.getAddressList(!0)},methods:{onLoadFun:function(){this.getAddressList()},authColse:function(t){this.isShowAuth=t},getWxAddress:function(){var e=this;t.authorize({scope:"scope.address",success:function(i){t.chooseAddress({success:function(t){var i={};i.province=t.provinceName,i.city=t.cityName,i.district=t.countyName,(0,s.editAddress)({address:i,is_default:1,real_name:t.userName,post_code:t.postalCode,phone:t.telNumber,detail:t.detailInfo,id:0,type:1}).then((function(t){e.$util.Tips({title:"添加成功",icon:"success"},(function(){e.getAddressList(!0)}))})).catch((function(t){return e.$util.Tips({title:t})}))},fail:function(t){if("chooseAddress:cancel"==t.errMsg)return e.$util.Tips({title:"取消选择"})}})},fail:function(i){t.showModal({title:"您已拒绝导入微信地址权限",content:"是否进入权限管理，调整授权？",success:function(i){if(i.confirm)t.openSetting({success:function(t){}});else if(i.cancel)return e.$util.Tips({title:"已取消！"})}})}})},getAddress:function(){var t=this;t.$wechat.openAddress().then((function(e){(0,s.editAddress)({real_name:e.userName,phone:e.telNumber,address:{province:e.provinceName,city:e.cityName,district:e.countryName},detail:e.detailInfo,post_code:e.postalCode,is_default:1,type:1}).then((function(){t.$util.Tips({title:"添加成功",icon:"success"},(function(){t.getAddressList(!0)}))})).catch((function(e){return t.$util.Tips({title:e||"添加失败"})}))}))},getAddressList:function(t){var e=this;t&&(e.loadend=!1,e.page=1,e.$set(e,"addressList",[])),e.loading||e.loadend||(e.loading=!0,e.loadTitle="",(0,s.getAddressList)({page:e.page,limit:e.limit}).then((function(t){var i=t.data,s=i.length<e.limit;e.addressList=e.$util.SplitArray(i,e.addressList),e.$set(e,"addressList",e.addressList),e.loadend=s,e.loadTitle=s?"我也是有底线的":"加载更多",e.page=e.page+1,e.loading=!1})).catch((function(t){e.loading=!1,e.loadTitle="加载更多"})))},radioChange:function(t){var e=parseInt(t.detail.value),i=this,n=this.addressList[e];if(void 0==n)return i.$util.Tips({title:"您设置的默认地址不存在!"});(0,s.setAddressDefault)(n.id).then((function(t){for(var s=0,n=i.addressList.length;s<n;s++)i.addressList[s].is_default=s==e;i.$util.Tips({title:"设置成功",icon:"success"},(function(){i.$set(i,"addressList",i.addressList)}))})).catch((function(t){return i.$util.Tips({title:t})}))},editAddress:function(e){var i=this.cartId,s=this.pinkId,n=this.couponId;this.cartId="",this.pinkId="",this.couponId="",t.navigateTo({url:"/pages/users/user_address/index?id="+e+"&cartId="+i+"&pinkId="+s+"&couponId="+n+"&new="+this.news})},delAddress:function(t){var e=this,i=this.addressList[t];if(void 0==i)return e.$util.Tips({title:"您删除的地址不存在!"});(0,s.delAddress)(i.id).then((function(i){e.$util.Tips({title:"删除成功",icon:"success"},(function(){e.addressList.splice(t,1),e.$set(e,"addressList",e.addressList)}))})).catch((function(t){return e.$util.Tips({title:t})}))},addAddress:function(){var e=this.cartId,i=this.pinkId,s=this.couponId;this.cartId="",this.pinkId="",this.couponId="",t.navigateTo({url:"/pages/users/user_address/index?cartId="+e+"&pinkId="+i+"&couponId="+s+"&new="+this.news})},goOrder:function(e){var i="",s="",n="";this.cartId&&e&&(i=this.cartId,s=this.pinkId,n=this.couponId,this.cartId="",this.pinkId="",this.couponId="",t.redirectTo({url:"/pages/users/order_confirm/index?is_address=1&new="+this.news+"&cartId="+i+"&addressId="+e+"&pinkId="+s+"&couponId="+n+"&noCoupon="+this.noCoupon}))}},onReachBottom:function(){this.getAddressList()}};e.default=a}).call(this,i("543d")["default"])}},[["8f60","common/runtime","common/vendor"]]]);