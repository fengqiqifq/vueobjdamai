<template>
	
	<div class="qq-cell"  >
		<ul >
			<li v-for="option in options" @click="getDetail(option.id)">
				<img :src='option.img' />
				<h3>{{option.title}}</h3>
				<p>{{option.list}}</p>
				<span>{{option.price}}</span>	
			</li>
		</ul>
		<router-view></router-view>		
	</div>
</template>
<script>
	export default {
		data(){return{
			options:[
				{
				id:1,
				img:"https://img.alicdn.com/imgextra/i3/2251059038/O1CN01fYNPmo2GdSDsRex1z_!!2251059038.jpg_q60.jpg_.webp",
				title:"2020张杰「未·LIVE」巡回演唱会 苏州站",
				list:"苏州 / 2020.03.28 周六 19:30 / 苏州奥林匹克体育中心体育场",
				price:"￥280-1280"	
			},{
				id:2,
				img:"https://img.alicdn.com/imgextra/i2/2251059038/O1CN01S9TdCV2GdSDnLEdFS_!!2251059038.png_q60.jpg_.webp",
				title:"2020静安戏剧谷 郭麒麟主演 方旭戏剧作品《牛天赐》(预售)",
				list:"上海 / 2020.05.06-05.10 / FANCL艺术中心 艺海剧院大剧场",
				price:"￥100-800"
				
			},{
				id:3,
				img:"https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01kvkwo32GdSDyxCJi6_!!0-item_pic.jpg_q60.jpg_.webp",
				title:"202020当我们谈论爱情-梁静茹世界巡回演唱会太原站",
				list:"太原 / 2020.04.11 周六 19:30 / 山西体育中心体育馆",
				price:"￥399-2000"
			},{
				id:4,
				img:"https://img.alicdn.com/imgextra/i2/2251059038/O1CN01FA1noa2GdSDiIgzt9_!!2251059038.jpg_q60.jpg_.webp",
				title:"吴青峰“太空备忘记”巡回演唱会-南京站",
				list:"南京 / 2020.04.03 周五 19:30 / 南京青奥体育公园体育馆",
				price:"￥180-1280"
			},{
				id:5,
				img:"https://pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp",
				title:"吴青峰“太空备忘记”巡回演唱会-南京站",
				list:"南京 / 2020.04.03 周五 19:30 / 南京青奥体育公园体育馆",
				price:"￥180-1280"
			},{
				id:6,
				img:"https://img.alicdn.com/imgextra/i2/2251059038/O1CN01FA1noa2GdSDiIgzt9_!!2251059038.jpg_q60.jpg_.webp",
				title:"吴青峰“太空备忘记”巡回演唱会-南京站",
				list:"南京 / 2020.04.03 周五 19:30 / 南京青奥体育公园体育馆",
				price:"￥180-1280"
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
		components:{},
		// methods(){},
		updated(){},
		methods:{
			
				getDetail(id) {
					// console.log(id)
					this.$router.push({path:'/detail/'+id})
					// this.isJump && this.$router.push('/detail/'+this.data._id+'?dataName='+this.dataName)
				},
				// ondetail(){
				// 	this.$router.push('detail')
				// }
		
		}
		
	}
</script>

<style scoped>
	.qq-cell{width:6.4rem; margin:0 auto; color:#494d4d;}
	.qq-cell ul li{height:2rem;padding:.13rem}
	.qq-cell ul li img{width:25%;float: left;display: block;}	
	.qq-cell ul li h3{font-size: .3rem;color: #111111;margin-left:1.8rem ;}
	.qq-cell ul li p{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;color: #AAAAAA;margin-left:1.8rem ;}
	.qq-cell ul li span{margin-top:.5rem;display: block;color: #ff1268;margin-left:1.8rem ;}
	
</style>