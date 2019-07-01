<template>
	<div class="man">

		<div class="navbox">
			<div @click="goSta1()" class="nav">
				<div class="l">
					<van-icon size="0.6rem" name="search" />
				</div>
				<div class="r">
					<input placeholder="请输入书名/作者名" />
				</div>
			</div>
		</div>

		<div class="tj">
			<div class="tl">
				<i class="tli"></i>
				<span>免单</span>
				<span class="h h1">{{c1}}</span>:
				<span class="h">{{c2}}</span>:
				<span class="h">{{c3}}</span>
			</div>
			<div @click="goSta2({name:'Gdd',params:{n:da[0],active:active,gdd:1}})" class="tr"><span class="tz">更多 ></span></div>
		</div>
		
		  <div class="tjn">
            	<div @click="dj(item)" class="tjnn" v-for="(item,index) in da[0].slice(0,6)">
            		<div>
            			<img class="auto-img1" :src="url+item.cover"/>
            		</div>
            		<div class="tjnz">{{item.title}}</div>
            	</div>
            </div>
            
            <div class="tj1">
			<div class="tl">
				<i class="tli"></i>
				<span>请客</span>
				<span class="h h1">{{c1}}</span>:
				<span class="h">{{c2}}</span>:
				<span class="h">{{c3}}</span>
			</div>
			<div @click="goSta2({name:'Gdd',params:{n:da[1],active:active,gdd:1}})" class="tr"><span class="tz">更多 ></span></div>
		</div>
		
		<div class="tjn">
            	<div  @click="dj(item)" class="tjnn" v-for="(item,index) in da[1].slice(0,6)">
            		<div>
            			<img class="auto-img1" :src="url+item.cover"/>
            		</div>
            		<div class="tjnz">{{item.title}}</div>
            	</div>
            </div>
            
            <div class="tj1">
			<div class="tl">
				<i class="tli"></i>
				<span>限免</span>
				<span class="h h1">{{c1}}</span>:
				<span class="h">{{c2}}</span>:
				<span class="h">{{c3}}</span>
			</div>
			<div @click="goSta2({name:'Gdd',params:{n:da[2],active:active,gdd:1}})" class="tr"><span class="tz">更多 ></span></div>
		</div>
		
		 <div  @click="dj(item)" class="tjn1" v-for="(item,index) in da[2].slice(0,3)">
            	<div class="tjn1l">
            		<div class="tjn1li">
            			<img class="auto-img1" :src="url+item.cover"/>
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
            
             <div class="tj1">
			<div class="tl">
				<i class="tli"></i>
				<span>畅读</span>
				<span class="h h1">{{c1}}</span>:
				<span class="h">{{c2}}</span>:
				<span class="h">{{c3}}</span>
			</div>
			<div class="tr">
				<span @click="goSta2({name:'Gdd',params:{n:da[3],active:active,gdd:1}})" class="tz">更多 ></span>
				
			</div>
		</div>
		
		 <div  @click="dj(item)" class="tjn1" v-for="(item,index) in da[3].slice(0,3)">
            	<div class="tjn1l">
            		<div class="tjn1li">
            			<img class="auto-img1" :src="url+item.cover"/>
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
            
            <div class="tj1">
            	<div class="tl"><i class="tli"></i>
            		<span>经典</span>
            		<span class="h h1">{{c1}}</span>:
				<span class="h">{{c2}}</span>:
				<span class="h">{{c3}}</span>
            	</div>
            	<div @click="goSta2({name:'Gdd',params:{n:da[4],active:active,gdd:1}})" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn">
            	<div  @click="dj(item)" class="tjnn" v-for="(item,index) in da[4].slice(0,6)">
            		<div>
            			<img class="auto-img1" :src="url+item.cover"/>
            		</div>
            		<div class="tjnz">{{item.title}}</div>
            	</div>
            </div>
            
             <div class="fool"><span>我已经到底了</span></div>


	</div>
</template>

