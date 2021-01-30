<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blog && blog.title }}</h3>
        <span>{{ blog && blog.post_time }}</span>
      </div>
      <div class="blog-content">{{ blog && blog.content }}</div>
      <div class="comments">
        <h4>评论</h4>

        <div class="comment">
          <div class="comment-content"></div>
          <div class="comment-info">
            <span class="userinfo"></span>
            <span class="post-time"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: null
    }
  },
  created() {
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
          let { state, blog } = res.data
          if (state === 'success') {
            this.blog = blog
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
.comment {
  padding: 20px;
}
.comment-info {
  float: right;
}
</style>
