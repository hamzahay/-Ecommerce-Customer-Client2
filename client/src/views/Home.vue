<template>
  <div class="home">
    <Navbar/>
    <MainPage/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import MainPage from '../components/MainPage'

export default {
  name: 'Home',
  components: {
    Navbar,
    MainPage
  }
}
</script>
