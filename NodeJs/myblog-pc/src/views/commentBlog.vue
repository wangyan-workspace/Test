<template>
  <div class="container">
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
    <main class="blog">
      <div class="blog-title">
        <h3>{{ blogInfo && blogInfo.title }}</h3>
        <span>{{ blogInfo && blogInfo.post_time }}</span>
      </div>
      <div class="blog-content">{{ blogInfo && blogInfo.content }}</div>
    </main>
    <footer class="discuss">
      <h1>发表评论</h1>
      <div style="float: left">内容：</div>
      <textarea name="" id="" cols="140" rows="20" v-model="content"></textarea>
      <p>
        <button @click="postComment">发表</button>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      username: '',
      isLogin: false,
      blogInfo: null
    }
  },
  created() {
    if (this.$store.state.loginUser) {
      this.username = this.$store.state.loginUser.username
      this.isLogin = !this.isLogin
    }
    this.getBlogId()
  },
  methods: {
    getBlogId() {
      let blogId = this.$route.params.blogId
      this.$http
        .get('/blog/content', {
          params: {
            blogId: blogId
          }
        })
        .then((res) => {
          let { state, blogMessage } = res.data
          // console.log(blogMessage)
          if (state === 'success') {
            this.blogInfo = blogMessage
          }
        })
    },
    postComment() {
      // this.$store.state.loginUser: 取出在vuex存储器里的用户信息
      let loginUser = this.$store.state.loginUser
      if (loginUser) {
        this.$http
          .post('/blog/comment', {
            content: this.content,
            blog_id: this.blogInfo.blog_id,
            user_id: this.$store.state.loginUser.user_id
          })
          .then((res) => {
            let { state } = res.data
            if (state === 'success') {
              alert("发表评论成功")
              this.$router.push('/blog/detail/' + this.blogInfo.blog_id)
            } else {
              alert('发表评论失败')
            }
          })
      } else{
        alert('你还没登录呢，快去登录...😤')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.blog {
  margin: 0 auto;
  padding: 20px;
  background: #eba4a4;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.discuss {
  background: #23cacf;
  height: 1200rpx;
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