<template>
  <div class="shopCart" :style="shopCartWidth">
    <div class="shopContent" v-if="show">
      <div class="shopContentHeader">
        <span>购物车</span>
      </div>
      <div class="goods">
        <ul class="goodBlock" v-for="(item,index) in goodData" :key="item.id">
          <span class="rstName">{{item.rstName}}</span>
          <li class="goodContent" v-for="good in goodData[index].goods" :key="good.id">
            <span class="goodName">{{good.goodName}}</span>
            <span class="goodNum">{{good.goodNum}}（份）</span>
            <span class="price">￥{{good.price}}</span>
          </li>
        </ul>
      </div>
      <div class="check">
        <el-button type="danger" @click="check" size="small" style="width:260px;">去结算</el-button>
      </div>
    </div>

    <div class="shopButton">
      <div class="middleButton">
        <div
          class="orderButton"
          @mouseover="buttonOver(($event))"
          @mouseleave="buttonLeave(($event))"
          @click="goMyorder"
        >
          <i class="el-icon-tickets"></i>
        </div>
        <div class="hr"></div>
        <div
          class="button"
          @mouseover="buttonOver(($event))"
          @mouseleave="buttonLeave(($event))"
          @click="showShopCart"
        >
          <div class="shopCartButton">
            <i class="el-icon-shopping-cart-2"></i>
            <span>购物车</span>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      title="确认支付"
      :visible.sync="dialogFormVisible"
      :modal="false"
      width="30%"
    >
      <el-form :model="form">
        <ul class="payGoodBlock" v-for="(item,index) in goodData" :key="item.id">
          <span class="payRstName">{{item.rstName}}</span>
          <li class="payGoodContent" v-for="good in goodData[index].goods" :key="good.id">
            <span class="payGoodName">{{good.goodName}}</span>
            <span class="payGoodNum">{{good.goodNum}}（份）</span>
            <span class="payPrice">￥{{good.price}}</span>
          </li>
        </ul>
        <p style="padding-left:32px;">收货地址</p>
        <el-select v-model="form.region" placeholder="请选择收货地址" style="padding-left:30px;">
          <el-option
            v-for="item in addressData"
            :key="item.id"
            :value="item.address"
            style="height:40px;padding-left:15px;line-height:24px;"
          >{{item.address}}</el-option>
        </el-select>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="finishPay">确认支付</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      show: false,
      shopCartWidth: "width:35px;",
      goodData: [
        {
          rstName: "湖南土菜馆",
          goods: [
            {
              goodName: "蛋炒饭",
              goodNum: "1",
              price: "1"
            },
            {
              goodName: "馒头",
              goodNum: "1",
              price: "2"
            }
          ]
        },
        {
          rstName: "湖南土菜馆",
          goods: [
            {
              goodName: "蛋炒饭",
              goodNum: "1",
              price: "1"
            },
            {
              goodName: "馒头",
              goodNum: "1",
              price: "2"
            }
          ]
        }
      ],
      addressData: []
    };
  },
  methods: {
    buttonOver: function(event) {
      let el = event.currentTarget;
      el.style.color = "#fff";
      el.style.backgroundColor = "#26a2ff";
    },
    buttonLeave: function(event) {
      let el = event.currentTarget;
      el.style.color = "#ccc";
      el.style.backgroundColor = "#504d53";
    },
    goMyorder() {
      this.$router.push({ name: "order" });
    },
    showShopCart() {
      this.show = !this.show;

      if (this.show == true) {
        this.shopCartWidth = "width:315px;";
      } else {
        this.shopCartWidth = "width:35px;";
      }
    },
    getAdress() {
      this.$api
        .get(`/address/get?userId=${sessionStorage.getItem("userId")}`)
        .then(res => {
          this.addressData = res.data;
          console.log(this.addressData);
        });
    },
    check() {
      this.dialogFormVisible = true;
      this.getAdress();
    },
    finishPay() {
      if (this.form.region == "") {
        this.$alert("请选择收货地址", "支付失败", {
          confirmButtonText: "确定"
        });
      } else {
        this.$alert('支付成功')
        this.dialogFormVisible = false;
      }
    }
  }
};
</script>
<style scoped>
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
li {
  height: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.hr {
  background-color: #737074;
  width: 20px;
  height: 1px;
  margin-left: auto;
  margin-right: auto;
}
.shopCart {
  color: #ccc;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 315px;
  background-color: #504d53;
}
.shopContentHeader {
  height: 35px;
  background-color: #fff;
  color: #333333;
  padding: 5px 10px;
  box-sizing: border-box;
}
.check {
  position: absolute;
  padding: 20px 10px;
  text-align: right;
  border-top: 1px solid #ddd;
  width: 280px;
  box-sizing: border-box;
  bottom: 0;
  background: #fff;
}
.goodBlock {
  color: #666666;
  font-size: 12px;
  background-color: #fff;
  margin-top: 10px;
}
.goodName {
  float: left;
  padding-left: 15px;
  width: 105px;
}
.goodNum {
  float: left;
}
.price {
  float: right;
  padding-right: 30px;
  color: #f17539;
  font-weight: 800;
}
.rstName {
  display: block;
  padding-top: 8px;
  margin-left: 10px;
  margin-right: 5px;
  padding-bottom: 5px;
  border-bottom: #ddd 1px solid;
}
.middleButton {
  position: absolute;
  width: 35px;
  margin-top: 220px;
  font-size: 20px;
  text-align: center;
}
.orderButton {
  height: 37px;
  cursor: pointer;
}
.button {
  width: 35px;
  cursor: pointer;
}
.shopCartButton {
  width: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8px;
}
.shopCartButton span {
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 0px;
}
.shopButton {
  position: relative;
  width: 35px;
  height: 100%;
}
.shopContent {
  position: fixed;
  height: 100%;
  margin-left: 35px;
  width: 280px;
  background-color: #e6e6e6;
}
.payGoodBlock {
  color: #666666;
  font-size: 14px;
  margin-left: 10px;
  background-color: #fff;
  margin-bottom: 20px;
}
.payRstName {
  display: block;
  padding-top: 8px;
  margin-left: 10px;
  margin-right: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  border-bottom: #ddd 1px solid;
}
.payGoodName {
  float: left;
  padding-left: 35px;
  width: 205px;
}
.payGoodNum {
  float: left;
}
.payPrice {
  float: right;
  padding-right: 30px;
  color: #f17539;
  font-weight: 800;
}
</style>
