(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/picTxt"],{"0cf7":function(n,t,e){"use strict";e.r(t);var o=e("c619"),r=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=r.a},"1b0d":function(n,t,e){"use strict";e.r(t);var o=e("f0ae"),r=e("0cf7");for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);e("bed0");var i,c=e("f0c5"),f=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"f184e378",null,!1,o["a"],i);t["default"]=f.exports},5479:function(n,t,e){},bed0:function(n,t,e){"use strict";var o=e("5479"),r=e.n(o);r.a},c619:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;e("d47c");var o=getApp(),r=function(){Promise.all([e.e("common/vendor"),e.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(e("bfc0"))}.bind(null,e)).catch(e.oe)},a={name:"picTxt",props:{dataConfig:{type:Object,default:function(){}}},components:{"jyf-parser":r},watch:{dataConfig:{immediate:!0,handler:function(n,t){n&&(this.description=n.richText.val,this.isShow=n.isShow.val)}}},data:function(){return{description:"",name:this.$options.name,isIframe:o.globalData.isIframe,isShow:!0,tagStyle:{img:"width:100%;display:block",video:"width: 100% !important;"}}},created:function(){},mounted:function(){},methods:{}};t.default=a},f0ae:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var o={jyfParser:function(){return Promise.all([e.e("common/vendor"),e.e("components/jyf-parser/jyf-parser")]).then(e.bind(null,"bfc0"))}},r=function(){var n=this,t=n.$createElement;n._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/picTxt-create-component',
    {
        'pages/index/components/picTxt-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1b0d"))
        })
    },
    [['pages/index/components/picTxt-create-component']]
]);
