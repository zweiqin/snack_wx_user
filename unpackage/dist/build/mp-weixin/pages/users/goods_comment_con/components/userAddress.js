(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/goods_comment_con/components/userAddress"],{"1c47":function(t,i,e){},"4e04":function(t,i,e){"use strict";var n=e("1c47"),s=e.n(n);s.a},"4f68":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var s=function(){var t=this,i=t.$createElement;t._self._c},r=[]},"57a0":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("8540"),s=e("94c0"),r=e("7edb"),c=e("26cb"),o=function(){e.e("components/Authorize").then(function(){return resolve(e("9442"))}.bind(null,e)).catch(e.oe)},u=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("6fc8"))}.bind(null,e)).catch(e.oe)},a={components:{authorize:o,home:u},props:{aleartStatus:{type:Boolean,default:!1}},data:function(){return{regionDval:["浙江省","杭州市","滨江区"],id:0,userAddress:{is_default:!1},region:["省","市","区"],valueRegion:[0,0,0],isAuto:!1,isShowAuth:!1,district:[],multiArray:[],multiIndex:[0,0,0],cityId:0,defaultRegion:["广东省","广州市","番禺区"],defaultRegionCode:"110101"}},computed:(0,c.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,i){t&&this.getUserAddress()},deep:!0}},created:function(t){this.isLogin?(this.getCityList(),this.getUserAddress()):(0,r.toLogin)()},methods:{getCityList:function(){var t=this,i=this;(0,s.getCity)().then((function(e){t.district=e.data,i.initialize()}))},initialize:function(){var t=this,i=[],e=[],n=[];if(t.district.length){var s=t.district[0].c||[],r=s.length&&s[0].c||[];t.district.forEach((function(t){i.push(t.n)})),s.forEach((function(t){e.push(t.n)})),r.forEach((function(t){n.push(t.n)})),this.multiArray=[i,e,n]}},bindRegionChange:function(t){var i=this.multiIndex,e=this.district[i[0]]||{c:[]},n=e.c[i[1]]||{v:0},s=this.multiArray,r=t.detail.value;this.region=[s[0][r[0]],s[1][r[1]],s[2][r[2]]],this.cityId=n.v,this.valueRegion=[0,0,0],this.initialize()},bindMultiPickerColumnChange:function(t){var i=this,e=t.detail.column,n=t.detail.value,s=this.district[n]||{c:[]},r=i.multiArray,c=i.multiIndex;switch(c[e]=n,e){case 0:var o=s.c[0]||{c:[]};r[1]=s.c.map((function(t){return t.n})),r[2]=o.c.map((function(t){return t.n}));break;case 1:var u=i.district[c[0]].c[c[1]].c||[];r[2]=u.map((function(t){return t.n}));break;case 2:break}this.$set(this.multiArray,0,r[0]),this.$set(this.multiArray,1,r[1]),this.$set(this.multiArray,2,r[2]),this.multiIndex=c},onLoadFun:function(){this.getUserAddress()},authColse:function(t){this.isShowAuth=t},toggleTab:function(t){this.$refs[t].show()},onConfirm:function(t){this.region=t.checkArr[0]+"-"+t.checkArr[1]+"-"+t.checkArr[2]},getUserAddress:function(){if(!this.id)return!1;var t=this;(0,n.getAddressDetail)(this.id).then((function(i){var e=[i.data.province,i.data.city,i.data.district];t.$set(t,"userAddress",i.data),t.$set(t,"region",e),t.cityId=i.data.city_id}))},getWxAddress:function(){var i=this;t.authorize({scope:"scope.address",success:function(e){t.chooseAddress({success:function(e){var s={};s.province=e.provinceName,s.city=e.cityName,s.district=e.countyName,(0,n.editAddress)({address:s,is_default:1,real_name:e.userName,post_code:e.postalCode,phone:e.telNumber,detail:e.detailInfo,id:0,type:1}).then((function(e){return setTimeout((function(){if(i.cartId){i.cartId,i.pinkId,i.couponId;i.cartId="",i.pinkId="",i.couponId="",t.navigateTo({url:i.id})}else t.navigateBack({delta:1})}),1e3),i.$util.Tips({title:"添加成功",icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},fail:function(t){if("chooseAddress:cancel"==t.errMsg)return i.$util.Tips({title:"取消选择"})}})},fail:function(e){t.showModal({title:"您已拒绝导入微信地址权限",content:"是否进入权限管理，调整授权？",success:function(e){if(e.confirm)t.openSetting({success:function(t){}});else if(e.cancel)return i.$util.Tips({title:"已取消！"})}})}})},getAddress:function(){var i=this,e=this;e.$wechat.openAddress().then((function(s){(0,n.editAddress)({id:i.id,real_name:s.userName,phone:s.telNumber,address:{province:s.provinceName,city:s.cityName,district:s.countryName},detail:s.detailInfo,is_default:1,post_code:s.postalCode,type:1}).then((function(){setTimeout((function(){t.navigateTo({url:e.id})}),1e3),e.$util.Tips({title:"添加成功",icon:"success"})})).catch((function(t){return e.$util.Tips({title:t||"添加失败"})}))})).catch((function(t){}))},formSubmit:function(t){var i=this,e=t.detail.value;if(!e.name)return i.$util.Tips({title:"请填写收货人姓名"});if(!e.phone)return i.$util.Tips({title:"请填写联系电话"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(e.phone))return i.$util.Tips({title:"请输入正确的手机号码"});if("省"==i.region[0])return i.$util.Tips({title:"请选择所在地区"});if(!e.detail)return i.$util.Tips({title:"请填写详细地址"});var n=i.region;e.address={province:n[0],city:n[1],district:n[2],city_id:i.cityId},this.$emit("getAddress",e)},posterImageClose:function(){this.$emit("close",!1)}}};i.default=a}).call(this,e("543d")["default"])},7481:function(t,i,e){"use strict";e.r(i);var n=e("57a0"),s=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=s.a},e15c:function(t,i,e){"use strict";e.r(i);var n=e("4f68"),s=e("7481");for(var r in s)"default"!==r&&function(t){e.d(i,t,(function(){return s[t]}))}(r);e("4e04");var c,o=e("f0c5"),u=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"11c2eee8",null,!1,n["a"],c);i["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/users/goods_comment_con/components/userAddress-create-component',
    {
        'pages/users/goods_comment_con/components/userAddress-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e15c"))
        })
    },
    [['pages/users/goods_comment_con/components/userAddress-create-component']]
]);
