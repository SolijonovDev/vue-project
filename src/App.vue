<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HomePage from './components/HomePage.vue';

export default {
    components: { Header,Footer,HomePage },
}
</script>

<template>
  <div class="app">
    <Header/>
    <div class="contain">
      <router-view></router-view>
    </div>
  <Footer/>
  </div>
</template>

<style scoped>
.app{
  background-color: darkcyan;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.contain{
  flex-grow: 1;
  background-color: darkgray;
}
</style>
