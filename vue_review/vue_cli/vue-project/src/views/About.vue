<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goForward">前进</button>
      
      <p>count: {{$store.state.count}}</p>
  </div>
</template>

<script>
export default {
    methods:{
      goForward(){
        this.$router.forward();
      }
    },
     // 路由的钩子函数（方式二：在组件（一个页面也相当于一个组件）中使用钩子函数）
    beforeRouteEnter (to, from, next) {
      // does NOT have access to `this` component instance
      // console.log('to',to);
      // console.log('from',from);
      // console.log('next',next);
      // next()调用之后。才能实现跳转到页面
      next()
    },
    beforeRouteLeave (to, from, next) {
      // does NOT have access to `this` component instance
      // console.log('to',to);
      // console.log('from',from);
      // console.log('next',next);
      // next()调用之后。才能实现跳转到页面,next()可以传参数，true，false 默认是true
      // next(false);
      next();
    }
}
</script>
