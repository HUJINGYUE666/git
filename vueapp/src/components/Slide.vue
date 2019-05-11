<template>
    <div>
        <transition-group name="fade" tag="ul" class="slide-box">
            <li class="slide-item" v-for="(img,index) in imgs" :key='index' v-show="index == id">
                <img :src="img">
            </li>
        </transition-group>
    </div>
</template>

<script>
    export default {
        props:['imgs'],
        data() {
            return {
                id:0
            }
        },
        created() {
            setInterval(()=>{
                this.id++;
                if(this.id == 2 && this.imgs.length){
                    this.id = 0
                }
            },1000)
        },
    }
</script>

<style scoped>
    .slide-box{
        position: relative;
    }
    .slide-item{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4rem;
    }
    .slide-item img{
        width: 100%;
        height: 4rem;
    }
    .slide-item:first-child{
        display: block;
    }

    .slide-item img{
        width:100%  ;
        height:100%;
    }
     .fade-enter{
        transform: translateX(-100%);
    }
    .fade-enter-active{
        transition:transform 1s;
    }
    .fade-enter-to{
        transform: translateX(0);
    }
    .fade-leave{
        transform: translateX(0);
    }
    .fade-leave-active{
        transition:transform 1s;
    }
    .fade-leave-to{
        transform: translateX(100%);
    }
</style>