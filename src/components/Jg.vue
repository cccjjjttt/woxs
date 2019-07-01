<template>
	<div class="man">
	
	<div class="top">
	<div @click="fh()" class="topl">
		<van-icon name="arrow-left" size="0.5rem" />
	</div>
	<div class="topr">
		<span class="topz">有关“{{name.length>3?name.slice(0,3)+'...':name}}”的书籍</span>
	</div>
	</div>
	
	 <div class="box">
      	<div class="all" @click="goSta(1,item)" v-for="(item,index) in data">
      	<div class="alll">
      		<img class="img-auto" :src="url+item.cover"/>
      		</div>
      		<div class="allr">
      			<div class="allz1">{{item.title}}</div>
      			<div class="allz2">{{item.author}} | {{item.majorCate}}</div>
      			<div class="allz3">{{item.shortIntro}}</div>
      			<div class="allz4">{{(item.latelyFollower/10000).toFixed(2)}}万<span class="a4">人气 |&nbsp;</span>{{item.retentionRatio}}%<span class="a4">读者留存</span></div>
      			</div>
      	</div>
      	</div>
      	
      	<div class="fool" @click="jz()">
      			<div>{{t}}</div>
      	</div>
	
	</div>
</template>

<script>
	import {Icon} from 'vant'
	export default{
		name:'Jg',
		data(){
			return{
				active:0,
				active1:0,
				fhz:0,
				name:'',
				min:0,
				max:5,
				url:'http://statics.zhuishushenqi.com',
				t:'点击加载更多...',
				len:0,
				data:[],
				ssz:0
			}
		},
		methods:{
			goSta(i,item){
				this.$router.push({name:'Xq',params:{_id:item._id,active:this.active,active1:this.active1,fhz:i,va:this.name,ssz:this.ssz}})
			},
			
			fh(){
				
				this.$router.push({name:'Ss',params:{active:this.active,active1:this.active1,ssz:this.ssz}})
				
			},
			
			jz(){
				
				if(this.max<=this.len){
					this.max += 5
					var self = this
				let w = "https://novel.juhe.im/search?keyword="+this.name
        		this.axios.get(w)
				.then(function(re) {
					self.data = re.data.books.slice(self.min,self.max)
				});	
				}else{
					this.t = '到底了'
				}
				
			}
			
		},
		created(){
			this.active = this.$route.params.active
			this.active1 = this.$route.params.active1
			console.log('ggg',this.active)
			console.log('gg',this.active1)
	        this.fhz = this.$route.params.fhz
			this.name = this.$route.params.va;
			this.ssz = this.$route.params.ssz;
			var self = this
			let a = "https://novel.juhe.im/search?keyword="+this.name
        	this.axios.get(a)
				.then(function(re) {
					if(re.data.books){
					self.len = re.data.books.length
					self.data = re.data.books.slice(self.min,self.max)
                    console.log('aa',re.data.books)
			     if(re.data.books.length==0){
					  self.t="无相关数据"
				  }
					}
					
				});
				
	
		},
		
		
		components:{
			[Icon.name]:Icon
		}
	}
</script>

<style lang="less" scoped>
.img-auto{
	width:100%;
	display: block;
	height:3.5rem;
}
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
.box{
	width:100%;
	background-color: #f4f4f4;
	
}
.all{
	width:95%;
	margin:0 auto;
	overflow: hidden;
	padding-top:0.3rem;
}
.alll{
	float:left;
	width:30%;
}
.allr{
	float: right;
	width:70%;
}
.allz1{
	font-size: 0.5rem;;
	margin-left: 0.2rem;
	
}
.allz2{
	color:#aaa;
	margin-left: 0.2rem;
	margin-top:0.2rem;
}
.allz3{
	color:#aaa;
	margin-top:0.2rem;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	margin-left: 0.2rem;
	
}
.allz4{
	margin-top:0.2rem;
	margin-left: 0.2rem;
	color:#F56774;
}
.a4{
	color:#aaa;
}
.fool{
	width:100%;
	text-align: center;
	font-size: 0.3rem;
	padding:0.2rem 0;
}
</style>