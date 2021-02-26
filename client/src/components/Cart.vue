<template>
  <div class="checkout-container">
    <div class="cart-container">
      <CartCard
        v-for="cart in carts"
        :key="cart.id"
        :cart="cart"
      />
    </div>
    <div class="checkout">
      <h1>Total Price: {{ totalPrice }}</h1>
      <button class="checkout-btn">Checkout</button>
    </div>
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
    },
    totalPrice () {
      const carts = this.$store.state.carts
      let totalPrice = 0
      carts.forEach(cart => {
        const price = cart.quantity * cart.Product.price
        totalPrice = totalPrice + price
      })
      return 'Rp.' + totalPrice.toLocaleString('id-ID')
    }
  }
}
</script>

<style scoped>
  .checkout-container {
    display: flex;
    margin-top: 60px;
  }

  .cart-container {
    width: 600px;
    height: 75vh;
    margin-left: 50px;
    background-color: rgba(224, 224, 224, 0.733);
    overflow: auto;
  }

  .checkout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto 0px;
    margin-left: 65px;
    width: 600px;
    height: 250px;
    background-color: rgba(224, 224, 224, 0.733);
  }

  .checkout h1 {
    margin-top: 75px;
  }

  .checkout-btn {
    border: none;
    color: white;
    background-color: rgb(57, 101, 247);
    cursor: pointer;
    padding: 10px 25px;
    font-size: 25px;
  }
</style>
