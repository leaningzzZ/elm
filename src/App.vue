<template>
  <div class="container">
    <login-page v-if="!isLogined"></login-page>
    <home-page v-else></home-page>
  </div>
</template>
<script>
import loginPage from "./components/login/login"
import homePage from "./components/home/home"
export default {
  components:{
    loginPage,
    homePage
  },
  data(){
    return {
      isLogined:true
    }
  }
}
</script>
<style>
.container{
  height: 100%;
}
</style>
