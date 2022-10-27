<template>
	<view :style="colorStyle">
		<view class="order-details">
			<!-- 给header上与data上加on为退款订单-->
			<view class="header bg-color acea-row row-middle" :class="isGoodsReturn ? &quot;on&quot;:&quot;&quot;">
				<view v-if="isGoodsReturn==false" class="pictrue">
					<image :src="orderInfo.status_pic"></image>
				</view>
				<view class="data" :class="isGoodsReturn ? &quot;on&quot;:&quot;&quot;">
					<view class="state">{{ orderInfo._status._msg }}</view>
					<view>{{ orderInfo.add_time_y }}<text class="time">{{ orderInfo.add_time_h }}</text></view>
				</view>
			</view>
			<view v-if="orderInfo._status.refund_name" class="refund-msg">
				<view class="refund-msg-user">
					<text class="name">{{ orderInfo._status.refund_name }}</text>
					<text>{{ orderInfo._status.refund_phone }}</text>
					<!-- #ifndef H5 -->
					<text class="copy-refund-msg" @click="copyAddress()">复制</text>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<text
						class="copy-refund-msg"
						:data-clipboard-text="orderInfo._status.refund_name + orderInfo._status.refund_phone + orderInfo._status.refund_address"
					>复制</text>
					<!-- #endif -->
				</view>
				<view class="refund-address">
					{{ orderInfo._status.refund_address }}
				</view>
				<view class="refund-tip"><text class="iconfont icon-zhuyi-copy"></text>请按以上退货信息将商品退回</view>
			</view>
			<view v-if="orderInfo._status.refund_name" class="line">
				<image src="@/static/images/line.jpg"></image>
			</view>
			<view v-if="isGoodsReturn==false">
				<view class="nav">
					<view class="navCon acea-row row-between-wrapper">
						<view :class="status.type == 0 || status.type == -9 ? 'on':''">待付款</view>
						<view :class="status.type == 1 ? 'on':''">{{ orderInfo.shipping_type==1 ? '待发货':'待核销' }}</view>
						<view v-if="orderInfo.shipping_type == 1" :class="status.type == 2 ? 'on':''">待收货</view>
						<view :class="status.type == 3 ? 'on':''">待评价</view>
						<view :class="status.type == 4 ? 'on':''">已完成</view>
					</view>
					<view class="progress acea-row row-between-wrapper">
						<view
							class="iconfont"
							:class="(status.type == 0 || status.type == -9 ? &quot;icon-webicon318&quot;:&quot;icon-yuandianxiao&quot;) + &quot; &quot; + (status.type >= 0 ? &quot;font-num&quot;:&quot;&quot;)"
						>
						</view>
						<view class="line" :class="status.type > 0 ? &quot;bg-color&quot;:&quot;&quot;"></view>
						<view
							class="iconfont"
							:class="(status.type == 1 ? &quot;icon-webicon318&quot;:&quot;icon-yuandianxiao&quot;) + &quot; &quot; + (status.type >= 1 ? &quot;font-num&quot;:&quot;&quot;)"
						>
						</view>
						<view v-if="orderInfo.shipping_type == 1" class="line" :class="status.type > 1 ? &quot;bg-color&quot;:&quot;&quot;">
						</view>
						<view
							v-if="orderInfo.shipping_type == 1"
							class="iconfont"
							:class="(status.type == 2 ? &quot;icon-webicon318&quot;:&quot;icon-yuandianxiao&quot;) + &quot; &quot; +(status.type >= 2 ? &quot;font-num&quot;:&quot;&quot;)"
						></view>
						<view class="line" :class="status.type > 2 ? &quot;bg-color&quot;:&quot;&quot;"></view>
						<view
							class="iconfont"
							:class="(status.type == 3 ? &quot;icon-webicon318&quot;:&quot;icon-yuandianxiao&quot;) + &quot; &quot; + (status.type >= 3 ? &quot;font-num&quot;:&quot;&quot;)"
						>
						</view>
						<view class="line" :class="status.type > 3 ? &quot;bg-color&quot;:&quot;&quot;"></view>
						<view
							class="iconfont"
							:class="(status.type == 4 ? &quot;icon-webicon318&quot;:&quot;icon-yuandianxiao&quot;) + &quot; &quot; + (status.type >= 4 ? &quot;font-num&quot;:&quot;&quot;)"
						>
						</view>
					</view>
				</view>
				<!-- 拒绝退款 -->
				<view v-if="orderInfo.refund_reason" class="refund">
					<view class="title">
						<image src="@/static/images/shuoming.png" mode=""></image>
						商家拒绝退款
					</view>
					<view class="con">拒绝原因：{{ orderInfo.refund_reason }}</view>
				</view>
				<!-- <view class="writeOff" v-if="orderInfo.shipping_type == 2 && orderInfo.paid"> -->
				<view v-if="orderInfo.verify_code && orderInfo.paid == 1" class="writeOff">
					<view class="title">核销信息</view>
					<view class="grayBg">
						<view v-if="orderInfo.status == 2" class="written">
							<image src="@/static/images/written.png"></image>
						</view>
						<view class="pictrue">
							<image :src="orderInfo.code"></image>
						</view>
					</view>
					<view class="gear">
						<image src="@/static/images/writeOff.jpg"></image>
					</view>
					<view class="num">{{ orderInfo._verify_code }}</view>
					<view class="rules">
						<view v-if="orderInfo.shipping_type == 2" class="item">
							<view class="rulesTitle acea-row row-middle">
								<text class="iconfont icon-shijian"></text>核销时间
							</view>
							<view class="info">
								每日：<text class="time">{{ orderInfo.system_store.day_time }}</text>
							</view>
						</view>
						<view class="item">
							<view class="rulesTitle acea-row row-middle">
								<text class="iconfont icon-shuoming1"></text>使用说明
							</view>
							<view class="info">{{ orderInfo.shipping_type == 2?'可将二维码出示给店员扫描或提供数字核销码':'可将二维码出示给配送员进行核销' }}
							</view>
						</view>
					</view>
				</view>
				<view v-if="orderInfo.shipping_type == 2" class="map acea-row row-between-wrapper">
					<view>自提地址信息</view>
					<view class="place cart-color acea-row row-center-wrapper" @tap="showMaoLocation">
						<text class="iconfont icon-weizhi"></text>查看位置
					</view>
				</view>
				<view v-if="virtual_type <= 0">
					<view v-if="orderInfo.shipping_type === 1" class="address">
						<view class="name">{{ orderInfo.real_name }}<text class="phone">{{ orderInfo.user_phone }}</text>
						</view>
						<view>{{ orderInfo.user_address }}</view>
					</view>
					<view v-else class="address" style="margin-top:0;">
						<view class="name" @tap="makePhone">{{ orderInfo.system_store.name }}<text
							class="phone"
						>{{ orderInfo.system_store.phone }}</text><text
							class="iconfont icon-tonghua font-num"
						></text></view>
						<view>{{ orderInfo.system_store._detailed_address }}</view>
					</view>
				</view>
				<view v-if="orderInfo.shipping_type === 1 && virtual_type <= 0" class="line">
					<image src="@/static/images/line.jpg"></image>
				</view>
			</view>

			<view class="" style="margin: 20px auto;width: 200px; height: 200px;">
				<image
					style="background-color: #eeeeee;width: 200px; height: 200px;" :mode="'aspectFit'" :src="'http://'+'picgo-vincent.oss-cn-guangzhou.aliyuncs.com/photo/1662349720166-./20220607155302726.jpg'"
				></image>
			</view>

			<orderGoods
				v-for="(item,index) in split" :key="item.id" :evaluate="item._status._type == 3 ? 3 : 0"
				:order-id="item.order_id" :cart-info="item.cartInfo" :jump="false" :jump-detail="true"
				:pid="item.pid"
				:split="true" :status_type="item._status._type" :index="index" :refund_status="item.refund_status"
				:delivery_type="item.delivery_type" @confirmOrder="confirmOrder" @openSubcribe="openSubcribe"
			>
			</orderGoods>
			<orderGoods
				v-if="cartInfo.length" :evaluate="evaluate" :order-id="order_id" :cart-info="cartInfo"
				:pid="pid"
				:jump="true" @openSubcribe="openSubcribe"
			></orderGoods>
			<!-- #ifdef H5 || APP-PLUS -->
			<div class="goodCall" @click="goGoodCall">
				<span class="iconfont icon-kefu"></span><span>联系客服</span>
			</div>
			<!-- #endif -->
			<!-- #ifdef MP -->
			<div v-if="routineContact == 0" class="goodCall" @click="goGoodCall">
				<button hover-class="none">
					<span class="iconfont icon-kefu"></span><span>联系客服</span>
				</button>
			</div>
			<div v-else class="goodCall">
				<button hover-class="none" open-type="contact">
					<span class="iconfont icon-kefu"></span><span>联系客服</span>
				</button>
			</div>
			<!-- #endif -->
			<view class="wrapper">
				<view class="item acea-row row-between">
					<view>订单编号：</view>
					<view class="conter acea-row row-middle row-right">
						<text>{{ orderInfo.order_id }}</text>
						<!-- #ifndef H5 -->
						<text class="copy" @tap="copy">复制</text>
						<!-- #endif -->
						<!-- #ifdef H5 -->
						<text class="copy copy-data" :data-clipboard-text="orderInfo.order_id">复制</text>
						<!-- #endif -->
					</view>
				</view>
				<view class="item acea-row row-between">
					<view>下单时间：</view>
					<view class="conter">{{ (orderInfo.add_time_y || '') +' '+(orderInfo.add_time_h || 0) }}</view>
				</view>
				<view class="item acea-row row-between">
					<view>支付状态：</view>
					<view v-if="orderInfo.paid" class="conter">已支付</view>
					<view v-else class="conter">未支付</view>
				</view>
				<view class="item acea-row row-between">
					<view>支付方式：</view>
					<view class="conter">{{ orderInfo._status._payType }}</view>
				</view>
				<view v-if="orderInfo.mark" class="item acea-row row-between">
					<view>买家留言：</view>
					<view class="conter">{{ orderInfo.mark }}</view>
				</view>
				<view v-if="orderInfo.remark" class="item acea-row row-between">
					<view>商家备注：</view>
					<view class="conter">{{ orderInfo.remark }}</view>
				</view>

			</view>
			<!-- 退款订单详情 -->
			<view v-if="isGoodsReturn" class="wrapper">
				<view class="item acea-row row-between">
					<view>收货人：</view>
					<view class="conter">{{ orderInfo.real_name }}</view>
				</view>
				<view class="item acea-row row-between">
					<view>联系电话：</view>
					<view class="conter">{{ orderInfo.user_phone }}</view>
				</view>
				<view class="item acea-row row-between">
					<view>收货地址：</view>
					<view class="conter">{{ orderInfo.user_address }}</view>
				</view>
			</view>
			<view v-if="orderInfo.status!=0">
				<view v-if="orderInfo.delivery_type==&quot;express&quot;" class="wrapper">
					<view class="item acea-row row-between">
						<view>配送方式：</view>
						<view class="conter">发货</view>
					</view>
					<view class="item acea-row row-between">
						<view>快递公司：</view>
						<view class="conter">{{ orderInfo.delivery_name || '' }}</view>
					</view>
					<view class="item acea-row row-between">
						<view>快递号：</view>
						<view class="conter">{{ orderInfo.delivery_id || '' }}</view>
					</view>
				</view>
				<view v-else-if="orderInfo.delivery_type==&quot;send&quot;" class="wrapper">
					<view class="item acea-row row-between">
						<view>配送方式：</view>
						<view class="conter">送货</view>
					</view>
					<view class="item acea-row row-between">
						<view>配送人姓名：</view>
						<view class="conter">{{ orderInfo.delivery_name || '' }}</view>
					</view>
					<view class="item acea-row row-between">
						<view>联系电话：</view>
						<view class="conter acea-row row-middle row-right">{{ orderInfo.delivery_id || '' }}<text
							class="copy" @tap="goTel"
						>拨打</text></view>
					</view>
				</view>
				<view v-else-if="orderInfo.delivery_type==&quot;fictitious&quot;" class="wrapper">
					<view class="item acea-row row-between">
						<view>虚拟发货：</view>
						<view class="conter">已发货，请注意查收</view>
					</view>
					<view v-if="orderInfo.fictitious_content" class="item acea-row row-between">
						<view>虚拟备注：</view>
						<view class="conter">{{ orderInfo.fictitious_content }}</view>
					</view>
				</view>
			</view>
			<view class="wrapper">
				<view class="item acea-row row-between">
					<view>商品总价：</view>
					<view class="conter">
						￥{{ (parseFloat(orderInfo.total_price)+parseFloat(orderInfo.vip_true_price)).toFixed(2) }}</view>
				</view>
				<view v-if="orderInfo.pay_postage > 0" class="item acea-row row-between">
					<view>配送运费：</view>
					<view class="conter">￥{{ parseFloat(orderInfo.pay_postage).toFixed(2) }}</view>
				</view>
				<view v-if="orderInfo.vip_true_price > 0" class="item acea-row row-between">
					<view>会员商品优惠：</view>
					<view class="conter">-￥{{ parseFloat(orderInfo.vip_true_price).toFixed(2) }}</view>
				</view>
				<!-- <view v-if="orderInfo.vip_true_price" class='item acea-row row-between'>
					<view>会员运费优惠：</view>
					<view class='conter'>-￥{{parseFloat(orderInfo.vip_true_price).toFixed(2)}}</view>
				</view> -->
				<view v-if="orderInfo.coupon_id" class="item acea-row row-between">
					<view>优惠券抵扣：</view>
					<view class="conter">-￥{{ parseFloat(orderInfo.coupon_price).toFixed(2) }}</view>
				</view>
				<view v-if="orderInfo.use_integral > 0" class="item acea-row row-between">
					<view>积分抵扣：</view>
					<view class="conter">-￥{{ parseFloat(orderInfo.deduction_price).toFixed(2) }}</view>
				</view>
				<view class="actualPay acea-row row-right">实付款：<text
					class="money font-color"
				>￥{{ parseFloat(orderInfo.pay_price).toFixed(2) }}</text></view>
			</view>
			<view style="height:120rpx;"></view>
			<view
				v-if="isGoodsReturn==false || status.type == 9 || orderInfo.refund_type || orderInfo.is_apply_refund"
				class="footer acea-row row-right row-middle"
			>

				<view
					v-if="(invoice_func || invoiceData) && orderInfo.paid && !orderInfo.refund_status" class="more"
					@click="more"
				>更多<span class="iconfont icon-xiangshang"></span></view>
				<view v-if="moreBtn && status.type!=0" class="more-box">
					<view v-if="invoice_func && !invoiceData" class="more-btn" @click="invoiceApply">申请开票</view>
					<view v-if="invoiceData" class="more-btn" @click="aleartStatusChange">查看发票</view>
				</view>

				<view v-if="status.type == 0 || status.type == -9" class="qs-btn" @click.stop="cancelOrder">取消订单</view>
				<view v-if="status.type==0" class="bnt bg-color" @tap="pay_open(orderInfo.order_id)">立即付款</view>
				<!-- #ifdef MP -->
				<view
					v-else-if="orderInfo.is_apply_refund && [0,3].includes(orderInfo.refund_status)"
					class="bnt cancel" @tap="openSubcribe('/pages/users/goods_return/index?orderId='+orderInfo.order_id)"
				>
					申请退款</view>
				<!-- #endif -->
				<!-- #ifndef MP -->
				<navigator
					v-else-if="orderInfo.is_apply_refund && [0,3].includes(orderInfo.refund_status)" hover-class="none"
					:url="'/pages/users/goods_return/index?orderId='+orderInfo.order_id" class="bnt cancel"
				>
					申请退款
				</navigator>
				<!-- #endif -->
				<!-- 	<navigator hover-class="none" :url="'/pages/users/goods_return/index?orderId='+orderInfo.order_id"
					class='bnt cancel' v-if="orderInfo.refund_type== 3">重新申请
				</navigator> -->

				<view v-if="status.class_status==1" class="bnt bg-color" @tap="goJoinPink">查看拼团</view>
				<navigator
					v-if="orderInfo.delivery_type == 'express' && status.class_status==3 && status.type==2 && !split.length"
					class="bnt cancel"
					hover-class="none" :url="'/pages/users/goods_logistics/index?orderId='+ orderInfo.order_id"
				>查看物流
				</navigator>
				<view v-if="status.class_status==3 && !split.length" class="bnt bg-color" @click="confirmOrder()">确认收货
				</view>
				<view v-if="status.type==4 && !split.length ||status.type==-2" class="bnt cancel" @tap="delOrder">删除订单
				</view>
				<view v-if="status.class_status==5" class="bnt bg-color" @tap="goOrderConfirm">再次购买
				</view>
				<view v-if="orderInfo.refund_type== 4" class="bnt bg-color refundBnt" @tap="refundInput">填写退货物流</view>
				<navigator
					v-if="orderInfo.refund_type == 5" class="bnt cancel refundBnt" hover-class="none"
					:url="'/pages/users/goods_logistics/index?orderId='+ orderInfo.order_id + '&type=refund'"
				>查看退货物流
				</navigator>
			</view>
		</view>
		<!-- #ifndef MP -->
		<home v-show="!aleartStatus && !invShow"></home>
		<!-- #endif -->
		<view v-if="refund_close" class="mask" @click="refund_close = false"></view>
		<view class="refund-input" :class="refund_close ? 'on' : ''">
			<view class="input-msg">
				<text class="iconfont icon-guanbi5" @tap="refund_close = false"></text>
				<view class="refund-input-title">填写物流单号
				</view>
				<view class="refund-input-sty">
					<input v-model="express_num" type="text" placeholder="请输入物流单号" />
				</view>
				<view class="refund-bth">
					<!-- <view class="close-refund" @click="refund_close = false">取消</view> -->
					<view class="submit-refund" @click="refundSubmit()">提交</view>
				</view>
			</view>
		</view>
		<!-- #ifdef MP -->
		<!-- <authorize @onLoadFun="onLoadFun" :isAuto="isAuto" :isShowAuth="isShowAuth" @authColse="authColse"></authorize> -->
		<!-- #endif -->
		<payment
			:pay-mode="payMode" :pay_close="pay_close" :order_id="pay_order_id" :total-price="totalPrice"
			@onChangeFun="onChangeFun"
		></payment>

		<invoiceModal :aleart-status="aleartStatus" :invoice-data="invoiceData" @close="aleartStatus=false">
		</invoiceModal>
		<view v-if="aleartStatus" class="mask invoice-mask" @click="aleartStatus = false"></view>
		<view v-if="moreBtn" class="mask more-mask" @click="moreBtn = false"></view>
		<invoice-picker
			:inv-show="invShow" :is-special="special_invoice" :inv-checked="invChecked" :order-id="order_id"
			:inv-list="invList" :is-order="1" @inv-close="invClose" @inv-change="invSub"
			@inv-cancel="invCancel"
		>
		</invoice-picker>
	</view>
