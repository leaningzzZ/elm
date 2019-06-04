<template>
  <div class="container">
    <login-page></login-page>
  </div>
</template>
<script>
import loginPage from "./components/login/login"
export default {
  components:{
    loginPage,
  }
}
</script>
<style>
.container{
  height: 100%;
}
</style>
