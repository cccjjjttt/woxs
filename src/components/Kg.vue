<template>
	<div class="man">
	  <van-row class="top">
	  	<van-col  span="2" offset="1" >
	  		<van-icon @click="fh()" class="i" name="arrow-left" color="white" size="0.6rem"></van-icon>
	  	</van-col>
	  <van-col  span="18">
	  	<div class="topzi">足迹</div>
	  </van-col>
	  <van-col class="bj" span="2">
	  	<div @click="bj()">{{text}}</div>
	  </van-col>
	  </van-row>
	  
	  
	  <van-row class="zj"   v-show="dl" v-for="(item,index) in data" :key="index">
	  	<van-col :span="l" v-if="tr" >
	  		<van-icon @click.native="scc(item,index)" class="ii" name="delete" size="0.8rem" color="#e4393c"></van-icon>
	  	</van-col>
	  	<van-col :span="r" :offset="o" >
	  		<div class="zjzi">{{item.title}}</div>
	  		
	  	</van-col>
	  </van-row>
	  
	  <div class="fool" v-if="tr">
	  <div @click="qk()" >清空浏览记录</div>
	  </div>
	  
	</div>
</template>

<script>
	import {Icon,Dialog} from 'vant'
	
	export default{
		name:'Kg',
		data(){
			return{
				active:4,
				text:'编辑',
				data:[],
				l:0,
				r:23,
				o:1,
				tr:false,
				bb:true,
			    dl:true
			
			}
		},
		created(){
			this.active = this.$route.params.active
			
			 for(var key in window.localStorage){		    	
   					var r =  new RegExp('kg','ig')
    		    	if(r.test(key)){
    		    		
                     var x = JSON.parse(localStorage.getItem(key));   
                     this.data.unshift(x)
					 console.log(key)
                     
    		    	}
    		  }	
    		   
    		   for(var i =0;i<this.data.length;i++){
	       		for(var j = i+1;j<this.data.length;j++){
	      			if(this.data[i].title===this.data[j].title){
	      				localStorage.removeItem('kg'+this.data[j].tiem)
	      				this.data.splice(j,1);
	      				
	      				j--;
	      				}
	      			}
	      		}
    		   
    		   
			
			
		},
		components:{
			[Icon.name]:Icon,
			[Dialog.name]:Dialog
		},
		methods:{
			scc(item,index){
				this.data.splice(index,1)
				localStorage.removeItem('kg'+item.tiem)
			},
			
			fh(){
				this.$router.push({name:'Wd',params:{active:this.active}})
			},
			qk(){
				 for(var key in window.localStorage){		    	
   					var r =  new RegExp('kg','ig')
    		    	if(r.test(key)){
    		    		
                    localStorage.removeItem(key)
                     this.data=[]
    		    	}
    		  }	
				
			},
			
			bj(){
				if(this.bb){
				this.text='完成';
				this.tr = true;
				this.l=2;
				this.r=21;
				this.o=0;
				this.bb = !this.bb
				}else if(!this.bb){
					this.text="编辑";
					this.tr = false;
					this.l=0;
				    this.r=23;
				    this.o=1;
					this.bb = !this.bb
				}	
			}
		
			

   
    		}
				
		
	}
</script>

<style lang="less" scoped="">
.man{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background-color: #CCCCCC;
}
	.top{
	width:100%;
	padding:0.2rem 0;
	text-align: center;
	background-color: #53DBFB;
	margin-bottom: 0.3rem;
}
.topzi{
	font-size: 0.5333rem;
}
.bj{
	margin-top:0.5rem;
}
.i{
	margin-top:0.2rem;
}
.ii{
	margin-top:0.2rem;
}
.zj{
	background-color: #fff;
	padding:0.3rem 0;
    border-bottom: 1Px solid #CCCCCC;
}
.zjzi{
	font-size: 0.45rem;
	overflow:hidden;
	text-overflow: ellipsis;
	white-space:nowrap;
	padding:0.3rem 0;
}

.fool{
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #fff;
	padding:0.2rem 0;
	width:100%;
	text-align: center;
	color:#00BFFF;
}
</style>