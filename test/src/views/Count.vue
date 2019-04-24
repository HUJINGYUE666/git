<template>
    <div>
        count:

        {{$store.state.count}}
        {{$store.state.num}}
        <!-- {{count}} -->
        <button @click="$store.commit('add',10)">++</button>
        <button @click="$store.commit('reduce')">--</button>
        <button @click="$store.commit('reduce')">异步</button>

    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        data:function(){
            return{

            }
        },
        methods: {
            show(){
                console.log(this.store.state.count)
            }
        },
        // computed: {
        //     count(){
        //         return this.store.state.count
        //     }
        // },
        // computed: mapState['count']
        computed: {
            ...mapState['count'],
            ...mapGetters['addAction']
        }
    }
</script>

<style lang="scss" scoped>

</style>