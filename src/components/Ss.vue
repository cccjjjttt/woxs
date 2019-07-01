<template>
	<div class="man">
	
	<div class="top">
	<div @click="fh()" class="topl">
		<van-icon name="arrow-left" size="0.5rem" />
	</div>
	<div class="topr">
		<span class="topz">搜索</span>
	</div>
	</div>
	
	<div class="boxbig">
		<div class="box">
			<div class="boxl">
				<div class="boxll">
					<van-icon name="search" size="0.6rem"/>
				</div>
				<div class="boxlr">
					<input @input="nr()" class="inp" v-model="value" type="text" placeholder="请输入关键字"/>
				</div>
			</div>
			<div class="boxr">
				<span @click="goSta()">搜索</span>
			</div>
		</div>
	</div>
	
	<div v-show="r" class="bq">
		<div class="bqz" v-for="(item,index) in data3">
			<van-icon class="bqi" name="stop-circle-o" size="0.5rem"/>
			<span @click="goSta4(item)">{{item}}</span>
		</div>
	</div>
	
	<div class="rcbox">
		<div class="rc">
			<div class="rcl">
				<span>搜索热词</span>
			</div>
			<div class="rcr">
				<span @click="goS()">换一批</span><van-icon color="#A2A2A2" name="replay" size="0.3rem"/>
			</div>
		</div>
		
		<div class="rcz">
			<span @click="goSta2(item)" v-for="(item,index) in data">{{item.word}}</span>
		</div>
	</div>
	
	<div class="rcbox">
		<div class="rc">
			<div class="rcl">
				<span>热门推荐</span>
			</div>
			<div class="rcr">
				<span @click="goS2()">换一批</span><van-icon color="#A2A2A2" name="replay" size="0.3rem"/>
			</div>
		</div>
		
		<div class="rcz2">
			<span @click="goSta2(item)" v-for="(item,index) in data2">{{item.word}}</span>
		</div>
	</div>
	
	<div class="rcbox">
		<div class="rc">
			<div class="rcl2">
				<span>历史记录</span>
			</div>
			<div @click="sc()" class="rcr2">
				<span>删除历史</span><van-icon color="#A2A2A2" name="delete" size="0.3rem"/>
			</div>
		</div>
		
		<div class="ls">
			<div @click="goSta3(item)" class="lsz" v-for="(item,index) in lsda">{{item}}</div>
		</div>
		
		
	</div>
	
	</div>
</template>

