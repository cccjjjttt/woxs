<template>
  <div class="man">
  <div class="top"><span>书库</span></div>
  
  <div class="nr">
  	
  	<div class="l">
  		<div @click="tt4()" class="active z"><span>分类</span></div>
  		<div @click="tt1()" class="z"><span>男生榜单</span></div>
  		<div @click="tt2()" class="z"><span>女生榜单</span></div>
  		<div @click="tt3()" class="z"><span>榜单</span></div>
  	</div>
  	<div class="r">
  		<div v-show="t1" class="rz">
  			
  			<div class="tz" @click="goSta1(item)" v-for="(item,index) in data.male">
  				<div class="rl">
  				<img class="auto-img" :src="index>6?url+data.male[3].cover:url+item.cover">
  			</div>
  			<div class="rr">
  				{{item.title}}
  			</div>
  			</div>

  		</div>
  		<div v-show="t2" class="rz">
  			
  			<div class="tz" @click="goSta1(item)" v-for="(item,index) in data.female">
  				<div class="rl">
  				<img class="auto-img" :src="index>6?url+data.male[3].cover:url+item.cover">
  			</div>
  			<div class="rr">
  				{{item.title}}
  			</div>
  			</div>
  			
  		</div>
  		<div v-show="t3" class="rz">
  			
  			<div class="tz" @click="goSta1(item)" v-for="(item,index) in data.picture">
  				<div class="rl">
  				<img class="auto-img" :src="index>6?ur:url+item.cover">
  			</div>
  			<div class="rr">
  				{{item.title}}
  			</div>
  			</div>
  			
  			<div class="tz" @click="goSta1(item)" v-for="(item,index) in data.epub">
  				<div class="rl">
  				<img class="auto-img" :src="index>6?ur:url+item.cover">
  			</div>
  			<div class="rr">
  				{{item.title}}
  			</div>
  			</div>
  			
  		</div>
  		
  		<div v-show="t4" class="rz">
  			<div class="fln" @click="goSta(item)" v-for="(item,index) in da.slice(0,2)">
  				<div class="flnl">
  					<div class="flnlz1">{{item.name}}</div>
  						<div class="flnlz2">{{item.name}}大陆</div>
  				</div>
  				<div class="flnr">
  				<div class="t1"><img class="auto-img1" :src="url+item.bookCover[0]"></div>
  				<div class="t2"><img class="auto-img1" :src="url+item.bookCover[1]"></div>
  				<div class="t3"><img class="auto-img1" :src="url+item.bookCover[2]"></div>
  				</div>
  			</div>
  			
  			<div class="flkb" @click="goSta(item)" v-for="(item,index) in da.slice(2)">
  				<div class="flk">
  				<div class="flkl">
  					<div class="flkl1">{{item.name}}</div>
  					<div class="flnlz2">{{item.name}}大陆</div>
  				</div>
  				<div class="flkr">
  					<div class="flkt">
  						<img class="auto-img2" :src="url+item.bookCover[0]"/>
  					</div>
  				</div>
  				</div>
  			</div>
  			
  		</div>
  		
  	</div>
  	
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'Sk',
  data(){
  	return{
  		atv:0,
  		active:3,
  		t1:false,
  		t2:false,
  		t3:false,
  		t4:true,
  		url:'http://statics.zhuishushenqi.com',
  		ur:'http://statics.zhuishushenqi.com/ranking-cover/142319166399949',
  		data:{},
  		da:[]
  	}
  },
  mounted(){
  	var z = document.querySelectorAll('.z');
  	for(let i=0;i<z.length;i++){
  			z[i].setAttribute('class','z')
  	}
  	z[this.atv].setAttribute('class','active z')
  	
  	for(let i=0;i<z.length;i++){
  		z[i].onclick = function(){
  			for(var j = 0; j<z.length;j++){
  				z[j].setAttribute('class','z');
  			}
  			this.setAttribute('class','active z')
  		}	
  	}
  	
  	if(this.atv==1){
  		this.t1=true;
  		this.t2=false;
  		this.t3=false;	
  		this.t4=false;
  	}else if(this.atv==2){
  		this.t1=false;
  		this.t2=true;
  		this.t3=false;
  		this.t4=false;
  	}else if(this.atv == 3){
  		this.t1=false;
  		this.t2=false;
  		this.t3=true;	
  		this.t4=false;
  	}else if(this.atv==0){
  		this.t1=false;
  		this.t2=false;
  		this.t3=false;	
  		this.t4=true;
  	}
  	
  	
  },
  methods:{
  	goSta(item){
  		this.$router.push({name:'Fl',params:{name:item.name,active:this.active,atv:this.atv}})
  	},
  	goSta1(item){
  		this.$router.push({name:'Bd',params:{Bid:item._id,active:this.active,atv:this.atv}})
  	},
  	
  	tt1(){
  		this.atv = 1
  		this.t1=true;
  		this.t2=false;
  		this.t3=false;	
  		this.t4=false;
  	},
  	tt2(){
  		this.atv = 2
  		this.t1=false;
  		this.t2=true;
  		this.t3=false;
  		this.t4=false;
  	},
  	tt3(){
  		this.atv = 3
  		this.t1=false;
  		this.t2=false;
  		this.t3=true;	
  		this.t4=false;
  	},
  	tt4(){
  			this.atv = 0
  		this.t1=false;
  		this.t2=false;
  		this.t3=false;	
  		this.t4=true;
  	}
  },
 
  created(){
    console.log('ac',this.$route.params.active)
    if( this.$route.params.atv){
    	this.atv =  this.$route.params.atv
    	console.log('sd',this.atv)
    }
  	
  	this.active = this.$route.params.active
  	
  	let b = "https://novel.juhe.im/rank-category"
  	var self = this
        	this.axios.get(b)
				.then(function(re) {
					console.log(re.data.male)
				self.data = re.data
				});
  
	let c = "https://novel.juhe.im/categories"
        	this.axios.get(c)
				.then(function(re) {
					self.da = re.data.male;
				});

  }

}
</script>


