<template>
    <div>
     <button @click="$store.commit('add',5)">
        count add
     </button>
     <button @click="$store.commit('reduce')">
        count --
     </button>
      <button @click="addAction">
       addAction
     </button>
     <div>
     count是 {{$store.state.count}}
     </div>
     <div>
      number是{{$store.state.number}}
     </div>
     
     <div>
        getters中的xx  count*2+num：{{xx}}
    </div>
    </div>
</template>

<script>
import { mapState, mapMutations ,mapGetters,mapActions} from "vuex";
    export default {
        computed:{
            ...mapGetters(["xx"]),
            ...mapState(["count","number"])
        },
        methods:{
           ...mapMutations(["add","reduce"]),
        ...mapActions(['addAction'])
        }
    }
</script>

<style lang="scss" scoped>

</style>