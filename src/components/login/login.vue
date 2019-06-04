<template>
  <el-container class="content">
    <el-header height="100px"></el-header>
    <el-main>
      <div class="main-body">
        <img
          style="width:220px"
          src="../../image/blmLogo.png"
          alt="eleme">
          <el-form :model="loginData" :rules="rules" ref="ruleForm" label-width="0px" class="loginForm">
            <el-form-item prop="name">
              <el-input class="input" v-model="loginData.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input class="input" v placeholder="请输入密码" v-model="loginData.password" show-password></el-input>
            </el-form-item>
            <el-form-item prop="submit">
              <el-button class="button" type="success">登陆</el-button>
            </el-form-item>
          </el-form>
        <!-- <form action>
          <div class="form">
            <el-input class="input" v-model="username" placeholder="请输入用户名"></el-input>
            <el-input class="input" v placeholder="请输入密码" v-model="password" show-password></el-input>
            <el-button class="button" type="success">登陆</el-button>
          </div>
        </form> -->
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      loginData:{
        username: "",
      password: "",
      },
      rules:{
        name:[
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        {max:18,min:5}
        ]
      }
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
.loginForm{
  width: 30%;
  margin: 0 auto;
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
