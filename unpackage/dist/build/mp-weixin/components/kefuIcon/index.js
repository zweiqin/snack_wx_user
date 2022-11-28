(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kefuIcon/index"],{"3f0c":function(t,e,n){},"4f9d":function(t,e,n){"use strict";n.r(e);var u=n("ef9c"),c=n("509c");for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n("9814");var r,f=n("f0c5"),a=Object(f["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=a.exports},"509c":function(t,e,n){"use strict";n.r(e);var u=n("6ae4"),c=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=c.a},"6ae4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n("6645"),c=(getApp(),{name:"kefuIcon",props:{ids:{type:Number,default:0},routineContact:{type:Number,default:0},storeInfo:{type:Object,default:function(){}},goodsCon:{type:Number,default:0}},data:function(){return{top:"480"}},mounted:function(){},methods:{goCustomer:function(){(0,u.getCustomer)("/pages/customer_list/chat?productId=".concat(this.ids))},setTouchMove:function(t){var e=this;t.touches[0].clientY<480&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)}},created:function(){}});e.default=c},9814:function(t,e,n){"use strict";var u=n("3f0c"),c=n.n(u);c.a},ef9c:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var c=function(){var t=this,e=t.$createElement;t._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kefuIcon/index-create-component',
    {
        'components/kefuIcon/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4f9d"))
        })
    },
    [['components/kefuIcon/index-create-component']]
]);
