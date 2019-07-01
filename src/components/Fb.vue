<template>
<div class="man">

<div class="top">
	<div @click="fh()" class="topl">
		<van-icon name="arrow-left" size="0.5rem" />
	</div>
	<div class="topr">
		<span class="topz">评论</span>
	</div>
</div>

<van-row class="fb">
	<van-col span="3" offset="1">
		<van-icon name="comment" size="1rem"></van-icon>
	</van-col>
	<van-col span="19">
		<textarea class="tex" value="我来说俩句"></textarea>
	</van-col>
	</van-row>
	
	<van-row>
		<van-col span="8" offset="16">
			<div class="s">取消</div>
			<div class="s">发布</div>
		</van-col>
	</van-row>
	</div>

</div>
</template>

<script>
	import {Icon} from 'vant'
	export default{
		name:'Fb',
		data(){
			return{
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
			this.fhz = this.$route.params.fhz
			this.ssz =  this.$route.params.ssz
			this.jgname =  this.$route.params.va
			this.dan =  this.$route.params.n
			this.gdd =  this.$route.params.gdd
			this.Flname = this.$route.params.Flname
			this.atv= this.$route.params.atv
			this.Bdid= this.$route.params.Bid
			
			this.id=this.$route.params.id
		},
		methods:{
			fh(){
				this.$router.push({name:'Xq',params:{active:this.active,
					active1:this.active1,fhz:this.fhz,_id:this.id,
					ssz:this.ssz,va:this.jgname,dan:this.dan,gdd:this.gdd,
					name:this.Flname,atv:this.atv,Bdid:this.Bdid,active3:this.active3}})
			}
		},
		components:{
			[Icon.name]:Icon
		}
	}
</script>

<style lang="less" scoped>
.top{
	position: sticky;
	top: 0;
	left: 0;
	width:100%;
	background-color:#53DBFB;
	overflow: hidden;
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
}
.topz{
	margin-left:40%;
}
.fb{
	margin-top:0.3rem;
}
.tex{
	width: 100%;
	height:3.6rem;
	resize:none;
	overflow:scroll;
	overflow-y:hidden;
}
.s{
	width:1rem;
	height:0.7rem;
	text-align: center;
	line-height: 0.7rem;
	margin-left:0.3rem;
	display: inline-block;
	border: 1Px solid #aaa;
	background-color: #F9F2E3;
	color:#bbb;
}
</style>