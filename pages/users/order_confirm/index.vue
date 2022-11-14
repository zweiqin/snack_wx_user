<template>
	<view :style="colorStyle">
		<view class="order-submission">
			<view v-if="!virtual_type" class="allAddress" :style="store_self_mention ? '':'padding-top:10rpx'">

				<view class="nav acea-row">
					<view
						v-if="store_self_mention" class="item font-num" :class="shippingType == 0 ? 'on' : 'on2'"
						@tap="addressType(0)"
					></view>
					<view
						v-if="store_self_mention" class="item font-num" :class="shippingType == 1 ? 'on' : 'on2'"
						@tap="addressType(1)"
					></view>
				</view>
				<view v-if="shippingType == 0" class="address acea-row row-between-wrapper" @tap="onAddress">
					<!-- <view class='addressCon' v-if="addressInfo.real_name">
						<view class='name'>{{addressInfo.real_name}}
							<text class='phone'>{{addressInfo.phone}}</text>
						</view>
						<view class="line1">
							<text class='default font-num'
								v-if="addressInfo.is_default">[默认]</text>{{addressInfo.province}}{{addressInfo.city}}{{addressInfo.district}}{{addressInfo.detail}}
						</view>
					</view>
					<view class='addressCon' v-else>
						<view class='setaddress'>设置收货地址</view>
					</view> -->
					<view v-if="addressMap.poiname" class="addressCon">
						<view class="name">{{ addressMap.poiname }}
							<text class="phone"></text>
						</view>
						<view class="line1">
							{{ addressMap.poiaddress }}
						</view>
					</view>
					<!-- {
						real_name:'',
						phone:'',
						province:'',
						city:'',
						district:'',
						detail:'',
					} -->
					<view v-else class="addressCon">
						<view class="setaddress">设置收货地址</view>
					</view>
					<view class="iconfont icon-jiantou"></view>
				</view>
				<view v-else class="address acea-row row-between-wrapper" @tap="showStoreList">
					<block v-if="storeList.length>0">
						<view class="addressCon">
							<view class="name">{{ system_store.name }}
								<text class="phone">{{ system_store.phone }}</text>
							</view>
							<view class="line1"> {{ system_store.address }}{{ ", " + system_store.detailed_address }}</view>
						</view>
						<view class="iconfont icon-jiantou"></view>
					</block>
					<block v-else>
						<view>暂无门店信息</view>
					</block>
				</view>
				<view class="line">
					<image src="/static/images/line.jpg"></image>
				</view>

				<view v-if="shippingType == 0">
					<view style="padding: 20rpx 20rpx 0 20rpx;">
						<uni-forms ref="baseForm" :model-value="addressMap">
							<uni-forms-item label="姓名" required>
								<uni-easyinput v-model="addressMap.real_name" trim="all" placeholder="请输入收货人姓名" />
							</uni-forms-item>
							<uni-forms-item label="手机号" required>
								<uni-easyinput v-model="addressMap.phone" type="number" trim="all" placeholder="请输入收货人手机号" />
							</uni-forms-item>
						</uni-forms>
					</view>

					<view class="">
						<uni-card :is-shadow="false">
							<view @tap="handlePicker">请选择配送时间：{{ dateTime }}</view>
							<!-- :time-arr="['08:00','10:00','17:00','21:00']" -->
							<w-time-picker
								v-if="is_show_delivery" ref="picker" :time-arr="delivery_time_arr" :after-days="7"
								:start-hour="8" :end-hour="21" :step="60" :after-hours="0"
								@confirm="onConfirm" @cancel="onCancel"
							></w-time-picker>
						</uni-card>
					</view>
				</view>

			</view>
			<orderGoods :cart-info="cartInfo" :is_confirm="true"></orderGoods>
			<view class="wrapper">
				<view
					v-if="!pinkId && !BargainId && !combinationId && !seckillId&& !noCoupon && !discountId && !advanceId" class="item acea-row row-between-wrapper"
					@tap="couponTap"
				>
					<view>优惠券</view>
					<view class="discount">{{ couponTitle }}
						<text class="iconfont icon-jiantou"></text>
					</view>
				</view>
				<view
					v-if="!pinkId && !BargainId && !combinationId && !seckillId && !advanceId"
					class="item acea-row row-between-wrapper"
				>
					<view>积分抵扣</view>
					<view class="discount acea-row row-middle">
						<view> {{ useIntegral ? "剩余积分":"当前积分" }}
							<text class="num font-color">{{ integral || 0 }}</text>
						</view>
						<checkbox-group @change="ChangeIntegral">
							<checkbox :disabled="integral<=0 && !useIntegral" :checked="useIntegral ? true : false" />
						</checkbox-group>
					</view>
				</view>
				<view v-if="invoice_func || special_invoice" class="item acea-row row-between-wrapper" @tap="goInvoice">
					<view>开具发票</view>
					<view class="discount">
						{{ invTitle }}
						<text class="iconfont icon-jiantou"></text>
					</view>
				</view>
				<!-- <view class='item acea-row row-between-wrapper' v-if="priceGroup.vipPrice > 0 && userInfo.vip && !pinkId && !BargainId && !combinationId && !seckillId">
					<view>会员优惠</view>
					<view class='discount'>-￥{{priceGroup.vipPrice}}</view>
				</view>
				<view class='item acea-row row-between-wrapper' v-if='shippingType==0'>
					<view>快递费用</view>
					<view class='discount' v-if='priceGroup.storePostage > 0'>+￥{{priceGroup.storePostage}}</view>
					<view class='discount' v-else>免运费</view>
				</view> -->
				<view v-if="shippingType == 1">
					<view class="item acea-row row-between-wrapper">
						<view>联系人</view>
						<view class="discount">
							<input
								v-model="contacts" style="text-align: right;" type="text" placeholder="请填写您的联系姓名"
								placeholder-class="placeholder"
							></input>
						</view>
					</view>
					<view class="item acea-row row-between-wrapper">
						<view>联系电话</view>
						<view class="discount">
							<input
								v-model="contactsTel" style="text-align: right;" type="text" placeholder="请填写您的联系电话"
								placeholder-class="placeholder"
							></input>
						</view>
					</view>
				</view>
				<!-- <view class='item acea-row row-between-wrapper' wx:else>
		      <view>自提门店</view>
		      <view class='discount'>{{system_store.name}}</view>
		    </view> -->
				<view v-if="textareaStatus" class="item">
					<view>备注信息</view>
					<!-- <view class="placeholder-textarea"> -->
					<textarea
						v-if="!coupon.coupon" placeholder-class="placeholder" placeholder="请添加备注（150字以内）"
						:value="mark" :maxlength="150" name="mark" @input="bindHideKeyboard"
					>
						</textarea>
					<!-- 	<view class="placeholder" @click="clickTextArea" v-show="!mark">
							请添加备注（150字以内）
						</view> -->
					<!-- </view> -->
				</view>
			</view>
			<!-- <view class='wrapper'>
				<view class='item'>
					<view>支付方式</view>
					<view class='list'>
						<view class='payItem acea-row row-middle' :class='active==index ?"on":""' @tap='payItem(index)' v-for="(item,index) in cartArr"
						 :key='index' v-if="item.payStatus==1">
							<view class='name acea-row'>
								<view class='iconfont animated' :class='(item.icon) + " " + (animated==true&&active==index ?"bounceIn":"")'></view>{{item.name}}
							</view>
							<view class='tip'>{{item.title}} <span v-if="item.value == 'yue'">{{item.number}}</span> </view>
						</view>
					</view>
				</view>
			</view> -->
			<view class="moneyList">
				<view class="item acea-row row-between-wrapper">
					<view>商品总价：</view>
					<view class="money">
						￥{{ (parseFloat(priceGroup.totalPrice)+parseFloat(priceGroup.vipPrice)).toFixed(2) }}</view>
				</view>
				<view v-if="priceGroup.storePostage > 0" class="item acea-row row-between-wrapper">
					<view>配送运费：</view>
					<view class="money">
						￥{{ (parseFloat(priceGroup.storePostage)+parseFloat(priceGroup.storePostageDiscount)).toFixed(2) }}
					</view>
				</view>
				<view
					v-if="priceGroup.vipPrice > 0 && userInfo.vip && !pinkId && !BargainId && !combinationId && !seckillId && !discountId"
					class="item acea-row row-between-wrapper"
				>
					<view>会员商品优惠：</view>
					<view class="money">-￥{{ parseFloat(priceGroup.vipPrice).toFixed(2) }}</view>
				</view>
				<view v-if="priceGroup.storePostageDiscount > 0" class="item acea-row row-between-wrapper">
					<view>会员运费优惠：</view>
					<view class="money">-￥{{ parseFloat(priceGroup.storePostageDiscount).toFixed(2) }}</view>
				</view>
				<view v-if="coupon_price > 0" class="item acea-row row-between-wrapper">
					<view>优惠券抵扣：</view>
					<view class="money">-￥{{ parseFloat(coupon_price).toFixed(2) }}</view>
				</view>
				<view v-if="integral_price > 0" class="item acea-row row-between-wrapper">
					<view>积分抵扣：</view>
					<view class="money">-￥{{ parseFloat(integral_price).toFixed(2) }}</view>
				</view>
				<!-- <view class='item acea-row row-between-wrapper' v-if="priceGroup.storePostage > 0">
					<view>运费：</view>
					<view class='money'>+￥{{priceGroup.storePostage}}</view>
				</view>
				<view class='item acea-row row-between-wrapper' v-if="priceGroup.storePostageDiscount > 0">
					<view>会员运费抵扣：</view>
					<view class='money'>-￥{{priceGroup.storePostageDiscount}}</view>
				</view> -->
			</view>
			<view style="height:120rpx;"></view>
			<view class="footer acea-row row-between-wrapper">
				<view>合计:
					<text class="font-color">￥{{ totalPrice || 0 }}</text>
				</view>
				<view
					v-if="(valid_count>0&&!discount_id) || (valid_count==cartInfo.length&&discount_id)" class="settlement" style="z-index:100"
					@tap.stop="goPay"
				>立即结算</view>
				<view v-else class="settlement bg-color-hui" style="z-index:100">立即结算</view>
			</view>
		</view>
		<view class="alipaysubmit" v-html="formContent"></view>
		<couponListWindow
			:coupon="coupon" :open-type="openType" :cart-id="cartId" @ChangCouponsClone="ChangCouponsClone"
			@ChangCoupons="ChangCoupons"
		></couponListWindow>
		<addressWindow
			ref="addressWindow" :news="news" :address="address" :pages-url="pagesUrl"
			@changeTextareaStatus="changeTextareaStatus" @OnChangeAddress="OnChangeAddress" @changeClose="changeClose"
		></addressWindow>
		<!-- #ifdef MP -->
		<!-- <authorize @onLoadFun="onLoadFun" :isAuto="isAuto" :isShowAuth="isShowAuth" @authColse="authColse"></authorize> -->
		<!-- #endif -->
		<home v-show="!invShow"></home>
		<invoice-picker
			:inv-show="invShow" :inv-list="invList" :inv-checked="invChecked" :is-special="special_invoice"
			:url-query="urlQuery" @inv-close="invClose" @inv-change="invChange" @inv-cancel="invCancel"
		>
		</invoice-picker>
		<payment
			:pay-mode="cartArr" :pay_close="pay_close" :is-call="true" :total-price="totalPrice.toString()"
			@changePayType="changePayType" @onChangeFun="onChangeFun"
		></payment>
	</view>
