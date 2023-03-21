<script>
const blogs=[
  {
    id:1,
    title:"Hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:2,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:3,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:4,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:3,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:4,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:3,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:4,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:3,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:4,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:3,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:4,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:3,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:4,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:3,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    id:4,
    title:"hello world",
    text:"Lorem ipsum lorem ipsum lorem ipsum"
  },
]

export default {
    data() {
        return {
            count: 0,
            blogs
        };
    },
    methods:{}
}
</script>

<template>
 <div class="blogs_page">
  <div class="container">
    <div class="contain">
      <h2 class="title">Blogs page</h2>
      <ul class="items">
        <li class="item" v-for="blog in blogs">
        <h4 class="blog_title">{{ blog.title }}</h4>
        <p class="blog_text">{{ blog.text }}</p>
        </li>
      </ul>
    </div>
  </div>
 </div>
</template>

<style scoped>
.blogs_page{
  padding: 15px 0;
}

.title{
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}

.items{
  list-style-type: none;
}

.item{
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #fff;
}

.blog_title{
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 700;
}

.blog_text{
  font-size: 16px;
} 
</style>
