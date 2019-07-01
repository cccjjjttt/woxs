<template>
	<div>
	<div  class="man">
	
	<div v-if="data.length==0?false:true" @click="dj()" class="nr" v-for="(item,index) in data">
		<div id="index" class="tit">{{item.title}}</div>
	    <div class="nrte" >{{item.cpContent}}</div>
	</div>
	<!--<div class="boxnr" v-if="data.length==0?true:false">
		<span>请求不到</span>
	</div>
	-->
	<div class="top">
	<div @click="fh()" class="topl">
		<van-icon name="arrow-left" size="0.5rem" />
	</div>
	<div class="topr">
		<span class="topz">{{na}}</span>
	</div>
	</div>
	
	<div class="fool">
		<div class="fool1">
			<div @click="dj2()" class="atl">Aa-</div>
			<div class="jdt">
				<div class="jd1"></div>
			</div>
			<div @click="dj3()" class="atr">Aa+</div>
		</div>
		<div class="fool2">
			<div  class="mr">
				<span @click="dj4()" class="m active">默认</span>
			</div>
			<div class="mr">
				<span @click="dj5()" class="m">夜间</span>
			</div>
			<div class="mr">
				<span @click="dj6()" class="m">护眼</span>
			</div>
		</div>
		<div class="fool3">
			<div class="y">
				<span @click="dj10()">上一章</span>
			</div>
			<div class="y">
				<span @click="dj8()">目录</span>
			</div>
			<div class="y">
				<span @click="dj9()" class="yz">下一章</span>
			</div>
		</div>
	</div>
	
	

	</div>
	
	<div class="ml">
		<div class="mll">
			<div class="mz">
			<div class="mz1">{{na}}</div>
			<div  class="mz2">目录</div>
				<ul class="mz3u">
					<li @click="dj11(item,index)" v-for="(item,index) in zjda">{{item.title.slice(4)}}</li>
				</ul>
			</div>
		</div>
		<div @click="dj7()" class="mlr">	
		</div>
	</div>
	
	</div>
</template>

