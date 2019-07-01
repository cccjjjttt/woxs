<template>

   <div class="man">

    <div class="nav">
        <div class="l">书架</div>
        <div class="r">
           <span @click="dj2()">{{tex}}</span>
        </div>
    </div>
    
    <div class="tubox">
    	<div v-for="(item,index) in da"  class="tul">
    		<div v-show="t"><van-icon @click="dj3(item,index)" color="red" name="delete" size="0.6rem"/></div>
    		<div @click="dj(item)" class="im"><img class="img-auto" :src="url+item.cover" /></div>
    		<div @click="dj(item)" class="zi"><span>{{item.title}}</span></div>
    	</div>
    	
    </div>

    </div>
</template>

<script>

    import {Icon } from 'vant'

    export default {
        name:'Shujia',
        data(){
            return{
			    da:[],
				url: 'http://statics.zhuishushenqi.com',
				t:false,
				tex:'编辑',
                xnr:0
            }
        },
        methods:{
        	dj(item){
        		this.$router.push({name:'Nr',params:{id:item.id,na:item.title,xnr:0,active:this.active}})
        		
        	},
        	dj2(){
        		
        		if(!this.t){
        			this.t = !this.t
        			this.tex='完成'
        		}else{
        			this.t = !this.t
        			this.tex='编辑'
        		}
        	},
        	dj3(item,index){

        		this.da.splice(index,1)
        		localStorage.removeItem('sj'+item.id)
        	}
        	
        },
        created(){
			
               this.active = this.$route.params.active
			 for(var key in window.localStorage){		    	
   					var r =  new RegExp('sj','ig')
    		    	if(r.test(key)){
    		    		
                     var x = JSON.parse(localStorage.getItem(key));  
                     this.da.push(x)
                     
    		    	}
    		   }	
    		   

    		
        },
        components:{
            [Icon.name]:Icon
        }
    }

</script>

<style lang="less" scoped>
.img-auto{
	width: 100%;
	height:4rem;
	display: block;
}
.nav{
    width:lace(~'100%-1rem');
    background-color:#F4F4F4;
    font-size:0.48rem;
    padding-left:0.5rem;
    overflow: hidden;
}
.l{
    float:left;
    line-height: 1rem;
    font-weight: bold;
}
.r{
    float:right;
    font-size: 0.4rem;
    margin-top:0.3rem;
    margin-right:0.3rem;
}
.tubox{
	width:95%;
	margin:0.3rem auto 0;
}
.tul{
	float:left;
	width:33.33%;
	text-align: center;
	margin-bottom:0.4rem;
}
.im{
	width: 90%;
	margin:0 auto;
}
.zi{
	margin-top:0.2rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
