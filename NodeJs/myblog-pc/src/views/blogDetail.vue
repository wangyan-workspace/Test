<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3></h3>
        <span> </span>
      </div>
      <div class="blog-content"></div>
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
    return {};
  },
  created() {
    console.log(this.$route.params);
  },
  methods: {
    getBlogDetail() {
      this.axios({
        url: "http://localhost:3000/blog/detail",
        data: {
          blogId: "",
        },
        headers: {
          // 取出token值
          Authorization: localStorage.getItem("mytoken"),
        },
      })
        .then((res) => {
          let { state } = res.data;
          if (state === "auth-fail") {
            alert("请求未授权-then!");
          } else if (state === "success") {
            let { blogs } = res.data;
            this.blogList = blogs;
          }
        })
        .catch((err) => {
          //   alert('请求未授权-catch!', err)
          this.$router.push("/login");
        });
    },
  },
};
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
