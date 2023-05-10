<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HomePage from './components/HomePage.vue';

import { mapActions } from 'vuex'

export default {
    components: { Header,Footer,HomePage },
      data(){
        return {
          count:0,
        }
    },
    methods:{
      ...mapActions(['increment']),
    }
}
</script>

<template>
  <div class="app">
    <Header></Header>
    <div class="contain">
      <router-view></router-view>
    </div>
  <Footer></Footer>
  </div>
</template>

<style>
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

ul,li{
  list-style-type: none;
}
button{
  outline: none;
}
</style>