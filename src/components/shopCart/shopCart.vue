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
        <el-button type="danger" size="small" style="width:260px;">去结算</el-button>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      shopCartWidth: "width:315px;",
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
      ]
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
    changeShow() {}
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
li{
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
  width:105px;
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
</style>
