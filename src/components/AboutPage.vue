<template>
 <div class="home_page">
  <div class="container">
    <div class="contain">
      <h2 class="title">About page</h2>
      <h4 class="text">My name is Qodirjon Solijonov</h4>
      <h4 class="text">I'm from Uzbekistan, Tashkent</h4>
      <h4 class="text">I'm {{ age }} years old</h4>
    </div>
  </div>
 </div>
</template>
<script>
export default {
  data(){
    return {
      age: new Date().getFullYear()-1998,
    }
  }
}
</script>
<style scoped>
.home_page{
  padding: 15px 0;
}

.contain{
  text-align: center;
}
.title{
  font-size: 26px;
  margin-bottom: 20px;
}
.text{
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 14px;
}
</style>
