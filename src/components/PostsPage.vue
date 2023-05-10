<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    methods:{
     ...mapActions(["fetchPosts"])
    },
    async mounted(){
      this.fetchPosts();
    },
    computed:{
       ...mapGetters(['getPosts',"getIsLoadingPosts"])
    }
}
</script>

<template>
 <div class="home_page">
  <div class="container">
    <h2 class="title">Posts page</h2>
    <h2 v-if="getIsLoadingPosts">Loading ...</h2>
    <ul v-else>
      <li v-for="post in getPosts" key="post.id">
      <div class="post">
        <p>{{ post.id }}</p>
        <p>{{ post.title }}</p>
        <p>{{ post.body }}</p>
      </div>
      </li>
    </ul>
  </div>
 </div>
</template>

<style scoped>
.home_page{
  padding: 15px 0;
}
.title{
 font-size: 36px;
 margin-bottom: 20px;
}
.post{
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 20px;
}
</style>
