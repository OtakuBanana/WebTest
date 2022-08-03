<template>
	<view>
		<view>
			<img :src="Img" alt="" :style="{height: imgHeight + 'rpx'}" />
		</view>
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
			
		},
		props: {
			Img: {
				type: String,
				default: ''
			},
			imgHeight: {
				type: String,
				default: ''
			}
		},
		mounted() {
			
		}
	}
</script>

<style>

</style>
