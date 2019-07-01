<template>
	<div class="man">
		
	<div  class="top">
	<div @click="fh()" class="topl">
		<van-icon name="arrow-left" size="0.5rem" />
	</div>
	<div class="topr">
		<span class="topz">热门评论</span>
	</div>
	</div>
	
	<div id="header" class="plnbox">
    	<div class="pln" v-for="(item,index) in pl">
    		<div class="plnl" >
    			<div class="plnlt">
    				<img class="img-auto" :src="url+item.author.avatar"/>
    			</div>
    		</div>
    		<div class="plnr">
    			<div class="plnrn">{{item.author.nickname}}</div>
    			<div class="plnrx"><van-rate :size="1" v-model="item.rating" /></div>
    			<div class="plnrt">{{item.title}}</div>
    			
    			<div class="plnrz">{{item.content}}</div>
    			<div class="plnrs">{{item.created.slice(0,10)}}</div>
    		</div>
    	</div>
    </div>
       <a id="f" class="fool" href="#header">
		<svg class="jt" id="icon-backtop" viewBox="0 0 12 9" width="100%" height="100%"><g><path d="M11.5 1a.5.5 0 1 0 0-1H.5a.5.5 0 0 0 0 1h11zM6.354 3.354h-.708l5.5 5.5a.5.5 0 0 0 .708-.708l-5.5-5.5a.5.5 0 0 0-.708 0l-5.5 5.5a.5.5 0 0 0 .708.708l5.5-5.5z"></path></g></svg>
	</a>
    </div>
   
   
 
	
	</div>
</template>

<script>
	import {Icon,Rate} from 'vant'
	export default{
		name:'Pl',
		data(){
			return{
				pl:[],
				url:'http://statics.zhuishushenqi.com',
				
				id:'',
				active:0,
				actve1:0,
				fhz:0,
				id:'',
				ssz:'',
				jgname:'',
				dan:'',
				gdd:'',
				Flname:'',
				atv:'',
				Bdid:'',
				active3:0
			}
		},
		created(){
			this.xnr = this.$route.params.xnr
			this.active= this.$route.params.active
			this.active1= this.$route.params.active1
			this.active3= this.$route.params.active3
			this.fhz = this.$route.params.fhz
			this.ssz =  this.$route.params.ssz
			this.jgname =  this.$route.params.va
			this.dan =  this.$route.params.n
			this.gdd =  this.$route.params.gdd
			this.Flname = this.$route.params.Flname
			this.atv= this.$route.params.atv
			this.Bdid= this.$route.params.Bid
			this.id = this.$route.params.id
			
			var self = this
			let f = "/api/book/reviews?book="+this.$route.params.id
        	  this.axios.get(f)
				.then(function(re) {
					console.log(re)
					self.pl = re.data.reviews
				});
		},
		methods:{
			fh(){
				document.onscroll = null
				
				this.$router.push({name:'Xq',params:{active:this.active,
					active1:this.active1,fhz:this.fhz,_id:this.id,
					ssz:this.ssz,va:this.jgname,dan:this.dan,gdd:this.gdd,
					name:this.Flname,atv:this.atv,Bdid:this.Bdid,active3:this.active3}})
			}
		},
		components:{
			[Icon.name]:Icon,
			[Rate.name]:Rate
		},
		mounted(){
			document.onscroll = function(){
				var max = 450;
				var top =document.documentElement.scrollTop;

				if(top >=max){
					document.getElementById('f').style.display='block'
				}else{
					document.getElementById('f').style.display='none'
				}
          
			 
			}
		}
	}
</script>

<style lang="less" scoped>
.man{
	background-color: #fff;
	width:100%;
}
.top{
	width:100%;
	height:1.3rem;
	background-color:#53DBFB;
	overflow: hidden;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 999;
}
.topl{
	float: left;
	padding:0.3rem 0;
	width:10%;
	text-align: center;
}
.topr{
	float: left;
	padding:0.3rem 0;
	color: #fff;
	font-size:0.5rem;
	font-weight: bold;
	width:90%;
	text-align: center;
}
.pln{
	overflow: hidden;
	border-bottom: 1Px solid #ccc;
}
.plnl{
	float: left;
	width:20%;
	height:4rem;
}
.plnlt{
	width:1.2rem;
	height:1.2rem;
	border-radius: 50%;
	overflow: hidden;
	margin-top:0.2rem;
}
.plnr{
	float: right;
	width:80%;
	height:4rem;
}
.plnrn{
	margin-top:0.2rem;
}
.plnrt{
	margin-top:0.2rem;
}
.plnrz{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.plnrs{
	margin-top:0.2rem;
}
.plnrx{
	margin-top:0.2rem;
}
.fool{
	position: fixed;
	bottom: 1rem;
	right: 0.5rem;
	display: none;
	border-radius:50%;
	background-color: #666666;
	text-align: center;
	width: 1.1rem;
	height:1.1rem;
	line-height: 1.1rem;
	z-index: 999;
}
.fool .jt{
	fill:#fff;
	width:0.4rem;
	height:0.4rem;
}
</style>