<script>
	import {Icon} from 'vant'
	export default{
		name:'Nr',
		data(){
			return{
				data:[],
				zjda:[],
				num:0,
				n:0,
				na:'',
				r:false,
//				nrt:true,
				a1:0,
				tit:0.6,
				nr:0.55,
				nn:[],
				bb:[],
				t:false,
				index:0,
				xnr:0,
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
			this.id = this.$route.params.id
			this.fhz = this.$route.params.fhz
			this.ssz =  this.$route.params.ssz
			this.jgname =  this.$route.params.va
			this.dan =  this.$route.params.n
			this.gdd =  this.$route.params.gdd
			this.Flname = this.$route.params.Flname
			this.atv= this.$route.params.atv
			this.Bdid= this.$route.params.Bid
			
			if(this.$route.params.index){
				this.index = this.$route.params.index
				this.n = this.$route.params.index
				this.num = this.$route.params.index
			}
			
			this.na = this.$route.params.na
			 //章节
			var self = this
			let d = "/api/book-sources?view=summary&book="+this.$route.params.id
        	  this.axios.get(d)
				.then(function(re) {
					
					var than=self
				let e = "/api/book-chapters/"+re.data[0]._id;
				self.axios.get(e)
				.then(function(re) {
				
				than.zjda = re.data.chapters;
				let a = "https://novel.juhe.im/chapters/"+encodeURIComponent(re.data.chapters[than.index].link)
				than.axios.get(a)
				.then(function(re){
		           
					than.data.push(re.data.chapter)
					than.nn.push(than.index)
					than.bb.push(than.index)
				})
					
				});
				});

		},
		mounted(){
			
			var z = document.querySelectorAll('.m');
  	        for(let i=0;i<z.length;i++){
  		    z[i].onclick = function(){
  			for(var j = 0; j<z.length;j++){
  				z[j].setAttribute('class','');
  			}
  			this.setAttribute('class','active')
  		  }	
  	   }
			
			var self =this
			document.onscroll = function(){
				var top =document.documentElement.scrollTop;
				var a = document.body.clientHeight;
				var tha = self
			  if((a-568)==top){
			tha.num = tha.num+1
			var m =Math.max.apply(Math,tha.nn)
				
				tha.n = m
			tha.n = tha.n+1
			//章节
			
			console.log(tha.$route.params.id)
			let d = "/api/book-sources?view=summary&book="+tha.$route.params.id
        	  tha.axios.get(d)
				.then(function(re) {	
				var than=tha
				let e = "/api/book-chapters/"+re.data[0]._id;
				than.axios.get(e)
				.then(function(re) {
                for(var i=than.n;i<=than.num;i++){
                	
                let a = "https://novel.juhe.im/chapters/"+encodeURIComponent(re.data.chapters[i].link)
				than.axios.get(a)
				.then(function(re){
					than.data.push(re.data.chapter)
					var b = document.body.clientHeight;
					
					var timer = setTimeout(function () {
					var dd = document.querySelectorAll('.nrte')
				    var ff = document.querySelectorAll('.tit')
				    for(var i=0;i<dd.length;i++){
					  dd[i].style.fontSize=than.nr+'rem'
				    }
				    for(var j=0;j<ff.length;j++){
					  ff[j].style.fontSize=than.tit+'rem'
				    }
				  },100)
					
					than.bb.push(b)
					than.nn.push(than.n)
					
				})	
               }
				});
				});
			  
			  
			  }
			}
		},
		components:{
			[Icon.name]:Icon
		},
		methods:{
			fh(){
				document.onscroll = null
				if(this.xnr==0){
					this.$router.push({name:'Shujia',params:{active:this.active}})
				}else if(this.xnr==1){
					this.$router.push({name:'Mf',params:{active:this.active}})
				}else if(this.xnr==2){
					this.$router.push({name:'Xq',params:{active:this.active,
						active1:this.active1,fhz:this.fhz,_id:this.id,
						ssz:this.ssz,va:this.jgname,dan:this.dan,gdd:this.gdd,
					    name:this.Flname,atv:this.atv,Bdid:this.Bdid,active3:this.active3}})
				}
				
				
			},
			
			dj(){
				if(!this.r){
					var aa = document.querySelector('.top')
					var bb = document.querySelector('.fool')
					aa.style.opacity=1;
					aa.style.visibility='visible'
					bb.style.opacity=1;
					bb.style.visibility='visible'
					aa.style.transition="all 0.5s"
					bb.style.transition="all 0.5s"
					aa.style.top = 0
					bb.style.bottom = 0
					this.r = !this.r
				}else{
					var aa = document.querySelector('.top')
					var bb = document.querySelector('.fool')
					aa.style.opacity=0;
					aa.style.visibility='hidden'
					bb.style.opacity=0;
					bb.style.visibility='hidden'
					aa.style.transition="all .5s"
					bb.style.transition="all .5s"
					aa.style.top = '-1rem'
					bb.style.bottom = '-5rem'
					this.r = !this.r
				}
			},
			dj2(){
				var cc = document.querySelector('.jd1')
				var dd = document.querySelectorAll('.nrte')
				var ff = document.querySelectorAll('.tit')
				document.querySelector('.atr').style.color = '#fff'
				if(this.a1>0){
					document.querySelector('.atl').style.color = '#fff'
					this.a1 -= 25
					this.tit -=0.1
					this.nr -=0.1
					cc.style.width = this.a1+'%'
					for(var i=0;i<dd.length;i++){
						dd[i].style.fontSize=this.nr+'rem'
					}
					for(var j=0;j<ff.length;j++){
						ff[j].style.fontSize=this.tit+'rem'
					}
				if(this.a1==0){
				document.querySelector('.atl').style.color = '#858585'
				}
				}
				
			},
			dj3(){
				var cc = document.querySelector('.jd1')
				var dd = document.querySelectorAll('.nrte')
				var ff = document.querySelectorAll('.tit')
				document.querySelector('.atl').style.color = '#fff'
				if(this.a1<100){
					this.a1 += 25 
					this.tit += 0.1
					this.nr += 0.1
					for(var i=0;i<dd.length;i++){
						dd[i].style.fontSize=this.nr+'rem'
					}
					for(var j=0;j<ff.length;j++){
						ff[j].style.fontSize=this.tit+'rem'
					}
					cc.style.width = this.a1+'%'
					
					
				if(this.a1==100){
				document.querySelector('.atr').style.color = '#858585'
				}
				}
				
			},
			dj4(){
				var ss = document.querySelector('.man')
				ss.style.backgroundColor="#EEE6DD"
				ss.style.color="#000"
				var aa = document.querySelector('.top')
					var bb = document.querySelector('.fool')
					aa.style.opacity=0;
					aa.style.visibility='hidden'
					bb.style.opacity=0;
					bb.style.visibility='hidden'
					aa.style.transition="all .5s"
					bb.style.transition="all .5s"
					aa.style.top = '-1rem'
					bb.style.bottom = '-5rem'
					this.r = !this.r
			},
			dj5(){
				var ss = document.querySelector('.man')
				ss.style.backgroundColor="#000"
				ss.style.color="#666"
				var aa = document.querySelector('.top')
				var bb = document.querySelector('.fool')
				aa.style.opacity=0;
				aa.style.visibility='hidden'
				bb.style.opacity=0;
				bb.style.visibility='hidden'
				aa.style.transition="all .5s"
				bb.style.transition="all .5s"
				aa.style.top = '-1rem'
				bb.style.bottom = '-5rem'
				this.r = !this.r
			},
			dj6(){
				var ss = document.querySelector('.man')
				ss.style.backgroundColor="#B8CD8D"
				ss.style.color="#000"
				var aa = document.querySelector('.top')
				var bb = document.querySelector('.fool')
				aa.style.opacity=0;
				aa.style.visibility='hidden'
				bb.style.opacity=0;
				bb.style.visibility='hidden'
				aa.style.transition="all .5s"
				bb.style.transition="all .5s"
				aa.style.top = '-1rem'
				bb.style.bottom = '-5rem'
				this.r = !this.r
			},
			dj7(){
				var xx = document.querySelector('.ml')
				xx.style.visibility="hidden"
				xx.style.opacity = 0
				xx.style.left = '-20rem'
				xx.style.transition="all .8s"
			},
			dj8(){
				var xx = document.querySelector('.ml')
				xx.style.visibility="visible"
				xx.style.opacity = 1
				xx.style.left = 0;
				xx.style.transition="all .5s"
				
				var aa = document.querySelector('.top')
				var bb = document.querySelector('.fool')
				aa.style.opacity=0;
				aa.style.visibility='hidden'
				bb.style.opacity=0;
				bb.style.visibility='hidden'
				aa.style.transition="all .5s"
				bb.style.transition="all .5s"
				aa.style.top = '-1rem'
				bb.style.bottom = '-5rem'
				this.r = !this.r
			},
			dj9(){

				var aa = document.querySelector('.top')
				var bb = document.querySelector('.fool')
				aa.style.opacity=0;
				aa.style.visibility='hidden'
				bb.style.opacity=0;
				bb.style.visibility='hidden'
				aa.style.transition="all .5s"
				bb.style.transition="all .5s"
				aa.style.top = '-1rem'
				bb.style.bottom = '-5rem'
				this.r = !this.r
				
				var m =Math.max.apply(Math,this.nn)
				this.n = m
				this.n = this.n+1
				this.num = this.num+1
				 //章节
			var self = this
			let d = "/api/book-sources?view=summary&book="+this.$route.params.id
        	  this.axios.get(d)
				.then(function(re) {
					var than=self
				let e = "/api/book-chapters/"+re.data[0]._id;
				self.axios.get(e)
				.then(function(re) {
					
				than.zjda = re.data.chapters;
				let a = "https://novel.juhe.im/chapters/"+encodeURIComponent(re.data.chapters[than.n].link)
				than.axios.get(a)
				.then(function(re){
					
					than.data.push(re.data.chapter)

                    var b = document.body.clientHeight;
                    than.nn.push(than.n)
                    than.bb.push(b)

					var timer = setTimeout(function () {
					document.documentElement.scrollTop = b;	
					var dd = document.querySelectorAll('.nrte')
				    var ff = document.querySelectorAll('.tit')
				    for(var i=0;i<dd.length;i++){
					  dd[i].style.fontSize=than.nr+'rem'
				    }
				    for(var j=0;j<ff.length;j++){
					  ff[j].style.fontSize=than.tit+'rem'
				    }
					
	 				}, 100);
                

				})
					
				});
				});
			},
			dj10(){
			if(this.n>0){
				this.n = this.n-1;
				for(var i=0;i<this.nn.length;i++){
					if(this.nn[i]==this.n){
						var nu = this.nn.indexOf(this.n)
						this.t = true
						document.documentElement.scrollTop = this.bb[nu];
						return;
					}
					this.t=false
				}
					
					if(!this.t){
						
					//章节
					var self = this
					let d = "/api/book-sources?view=summary&book="+this.$route.params.id
        	  		this.axios.get(d)
					.then(function(re) {
					
					var than=self
					let e = "/api/book-chapters/"+re.data[0]._id;
					self.axios.get(e)
					.then(function(re) {
					
					than.zjda = re.data.chapters;
					let a = "https://novel.juhe.im/chapters/"+encodeURIComponent(re.data.chapters[than.n].link)
					than.axios.get(a)
					.then(function(re){
		
					than.data.unshift(re.data.chapter)
					than.nn.unshift(than.n)
					than.bb.unshift(than.n)
					})
					});
					});
						
					


						
						
					
				}
			}
				
			},
			
			dj11(item,index){
				this.data = [];
				this.bb=[];
				this.nn=[];
				this.n=index;
				this.num=index;
				console.log(index)
				var xx = document.querySelector('.ml')
				xx.style.visibility="hidden"
				xx.style.opacity = 0
				xx.style.left = '-20rem'
				xx.style.transition="all .8s"
				
				 //章节
				var self = this
				let d = "/api/book-sources?view=summary&book="+this.$route.params.id
        	    this.axios.get(d)
				.then(function(re) {
					
				var than=self
				let e = "/api/book-chapters/"+re.data[0]._id;
				self.axios.get(e)
				.then(function(re) {
				than.zjda = re.data.chapters;
				let a = "https://novel.juhe.im/chapters/"+encodeURIComponent(re.data.chapters[index].link)
				than.axios.get(a)
				.then(function(re){
		
					than.data.push(re.data.chapter)
					than.nn.push(index)
					than.bb.push(index)
				})
					
				});
				});
				
			}
		
		}

		
	}
</script>

<style lang="less" scoped>

.man{
	width: 100%;
	background-color: #EEE6DD;
}
.nr{
	width:90%;
	margin:0 auto;
	padding:0.4rem 0 0.7rem;
}
.tit{
	padding:0.4rem 0 0.6rem;
	text-align: center;
	font-size: 0.6rem;
	font-weight: bold;
}
.nrte{
	font-size:0.55rem;
}
.top{
	opacity: 0;
	visibility: visible;
	width:100%;
	height:1.1rem;
	background-color:rgba(0,0,0,0.8);
	overflow: hidden;
	position: fixed;
	top: -1rem;
	left: 0;
	z-index: 999;
}
.topl{
	float: left;
	padding:0.3rem 0;
	width:10%;
	text-align: center;
	color:#fff;
}
.topr{
	float: left;
	padding:0.3rem 0;
	color: #fff;
	font-size:0.4rem;
	font-weight: bold;
	width:90%;
	text-align: center;
}
.fool{
	opacity: 0;
	visibility: visible;
	position: fixed;
	bottom: -5rem;
	left: 0;
	width: 100%;
	background-color:rgba(0,0,0,0.9);
}
.fool1{
	
	width: 90%;
	margin:0 auto;
	overflow: hidden;
	padding-top:0.3rem;
	text-align: center;
	color:#fff;
}
.fool1 .atl{
	float: left;
	width: 20%;
	font-size: 0.5rem;
	box-sizing: border-box;
	color:#858585;
}
.fool1 .atr{
	float: left;
	width: 20%;
	font-size: 0.5rem;
	box-sizing: border-box;
}
.fool1 .jdt{
	position: relative;
	float: left;
	width: 60%;
	background-color: #ccc;
	margin-top:0.3rem;
	height:0.1rem;
    box-sizing: border-box;
}
.jd1{
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	height:0.1rem;
	background-color: #F08A24;	
}
.fool2{
	width: 90%;
	margin:0 auto;
	overflow: hidden;
	padding:0.5rem 0;
	text-align: center;
	color:#fff;
}
.mr{
	float: left;
	width: 33.3%;
	text-align: center;
}

.fool2 span{
	padding:0.1rem 0.6rem;
	border:1Px solid #ccc;
	font-size: 0.4rem;
}
.active{
	border:1Px solid #B93221 !important;
	color:#B93221;
}
.fool3{
	width: 90%;
	margin:0 auto;
	overflow: hidden;
	padding:0.5rem 0;
	text-align: center;
	color:#bbb;
}
.y{
	float: left;
	width:33.3%;
	text-align: center;
	font-size: 0.5rem;
}
.yz{
	color:#f4f4f4
}
.ml{
	visibility: hidden;
	opacity: 0;
	position: fixed;
	top: 0;
	left: -15rem;
	bottom: 0;
	right: 0;
	margin:auto;
}
.mll{
	position: relative;
	float: left;
	width: 75%;
	height:100%;
	background-color: #fff;
	overflow: hidden;
}
.mlr{
	position: relative;
	right: 0;
	top: 0;
	float: right;
	width: 25%;
	height: 100%;
}
.mz{
	width: 90%;
	margin:0 auto;
	overflow: hidden;
}
.mz1{
	position: absolute;
	top: 0;
	left: 0;
	font-size: 0.5rem;
	padding:0.3rem 0 0.3rem 0.3rem;
}
.mz2{
	position: absolute;
	top: 1rem;
	width: 100%;
	left: 0;
	color:#A2A2A2;
	font-size: 0.4rem;
	padding:0.3rem 0 0.3rem 0.3rem;
	border-bottom: 1Px solid #BCBCBC;
}

.mz3u{
	position: absolute;
	top:2.5rem;
	width: 100%;
    height: 85%;
	overflow-y: auto;
}
.mz3u li{
	display: block;
	width: 90%;
	position: relative;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 0.45rem;
	padding:0.2rem 0;
	
}

</style>