<template>

	
	<div class="home">
		<Header></Header>
		<Banner/>
		<List/>
			<!-- <qq-cell v-for="n of 1"
			:key="n"
			/> -->
		<qq-cell></qq-cell>
		<!-- <qq-cell v-for="n of 10"/>	 -->
	</div>

</template>

<script>
	import Header from'@/layouts/header'
	import Banner from'@/components/banner.vue'
	import List from '@/components/qq-list.vue'
	import Qqcell from'@/components/qq-cell.vue'
	export default {
		
		data(){
			return{}
		},
		components:{
			Header,
			Banner,
			List,
			'qq-cell':Qqcell,
			
		},
		methods(){},
		updated(){},
		methods:{}
		
	}
</script>

<style scoped>
	
</style>
