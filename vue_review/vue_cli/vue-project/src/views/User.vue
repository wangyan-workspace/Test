<template>
  <div>
      <h1>用户详情页</h1>

      <!-- 获取页面传递的参数 -->
      <!-- 第一种路由传参方式：path + query -->
      <!-- 如果没有在data数据中定义接受的参数。可以直接使用$route.query.xxx -->
      <!-- <p>用户名:{{$route.query.name}}</p>
      <p>用户id:{{$route.query.id}}</p> -->
      <!-- <p>用户名:{{params.name}}</p>
      <p>用户id:{{params.id}}</p> -->
      
      <!-- 第二种路由传参方式：name + params -->
      <p>用户名:{{$route.params.name}}</p>
      <p>用户id:{{$route.params.id}}</p>
      <!-- <p>用户名:{{params.name}}</p>
      <p>用户id:{{params.id}}</p> -->
  </div>
</template>

<script>
export default {
    data() {
      return {
        // 第一种路由传参方式：path + query 定义接收参数的方式
        // params:this.$route.query
        // 第二种路由传参方式：name + params 定义接收参数的方式
        params:this.$route.params
      }
    },
}
</script>


<style lang="scss" scoped>

</style>