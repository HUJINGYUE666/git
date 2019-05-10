<template>
  <div id="app">
    <common-header :selectMenu="selectMenu"></common-header>

    <div class="content"><router-view></router-view></div>

    <common-footer :menu="menu" :selectMenu="selectMenu" @change="fn"></common-footer>
  </div>
</template>
<script>
  // @代表src
  import CommonHeader from '@/components/CommonHeader.vue'; 
  import CommonFooter from '@/components/CommonFooter.vue';
  export default {
      components: {
        CommonHeader,
        CommonFooter
      },
      // 传值方便
      data() {
        return {
          menu:[
            {
              name:"电影",
              path:"/movie",
              bg:'#f00038'
            },{
              name: "音乐",
              path: "/music",
              bg: "#00ffee"
            },
            {
              name: "图书",
              path: "/book",
              bg: "#feef00"
            },
            {
              name: "图片",
              path: "/photo",
              bg: "#fabbaa"
            }
          ],
          //当前选用对象
          selectMenu:{
              name:"电影",
              path:"/movie",
              bg:'#f00038'
          }
        }
      },
      methods: {
        fn(index){
          // console.log(index);
          this.selectMenu = this.menu[index];
        }
      },
      //钩子函数 判断路径 解决刷新颜色标题问题
      created() {
        this.menu.forEach((obj,index)=>{
          if(obj.path == this.$route.path){
             this.selectMenu = obj;
          }
        })
      },
  }
</script>
<style>
  .content{
    margin: 1rem 0;
  }
</style>
