<template>
  <div class="card">
    <div class="card-top">
      <img class="card-img" :src="product.image_url" alt="product image" height="200px">
    </div>
    <div class="card-bottom">
      <h2>{{ product.name }}</h2>
      <h3>{{ getPrice }}</h3>
      <h4>Stock: {{ product.stock }}</h4>
      <a @click.prevent="addToCart" class="addCart-btn">add to Chart</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: [
    'product'
  ],
  methods: {
    addToCart () {
      if (localStorage.access_token) {
        let added = false
        let cartId = 0
        let cart
        this.carts.forEach(item => {
          if (item.ProductId === this.product.id) {
            added = true
            cartId = item.id
            cart = item
          }
        })
        if (added) {
          if (cart.quantity < this.product.stock) {
            this.$store.dispatch('addCartQuantity', { id: cartId, operator: 'plus' })
          } else {
            console.log('out of stock')
          }
        } else {
          this.$store.dispatch('addCart', { id: this.product.id })
        }
      } else {
        console.log('please login first')
      }
    }
  },
  computed: {
    getPrice () {
      const price = 'Rp.' + this.product.price.toLocaleString('id-ID')
      return price
    },
    carts () {
      return this.$store.state.carts
    }
  }
}
</script>

<style scoped>
  .card {
    background-color: rgb(241, 241, 241);
    height: 350px;
    width: 275px;
    border-radius: 5px;
    overflow: hidden;
    margin: 0px auto;
  }

  .card-top {
    border-bottom: 1px solid rgb(233, 233, 233);
    background-color: white;
    height: 225px;
    overflow: hidden;
    align-content: center;
  }

  .card-img {
    height: 220px;
  }

  .card-bottom {
    text-align: left;
    padding: 5px 10px;
  }

  .card-bottom h2, .card-bottom h3, .card-bottom h4 {
    margin: 0px;
    margin-top: 5px;
    overflow: hidden;
  }

  .addCart-btn {
    position: relative;
    display: block;
    color: white;
    background-color: rgb(0, 197, 99);
    text-align: center;
    margin-left: 55%;
    padding-top: 10px;
    width: 125px;
    height: 30px;
    cursor: pointer;
  }

  .addCart-btn:hover {
    background-color: rgb(0, 167, 83);
  }
</style>
