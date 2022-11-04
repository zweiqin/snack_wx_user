import request from '@/utils/request_go.js'

// 获取列表
export function GetEbSystemStoreList(data) {
	return request.get('v1/EbSystemStore/GetEbSystemStoreList', data)
}

// 获取列表
export function GetDeliveryTime(data) {
	return request.get('v1/EbSystemDeliveryTime/GetDeliveryTime', data)
}

// /**
//  * 公共接口 ，优惠券接口 , 行业此讯 , 手机号码注册
//  *
//  */

// /**
//  * 获取主页数据 无需授权
//  *
//  */

// export function getIndexData() {
// 	return request.get('v2/index', {}, {
// 		noAuth: true
// 	})
// }

// /**
//  * 获取服务器类型
//  *
//  */

// export function getServerType() {
// 	return request.get('v2/site_serve', {}, {
// 		noAuth: true
// 	})
// }

// /**
//  * 获取登录授权login
//  *
//  */

// export function getLogo() {
// 	return request.get('wechat/get_logo', {}, {
// 		noAuth: true
// 	})
// }

// /**
//  * 保存form_id
//  * @param string formId
//  */

// export function setFormId(formId) {
// 	return request.post('wechat/set_form_id', {
// 		formId
// 	})
// }

// /**
//  * 领取优惠卷
//  * @param int couponId
//  *
//  */

// export function setCouponReceive(couponId) {
// 	return request.post('coupon/receive', {
// 		couponId
// 	})
// }

// /**
//  * 订单查询物流信息
//  * @returns {*}
//  */

// export function express(uni, type) {
// 	return request.get('order/express/' + uni + `${type ? '/refund' : ''}`)
// }

// /**
//  * 获取退款理由
//  *
//  */

// export function ordeRefundReason() {
// 	return request.get('order/refund/reason')
// }

// /**
//  * 订单退款审核
//  * @param object data
//  */

// export function orderRefundVerify(data) {
// 	return request.post('order/refund/verify', data)
// }

// /**
//  * 订单确认获取订单详细信息
//  * @param string cartId
//  */

// export function orderConfirm(cartId, news, addressId) {
// 	return request.post('order/confirm', {
// 		cartId,
// 		'new': news,
// 		addressId
// 	})
// }