</template>
<script>
import {
	getOrderDetail,
	orderAgain,
	orderTake,
	orderDel,
	orderCancel,
	refundExpress
} from '@/api/order.js'
import {
	openOrderRefundSubscribe
} from '@/utils/SubscribeMessage.js'
import {
	getUserInfo,
	invoiceList,
	makeUpinvoice
} from '@/api/user.js'
import home from '@/components/home'
import payment from '@/components/payment'
import orderGoods from '@/components/orderGoods'
import ClipboardJS from '@/plugin/clipboard/clipboard.js'
import {
	toLogin
} from '@/libs/login.js'
import {
	mapGetters
} from 'vuex'
// #ifdef MP
import authorize from '@/components/Authorize'
// #endif
import colors from '@/mixins/color'
import invoicePicker from '@/components/invoicePicker'
import invoiceModal from '@/components/invoiceModal/index.vue'
import {
	getCustomer
} from '@/utils/index.js'
export default {
	components: {
		payment,
		home,
		invoicePicker,
		invoiceModal,
		orderGoods,
		// #ifdef MP
		authorize
		// #endif
	},
	mixins: [ colors ],
	data() {
		return {
			order_id: '',
			evaluate: 0,
			cartInfo: [], // 购物车产品
			pid: 0, // 上级订单ID
			split: [], // 分单商品
			orderInfo: {
				system_store: {},
				_status: {}
			}, // 订单详情
			system_store: {},
			isGoodsReturn: false, // 是否为退款订单
			status: {}, // 订单底部按钮状态
			refund_close: false,
			isClose: false,
			payMode: [{
				name: '微信支付',
				icon: 'icon-weixinzhifu',
				value: 'weixin',
				title: '使用微信快捷支付',
				payStatus: true
			},
			// #ifdef H5 || APP-PLUS
			{
				name: '支付宝支付',
				icon: 'icon-zhifubao',
				value: 'alipay',
				title: '使用线上支付宝支付',
				payStatus: true
			},
			// #endif
			{
				name: '余额支付',
				icon: 'icon-yuezhifu',
				value: 'yue',
				title: '当前可用余额：',
				number: 0,
				payStatus: true
			}],
			pay_close: false,
			pay_order_id: '',
			totalPrice: '0',
			isAuto: false, // 没有授权的不会自动授权
			isShowAuth: false, // 是否隐藏授权
			routineContact: 0,
			express_num: '',
			invoice_func: false,
			invoiceData: null,
			invoice_id: 0,
			invChecked: '',
			moreBtn: false,
			invShow: false,
			aleartStatus: false, // 发票弹窗
			special_invoice: false,
			invList: [],
			virtual_type: 0
		}
	},
	computed: mapGetters([ 'isLogin' ]),
	onLoad(options) {
		if (options.order_id) {
			this.$set(this, 'order_id', options.order_id)
		}
		if (options.invoice_id) {
			this.invoice_id = options.invoice_id
		}
	},
	onShow() {
		if (this.isLogin) {
			this.getOrderInfo()
			this.getUserInfo()
		} else {
			toLogin()
		}
	},
	onHide() {
		this.isClose = true
	},
	onReady() {
		// #ifdef H5
		this.$nextTick(function () {
			const clipboard = new ClipboardJS('.copy-data')
			clipboard.on('success', () => {
				this.$util.Tips({
					title: '复制成功'
				})
			})
			const address = new ClipboardJS('.copy-refund-msg')
			address.on('success', () => {
				this.$util.Tips({
					title: '复制成功'
				})
			})
		})

		// #endif
	},
	methods: {
		refundInput() {
			this.refund_close = true
		},
		refundSubmit() {
			if (!this.express_num.trim()) {
				return this.$util.Tips({
					title: '请输入物流单号'
				})
			}
			refundExpress({
				express_id: this.express_num,
				id: this.orderInfo.id
			}).then((res) => {
				this.$util.Tips({
					title: '操作成功',
					icon: 'success'
				}, () => {
					this.refund_close = false
					this.getOrderInfo()
				})
			})
				.catch((err) => {
					this.$util.Tips({
						title: err
					})
				})
		},
		goGoodCall() {
			const self = this
			getCustomer(`/pages/customer_list/chat?orderId=${self.order_id}`)
		},
		openSubcribe(e) {
			const page = e
			// #ifndef MP
			uni.navigateTo({
				url: page
			})
			// #endif
			// #ifdef MP
			uni.showLoading({
				title: '正在加载'
			})
			openOrderRefundSubscribe().then((res) => {
				uni.hideLoading()
				uni.navigateTo({
					url: page
				})
			})
				.catch((err) => {
					uni.hideLoading()
				})
			// #endif
		},

		/**
			 * 事件回调
			 *
			 */

		onChangeFun(e) {
			const opt = e
			const action = opt.action || null
			const value = opt.value != undefined ? opt.value : null;
			(action && this[action]) && this[action](value)
		},

		/**
			 * 拨打电话
			 */

		makePhone() {
			uni.makePhoneCall({
				phoneNumber: this.system_store.phone
			})
		},

		/**
			 * 打开地图
			 *
			 */

		showMaoLocation() {
			if (!this.system_store.latitude || !this.system_store.longitude) {
				return this.$util.Tips({
					title: '缺少经纬度信息无法查看地图！'
				})
			}
			uni.openLocation({
				latitude: parseFloat(this.system_store.latitude),
				longitude: parseFloat(this.system_store.longitude),
				scale: 8,
				name: this.system_store.name,
				address: this.system_store.address + this.system_store.detailed_address,
				success() {

				}
			})
		},

		/**
			 * 关闭支付组件
			 *
			 */

		payClose() {
			this.pay_close = false
		},

		/**
			 * 打开支付组件
			 *
			 */

		pay_open() {
			this.pay_close = true
			this.pay_order_id = this.orderInfo.order_id
			this.totalPrice = this.orderInfo.pay_price
		},

		/**
			 * 支付成功回调
			 *
			 */

		pay_complete() {
			this.pay_close = false
			this.pay_order_id = ''
			uni.navigateTo({
				url: '/pages/order_pay_status/index?order_id=' + this.orderInfo.order_id + '&msg=' +
						'支付成功' +
						'&type=3' + '&totalPrice=' + this.totalPrice
			})
			this.getOrderInfo()
		},

		/**
			 * 支付失败回调
			 *
			 */

		pay_fail() {
			this.pay_close = false
			this.pay_order_id = ''
		},

		/**
			 * 登录授权回调
			 *
			 */

		onLoadFun() {
			this.getOrderInfo()
			this.getUserInfo()
		},

		/**
			 * 获取用户信息
			 *
			 */

		getUserInfo() {
			const that = this
			getUserInfo().then((res) => {
				// #ifdef H5
				that.payMode[2].number = res.data.now_money
				// #endif
				// #ifdef MP
				that.payMode[1].number = res.data.now_money
				// #endif
				that.$set(that, 'payMode', that.payMode)
			})
		},

		/**
			 * 获取订单详细信息
			 *
			 */

		getOrderInfo() {
			const that = this
			uni.showLoading({
				title: '正在加载中'
			})
			getOrderDetail(this.order_id).then((res) => {
				const _type = res.data._status._type
				uni.hideLoading()
				that.$set(that, 'orderInfo', res.data)
				that.$set(that, 'cartInfo', res.data.cartInfo)
				that.$set(that, 'pid', res.data.pid)
				that.$set(that, 'split', res.data.split)
				that.$set(that, 'evaluate', _type == 3 ? 3 : 0)
				that.$set(that, 'system_store', res.data.system_store)
				that.$set(that, 'invoiceData', res.data.invoice)
				that.$set(that, 'invoice_func', res.data.invoice_func)
				that.$set(that, 'special_invoice', res.data.special_invoice)
				that.$set(that, 'virtual_type', res.data.virtual_type) // 大于0为虚拟商品
				that.$set(that, 'routineContact', Number(res.data.routine_contact_type))
				if (this.orderInfo.refund_status != 0 && this.orderInfo.refund_status != 3) {
					this.isGoodsReturn = true
				}
				if (that.invoice_id && !that.invoiceData) {
					that.invChecked = that.invoice_id || ''
					this.invoiceApply()
				}
				that.payMode.map((item) => {
					if (item.value == 'weixin') {
						item.payStatus = !!res.data.pay_weixin_open
					}
					if (item.value == 'alipay') {
						item.payStatus = !!res.data.ali_pay_status
					}
					if (item.value == 'yue') {
						item.payStatus = res.data.yue_pay_status == 1
					}
				})
				that.getOrderStatus()
			})
				.catch((err) => {
					uni.hideLoading()
					that.$util.Tips({
						title: err
					}, '/pages/users/order_list/index')
				})
		},
		// 不开发票
		invCancel() {
			this.invChecked = ''
			this.invTitle = '不开发票'
			this.invShow = false
		},
		// 选择发票
		invSub(id) {
			this.invChecked = id
			const data = {
				order_id: this.order_id,
				invoice_id: this.invChecked
			}
			makeUpinvoice(data).then((res) => {
				uni.showToast({
					title: '申请成功',
					icon: 'success'
				})
				this.invShow = false
				this.aleartStatus = true
				this.getOrderInfo()
			})
				.catch((err) => {
					uni.showToast({
						title: err,
						icon: 'none'
					})
				})
		},
		// 关闭发票
		invClose() {
			this.invShow = false
			this.getInvoiceList()
		},
		// 申请开票
		invoiceApply() {
			this.getInvoiceList()
			this.moreBtn = false
			this.invShow = true
		},
		aleartStatusChange() {
			this.moreBtn = false
			this.aleartStatus = true
		},
		getInvoiceList() {
			uni.showLoading({
				title: '正在加载…'
			})
			invoiceList().then((res) => {
				uni.hideLoading()
				this.invList = res.data.map((item) => {
					item.id = item.id.toString()
					return item
				})
				const result = this.invList.find((item) => item.id == this.invChecked)
				if (result) {
					let name = ''
					name += result.header_type === 1 ? '个人' : '企业'
					name += result.type === 1 ? '普通' : '专用'
					name += '发票'
					this.invTitle = name
				}
			})
				.catch((err) => {
					uni.showToast({
						title: err,
						icon: 'none'
					})
				})
		},
		more() {
			this.moreBtn = !this.moreBtn
		},

		/**
			 *
			 * 剪切订单号
			 */
		// #ifndef H5
		copy() {
			const that = this
			uni.setClipboardData({
				data: this.orderInfo.order_id
			})
		},
		// #endif
		// #ifndef H5
		copyAddress() {
			uni.setClipboardData({
				data: this.orderInfo._status.refund_name + this.orderInfo._status.refund_phone + this.orderInfo
					._status
					.refund_address,
				success() {
					uni.Tips({
						title: '复制成功',
						icon: 'success'
					})
				}
			})
		},
		// #endif
		// #ifdef H5
		copyAddress() {
			// console.log('1111111111111')
			// let msg =
			// console.log(msg)
			// return msg
		},
		// #endif
		/**
			 * 打电话
			 */

		goTel() {
			uni.makePhoneCall({
				phoneNumber: this.orderInfo.delivery_id
			})
		},

		/**
			 * 设置底部按钮
			 *
			 */

		getOrderStatus() {
			const orderInfo = this.orderInfo || {}
			const _status = orderInfo._status || {
				_type: 0
			}
			let status = {}
			const type = parseInt(_status._type)
			const delivery_type = orderInfo.delivery_type
			const seckill_id = orderInfo.seckill_id ? parseInt(orderInfo.seckill_id) : 0
			const bargain_id = orderInfo.bargain_id ? parseInt(orderInfo.bargain_id) : 0
			const discount_id = orderInfo.discount_id ? parseInt(orderInfo.discount_id) : 0
			const combination_id = orderInfo.combination_id ? parseInt(orderInfo.combination_id) : 0
			status = {
				type: type == 9 ? -9 : type,
				class_status: 0
			}
			if (type == 1 && combination_id > 0) status.class_status = 1 // 查看拼团
			if (type == 2 && delivery_type == 'express') status.class_status = 2 // 查看物流
			if (type == 2) status.class_status = 3 // 确认收货
			if (type == 4 || type == 0) status.class_status = 4 // 删除订单
			if (!seckill_id && !bargain_id && !combination_id && !discount_id && (type == 3 || type == 4)) {
				status
					.class_status =
					5
			} // 再次购买
			this.$set(this, 'status', status)
		},

		/**
			 * 去拼团详情
			 *
			 */

		goJoinPink() {
			uni.navigateTo({
				url: '/pages/activity/goods_combination_status/index?id=' + this.orderInfo.pink_id
			})
		},

		/**
			 * 再此购买
			 *
			 */

		goOrderConfirm() {
			const that = this
			orderAgain(that.orderInfo.order_id).then((res) => uni.navigateTo({
				url: '/pages/users/order_confirm/index?new=1&cartId=' + res.data.cateId
			}))
				.catch((err) => that.$util.Tips({
					title: err
				}))
		},
		confirmOrder(orderId) {
			const that = this
			uni.showModal({
				title: '确认收货',
				content: '为保障权益，请收到货确认无误后，再确认收货',
				success(res) {
					if (res.confirm) {
						orderTake(orderId || that.order_id).then((res) => that.$util.Tips({
							title: '操作成功',
							icon: 'success'
						}, function () {
							that.getOrderInfo()
						}))
							.catch((err) => that.$util.Tips({
								title: err
							}))
					}
				}
			})
		},

		/**
			 *
			 * 删除订单
			 */

		delOrder() {
			const that = this
			uni.showModal({
				title: '删除订单',
				content: '确定删除该订单',
				success(res) {
					if (res.confirm) {
						orderDel(that.order_id).then((res) => {
							if (that.status.type == -2) {
								return that.$util.Tips({
									title: '删除成功',
									icon: 'success'
								}, {
									tab: 5,
									url: '/pages/users/user_return_list/index'
								})
							}
							return that.$util.Tips({
								title: '删除成功',
								icon: 'success'
							}, {
								tab: 5,
								url: '/pages/users/order_list/index'
							})
						})
							.catch((err) => that.$util.Tips({
								title: err
							}))
					} else if (res.cancel) {
						return that.$util.Tips({
							title: '已取消'
						})
					}
				}
			})
		},
		cancelOrder() {
			const self = this
			uni.showModal({
				title: '提示',
				content: '确认取消该订单?',
				success(res) {
					if (res.confirm) {
						orderCancel(self.orderInfo.order_id)
							.then((data) => {
								self.$util.Tips({
									title: data.msg
								}, {
									tab: 3
								})
							})
							.catch(() => {
								self.getDetail()
							})
					} else if (res.cancel) {
						console.log('用户点击取消')
					}
				}
			})
		}
	}
}
</script>

