<template>
   <header :style="{background:$store.state.color}">
      {{$store.state.title}}
   </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

header{
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    background: red;
    font-size: 16px;
    position: fixed;
    top:0px;
    width:100%;
}
</style>