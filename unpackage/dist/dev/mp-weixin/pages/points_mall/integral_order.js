(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/points_mall/integral_order"],{

/***/ 841:
/*!******************************************************************************************************************!*\
  !*** D:/zwq/company-project/2022-10 零食小程序/snack_wx_user/main.js?{"page":"pages%2Fpoints_mall%2Fintegral_order"} ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _integral_order = _interopRequireDefault(__webpack_require__(/*! ./pages/points_mall/integral_order.vue */ 842));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_integral_order.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 842:
/*!***********************************************************************************************!*\
  !*** D:/zwq/company-project/2022-10 零食小程序/snack_wx_user/pages/points_mall/integral_order.vue ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _integral_order_vue_vue_type_template_id_fe1f759a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integral_order.vue?vue&type=template&id=fe1f759a&scoped=true& */ 843);
/* harmony import */ var _integral_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integral_order.vue?vue&type=script&lang=js& */ 845);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _integral_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _integral_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _integral_order_vue_vue_type_style_index_0_id_fe1f759a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./integral_order.vue?vue&type=style&index=0&id=fe1f759a&lang=scss&scoped=true& */ 847);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _integral_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _integral_order_vue_vue_type_template_id_fe1f759a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _integral_order_vue_vue_type_template_id_fe1f759a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fe1f759a",
  null,
  false,
  _integral_order_vue_vue_type_template_id_fe1f759a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/points_mall/integral_order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 843:
/*!******************************************************************************************************************************************!*\
  !*** D:/zwq/company-project/2022-10 零食小程序/snack_wx_user/pages/points_mall/integral_order.vue?vue&type=template&id=fe1f759a&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_template_id_fe1f759a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./integral_order.vue?vue&type=template&id=fe1f759a&scoped=true& */ 844);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_template_id_fe1f759a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_template_id_fe1f759a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_template_id_fe1f759a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_template_id_fe1f759a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 844:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/zwq/company-project/2022-10 零食小程序/snack_wx_user/pages/points_mall/integral_order.vue?vue&type=template&id=fe1f759a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 845:
/*!************************************************************************************************************************!*\
  !*** D:/zwq/company-project/2022-10 零食小程序/snack_wx_user/pages/points_mall/integral_order.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./integral_order.vue?vue&type=script&lang=js& */ 846);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 846:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/zwq/company-project/2022-10 零食小程序/snack_wx_user/pages/points_mall/integral_order.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;























































































var _activity = __webpack_require__(/*! @/api/activity.js */ 566);



var _user = __webpack_require__(/*! @/api/user.js */ 14);





var _store = __webpack_require__(/*! @/api/store.js */ 46);


var _cache = __webpack_require__(/*! @/config/cache.js */ 17);







var _login = __webpack_require__(/*! @/libs/login.js */ 9);


var _vuex = __webpack_require__(/*! vuex */ 11);





