<template>
  <el-container style="margin:40px 56px 0px 56px;">
    <el-aside width="170px">
      <el-menu :default-openeds="['1', '5']" class="asideMenu">
        <el-menu-item index="1-1" class="nav" @click="goPath('aboutMe')">
         <i class="el-icon-s-home"></i>个人中心
        </el-menu-item>
        
        <el-menu-item index="2-1" class="nav" @click="goPath('myOrder')"> 
          <i class="el-icon-document"></i>我的订单
        </el-menu-item>
        <el-menu-item index="3-1" class="nav" @click="goPath('adressManage')"> 
          <i class="el-icon-s-flag"></i>地址管理
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods:{
    goPath(path){
      this.$router.push({name: path})
    }
  }
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
 
}
.asideMenu{
    background-color: #f7f7f7;
    border:none;
}
.nav{
    font-weight: 900;
    font-size: 18px;
}
</style>

