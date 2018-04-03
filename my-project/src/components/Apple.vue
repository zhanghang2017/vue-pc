<template>
  <div class='Apple'>
      {{$route.params}}
      <p v-text='name'></p>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'i am apple'
    }
  }
}
</script>
<style>

</style>
