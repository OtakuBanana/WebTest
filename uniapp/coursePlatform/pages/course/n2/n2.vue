<template>
	<view>
		<view class="txt" v-for="(item, index) in Clist" @click="videoGo()" :key="index">
			{{item.type_name}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			videoGo() {
				uni.navigateTo({
					url: '/pages/course/video/video'
				})
			}
		},
		props: {
			Clist: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	.txt {
		padding: 20rpx;
		border-bottom: 1rpx solid #ddd;
		text-align: start;
		font-weight: bold;
	}
</style>
