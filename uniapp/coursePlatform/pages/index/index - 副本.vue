<template>
	<view>
		<text class="title">{{title}} HBuilderX {{i}}</text><br />
		<button @click="iAdd">+</button>
		<text v-for="(item, index) in arr" :key="index">{{item}}<br /></text>
		<swiper :indicator-dots="true" interval="3000" style="height: 300px;">
			<swiper-item>
				<view>A Window
					<img src="../../static/logo.png" alt="imgName" @error="imgError">
				</view>
			</swiper-item>
			<swiper-item>
				<view>B Window
					<br>
					<!-- <video src="../../static/video1.mp4"></video> -->
				</view>
			</swiper-item>
			<swiper-item>
				<view>C Window</view>
				<button @click="show">123</button>
				<view v-show="isShow">321</view>
			</swiper-item>
		</swiper>
		<view>
			<view v-for="(item,index) in banners" :key="index">
				{{item.title}}<br />{{item.content}}<br />{{item.img}}<br /><br />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				isShow: true,
				arr: [1, 24, 8, 15, 31],
				i: 0,
				banners: []
			}
		},
		onLoad() {
		
		},
		methods: {
			show() {
				this.isShow == true ? this.isShow = false: this.isShow = true
				console.log(this.isShow)
			},
			iAdd() {
				this.i++
			}
		},
		mounted() {
			uni.request({
				url: 'http://iwenwiki.com/api/blueberrypai/getIndexBanner.php',
				success: (res) => {
					console.log(res.data)
					this.banners = res.data.banner
				}
			})
		}
	}
</script>

<style>
	.title {
		font-size: 36rpx;
		color: red;
	}
</style>
