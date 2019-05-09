<template>
  <div>
    <div id="app">
      <router-link to='/'>首页</router-link>
      <!-- <router-link to='/home'>首页</router-link> -->
      <router-link to='/home'>首页别名</router-link>
      <router-link to='/a'>a页面</router-link>
      <router-link to='/b'>b页面</router-link>  
      <!-- <router-link :to="{name:'c',params:{name:'mt',age:1}}">c页面</router-link> -->
      <router-link to='/c/hl'>c页面</router-link>
      <router-link to='/d/mt'>d页面</router-link>
    </div>
    <router-view></router-view>
    <!-- <transition name="fade" mode='out-in'> -->
      <transition name='fade' mode='out-in'>
        <router-view></router-view>
      </transition>
  </div>
</template>
 <script>
    export default {
      
    }
  </script>
<style>
   /* .fade-enter{
     opacity: 0;
   }
   .fade-enter-active{
     transition: opacity 5s ease;
   }
   .fade-enter-to{
     opacity: 1;
   } */
   /* .fade-leave{
     opacity: 1;
   }
   .fade-leave-active{
     transform: opacity 5s ease;
   }
   .fade-leave-to{
     opacity: 0;
   } */
   .fade-enter{
        /* opacity: 0; */
        transform: translateX(-100%)
    }
    .fade-enter-active{
        transition:transform 1s;
    }
    .fade-enter-to{
        transform: translateX(0)
    }
    .fade-leave{
       transform: translateX(0)
    }
    .fade-leave-active{
        transition:transform 1s;
    }
    .fade-leave-to{
        transform: translateX(100%)
    }

</style>