<style scoped lang="scss">
	.refund-tip {
		font-size: 24rpx;
		margin-top: 10rpx;
		color: var(--view-theme);

		.iconfont {
			font-size: 24rpx;
			margin-right: 6rpx;
		}
	}

	.qs-btn {
		width: auto;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 50rpx;
		color: #fff;
		font-size: 27rpx;
		padding: 0 3%;
		color: #aaa;
		border: 1px solid #ddd;
		margin-right: 20rpx;
	}

	.refund-input {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		border-radius: 16rpx 16rpx 0 0;
		background-color: #fff;
		z-index: 99;
		padding: 40rpx 0 70rpx 0;
		transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
		transform: translate3d(0, 100%, 0);

		.refund-input-title {
			font-size: 32rpx;
			margin-bottom: 60rpx;
			color: #282828;
		}

		.refund-input-sty {
			border: 1px solid #ddd;
			padding: 20rpx 20rpx;
			border-radius: 40rpx;
			width: 100%;
			margin: 20rpx 65rpx;
		}

		.input-msg {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;
			margin: 0 65rpx;

			.iconfont {
				position: absolute;
				font-size: 32rpx;
				color: #282828;
				top: 8rpx;
				right: -30rpx;
			}
		}

		.refund-bth {
			display: flex;
			margin: 0 65rpx;
			margin-top: 20rpx;
			justify-content: space-around;
			width: 100%;

			.close-refund {
				padding: 24rpx 80rpx;
				border-radius: 80rpx;
				color: #fff;
				background-color: #ccc;
			}

			.submit-refund {
				width: 100%;
				padding: 24rpx 0rpx;
				text-align: center;
				border-radius: 80rpx;
				color: #fff;
				background-color: var(--view-theme);
			}
		}
	}

	.refund-input.on {
		transform: translate3d(0, 0, 0);
	}

	.goodCall {
		color: var(--view-theme);
		text-align: center;
		width: 100%;
		height: 86rpx;
		padding: 0 30rpx;
		border-bottom: 1rpx solid #eee;
		font-size: 30rpx;
		line-height: 86rpx;
		background: #fff;

		.icon-kefu {
			font-size: 36rpx;
			margin-right: 15rpx;
		}

		/* #ifdef MP */
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 86rpx;
			font-size: 30rpx;
			color: var(--view-theme);
		}

		/* #endif */
	}

	.order-details .header {
		padding: 0 30rpx;
		height: 150rpx;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
	}

	.order-details .header.on {
		background-color: #666 !important;
	}

	.order-details .header .pictrue {
		width: 110rpx;
		height: 110rpx;
	}

	.order-details .header .pictrue image {
		width: 100%;
		height: 100%;
	}

	.order-details .header .data {
		color: rgba(255, 255, 255, 0.8);
		font-size: 24rpx;
		margin-left: 27rpx;
	}

	.order-details .header .data.on {
		margin-left: 0;
	}

	.order-details .header .data .state {
		font-size: 30rpx;
		font-weight: bold;
		color: #fff;
		margin-bottom: 7rpx;
	}

	.order-details .header .data .time {
		margin-left: 20rpx;
	}

	.order-details .nav {
		background-color: #fff;
		font-size: 26rpx;
		color: #282828;
		padding: 25rpx 0;
	}

	.order-details .nav .navCon {
		padding: 0 40rpx;
	}

	.order-details .nav .on {
		color: var(--view-theme);
	}

	.order-details .nav .progress {
		padding: 0 65rpx;
		margin-top: 10rpx;
	}

	.order-details .nav .progress .line {
		width: 100rpx;
		height: 2rpx;
		background-color: #939390;
	}

	.order-details .nav .progress .iconfont {
		font-size: 25rpx;
		color: #939390;
		margin-top: -2rpx;
	}

	.order-details .address {
		font-size: 26rpx;
		color: #868686;
		background-color: #fff;
		margin-top: 13rpx;
		padding: 35rpx 30rpx;
	}

	.order-details .address .name {
		font-size: 30rpx;
		color: #282828;
		margin-bottom: 15rpx;
	}

	.order-details .address .name .phone {
		margin-left: 40rpx;
	}

	.order-details .line {
		width: 100%;
		height: 3rpx;
	}

	.order-details .line image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.order-details .wrapper {
		background-color: #fff;
		margin-top: 12rpx;
		padding: 30rpx;
	}

	.order-details .wrapper .item {
		font-size: 28rpx;
		color: #282828;
	}

	.order-details .wrapper .item~.item {
		margin-top: 20rpx;
	}

	.order-details .wrapper .item .conter {
		color: #868686;
		width: 460rpx;
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-end;
	}

	.order-details .wrapper .item .conter .copy {
		font-size: 20rpx;
		color: #333;
		border-radius: 3rpx;
		border: 1rpx solid #666;
		padding: 3rpx 15rpx;
		margin-left: 24rpx;
		white-space: nowrap;
	}

	.order-details .wrapper .actualPay {
		border-top: 1rpx solid #eee;
		margin-top: 30rpx;
		padding-top: 30rpx;
	}

	.order-details .wrapper .actualPay .money {
		font-weight: bold;
		font-size: 30rpx;
	}

	.order-details .footer {
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #fff;
		padding: 0 30rpx;
		box-sizing: border-box;

		.more {
			position: absolute;
			left: 30rpx;
			font-size: 26rpx;
			color: #333;

			.icon-xiangshang {
				margin-left: 6rpx;
				font-size: 22rpx;
			}
		}

		.more-box {
			color: #333;
			position: absolute;
			left: 30rpx;
			bottom: 110rpx;
			background-color: #fff;
			padding: 10rpx;
			border-radius: 4rpx;
			font-size: 24rpx;
			border: 1px solid #f2f2f2;

			.more-btn {
				color: #333;
				padding: 4rpx;
				z-index: 9999;
			}
		}

		.more-box:before {
			content: "";
			width: 0rpx;
			height: 0rpx;
			border-top: 10rpx solid #fff;
			border-bottom: 10rpx solid transparent;
			border-left: 10rpx solid #fff;
			position: absolute;
			bottom: -10rpx;
			left: 0px;
		}

		.more-box::after {
			content: "";
			width: 0rpx;
			height: 0rpx;
			border-top: 10rpx solid #fff;
			border-bottom: 10rpx solid transparent;
			border-left: 10rpx solid #fff;
			position: absolute;
			bottom: -11rpx;
			left: 0px;
			border: 1px solid #f2f2f2;
		}
	}

	.order-details .footer .bnt {
		width: 176rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 50rpx;
		color: #fff;
		font-size: 27rpx;
	}

	.order-details .footer .bnt.refundBnt {
		width: 210rpx;
	}

	.order-details .footer .bnt.cancel {
		color: #aaa;
		border: 1rpx solid #ddd;
	}

	.order-details .footer .bnt~.bnt {
		margin-left: 18rpx;
	}

	.order-details .writeOff {
		background-color: #fff;
		margin-top: 13rpx;
		padding-bottom: 30rpx;
	}

	.order-details .writeOff .title {
		font-size: 30rpx;
		color: #282828;
		height: 87rpx;
		border-bottom: 1px solid #f0f0f0;
		padding: 0 30rpx;
		line-height: 87rpx;
	}

	.order-details .writeOff .grayBg {
		background-color: #f2f5f7;
		width: 590rpx;
		height: 384rpx;
		border-radius: 20rpx 20rpx 0 0;
		margin: 50rpx auto 0 auto;
		padding-top: 55rpx;
		position: relative;
	}

	.order-details .writeOff .grayBg .written {
		position: absolute;
		top: 0;
		right: 0;
		width: 60rpx;
		height: 60rpx;
	}

	.order-details .writeOff .grayBg .written image {
		width: 100%;
		height: 100%;
	}

	.order-details .writeOff .grayBg .pictrue {
		width: 290rpx;
		height: 290rpx;
		margin: 0 auto;
	}

	.order-details .writeOff .grayBg .pictrue image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.order-details .writeOff .gear {
		width: 590rpx;
		height: 30rpx;
		margin: 0 auto;
	}

	.order-details .writeOff .gear image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.order-details .writeOff .num {
		background-color: #f0c34c;
		width: 590rpx;
		height: 84rpx;
		color: #282828;
		font-size: 48rpx;
		margin: 0 auto;
		border-radius: 0 0 20rpx 20rpx;
		text-align: center;
		padding-top: 4rpx;
	}

	.order-details .writeOff .rules {
		margin: 46rpx 30rpx 0 30rpx;
		border-top: 1px solid #f0f0f0;
		padding-top: 10rpx;
	}

	.order-details .writeOff .rules .item {
		margin-top: 20rpx;
	}

	.order-details .writeOff .rules .item .rulesTitle {
		font-size: 28rpx;
		color: #282828;
	}

	.order-details .writeOff .rules .item .rulesTitle .iconfont {
		font-size: 30rpx;
		color: #333;
		margin-right: 8rpx;
		margin-top: 5rpx;
	}

	.order-details .writeOff .rules .item .info {
		font-size: 28rpx;
		color: #999;
		margin-top: 7rpx;
	}

	.order-details .writeOff .rules .item .info .time {
		margin-left: 20rpx;
	}

	.order-details .map {
		height: 86rpx;
		font-size: 30rpx;
		color: #282828;
		line-height: 86rpx;
		border-bottom: 1px solid #f0f0f0;
		margin-top: 13rpx;
		background-color: #fff;
		padding: 0 30rpx;
	}

	.order-details .map .place {
		font-size: 26rpx;
		width: 176rpx;
		height: 50rpx;
		border-radius: 25rpx;
		line-height: 50rpx;
		text-align: center;
	}

	.order-details .map .place .iconfont {
		font-size: 27rpx;
		height: 27rpx;
		line-height: 27rpx;
		margin: 2rpx 3rpx 0 0;
	}

	.order-details .address .name .iconfont {
		font-size: 34rpx;
		margin-left: 10rpx;
	}

	.refund {
		padding: 0 30rpx 30rpx;
		margin-top: 24rpx;
		background-color: #fff;

		.title {
			display: flex;
			align-items: center;
			font-size: 30rpx;
			color: #333;
			height: 86rpx;
			border-bottom: 1px solid #f5f5f5;

			image {
				width: 32rpx;
				height: 32rpx;
				margin-right: 10rpx;
			}
		}

		.con {
			padding-top: 25rpx;
			font-size: 28rpx;
			color: #868686;
		}
	}
