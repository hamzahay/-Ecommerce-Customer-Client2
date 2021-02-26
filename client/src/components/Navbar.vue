<template>
  <nav class="navbar">
    <span @click.prevent="toHome" class="nav-title">BLEBLE.</span>
    <ul class="nav-log">
      <li v-if="!loginStatus">
        <button @click.prevent="toLogin" class="toLogin-btn">Login</button>
      </li>
      <li v-if="loginStatus" class="login-nav">
        <div>
          <button @click.prevent="toCart" class="cart-btn">
          <img src="../assets/cart-2.png" height="35px">
        </button>
        <div v-if="totalCartItems > 0" class="cart-num text-primary">{{ totalCartItems }}</div>
        <button @click.prevent="logout" class="logout-btn">Logout</button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toLogin () {
      this.$router.push('/login').catch(() => {})
    },
    toHome () {
      this.$router.push('/').catch(() => {})
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$store.commit('updateLoginStatus', false)
      this.$router.push('/login').catch(() => {})
    },
    toCart () {
      this.$router.push('/carts').catch(() => {})
    }
  },
  computed: {
    loginStatus () {
      return this.$store.state.loginStatus
    },
    totalCartItems () {
      let totalItem = 0
      this.$store.state.carts.forEach(cart => {
        totalItem = totalItem + cart.quantity
      })
      return totalItem
    }
  },
  created () {
    this.$store.commit('auth')
    if (localStorage.access_token) {
      this.$store.dispatch('fetchCarts')
    }
  }
}
</script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 60px;
    background-color: rgb(115, 200, 218);
    box-shadow: 0px 0px 10px rgb(79, 139, 151);
    padding: 0px 15px;
  }

  .nav-title {
    margin: auto 0px;
    color: white;
    cursor: pointer;
    font-size: 30px;
    font-weight: 500;
  }

  .nav-title:hover {
    color: whitesmoke;
  }

  .nav-log {
    list-style: none;
    margin-top: 12px;
    margin-bottom: 0px;
    max-height: 35px;
  }

  .nav-log li {
    height: 100%;
    display: inline-block;
    align-content: center;
    max-height: 35px;
  }

  .login-nav {
    display: inline-block;
  }

  .toLogin-btn, .logout-btn {
    border: none;
    border-radius: 4px;
    background-color: rgb(58, 141, 236);
    color: white;
    padding: 10px 20px;
    margin-bottom: 25px;
  }

  .toLogin-btn:hover {
    transition: 0.45s ease;
    background-color: rgb(89, 158, 236);
  }

  .logout-btn {
    background-color: rgb(218, 52, 85);
    margin-left: 15px;
  }

  .logout-btn:hover {
    transition: 0.45s ease;
    background-color: rgb(216, 89, 115);
  }

  .login-nav {
    display: flex;
    align-items: baseline;
  }

  .cart-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
</style>
