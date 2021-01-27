<template>
    <div class="container">
        <div class="blog-list">
            <div class="blog">
                <h3 class="blog-title">
                    <a href="/blog/detail/">22</a>
                </h3>
                <p class="blog-content">33</p>
                <span class="post-time">44</span>
            </div>
            
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
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
.blog-title,.blog-content,.post-time{
    margin: 20px 0;
}
</style>