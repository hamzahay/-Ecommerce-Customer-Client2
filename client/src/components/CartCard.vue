<template>
  <div class="cart-card">
    <img class="cart-img" :src="cart.Product.image_url" alt="product pic" height="165px">
    <div class="cart-detail">
      <div class="detail-top">
        <h1>{{ cart.Product.name }}</h1>
        <h2>Price: {{ cart.quantity }} X {{ price }}</h2>
      </div>
      <div class="detail-bottom">
        <div class="quantity-btn">
          <button @click.prevent="minus" class="editQuantity-btn minus">-</button>
          <h2>{{ cart.quantity }}</h2>
          <button @click.prevent="plus" class="editQuantity-btn plus">+</button>
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
    },
    plus () {
      if (this.cart.quantity < this.cart.Product.stock) {
        this.$store.dispatch('addCartQuantity', { id: this.cart.id, operator: 'plus' })
      } else {
        console.log('out of stock')
      }
    },
    minus () {
      if (this.cart.quantity > 1) {
        this.$store.dispatch('addCartQuantity', { id: this.cart.id, operator: 'minus' })
      } else {
        console.log('out of stock')
      }
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

  .cart-img {
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
    height: 30px;
    gap: 20px;
  }

  .detail-bottom .delete-btn {
    border: none;
    background-color: transparent;
    max-height: 30px;
    margin: auto 0px;
    cursor: pointer;
  }

  .quantity-btn {
    display: flex;
    justify-content: space-between;
    border: 1px solid grey;
    border-radius: 5px;
  }

  .quantity-btn h2 {
    margin: 0px;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    padding: 0px 8px;
  }

  .editQuantity-btn {
    border: none;
    padding: 0px 10px;
    margin: 0px;
    cursor: pointer;
    background-color: white;
  }

  .editQuantity-btn:hover {
    background-color: rgb(250, 250, 250);
  }

  .plus {
    border-radius: 0px 5px 5px 0px;
  }

  .minus {
    border-radius: 5px 0px 0px 5px;
  }
</style>
