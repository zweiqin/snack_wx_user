<template>
	<view class="goodsList">
		<view
			v-for="(item,index) in tempArr" :key="index" class="item acea-row row-between-wrapper"
			@click="goDetail(item)"
		>
			<view class="pictrue">
				<span v-if="item.activity && item.activity.type === '1'" class="pictrue_log pictrue_log_class">秒杀</span>
				<span v-if="item.activity && item.activity.type === '2'" class="pictrue_log pictrue_log_class">砍价</span>
				<span v-if="item.activity && item.activity.type === '3'" class="pictrue_log pictrue_log_class">拼团</span>
				<image :src="item.image" mode=""></image>
			</view>
			<view class="pictxt">
				<view class="text line2">{{ item.store_name }}</view>
				<view class="bottom acea-row row-between-wrapper">
					<view class="money font-color">
						<text class="sign">￥</text>{{ item.price }}
						<!-- <span v-if="item.vip_price" class="vip">
							<image src="../../static/images/vip01.png"></image>
							¥{{ item.vip_price }}
						</span>
						<text v-else class="y_money">¥{{ item.ot_price }}</text> -->
						<text
							v-if="
								item.vip_price &&
									item.vip_price > 0 &&
									item.is_vip == 1
							"
							class="vip-money"
							style="margin-left: 13rpx;font-size: 28rpx;font-weight: 700;color: #282828 !important;"
						>￥{{ item.vip_price }}</text>
						<image
							v-if="
								item.vip_price &&
									item.vip_price > 0 &&
									item.is_vip == 1
							"
							src="../../static/images/svip.gif"
							style="width: 66rpx;height: 26rpx;margin-left: 7rpx;"
						></image>
					</view>
					<view v-if="item.stock>0">
						<view
							v-if="item.activity && (item.activity.type === '1' || item.activity.type === '2' || item.activity.type === '3')"
							class="iconfont icon-gouwuche6 acea-row row-center-wrapper"
						>
						</view>
						<view v-else>
							<!-- 多规格 -->
							<view v-if="item.spec_type" class="bnt" @click.stop="goCartDuo(item,$event)">
								选规格
								<view v-if="isLogin && item.cart_num" class="num">{{ item.cart_num }}</view>
							</view>
							<!-- 单规格 -->
							<view
								v-if="!item.spec_type && !item.cart_num"
								class="iconfont icon-gouwuche6 acea-row row-center-wrapper" @click.stop="goCartDan(item,index,$event)"
							>
							</view>
							<view v-if="!item.spec_type && item.cart_num" class="cart acea-row row-middle">
								<view
									class="pictrue iconfont icon-jianhao acea-row row-center-wrapper"
									@click.stop="CartNumDes(index,item)"
								></view>
								<view class="num">{{ item.cart_num }}</view>
								<view
									class="pictrue iconfont icon-jiahao acea-row row-center-wrapper"
									@click.stop="CartNumAdd(index,item,$event)"
								></view>
							</view>
						</view>
					</view>
					<view v-else class="bnt end">已售罄</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'DGoodList',
	props: {
		dataConfig: {
			type: Object,
			default: () => {}
		},
		tempArr: {
			type: Array,
			default: []
		},
		isLogin: {
			type: Boolean,
			default: false
		},
		endLocation: {}
	},
	data() {
		return {}
	},
	created() {},
	mounted() {

	},
	methods: {
		goDetail(item) {
			this.$emit('detail', item)
		},
		goCartDuo(item, {
			detail
		}) {
			detail.img = item.image
			this.$emit('addCart', detail)
			this.$emit('gocartduo', item)
		},
		goCartDan(item, index, {
			detail
		}) {
			detail.img = item.image
			this.$emit('addCart', detail)
			this.$emit('gocartdan', item, index)
		},
		CartNumDes(index, item) {
			this.$emit('ChangeCartNumDan', false, index, item)
		},
		CartNumAdd(index, item, {
			detail
		}) {
			detail.img = item.image
			this.$emit('addCart', detail)
			this.$emit('ChangeCartNumDan', true, index, item)
		}
	}
}
</script>

<style lang="scss">
	.goodsList {
		padding: 0 30rpx;

		.item {
			width: 100%;
			box-sizing: border-box;
			margin-bottom: 63rpx;

			.pictrue {
				width: 140rpx;
				height: 140rpx;
				border-radius: 10rpx;
				position: relative;
				border-radius: 22rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 22rpx;
				}
			}

			.pictxt {
				width: 372rpx;

				.text {
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}

				.bottom {
					margin-top: 22rpx;

					.money {
						font-size: 34rpx;
						font-weight: 800;

						.sign {
							font-size: 24rpx;
						}

						.y_money {
							font-size: 20rpx;
							color: #999999;
							margin-left: 14rpx;
							font-weight: normal;
							text-decoration: line-through;
						}

						.vip {
							font-size: 22rpx;
							color: #333333;
							font-weight: normal;
							margin-left: 14rpx;

							image {
								width: 38rpx;
								height: 18rpx;
								margin-right: 6rpx;
							}
						}
					}

					.cart {
						height: 46rpx;

						.pictrue {
							color: var(--view-theme);
							font-size: 46rpx;
							width: 46rpx;
							height: 46rpx;
							text-align: center;
							line-height: 46rpx;

							&.icon-jiahao {
								color: var(--view-theme);
							}
						}

						.num {
							font-size: 30rpx;
							color: #333333;
							font-weight: bold;
							width: 60rpx;
							text-align: center;
						}
					}

					.icon-gouwuche6 {
						width: 46rpx;
						height: 46rpx;
						background-color: var(--view-theme);
						border-radius: 50%;
						color: #fff;
						font-size: 30rpx;
					}

					.bnt {
						padding: 0 20rpx;
						height: 46rpx;
						line-height: 46rpx;
						background: var(--view-theme);
						border-radius: 23rpx;
						font-size: 22rpx;
						color: #fff;
						position: relative;

						&.end {
							background: #cccccc;
						}

						.num {
							min-width: 12rpx;
							color: #fff;
							border-radius: 15px;
							position: absolute;
							right: -13rpx;
							top: -11rpx;
							font-size: 16rpx;
							padding: 0 11rpx;
							background-color: var(--view-priceColor);
							height: 32rpx;
							line-height: 32rpx;
						}
					}
				}
			}
		}
	}
</style>
