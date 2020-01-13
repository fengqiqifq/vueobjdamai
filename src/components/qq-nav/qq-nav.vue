<template>
	<div class="nav">
		<ul>
			<li class="l-btn">1234</li>
			
		</ul>
	</div>
</template>
<script>
	export default {
		data(){},
		components:{},
		methods(){},
		updated(){},
		methods:{}
		
	}
</script>

<style scoped>
  .nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid #e8eaec;
    z-index: 99;
  }

  .nav ul {
    width: 6.4rem;
    height: 0.45rem;
    padding-top: 0.15rem;
    margin: 0 auto;
  }

 .nav ul li {
    width: 0.29rem;
    height: 0.31rem;
    background-size: 100%;
    margin: 0 0 0 0.38rem;
    background: url(./assets/history1.png) no-repeat 0 0;
  }
  
  .nav ul li.gray{
    background-image: url(./assets/history1.png)
  }
  
  .nav ul li.default{
    background-image: url(./assets/history.png)
  }
</style>

