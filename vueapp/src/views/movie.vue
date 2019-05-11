<template>
    <div class="movie-container">
        <ul>
            <!-- key唯一 -->
            <li class="movie-list" v-for="(obj,index) in movieList" :key="index" @click='goDetail(obj.id)'> 
                <img class="movie-img" :src="obj.images.medium"/>
                <div class="movie-text">
                    <h4>{{obj.title}}</h4>
                    <p>
                        <span v-for="(cast,index) in obj.casts" :key="index">{{cast.name}}</span>
                    </p>
                    <p>{{obj.collect_count}}已观看</p>
                    <p>年份：{{obj.year}}</p>
                    <span v-for="(genres,index) in obj.genres" :key="index">{{genres}}</span>
                </div>
            </li>
        </ul>
        <div class="loading" v-show="isShow">
            <img src="@/assets/imgs/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                movieList:[],
                isShow:true,
                isBottom:false
            }
        },
        created() {
            // No 'Access-Control-Allow-Origin' 跨域
            // 域名 协议  端口号 只要有一个不同即为跨域 安全限制 
            // https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10
            //axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10')
            // // /public
            // //axios.get('/data/movie0.json')
            // .then((result)=>{
            //     this.movieList = result.data.subjects;
            //     this.isShow = false;
            // })
            this.getMovie();
            window.onscroll = () =>{
                let scrollTop = document.documentElement.scrollTop;//滚动高度
                let clinetHeight = document.documentElement.clientHeight;//可视高度
                let height = document.documentElement.scrollHeight;//总高度
                //console.log(scrollTop,clinetHeight,height);
                if(scrollTop + clinetHeight == height && !this.isBottom){
                    // 加载下一屏
                    this.getMovie();
                }
            }
        },
        methods: {
            getMovie(){
                this.isShow = true;
                //axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10')
                //axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start='+this.movieList.length+'&count=10')
                // /public
                axios.get('/data/movie0.json')
                .then((result)=>{
                    this.isShow = false;
                    // this.movieList = result.data.subjects;
                    this.movieList = [...this.movieList,...result.data.subjects];           
                    if(this.movieList.length == result.data.total){
                        this.isBottom = true;
                    }
                })
            },
            goDetail(id){
                this.$router.push('/moviedetail/'+id)
            }
        }
    }
</script>

<style scoped>
    .movie-container{
        padding:0 0.2rem;
    }
    .movie-list{
        display: flex;
        border-bottom: 1px solid #000;
        padding: 0.2rem 0;
    }
    .movie-img{
        width:100px;
        height:150px;
        margin-right:0.2rem;
    }
    .movie-text{
        flex:1;
    }
    .loading{
        position: fixed;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        background: rgba(0,0,0,0.5);
    }
</style>