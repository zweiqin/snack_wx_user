(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/scrollBox"],{"164c":function(t,n,i){"use strict";var e=i("fd9e"),a=i.n(e);a.a},"2a9c":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},8231:function(t,n,i){"use strict";i.r(n);var e=i("2a9c"),a=i("e1bd");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("164c");var f,c=i("f0c5"),s=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],f);n["default"]=s.exports},"90bf":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i("9a3b"),a=i("0dd8"),o=getApp(),f={name:"scrollBox",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.numConfig=t.numConfig.val,this.isShow=t.isShow.val,this.tabConfig=t.tabConfig?t.tabConfig.tabVal:0,this.selectConfig=t.selectConfig.activeValue,this.titleInfo=t.titleInfo.list,this.tabConfig?this.fastList=t.goodsList.list:this.category())}}},created:function(){},mounted:function(){},data:function(){return{fastInfo:"上百种商品分类任您选择",fastList:[],name:this.$options.name,isShow:!0,isIframe:o.globalData.isIframe,numConfig:0,selectConfig:0,tabConfig:0,titleInfo:[]}},methods:{gopage:function(n){(0,e.goPage)().then((function(i){t.navigateTo({url:n})}))},category:function(){var t=this;(0,a.category)({pid:this.selectConfig,limit:this.numConfig}).then((function(n){t.fastList=n.data}))}}};n.default=f}).call(this,i("543d")["default"])},e1bd:function(t,n,i){"use strict";i.r(n);var e=i("90bf"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},fd9e:function(t,n,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/scrollBox-create-component',
    {
        'pages/index/components/scrollBox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8231"))
        })
    },
    [['pages/index/components/scrollBox-create-component']]
]);
