<template>
    <div class="man">
    
    <div class="top">
       <div class="topi">
       <van-icon name="user-circle-o" size="2.5rem" color="#fff"></van-icon>
       </div>
     <div class="topz">
     	<span>未登录</span>
     </div>
    </div>
    
    <div class="n">
    	<div class="ni"><van-icon name="like" color="red" size="1rem"></van-icon></div>
    	<div class="nz"><span >我喜欢的书籍</span></div>
    	<div class="nj"><van-icon name="arrow" size="0.6rem" color="#ccc"></van-icon></div>
    </div>
    
     <div @click="dj()" class="n2">
    	<div class="ni3"><van-icon name="browsing-history" color="#4DAFF5" size=".8rem"></van-icon></div>
    	<div class="nz2"><span >我的阅历</span></div>
    	<div class="nj2"><van-icon name="arrow" size="0.6rem" color="#ccc"></van-icon></div>
    </div>
     <div class="n2">
    	<div class="ni3"><van-icon name="setting-o" color="#4DAFF5" size=".8rem"></van-icon></div>
    	<div class="nz2"><span >修改密码</span></div>
    	<div class="nj2"><van-icon name="arrow" size="0.6rem" color="#ccc"></van-icon></div>
    </div>
     <div class="n">
    	<div class="ni3"><van-icon name="friends" color="#4DAFF5" size=".8rem"></van-icon></div>
    	<div class="nz"><span >切换账号</span></div>
    	<div class="nj"><van-icon name="arrow" size="0.6rem" color="#ccc"></van-icon></div>
    </div>
     <div class="n">
    	<div class="ni3"><van-icon name="clear" color="#ccc" size=".8rem"></van-icon></div>
    	<div class="nz"><span >退出</span></div>
    	<div class="nj"><van-icon name="arrow" size="0.6rem" color="#ccc"></van-icon></div>
    </div>
    

    
    </div>
</template>

<script>

	import { Icon } from 'vant'

    export default{
        name:'Wd',
        data(){
        	return{
        		active:4
        	}
        },
        methods:{
        	dj(){
        		this.$router.push({name:'Kg',params:{active:this.active}})
        	}
        },
        created(){
        	this.active = this.$route.params.active
        },
        components:{
        	[Icon.name]:Icon
        }
    }

</script>

<style lang="less" scoped>
.man{
	position: fixed;
	bottom: 0;
	top: 0;
	left: 0;
	right:0;
	background-color: #f4f4f4;
}
.top{
	position: relative;
	width:100%;
	height:5rem;
	background: linear-gradient(#3ED8FC, #83E3FA);
}
.topi{
	position: absolute;
	bottom: 0.3rem;
	left: 0.2rem;
}
.topz{
	position: absolute;
	bottom: 0.8rem;
	left:3rem;
	font-size:0.6rem;
	
}
.n{
	width:100%;
	background-color:#fff;
	overflow: hidden;
	padding:0.2rem 0;
	margin-bottom:0.3rem;
}
.ni{
	float:left;
	margin-left:0.5rem;
}
.nz{
	float: left;
	line-height: 1rem;
	margin-left:0.3rem;
}
.nj{
	float:right;
	margin-top:0.3rem;
	margin-right:0.2rem;
}
.n2{
	width:100%;
	background-color:#fff;
	overflow: hidden;
	padding:0.18rem 0;
	border-bottom:0.018rem solid #ddd;
}
.ni3{
	float:left;
	margin-left:0.5rem;
	margin-top:0.1rem;
}
.nz2{
	float: left;
	line-height: 1rem;
	margin-left:0.3rem;
}
.nj2{
	float:right;
	margin-top:0.3rem;
	margin-right:0.2rem;
}
</style>