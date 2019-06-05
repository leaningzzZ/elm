<template>
  <el-container style="margin:40px 56px 0px 56px;">
    <el-aside width="170px">
      <el-menu :default-openeds="['1', '5']" class="asideMenu">
        <el-menu-item index="1-1" class="nav">
         <i class="el-icon-s-home"></i>个人中心
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span class="nav">我的订单</span>
          </template>
            <el-menu-item index="2-1">近三个月订单</el-menu-item>
        </el-submenu>
        <!-- <el-submenu index="3">
          <template slot="title" class="nav">
            <i class="el-icon-coin"></i>
            <span class="nav">我的资产</span>
          </template>
            <el-menu-item index="3-1">我的红包</el-menu-item>
            <el-menu-item index="3-2">账户余额</el-menu-item>
            <el-menu-item index="3-3">我的金币</el-menu-item>
        </el-submenu> -->
        <el-submenu index="4">
          <template slot="title" class="nav">
            <i class="el-icon-user" ></i>
            <span class="nav">我的资料</span>
          </template>
            <el-menu-item index="4-1">个人资料</el-menu-item>
            <el-menu-item index="4-2">地址管理</el-menu-item>
        </el-submenu>
        <el-menu-item index="5-1" class="nav"> 
            <i class="el-icon-star-off"></i>我的收藏
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
        <el-dropdown>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
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

