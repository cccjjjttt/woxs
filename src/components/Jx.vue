<template>
   <div class="man">
   	<div class="navbox" >
    <div @click="goSta1()" class="nav">
     <div class="l">
        <van-icon size="0.6rem" name="search" />
     </div>
     <div class="r">
         <input placeholder="请输入书名/作者名"/>
    </div>
    </div>
    </div>
    
    <div>
        <van-tabs color="#9BFCBC" :line-height="1" :swipeable="true"   :animated="true" title-active-color="#58F78E" v-model="active1">
        <van-tab  title="精选">
            <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item >
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155660599369520">
            </van-swipe-item>
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155660588781147">
            </van-swipe-item>
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155660592562552">
            </van-swipe-item>
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155660596069151">
            </van-swipe-item>
            </van-swipe>
            
            <div class="fl">
            	<div @click="dj1()" class="lw">
            		<i class="a i"></i><span>分类</span>
            	</div>
            	<div @click="dj2()" class="lw">
            		<i class="b i"></i><span>男生榜单</span>
            	</div>
            	<div @click="dj3()" class="lw">
            		<i class="c i"></i><span>免费</span>
            	</div>
            	<div @click="dj4()" class="lw">
            		<i class="d i"></i><span>女生榜单</span>
            	</div>
            	<div @click="dj5()" class="lw">
            		<i class="f i"></i><span>排行</span>
            	</div>
            </div>
            
            <div class="tj">
            	<div class="tl"><i class="tli"></i><span id="z">奇幻</span></div>
            	<div @click="goSta2(0,0)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn" >
            	<div class="tjnn" @click="goSta(0,0,item)" v-for="(item,index) in da[0].slice(0,6)">
            		<div>
            			<img class="auto-img1" :src="url+item.cover"/>
            		</div>
            		<div class="tjnz">{{item.title}}</div>
            	</div>
            </div>
            
             <div class="tj">
            	<div class="tl"><i class="tli"></i><span>畅销精品</span></div>
            	<div @click="goSta2(0,1)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            <div class="tjn1" @click="goSta(0,0,item)" v-for="(item,index) in da[1].slice(0,3)">
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
            
              <div class="tj">
            	<div class="tl"><i class="tli"></i><span>经典</span></div>
            	<div @click="goSta2(0,2)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn">
            	<div class="tjnn" @click="goSta(0,0,item)" v-for="(item,index) in da[2].slice(0,6)">
            		<div>
            			<img class="auto-img1" :src="url+item.cover"/>
            		</div>
            		<div class="tjnz">{{item.title}}</div>
            	</div>
            </div>
            
             <div class="tj">
            	<div class="tl"><i class="tli"></i><span>爽文</span></div>
            	<div @click="goSta2(0,3)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn1" @click="goSta(0,0,item)" v-for="(item,index) in da[3].slice(0,4)" >
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
            
            <div class="fool"><span>我已经到底了</span></div>
        </van-tab>
        <van-tab  title="男生">

             <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155565265597622">
            </van-swipe-item>
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155565262632677">
            </van-swipe-item>
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155660596069151">
            </van-swipe-item>
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155660592562552">
            </van-swipe-item>
            </van-swipe>
            
              <div class="fl">
            	<div @click="dj1()" class="lw">
            		<i class="a i"></i><span>分类</span>
            	</div>
            	<div @click="dj2()" class="lw">
            		<i class="b i"></i><span>男生榜单</span>
            	</div>
            	<div @click="dj3()" class="lw">
            		<i class="c i"></i><span>免费</span>
            	</div>
            	<div @click="dj4()" class="lw">
            		<i class="d i"></i><span>女生榜单</span>
            	</div>
            	<div @click="dj5()" class="lw">
            		<i class="f i"></i><span>排行</span>
            	</div>
            </div>
            
             <div class="tj">
            	<div class="tl"><i class="tli"></i><span>推荐</span></div>
            	<div @click="goSta2(1,4)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn">
            	<div class="tjnn" @click="goSta(0,1,item)" v-for="(item,index) in da[4].slice(0,6)">
            		<div>
            			<img class="auto-img1" :src="url+item.cover"/>
            		</div>
            		<div class="tjnz">{{item.title}}</div>
            	</div>
            </div>
            
             <div class="tj">
            	<div class="tl"><i class="tli"></i><span>畅销精品</span></div>
            	<div @click="goSta2(1,5)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            <div class="tjn1" @click="goSta(0,1,item)" v-for="(item,index) in da[5].slice(0,3)" >
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
            
              <div class="tj">
            	<div class="tl"><i class="tli"></i><span>经典</span></div>
            	<div @click="goSta2(1,6)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn">
            	<div class="tjnn" @click="goSta(0,1,item)" v-for="(item,index) in da[6].slice(0,6)">
            		<div>
            			<img class="auto-img1" :src="url+item.cover"/>
            		</div>
            		<div class="tjnz">{{item.title}}</div>
            	</div>
            </div>
            
             <div class="tj">
            	<div class="tl"><i class="tli"></i><span>爽文</span></div>
            	<div @click="goSta2(1,7)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn1" @click="goSta(0,1,item)" v-for="(item,index) in da[7].slice(0,4)" >
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
            
            <div class="fool"><span>我已经到底了</span></div>

        </van-tab>
        <van-tab  title="女生">

             <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155565262632677">
            </van-swipe-item>
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155660592562552">
            </van-swipe-item>
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155660599369520">
            </van-swipe-item>
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155660588781147">
            </van-swipe-item>
            </van-swipe>
            
             <div class="fl">
            	<div @click="dj1()" class="lw">
            		<i class="a i"></i><span>分类</span>
            	</div>
            	<div @click="dj2()" class="lw">
            		<i class="b i"></i><span>男生榜单</span>
            	</div>
            	<div @click="dj3()" class="lw">
            		<i class="c i"></i><span>免费</span>
            	</div>
            	<div @click="dj4()" class="lw">
            		<i class="d i"></i><span>女生榜单</span>
            	</div>
            	<div @click="dj5()" class="lw">
            		<i class="f i"></i><span>排行</span>
            	</div>
            </div>
            
             <div class="tj">
            	<div class="tl"><i class="tli"></i><span>推荐</span></div>
            	<div @click="goSta2(2,8)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn">
            	<div class="tjnn" @click="goSta(0,2,item)" v-for="(item,index) in da[8].slice(0,6)">
            		<div>
            			<img class="auto-img1" :src="url+item.cover"/>
            		</div>
            		<div class="tjnz">{{item.title}}</div>
            	</div>
            </div>
            
             <div class="tj">
            	<div class="tl"><i class="tli"></i><span>畅销精品</span></div>
            	<div @click="goSta2(2,9)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            <div class="tjn1" @click="goSta(0,2,item)" v-for="(item,index) in da[9].slice(0,3)">
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
            
              <div class="tj">
            	<div class="tl"><i class="tli"></i><span>经典</span></div>
            	<div @click="goSta2(2,10)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn">
            	<div class="tjnn" @click="goSta(0,2,item)" v-for="(item,index) in da[10].slice(0,6)">
            		<div>
            			<img class="auto-img1" :src="url+item.cover"/>
            		</div>
            		<div class="tjnz">{{item.title}}</div>
            	</div>
            </div>
            
             <div class="tj">
            	<div class="tl"><i class="tli"></i><span>爽文</span></div>
            	<div @click="goSta2(2,11)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn1" @click="goSta(0,2,item)" v-for="(item,index) in da[11].slice(0,4)" >
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
            
            <div class="fool"><span>我已经到底了</span></div>

        </van-tab>
        <van-tab  title="出版">

             <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155565265597622">
            </van-swipe-item>
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155660596069151">
            </van-swipe-item>
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155565262632677">
            </van-swipe-item>
            <van-swipe-item>
            	<img class="auto-img" src="http://statics.zhuishushenqi.com/recommendPage/155660592562552">
            </van-swipe-item>
            </van-swipe>
            
             <div class="fl">
            	<div @click="dj1()" class="lw">
            		<i class="a i"></i><span>分类</span>
            	</div>
            	<div @click="dj2()" class="lw">
            		<i class="b i"></i><span>男生榜单</span>
            	</div>
            	<div @click="dj3()" class="lw">
            		<i class="c i"></i><span>免费</span>
            	</div>
            	<div @click="dj4()" class="lw">
            		<i class="d i"></i><span>女生榜单</span>
            	</div>
            	<div @click="dj5()" class="lw">
            		<i class="f i"></i><span>排行</span>
            	</div>
            </div>
            
             <div class="tj">
            	<div class="tl"><i class="tli"></i><span>推荐</span></div>
            	<div @click="goSta2(3,12)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn">
            	<div class="tjnn" @click="goSta(0,3,item)" v-for="(item,index) in da[12].slice(0,6)">
            		<div>
            			<img class="auto-img1" :src="url+item.cover"/>
            		</div>
            		<div class="tjnz">{{item.title}}</div>
            	</div>
            </div>
            
             <div class="tj">
            	<div class="tl"><i class="tli"></i><span>畅销精品</span></div>
            	<div @click="goSta2(3,13)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            <div class="tjn1" @click="goSta(0,3,item)" v-for="(item,index) in da[13].slice(0,3)" >
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
            
              <div class="tj">
            	<div class="tl"><i class="tli"></i><span>经典</span></div>
            	<div @click="goSta2(3,14)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn">
            	<div class="tjnn" @click="goSta(0,3,item)" v-for="(item,index) in da[14].slice(0,6)">
            		<div>
            			<img class="auto-img1" :src="url+item.cover"/>
            		</div>
            		<div class="tjnz">{{item.title}}</div>
            	</div>
            </div>
            
             <div class="tj">
            	<div class="tl"><i class="tli"></i><span>爽文</span></div>
            	<div @click="goSta2(3,15)" class="tr"><span class="tz">更多 ></span></div>
            </div>
            
            <div class="tjn1" @click="goSta(0,3,item)" v-for="(item,index) in da[15].slice(0,4)" >
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
            
            <div class="fool"><span>我已经到底了</span></div>

        </van-tab>
        </van-tabs>

    </div>
    </div>