<script>
	import {Icon} from 'vant'
	export default{
		name:'Ss',
		data(){
			return{
				active:0,
				active1:0,
				value:'',
				data:[],
				data2:[],
				data3:[],
				lsda:[],
				locda:[],
				min:0,
				max:15,
				min2:0,
				max2:6,
				len2:0,
				len:0,
				r:false,
				ssz:0
			}
		},
		methods:{
			fh(){
				if(this.ssz==0){
					this.$router.push({name:'Jx',params:{active:this.active,active1:this.active1}})
				}else if(this.ssz==1){
					this.$router.push({name:'Mf',params:{active:this.active}})
				}
				
			},
			sc(){
					 for(var key in window.localStorage){
   					var r =  new RegExp('ls','ig')
    		    	if(r.test(key)){               
                      localStorage.removeItem(key)
                      
    		    	}
    		   }
					 this.lsda=[]
			},
			goSta(){
				if(this.value!=''){
					
					this.$router.push({name:'Jg',params:{va:this.value,active:this.active,active1:this.active1,ssz:this.ssz}})	
					var tiem = new Date().getTime();
					localStorage.setItem('ls'+tiem,JSON.stringify(this.value))
				}
				
			},
			goSta2(item){
				this.$router.push({name:'Jg',params:{va:item.word,active:this.active,active1:this.active1,ssz:this.ssz}})	
				console.log(item.word)
				var tiem = new Date().getTime();
				localStorage.setItem('ls'+tiem,JSON.stringify(item.word))
			},
			goSta3(item){
				this.$router.push({name:'Jg',params:{va:item,active:this.active,active1:this.active1,ssz:this.ssz}})
			},
			goSta4(item){
				this.$router.push({name:'Jg',params:{va:item,active:this.active,active1:this.active1,ssz:this.ssz}})
				var tiem = new Date().getTime();
				localStorage.setItem('ls'+tiem,JSON.stringify(item))
			},
			//补全
			nr(){
				console.log("asd ")
				if(this.value!=''){
					var self = this
				let z = "https://novel.juhe.im/auto-complete?query={"+this.value+"}"
			   this.axios.get(z)
				.then(function(re) {
					self.data3 = re.data.keywords
					console.log("z",re.data.keywords)
					
				});
					this.r=true
				}else{
					this.r=false
				}
				
			},
			
			goS(){
			if(this.max<=this.len){
			this.min += 15
			this.max +=15	
			var self = this
			let a = "https://novel.juhe.im/search-hotwords"
				this.axios.get(a)
				.then(function(re) {
					self.data = re.data.searchHotWords.slice(self.min,self.max);
					console.log('aa',re.data.searchHotWords.length)
				});
			}else{
			this.min =0;
			this.max = 15;
			var self = this
			let a = "https://novel.juhe.im/search-hotwords"
				this.axios.get(a)
				.then(function(re) {
					self.data = re.data.searchHotWords.slice(self.min,self.max);
					console.log('aa',re.data.searchHotWords.length)
				});
			}
			},
			
			goS2(){
				if(this.max2<this.len2){
					this.min2 += 6
					this.max2 += 6
				var self = this
				let b = "https://novel.juhe.im/hot-books"
				this.axios.get(b)
				.then(function(re) {
					self.data2 = re.data.newHotWords.slice(self.min2,self.max2)
				});
				}else{
					this.min2=0;
					this.max2=6;
					var self = this
				let b = "https://novel.juhe.im/hot-books"
				this.axios.get(b)
				.then(function(re) {
					self.data2 = re.data.newHotWords.slice(self.min2,self.max2)
				});
				}
			}
			
		},
		created(){
			this.active = this.$route.params.active
			this.active1 = this.$route.params.active1
			this.ssz = this.$route.params.ssz
			
			var self = this
			let a = "https://novel.juhe.im/search-hotwords"
				this.axios.get(a)
				.then(function(re) {
					self.data = re.data.searchHotWords.slice(self.min,self.max);
					self.len = re.data.searchHotWords.length
				});
				
			let b = "https://novel.juhe.im/hot-books"
			this.axios.get(b)
				.then(function(re) {
					console.log("bb",re.data.newHotWords.length)
					self.len2 = re.data.newHotWords.length
					self.data2 = re.data.newHotWords.slice(self.min2,self.max2)
					
				});
				
				 for(var key in window.localStorage){
   					var r =  new RegExp('ls','ig')
    		    	if(r.test(key)){               
                     var x = JSON.parse(window.localStorage.getItem(key));  
                      console.log('ls',key)  
                      this.locda.unshift(key);
                      this.lsda.unshift(x)
                      
                      
    		    	}
    		   }	
    		   
    		       for(var i =0;i<this.lsda.length;i++){
	       		   for(var j = i+1;j<this.lsda.length;j++){
	      			if(this.lsda[i]===this.lsda[j]){
	      				this.lsda.splice(j,1);
	      				j--;
	      				}
	      			}
	      		}
    		       console.log('lida',this.lsda)
				   console.log('locda',this.locda)
				   if(this.locda.length>3){
				   	for(var z=3;z<this.locda.length;z++){
				   		console.log('sdfsdfsdf s',this.locda[z])
				   		localStorage.removeItem(this.locda[z])
				   	}
				   	this.lsda = []
				   	 for(var key in window.localStorage){
   					var r =  new RegExp('ls','ig')
    		    	if(r.test(key)){               
                     var x = JSON.parse(window.localStorage.getItem(key));  

                      this.lsda.unshift(x)
                      
                      
    		    	}
    		   }	
    		   
				   	
				   }
				
		},
		components:{
			[Icon.name]:Icon
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
.boxbig{
	margin-top:0.5rem;
	width:100%;
}
.box{
	width:90%;
	margin:0 auto;
	overflow: hidden;
}
.boxl{
	float:left;
	width:85%;
	overflow: hidden;
	background-color:#EBEBF0;
	border-radius: 1rem;
	padding:0.1rem 0.1rem 0;
}
.boxll{
	width:10%;
	float:left;
	
}
.boxlr{
	width:90%;
	float:right;
	
}
.boxr{
	float:right;
	width:10%;
	font-size: 0.45rem;
	text-align: right;
}
.boxr span{
	display: inline-block;
	margin-top:0.1rem;
}
.inp{
	width:90%;
	outline: none;
	border:none;
	background-color:#EBEBF0;
}
.rcbox{
	width:100%;
	margin-top:0.8rem;
}
.rc{
	width:90%;
	margin:0 auto;
	overflow: hidden;
}
.rcl{
	width:83%;
	float:left;
	font-size: 0.6rem;
	color:#A2A2A2;
}
.rcr{
	width:17%;
	float:right
}
.rcr span{
	display: inline-block;
	margin-top:0.2rem;
	color:#A2A2A2;
}
.rcz{
	width:90%;
	margin:0 auto;
}
.rcz span{
	color:#747474;
	font-size: 0.35rem;
	display: inline-block;
	background-color:#EBEBF0;
	padding:0.1rem 0.3rem 0.2rem;
	border-radius: 1rem;
	margin-right:0.3rem;
	margin-top:0.5rem;
}
.rcz2{
	width:90%;
	margin:0 auto;
}
.rcz2 span{
	color:#747474;
	font-size: 0.3rem;
	display: inline-block;
	background-color:#EBEBF0;
	padding:0.1rem 0.2rem 0.2rem;
	border-radius: 1rem;
	margin-right:0.2rem;
	margin-top:0.5rem;
}
.rcl2{
	width:78%;
	float:left;
	font-size: 0.6rem;
	color:#A2A2A2;
}
.rcr2{
	width:22%;
	float:right
}
.rcr2 span{
	display: inline-block;
	margin-top:0.2rem;
	color:#A2A2A2;
}
.ls{
	width:90%;
	margin:0 auto;
	margin-top:0.2rem;
}
.lsz{
	font-size: 0.4rem;
	padding-bottom:0.2rem;
	border-bottom:1Px solid #A2A0A0;
	color:#A2A2A2;
}
.bq{
	position: fixed;
	top:2.8rem;
	left: 0;
	bottom: 0;
	right: 0;
	background: #FFF;
	z-index: 999;
}
.bqz{
	width: 90%;
	padding:0.1rem 0;
	margin:0.5rem auto 0;
	font-size: 0.5rem;
	color:#A2A2A2;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.bqz span{
	margin:0.3rem 0 0 0.5rem;
	
}
</style>