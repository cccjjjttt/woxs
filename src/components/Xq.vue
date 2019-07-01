<template>
	<div class="man">
		<div class="top">
			<div @click="fh()" class="topl">
				<van-icon name="arrow-left" size="0.5rem" />
			</div>
			<div class="topr">
				<span class="topz">书籍详情</span>
			</div>
		</div>

		<div class="mo">
			<div class="mol">
				<img class="img-auto" :src="url+xp.cover" />
			</div>
			<div class="mor">
				<div class="morz1">{{xp.title}}</div>
				<div class="morz2">{{xp.author}}</div>
				<div class="morz3">{{xp.cat}} | {{xp.allowMonthly?'完结':'未完结'}} | {{xp.latelyFollower/100}}万字</div>
				<div></div>
			</div>
		</div>

		<div class="mo1">
			<div @click="dj()" class="mo1l">{{ttt}}</div>
			<div @click="goSta()" class="mo1r">开始阅读</div>
		</div>

		<div class="mo2">
			<div id="mo2" class="mo2zi">{{xp.longIntro}}</div>
			<div @click="goS()" class="i">
				<van-icon :name="i" size="0.4rem" />
			</div>
		</div>

		<div @click="goSta1()" class="ml">
			<div class="mll">目录</div>
			<div class="mlr">
				<van-icon name="bars" size=".8rem" color="#aaa" />
			</div>
		</div>

		<div class="tj">
			<div class="tjzi">作者作品</div>
			<nav>
				<div @click="djtj(item)" class="im" v-for="(item,index) in zz">
					<div class="im1">
						<img class="img-auto1" :src="url+item.cover">
					</div>
					<div class="imzi">
						<p>{{item.title}}</p>
					</div>
				</div>
			</nav>
		</div>

		<div class="tj">
			
			<div class="rpl">
				<div class="rpll"><span>相关推荐</span></div>
				<div @click="goSta4()" class="rplr">
					换一批
					<van-icon name="replay" size="0.4rem" />
				</div>
			</div>
			
			<div @click="djtj(item)" class="tjn1" v-for="(item,index) in tj">
				<div class="tjn1l">
					<div class="tjn1li">
						<img class="auto-img1" :src="url+item.cover" />
					</div>
				</div>
				<div class="tjn1r">
					<div class="tjz1"><span>{{item.title}}</span></div>
					<div class="tjz2"><span>{{item.author}}</span></div>
					<div class="tjz3"><span>{{item.shortIntro}}</span></div>
					<div class="tjz4">
						<div class="tjz4l">{{item.majorCate}} |&nbsp;<span class="t4">{{item.latelyFollower}}</span>人气 </div>
						<div class="tjz4r">{{item.minorCate}}</div>
					</div>
				</div>
			</div>
		</div>

		<div class="pl">
			<div class="rpl">
				<div class="rpll"><span>热门评论</span></div>
				<div @click="goSta2()" class="rplr">
					更多
					<van-icon name="arrow" size="0.4rem" />
				</div>
			</div>

			<div class="plnbox">
				<div class="pln" v-for="(item,index) in pl.slice(0,3)">
					<div class="plnl">
						<div class="plnlt">
							<img class="img-auto" :src="url+item.author.avatar" />
						</div>
					</div>
					<div class="plnr">
						<div class="plnrn">{{item.author.nickname}}</div>
						<div class="plnrx">
							<van-rate :size="1" v-model="item.rating" />
						</div>
						<div class="plnrt">{{item.title}}</div>
						<div class="plnrz">{{item.content}}</div>
						<div class="plnrs">{{item.created.slice(0,10)}}</div>
					</div>
				</div>
			</div>
		</div>

		<div class="foold">
			<div class="fzi1"><span>沪公网安备 13128-9527号</span></div>
			<div class="fzi2"><span>上尚科技有限公司 增值电信业务经营许可证沪B2-12138 网络文化经营许可证沪网文（2016）12138号 出版物经营许可证新出发沪批字第U12138号</span></div>
		</div>

		<div class="fool">
			<div class="fooll">
				<van-icon class="aa" name="like-o" size="1.1rem" />
			</div>
			<div @click="goSta3()" class="foolr">
				<input class="foolipt" placeholder="我来说俩句..." />
			</div>
		</div>

	</div>
</template>