<style lang="less" scoped>
.auto-img{
	width: 100%;
	display: block;
}
.auto-img1{
	width:90%;
	height:2rem;
	display: block;
}
.auto-img2{
	width:94%;
	height:2rem;
	display: block;
}

.active{
	background-color:#A7FAAD !important;
}
.man{

	width:100%;
	margin-bottom: 1.333rem;
	background-color:#fff;
}
.top{
	position: sticky;
	top: 0;
	left: 0;
	width:100%;
	height:1.4rem;
	background-color:#53DBFB;
	text-align: center;
	line-height: 1.4rem;
	font-size:0.5rem;
	font-weight: bold;
	color:#fff;
}
.nr{
	width:100%;
	overflow: hidden;
	height:100%;
}
.l{
	float:left;
	width:25%;
	background-color:#ccc;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin-top:1.4rem;
}
.r{
	float:right;
	width:75%;
	background-color:#fff;
	height:100%;
}

.l .z{
	width:100%;
	height:1.4rem;
	text-align: center;
	line-height: 1.4rem;
	font-size: 0.45rem;
	font-weight: bold;
	background-color:#fff;
	border-bottom:1Px solid #ddd;
}
.r .rz{
	width:100%;
	height:100%;
	background-color:#fff;
	
}
.tz{
	width: 100%;
	padding-top:0.2rem;
	overflow: hidden;
	height:.7rem;
}
.r .rl{
	float:left;
	width:8%;
	margin-left: 0.5rem;
}
.r .rr{
	float: left;
	width:60%;
	text-align: center;
	margin-top:0.1rem;
}
.fln{
	width:95%;
	padding-top:0.2rem;
	background-color:#f4f4f4;
	border-radius: 0.21rem;
	margin:0.3rem auto 0.5rem;
	overflow: hidden;
}
.flnl{
	float:left;
	width:30%;
}
.flnr{
	float:right;
	width:70%;
	overflow: hidden;
}
.t1{
	float:left;
	width:33%;
}
.t3{
		float:left;
	width:33%;
}
.t2{
		float:left;
	width:33%;
}
.flnlz1{
	margin-top:0.2rem;
	text-align: center;
	font-size: 0.6rem;
}
.flnlz2{
	font-size:0.2rem;
	text-align: center;
	margin-top:0.2rem;
	color:#65B9E7;
}
.flkb{
	width:50%;
	display: inline-block;
}
.flk{
	width:90%;
	margin:0.3rem auto 0;
	background-color:#f4f4f4;
	overflow: hidden;
	padding-top:0.15rem;
	border-radius: 0.2rem;
}
.flkl{
	float:left;
	width:52%;
}
.flkr{
	float:right;
	width:48%;
}
.flkl1{
	font-size: 0.4rem;
	text-align: center;
  margin-top:0.3rem;
}

</style>
