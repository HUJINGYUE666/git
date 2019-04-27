<template>
  <div>
    <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
      <router-link to="/home">首页</router-link>
      <router-link to="/a">a页面</router-link>
      <!-- <router-link to="/b">b页面</router-link> -->
      <!-- :to 可变的 -->
      <router-link :to="{name:'b',params:{name:'mt',age:2}}">b页面</router-link> 
      <router-link to='/c/mt'>c页面</router-link>
      <router-link to='/b/mt'>b到c</router-link>
      <router-link to='/x'>别名</router-link>

    </div>
    <!-- <transition name="fade" mode='out-in'> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!-- 占位 -->
    <!-- <router-view/>  -->
    <button @click='goPrev()'>&lt;</button>
    <button @click="goNext()">&gt;</button>
    <button @click="goHome()">home</button>
  </div>
</template>
 <script>
    export default {
      methods:{
        goPrev(){
          this.$router.go(-1);
        },
        goNext(){
          this.$router.go(1);
        },
        goHome(){
          this.$router.push('/');
        },
      }
    }
  </script>
<style>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 2s ease;
  }
  .fade-enter-to{
     opacity: 1;
  }
  .fade-leave{
    opacity: 0;
  }
  .fade-leave-active{
    transition: opacity 2s ease;
  }
  .fade-leave-to{
     opacity: 1;
  }
</style>
