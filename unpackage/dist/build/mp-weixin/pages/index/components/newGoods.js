(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/newGoods"],{1712:function(t,e,n){"use strict";n.r(e);var i=n("f379"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},2484:function(t,e,n){},"6b00":function(t,e,n){"use strict";var i=n("2484"),o=n.n(i);o.a},b656:function(t,e,n){"use strict";n.r(e);var i=n("ba9c"),o=n("1712");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("6b00");var s,a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=c.exports},ba9c:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},r=[]},f379:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("d47c"),o=n("26cb"),r=n("4c77"),s=a(n("8e3e"));function a(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=getApp(),d={name:"goodList",mixins:[s.default],props:{dataConfig:{type:Object,default:function(){}}},computed:u({},(0,o.mapGetters)(["uid"])),watch:{dataConfig:{immediate:!0,handler:function(t,e){t&&(this.isShow=t.isShow.val,this.selectType=t.tabConfig.tabVal,this.$set(this,"selectId",t.selectConfig.activeValue),this.$set(this,"type",t.selectSortConfig.activeValue),this.salesOrder=1==t.goodsSort.type?"desc":"",this.newsOrder=2==t.goodsSort.type?"news":"",this.ids=t.ids?t.ids.join(","):"",this.numConfig=t.numConfig.val,this.titleInfo=t.titleInfo.list,this.productslist())}}},created:function(){},mounted:function(){},data:function(){return{firstList:[],firstInfo:"多个优质商品最新上架",name:this.$options.name,isShow:!0,isIframe:f.globalData.isIframe,selectType:0,selectId:"",salesOrder:"",newsOrder:"",ids:"",page:1,limit:this.$config.LIMIT,type:"",numConfig:0,titleInfo:[]}},methods:{productslist:function(){var t=this,e={};e=t.selectType?{page:t.page,limit:t.limit,type:t.type,ids:t.ids,selectType:t.selectType}:{page:t.page,limit:t.numConfig<=t.limit?t.numConfig:t.limit,type:t.type,newsOrder:t.newsOrder,salesOrder:t.salesOrder,selectId:t.selectId,selectType:t.selectType},(0,r.getHomeProducts)(e).then((function(e){t.firstList=e.data.list})).catch((function(e){t.$util.Tips({title:e})}))},gopage:function(e){(0,i.goPage)().then((function(n){t.navigateTo({url:e})}))},goDetail:function(e){var n=this;(0,i.goPage)().then((function(o){(0,i.goShopDetail)(e,n.uid).then((function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))}))}}};e.default=d}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/newGoods-create-component',
    {
        'pages/index/components/newGoods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b656"))
        })
    },
    [['pages/index/components/newGoods-create-component']]
]);
