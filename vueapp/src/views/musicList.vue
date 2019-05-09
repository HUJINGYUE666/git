<template>
    <div>
        音乐列表
        <aplayer :music="music" :list="musicData" showlrc v-if="isShow"/>
    </div>
</template>

<script>
    import axios from 'axios'
    import Aplayer from 'vue-aplayer'
    export default {
        data(){
            return {
                musicData:[],
                isShow:false
            }
        },
        computed: {
            music(){
                return this.musicData[0]
            }
        },
        components:{
            Aplayer
        },
        created() {
            axios.get('/data/musicdata.json')
            .then((result)=>{
                result.data.musicData.forEach((obj) => {
                    let obj1 = {
                       title:obj.title,
                       author:obj.author,
                       src:obj.src,
                       pic:obj.musicImgSrc,
                       lrc:`http://localhost:8080/${obj.lrc}`
                   }
                   this.musicData.push(obj1);
                });
                this.isShow = true;
            })
        }
    }
</script>

<style scoped>
    img{
       width:50%; 
    }
</style>