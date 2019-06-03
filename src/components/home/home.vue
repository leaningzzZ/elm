<template>
    <el-container class="content">
      <el-header height="200px">
          <img class="header-left" style="width:130px" src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt="">
          <!-- <span class="header-right">
              <a href="#">登陆</a>
              <span>|</span>
              <a href="#">注册</a>
          </span> -->
      </el-header>
      <el-main>
            <div class="main-body">
              <img style="height:100%;" src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt="eleme">
            </div>
            <div class="main-body">
                <el-button type="primary" size="small">主要按钮</el-button> 
                <el-button type="primary" size="small">主要按钮</el-button>
            </div>
      </el-main>
      <el-footer>assda</el-footer>
    </el-container>
</template>
<script>
export default {

};
</script>
<style scoped>
a{
    text-decoration: none;
    color:#fff
}
.container{
    height: 100%;
}
.content{
    padding-top: 40px;
        height: 100%;
}
.header-left{
    float: left;
    vertical-align: middle;
}
.header-right{
    color: #fff;
    margin-top: 30px;
}
.main-body{
    height: 120px;
    text-align: center;
}
.main-body span{
    color: #fff;
}
</style>
