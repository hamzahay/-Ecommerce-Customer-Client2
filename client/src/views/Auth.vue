<template>
  <div class="auth-container">
    <div class="left-auth">
      <img v-if="!arrowHover" @mouseover="changeArrow"
      style="height: 17px; margin-right: 100%; padding: 5px; position: relative; cursor: pointer;"
      src="../assets/left-arrow-2.png" alt="home arrow icon">
      <img v-else @mouseout="changeArrow" @click.prevent="toHome"
      style="height: 17px; margin-right: 100%; padding: 5px; position: relative; cursor: pointer;"
      src="../assets/left-arrow.png" alt="home arrow icon">
      <div class="content-container">
        <h2>Welcome to BLEBLE</h2>
        <p>keep in touch with us for new product and new offer for you everyday</p>
      </div>
      <img src="../assets/bg.jpg" alt="">
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Auth',
  data () {
    return {
      arrowHover: false
    }
  },
  methods: {
    changeArrow () {
      if (this.arrowHover === false) {
        this.arrowHover = true
      } else {
        this.arrowHover = false
      }
    },
    toHome () {
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>

<style>
  .auth-container {
    margin: 100px auto;
    border: 1px solid grey;
    border-radius: 4px;
    width: 800px;
    height: 450px;
    display: flex;
    box-shadow: 0px 0px 8px grey;
  }

  .left-auth {
    border-right: 1px solid rgb(207, 207, 207);
    width: 400px;
    height: auto;
    background-color: rgb(87, 201, 238);
    overflow: hidden;
  }

  .left-auth img {
    height: 225px;
    overflow: hidden;
    bottom: 0px;
  }

  .content-container {
    margin-top: 60px;
    margin-bottom: 25px;
    width: 100%;
  }

  .content-container p {
    margin: 0px auto;
    width: 350px;
  }

  .right-auth {
    background-color: white;
    width: 400px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    width: 230px;
    margin: 130px auto;
  }

  .form-container h1 {
    margin: 0px;
  }

  .form-container input {
    margin-top: 10px;
    height: 30px;
    font-size: 16px;
    padding-left: 3px;
  }

  .change-btn {
    display: flex;
    justify-content: space-between;
    padding: 0px 5px;
    margin-top: 5px;
  }

  .change-btn p {
    font-size: 13px;
    margin: 0px;
  }

  .change-btn a {
    border: none;
    font-size: 13px;
    background-color: transparent;
    color: rgb(81, 81, 255);
    cursor: pointer;
  }

  .change-btn a:hover {
    transition: 0.25s ease;
    color: blue;
  }

  .form-container .form-btn {
    margin: 15px auto;
    border: none;
    background-color: rgb(89, 158, 236);
    width: 125px;
    height: 30px;
    border-radius: 3px;
    color: white;
    cursor: pointer;
  }

  .form-container .form-btn:hover {
    transition: 0.25s ease;
    background-color: rgb(58, 141, 236);
  }
</style>
