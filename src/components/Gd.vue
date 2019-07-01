<template>
	<div class="man">
		
	<div class="top">
	<div class="topl">
		<van-icon name="arrow-left" size="0.5rem" />
	</div>
	<div class="topr">
		<span class="topz"></span>
	</div>
	</div>
	
	<div class="box">
      		<div class="all" v-for="(item,index) in data">
      		<div class="alll">
      			<img class="img-auto" :src="url+item.cover"/>
      		</div>
      		<div class="allr">
      			<div class="allz1">{{item.title}}</div>
      			<div class="allz2">{{item.author}} | {{item.majorCate}}</div>
      			<div class="allz3">{{item.shortIntro}}</div>
      			<div class="allz4">{{(item.latelyFollower/10000).toFixed(2)}}万<span class="a4">人气 |&nbsp;</span>{{item.retentionRatio}}%<span class="a4">读者留存</span></div>
      		</div>
      		</div>
      		</div>
	
		
	</div>
</template>

<script>
	import {Icon} from 'vant'
	
	export default{
		name:'Gd',
		data(){
			return{
				url:'http://statics.zhuishushenqi.com',
				data:[]
			}
		},
		created(){
			//推荐
			var self =this
			let c = "/api/recommend/" + this.$route.params.id
			this.axios.get(c)
				.then(function(re) {
					console.log('aa', re.data.books)
					self.data = re.data.books
				});
		},
		components:{
			[Icon.name]:Icon
		}
	}
</script>

<style lang="less" scoped>
.img-auto{
	width:100%;
	display: block;
	height:3.5rem;
}
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
.box{
	width:100%;
	background-color: #f4f4f4;
	
}
.all{
	width:95%;
	margin:0 auto;
	overflow: hidden;
	padding-top:0.3rem;
}
.alll{
	float:left;
	width:30%;
}
.allr{
	float: right;
	width:70%;
}
.allz1{
	font-size: 0.5rem;;
	margin-left: 0.2rem;
	
}
.allz2{
	color:#aaa;
	margin-left: 0.2rem;
	margin-top:0.2rem;
}
.allz3{
	color:#aaa;
	margin-top:0.2rem;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	margin-left: 0.2rem;
	
}
.allz4{
	margin-top:0.2rem;
	margin-left: 0.2rem;
	color:#F56774;
}
.a4{
	color:#aaa;
}
</style>