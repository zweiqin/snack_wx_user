(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/promotionGood/index"],{2122:function(t,n,e){},"66e7":function(t,n,e){"use strict";var u=e("2122"),a=e.n(u);a.a},"682a":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"94f4":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),a=e("2c77"),o=i(e("4757"));function i(t){return t&&t.__esModule?t:{default:t}}var r={computed:(0,u.mapGetters)(["uid"]),mixins:[o.default],props:{benefit:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(n){var e=this;(0,a.goPage)().then((function(u){(0,a.goShopDetail)(n,e.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}))}}};n.default=r}).call(this,e("543d")["default"])},"9ab3":function(t,n,e){"use strict";e.r(n);var u=e("94f4"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=a.a},b048:function(t,n,e){"use strict";e.r(n);var u=e("682a"),a=e("9ab3");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("66e7");var i,r=e("f0c5"),c=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,"2bd95962",null,!1,u["a"],i);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/promotionGood/index-create-component',
    {
        'components/promotionGood/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b048"))
        })
    },
    [['components/promotionGood/index-create-component']]
]);
