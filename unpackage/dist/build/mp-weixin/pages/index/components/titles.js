(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/titles"],{"0d09":function(t,n,e){"use strict";e.r(n);var i=e("ccfc"),a=e.n(i);for(var f in i)"default"!==f&&function(t){e.d(n,t,(function(){return i[t]}))}(f);n["default"]=a.a},"168f":function(t,n,e){"use strict";var i=e("424d"),a=e.n(i);a.a},"24e5":function(t,n,e){"use strict";e.r(n);var i=e("8f31"),a=e("0d09");for(var f in a)"default"!==f&&function(t){e.d(n,t,(function(){return a[t]}))}(f);e("168f");var o,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=c.exports},"424d":function(t,n,e){},"8f31":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return f})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement;t._self._c},f=[]},ccfc:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=getApp(),a={name:"titles",props:{dataConfig:{type:Object,default:function(){}},sty:{type:String,default:"on"}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.titleConfig=t.titleInfo.list,this.isShow=t.isShow.val)}}},data:function(){return{titleConfig:{},name:this.$options.name,isIframe:!1,isShow:!0}},created:function(){this.isIframe=i.globalData.isIframe},mounted:function(){},methods:{}};n.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/titles-create-component',
    {
        'pages/index/components/titles-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("24e5"))
        })
    },
    [['pages/index/components/titles-create-component']]
]);
