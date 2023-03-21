<script>
export default {
    data() {
        return {
            count: 0
        };
    },
    methods:{
      increment(){
        this.count++;
      },
      decrement(){
        this.count--;
      }
    }
}
</script>

<template>
 <div class="home_page">
  <div class="container">
    <div class="contain">
      <h2 class="title">Click {{ count }}</h2>
      <div class="btns">
        <button class="btn" @click="decrement">-</button>
        <button class="btn" @click="increment">+</button>
      </div>
    </div>
  </div>
 </div>
</template>

<style scoped>
.home_page{
  padding: 15px 0;
}

.contain{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}

.title{
  font-size: 36px;
  font-weight: 600;
  color:#fff;
  margin-bottom: 25px;
}

.btn{
  background-color: transparent;
  color:#fff;
  border:1px solid green;
  min-width: 250px;
  text-align: center;
  transition: background 300ms;
}

.btn:hover{
  background-color: green;
}

.btn:not(:last-child){
  margin-right: 25px;
}
</style>
