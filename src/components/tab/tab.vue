<template>
  <div class="container">
    <ul class="topbar">
      <li class="topItem">
        <img style="height:58px" src="../../image/blmLogoSimple.png" alt>
      </li>
      <li class="active topItem">
        <a href="#">首页</a>
      </li>
      <li class="topItem">
        <a href="#">我的订单</a>
      </li>
      <span class="rightnav">
        <li class="topItem">
          <span class="userName">userName</span>
          <span class="icon">
            <i class="el-icon-arrow-down"></i>
          </span>
        </li>
      </span>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.topbar {
  width: 100%;
  list-style: none; /* 将默认的列表符号去掉 */
  margin: 0;
  padding: 0;
  height: 60px;
}
.topItem {
  float: left;
  display: block;
  height: 100%;
  line-height: 60px;
  min-width: 120px;
  text-align: center;
}
.topItem a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  display: block;
  height: 100%;
  min-width: 120px;
}
.topItem a:hover {
  background: #0c77d1;
}
.active {
  background-color: #006bc7;
}
.rightnav {
  float: right;
  height: 60px;
}
.userName {
  color: #fff;
}
.icon {
  color: #d5efff;
  margin-left: 8px;
  margin-right: 3px;
  cursor: pointer;
  background: #449be5;
  border-radius: 3px;
  text-align: center;
  font-size: 20px;
  vertical-align: middle;
}
</style>
