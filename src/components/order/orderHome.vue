<template>
  <el-container style="margin:40px 56px 0px 56px;">
    <el-aside width="170px">
      <el-menu :default-openeds="['1', '5']" class="asideMenu">
        <el-menu-item index="1-1" class="nav" @click="goPath('aboutMe')">
         <i class="el-icon-s-home"></i>个人中心
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span class="nav">我的订单</span>
          </template>
            <el-menu-item index="2-1" @click="goPath('myOrder')">近三个月订单</el-menu-item>
        </el-submenu>
        <el-menu-item index="4-1" class="nav" @click="goPath('adressManage')"> 
          <i class="el-icon-star-off"></i>地址管理
        </el-menu-item>
        <el-menu-item index="5-1" class="nav" @click="goPath('collect')"> 
            <i class="el-icon-star-off"></i>我的收藏
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-main style="  border: 1px solid black;">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
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

