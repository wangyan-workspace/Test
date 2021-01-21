<template>
  <div>
      <h1>重定向测试页面</h1>
      <!-- 编程式导航 -->
      <button @click="goBack">后退</button>
      <button @click="go">后退2步</button>
      <button @click="goHome">回到首页</button>
  </div>
</template>

<script>
export default {
    methods:{
      goBack(){
        this.$router.back();
      },
      go(){
        this.$router.go(-2);
      },
      goHome(){
        // push()方法可以指定跳转到哪个页面
        // this.$router.push('/');

        // this.$router.push({
        //   path: '/user',
        //   query:{
        //     name: 'wangwu',
        //     id: 1002
        //   }
        // })

        this.$router.push({
          name: 'User',
          params:{
            name: 'zhaoliu',
            id: 1003
          }
        })
      }
    }
}
</script>


<style lang="scss" scoped>

</style>