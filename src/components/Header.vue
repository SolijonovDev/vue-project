<template>
 <div class="header">
  <div class="container">
   <div class="contain">
    <h2 class="title" @click="$router.push('/')">Logo</h2>
    <nav class="nav">
     <ul class="menu">
       <li class="item">
        <button @click="$router.push('/about')">About</button>
       </li>
       <li class="item">
        <button @click="$router.push('/blogs')">Blogs</button>
       </li>
       <li class="item">
        <button @click="$router.push('/news')">News</button>
       </li>
     </ul>
    </nav>
  </div>
  </div>
 </div>
</template>

<style scoped>
.header{
  background-color: darkgray;
  padding: 15px 0;
  border-bottom: 1px solid #000;
}

.title{
  cursor: pointer;
}

.contain{
  display: flex;
  align-items: center;
}

.nav{
  margin-left: auto;
 }

 .menu{
  display: flex;
  align-items: center;
  list-style-type: none;
}

.item{
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}

.item button{
  background-color: transparent;
  color:#000;
  font-size: 18px;
}

.item:not(:last-child){
  margin-right: 15px;
}

</style>
