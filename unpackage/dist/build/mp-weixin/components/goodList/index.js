(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/goodList/index"],{"2b6d":function(t,n,e){},"303e":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement;t._self._c},o=[]},4546:function(t,n,e){"use strict";e.r(n);var a=e("303e"),u=e("a2a9");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("5a0b");var i,r=e("f0c5"),c=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"48f8e84b",null,!1,a["a"],i);n["default"]=c.exports},"5a0b":function(t,n,e){"use strict";var a=e("2b6d"),u=e.n(a);u.a},"8bac":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("26cb"),u=e("d47c"),o={computed:(0,a.mapGetters)(["uid"]),props:{status:{type:Number,default:0},bastList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(n){var e=this;(0,u.goPage)().then((function(a){(0,u.goShopDetail)(n,e.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}))}}};n.default=o}).call(this,e("543d")["default"])},a2a9:function(t,n,e){"use strict";e.r(n);var a=e("8bac"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goodList/index-create-component',
    {
        'components/goodList/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4546"))
        })
    },
    [['components/goodList/index-create-component']]
]);