</style>

<style lang="scss">
	.qs-btn {
		width: auto;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 50rpx;
		color: #fff;
		font-size: 27rpx;
		padding: 0 3%;
		color: #aaa;
		border: 1px solid #ddd;
		margin-right: 20rpx;
	}
</style>
<style scoped lang="scss">
	.invoice-mask {
		background-color: #999999;
		opacity: 1;
	}

	.more-mask {
		background-color: #fff;
		opacity: 0;
		left: 160rpx;
	}

	.goodCall {
		color: var(--view-theme);
		text-align: center;
		width: 100%;
		height: 86rpx;
		padding: 0 30rpx;
		border-top: 1rpx solid #eee;
		font-size: 30rpx;
		line-height: 86rpx;
		background: #fff;

		.icon-kefu {
			font-size: 36rpx;
			margin-right: 15rpx;
		}

		/* #ifdef MP */
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 86rpx;
			font-size: 30rpx;
			color: var(--view-theme);
		}

		/* #endif */
	}

	.order-details .header {
		padding: 0 30rpx;
		height: 150rpx;
	}

	.order-details .header.on {
		background-color: #666 !important;
	}

	.order-details .header .pictrue {
		width: 110rpx;
		height: 110rpx;
	}

	.order-details .header .pictrue image {
		width: 100%;
		height: 100%;
	}

	.order-details .header .data {
		color: rgba(255, 255, 255, 0.8);
		font-size: 24rpx;
		margin-left: 27rpx;
	}

	.order-details .header .data.on {
		margin-left: 0;
	}

	.order-details .header .data .state {
		font-size: 30rpx;
		font-weight: bold;
		color: #fff;
		margin-bottom: 7rpx;
	}

	.order-details .header .data .time {
		margin-left: 20rpx;
	}

	.order-details .nav {
		background-color: #fff;
		font-size: 26rpx;
		color: #282828;
		padding: 25rpx 0;
	}

	.order-details .nav .navCon {
		padding: 0 40rpx;
	}

	.order-details .nav .on {
		color: var(--view-theme);
	}

	.order-details .nav .progress {
		padding: 0 65rpx;
		margin-top: 10rpx;
	}

	.order-details .nav .progress .line {
		width: 100rpx;
		height: 2rpx;
		background-color: #939390;
	}

	.order-details .nav .progress .iconfont {
		font-size: 25rpx;
		color: #939390;
		margin-top: -2rpx;
	}

	.order-details .address {
		font-size: 26rpx;
		color: #868686;
		background-color: #fff;
		margin-top: 13rpx;
		padding: 35rpx 30rpx;
	}

	.order-details .address .name {
		font-size: 30rpx;
		color: #282828;
		margin-bottom: 15rpx;
	}

	.order-details .address .name .phone {
		margin-left: 40rpx;
	}

	.order-details .line {
		width: 100%;
		height: 3rpx;
	}

	.order-details .line image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.order-details .wrapper {
		background-color: #fff;
		margin-top: 12rpx;
		padding: 30rpx;
	}

	.order-details .wrapper .item {
		font-size: 28rpx;
		color: #282828;
	}

	.order-details .wrapper .item~.item {
		margin-top: 20rpx;
	}

	.order-details .wrapper .item .conter {
		color: #868686;
		width: 450rpx;
		word-break: break-all;
	}

	.order-details .wrapper .item .conter .copy {
		font-size: 20rpx;
		color: #333;
		border-radius: 3rpx;
		border: 1rpx solid #666;
		padding: 3rpx 15rpx;
		margin-left: 24rpx;
	}

	.order-details .wrapper .actualPay {
		border-top: 1rpx solid #eee;
		margin-top: 30rpx;
		padding-top: 30rpx;
	}

	.order-details .wrapper .actualPay .money {
		font-weight: bold;
		font-size: 30rpx;
	}

	.order-details .footer {
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #fff;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.order-details .footer .bnt {
		width: 176rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 50rpx;
		color: #fff;
		font-size: 27rpx;
	}

	.order-details .footer .bnt.cancel {
		color: #aaa;
		border: 1rpx solid #ddd;
	}

	.order-details .footer .bnt~.bnt {
		margin-left: 18rpx;
	}

	.order-details .writeOff {
		background-color: #fff;
		margin-top: 13rpx;
		padding-bottom: 30rpx;
	}

	.order-details .writeOff .title {
		font-size: 30rpx;
		color: #282828;
		height: 87rpx;
		border-bottom: 1px solid #f0f0f0;
		padding: 0 30rpx;
		line-height: 87rpx;
	}

	.order-details .writeOff .grayBg {
		background-color: #f2f5f7;
		width: 590rpx;
		height: 384rpx;
		border-radius: 20rpx 20rpx 0 0;
		margin: 50rpx auto 0 auto;
		padding-top: 55rpx;
		position: relative;
	}

	.order-details .writeOff .grayBg .written {
		position: absolute;
		top: 0;
		right: 0;
		width: 60rpx;
		height: 60rpx;
	}

	.order-details .writeOff .grayBg .written image {
		width: 100%;
		height: 100%;
	}

	.order-details .writeOff .grayBg .pictrue {
		width: 290rpx;
		height: 290rpx;
		margin: 0 auto;
	}

	.order-details .writeOff .grayBg .pictrue image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.order-details .writeOff .gear {
		width: 590rpx;
		height: 30rpx;
		margin: 0 auto;
	}

	.order-details .writeOff .gear image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.order-details .writeOff .num {
		background-color: #f0c34c;
		width: 590rpx;
		height: 84rpx;
		color: #282828;
		font-size: 48rpx;
		margin: 0 auto;
		border-radius: 0 0 20rpx 20rpx;
		text-align: center;
		padding-top: 4rpx;
	}

	.order-details .writeOff .rules {
		margin: 46rpx 30rpx 0 30rpx;
		border-top: 1px solid #f0f0f0;
		padding-top: 10rpx;
	}

	.order-details .writeOff .rules .item {
		margin-top: 20rpx;
	}

	.order-details .writeOff .rules .item .rulesTitle {
		font-size: 28rpx;
		color: #282828;
	}

	.order-details .writeOff .rules .item .rulesTitle .iconfont {
		font-size: 30rpx;
		color: #333;
		margin-right: 8rpx;
		margin-top: 5rpx;
	}

	.order-details .writeOff .rules .item .info {
		font-size: 28rpx;
		color: #999;
		margin-top: 7rpx;
	}

	.order-details .writeOff .rules .item .info .time {
		margin-left: 20rpx;
	}

	.order-details .map {
		height: 86rpx;
		font-size: 30rpx;
		color: #282828;
		line-height: 86rpx;
		border-bottom: 1px solid #f0f0f0;
		margin-top: 13rpx;
		background-color: #fff;
		padding: 0 30rpx;
	}

	.order-details .map .place {
		font-size: 26rpx;
		width: 176rpx;
		height: 50rpx;
		border-radius: 25rpx;
		line-height: 50rpx;
		text-align: center;
	}

	.order-details .map .place .iconfont {
		font-size: 27rpx;
		height: 27rpx;
		line-height: 27rpx;
		margin: 2rpx 3rpx 0 0;
	}

	.order-details .address .name .iconfont {
		font-size: 34rpx;
		margin-left: 10rpx;
	}

	.refund {
		padding: 0 30rpx 30rpx;
		margin-top: 24rpx;
		background-color: #fff;

		.title {
			display: flex;
			align-items: center;
			font-size: 30rpx;
			color: #333;
			height: 86rpx;
			border-bottom: 1px solid #f5f5f5;

			image {
				width: 32rpx;
				height: 32rpx;
				margin-right: 10rpx;
			}
		}

		.con {
			padding-top: 25rpx;
			font-size: 28rpx;
			color: #868686;
		}
	}

	.refund-msg {
		background-color: #fff;
		padding: 20rpx 40rpx;
		font-size: 28rpx;

		.refund-msg-user {
			font-weight: bold;
			margin-bottom: 10rpx;

			.copy-refund-msg {
				font-size: 10px;
				border-radius: 1px;
				border: 0.5px solid #666;
				padding: 1px 7px;
				margin-left: 12px;
			}

			.name {
				margin-right: 20rpx;
			}
		}

		.refund-address {
			color: #868686;
		}
	}
</style>
