(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/adsRecommend"],{"122e":function(n,t,e){"use strict";e.r(t);var a=e("4cfc"),i=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,(function(){return a[n]}))}(c);t["default"]=i.a},"4cfc":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("2c77"),i=getApp(),c={name:"adsRecommend",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(n,t){n&&(this.recommendList=n.imgList.list,this.isShow=n.isShow.val)}}},data:function(){return{recommendList:[],name:this.$options.name,isIframe:i.globalData.isIframe,isShow:!0}},created:function(){},mounted:function(){},methods:{goDetail:function(t){(0,a.goPage)(t).then((function(e){n.navigateTo({url:t.info[0].value})}))}}};t.default=c}).call(this,e("543d")["default"])},"692a":function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement;n._self._c},c=[]},"8fc2":function(n,t,e){"use strict";var a=e("c591"),i=e.n(a);i.a},c591:function(n,t,e){},e93d:function(n,t,e){"use strict";e.r(t);var a=e("692a"),i=e("122e");for(var c in i)"default"!==c&&function(n){e.d(t,n,(function(){return i[n]}))}(c);e("8fc2");var o,u=e("f0c5"),f=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/adsRecommend-create-component',
    {
        'pages/index/components/adsRecommend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e93d"))
        })
    },
    [['pages/index/components/adsRecommend-create-component']]
]);
