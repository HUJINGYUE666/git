<template>
    <div>
        <h2>计数器：
            <!-- {{$store.state.count}} -->
            {{count}}
            <!-- {{num}} -->
        </h2>
        <!-- <button @click="fn(1)">+1</button>
        <button @click="$store.commit('reduce',1)">-1</button> -->
        <button @click="add(2)">+2</button> 
        <button @click="reduce(2)">-2</button> 
        <!-- <button @click="add(2)">+</button>
        <button @click="reduce(2)">-</button> -->
        <button @click="addAction(66)">异步</button>

    </div>
</template>

<script>
    import {mapState,mapMutations, mapGetters,mapActions} from 'vuex';
    export default {
        // computed: {
        //     count(){
        //         return this.$store.state.count
        //     }

        // }
        computed:{
            ...mapState(['count']),
            // ...mapGetters(['num'])
        },
        methods: {
            // fn(num){
            //     this.$store.commit('add',num);
            // },
            ...mapMutations(['add','reduce']),
            ...mapActions(['addAction'])
        },
    }
</script>

<style lang="scss" scoped>

</style>