</template>
<script>
import {
	GetEbSystemStoreList, GetDeliveryTime
} from '@/api/go_api.js'
import {
	orderConfirm,
	getCouponsOrderPrice,
	orderCreate,
	postOrderComputed
} from '@/api/order.js'
import {
	getAddressDefault,
	getAddressDetail,
	invoiceList,
	invoiceOrder
} from '@/api/user.js'
import {
	openPaySubscribe
} from '@/utils/SubscribeMessage.js'
import {
	storeListApi
} from '@/api/store.js'
import {
	CACHE_LONGITUDE,
	CACHE_LATITUDE
} from '@/config/cache.js'
import couponListWindow from '@/components/couponListWindow'
import addressWindow from '@/components/addressWindow'
import orderGoods from '@/components/orderGoods'
import home from '@/components/home'
import invoicePicker from '@/components/invoicePicker'
import {
	toLogin
} from '@/libs/login.js'
import {
	mapGetters
} from 'vuex'
// #ifdef MP
import authorize from '@/components/Authorize'
// #endif
import payment from '@/components/payment'
import colors from '@/mixins/color'

// import wTimePicker from "@/components/w-time-picker/w-time-picker.vue";

// #ifdef MP
const chooseLocation = requirePlugin('chooseLocation')
// #endif

