<template>
  <div class="addressBox">
    <div class="addressHeader">
      <div>地址管理</div>
    </div>
    <div class="addressContent">
      <div
        class="addressBlock"
        v-for="item in addressData"
        :key="item.id"
        @mouseout="addressBlockMouseLeave(($event))"
        @mouseover="addressBlockMouseOver(($event))"
        :style="addressBlockStyle">
        <span class="name">{{item.name}}</span>
        <span class="sex">{{item.sex}}</span>
        <span class="address">{{item.address}}</span>
        <span class="phone">{{item.phone}}</span>
        <el-button type="text" style="padding:0;position:absolute;right:60px;top:20px;">修改</el-button>
        <el-button type="text" style="padding:0;position:absolute;right:20px;top:20px;">删除</el-button>
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
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input
              v-model="form.name"
              autocomplete="off"
              style="width:200px;"
              placeholder="请输入您的姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-radio v-model="radio" label="先生">先生</el-radio>
            <el-radio v-model="radio" label="女士">女士</el-radio>
          </el-form-item>
          <el-form-item label="位置" :label-width="formLabelWidth">
            <el-input
              v-model="form.region"
              autocomplete="off"
              style="width:200px;"
              placeholder="请输入小区、大厦或学校"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号" :label-width="formLabelWidth">
            <el-input
              v-model="form.phone"
              autocomplete="off"
              style="width:150px;"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addAdress">确 定</el-button>
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
      radio: "男",
      addressData: [
        {
          name: "蔡",
          sex: "先生",
          address: "安悦公寓",
          phone: "13186196120"
        },
        {
          name: "蔡",
          sex: "先生",
          address: "安悦公寓",
          phone: "13186196120"
        },
        {
          name: "蔡",
          sex: "先生",
          address: "安悦公寓",
          phone: "13186196120"
        }
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        phone: "",
      },
      formLabelWidth: "120px"
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
    addAdress(){
      this.dialogFormVisible = false;
      // let formData={"address":this.form.region,"name":this.form.name,"gender":"男","telephone":123213,"user_id":sessionStorage.getItem('userId')}
      console.log(sessionStorage.getItem('userId'))
      this.$api.get(`/address/add?json={"address":"${this.form.region}","name":"${this.form.name}","gender":"男","telephone":"${this.form.phone}","user_id":${sessionStorage.getItem('userId')}}`).then(res=>{
        console.log(res)
      })
    },
    getAdress(){
      this.$api.get(`/address/get?userId=${sessionStorage.getItem('userId')}`).then(res=>{
        console.log(res)
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
