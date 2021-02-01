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
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blog && blog.title }}</h3>
        <span>{{ blog && blog.post_time }}</span>
      </div>
      <div class="blog-content">{{ blog && blog.content }}</div>
      <div class="comments">
        <h4>评论</h4>

        <div class="comment" v-for="item in comments" :key="item.comm_id">
          <div class="comment-content">{{ item.comm_content }}</div>
          <div class="comment-info">
            <span class="userinfo">{{ item.username }}</span>
            <span class="post-time">{{ item.comm_post_time }}</span>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/">回到首页</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: null,
      comments: '',
      username: '',
      isLogin: false
    }
  },
  created() {
    if (this.$store.state.loginUser) {
      this.username = this.$store.state.loginUser.username
      this.isLogin = !this.isLogin
    }
    // 获取路由上传递的参数
    // console.log(this.$route.params)
    this.getBlogDetail()
  },
  methods: {
    getBlogDetail() {
      let blogId = this.$route.params.blogId
      this.$http
        .get('/blog/detail', {
          params: {
            blogId: blogId
          }
        })
        .then((res) => {
          let { state, blogInfo } = res.data
          if (state === 'success') {
            this.blog = blogInfo
            // console.log(blogInfo)
            this.comments = this.blog.comments
          }
        })
      // .catch((err) => {
      //   //   alert('请求未授权-catch!', err)
      //   this.$router.push('/login')
      // })
    }
  }
}
</script>

<style scoped>
.blog {
  margin: 20px auto;
  padding: 20px;
  background: #eba4a4;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comments {
  background: thistle;
}
.comment {
  padding: 20px;
}
.comment-info {
  float: right;
}
.userinfo {
  margin-right: 30px;
}
</style>
