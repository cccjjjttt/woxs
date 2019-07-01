<template>
	<div class="man">
	
	<div class="top">
	<div @click="fh()" class="topl">
		<van-icon name="arrow-left" size="0.5rem" />
	</div>
	<div class="topr">
		<span class="topz">{{name}}</span>
	</div>
	</div>
	
	<div>
	<van-tabs @click="aa" color="#5895FA" :line-height="2" :swipeable="true" :animated="true" title-active-color="#5895FA" v-model="active3">
    <van-tab title="周榜">
    	
    	    <div class="box">
      		<div class="all" @click="dj(item)" v-for="(item,index) in da">
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
    	
    </van-tab>
    <van-tab title="月榜">
    	
    	 <div class="box">
      		<div class="all" @click="dj(item)" v-for="(item,index) in da1">
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
      		<div class="fool" @click="jz2()">
      			<div>{{t}}</div>
      		</div>
    	
    </van-tab>
    <van-tab title="总榜">
    	
    	 <div class="box">
      		<div class="all" @click="dj(item)" v-for="(item,index) in da2">
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
      		<div class="fool" @click="jz3()">
      			<div>{{t}}</div>
      		</div>
    	
    </van-tab>
	</van-tabs>
	</div>
	
	</div>
</template>

<script>
	import {Icon, Tab, Tabs} from 'vant'
	
	export default{
		name:'Bd',
		data(){
			return{
			active:0,
			active3:0,
			atv:0,
			name:''	,
			url:'http://statics.zhuishushenqi.com',
			da:[],
			da1:[],
			da2:[],
			t:'点击加载更多...',
			num:5,
			num2:30,
			num3:55,
			len:0,
			fhz:0,
			Bdid:''
			}
		},
		 mounted(){
     	var v = document.querySelector(".van-tabs__wrap")
     	v.style.position="sticky"
     	v.style.top = 1.3 + 'rem'
     	var v1 = document.querySelector('.van-tabs')
     	v1.style.paddingTop = 0
     },
		
		methods:{
			dj(item){
				this.$router.push({name:'Xq',params:{_id:item._id,active3:this.active3,active:this.active,fhz:3,Bdid:this.Bdid,atv:this.atv}})
			},
			fh(){
				this.$router.push({name:'Sk',params:{active:this.active,atv:this.atv}})
			},
			
			aa(index,title){
				this.active3=index
				this.num = 5;
				this.num2 = 30;
				this.num3 = 50;
				this.t = '点击加载更多';
				
				var self = this
			    let r = "https://novel.juhe.im/rank/"+this.Bdid
        	    this.axios.get(r)
				.then(function(re) {
				self.da = re.data.ranking.books.slice(0,5)
				self.da1 = re.data.ranking.books.slice(25,30)
				self.da2 = re.data.ranking.books.slice(50,55)
				});
				
				
			},
			jz(){
				if(this.num<25){
					this.num += 5
					var self = this
			let e = "https://novel.juhe.im/rank/"+this.Bdid
        	 this.axios.get(e)
				.then(function(re) {
				self.da = re.data.ranking.books.slice(0,self.num)
				});
				}else{
					this.t = '到底了'
				}		
			},
			
			jz2(){
				if(this.num2<50){
					this.num2 += 5
					var self = this
			let e = "https://novel.juhe.im/rank/"+this.Bdid
        	 this.axios.get(e)
				.then(function(re) {
				self.da1 = re.data.ranking.books.slice(25,self.num2)
				});
				}else{
					this.t = '到底了'
				}		
			},
			
			jz3(){
				console.log("a")
				if(this.num3<this.len){
					this.num3 += 8
					var self = this
			let e = "https://novel.juhe.im/rank/"+this.Bdid
        	 this.axios.get(e)
				.then(function(re) {
				self.da2 = re.data.ranking.books.slice(50,self.num3)
				});
				}else{
					this.t = '到底了'
				}		
			}
			
			
		},
		created(){
			this.active = this.$route.params.active
			this.active3 = this.$route.params.active3
			this.atv = this.$route.params.atv
			console.log('xx',this.atv)
			var self = this
			this.Bdid = this.$route.params.Bid
			let e = "https://novel.juhe.im/rank/"+this.Bdid
        	 this.axios.get(e)
				.then(function(re) {
				self.len = re.data.ranking.books.length
				self.name = re.data.ranking.title
				self.da = re.data.ranking.books.slice(0,5)
				self.da1 = re.data.ranking.books.slice(25,30)
				self.da2 = re.data.ranking.books.slice(50,55)
				});
		},
		components:{
			[Icon.name]:Icon,
			[Tab.name]:Tab,
			[Tabs.name]:Tabs
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