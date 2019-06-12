<template>
  <el-container>
    <el-header class="header">
      <div class="headerContent">
        <div class="rstInformation">
          <div class="rst">
            <img :src="rstData.logo">
            <div class="rstDesc">
              <span class="rstName">{{rstData.name}}</span>
              <span class="star">
                <el-rate v-model="rstData.star" style="margin-top: 8px;" disabled></el-rate>
              </span>
            </div>
          </div>
        </div>
        <div class="delivery">
          <span class="deliveryTime">
            <p>平均送达速度</p>
            <p>{{rstData.time}}分钟</p>
          </span>
          <span class="deliveryPrice">
            <p>配送费</p>
            <p>配送费￥{{rstData.price}}</p>
          </span>
          <span class="deliveryStartPrice">
            <p>起送价</p>
            <p>{{rstData.startPrice}}元</p>
          </span>
        </div>
      </div>
    </el-header>
    <el-main style="height:1000px;">
      <div class="food">
        <p>全部商品</p>
        <div class="foodBlock" v-for="item in foodData" :key="item.id">
          <img :src="item.logo">
          <div class="foodMain">
            <span class="foodBlockName">{{item.name}}</span>
            <el-rate
              v-model="item.star"
              style="display:inline-block;float:left;line-height:20px;"
              disabled
            ></el-rate>
            <span class="foodBlockSale">月售{{item.sale}}份</span>
            <span class="foodBlockPrice">￥{{item.price}}</span>
          </div>
          <el-button
            type="primary"
            round
            size="mini"
            style="position:absolute;bottom:10px;right:10px;"
          >加入购物车</el-button>
        </div>
        <div class="message">
          <div class="messageTitle">
            <p>商家公告</p>
          </div>
          <div class="messageConcent">
            <p>{{message}}</p>
          </div>
          <div class="messageDelivery">
            <p>配送说明：</p>
            <p>配送费￥{{rstData.price}}</p>
          </div>
          <div class="reportRst">
            <p>举报商家</p>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      rstData: {
        logo:
          "//fuss10.elemecdn.com/e/63/23054dfca5d9e008fc0972a3306c9jpeg.jpeg?imageMogr2/thumbnail/95x95/format/webp/quality/85",
        name: "湖南土菜馆（大雁塔店）",
        star: "5",
        time: 45,
        price: 0.1,
        startPrice: 15
      },
      foodData: [
        {
          logo:
            "//fuss10.elemecdn.com/2/db/2570a9ada62d6a42d77454da2c206jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
          name: "蛋炒饭",
          star: "5",
          sale: "47",
          price: 16
        },
        {
          logo:
            "//fuss10.elemecdn.com/9/cc/e2e26042378c6e8ad2e999e564455jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
          name: "酸辣土豆丝",
          star: "3",
          sale: "45",
          price: 12
        },
        {
          logo:
            "//fuss10.elemecdn.com/3/48/4c6fa697c07167181d3ac754e50f5jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
          name: "手工馒头",
          star: "5",
          sale: "200",
          price: 1.5
        },
        {
          logo:
            "//fuss10.elemecdn.com/3/48/4c6fa697c07167181d3ac754e50f5jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
          name: "手工馒头",
          star: "5",
          sale: "200",
          price: 1.5
        },
        {
          logo:
            "//fuss10.elemecdn.com/3/48/4c6fa697c07167181d3ac754e50f5jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
          name: "手工馒头",
          star: "5",
          sale: "200",
          price: 1.5
        }
      ],
      message:
        "大薯条或薯格买一送一限时优惠，同时全新推出和风牛丼饭套餐，更有多款下午茶套餐，伴你度过悠然的下午时光，美味缤纷停不下来！店铺优惠与折扣不同享",
      storeId: "",
      loading: true
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.storeId = this.$route.params.rstId;
      console.log(this.storeId);
    }
  }
};
</script>
<style scoped>
p {
  margin: 0;
  padding: 0;
}
.header {
  background-image: url("//shadow.elemecdn.com/faas/desktop/media/img/shop-bg.0391dd.jpg");
  height: 142px !important;
  padding: 0;
}
.headerContent {
  width: 1260px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.rstInformation {
  height: 100%;
  width: 480px;
  float: left;
}
.rstInformation img {
  margin-right: 15px;
  vertical-align: middle;
  width: 95px;
  height: 95px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
}
.rstDesc {
  display: inline-block;
  vertical-align: middle;
  height: 71px;
}
.rstName {
  font-size: 20px;
  color: #fff;
  max-width: 270px;
  height: 30px;
  margin: 0;
}
.rst {
  padding-top: 19.5px;
  padding-bottom: 19.5px;
  vertical-align: middle;
}
.delivery {
  float: left;
  width: 700px;
  height: 142px;
  box-sizing: border-box;
  padding-top: 39.5px;
  padding-bottom: 39.5px;
  padding-right: 100px;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.deliveryTime {
  float: right;
  width: 84px;
  margin-left: 80px;
}
.deliveryTime :first-child {
  font-size: 14px;
  margin-bottom: 12px;
}
.deliveryPrice {
  float: right;
  width: 100px;
  margin-left: 80px;
}
.deliveryPrice :first-child {
  font-size: 14px;
  margin-bottom: 12px;
}
.deliveryStartPrice {
  float: right;
  width: 100px;
}
.deliveryStartPrice :first-child {
  font-size: 14px;
  margin-bottom: 12px;
}
.food {
  position: relative;
  width: 1260px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  font-size: 20px;
  color: #333333;
}
.foodBlock {
  position: relative;
  float: left;
  background-color: #fff;
  height: 102px;
  width: 433.28px;
  margin-top: 14px;
  margin-right: 20px;
}
.foodBlock img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
}
.foodMain {
  position: absolute;
  left: 115px;
}
.foodBlockName {
  margin-top: 10px;
  float: left;
  font-size: 14px;
  width: 200px;
  font-weight: 800;
  color: #333333;
}
.foodBlockSale {
  float: left;
  font-size: 12px;
  color: #999999;
  width: 100px;
  line-height: 20px;
}
.foodBlockPrice {
  margin-top: 13px;
  float: left;
  width: 200px;
  font-size: 14px;
  color: #f74342;
  font-weight: 800;
}
.message {
  color: #fff;
  position: absolute;
  right: 50px;
  top: 44px;
  width: 278px;
  height: 322px;
  border-radius: 2px 2px 0 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
}
.messageTitle {
  background-color: #0089dc;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
}
.messageTitle p {
  padding-left: 16px;
}
.messageConcent {
  color: #333333;
  font-size: 14px;
  padding: 10px 15px 10px 15px;
  background-color: #fff;
  line-height: 2;
}
.messageDelivery {
  padding: 10px 15px 10px 15px;
  color: #333333;
  font-size: 14px;
}
.messageDelivery :first-child {
  font-weight: 900;
}
.reportRst {
  text-align: center;
  font-size: 18px;
  color: #666666;
  height: 55px;
  line-height: 55px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
</style>
