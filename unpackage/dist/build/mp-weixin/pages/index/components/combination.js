(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/combination"],{"4c1f":function(t,e,i){"use strict";i.r(e);var n=i("91fc"),s=i("6e16");for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("6ee5");var a,c=i("f0c5"),l=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=l.exports},"6e16":function(t,e,i){"use strict";i.r(e);var n=i("c3b0"),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=s.a},"6ee5":function(t,e,i){"use strict";var n=i("c47f"),s=i.n(n);s.a},"91fc":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement;t._self._c},o=[]},c3b0:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("d47c"),s=i("4c77"),o=getApp(),a={name:"combination",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,e){t&&(this.isShow=t.isShow.val,this.selectType=t.tabConfig.tabVal,this.$set(this,"selectId",t.selectConfig.activeValue),this.$set(this,"type",t.titleInfo.type),this.salesOrder=1==t.goodsSort.type?"desc":"",this.newsOrder=2==t.goodsSort.type?"news":"",this.ids=t.ids?t.ids.join(","):"",this.numConfig=t.numConfig.val,this.productslist())}}},data:function(){return{combinationList:[],name:this.$options.name,isIframe:o.globalData.isIframe,isShow:!0,selectType:0,selectId:"",salesOrder:"",newsOrder:"",ids:"",page:1,limit:this.$config.LIMIT,type:"",numConfig:0}},created:function(){},mounted:function(){},methods:{productslist:function(){var t=this,e={};e=t.selectType?{page:t.page,limit:t.limit,type:t.type,ids:t.ids,selectType:t.selectType}:{page:t.page,limit:t.numConfig<=t.limit?t.numConfig:t.limit,type:t.type,newsOrder:t.newsOrder,salesOrder:t.salesOrder,selectId:t.selectId,selectType:t.selectType},(0,s.getHomeProducts)(e).then((function(e){t.combinationList=e.data.list})).catch((function(e){t.$util.Tips({title:e})}))},goDetail:function(e){(0,n.goPage)(e).then((function(i){t.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(e.id)})}))}}};e.default=a}).call(this,i("543d")["default"])},c47f:function(t,e,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/combination-create-component',
    {
        'pages/index/components/combination-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4c1f"))
        })
    },
    [['pages/index/components/combination-create-component']]
]);
