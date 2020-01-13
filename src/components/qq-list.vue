<template>
	<div class="qq-list">
		
		<ul>
			
			<li v-for="(item,index) in list" @click="getDetail(item.id)">
				<img :src="item.img"/>
				<p>{{item.title}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import Xq from'@/pages/xq.vue'
	export default {
		data(){return{
			list:[
				{
					id:1,
					img :require('../assets/img/mkf.png'),
					title:"演唱会"
				},{
					id:2,
					img :require('../assets/img/hj.png'),
					title:"话剧歌剧"
				},{
					id:3,
					img :require('../assets/img/yyh.png'),
					title:"音乐会"
				},{
					id:4,
					img :require('../assets/img/ty.png'),
					title:"体育"
				},{
					id:4,
					img :require('../assets/img/qyzt.png'),
					title:"曲苑杂坛"
				},{
					id:5,
					img :require('../assets/img/qz.png'),
					title:"亲子"
				},{
					id:6,
					img :require('../assets/img/zl.png'),
					title:"展览休闲"
				},{
					id:7,
					img :require('../assets/img/jw.png'),
					title:"境外"
				}]
		}},
		props:{
			data:{
			  type:Object,
			  default:function(){
			    return {}
			  }
			},
			dataName:{
			  type:String,
			  default:null
			},
			index:{
			  type:Number,
			  default:null
			},
			isJump:{
			  type:Boolean,
			  default:true
			}
		},
		components:{
			Xq
		},
		methods:{
			getDetail(id) {
					// console.log(id)
					this.$router.push({path:'/xq/'+id})
		},
	
	
		
	}
	}
</script>

<style scoped>
	.qq-list{height:2rem;}
	.qq-list ul{text-align: center;}
	.qq-list ul li {float: left;margin:.2rem .2rem .2rem .65rem}
	
</style>