<script>
	import { Icon, Rate } from 'vant'

	export default {
		name: 'Xq',
		data() {
			return {
				active:0,
				active1:0,
				atv:0,
				active3:0,
				fhz:0,
				i: 'arrow-down',
				r: true,
				xp: {},
				tj: [],
				url: 'http://statics.zhuishushenqi.com',
				zjid: '',
				min:0,
				max:3,
				len:4,
				id: '',
				pl: [],
				zz:[],
				na:'',
				ttt:'加入书架',
				t:true,
				data:[],
				name:'',
				ssz:0,
				Fl:'',
				Bdid:'',
				dan:[],
				gdd:0,
				

			}
		},
		methods: {
			fh(){
				if(this.fhz==0){
					this.$router.push({name:'Jx',params:{active:this.active,active1:this.active1}})
				}else if(this.fhz==1){
					this.$router.push({name:'Jg',params:{active:this.active,active1:this.active1,va:this.name,ssz:this.ssz}})
				}else if(this.fhz==2){
					this.$router.push({name:'Fl',params:{active:this.active,ssz:this.ssz,name:this.Fl,atv:this.atv}})
				}else if(this.fhz==3){
					this.$router.push({name:'Bd',params:{active:this.active,ssz:this.ssz,active3:this.active3,Bid:this.Bdid,atv:this.atv}})
				}else if(this.fhz==4){
					this.$router.push({name:'Gdd',params:{active:this.active,active1:this.active1,n:this.dan,gdd:this.gdd}})
				}
				
				
			},
			dj(){
				
				if(this.t){
					this.ttt='撤出书架'
					var a={
						id : this.xp._id,
						cover:this.xp.cover,
						title:this.xp.title
					}
					
					localStorage.setItem('sj'+this.xp._id,JSON.stringify(a))
					this.t = !this.t
				}else{
					this.ttt="加入书架"
					localStorage.removeItem('sj'+this.xp._id);
					this.t = !this.t
				}
				
			},
			goSta(path,item) {
				var tiem = new Date().getTime();
				var c = {
					title:this.xp.title,
					id:this.xp._id,
					tiem:tiem
				}
				localStorage.setItem('kg'+tiem,JSON.stringify(c))
			
				this.$router.push({name:'Nr',params:{id:this.id,
					na:this.na,active:this.active,active1:this.active1,
					fhz:this.fhz,xnr:2,ssz:this.ssz,va:this.name,
					n:this.dan,gdd:this.gdd,Flname:this.Fl,atv:this.atv,
				    active3:this.active3,Bid:this.Bdid}})
			},
			goSta1(){
				this.$router.push({name:'Zj',params:{id:this.id,
					na:this.na,active:this.active,active1:this.active1,
					fhz:this.fhz,xnr:2,ssz:this.ssz,va:this.name,
					n:this.dan,gdd:this.gdd,Flname:this.Fl,atv:this.atv,
				    active3:this.active3,Bid:this.Bdid}})
			},
			goSta2(){
				this.$router.push({name:'Pl',params:{id:this.id,
					active:this.active,active1:this.active1,
					fhz:this.fhz,xnr:2,ssz:this.ssz,va:this.name,
					n:this.dan,gdd:this.gdd,Flname:this.Fl,atv:this.atv,
				    active3:this.active3,Bid:this.Bdid}})
			},
			goSta3(){
				this.$router.push({name:'Fb',params:{id:this.id,
					active:this.active,active1:this.active1,
					fhz:this.fhz,xnr:2,ssz:this.ssz,va:this.name,
					n:this.dan,gdd:this.gdd,Flname:this.Fl,atv:this.atv,
				    active3:this.active3,Bid:this.Bdid}})
			},
			goSta4(){
			console.log(this.len)
			if(this.max < this.len){
			this.min = this.min + 3
			this.max = this.max + 3
			var salf = this
			let o = "/api/recommend/" + this.id
			this.axios.get(o)
				.then(function(re) {
					salf.len = re.data.books.length
					salf.tj = re.data.books.slice(salf.min,salf.max)
				});
				
			}else{
				this.min = 0
				this.max = 3
				var salf = this
			let u = "/api/recommend/" + this.id
			this.axios.get(u)
				.then(function(re) {
					salf.tj = re.data.books.slice(salf.min,salf.max)
				});
			}
			
				
			},
			djtj(item){
				this.xp = item
				document.documentElement.scrollTop = 0
				this.id = item._id
				this.na = item.title
				var salf = this
			let y = "https://novel.juhe.im/author-books?author=" + item.author
					var than = salf
					salf.axios.get(y)
				.then(function(re) {
					than.zz = re.data.books
				});			
				
//				推荐
			let c = "/api/recommend/" + item._id
			this.axios.get(c)
				.then(function(re) {
					salf.tj = re.data.books.slice(salf.min,salf.max)
					
				});

			//评论
			let f = "/api/book/reviews?book=" + item._id
			this.axios.get(f)
				.then(function(re) {
					salf.pl = re.data.reviews
				});
		    
		    //章节
			var self = this
			let d = "/api/book-sources?view=summary&book="+item._id
        	  this.axios.get(d)
				.then(function(re) {	
				let e = "/api/book-chapters/"+re.data[0]._id;
				self.axios.get(e)
				.then(function(re) {
					var than = self
					than.zj = re.data.chapters
					than.len = re.data.chapters.length
				});
				});
				
				
				console.log("a",item)
			},

			goS() {
				if(this.r) {
					this.i = 'arrow-up'
					this.r = !this.r
					var a = document.querySelector('#mo2');
					a.setAttribute('class', '')
				} else {
					this.i = 'arrow-down'
					this.r = !this.r
					var a = document.querySelector('#mo2');
					a.setAttribute('class', 'mo2zi')
				}
			}
		},

		created() {
			this.ssz = this.$route.params.ssz
			this.fhz = this.$route.params.fhz
			this.active = this.$route.params.active
			if(this.$route.params.active1){
				this.active1 = this.$route.params.active1
			}
			if(this.$route.params.active3){
				this.active3 = this.$route.params.active3
			}
			this.name = this.$route.params.va
			var id = this.$route.params._id;
			this.id = this.$route.params._id;
			this.Fl = this.$route.params.name
			if( this.$route.params.atv){
				this.atv = this.$route.params.atv
			}

			this.Bdid = this.$route.params.Bdid
			this.Bdid = this.$route.params.Bdid
			this.dan = this.$route.params.dan
			this.gdd=this.$route.params.gdd
			var salf = this
			//详情
			let b = "/api/book-info/" + id
			this.axios.get(b)
				.then(function(re) {
					salf.xp = re.data
					salf.na = re.data.title
					
					for(var key in window.localStorage){		    	
   					var r =  new RegExp('sj','ig')
    		    	if(r.test(key)){               
                     var x = JSON.parse(localStorage.getItem(key));  
                     if(x.id == salf.xp._id){
                     	salf.ttt="撤出书架"
                     	salf.t = false
                     }
    		    	}
    		  }
					let y = "https://novel.juhe.im/author-books?author=" + re.data.author
					var than = salf
					salf.axios.get(y)
				.then(function(re) {
					than.zz = re.data.books
				});					
				});
				

			//推荐
			let c = "/api/recommend/" + id
			this.axios.get(c)
				.then(function(re) {
					
					salf.tj = re.data.books.slice(salf.min,salf.max)
				});

			//评论
			let f = "/api/book/reviews?book=" + id
			this.axios.get(f)
				.then(function(re) {
					salf.pl = re.data.reviews
				});
		    
		    //章节
			var self = this
			let d = "/api/book-sources?view=summary&book="+id
        	  this.axios.get(d)
				.then(function(re) {	
				let e = "/api/book-chapters/"+re.data[0]._id;
				self.axios.get(e)
				.then(function(re) {
					var than = self
					than.zj = re.data.chapters
					than.len = re.data.chapters.length
				});
				});
				
				
		},
		components: {
			[Icon.name]: Icon,
			[Rate.name]: Rate
		}
		
	}
