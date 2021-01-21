<template>
  <div>
      <h1>vuex</h1>

      <!-- $store.state.xxx : Vuex的实例下的state中的数据 -->
      <p>count: {{$store.state.count}}</p>
      <p>count:{{count}}</p>
      <p>result:{{result}}</p>
      <!-- <button @click="add">+1</button> -->
      <button @click="$store.commit('add')">+1</button>
      <button @click="addFun(5)">+5</button>
      <button @click="reduceFun">-1</button>
  </div>
</template>

<script>
// 将vuex（store/index.js）实例的内部东西遍历出来
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  computed:{
    // 对state进行映射,放到计算属性里
    ...mapState(['count']),
    // 对getters进行映射
    ...mapGetters(['result'])
  },
  methods:{
    // 对mutations进行映射
    ...mapMutations(['add','addFun']),
    // 对ations进行映射
    ...mapActions(['reduceFun']),
    // add(){
    //   // 类似于子组件与父组件间传参（emit），this.$store.commit('vuex（store/index.js）中定义的方法')
    //   this.$store.commit('add')
    // },
    // // 传参
    // addFun(num){
    //   this.$store.commit('addFun',num)
    // }
  }
}
</script>


<style lang="scss" scoped>

</style>