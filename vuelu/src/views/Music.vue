<template>
    <div>
     <img  v-for="obj in musicList " 
      @click="$router.push({path:'/music-detail',query:{id:obj.id}})"
     :key="obj.id" :src="obj.bg" alt="">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                musicList:[]
            }
        },
        created(){
            axios.get('data/musiclist.json')
            .then((res)=>{
             this.musicList=res.data.albums;
            }).catch(()=>{
             console.log(res);
            })
        }
    }
</script>

<style lang="scss" scoped>
img{
    width: 50%;
    float: left;
}
</style>