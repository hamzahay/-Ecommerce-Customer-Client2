<template>
  <div class="right-auth">
    <form @submit.prevent="register" class="form-container">
      <h1>REGISTER</h1>
      <input v-model="email" type="email" placeholder="Enter Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <div class="change-btn">
        <p>Already have an account? </p>
        <a @click.prevent="toLogin">Login</a>
      </div>
      <button class="form-btn">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    register () {
      this.$store.dispatch('register', { email: this.email, password: this.password })
        .then(() => {
          return this.$store.dispatch('login', { email: this.email, password: this.password })
        })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('updateLoginStatus', true)
          this.$router.push('/')
          this.email = ''
          this.password = ''
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
