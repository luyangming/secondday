<template>
    <div>
   我是详情页
   <!-- {{$route.query.id}}
   {{$route.query.name}} -->
        {{$route.params.id}}
        {{$route.params.name}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>