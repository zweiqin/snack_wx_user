<template>
	<view style="width: 100%;height: 100%;">
		<!-- <iframe
			id="mapPage" width="100%" height="100%" frameborder="0"
			:src="`https://apis.map.qq.com/tools/locpicker?type=1&key=${'SMJBZ-WCHK4-ZPZUA-DSIXI-XDDVQ-XWFX7'}&referer=myapp`"
		></iframe> -->
		<web-view
			:src="`https://apis.map.qq.com/tools/locpicker?type=1&key=${'SMJBZ-WCHK4-ZPZUA-DSIXI-XDDVQ-XWFX7'}&referer=AGA示例2`"
			@message="handleMessage" @onPostMessage="handleMessage"
		></web-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			formItem: {
				latlng: '',
				lat: '',
				lng: '',
				poiaddress: '',
				poiname: ''
			},
			cartId: '',
			pinkId: 0,
			couponId: 0,
			news: '',
			noCoupon: 0

		}
	},
	onLoad(options) {
		this.cartId = options.cartId || ''
		this.noCoupon = options.noCoupon || 0
		this.pinkId = options.pinkId || 0
		this.couponId = options.couponId || 0
		this.news = options.news || 0
	},
	onReady() {
		console.log('000')
		window.addEventListener('message', function (event) {
			// uni.showToast({
			// 	title: '222' + event,
			// 	icon: 'error',
			// 	duration: 2000
			// })
			console.log('222')
			// 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
			var loc = event.data
			if (loc && loc.module === 'locationPicker') { // 防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
				window.parent.selectAdderss ? window.parent.selectAdderss(loc) : window.selectAdderss(loc)
			}
		}, false)
		window.selectAdderss = this.selectAdderss
		console.log(window.parent, window.parent.selectAdderss, window.selectAdderss)
	},
	methods: {
		// 小程序web-view的message事件
		handleMessage(event) {
			console.log('111', event)
			// 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
			var loc = event.data
			if (loc && loc.module === 'locationPicker') { // 防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
				window.parent.selectAdderss ? window.parent.selectAdderss(loc) : window.selectAdderss(loc)
			}
		},
		// 选择经纬度
		selectAdderss(data) {
			console.warn(data)
			if (data.poiname === '我的位置') {
				return uni.showToast({
					title: '不能选择该位置',
					icon: 'error',
					duration: 2000
				})
			}
			this.formItem.latlng = data.latlng.lat + ',' + data.latlng.lng
			this.formItem.lat = data.latlng.lat
			this.formItem.lng = data.latlng.lng
			this.formItem.poiaddress = data.poiaddress
			this.formItem.poiname = data.poiname
			this.goOrder()
		},
		goOrder(id) {
			let cartId = ''
			let pinkId = ''
			let couponId = ''
			// if (this.cartId && id) {
			if (this.cartId) {
				cartId = this.cartId
				pinkId = this.pinkId
				couponId = this.couponId
				this.cartId = ''
				this.pinkId = ''
				this.couponId = ''
				console.log(getCurrentPages(), this.getOpenerEventChannel())
				// this.getOpenerEventChannel().emit('toAddressMap', this.formItem)
				// this.getOpenerEventChannel().on('toAddressMap', (data)=>{
				//    console.log(data)
				// 	this.addressMap = {...data,real_name:'TODO',phone:'TODO'}
				//  })
				uni.$emit('toAddressMap', this.formItem)
				uni.navigateBack({
					delta: 1
				})
				// uni.redirectTo({
				// 	// url: '/pages/users/order_confirm/index?is_address=1&new=' + this.news + '&cartId=' +
				// 	// 		cartId + '&addressId=' + id + '&pinkId=' +
				// 	// 		pinkId + '&couponId=' + couponId +
				// 	// 		'&noCoupon=' + this.noCoupon
				// 	// url: '/pages/users/order_confirm/index?is_address=1&new=' + this.news + '&cartId=' +
				// 	// 		cartId + '&pinkId=' +
				// 	// 		pinkId + '&couponId=' + couponId +
				// 	// 		'&noCoupon=' + this.noCoupon
				// 	url: '/pages/users/order_confirm/index?new=' + this.news + '&cartId=' + cartId
				// })
			}
		}
	}
}
</script>

<style lang="scss" scoped>
</style>

