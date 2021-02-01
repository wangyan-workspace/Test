<template>
  <div class="contain">
    <header>
      <div class="title">MyBlog</div>
      <div class="login-box">
        <span v-show="isLogin">{{ username }}</span>
        <span v-show="!isLogin">
          <router-link to="/login">登录</router-link> /
          <router-link to="/regist">注册</router-link>
        </span>
      </div>
    </header>
    <main class="contain" background="">
      <h1>发表文章</h1>
      <p>标题：<input type="text" v-model="title" /></p>
      <div style="float: left">内容：</div>
      <textarea name="" id="" cols="165" rows="40" v-model="content"></textarea>

      <p>
        <button @click="postBlog">发表</button>
      </p>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      username: '',
      isLogin: false
    }
  },
  created() {
    if (this.$store.state.loginUser) {
      this.username = this.$store.state.loginUser.username
      this.isLogin = !this.isLogin
    }
  },
  methods: {
    postBlog() {
      // this.$store.state.loginUser: 取出在vuex存储器里的用户信息
      let loginUser = this.$store.state.loginUser
      // 先判断出用户是否登录，登录成功之后才可以发表文章
      if (loginUser) {
        this.$http
          .post('/blog/post', {
            title: this.title,
            content: this.content,
            userId: loginUser.user_id
          })
          .then((res) => {
            let { state } = res.data
            if (state == 'success') {
              this.$router.push('/')
            } else {
              alert('发表文章失败！')
            }
          })
      } else {
        alert('你还没登录呢，快去登录...😤')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.contain {
  background: #23cacf;
  height: 1200rpx;
}
input {
  width: 150px;
  background: rgb(224, 205, 244);
}
textarea {
  background: #8ef3ec;
}
button {
  width: 100px;
  height: 30px;
  margin: 30px;
  background: wheat;
  border-radius: 5px;
}
</style>