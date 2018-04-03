<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition name="fade">
        <router-view></router-view>
    </transition>
    <router-link :to='{path:"/apple",param:{"color":"red"}}'>苹果</router-link>
    <router-link :to='{path:"/orange"}'>橘子</router-link>
     <router-link :to='{path:"/apple/details"}'>详细苹果</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
