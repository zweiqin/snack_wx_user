(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/lottery/components/noticeBar"],{"0caa":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"231e":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"noticeBar",data:function(){return{animateUp:!1,listData:JSON.parse(JSON.stringify(this.showMsg)),timer:null}},props:{showMsg:{type:Array}},mounted:function(){this.timer=setInterval(this.scrollAnimate,2500)},methods:{scrollAnimate:function(){var t=this;this.animateUp=!0,setTimeout((function(){t.listData.push(t.listData[0]),t.listData.shift(),t.animateUp=!1}),500)}},destroyed:function(){clearInterval(this.timer)}};n.default=a},"2e0f":function(t,n,e){"use strict";e.r(n);var a=e("231e"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"8aa7":function(t,n,e){"use strict";e.r(n);var a=e("0caa"),i=e("2e0f");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("f818");var u,s=e("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"66e4c842",null,!1,a["a"],u);n["default"]=c.exports},f818:function(t,n,e){"use strict";var a=e("fed6"),i=e.n(a);i.a},fed6:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/activity/lottery/components/noticeBar-create-component',
    {
        'pages/activity/lottery/components/noticeBar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8aa7"))
        })
    },
    [['pages/activity/lottery/components/noticeBar-create-component']]
]);
