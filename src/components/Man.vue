<template>
<div class="man">
  <div>
      <router-view></router-view>
  </div>

<van-tabbar v-model="active" >
  <van-tabbar-item  v-for="(item,index) in tabs" @click="goSta(item.path)" :icon="item.icon" :key="index">{{item.title}}</van-tabbar-item>

</van-tabbar>

</div>

</template>

<script>

import{ Tabbar, TabbarItem,Icon } from 'vant';
    export default {
        name:'Man',
        data(){
            return{
             active:0,
             tabs: [
								{title: '书架', icon: 'cart-circle-o', path: {name: 'Shujia',params:{active:0}}},
								{title: '精选', icon: 'star', path:{name: 'Jx',params:{active:1}}},
                {title: '免费', icon: 'gold-coin-o', path: {name: 'Mf',params:{active:2}}},
                {title: '书库', icon: 'debit-pay', path: {name: 'Sk',params:{active:3}}},
                {title: '我的', icon: 'manager-o', path: {name: 'Wd',params:{active:4}}}
				]
               
            }
        },
        created(){
        	
        	this.active = this.$route.params.active
        	
        },
        methods:{

            goSta(path){
                this.$router.push(path)
            }

        },
        components:{
            [Tabbar.name]:Tabbar,
              [TabbarItem.name]:TabbarItem,
              [Icon.name]:Icon
        }
    }

</script>
<style lang="less" scope>
	.man{
   	padding-margin:1.3333rem;
   }

</style>