// try {
// 	const chooseLocation = requirePlugin('chooseLocation')
// } catch (e) {
// 	console.log('错')
// }

export default {
	components: {
		payment,
		invoicePicker,
		couponListWindow,
		addressWindow,
		orderGoods,
		home,
		// #ifdef MP
		authorize
		// #endif
	},
	mixins: [ colors ],
	data() {
		return {

			// 配送时间
			dateTime: '',
			delivery_time_arr: [],
			is_show_delivery: true,
			// 地图选点的配送地址
			addressMap: {
				real_name: '',
				phone: ''
			},
			// // 商店列表
			// shop_list: [
			// 	{ lat: 22.597248, lng: 113.080287 },
			// 	{ lat: 22.618858, lng: 113.097822 },
			// 	{ lat: 22.595348, lng: 113.076685 },
			// 	{ lat: 22.591112, lng: 113.086675 },
			// 	{ lat: 22.57546, lng: 113.071951 },
			// 	{ lat: 22.587649, lng: 113.069679 }
			// ],
			is_suitable: false,

			textareaStatus: true,
			// 支付方式
			cartArr: [{
				'name': '微信支付',
				'icon': 'icon-weixin2',
				'value': 'weixin',
				'title': '使用微信快捷支付',
				'payStatus': 1
			},
			{
				'name': '支付宝支付',
				'icon': 'icon-zhifubao',
				'value': 'alipay',
				'title': '使用线上支付宝支付',
				'payStatus': 1
			},
			{
				'name': '余额支付',
				'icon': 'icon-yuezhifu',
				'value': 'yue',
				'title': '可用余额:',
				'payStatus': 1
			},
			{
				'name': '线下支付',
				'icon': 'icon-yuezhifu1',
				'value': 'offline',
				'title': '选择线下付款方式',
				'payStatus': 2
			}],
			virtual_type: 0,
			formContent: '',
			payType: 'weixin', // 支付方式
			openType: 1, // 优惠券打开方式 1=使用
			active: 0, // 支付方式切换
			coupon: {
				coupon: false,
				list: [],
				statusTile: '立即使用'
			}, // 优惠券组件
			address: {
				address: false
			}, // 地址组件
			addressInfo: {}, // 地址信息
			pinkId: 0, // 拼团id
			addressId: 0, // 地址id
			couponId: 0, // 优惠券id
			cartId: '', // 购物车id
			BargainId: 0,
			combinationId: 0,
			seckillId: 0,
			discountId: 0,
			userInfo: {}, // 用户信息
			mark: '', // 备注信息
			couponTitle: '请选择', // 优惠券
			coupon_price: 0, // 优惠券抵扣金额
			useIntegral: false, // 是否使用积分
			integral_price: 0, // 积分抵扣金额
			integral: 0,
			ChangePrice: 0, // 使用积分抵扣变动后的金额
			formIds: [], // 收集formid
			status: 0,
			is_address: false,
			toPay: false, // 修复进入支付时页面隐藏从新刷新页面
			shippingType: 0,
			system_store: {},
			storePostage: 0,
			advanceId: 0,
			contacts: '',
			contactsTel: '',
			mydata: {},
			storeList: [],
			store_self_mention: 0,
			cartInfo: [],
			priceGroup: {},
			animated: false,
			totalPrice: 0,
			integralRatio: '0',
			pagesUrl: '',
			orderKey: '',
			// usableCoupon: {},
			offlinePostage: '',
			isAuto: false, // 没有授权的不会自动授权
			isShowAuth: false, // 是否隐藏授权
			from: '',
			news: 1,

			invTitle: '不开发票',
			special_invoice: false,
			invoice_func: false,
			header_type: '',
			invShow: false,
			invList: [],
			invChecked: '',
			urlQuery: '',
			pay_close: false,
			noCoupon: 0,
			valid_count: 0,
			discount_id: 0
		}
	},
	computed: mapGetters([ 'isLogin' ]),
	onReady() {
		GetDeliveryTime({})
			.then((res) => {
				console.log(res)
				this.delivery_time_arr = res.data.List
				this.is_show_delivery = false
				this.$nextTick(() => {this.is_show_delivery = true})
				// uni.hideLoading()
			})
			.catch((err) =>
			// uni.hideLoading()
					 this.$util.Tips({
					title: err
				}))
	},
	onLoad(options) {
		// #ifdef H5
		this.from = this.$wechat.isWeixin() ? 'weixin' : 'weixinh5'
		// #endif
		// #ifdef MP
		this.from = 'routine'
		// #endif
		if (!options.cartId) {
			return this.$util.Tips({
				title: '请选择要购买的商品'
			}, {
				tab: 3,
				url: 1
			})
		}
		this.couponId = options.couponId || 0
		this.noCoupon = options.noCoupon || 0
		this.pinkId = options.pinkId ? parseInt(options.pinkId) : 0
		this.addressId = options.addressId || 0
		this.cartId = options.cartId
		this.is_address = !!options.is_address
		this.news = !options.new || options.new === '0' ? 0 : 1
		this.invChecked = options.invoice_id || ''
		this.header_type = options.header_type || '1'
		this.couponTitle = options.couponTitle || '请选择'

		switch (options.invoice_type) {
			case '1':
				this.invTitle = '增值税电子普通发票'
				break
			case '2':
				this.invTitle = '增值税电子专用发票'
				break
		}
		// #ifndef APP-PLUS
		this.textareaStatus = true
		// #endif
		if (this.isLogin && this.toPay == false) {
			this.getaddressInfo()
			this.getConfirm()
			this.$nextTick(function () {
				this.$refs.addressWindow.getAddressList()
			})
		} else {
			toLogin()
		}

		// uni.$on('toAddressMap', (data) => {
		// 	console.log(data)
		// 	this.addressMap = Object.assign(this.addressMap, data)
		// 	this.$forceUpdate()
		// 	// {...data,real_name:'TODO',phone:'TODO'}
		// })
	},

	/**
		 * 生命周期函数--监听页面显示
		 */

	onShow() {
		// 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
		const location = chooseLocation.getLocation() // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
		console.log(location)
		if (location) {
			this.addressMap = Object.assign(this.addressMap, { latlng: location.latitude + ',' + location.longitude, lat: location.latitude, lng: location.longitude, poiaddress: location.address, poiname: location.name })
			this.$forceUpdate()
			//	计算两点之间直线距离
			const algorithm = (point1, point2) => {
				const [x1, y1] = point1
				const [x2, y2] = point2
				const Lat1 = x1 * Math.PI / 180.00 // 纬度
				const Lat2 = x2 * Math.PI / 180.00
				const a = Lat1 - Lat2 //	两点纬度之差
				const b = y1 * Math.PI / 180.00 - y2 * Math.PI / 180.00 //	经度之差
				let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(Lat1) * Math.cos(Lat2) * Math.pow(Math.sin(b / 2), 2)))
				// 计算两点距离的公式
				s = s * 6378137.0 //	弧长等于弧度乘地球半径（半径为米）
				console.log(s)
				s = Math.round(s * 10000) / 10000 //	精确距离的数值
				console.log(s)
				return s
			}
			GetEbSystemStoreList({ is_show: 1, is_del: 0 })
				.then((res) => {
					console.log(res)
					this.is_suitable = res.data.items.some((item) => algorithm([this.addressMap.lat, this.addressMap.lng], [item.latitude, item.longitude]) < 2000)
				// uni.hideLoading()
				})
				.catch((err) =>
					// uni.hideLoading()
					 this.$util.Tips({
						title: err
					}))
			// this.is_suitable = this.shop_list.some((item) => algorithm([22.59514, 113.07845], [item.lat, item.lng]) < 500)
			// this.is_suitable = this.shop_list.some((item) => algorithm([this.addressMap.lat, this.addressMap.lng], [item.lat, item.lng]) < 500)
		}

		const _this = this
		uni.$on('handClick', (res) => {
			if (res) {
				_this.system_store = res.address
			}
			// 清除监听
			uni.$off('handClick')
		})
	},
	onUnload() {
		// 页面卸载时设置插件选点数据为null，防止再次进入页面，geLocation返回的是上次选点结果
		chooseLocation.setLocation(null)
	},
	methods: {
		handlePicker() {
			if (!this.addressMap.latlng || !this.addressMap.poiaddress) {
				return uni.showToast({
					title: '请先选择配送地点',
					icon: 'error',
					duration: 2000
				})
			}
			this.$refs.picker.show()
		},
		onConfirm(res) {
			this.dateTime = res
			console.log(this.dateTime)
		},
		onCancel() {
			console.log('取消选择')
		},

		// 不开发票
		invCancel() {
			this.invChecked = ''
			this.invTitle = '不开发票'
			this.invShow = false
		},
		// 选择发票
		invChange(id) {
			this.invChecked = id
			this.invShow = false
			const result = this.invList.find((item) => item.id === id)
			let name = ''
			name += result.header_type === 1 ? '个人' : '企业'
			name += result.type === 1 ? '普通' : '专用'
			name += '发票'
			this.invTitle = name
		},
		// 关闭发票
		invClose() {
			this.invShow = false
			this.getInvoiceList()
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

		/**
			 * 开发票
			 */

		goInvoice() {
			this.getInvoiceList()
			this.invShow = true
			this.urlQuery =
					`new=${this.news}&cartId=${this.cartId}&pinkId=${this.pinkId}&couponId=${this.couponId}&addressId=${this.addressId}&specialInvoice=${this.special_invoice}&couponTitle=${this.couponTitle}`
		},

		/**
			 * 授权回调事件
			 *
			 */

		onLoadFun() {
			this.getaddressInfo()
			this.getConfirm()
			// 调用子页面方法授权后执行获取地址列表
			// this.$scope.selectComponent('#address-window').getAddressList();
		},

		/**
			 * 事件回调
			 *
			 */

		onChangeFun(e) {
			console.log(e)
			const opt = e
			const action = opt.action || null
			const value = opt.value != undefined ? opt.value : null
			action && this[action] && this[action](value)
		},
		payClose() {
			this.pay_close = false
		},
		goPay() {
			const that = this

			if (that.shippingType == 0) {
				if (!that.addressMap.poiaddress && !that.shippingType && !that.virtual_type) {
					return that.$util.Tips({
						title: '请选择收货地址'
					})
				}
				if (!that.addressMap.real_name || !that.addressMap.phone) {
					return that.$util.Tips({
						title: '请输入收货人姓名和收货人手机号'
					})
				}
				if (!this.is_suitable && !that.shippingType) {
					return that.$util.Tips({
						title: '超过了配送范围！'
					})
				}
				if (!that.dateTime) {
					return that.$util.Tips({
						title: '请选择配送时间'
					})
				}
			}
			this.pay_close = true
		},
		payCheck(type) {
			this.payType = type
			this.SubOrder()
		},

		/**
			 * 获取门店列表数据
			 */

		getList() {
			const longitude = uni.getStorageSync('user_longitude') // 经度
			const latitude = uni.getStorageSync('user_latitude') // 纬度
			const data = {
				latitude, // 纬度
				longitude, // 经度
				page: 1,
				limit: 10
			}
			storeListApi(data).then((res) => {
				const list = res.data.list.list || []
				this.$set(this, 'storeList', list)
				this.$set(this, 'system_store', list[0])
			})
				.catch((err) => {})
		},
		// 关闭地址弹窗；
		changeClose() {
			this.$set(this.address, 'address', false)
		},

		/*
			 * 跳转门店列表
			 */

		showStoreList() {
			const _this = this
			if (this.storeList.length > 0) {
				uni.navigateTo({
					url: '/pages/users/goods_details_store/index'
				})
			}
		},
		changePayType(type) {
			this.payType = type
			this.computedPrice()
		},
		computedPrice() {
			const shippingType = this.shippingType
			postOrderComputed(this.orderKey, {
				addressId: this.addressId,
				useIntegral: this.useIntegral ? 1 : 0,
				couponId: this.couponId,
				shipping_type: parseInt(shippingType) + 1,
				payType: this.payType
			}).then((res) => {
				const result = res.data.result
				if (result) {
					this.totalPrice = result.pay_price
					this.integral_price = result.deduction_price
					this.coupon_price = result.coupon_price
					this.integral = this.useIntegral ? result.SurplusIntegral : this.userInfo.integral
					this.$set(this.priceGroup, 'storePostage', shippingType == 1 ? 0 : result.pay_postage)
					this.$set(this.priceGroup, 'storePostageDiscount', result.storePostageDiscount)
				}
			})
		},
		addressType(e) {
			const index = e
			this.shippingType = parseInt(index)
			console.log(this.shippingType)
			this.computedPrice()
			if (index == 1) this.getList()
		},
		bindPickerChange(e) {
			const value = e.detail.value
			this.shippingType = value
			this.computedPrice()
		},
		ChangCouponsClone() {
			this.$set(this.coupon, 'coupon', false)
		},
		changeTextareaStatus() {
			for (let i = 0, len = this.coupon.list.length; i < len; i++) {
				this.coupon.list[i].use_title = ''
				this.coupon.list[i].is_use = 0
			}
			this.textareaStatus = true
			this.status = 0
			this.$set(this.coupon, 'list', this.coupon.list)
		},

		/**
			 * 处理点击优惠券后的事件
			 *
			 */

		ChangCoupons(e) {
			// this.usableCoupon = e
			// this.coupon.coupon = false
			const index = e
			const list = this.coupon.list
			let couponTitle = '请选择'
			let couponId = 0
			for (let i = 0, len = list.length; i < len; i++) {
				if (i != index) {
					list[i].use_title = ''
					list[i].is_use = 0
				}
			}
			if (list[index].is_use) {
				// 不使用优惠券
				list[index].use_title = ''
				list[index].is_use = 0
			} else {
				// 使用优惠券
				list[index].use_title = '不使用'
				list[index].is_use = 1
				couponTitle = list[index].coupon_title
				couponId = list[index].id
			}
			this.couponTitle = couponTitle
			this.couponId = couponId
			this.$set(this.coupon, 'coupon', false)
			this.$set(this.coupon, 'list', list)
			this.computedPrice()
		},

		/**
			 * 使用积分抵扣
			 */

		ChangeIntegral() {
			this.useIntegral = !this.useIntegral
			this.computedPrice()
		},

		/**
			 * 选择地址后改变事件
			 * @param object e
			 */

		OnChangeAddress(e) {
			this.textareaStatus = true
			this.addressId = e
			this.address.address = false
			this.getConfirm()
			this.getaddressInfo()
			this.computedPrice()
		},
		bindHideKeyboard(e) {
			this.mark = e.detail.value
		},

		/**
			 * 获取当前订单详细信息
			 *
			 */

		getConfirm() {
			const that = this
			// return;
			uni.showLoading({
				title: '订单加载中',
				mask: true
			})
			orderConfirm(that.cartId, that.news, that.addressId).then((res) => {
				that.$set(that, 'userInfo', res.data.userInfo)
				that.$set(that, 'integral', res.data.userInfo.integral)
				that.$set(that, 'contacts', res.data.userInfo.real_name)
				that.$set(that, 'contactsTel', res.data.userInfo.record_phone === '0'
					? ''
					: res.data
						.userInfo.record_phone)
				that.$set(that, 'cartInfo', res.data.cartInfo)
				that.$set(that, 'integralRatio', res.data.integralRatio)
				that.$set(that, 'offlinePostage', res.data.offlinePostage)
				that.$set(that, 'orderKey', res.data.orderKey)
				that.$set(that, 'valid_count', res.data.valid_count)
				that.$set(that, 'discount_id', res.data.discount_id)
				that.$set(that, 'priceGroup', res.data.priceGroup)
				that.$set(that, 'totalPrice', that.$util.$h.Add(
					parseFloat(res.data.priceGroup.totalPrice),
					parseFloat(res.data
						.priceGroup.storePostage)
				))
				that.$set(that, 'seckillId', parseInt(res.data.seckill_id))
				that.$set(that, 'invoice_func', res.data.invoice_func)
				that.$set(that, 'special_invoice', res.data.special_invoice)
				that.$set(that, 'store_self_mention', res.data.store_self_mention)
				that.$set(that, 'virtual_type', res.data.virtual_type || 0)
				// 微信支付是否开启
				that.cartArr[0].payStatus = res.data.pay_weixin_open || 0
				// 支付宝是否开启
				that.cartArr[1].payStatus = res.data.ali_pay_status || 0
				// #ifdef MP
				that.cartArr[1].payStatus = 0
				// #endif
				// 余额支付是否开启
				// that.cartArr[2].title = '可用余额:' + res.data.userInfo.now_money;
				that.cartArr[2].number = res.data.userInfo.now_money
				that.cartArr[2].payStatus = res.data.yue_pay_status == 1 ? res.data.yue_pay_status : 0
				if (res.data.offline_pay_status == 2 || res.data.deduction) {
					that.cartArr[3].payStatus = 0
				} else {
					that.cartArr[3].payStatus = 1
				}

				// that.$set(that, 'cartArr', that.cartArr);
				that.$set(that, 'ChangePrice', that.totalPrice)
				that.getBargainId()
				that.getCouponList()
				if (this.addressId) {
					this.computedPrice()
				}
				uni.hideLoading()
			})
				.catch((err) => {
					uni.hideLoading()
					return this.$util.Tips({
						title: err
					})
				})
		},

		/*
			 * 提取砍价和拼团id
			 */

		getBargainId() {
			const that = this
			const cartINfo = that.cartInfo
			let BargainId = 0
			let combinationId = 0
			let discountId = 0
			let advanceId = 0
			cartINfo.forEach(function (value, index, cartINfo) {
				BargainId = cartINfo[index].bargain_id,
				combinationId = cartINfo[index].combination_id,
				discountId = cartINfo[index].discount_id,
				advanceId = cartINfo[index].advance_id
			})
			that.$set(that, 'BargainId', parseInt(BargainId))
			that.$set(that, 'combinationId', parseInt(combinationId))
			that.$set(that, 'discountId', parseInt(discountId))
			that.$set(that, 'advanceId', parseInt(advanceId))
			if (that.cartArr.length == 3 && (BargainId || combinationId || that.seckillId || discountId)) {
				that.cartArr[2].payStatus = 0
				that.$set(that, 'cartArr', that.cartArr)
			}
		},

		/**
			 * 获取当前金额可用优惠券
			 *
			 */

		getCouponList() {
			const that = this
			const data = {
				'cartId': this.cartId,
				'new': this.news
			}
			getCouponsOrderPrice(this.totalPrice, data).then((res) => {
				that.$set(that.coupon, 'list', res.data)
				that.openType = 1
			})
		},

		/*
			 * 获取默认收货地址或者获取某条地址信息
			 */

		getaddressInfo() {
			const that = this
			if (that.addressId) {
				getAddressDetail(that.addressId).then((res) => {
					res.data.is_default = parseInt(res.data.is_default)
					that.addressInfo = res.data || {}
					that.addressId = res.data.id || 0
					that.address.addressId = res.data.id || 0
				})
			} else {
				getAddressDefault().then((res) => {
					res.data.is_default = parseInt(res.data.is_default)
					that.addressInfo = res.data || {}
					that.addressId = res.data.id || 0
					that.address.addressId = res.data.id || 0
				})
			}
		},
		payItem(e) {
			const that = this
			const active = e
			that.active = active
			that.animated = true
			that.payType = that.cartArr[active].value
			that.computedPrice()
			setTimeout(function () {
				that.car()
			}, 500)
		},
		couponTap() {
			this.coupon.coupon = true
			this.coupon.list.forEach((item, index) => {
				if (item.id == this.couponId) {
					item.is_use = 1
				} else {
					item.is_use = 0
				}
			})
			this.$set(this.coupon, 'list', this.coupon.list)
		},
		car() {
			const that = this
			that.animated = false
		},
		onAddress() {
			// const key = 'SMJBZ-WCHK4-ZPZUA-DSIXI-XDDVQ-XWFX7' // 使用在腾讯位置服务申请的key
			const key = 'APQBZ-MECCJ-QCJFY-FVSYX-MP3S7-SFBWG' // 使用在腾讯位置服务申请的key
			const referer = 'AGA示例2' // 调用插件的app的名称
			// const location = JSON.stringify({
			// 	latitude: 39.89631551,
			// 	longitude: 116.323459711
			// })
			const category = '生活服务,娱乐休闲'
			uni.navigateTo({
				url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&category=' + category
			})

			// uni.navigateTo({
			// 	url: '/pages/users/order_map/index?news=' + this.news + '&cartId=' + this.cartId +
			// 		'&pinkId=' +
			// 		this.pinkId +
			// 		'&couponId=' +
			// 		this.couponId
			// })

			// let that = this;
			// that.textareaStatus = false;
			// that.address.address = true;
			// that.pagesUrl = '/pages/users/user_address_list/index?news=' + this.news + '&cartId=' + this.cartId +
			// 	'&pinkId=' +
			// 	this.pinkId +
			// 	'&couponId=' +
			// 	this.couponId;
		},
		payment(data) {
			const that = this
			orderCreate(that.orderKey, data).then((res) => {
				const status = res.data.status
				const orderId = res.data.result.orderId
				const jsConfig = res.data.result.jsConfig
				const goPages = '/pages/order_pay_status/index?order_id=' + orderId + '&msg=' + res.msg +
						'&type=3' + '&totalPrice=' + this.totalPrice
				switch (status) {
					case 'ORDER_EXIST':
					case 'EXTEND_ORDER':
					case 'PAY_ERROR':
						uni.hideLoading()
						return that.$util.Tips({
							title: res.msg
						}, {
							tab: 5,
							url: goPages
						})
						break
					case 'SUCCESS':
						uni.hideLoading()
						if (that.BargainId || that.combinationId || that.pinkId || that.seckillId || that
							.discountId) {
							return that.$util.Tips({
								title: res.msg,
								icon: 'success'
							}, {
								tab: 4,
								url: goPages
							})
						}
						return that.$util.Tips({
							title: res.msg,
							icon: 'success'
						}, {
							tab: 5,
							url: goPages
						})
						break
					case 'WECHAT_PAY':
						that.toPay = true
						// #ifdef MP
						/* that.toPay = true; */

						uni.requestPayment({
							timeStamp: jsConfig.timestamp,
							nonceStr: jsConfig.nonceStr,
							package: jsConfig.package,
							signType: jsConfig.signType,
							paySign: jsConfig.paySign,
							success(res) {
								uni.hideLoading()
								if (that.BargainId || that.combinationId || that.pinkId || that
									.seckillId || that.discountId) {
									return that.$util.Tips({
										title: '支付成功',
										icon: 'success'
									}, {
										tab: 4,
										url: goPages
									})
								}
								return that.$util.Tips({
									title: '支付成功',
									icon: 'success'
								}, {
									tab: 5,
									url: goPages
								})
							},
							fail(e) {
								uni.hideLoading()
								return that.$util.Tips({
									title: '取消支付'
								}, {
									tab: 5,
									url: goPages + '&status=2'
								})
							},
							complete(e) {
								uni.hideLoading()
								// 关闭当前页面跳转至订单状态
								if (res.errMsg == 'requestPayment:cancel') {
									return that.$util
										.Tips({
											title: '取消支付'
										}, {
											tab: 5,
											url: goPages + '&status=2'
										})
								}
							}
						})
						// #endif
						// #ifdef H5
						this.$wechat.pay(res.data.result.jsConfig).then((res) => that.$util.Tips({
							title: '支付成功',
							icon: 'success'
						}, {
							tab: 5,
							url: goPages
						}))
							.catch((res) => {
								if (!this.$wechat.isWeixin()) {
									uni.redirectTo({
										url: goPages +
											'&msg=支付失败&status=2'
									})
								}
								if (res.errMsg == 'chooseWXPay:cancel') {
									return that.$util.Tips({
										title: '取消支付'
									}, {
										tab: 5,
										url: goPages + '&status=2'
									})
								}
							})
						// #endif
						// #ifdef APP-PLUS
						uni.requestPayment({
							provider: 'wxpay',
							orderInfo: jsConfig,
							success: (e) => {
								const url = goPages
								uni.showToast({
									title: '支付成功'
								})
								setTimeout((res) => {
									uni.redirectTo({
										url
									})
								}, 2000)
							},
							fail: (e) => {
								const url = '/pages/order_pay_status/index?order_id=' + orderId +
										'&msg=支付失败'
								uni.showModal({
									content: '支付失败',
									showCancel: false,
									success(res) {
										if (res.confirm) {
											uni.redirectTo({
												url
											})
										} else if (res.cancel) {
											console.log('用户点击取消')
										}
									}
								})
							},
							complete: () => {
								uni.hideLoading()
							}
						})
						// #endif
						break
					case 'PAY_DEFICIENCY':
						uni.hideLoading()
						// 余额不足
						return that.$util.Tips({
							title: res.msg
						}, {
							tab: 5,
							url: goPages + '&status=1'
						})
						break
					case 'WECHAT_H5_PAY':
						uni.hideLoading()
						that.$util.Tips({
							title: '订单创建成功!'
						}, {
							tab: 4,
							url: goPages + '&status=0'
						})
						setTimeout(() => {
							location.href = res.data.result.jsConfig.mweb_url
						}, 2000)
						break

					case 'ALIPAY_PAY':
						// #ifdef H5
						if (this.from === 'weixin') {
							uni.redirectTo({
								url: `/pages/users/alipay_invoke/index?id=${orderId}&pay_key=${res.data.result.pay_key}`
							})
						} else {
							uni.hideLoading()
							that.formContent = res.data.result.jsConfig
							that.$nextTick(() => {
								document.getElementById('alipaysubmit').submit()
							})
						}
						// #endif
						// #ifdef MP
						uni.navigateTo({
							url: `/pages/users/alipay_invoke/index?id=${orderId}&link=${jsConfig.qrCode}`
						})
						// #endif
						// #ifdef APP-PLUS
						uni.requestPayment({
							provider: 'alipay',
							orderInfo: jsConfig,
							success: (e) => {
								uni.showToast({
									title: '支付成功'
								})
								const url = '/pages/order_pay_status/index?order_id=' + orderId +
										'&msg=支付成功'
								setTimeout((res) => {
									uni.redirectTo({
										url
									})
								}, 2000)
							},
							fail: (e) => {
								const url = '/pages/order_pay_status/index?order_id=' + orderId +
										'&msg=支付失败'
								uni.showModal({
									content: '支付失败',
									showCancel: false,
									success(res) {
										if (res.confirm) {
											uni.redirectTo({
												url
											})
										} else if (res.cancel) {
											console.log('用户点击取消')
										}
									}
								})
							},
							complete: () => {
								uni.hideLoading()
							}
						})
						// #endif
						break
				}
			})
				.catch((err) => {
					uni.hideLoading()
					return that.$util.Tips({
						title: err
					})
				})
		},
		clickTextArea() {
			this.$refs.textarea.focus()
		},
		SubOrder(e) {
			const that = this
			let data = {}

			if (!that.payType) {
				return that.$util.Tips({
					title: '请选择支付方式'
				})
			}

			if (that.shippingType == 0) {
				// if (!that.addressId && !that.shippingType && !that.virtual_type) {
				if (!that.addressMap.poiaddress && !that.shippingType && !that.virtual_type) {
					return that.$util.Tips({
						title: '请选择收货地址'
					})
				}
				if (!that.addressMap.real_name || !that.addressMap.phone) {
					return that.$util.Tips({
						title: '请输入收货人姓名和收货人手机号'
					})
				}
				if (!this.is_suitable && !that.shippingType) {
					return that.$util.Tips({
						title: '超过了配送范围！'
					})
				}
				if (!that.dateTime) {
					return that.$util.Tips({
						title: '请选择配送时间'
					})
				}
			}

			if (that.shippingType == 1) {
				if (that.contacts == '' || that.contactsTel == '') {
					return that.$util.Tips({
						title: '请填写联系人或联系人电话'
					})
				}
				if (!/^1(3|4|5|7|8|9|6)\d{9}$/.test(that.contactsTel)) {
					return that.$util.Tips({
						title: '请填写正确的手机号'
					})
				}
				if (!that.contacts) {
					return that.$util.Tips({
						title: '请填写您的真实姓名'
					})
				}
				if (that.storeList.length == 0) {
					return that.$util.Tips({
						title: '暂无门店,请选择其他方式'
					})
				}
			}
			data = {
				'real_name': that.contacts,
				'phone': that.contactsTel,
				'addressId': 4,
				// 'addressId': that.addressId,
				'addressMap': that.addressMap,
				'deliveryTime': that.dateTime,
				// 'address_real_name': that.addressMap.real_name,
				// 'address_phone': that.addressMap.phone,
				'formId': '',
				'couponId': that.couponId,
				'payType': that.payType,
				'useIntegral': that.useIntegral,
				'bargainId': that.BargainId,
				'combinationId': that.combinationId,
				'discountId': that.discountId,
				'pinkId': that.pinkId,
				'advanceId': that.advanceId,
				'seckill_id': that.seckillId,
				'mark': that.mark,
				'store_id': that.system_store ? that.system_store.id : 0,
				'from': that.from,
				'shipping_type': that.$util.$h.Add(that.shippingType, 1),
				'new': that.news,
				'invoice_id': that.invChecked,
				// #ifdef H5
				'quitUrl': location.protocol + '//' + location.hostname +
					'/pages/order_pay_status/index?' +
					'&type=3' + '&totalPrice=' + this.totalPrice,
				// #endif
				// #ifdef APP-PLUS
				'quitUrl': '/pages/users/order_details/index?order_id=' + this.order_id
				// #endif
			}
			if (data.payType == 'yue' && parseFloat(that.userInfo.now_money) < parseFloat(that.totalPrice)) {
				return that.$util.Tips({
					title: '余额不足！'
				})
			}
			uni.showLoading({
				title: '订单支付中'
			})
			// #ifdef MP
			openPaySubscribe().then(() => {
				that.payment(data)
			})
			// #endif
			// #ifndef MP
			that.payment(data)
			// #endif
		}
	}
}
</script>

