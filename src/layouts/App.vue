<template>
  <div id="app">
	 <!-- <Header></Header> -->
	  <router-view></router-view>
	  <!-- <Detail/> -->
	  <!-- <Footer/> -->
	
    </div>
</template>
<script>
	// import Header from'./header.vue'
	import Home from '../pages/home.vue'
	import Footer from '@/layouts/footer.vue'
	// import Detail from'@/pages/detail.vue'
	export default{
		name:'App',
		components:{
			Home,Footer,
		},
		 mounted() {
          this.path = this.$route.path;
          // console.log(this.$route.path)
        },
      
	}
	
</script>

<style>
	
</style>
