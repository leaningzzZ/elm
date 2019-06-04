<template>
  <el-container class="content">
    <el-header height="100px">
      <div class="header">
        <el-link target="_blank" :disabled = "!disabled" @click="goLogin">登陆</el-link>
        |
        <el-link target="_blank" :disabled = "disabled" @click="goSign">注册</el-link>
      </div>
    </el-header>
    <el-main>
      <!-- 登陆表单 -->
      <div class="login" v-if="!disabled">
        <img style="width:220px" src="../../image/blmLogo.png" alt="eleme">
        <el-form
          :model="loginData"
          :rules="rules"
          ref="ruleForm"
          label-width="0px"
          class="loginForm">
          <el-form-item prop="name">
            <el-input class="input" v-model="loginData.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input class="input" v placeholder="请输入密码" v-model="loginData.pwd" show-password></el-input>
          </el-form-item>
          <el-form-item prop="submit">
            <el-button class="button" type="success">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 注册表单 -->
      <div class="sign" v-else>
        <img style="width:220px" src="../../image/blmLogo.png" alt="eleme">
        <el-form
          :model="loginData"
          :rules="rules"
          ref="ruleForm"
          label-width="0px"
          class="loginForm">
          <el-form-item prop="name">
            <el-input class="input" v-model="loginData.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input class="input" v placeholder="请输入密码" v-model="loginData.pwd" show-password></el-input>
          </el-form-item>
          <el-form-item prop="submit">
            <el-button class="button" type="success">完成注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      disabled:true,
      loginData: {
        name: "",
        pwd: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods:{
    goLogin:function(){
      this.disabled = !this.disabled
    },
    goSign:function()
    {
      this.disabled = !this.disabled

    }
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
.header{
  float: right;
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
.login {
  text-align: center;
}
.sign {
  text-align: center;
}
.loginForm {
  width: 25%;
  margin: 0 auto;
}
.input {
  width: 100%;
  margin-top: 10px;
}
.form {
  display: inline-block;
  width: 300px;
}
.el-form-item__error {
  left: 15px;
}
.button {
  margin-top: 15px;
  width: 100%;
}
</style>
                                                                                                      