<style lang="scss" scoped>
	/deep/uni-checkbox[disabled] .uni-checkbox-input {
		background-color: #eee;
	}

	.alipaysubmit {
		display: none;
	}

	.order-submission .line {
		width: 100%;
		height: 3rpx;
	}

	.order-submission .line image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.order-submission .address {
		padding: 28rpx 30rpx;
		background-color: #fff;
		box-sizing: border-box;
	}

	.order-submission .address .addressCon {
		width: 610rpx;
		font-size: 26rpx;
		color: #666;
	}

	.order-submission .address .addressCon .name {
		font-size: 30rpx;
		color: #282828;
		font-weight: bold;
		margin-bottom: 10rpx;
	}

	.order-submission .address .addressCon .name .phone {
		margin-left: 50rpx;
	}

	.order-submission .address .addressCon .default {
		margin-right: 12rpx;
	}

	.order-submission .address .addressCon .setaddress {
		color: #333;
		font-size: 28rpx;
	}

	.order-submission .address .iconfont {
		font-size: 35rpx;
		color: #707070;
	}

	.order-submission .allAddress {
		width: 100%;
		background: linear-gradient(to bottom, var(--view-theme) 0%, #f5f5f5 100%);
		padding-top: 100rpx;
	}

	.order-submission .allAddress .nav {
		width: 710rpx;
		margin: 0 auto;
	}

	.order-submission .allAddress .nav .item {
		width: 355rpx;
	}

	.order-submission .allAddress .nav .item.on {
		position: relative;
		width: 250rpx;
	}

	.order-submission .allAddress .nav .item.on::before {
		position: absolute;
		bottom: 0;
		content: "快递配送";
		font-size: 28rpx;
		display: block;
		height: 0;
		width: 336rpx;
		border-width: 0 20rpx 80rpx 0;
		border-style: none solid solid;
		border-color: transparent transparent #fff;
		z-index: 2;
		border-radius: 7rpx 30rpx 0 0;
		text-align: center;
		line-height: 80rpx;
	}

	.order-submission .allAddress .nav .item:nth-of-type(2).on::before {
		content: "到店自提";
		border-width: 0 0 80rpx 20rpx;
		border-radius: 30rpx 7rpx 0 0;
	}

	.order-submission .allAddress .nav .item.on2 {
		position: relative;
	}

	.order-submission .allAddress .nav .item.on2::before {
		position: absolute;
		bottom: 0;
		content: "到店自提";
		font-size: 28rpx;
		display: block;
		height: 0;
		width: 400rpx;
		border-width: 0 0 60rpx 60rpx;
		border-style: none solid solid;
		border-color: transparent transparent rgba(255, 255, 255, 0.6);
		border-radius: 40rpx 6rpx 0 0;
		text-align: center;
		line-height: 60rpx;
	}

	.order-submission .allAddress .nav .item:nth-of-type(1).on2::before {
		content: "快递配送";
		border-width: 0 60rpx 60rpx 0;
		border-radius: 6rpx 40rpx 0 0;
	}

	.order-submission .allAddress .address {
		width: 710rpx;
		height: 150rpx;
		margin: 0 auto;
	}

	.order-submission .allAddress .line {
		width: 710rpx;
		margin: 0 auto;
	}

	.order-submission .wrapper .item .discount .placeholder {
		color: #ccc;
	}

	.placeholder-textarea {
		position: relative;

		.placeholder {
			position: absolute;
			color: #ccc;
			top: 26rpx;
			left: 30rpx;
		}
	}

	.order-submission .wrapper {
		background-color: #fff;
		margin-top: 13rpx;
	}

	.order-submission .wrapper .item {
		padding: 27rpx 30rpx;
		font-size: 30rpx;
		color: #282828;
		border-bottom: 1px solid #f0f0f0;
	}

	.order-submission .wrapper .item .discount {
		font-size: 30rpx;
		color: #999;
	}

	.order-submission .wrapper .item .discount input {
		text-align: end;
	}

	.order-submission .wrapper .item .discount .iconfont {
		color: #515151;
		font-size: 30rpx;
		margin-left: 15rpx;
	}

	.order-submission .wrapper .item .discount .num {
		font-size: 32rpx;
		margin-right: 20rpx;
	}

	.order-submission .wrapper .item .shipping {
		font-size: 30rpx;
		color: #999;
		position: relative;
		padding-right: 58rpx;
	}

	.order-submission .wrapper .item .shipping .iconfont {
		font-size: 35rpx;
		color: #707070;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		margin-left: 30rpx;
	}

	.order-submission .wrapper .item textarea {
		background-color: #f9f9f9;
		width: 690rpx;
		height: 140rpx;
		border-radius: 3rpx;
		margin-top: 30rpx;
		padding: 25rpx 28rpx;
		box-sizing: border-box;
	}

	.order-submission .wrapper .item .placeholder {
		color: #ccc;
	}

	.order-submission .wrapper .item .list {
		margin-top: 35rpx;
	}

	.order-submission .wrapper .item .list .payItem {
		border: 1px solid #eee;
		border-radius: 6rpx;
		height: 86rpx;
		width: 100%;
		box-sizing: border-box;
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #282828;
	}

	.order-submission .wrapper .item .list .payItem.on {
		border-color: #fc5445;
		color: #e93323;
	}

	.order-submission .wrapper .item .list .payItem .name {
		width: 50%;
		text-align: center;
		border-right: 1px solid #eee;
		padding-left: 80rpx;
	}

	.order-submission .wrapper .item .list .payItem .name .iconfont {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		text-align: center;
		line-height: 44rpx;
		background-color: #fe960f;
		color: #fff;
		font-size: 30rpx;
		margin-right: 15rpx;
	}

	.order-submission .wrapper .item .list .payItem .name .iconfont.icon-weixin2 {
		background-color: #41b035;
	}

	.order-submission .wrapper .item .list .payItem .name .iconfont.icon-zhifubao {
		background-color: #1677FF;
	}

	.order-submission .wrapper .item .list .payItem .tip {
		width: 49%;
		text-align: center;
		font-size: 26rpx;
		color: #aaa;
	}

	.order-submission .moneyList {
		margin-top: 12rpx;
		background-color: #fff;
		padding: 30rpx;
	}

	.order-submission .moneyList .item {
		font-size: 28rpx;
		color: #282828;
	}

	.order-submission .moneyList .item~.item {
		margin-top: 20rpx;
	}

	.order-submission .moneyList .item .money {
		color: #868686;
	}

	.order-submission .footer {
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		padding: 0 30rpx;
		font-size: 28rpx;
		color: #333;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.order-submission .footer .settlement {
		font-size: 30rpx;
		color: #fff;
		width: 240rpx;
		height: 70rpx;
		background-color: var(--view-theme);
		border-radius: 50rpx;
		text-align: center;
		line-height: 70rpx;
	}

	.footer .transparent {
		opacity: 0
	}
</style>
