(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/recommend/index"],{"640d":function(t,n,e){"use strict";var u=e("dbb7"),a=e.n(u);a.a},"8f9d":function(t,n,e){"use strict";e.r(n);var u=e("f6d6"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=a.a},d51e:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},r=[]},dbb7:function(t,n,e){},f6d6:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),a=e("9a3b"),r=o(e("9676"));function o(t){return t&&t.__esModule?t:{default:t}}var d={computed:(0,u.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[r.default],data:function(){return{}},methods:{goDetail:function(n){(0,a.goShopDetail)(n,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}}};n.default=d}).call(this,e("543d")["default"])},fb76:function(t,n,e){"use strict";e.r(n);var u=e("d51e"),a=e("8f9d");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("640d");var o,d=e("f0c5"),i=Object(d["a"])(a["default"],u["b"],u["c"],!1,null,"628ebb5a",null,!1,u["a"],o);n["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/recommend/index-create-component',
    {
        'components/recommend/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("fb76"))
        })
    },
    [['components/recommend/index-create-component']]
]);
