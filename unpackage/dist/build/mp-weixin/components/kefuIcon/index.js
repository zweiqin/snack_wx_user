(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kefuIcon/index"],{"261c":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var c=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"90c1":function(t,n,e){"use strict";var u=e("a234"),c=e.n(u);c.a},"995d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("a07c"),c=(getApp(),{name:"kefuIcon",props:{ids:{type:Number,default:0},routineContact:{type:Number,default:0},storeInfo:{type:Object,default:function(){}},goodsCon:{type:Number,default:0}},data:function(){return{top:"480"}},mounted:function(){},methods:{goCustomer:function(){(0,u.getCustomer)("/pages/customer_list/chat?productId=".concat(this.ids))},setTouchMove:function(t){var n=this;t.touches[0].clientY<480&&t.touches[0].clientY>66&&(n.top=t.touches[0].clientY)}},created:function(){}});n.default=c},a234:function(t,n,e){},d227:function(t,n,e){"use strict";e.r(n);var u=e("261c"),c=e("f35b");for(var o in c)"default"!==o&&function(t){e.d(n,t,(function(){return c[t]}))}(o);e("90c1");var r,a=e("f0c5"),f=Object(a["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=f.exports},f35b:function(t,n,e){"use strict";e.r(n);var u=e("995d"),c=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kefuIcon/index-create-component',
    {
        'components/kefuIcon/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d227"))
        })
    },
    [['components/kefuIcon/index-create-component']]
]);