var _color = _interopRequireDefault(__webpack_require__(/*! @/mixins/color */ 31));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var couponListWindow = function couponListWindow() {Promise.all(/*! require.ensure | components/couponListWindow/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/couponListWindow/index")]).then((function () {return resolve(__webpack_require__(/*! @/components/couponListWindow */ 1289));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var addressWindow = function addressWindow() {__webpack_require__.e(/*! require.ensure | components/addressWindow/index */ "components/addressWindow/index").then((function () {return resolve(__webpack_require__(/*! @/components/addressWindow */ 1296));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var orderGoods = function orderGoods() {__webpack_require__.e(/*! require.ensure | components/orderGoods/index */ "components/orderGoods/index").then((function () {return resolve(__webpack_require__(/*! @/components/orderGoods */ 1210));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var home = function home() {Promise.all(/*! require.ensure | components/home/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/home/index")]).then((function () {return resolve(__webpack_require__(/*! @/components/home */ 1142));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var authorize = function authorize() {__webpack_require__.e(/*! require.ensure | components/Authorize */ "components/Authorize").then((function () {return resolve(__webpack_require__(/*! @/components/Authorize */ 1105));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default = { components: { couponListWindow: couponListWindow, addressWindow: addressWindow, orderGoods: orderGoods, home: home, authorize: authorize }, mixins: [_color.default], data: function data() {return { textareaStatus: true, //支付方式
      cartArr: [{ "name": "微信支付", "icon": "icon-weixin2", value: 'weixin', title: '使用微信快捷支付', payStatus: 1 }, { "name": "支付宝支付", "icon": "icon-zhifubao", value: 'alipay', title: '使用线上支付宝支付', payStatus: 1 }, { "name": "余额支付", "icon": "icon-yuezhifu", value: 'yue', title: '可用余额:', payStatus: 1 }, { "name": "线下支付", "icon": "icon-yuezhifu1", value: 'offline', title: '选择线下付款方式', payStatus: 2 }], formContent: '', payType: 'weixin', //支付方式
      openType: 1, //优惠券打开方式 1=使用
      active: 0, //支付方式切换
      coupon: { coupon: false, list: [], statusTile: '立即使用' }, //优惠券组件
      address: { address: false }, //地址组件
      addressInfo: {}, //地址信息
      pinkId: 0, //拼团id
      addressId: 0, //地址id
      couponId: 0, //优惠券id
      cartId: '', //购物车id
      BargainId: 0, combinationId: 0, seckillId: 0, userInfo: {}, //用户信息
      mark: '', //备注信息
      couponTitle: '请选择', //优惠券
      coupon_price: 0, //优惠券抵扣金额
      useIntegral: false, //是否使用积分
      integral_price: 0, //积分抵扣金额
      integral: 0, ChangePrice: 0, //使用积分抵扣变动后的金额
      formIds: [], //收集formid
      status: 0, is_address: false, toPay: false, //修复进入支付时页面隐藏从新刷新页面
      shippingType: 0, system_store: {}, storePostage: 0, contacts: '', contactsTel: '', mydata: {}, storeList: [], store_self_mention: 0, cartInfo: {}, priceGroup: {}, animated: false, totalPrice: 0, integralRatio: "0", pagesUrl: "", orderKey: "", // usableCoupon: {},
      offlinePostage: "", isAuto: false, //没有授权的不会自动授权
      isShowAuth: false, //是否隐藏授权
      from: '', news: 1, invTitle: '不开发票', special_invoice: false, invoice_func: false, header_type: '', invShow: false, invList: [], invChecked: '', urlQuery: '', pay_close: false, resData: {} };},
  computed: (0, _vuex.mapGetters)(['isLogin']),
  onLoad: function onLoad(options) {




    this.from = 'routine';

    if (!options.unique) return this.$util.Tips({
      title: '请选择要购买的商品' },
    {
      tab: 3,
      url: 1 });

    this.unique = options.unique;
    this.num = options.num;
    this.couponId = options.couponId || 0;
    this.pinkId = options.pinkId ? parseInt(options.pinkId) : 0;
    this.addressId = options.addressId || 0;
    this.cartId = options.cartId;
    this.is_address = options.is_address ? true : false;
    this.news = !options.new || options.new === '0' ? 0 : 1;
    this.invChecked = options.invoice_id || '';
    this.header_type = options.header_type || '1';
    this.couponTitle = options.couponTitle || '请选择';

    this.textareaStatus = true;

    if (this.isLogin && this.toPay == false) {
      this.getaddressInfo();
      this.getConfirm();
      this.$nextTick(function () {
        this.$refs.addressWindow.getAddressList();
      });
    } else {
      (0, _login.toLogin)();
    }
  },
  /**
      * 生命周期函数--监听页面显示
      */
  onShow: function onShow() {
    var _this = this;
    uni.$on("handClick", function (res) {
      if (res) {
        _this.system_store = res.address;
      }
      // 清除监听
      uni.$off('handClick');
    });
  },
  methods: {
    getInvoiceList: function getInvoiceList() {var _this2 = this;
      uni.showLoading({
        title: '正在加载…' });

      (0, _user.invoiceList)().then(function (res) {
        uni.hideLoading();
        _this2.invList = res.data.map(function (item) {
          item.id = item.id.toString();
          return item;
        });
        var result = _this2.invList.find(function (item) {return item.id == _this2.invChecked;});
        if (result) {
          var name = '';
          name += result.header_type === 1 ? '个人' : '企业';
          name += result.type === 1 ? '普通' : '专用';
          name += '发票';
          _this2.invTitle = name;
        }
      }).catch(function (err) {
        uni.showToast({
          title: err,
          icon: 'none' });

      });
    },
    /**
        * 事件回调
        *
        */
    onChangeFun: function onChangeFun(e) {
      var opt = e;
      var action = opt.action || null;
      var value = opt.value != undefined ? opt.value : null;
      action && this[action] && this[action](value);
    },
    payClose: function payClose() {
      this.pay_close = false;
    },
    goPay: function goPay() {
      var that = this;
      if (!that.addressId) {
        return that.$util.Tips({
          title: '请选择收货地址' });

      }
      if (parseFloat(that.resData.integral) < parseFloat(that.cartInfo.price))
      return that.$util.Tips({
        title: '积分不足！' });

      var data = {
        addressId: that.addressId,
        mark: that.mark,
        unique: this.cartInfo.unique,
        num: this.resData.num };

      (0, _activity.integralOrderCreate)(data).then(function (res) {
        uni.redirectTo({
          url: "/pages/points_mall/integral_order_status?order_id=".concat(res.data.result.orderId) });

      }).catch(function (err) {
        uni.hideLoading();
        return that.$util.Tips({
          title: err });

      });
    },
    // 关闭地址弹窗；
    changeClose: function changeClose() {
      this.$set(this.address, 'address', false);
    },
    computedPrice: function computedPrice() {var _this3 = this;
      var shippingType = this.shippingType;
      postOrderComputed(this.orderKey, {
        addressId: this.addressId,
        useIntegral: this.useIntegral ? 1 : 0,
        couponId: this.couponId,
        shipping_type: parseInt(shippingType) + 1,
        payType: this.payType }).
      then(function (res) {
        var result = res.data.result;
        if (result) {
          _this3.totalPrice = result.pay_price;
          _this3.integral_price = result.deduction_price;
          _this3.coupon_price = result.coupon_price;
          _this3.integral = _this3.useIntegral ? result.SurplusIntegral : _this3.userInfo.integral;
          _this3.$set(_this3.priceGroup, 'storePostage', shippingType == 1 ? 0 : result.pay_postage);
          _this3.$set(_this3.priceGroup, 'storePostageDiscount', result.storePostageDiscount);
        }
      });
    },
    ChangCouponsClone: function ChangCouponsClone() {
      this.$set(this.coupon, 'coupon', false);
    },
    changeTextareaStatus: function changeTextareaStatus() {
      for (var i = 0, len = this.coupon.list.length; i < len; i++) {
        this.coupon.list[i].use_title = '';
        this.coupon.list[i].is_use = 0;
      }
      this.textareaStatus = true;
      this.status = 0;
      this.$set(this.coupon, 'list', this.coupon.list);
    },
    /**
        * 选择地址后改变事件
        * @param object e
        */
    OnChangeAddress: function OnChangeAddress(e) {
      this.textareaStatus = true;
      this.addressId = e;
      this.address.address = false;
      this.getaddressInfo();
    },
    bindHideKeyboard: function bindHideKeyboard(e) {
      this.mark = e.detail.value;
    },
    /**
        * 获取当前订单详细信息
        * 
        */
    getConfirm: function getConfirm() {var _this4 = this;
      var that = this;
      // return;
      (0, _activity.integralOrderConfirm)({
        unique: this.unique,
        num: this.num }).
      then(function (res) {
        that.$set(that, 'resData', res.data);
        that.$set(that, 'cartInfo', res.data.productInfo);
      }).catch(function (err) {
        return _this4.$util.Tips({
          title: err });

      });
    },
    /*
        * 提取砍价和拼团id
        */
    getBargainId: function getBargainId() {
      var that = this;
      var cartINfo = that.cartInfo;
      var BargainId = 0;
      var combinationId = 0;
      cartINfo.forEach(function (value, index, cartINfo) {
        BargainId = cartINfo[index].bargain_id,
        combinationId = cartINfo[index].combination_id;
      });
      that.$set(that, 'BargainId', parseInt(BargainId));
      that.$set(that, 'combinationId', parseInt(combinationId));
      if (that.cartArr.length == 3 && (BargainId || combinationId || that.seckillId)) {
        that.cartArr[2].payStatus = 0;
        that.$set(that, 'cartArr', that.cartArr);
      }
    },
    /*
        * 获取默认收货地址或者获取某条地址信息
        */
    getaddressInfo: function getaddressInfo() {
      var that = this;
      if (that.addressId) {
        (0, _user.getAddressDetail)(that.addressId).then(function (res) {
          res.data.is_default = parseInt(res.data.is_default);
          that.addressInfo = res.data || {};
          that.addressId = res.data.id || 0;
          that.address.addressId = res.data.id || 0;
        });
      } else {
        (0, _user.getAddressDefault)().then(function (res) {
          res.data.is_default = parseInt(res.data.is_default);
          that.addressInfo = res.data || {};
          that.addressId = res.data.id || 0;
          that.address.addressId = res.data.id || 0;
        });
      }
    },
    couponTap: function couponTap() {var _this5 = this;
      this.coupon.coupon = true;
      this.coupon.list.forEach(function (item, index) {
        if (item.id == _this5.couponId) {
          item.is_use = 1;
        } else {
          item.is_use = 0;
        }
      });
      this.$set(this.coupon, 'list', this.coupon.list);
    },
    car: function car() {
      var that = this;
      that.animated = false;
    },
    onAddress: function onAddress() {
      var that = this;
      that.textareaStatus = false;
      that.address.address = true;
      that.pagesUrl = "/pages/points_mall/user_address?unique=".concat(this.unique, "&num=").concat(this.num);
    },
    clickTextArea: function clickTextArea() {var _this6 = this;
      this.$nextTick(function () {
        _this6.$refs.getFocus.focus();
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 847:
/*!*********************************************************************************************************************************************************!*\
  !*** D:/zwq/company-project/2022-10 零食小程序/snack_wx_user/pages/points_mall/integral_order.vue?vue&type=style&index=0&id=fe1f759a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_style_index_0_id_fe1f759a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../工具软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./integral_order.vue?vue&type=style&index=0&id=fe1f759a&lang=scss&scoped=true& */ 848);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_style_index_0_id_fe1f759a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_style_index_0_id_fe1f759a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_style_index_0_id_fe1f759a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_style_index_0_id_fe1f759a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_integral_order_vue_vue_type_style_index_0_id_fe1f759a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 848:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/zwq/company-project/2022-10 零食小程序/snack_wx_user/pages/points_mall/integral_order.vue?vue&type=style&index=0&id=fe1f759a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[841,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/points_mall/integral_order.js.map