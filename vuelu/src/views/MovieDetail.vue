<template>
    <div>
        <div v-if="showMovie">
           <div class="detail-top">
               <img :src="movie.images.medium" alt="">
               <div class="detail-info">
                  <h2 class="h2">{{movie.original_title}}</h2>
                  <p class="p1">上映时间 {{movie.pubdate}}</p>
                  <p class="p2">时长 {{movie.durations[0]}}</p>
                </div>
           </div>
           <div class="detail-bottom">{{movie.summary}}</div>
        </div>
        <img class="loading" v-if="isShow" src="../assets/images/loading.gif" alt="">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
         return{
             movie:{},
             showMovie:false,
             isShow:true,
            
         }
        },
        created(){
            axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/'+this.$route.query.id)
            .then((res)=>{
             this.movie=res.data;
             this.isShow=false;
             this.showMovie=true;
            }).catch(()=>{
            console.log(res)
            })
        }
    }
</script>

<style lang="scss" scoped>
 .detail-top{
     display: flex;
img {
    width: 3rem;
  }
.detail-info {
    flex: 1;
    margin-left: 0.1rem;
    h2{
        margin-top: 0.1rem;
    }
    p{
        margin-top: 0.1rem;
    }
  }
 }
 .detail-bottom{
     margin-top: 0.1rem;
 }
 .loading{
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
     width: 1rem;
 }
</style>