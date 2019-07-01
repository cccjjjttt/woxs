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
		<van-tabs @click="aa" color="#5895FA" :line-height="1" :swipeable="true"   :animated="true" title-active-color="#5895FA" v-model="activ">
      	<van-tab title="全部">
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
      		<div @click="jz()" class="fool">
      			<div>{{t}}</div>
      		</div>
      	</van-tab>
  		<van-tab :title="item" v-for="(item,index) in data">
  			
  			<div class="box">
      		<div class="all" @click="dj(item)" v-for="(item,index) in dataa">
      			<div class="alll">
      				<img class="img-auto" :src="url+item.cover"/>
      			</div>
      			<div class="allr">
      				<div class="allz1">{{item.title}}</div>
      				<div class="allz2">{{item.author}} | {{item.majorCate}}</div>
      				<div class="allz3">{{item.shortIntro}}</div>
      				<div class="allz4">{{(item.latelyFollower/10000).toFixed(2)}}万<span class="a4">人气 |&nbsp;</span> {{item.retentionRatio}}%<span class="a4">读者留存</span></div>
      			</div>
      		</div>
      		</div>
      		<div @click="jz1()" class="fool">
      			<div>{{dataa.length==0?k:t}}</div>
      		</div>
  			
  		</van-tab>

</van-tabs>
</div>
	
	</div>
</template>

<script>
	import {Icon,Tab,Tabs,Toast} from 'vant'
	
	export default{
		name:'Fl',
		data(){
			return{
				active:0,
				activ:0,
				atv:0,
				name:'',
				data:[], //子分类
				dataa:[],//子分类内容
				da:[] , //分类内容
				url:'http://statics.zhuishushenqi.com',
				num:5,
				num1:5,
				tex:'',
				len:0,
				len:0,
				t:'点击加载更多...',
				k:'空空如也'
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
			fh(){
				this.$router.push({name:'Sk',params:{active:this.active,atv:this.atv}})
			},
			dj(item){
				this.$router.push({name:'Xq',params:{_id:item._id,active:this.active,fhz:2,name:this.name,atv:this.atv}})
			},
			
			 aa(index,title){

			 	this.num1=5;
			 	this.num=5;
			 	this.tex=title
			 	var self = this
			 	let h = "https://novel.juhe.im/category-info?gender=male&type=hot&major="+this.name+"&minor="+this.tex+"&start=0&limit="
        	 this.axios.get(h)
				.then(function(re) {
				self.len1 = re.data.books.length
				self.dataa = re.data.books.slice(0,self.num1)
				});
				
				let e = "https://novel.juhe.im/category-info?gender=male&type=hot&major="+this.name+"&minor=&start=0&limit="
        	 this.axios.get(e)
				.then(function(re) {
				self.da = re.data.books.slice(0,self.num1)
				});
			 },
			 
			 jz(){
			 	this.num += 5;
			 	if(this.num<this.len+5){
			 	var self = this
			 	let w = "https://novel.juhe.im/category-info?gender=male&type=hot&major="+this.name+"&minor="+this.tex+"&start=0&limit="
        	 this.axios.get(w)
				.then(function(re) {
				self.da = re.data.books.slice(0,self.num)
				});
			 	}else{
			 		this.t='到底了'
			 	}
			 },
			 
			 jz1(){
			 	this.num1 += 5;
			 	if(this.num1<this.len1+5){
			 		var self = this
			 		var q = "https://novel.juhe.im/category-info?gender=male&type=hot&major="+this.name+"&minor="+this.tex+"&start=0&limit="
			 	this.axios.get(q)
				.then(function(re) {
				self.dataa = re.data.books.slice(0,self.num1)
				});
			 	}else{
			 		this.t='到底了'
			 	}
			 		
			 		
			 	}

			 
		},
		created(){
			this.active = this.$route.params.active
			this.atv = this.$route.params.atv
			this.name = this.$route.params.name
			var self = this
			let c = "https://novel.juhe.im/sub-categories"
        	this.axios.get(c)
				.then(function(re) {
					for(var i=0;i<re.data.male.length;i++){
						if(re.data.male[i].major==self.name){
							self.data = re.data.male[i].mins;
						}
					}
				});


			let w = "https://novel.juhe.im/category-info?gender=male&type=hot&major="+this.name+"&minor=&start=0&limit="
        	this.axios.get(w)
				.then(function(re) {
					console.log(re)
				self.da = re.data.books.slice(0,self.num)
				self.len=re.data.books.length
				});
		
			
		},
		components:{
			[Icon.name]:Icon,
			[Tabs.name]:Tabs,
			[Tab.name]:Tab,
			[Toast.name]:Toast
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
}
.topz{
	margin-left:40%;
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