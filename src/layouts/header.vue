<template>
	<div class="nav">
		<div class="tu"><img src="/images/dw.png"/></div>
		<p>全国</p>
		<span><img src="/images/search.png"/></span>
		<input type="text" id="txt" placeholder="搜索明星,演出比赛,场馆"/>
		 <router-link  :to="{path:'/login'}"><em><img src="/images/people.png"/></em></router-link>
		
		</div>
</template>

<script>
	export default {
		data(){return{}},
		components:{},
		methods(){},
		updated(){},
		methods:{
			// gotolinck(){
			// 	this.$router.replace('/login')
			// }
		}
		  
	}
</script>

<style> 
.nav{text-align: center;}
 .nav{width:100%;  z-index:2; background:#F5F5F5;height:.75rem;text-align: center;}
 .nav .tu img{width: 0.42rem;margin-left:.2rem;float: left;margin-top: .15rem;;}
 .nav p{float: left;margin-top: .1rem;font-size: .33rem;}
.nav #txt{width: 4.3rem;background: #fff;height: .5rem;margin-top: .1rem;border-radius: .2rem;text-align: center;margin-left: -.5rem;}
.nav span{margin-left:.2rem}
.nav span img{position: absolute;top:.2rem}
.nav em img{width: .4rem;position: absolute;top: .15rem;right: .1rem;}
</style>
