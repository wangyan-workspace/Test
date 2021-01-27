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
        .post('http://localhost:3000/user/login', {
          username: this.username,
          password: this.password
        })
        .then((res) => {
          console.log(res)
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
