<template>
  <el-container class="content">
    <el-header height="100px"></el-header>
    <el-main>
      <div class="main-body">
        <img
          style="width:220px"
          src="../../image/blmLogo.png"
          alt="eleme"
        >
        <form action>
          <div class="form">
            <el-input class="input" v-model="username" placeholder="请输入用户名"></el-input>
            <el-input class="input" v placeholder="请输入密码" v-model="password" show-password></el-input>
            <el-button class="button" type="success">登陆</el-button>
          </div>
        </form>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
.container {
  height: 100%;
}
.content {
  padding-top: 40px;
  height: 100%;
}
.header-left {
  float: left;
  vertical-align: middle;
}
.header-right {
  color: #fff;
  margin-top: 30px;
}
.main-body {
  text-align: center;
}
.input {
  width: 300px;
  margin-top: 10px;
}
.form {
  display: inline-block;
  width: 300px;
}
.button {
  margin-top: 15px;
  width: 300px;
}
</style>
