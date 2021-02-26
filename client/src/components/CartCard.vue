<template>
  <div class="cart-card">
    <img class="cart-img" :src="cart.Product.image_url" alt="product pic" height="165px">
    <div class="cart-detail">
      <div class="detail-top">
        <h1>{{ cart.Product.name }}</h1>
        <h2>Price: {{ cart.quantity }} X {{ price }}</h2>
        <h2>Stock: {{ cart.quantity }}</h2>
      </div>
      <div class="detail-bottom">
        <div class="quantity-btn">
        </div>
        <button @click.prevent="deleteCart" class="delete-btn">
          <img src="../assets/delete 2.png" alt="delete-image" height="30px">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  data () {
    return {
      maxQ: '',
      minQ: ''
    }
  },
  props: [
    'cart'
  ],
  methods: {
    deleteCart () {
      this.$store.dispatch('deleteCart', { id: this.cart.id })
    }
  },
  computed: {
    totalPrice () {
      let price = this.cart.Product.price * this.cart.quantity
      price = 'Rp.' + price.toLocaleString('id-ID')
      return price
    },
    price () {
      return 'Rp.' + this.cart.Product.price.toLocaleString('id-ID')
    }
  }
}
</script>

<style scoped>
  .cart-card {
    display: flex;
    margin: 20px;
    border-radius: 5px;
    background-color: rgba(250, 250, 250, 0.616);
    max-height: 165px;
  }

  .cart-card:hover {
    background-color: rgba(255, 255, 255, 0.616);
  }

  .cart-detail {
    padding: 5px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .detail-top h1, .detail-top h2 {
    margin: 0px;
    overflow: hidden;
    text-align: left;
  }

  .detail-bottom {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }

  .detail-bottom .delete-btn {
    border: none;
    background-color: transparent;
    max-height: 30px;
    margin: auto 0px;
    cursor: pointer;
  }
</style>
