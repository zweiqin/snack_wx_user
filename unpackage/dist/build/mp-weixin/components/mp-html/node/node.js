(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mp-html/node/node"],{"19ac":function(t,i,r){"use strict";var e=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])};i["a"]=e},"2fc3":function(t,i,r){"use strict";r.r(i);var e=r("95af"),n=r.n(e);for(var o in e)"default"!==o&&function(t){r.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},8160:function(t,i,r){},"857c":function(t,i,r){"use strict";var e=r("8160"),n=r.n(e);n.a},"95af":function(t,i,r){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=function(){Promise.resolve().then(function(){return resolve(r("d4e1"))}.bind(null,r)).catch(r.oe)},n={name:"node",options:{virtualHost:!0},data:function(){return{ctrl:{}}},props:{name:String,attrs:{type:Object,default:function(){return{}}},childs:Array,opts:Array},components:{node:e},mounted:function(){for(this.root=this.$parent;"mp-html"!=this.root.$options.name;this.root=this.root.$parent);},beforeDestroy:function(){},methods:{toJSON:function(){},play:function(i){if(this.root.pauseVideo){for(var r=!1,e=i.target.id,n=this.root._videos.length;n--;)this.root._videos[n].id==e?r=!0:this.root._videos[n].pause();if(!r){var o=t.createVideoContext(e,this);o.id=e,this.root._videos.push(o)}}},imgTap:function(i){var r=this.childs[i.currentTarget.dataset.i];if(r.a)return this.linkTap(r.a);r.attrs.ignore||(this.root.$emit("imgtap",r.attrs),this.root.previewImg&&t.previewImage({current:parseInt(r.attrs.i),urls:this.root.imgList}))},imgLongTap:function(t){},imgLoad:function(t){var i=t.currentTarget.dataset.i;this.childs[i].w?(this.opts[1]&&!this.ctrl[i]||-1==this.ctrl[i])&&this.$set(this.ctrl,i,1):this.$set(this.ctrl,i,t.detail.width)},linkTap:function(i){var r=i.currentTarget?this.childs[i.currentTarget.dataset.i].attrs:i,e=r.href;this.root.$emit("linktap",r),e&&("#"==e[0]?this.root.navigateTo(e.substring(1)).catch((function(){})):e.includes("://")?this.root.copyLink&&t.setClipboardData({data:e,success:function(){return t.showToast({title:"链接已复制"})}}):t.navigateTo({url:e,fail:function(){t.switchTab({url:e,fail:function(){}})}}))},mediaError:function(t){var i=t.currentTarget.dataset.i,r=this.childs[i];if("video"==r.name||"audio"==r.name){var e=(this.ctrl[i]||0)+1;if(e>r.src.length&&(e=0),e<r.src.length)return this.$set(this.ctrl,i,e)}else"img"==r.name&&this.opts[2]&&this.$set(this.ctrl,i,-1);this.root&&this.root.$emit("error",{source:r.name,attrs:r.attrs,errMsg:t.detail.errMsg})}}};i.default=n}).call(this,r("543d")["default"])},b35e:function(t,i,r){"use strict";var e;r.d(i,"b",(function(){return n})),r.d(i,"c",(function(){return o})),r.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement;t._self._c},o=[]},d4e1:function(t,i,r){"use strict";r.r(i);var e=r("b35e"),n=r("2fc3");for(var o in n)"default"!==o&&function(t){r.d(i,t,(function(){return n[t]}))}(o);r("857c");var s,a=r("f0c5"),c=r("19ac"),u=Object(a["a"])(n["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);"function"===typeof c["a"]&&Object(c["a"])(u),i["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mp-html/node/node-create-component',
    {
        'components/mp-html/node/node-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d4e1"))
        })
    },
    [['components/mp-html/node/node-create-component']]
]);
