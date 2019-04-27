<template>
    <div>
        <h1>B页面</h1>
        姓名：{{$route.params.name}} 年龄：{{$route.params.age}}
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                msg:'xxx'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>