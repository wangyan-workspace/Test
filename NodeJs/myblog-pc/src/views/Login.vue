<template>
  <div class="container">
    <div class="login-form">
      <h3>用户登录</h3>
      <p>用户名：<input type="text" name="username" v-model="username" /></p>
      <p>密码：<input type="password" name="password" v-model="password" /></p>
      <p>
        <button @click="doLogin" class="btn">登录</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    doLogin() {
      this.$http
        .post('/user/login', {
          username: this.username,
          password: this.password
        })
        .then((res) => {
          // console.log(res.data) // {status: "success", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…Dg3fQ.2WXY2QJY3POqrgq12py9BARS9CmVaZ0hr3jbr30ECcg"}
          let { state, token, user } = res.data
          if (state === 'success') {
            // console.log('登陆成功')
            // 登陆成功,跳转到路由
            // 存登录用户信息  this.$store.commit调用vuex的同步的方法
            this.$store.commit('storeLoginUser', user)
            // 存储token
            // 调用vuex里的store里的方法  this.$store.dispatch调用vuex的异步的方法
            this.$store.dispatch('setToken', token)
            // 跳转到首页的路由
            this.$router.push('/')
          } else {
            // 登录失败
            alert('用户名或密码不正确！')
          }
        })
    }
  }
}
</script>

<style scoped>
.login-form {
  width: 650px;
  background: cornsilk;
  margin: 40px auto;
  padding: 20px 0;
  text-align: center;
  opacity: 0.8;
}
.login-form p {
  padding: 20px 0;
}
#btn-login {
  width: 70px;
  border-radius: 5px;
}
</style>
