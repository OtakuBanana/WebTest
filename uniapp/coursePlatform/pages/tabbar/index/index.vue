<template>
	<view>
		<view class="home">
			<view class="index_banner_box">
				<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(item, index) in toBanners" :key="index">
						<image class="banner" :src="item.img_url" alt=""></image>
					</swiper-item>
				</swiper>
			</view>
			<coursenav />
		</view>
		<view class="online_box">
			<img :src="this.indexBanner.img_url" class="online_img" alt="">
		</view>
		<navigator url="" style="margin-top: 20rpx; font-size: 40rpx; font-weight: bolder">限时免费</navigator>
		<view style="display: flex; padding: 0 20rpx; flex-direction: column; justify-content: center">
			<view class="teacherBox" v-for="(item, index) in textList" :key="index">
				<img :src="item.teacher_logo" class="teacherImg" alt="">
				<h5>{{item.limitName}}</h5>
				<text>{{item.teacher_name}} {{item.teacher_job}}</text>
				<text>{{item.limitNum}}学过</text><button style="margin: 20rpx; width: 300rpx; color: white; background-color: #00b783">{{item.baoming}}</button>
			</view>
		</view>
		<view class="scrollView">
			<scroll-view class="" scroll-x="true" show-scrollbar="false">
				<view v-for="" c<!-- lass="">
					<img src="../../../static/logo.png" alt="">''
				</view> -->
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import coursenav from '@/compoments/coursenav/coursenav.vue'
	export default {
		data() {
			return {
				toBanners:[],
				indexBanner: '',
				textList: []
			}
		},
		methods: {
			
		},
		mounted() {
			uni.request({
				url: 'http://html5.bjsxt.cn/api/index/banner',
				success: (res) => {
					console.log(res.data)
					this.indexBanner = res.data.index_banner
					this.toBanners = res.data.top_banner
				}
				
			}),
			uni.request({
				url: 'http://html5.bjsxt.cn/api/index/specific?userid=2162',
				success: (res) => {
					console.log(res.data)
					this.textList = res.data.data
				}
			})
		},
		components: {
			coursenav
		}
	}
</script>

<style lang="scss">
	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.index_banner_box {
			width: 100%;
			padding: 10px;
			justify-content: center;
			align-items: center;
			border-radius: 5px;
			overflow: hidden;
			.swiper {
				width: 100%;
				height: 260rpx;
				.banner {
					width: 700rpx;
					height: 260rpx;
				}
			}
		}
	}
	.online_box {
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		overflow: hidden;
		.online_img {
			width: 100%;
		}
	}
	.teacherBox {
		margin-top: 10rpx;
		padding: 10rpx;
		box-shadow: #ddd 0rpx 5rpx 5px;
		border-radius: 20rpx;
		h5 {
			font-size: 34rpx;
		}
		text {
			color: #333;
		}
		.teacherImg {
			float: left;
			padding: 40rpx 20rpx;
			height: 100rpx;
			border-radius: 50%;
		}
	}
	.scrollView {
		display: flex;
		scroll-view {
			width: 100%;
			height: 200rpx;
			white-space: nowrap;
		}
		view {
			margin: 50rpx 10rpx;
			padding: 10rpx 20rpx;
			display: inline-block;
			background-color: #00b783;
		}
		img {
			height: 200rpx;
			width: 200rpx;
		}
	}
</style>
