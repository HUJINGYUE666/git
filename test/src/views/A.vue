// vbase tab
<template>
    <div>
        <h2>a页面content</h2>
        <div>
            <router-link to="/test1">test1页面</router-link>
            <router-link to="/test2">test2页面</router-link>
        </div>
        <router-view></router-view>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>