<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{ this.$store.state.totalPrice }}
    <transition name="fade">
        <router-view name="Apple"></router-view>
    </transition>
    <transition name="fade">
        <router-view name="Orange"></router-view>
    </transition>
     <router-view ></router-view>
    <router-link :to='{path:"/apple"}' tag='button'>苹果</router-link>
    <router-link :to='{path:"/orange"}'  tag='button'>橘子</router-link>
    <router-link :to='{path:"/apple/details"}'  tag='button'>详细苹果</router-link>
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
