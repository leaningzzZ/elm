<template>
  <div class="container">
    <ul class="topbar">
      <li class="topItem">
        <img
          style="height:33px;margin-top:12px;margin-right:20px;"
          src="../../image/blmLogoSimple.png"
          alt
        >
      </li>
      <li class="active topItem" @click="goHomePage">
        <a href="#">首页</a>
      </li>
      <li class="topItem" @click="goMyorder">
        <a href="#">我的订单</a>
      </li>
      <span class="rightnav">
        <li class="topItem" v-popover:popover>
          <span class="userName">你好，{{this.username}}</span>
          <!-- <span class="icon">
            <i class="el-icon-arrow-down"></i>
          </span> -->
          <span class="out" @click="out">退出登陆</span>
        </li>
      </span>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      username:""
    }
  },
  methods: {
    goHomePage() {
      this.$router.push({ name: "home" });
    },
    goMyorder() {
      this.$router.push({ name: "order" });
    },
    goPath(path){
      this.$router.push({name: path})
    },
    out(){
      sessionStorage.clear();
      this.$router.go(0);
    }
  },
  created(){
    this.username=sessionStorage.getItem('username');
  }
};
</script>
<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
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
.out{
  font-size: 14px;
  color: #fff;
  margin-left:20px;
  cursor: pointer;
}
.out:hover{
  color:cornflowerblue
}
/* .icon {
  color: #d5efff;
  margin-left: 8px;
  margin-right: 3px;
  cursor: pointer;
  background: #449be5;
  border-radius: 3px;
  text-align: center;
  font-size: 20px;
  vertical-align: middle;
} */
</style>
