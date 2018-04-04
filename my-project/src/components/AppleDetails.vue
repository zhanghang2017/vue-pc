<template>
  <div class='Apple'>
      <p v-text='name'></p>
      <button @click="add">增加数量+5</button>
      <button @click="reduce">减少数量-5</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'i am details apple',
      price: 5
    }
  },
  methods: {
    add () {
      this.$store.commit('increment', this.price)
    },
    reduce () {
      this.$store.commit('decrement', this.price)
    }
  }
}
</script>
<style>

</style>
