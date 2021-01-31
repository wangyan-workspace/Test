<template>
  <div class="container">
    <div class="regist-form">
      <h1>用户注册</h1>
      <p>
        用户名：<input
          type="text"
          name="username"
          v-model="username"
          @blur="checkUser"
        /><span id="info"></span>
      </p>
      <p>密码：<input type="password" name="password" v-model="password" /></p>
      <p>昵称：<input type="text" name="nickname" v-model="nickname" /></p>
      <p>
        <button @click="doRegist" id="btn-regist">注册</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: ''
    }
  },
  created() {},
  methods: {
    doRegist() {
      this.$http
        .post('/user/regist', {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        })
        .then((res) => {
          let { state } = res.data
          console.log(state)
          if (state === 'no username') {
            alert('用户名不能为空')
            this.$router.push('/regist')
          } else if (state === 'no password') {
            alert('密码不能为空')
            this.$router.push('/regist')
          } else if (state === 'no nickname') {
            alert('昵称不能为空')
            this.$router.push('/regist')
          } else {
            if (state === 'success') {
              this.$router.push('/login')
            } else {
              alert("海燕呐~，你可长点心吧，重新注册😠")
            }
          }
        })
    },
    checkUser() {
      this.$http
        .get('/user/checkUser', {
          // 向路由/checkUser传递的参数（在路由后面的键值对）
          params: {
            username: this.username
          }
        })
        .then(function (res) {
          let spanInfo = document.getElementById('info')
          let { state } = res.data
          if (state === 'success') {
            spanInfo.innerHTML = 'OK'
          } else {
            spanInfo.innerHTML = '用户名已存在'
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.regist-form {
  width: 650px;
  background: cornsilk;
  margin: 40px auto;
  padding: 20px 0;
  text-align: center;
  opacity: 0.8;
}
.regist-form p {
  padding: 20px 0;
}
#btn-regist {
  width: 70px;
  border-radius: 5px;
}
</style>