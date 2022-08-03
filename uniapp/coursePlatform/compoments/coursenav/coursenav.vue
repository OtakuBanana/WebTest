<template>
	<view style="font-size: 32rpx;">
		<navigator url="" style="font-size: 40rpx; font-weight: bolder">课程导航</navigator>
		<div class="course">
			<view class="view" v-for="(item, index) in course" :key="index" @click="courseGo(item.id, item.course)">
				<!-- id: {{item.id}}&emsp; -->
				{{item.text}}
			</view>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				course: []
			}
		},
		methods: {
			courseGo(id, course) {
				console.log('触发成功');
				uni.navigateTo({
					url: '/pages/course/course?id=' + id + '&course=' + course
				})
			}
		},
		mounted() {
			uni.request({
				url: 'http://html5.bjsxt.cn/api/index/nav',
				success: (res) => {
					// console.log(res.data)
					this.course = res.data.data
				}
			})
		}
	}
</script>

<style lang="scss">
	.course {
		display: flex;
		box-sizing: border-box;
		flex-direction: row;
		flex-wrap: wrap;
		text-align: center;
		padding: 10px;
		.view {
			margin: 10rpx auto;
			height: 80rpx;
			line-height: 80rpx;
			width: 150rpx;
			padding: 10rpx;
			color: white;
			background-color: #00b783;
			overflow: hidden;
		}
	}
</style>
