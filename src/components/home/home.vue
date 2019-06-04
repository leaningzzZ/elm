<template>
    <div>
        <div class="topbar">
    <tab></tab>
  </div>
    <home-body class="homeBody"></home-body>
    </div>
</template>
<script>
import tab from "../tab/tab"
import homeBody from "./homeBody"
export default {
  components:{
    tab,
    homeBody
  }
}
</script>
<style scoped>
.topbar{
  width: 100%;
  background-color:#1e89e0
}
.container{
  width:1260px;
  margin: 0 auto;

}

</style>
