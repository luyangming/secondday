<template>
    <div>
   我是首页
   {{$store.state.count}}
   <router-link to="/top/a">A</router-link>
   <router-view/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>