</template>

<script>

    import {Tab,Tabs,Icon,Swipe,SwipeItem } from 'vant'

    export default{
        name:'Jx',
        data(){
            return{
              active1:0,
              active:'',
              url: 'http://statics.zhuishushenqi.com',
              da:[]
              
            }
        },
     mounted(){
     	var v = document.querySelector(".van-tabs__wrap")
     	v.style.position="sticky"
     	v.style.top = 1.4 + 'rem'
     	var v1 = document.querySelector('.van-tabs')
     	v1.style.paddingTop = 0
     },
        
        created(){
        	this.active = this.$route.params.active
        	if(this.$route.params.active1){
        		this.active1 = this.$route.params.active1
        	}
        	
        	console.log('weew',this.active1)
        	console.log('aaa',this.active)
        	//奇幻
        	var arr = ['奇幻','游戏','科幻','历史','游戏','武侠','仙侠','军事',"都市","职场",'同人','轻小说','灵异','竞技','历史','轻小说']
        	for(let i = 0 ; i < arr.length;i++){
        		var self = this
        		let b = "https://novel.juhe.im/category-info?gender=male&type=hot&major="+arr[i]+"&minor=&start=0&limit=20"
        		this.axios.get(b)
				.then(function(re) {
   				localStorage.setItem('f'+i,JSON.stringify(re.data.books));
// 				self.da.push(re.data.books)
				});
				
				var data = JSON.parse(localStorage.getItem('f'+i));
				this.da.push(data)
	
        	}

        },
        methods:{
        	goSta(i,path,item){
        		
        		this.$router.push({name:'Xq',params:{_id:item._id,active:this.active,active1:path,fhz:i}})
        		
        	},
        	goSta1(path){
        		
        		
        		this.$router.push({name:'Ss',params:{active:this.active,active1:this.active1,ssz:0}})
        		
        	},
        	goSta2(path,i){
        		
        		
        		this.$router.push({name:'Gdd',params:{n:this.da[i],active:this.active,active1:path,gdd:0}})
        		
        	},
        	dj1(){
        	
        		this.$router.push({name:'Sk',params:{atv:0,active:3}})
        	},
        	dj2(){
        		this.$router.push({name:'Sk',params:{atv:1,active:3}})
        	},
        	dj3(){
        		this.$router.push({name:'Mf',params:{active:3}})
        	},
        	dj4(){
        		this.$router.push({name:'Sk',params:{atv:2,active:3}})
        	},
        	dj5(){
        		this.$router.push({name:'Sk',params:{atv:3,active:3}})
        	}
        },

        components:{
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
            [Icon.name]:Icon,
            [SwipeItem.name]:SwipeItem,
            [Swipe.name]:Swipe
        }
    }