<script>
	import {Icon} from 'vant'
	
	export default {
		name: 'Mf',
		data(){
			return{
				active:2,
				da:[],
				url: 'http://statics.zhuishushenqi.com',
				c1:'',
				c2:'',
				c3:'',
				xnr:1

			}
		},
		mounted() {
		
			var d= [];
			var h= [];
			var m= [];
			var s= [];
			var self = this;
			var timer = setInterval(function () {
				//获取当前时间
				var currentTime = new Date().getTime();
				//获取结束时间
				var endTime = new Date('2019-12-06 22:10:18').getTime();
				//时间差
				var time = endTime - currentTime; //毫秒差
				if (time < 0) {
					//清除定时器
					clearInterval(timer);
					timer = null;
					return;
				}
				//天
				var day = Math.floor(time / 1000 / 60 / 60 / 24);
				day = day >= 10 ? day : '0' + day;
				//时
				var hour = Math.floor(time / 1000 / 60 / 60 % 24);
				hour = hour >= 10 ? hour : '0' + hour;
				//分
				var minute = Math.floor(time / 1000 / 60 % 60);
				minute = minute >= 10 ? minute : '0' + minute;
				//秒
				var second = Math.floor(time / 1000 % 60);
				second = second >= 10 ? second : '0' + second;
				var result = day + '天 ' + hour + '时 ' + minute + '分 ' + second + '秒';
				d.push(day);
                var b1 = d.length;
                var c1 = d.splice(b1-1,1);
                h.push(hour);
                var b2 = h.length;
                var c2 = h.splice(b2-1,1);
				m.push(minute);
                var b3 = m.length;
                var c3 = m.splice(b3-1,1);
                s.push(second);
                var b4 = s.length;
                var c4 = s.splice(b4-1,1);
                self.c1 = c2[0]
                self.c2 = c3[0]
                self.c3 = c4[0]

				
			}, 1000)

		},
		created() {
			this.active = this.$route.params.active
			console.log('ss',this.active)

		var arr = ['奇幻','武侠','游戏','历史',"同人"]
        	for(let i = 0 ; i < arr.length;i++){
        		let b = "https://novel.juhe.im/category-info?gender=male&type=hot&major="+arr[i]+"&minor=&start=0&limit=20"
        		this.axios.get(b)
				.then(function(re) {
   				localStorage.setItem('f'+i,JSON.stringify(re.data.books));
   				
				});
				
				var data = JSON.parse(localStorage.getItem('f'+i));
				this.da.push(data)
	
        	}
        
        	

		},
		components:{
			[Icon.name]:Icon
		},
		methods:{
			dj(item){
				this.$router.push({name:'Nr',params:{id:item._id,na:item.title,active:this.active,xnr:1}})
			},
			goSta2(path){
        		this.$router.push(path)	
        },
        goSta1(){
        	this.$router.push({name:'Ss',params:{active:this.active,ssz:1}})	
        }
		}
	}
</script>

<style lang="less" scoped>
	.man {
		background-color: #ccc;
		margin-bottom: 1.333rem;
	}
	
	.navbox {
		width: 100%;
		background-color: #fff;
		padding: 0.3rem 0;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 999;
		border-bottom: 1Px solid #ddd;
	}
	
	.nav {
		width: 80%;
		height: 0.8rem;
		margin-left: 10%;
		background-color: #F4F4F4;
		border-radius: 2rem;
		overflow: hidden;
	}
	
	.r {
		float: left;
		line-height: 0.8rem;
		margin-left: 0.2rem;
		input {
			width: 6rem;
			border: none;
			outline: none;
			background-color: #f4f4f4;
		}
	}
	
	.l {
		float: left;
		margin-top: 0.1rem;
		margin-left: 0.3rem;
	}
	
	.tj {
		width: 100%;
		padding-top: 0.2rem;
		background-color: #fff;
		overflow: hidden;
		height: 0.6rem;
		padding-bottom: 0.1rem;
		border-bottom: 0.01rem solid #ddd;
		font-size: 0.43rem;
	}
	.tj1 {
		width: 100%;
		padding-top: 0.2rem;
		margin-top:0.3rem;
		background-color: #fff;
		overflow: hidden;
		height: 0.6rem;
		padding-bottom: 0.1rem;
		border-bottom: 0.01rem solid #ddd;
		font-size: 0.43rem;
	}
	
	.tl {
		float: left;
		margin-left: 0.2rem;
		line-height: 0.6rem;
	}
	
	.tr {
		float: right;
	}
	
	.tli {
		display: inline-block;
		width: 0.1rem;
		height: 0.45rem;
		background-color: #03FCAF;
		border-radius: 20%;
		margin-right: 0.1rem;
		margin-top: 0.07rem;
	}
	
	.tz {
		font-size: 0.32rem;
		color: #aaa;
	}
	.h{
		font-size:0.32rem;
		color:#88CF2B;
		margin:0 0.1rem;
	}
	.h1{
		margin-left:0.3rem;
	}
.tjnn{
	width:33%;
	float:left;
	height:5rem;
	text-align: center;
	padding-top:0.2rem;
}
.tjn{
	width:100%;
	background-color:#fff;
	overflow: hidden;
}
.tjnz{
	text-align: center;
	display: inline-block;
	width:80%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.auto-img1{
	width:90%;
	height:4rem;
	padding:0.1rem 0;
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
	width:70%;
	float: left;
	
}
.t4{
	color:#FA675D;
}
.tjz4r{
	width:27%;
	color:#ED4A4B;
	border:1Px solid #FA675D;
	box-sizing: border-box;
	text-align:center;
	margin-right:0.1rem;
	float: right;
}
.tz{
	font-size: 0.32rem;
	color:#aaa;
}
.fool{
	padding:0.5rem;
	text-align: center;
	
}
</style>