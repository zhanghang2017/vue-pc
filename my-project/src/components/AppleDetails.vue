<template>
  <div class='Apple'>
      {{$route.params}}
      <p v-text='name'></p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'i am details apple'
    }
  }
}
</script>
<style>

</style>
