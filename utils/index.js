// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2021 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

import {
	spread
} from "@/api/user";
import Cache from "@/utils/cache";
import {
	getCustomerType
} from '@/api/api.js'
import {
	getWorkermanUrl
} from '@/api/kefu.js'
/**
 * 绑定用户授权
 * @param {Object} puid
 */
export function silenceBindingSpread() {


	//#ifdef H5
	let puid = Cache.get('spread'),
		code = 0;
	//#endif

	//#ifdef MP || APP-PLUS
	let puid = getApp().globalData.spid,
		code = getApp().globalData.code;
	//#endif

	puid = parseInt(puid);
	if (Number.isNaN(puid)) {
		puid = 0;
	}
	if (puid) {
		spread({
			puid,
			code
		}).then(res => {
			//#ifdef H5
			Cache.clear('spread');
			//#endif

			//#ifdef MP || APP-PLUS
			getApp().globalData.spid = 0;
			getApp().globalData.code = 0;
			//#endif

		}).catch(res => {});
	}
}

export function isWeixin() {
	return navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1;
}

export function getCustomer(url) {
	getCustomerType().then(res => {
		let type = res.data.customer_type
		if (type == '0') {
			uni.navigateTo({
				url: url || '/pages/customer_list/chat'
			})
		} else if (type == '1') {
			uni.makePhoneCall({
				phoneNumber: res.data.customer_phone //客服电话
			});
		} else {
			// #ifdef APP-PLUS
			plus.runtime.openURL(res.data.customer_url)
			// #endif
			// #ifdef H5
			// window.open(res.data.customer_url, '_blank')
			uni.navigateTo({
				url: `/pages/annex/web_view/index?url=${res.data.customer_url}`
			});
			// #endif
		}
	})
}


export function parseQuery() {
	const res = {};

	const query = (location.href.split("?")[1] || "")
		.trim()
		.replace(/^(\?|#|&)/, "");

	if (!query) {
		return res;
	}

	query.split("&").forEach(param => {
		const parts = param.replace(/\+/g, " ").split("=");
		const key = decodeURIComponent(parts.shift());
		const val = parts.length > 0 ? decodeURIComponent(parts.join("=")) : null;

		if (res[key] === undefined) {
			res[key] = val;
		} else if (Array.isArray(res[key])) {
			res[key].push(val);
		} else {
			res[key] = [res[key], val];
		}
	});

	return res;
}

// #ifdef H5
let VUE_APP_WS_URL = Cache.get('WORKERMAN_URL') || ''
getWorkermanUrl().then(res => {
	Cache.set('WORKERMAN_URL', res.data.chat)
	VUE_APP_WS_URL = res.data.chat;
})
export {
	VUE_APP_WS_URL
}
// #endif



export default parseQuery;
