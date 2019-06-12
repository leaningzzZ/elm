<template>
  <el-container class="content">
    <el-header height="100px">
      <div class="header">
        <el-link target="_blank" :disabled="disabled" @click="goLogin">登陆</el-link>|
        <el-link target="_blank" :disabled="!disabled" @click="goSign">注册</el-link>
      </div>
    </el-header>
    <el-main>
      <!-- 登陆表单 -->
      <div class="login" v-show="disabled">
        <img style="width:220px" src="../../image/blmLogo.png" alt="eleme">
        <el-form
          :model="loginData"
          :rules="loginRules"
          ref="loginForm"
          label-width="0px"
          class="loginForm">
          <el-form-item prop="userName">
            <el-input class="input" v-model="loginData.userName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              class="input"
              placeholder="请输入密码"
              v-model="loginData.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item prop="submit">
            <el-button class="button" type="success" @click="login">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 注册表单 -->
      <div class="sign" v-show="!disabled">
        <img style="width:220px" src="../../image/blmLogo.png" alt="eleme">
        <el-form
          :model="registData"
          label-width="0px"
          :rules="registRules"
          ref="registForm"
          class="loginForm">
          <el-form-item prop="registname">
            <el-input class="input" v-model="registData.registname" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="registpassword">
            <el-input class="input" v placeholder="请输入密码" v-model="registData.registpassword" show-password></el-input>
          </el-form-item>
          <el-form-item prop="submit">
            <el-button class="button" type="success" @click="sign">完成注册</el-button>
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
      disabled: true,
      loginData: {
        userName: "",
        password: ""
      },
      registData: {
        registname: "",
        registpassword: ""
      },
      loginRules:{
          userName: [
            { required: true, message: '请输入用户名',trigger: 'blur'},
            { min: 6, max: 18, message: '长度在 6 到 18 个字符',trigger: 'blur'}
          ],
          password: [
            { required: true, message: '请输入密码',trigger: 'blur'},
            { min: 6, max: 18, message: '长度在 6 到 18 个字符',trigger: 'blur'}
          ],
      },
      registRules:{
          registname: [
            { required: true, message: '请输入用户名',trigger: 'blur'},
            { min: 6, max: 18, message: '长度在 6 到 18 个字符',trigger: 'blur'}
          ],
          registpassword: [
            { required: true, message: '请输入密码',trigger: 'blur'},
            { min: 6, max: 18, message: '长度在 6 到 18 个字符',trigger: 'blur'}
          ],
      }
    };
  },
  methods: {
    goLogin: function() {
      this.registData.name="";
      this.registData.pwd="";
      this.$refs["registForm"].resetFields();
      this.disabled = !this.disabled;
    },
    goSign: function() {
      this.loginData.userName="";
      this.loginData.password="";
      this.$refs["loginForm"].resetFields();
      this.disabled = !this.disabled;
    },
    login() {
      this.$refs["loginForm"].validate((valid) => {
          if (valid) {
            this.$api.get(`/user/login?userName=${this.loginData.userName}&password=${this.loginData.registpassword}`).then(res => {
                if (res.data != "") {
                  //登陆成功
                  sessionStorage.setItem("logined", true);
                  sessionStorage.setItem("userId", res.data.userId);
                  sessionStorage.setItem("username", this.loginData.userName);
                  this.$router.go(0);//设置seesion后刷新页面
                } else {
                  this.$notify.error({
                    title: "错误",
                    message: "账号或密码错误，请核对后输入"
                  });
                }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    sign(){
      this.$refs["registForm"].validate((valid) => {
          if (valid) {
            this.$api.get(`/user/register?userName=${this.registData.registname}&password=${this.registData.pwd}`).then(res=>{
              if(res.data=="success"){
                this.$alert('注册成功', {
                  confirmButtonText: '立即登陆',
                  callback: () => {
                    this.$router.go(0);
                  }
                });
              }else if(res.data=="fail"){
                this.$alert('请换个用户名试试',"注册失败",{
                  confirmButtonText: '确定',
                });
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
.header {
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
                                                                                                      