<template>
  <div class="right-auth">
    <form @submit.prevent="login" class="form-container">
      <h1>LOGIN</h1>
      <input v-model="email" type="email" placeholder="Enter Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <div class="change-btn">
        <p>first time here? </p>
        <a @click.prevent="toRegister">Register</a>
      </div>
      <button class="form-btn">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },
    login () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('updateLoginStatus', true)
          this.$router.push('/').catch(() => {})
        })
        .catch(({ response }) => {
          console.log(response.message)
        })
    }
  }
}
</script>

<style scoped>
</style>
