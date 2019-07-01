<template>
	<div class="man">
	
	<div  class="top">
	<div @click="fh()" class="topl">
		<van-icon name="arrow-left" size="0.5rem" />
	</div>
	<div class="topr">
		<span class="topz">目录</span>
	</div>
	</div>
	
	<div class="mubox" id="header">
	<div class="mu">
		<div class="mul">
			<span class="muz1">目录</span>
			<span class="muz2">共{{len}}章</span>
		</div>
		<div class="mur">
			<span @click="dz()" class="muz3">{{tex}}</span>
		</div>
	</div>
	</div>
	
	<div class="zj">
		<div @click="dj(index)" class="zjn" v-for="(item,index) in zj">{{item.title}}</div>
	</div>
	
	<a id="f" class="fool" href="#header">
			<svg class="jt" id="icon-backtop" viewBox="0 0 12 9" width="100%" height="100%"><g><path d="M11.5 1a.5.5 0 1 0 0-1H.5a.5.5 0 0 0 0 1h11zM6.354 3.354h-.708l5.5 5.5a.5.5 0 0 0 .708-.708l-5.5-5.5a.5.5 0 0 0-.708 0l-5.5 5.5a.5.5 0 0 0 .708.708l5.5-5.5z"></path></g></svg>
		</a>
	
	</div>
</template>

<script>
	import {Icon} from 'vant'
	export default{
		name:'Zj',
		data(){
			return{
				zj:[],
				zjda:[],
				t:true,
				tex:'倒序',
				len:0,
				id:'',
				na:'',
				
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
		methods:{
			fh(){
				document.onscroll = null
				
				this.$router.push({name:'Xq',params:{active:this.active,
					active1:this.active1,fhz:this.fhz,_id:this.id,
					ssz:this.ssz,va:this.jgname,dan:this.dan,gdd:this.gdd,
					name:this.Flname,atv:this.atv,Bdid:this.Bdid,active3:this.active3}})
			},
			
			dz(){
				if(this.t){
					this.t = !this.t
					this.tex = '正序'
					this.zj=[]
			  var self = this
			  let d = "/api/book-sources?view=summary&book="+this.$route.params.id
        	  this.axios.get(d)
				.then(function(re) {	
				let e = "/api/book-chapters/"+re.data[0]._id;
				self.axios.get(e)
				.then(function(re) {
					var than = self
					
					for(var i=0;i<re.data.chapters.length;i++){
						
						than.zj.unshift(re.data.chapters[i])
					}
					
					console.log(re.data.chapters)
				});
				});
					
				}else{
					this.t = !this.t
					this.tex = '倒序'
					this.zj = []
			  var self = this
			  let d = "/api/book-sources?view=summary&book="+this.$route.params.id
        	  this.axios.get(d)
				.then(function(re) {	
				let e = "/api/book-chapters/"+re.data[0]._id;
				self.axios.get(e)
				.then(function(re) {
					var than = self
					
					for(var i=0;i<re.data.chapters.length;i++){
						
						than.zj.push(re.data.chapters[i])
					}
					
					console.log(re.data.chapters)
				});
				});
					
				}
				
			},
			dj(index){
				this.index = index
				this.$router.push({name:'Nr',params:{id:this.id,na:this.na,index:this.index,
				active:this.active,active1:this.active1,
				fhz:this.fhz,xnr:2,ssz:this.ssz,va:this.name,
				n:this.dan,gdd:this.gdd,Flname:this.Fl,atv:this.atv,
				active3:this.active3,Bid:this.Bdid}})
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
			
			this.id=this.$route.params.id
			this.na=this.$route.params.na
			//章节
			var self = this
			let d = "/api/book-sources?view=summary&book="+this.$route.params.id
        	  this.axios.get(d)
				.then(function(re) {	
				let e = "/api/book-chapters/"+re.data[0]._id;
				self.axios.get(e)
				.then(function(re) {
					var than = self
					than.zj = re.data.chapters
					than.len = re.data.chapters.length
					console.log(re.data.chapters)
				});
				});
	
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
.mubox{
	width:100%;
	border-bottom: 1Px solid #ccc; 
}
.mu{
	width: 90%;
	margin:0.3rem auto 0;
	overflow: hidden;
	padding-bottom: 0.3rem;
	
	
}
.mul{
	float:left;
	width:85%;
}
.mur{
	float:right;
	width:15%;
}
.muz1{
	font-size: 0.5rem;
	font-weight: bold;
}
.muz2{
	font-size: 0.3rem;
	color:#aaa;
	margin-left: 0.2rem;
}
.muz3{
	font-size: 0.45rem;
}
.zj{
	width:90%;
	margin: 0 auto;
	
}
.zjn{
	padding:0.3rem 0;
	border-bottom: 1Px solid #ccc;
	color:#aaa;
	font-size: ;
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