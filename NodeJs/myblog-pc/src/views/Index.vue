<template>
  <div class="container">
    <header>
      <div class="title">MyBlog</div>
      <button @click="goPostBlog">发表文章</button>
      <div class="login-box">
        <span v-show="isLogin">{{ username }}</span>
        <span v-show="!isLogin">
          <router-link to="/login">登录</router-link> /
          <router-link to="/regist">注册</router-link>
        </span>
      </div>
    </header>
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blogId">
        <h3 class="blog-title">
          <!-- <a href="/blog/detail/">{{ item.title }}</a> -->
          <router-link :to="{ path: '/blog/detail/' + item.blog_id }">{{
            item.title
          }}</router-link>
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">{{ item.post_time }}</span>
        <p class="comment">
          <router-link :to="{ path: '/blog/content/' + item.blog_id }">评论一下</router-link>
          <!-- <router-link to="/commentBlog">评论一下</router-link> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList: [],
      username: '',
      isLogin: false
    }
  },
  created() {
    if (this.$store.state.loginUser) {
      this.username = this.$store.state.loginUser.username
      this.isLogin = !this.isLogin
    }
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get('/blog/list').then((res) => {
        let { state } = res.data
        if (state === 'auth-fail') {
          alert('请求未授权-then!')
        } else if (state === 'success') {
          let { blogs } = res.data
          this.blogList = blogs
          // console.log(this.blogList)
        }
      })
      // .catch((err) => {
      // //   alert('请求未授权-catch!', err)
      // // 跳转到登录页面
      //   this.$router.push('/login')
      // })
    },
    goPostBlog() {
      this.$router.push('/blog/post')
    }
  }
}
</script>

<style scoped>
.blog-list {
  width: 815px;
  margin: 20px auto;
  background: rgb(233, 123, 123);
}
.blog {
  background: #ccc;
  padding: 20px;
  opacity: 0.75;
  margin: 20px 0;
}
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
.comment {
  float: right
}
</style>
