<template>
	<view>
		<view class="">
			<view class="courseIntroduce">简介：<br />{{this.course.introduce}}</view>
			<view class="courseDetail">
				<view class="detailBox" v-for="(item, index) in this.course.introduceList" :key="index">
					<view class="detailNum">{{item.num}}</view>
					<view class="detailTxt">{{item.txt}}</view>
				</view>
			</view>
			<view class="courseSections">
				<view v-for="(item, index) in courseSections" class="n1" :class="{'active': active === index}" @tap="changeCss(index)" :key="index">{{item}}</view>
				<view class="">
					<detail1 :Img="Img" :imgHeight="imgHeight" :class="{ detail: active === 0}" />
					<detail2 :Clist="Clist" :class="{ detail: active === 1}" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import detail1 from '@/pages/course/n1/n1.vue'
	import detail2 from '@/pages/course/n2/n2.vue'
	export default {
		data() {
			return {
				data: [],
				course: [],
				courseSections: ['课程章节', '课程介绍'],
				active: 0,
				Clist: [],
				Img: '',
				imgHeight: ''
			}
		},
		methods: {
			changeCss(index) {
				this.active = index
			}
		},
		onLoad(options) {
			console.log(options);
			this.data = options
		},
		mounted() {
			uni.request({
				url: 'http://html5.bjsxt.cn/api/course/detail?id=' + this.data.id + '&course=' + this.data.course,
				success: (res) => {
					this.course = res.data.data
					this.Clist = res.data.data.Clist
					this.Img = res.data.data.image
					this.imgHeight = res.data.data.height
					// console.log(this.course)
					// console.log(this.Clist)
				}
			})
		},
		components: {
			detail1,
			detail2
		}
	}
</script>

<style lang="scss">
	.courseIntroduce {
		padding: 20rpx 20rpx 40rpx;
		font-size: 32rpx;
		color: white;
		background-color: #00b783;
	}
	.courseDetail {
		margin-top: 20rpx;
		margin-bottom: 30rpx;
		align-items: center;
		text-align: center;
		.detailBox {
			display: inline-block;
			width: 150rpx;
			margin: 10rpx;
			padding: 10rpx;
			.detailNum {
				padding-bottom: 10rpx;
				font-weight: bold;
				font-size: 26rpx;
				color: chocolate;
			}
			.detailTxt {
				font-size: 25rpx;
			}
		}
	}
	.courseSections {
		align-items: center;
		text-align: center;
		.n1 {
			padding: 30rpx 0;
			width: 50%;
			display: inline-block;
			font-weight: bold;
			background-color: #fff;
		}
	}
	.active {
		color: #00b783;
		border-bottom: 5rpx solid #00b783;
	}
	.detail {
		display: none;
	}
</style>
