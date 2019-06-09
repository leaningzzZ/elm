<template>
  <div>
    <div class="topbar">
      <tab></tab>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import tab from "../tab/tab";
export default {
  components: {
    tab,
  }
};
</script>
<style scoped>
.topbar {
  width: 100%;
  background-color: #1e89e0;
}
.container {
  width: 1260px;
  margin: 0 auto;
}
</style>
