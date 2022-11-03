(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/lottery/components/noticeBar"],{"33e1":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},r=[]},5179:function(t,n,e){},"51e5":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"noticeBar",data:function(){return{animateUp:!1,listData:JSON.parse(JSON.stringify(this.showMsg)),timer:null}},props:{showMsg:{type:Array}},mounted:function(){this.timer=setInterval(this.scrollAnimate,2500)},methods:{scrollAnimate:function(){var t=this;this.animateUp=!0,setTimeout((function(){t.listData.push(t.listData[0]),t.listData.shift(),t.animateUp=!1}),500)}},destroyed:function(){clearInterval(this.timer)}};n.default=a},a4cb:function(t,n,e){"use strict";e.r(n);var a=e("33e1"),i=e("d8eb");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("dbcd");var u,c=e("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"66e4c842",null,!1,a["a"],u);n["default"]=s.exports},d8eb:function(t,n,e){"use strict";e.r(n);var a=e("51e5"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},dbcd:function(t,n,e){"use strict";var a=e("5179"),i=e.n(a);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/activity/lottery/components/noticeBar-create-component',
    {
        'pages/activity/lottery/components/noticeBar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a4cb"))
        })
    },
    [['pages/activity/lottery/components/noticeBar-create-component']]
]);
