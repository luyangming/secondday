<template>
    <footer :style="{background:$store.state.color}">
        <router-link v-for="(obj,index) in menu" 
        :key="index" 
        :to="obj.path"
        @click.native="$store.commit('change',obj)"
       > {{obj.title}}
        </router-link>
    </footer>
</template>

<script>
    export default {
        data(){
    return{
        menu:[
            {
             title:"电影",
             path:"/movie",
             color:"red",
            },
            {
             title:"音乐",
             path:"/music",
             color:"pink",
            },
            {
             title:"图书",
             path:"/book",
             color:"yellow",
            },
            {
             title:"图片",
             path:"/photo",
             color:"orange",
            }
        ]
    }
        },
        created(){
          this.menu.forEach((obj,index)=>{
             if(this.$route.path.includes(obj.path)){
                 this.$store.commit("change",obj)
             }
          })

          
        }
    }
   
</script>

<style lang="scss" scoped>
footer{
        background: red;
        height:1rem;
        line-height: 1rem;
        position: fixed;
        bottom:0px;
        width:100%;
        display: flex;
        a{
            flex: 1;
            text-align: center;
            font-size: 14px;
            color: #000;
            cursor: pointer;
        }
        .router-link-active{
            color: #fff;
            text-decoration: none;
            cursor: pointer;
        }
}
 
</style>