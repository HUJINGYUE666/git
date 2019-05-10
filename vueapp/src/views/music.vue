<template>
    <div>
        <img :src="obj.bg" v-for="(obj,index) in musicList" :key="index" @click='goList()'/>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return { //避免组件相互影响
                musicList:[]
            }
        },
        created() {
            axios.get('/data/musiclist.json')
            .then((result)=>{
                this.musicList = result.data.albums
            })
        },
        methods: {
            goList(){
                this.$router.push('/musiclist')
            }
        }
    }
</script>

<style scoped>
    img{
       width:50%; 
    }
</style>