</script>

<style lang="less" scoped>
.man{
	background-color:#ccc;
	margin-bottom: 1.333rem;
}


.auto-img{
	width:100%;
	display: block;
}
  .navbox{
    	width:100%;
    	background-color:#fff;
    	padding:0.3rem 0;
    	position: sticky;
    	top:0;
    	left:0;
    	z-index: 999;
    }
 .nav{
        width:80%;
        height:0.8rem;
        margin-left:10%;
        background-color:#F4F4F4;
        border-radius:2rem;
        overflow: hidden;
    }
  
    .r{
        float:left;
        line-height: 0.8rem;
        margin-left:0.2rem;
        input{
            width:6rem;
            border:none;
            outline: none;
            background-color:#f4f4f4;
        }
    }
    .l{
        float:left;
        margin-top:0.1rem;
        margin-left:0.3rem;
    }
    .fl{
    	overflow: hidden;
    	padding-top:0.5rem;
    	background-color:#fff;
    	padding-bottom:0.2rem;
    }
    .lw{
    	width:20%;
    	float: left;
    	text-align: center;
    }
    .i{
	display: block;
	content: '';
	width: 1rem;
	height:1rem;
	margin:0 auto;
	background: url(../../image/duo.png);
    margin-bottom:0.14rem;
}
.a{
	background-position:0.99rem -1rem; 
	background-size:3.2rem 3.2rem; 
}
.b{
	background-position:2.1rem -1.2rem; 
	background-size:3.2rem 3.2rem; 
}
.c{
	background-position:3.2rem -1.1rem; 
	background-size:3.2rem 3.2rem; 
}
.d{
	background-position:3.3rem -2.2rem; 
	background-size:3.2rem 3.2rem; 
}
.f{
	background-size:3.2rem 3.2rem; 
}
.tj{
	width:100%;
	margin-top:0.3rem;
	background-color:#fff;
	overflow: hidden;
	height:0.6rem;
	padding-bottom: 0.1rem;
	border-bottom:0.028rem solid #ddd;
	font-size:0.43rem;
}
.tl{
	float:left;
	margin-left:0.2rem;
	line-height: 0.6rem;
}
.tr{
	float:right;
}
.tli{
	display: inline-block;
	width:0.1rem;
	height:0.45rem;
	background-color:#03FCAF;
	border-radius: 20%;
	margin-right:0.1rem;
	margin-top:0.07rem;
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