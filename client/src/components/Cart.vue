<template>
  <div class="checkout-container">
    <div class="cart-container">
      <CartCard
        v-for="cart in carts"
        :key="cart.id"
        :cart="cart"
      />
    </div>
    <div class="checkout"></div>
  </div>
</template>

<script>
import CartCard from './CartCard.vue'

export default {
  name: 'Cart',
  components: {
    CartCard
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  }
}
</script>

<style scoped>
  .checkout-container {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
  }

  .cart-container {
    width: 600px;
    height: 75vh;
    margin-left: 50px;
    background-color: rgba(224, 224, 224, 0.733);
    overflow: auto;
  }
</style>
