<template>
  <div class="container">
    <login-page v-if="!isLogined"></login-page>
    <home-page v-else></home-page>
    <shop-cart v-if="isLogined"></shop-cart>
  </div>
</template>
<script>
import loginPage from "./components/login/login"
import homePage from "./components/home/home"
import shopCart from "./components/shopCart/shopCart"
export default {
  components:{
    loginPage,
    homePage,
    shopCart
  },
  data(){
    return {
      isLogined:sessionStorage.getItem('logined')
    }
  },
}
</script>
<style>
.container{
  height: 100%;
}
</style>
