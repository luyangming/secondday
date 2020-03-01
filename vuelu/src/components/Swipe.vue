<template>
    <div>
     <transition-group tag="ul" name="fade" class="swipe-box" >
         <li class="swipe-list"
          v-for="(img,index) in imgs" 
          :key="index"
          v-show="index==iNow"
         >
           <img :src="img" alt="">
         </li>
     </transition-group>
     <ul class="btn-box">
         <li :class="{btns:true,active:index==iNow}"
           v-for="(img,index) in imgs" 
           :key="index"
         >
         </li>
     </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                 imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ],
                iNow:0
            }
        },
        created(){
            setInterval(() => {
                this.iNow++;
                if(this.iNow==this.imgs.length){
                    this.iNow=0;
                }
            }, 2000);
        }
    }
</script>

<style lang="scss" scoped>
      .swipe-box{
        height:5rem;
        position: relative;
      
       .swipe-list{
           position: absolute;
            left:0px;
            top:0px;
            width:100%;
            height: 5rem;
        img{
            width:100%;
            height:5rem;
        }
}
}

.btn-box{
    display: flex;
    justify-content: center;
    .btns{
            width:0.2rem;
            height:0.2rem;
            background: #ccc;
            border-radius: 50%;
            margin:0.1rem;
        }
        .active{
            background: #000;
        }
}
.fade-enter{
   transform: translate(-100%)
}
.fade-enter-active{
    transition: transform 1s linear
}
.fade-enter-to{
     transform: translate(0%)
}

.fade-leave{
   transform: translate(0)
}
.fade-leave-active{
    transition: transform 1s linear
}
.fade-leave-to{
     transform: translate(100%)
}
</style>