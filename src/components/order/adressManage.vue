<template>
  <div class="addressBox" v-loading="loading">
    <div class="addressHeader">
      <div>地址管理</div>
    </div>
    <div class="addressContent">
      <div
        class="addressBlock"
        v-for="item in addressData"
        :key="item.address_id"
        @mouseout="addressBlockMouseLeave(($event))"
        @mouseover="addressBlockMouseOver(($event))"
        :style="addressBlockStyle">
        <span class="name">{{item.name}}</span>
        <span class="sex">{{item.gender}}</span>
        <span class="address">{{item.address}}</span>
        <span class="phone">{{item.telephone}}</span>
        <el-button type="text" style="padding:0;position:absolute;right:60px;top:20px;">修改</el-button>
        <el-button type="text" @click="deleteAdress(item.address_id)" style="padding:0;position:absolute;right:20px;top:20px;">删除</el-button>
      </div>
      <div
        class="newAddress"
        @click="dialogFormVisible = true"
        @mouseout="addressBlockMouseLeave(($event))"
        @mouseover="addressBlockMouseOver(($event))">
        <span>
          <i class="el-icon-plus"></i>
          添加新地址
        </span>
      </div>
      <el-dialog title="添加新地址" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" ref="ruleForm">
          <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
            <el-input
              v-model="form.name"
              autocomplete="off"
              style="width:200px;"
              placeholder="请输入您的姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
            <el-radio-group v-model="radio">
              <el-radio :label="1">先生</el-radio>
              <el-radio :label="2">女士</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="位置" :label-width="formLabelWidth" prop="region">
            <el-input
              v-model="form.region"
              autocomplete="off"
              style="width:200px;"
              placeholder="请输入小区、大厦或学校"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号" :label-width="formLabelWidth"             prop="phone">
            <el-input
              v-model.number="form.phone"
              autocomplete="off"
              style="width:150px;"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addAdress('ruleForm')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  created(){
    this.getAdress()
  },
  data() {
    return {
      addressBlockStyle: "",
      radio: 1,
      sex:1,
      addressData: [],
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        phone: "",
      },
      loading:false,
      formLabelWidth: "120px",
      rules:{
        name:[
          {required: true, message: '请输入姓名', trigger: 'blur'}
        ],
        region:[
          {required: true, message: '请输入收货地址', trigger: 'blur'}
        ],
        phone:[
          {required:true,message:'请输入手机号码',trigger:'blur'},
          {type:"number",message:"请输入数字"}
        ]

      }
    };
  },
  methods: {
    addressBlockMouseOver: function(event) {
      let el = event.currentTarget;
      el.style.border = "1px solid #0089dc";
    },
    addressBlockMouseLeave: function(event) {
      let el = event.currentTarget;
      el.style.border = "1px solid #ddd";
    },
    addAdress(formname){
      this.$refs[formname].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false;
          if(this.radio==1){this.sex="先生"}else if(this.radio==2){this.sex="女士"}
          this.$api.get(`/address/add?json={"address":"${this.form.region}","name":"${this.form.name}","gender":"${this.sex}","telephone":"${this.form.phone}","user_id":"${sessionStorage.getItem('userId')}"}`).then(res=>{
            this.$notify.success({
              message: '添加成功',
              showClose: false
            });
            this.getAdress()
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    getAdress(){
      this.$api.get(`/address/get?userId=${sessionStorage.getItem('userId')}`).then(res=>{
        this.addressData=res.data;
        console.log(this.addressData)
      })
    },
    deleteAdress(id){
      this.loading=true
      this.$api.get(`/address/delete?addressId=${id}`).then(res=>{
        console.log(res)
        this.loading=false;
        this.$notify.success({
          message: '删除成功',
          showClose: false
        });
        this.getAdress()
      })
    }
  }
};
</script>
<style scoped>
.addressBox {
  padding: 20px 40px 0px 40px;
  background-color: #fff;
  min-height: 400px;
}
.addressHeader div {
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 2px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f4f4f4;
}
.addressContent {
  height: 100%;
  margin-top: 20px;
}
.addressBlock {
  position: relative;
  float: left;
  width: 32%;
  min-width: 242px;
  height: 110px;
  margin: 0px 10px 15px 0px;
  box-sizing: border-box;
  padding: 16px 12px 16px 20px;
  border: 1px solid #ddd;
  cursor: pointer;
}

.addressBlock span {
  font-size: 14px;
}
.name {
  margin-right: 8px;
}
.address {
  margin-top: 5px;
  display: block;
  color: #666666;
}
.phone {
  color: #666666;
}
.newAddress {
  position: relative;
  float: left;
  width: 32%;
  min-width: 242px;
  height: 110px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
}
.newAddress span {
  line-height: 110px;
}
</style>
