<template>
  <div class="main-page">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'MainPage',
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
  .main-page {
    margin: 0px auto;
    margin-top: 15px;
    max-width: 90vw;
    height: 82vh;
    background-color: rgba(205, 231, 254, 0.795);
    padding: 15px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 25px;
    overflow: auto;
  }
</style>
