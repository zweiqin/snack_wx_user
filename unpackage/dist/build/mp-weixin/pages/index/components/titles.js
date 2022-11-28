(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/titles"],{"09a2":function(t,n,e){},"37f2":function(t,n,e){"use strict";e.r(n);var a=e("e191"),i=e.n(a);for(var f in a)"default"!==f&&function(t){e.d(n,t,(function(){return a[t]}))}(f);n["default"]=i.a},"4f4f5":function(t,n,e){"use strict";var a=e("09a2"),i=e.n(a);i.a},c171:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return f})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},f=[]},e191:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=getApp(),i={name:"titles",props:{dataConfig:{type:Object,default:function(){}},sty:{type:String,default:"on"}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.titleConfig=t.titleInfo.list,this.isShow=t.isShow.val)}}},data:function(){return{titleConfig:{},name:this.$options.name,isIframe:!1,isShow:!0}},created:function(){this.isIframe=a.globalData.isIframe},mounted:function(){},methods:{}};n.default=i},e85a:function(t,n,e){"use strict";e.r(n);var a=e("c171"),i=e("37f2");for(var f in i)"default"!==f&&function(t){e.d(n,t,(function(){return i[t]}))}(f);e("4f4f5");var o,u=e("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/titles-create-component',
    {
        'pages/index/components/titles-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e85a"))
        })
    },
    [['pages/index/components/titles-create-component']]
]);
