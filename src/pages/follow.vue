<template>
	<div class="follow">
		
	<Qqcell></Qqcell>
		
	</div>
</template>

<script>
	import Qqcell from '../components/qq-cell.vue'
	export default {
		 name:'follow',
		data(){return {
		  list:[]
		}},
		components:{
		  Qqcell
		},
		methods(){},
		updated(){},
		methods:{}
		
	}
</script>

<style scoped>
	/* .follow{} */
</style>
