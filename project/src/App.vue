<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
     <router-link to="/">首页</router-link> |
    <!-- <router-link to="/top">首页</router-link> | -->
    <!-- <router-link :to="{path:'/detail',query:{id:25,name:'xx'}}">详情页</router-link> | -->
    <router-link :to="{name:'detail',params:{id:25,name:'xx'}}">详情页</router-link> |
    <!-- <router-link :to="{name:'detail',params:{id:25,name:'xx'}}">详情页</router-link> | -->
    <!-- <router-link to="/test">测试页</router-link> | -->
    <router-link to="/abc">abc</router-link> |
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter{
 transform: translate(100%)
}
.fade-enter-active{
  transition: transform 1s ease
}
.fade-enter-to{
transform: translate(0)
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
 transition: opacity 1s linear
}
.fade-leave-to{
opacity: 0;
}
</style>
