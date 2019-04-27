<template>
    <div>
        <h1>计数器：
            {{$store.state.count}}
            {{count}}
        </h1>
        
         

        <button @click="$store.commit('add',10)">+10</button>
        <!-- <button @click="$store.commit('reduce')">-1</button> -->
        <button @click="reduce">-1</button>
        <button @click="addAction">+异步</button>
        <button @click="reduceAction">-异步</button>
        <h1>{{$store.state.a.count}}</h1>

    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        data:function(){
            return{}
        },
        // computed: { //失败
        //     count(){
        //         return this.store.state.count
        //     }
        // },
        // computed: mapState(['count']),
        // methods: mapMutations(['add','reduce']),
        computed: {
            ...mapState(['count']),
            ...mapGetters(['count'])
        },
        methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['addAction','reduceAction']),
        }
    }
</script>

<style lang="scss" scoped>

</style>