</script>

<style lang="less" scoped>
.auto-img1{
	width:90%;
	height:4rem;
	padding:0.1rem 0;
}
	.img-auto {
		width: 100%;
		display: block;
	}
	
	p {
		padding: 0;
		margin: 0;
	}
	
	.img-auto1 {
		width: 100%;
		height: 3rem;
		display: block;
	}
	
	.man {
		background-color: #fff;
		width: 100%;
	}
	
	.top {
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #53DBFB;
		overflow: hidden;
		z-index: 999;
	}
	
	.topl {
		float: left;
		padding: 0.3rem 0;
		width: 10%;
		text-align: center;
	}
	
	.topr {
		float: left;
		padding: 0.3rem 0;
		color: #fff;
		font-size: 0.5rem;
		font-weight: bold;
		width: 90%;
	}
	
	.topz {
		margin-left: 33%;
	}
	
	.mo {
		width: 85%;
		margin: 0 auto;
		overflow: hidden;
		background-color: #fff;
		padding-top: 0.3rem;
	}
	
	.mol {
		float: left;
		width: 25%;
	}
	
	.mor {
		float: right;
		width: 75%;
	}
	
	.morz1 {
		font-size: 0.6rem;
		font-weight: bold;
		margin-left: 0.3rem;
	}
	
	.morz2 {
		font-size: 0.4rem;
		color: #FCAFAD;
		margin-top: 0.2rem;
		margin-left: 0.3rem;
	}
	
	.morz3 {
		font-size: 0.4rem;
		color: #aaa;
		margin-top: 0.3rem;
		margin-left: 0.3rem;
	}
	
	.mo1 {
		width: 85%;
		margin: 0.5rem auto 0;
		overflow: hidden;
	}
	
	.mo1l {
		float: left;
		padding: 0.2rem 0.7rem;
		color: #B93321;
		font-size: 0.55rem;
		border: 1Px solid #B93321;
	}
	
	.mo1r {
		float: right;
		padding: 0.2rem 0.7rem;
		background-color: #B93321;
		font-size: 0.55rem;
	}
	
	.mo2 {
		position: relative;
		width: 85%;
		margin: 0.5rem auto 0;
		font-size: 0.45rem;
	}
	
	.i {
		position: absolute;
		bottom: 0;
		right: -0.3rem;
	}
	
	.mo2zi {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.ml {
		overflow: hidden;
		width: 85%;
		margin: 0.5rem auto 0;
		padding: 0.2rem 0;
		border-top: 0.01rem solid #DEDEDE;
		border-bottom: 0.01rem solid #DEDEDE;
		font-size: 0.6rem;
	}
	
	.mll {
		float: left;
	}
	
	.mlr {
		float: right;
	}
	
	nav {
		display: -webkit-box;
		overflow-x: auto;
		margin: 0.6rem 0;
		margin:0.2rem 0 0;
	}
	
	.tj {
		width: 85%;
		margin: 0.4rem auto 0;
	}
	
	.tjzi {
		font-size: 0.5rem;
		font-weight: bold;
	}
	
	.im {
		width: 3rem;
		height: 4rem;
	}
	
	.im1 {
		width: 2.2rem;
		height: 3rem;
	}
	
	.imzi {
		width: 2.5rem;
	}
	
	.imzi p {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		text-align: center;
	}
	
	.pl {
		width: 85%;
		margin: 0.3rem auto 0;
		padding-top: 0.3rem;
		border-top: 1Px solid #ccc;
	}
	
	.rpl {
		overflow: hidden;
		padding-bottom: 0.3rem;
		border-bottom: 1Px solid #ccc;
	}
	
	.rpll {
		float: left;
		font-size: 0.5rem;
	}
	
	.rplr {
		float: right;
		font-size: 0.4rem;
		margin-top: 0.1rem;
	}
	
	.pln {
		overflow: hidden;
		border-bottom: 1Px solid #ccc;
	}
	
	.plnl {
		float: left;
		width: 20%;
		height: 4rem;
	}
	
	.plnlt {
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
		overflow: hidden;
		margin-top: 0.2rem;
	}
	
	.plnr {
		float: right;
		width: 80%;
		height: 4rem;
	}
	
	.plnrn {
		margin-top: 0.2rem;
	}
	
	.plnrt {
		margin-top: 0.2rem;
	}
	
	.plnrz {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.plnrs {
		margin-top: 0.2rem;
	}
	
	.plnrx {
		margin-top: 0.2rem;
	}
	
	.fool {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 1.4rem;
		width: 100%;
		background-color: #F2F2F2;
		text-align: center;
		overflow: hidden;
		border-top: 1Px solid #aaa;
	}
	
	.fooll {
		float: left;
		width: 25%;
	}
	
	.foolr {
		float: left;
		width: 60%;
	}
	
	.aa {
		margin-top: 0.2rem;
	}
	
	.foolipt {
		width: 100%;
		height: 1rem;
		margin-top: 0.1rem;
	}
	
	.foold {
		width: 100%;
		margin: 0 auto;
		height: 3rem;
		background-color: #f2f2f2;
		margin-bottom: 1.4rem;
		text-align: center;
	}
	
	.fzi1 {
		padding-top: 0.3rem;
	}
	
	.fzi2 {
		width: 90%;
		margin: 0 auto;
	}
	
	.tjn1{
	width:100%;
	background-color:#fff;
	overflow: hidden;
	padding-top:0.2rem;
}
.tjn1l{
	float:left;
	width:35%;
	text-align: center;
}
.tjn1li{
	width:90%;
}
.tjn1r{
	float: right;
    width:65%;
}
.tjz1{
	padding-top:0.2rem;
	font-size: 0.5333rem;
	font-weight: bold;
}
.tjz2{
	padding-top:0.2rem;
}
.tjz3{
	color:#aaa;
	padding-top:0.3rem;
	overflow:hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
.tjz4{
	color:#aaa;
	width:100%;
	height:1rem;
	margin-top:0.5rem;
	overflow: hidden;
}
.tjz4l{
	width:60%;
	float: left;
	
}
.t4{
	color:#FA675D;
}
.tjz4r{
	width:35%;
	color:#ED4A4B;
	border:1Px solid #FA675D;
	box-sizing: border-box;
	text-align:center;
	margin-right:0.1rem;
	float: right;
}
</style>