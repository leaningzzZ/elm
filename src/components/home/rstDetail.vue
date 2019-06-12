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
          <div class="collect" @click="collect">
            <i v-if="!rstData.isCollect" class="el-icon-star-off"></i>
            <i v-else class="el-icon-star-on"></i>
            <div v-if="!rstData.isCollect">收藏</div>
            <div v-else>取消收藏</div>
          </div>
        </div>
      </div>
    </el-header>
    <div class="nav">
      <div class="navContent">
        <span @click="selectFood" :style="foodStyle">全部商品</span>
        <span @click="selectRate" :style="rateStyle">评价</span>
      </div>
    </div>

    <el-main style="height:1000px;">
      <div class="food">
        <div class="foodContent" v-if="select == 'food'">
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
        </div>
        <div v-if="select == 'rate'" class="rate">
          <p>评价</p>
          <el-table :data="tableData" style="width: 850px">
            <el-table-column prop="name" label="用户" width="140"></el-table-column>
            <el-table-column prop="address" label="评价"></el-table-column>
            <div v-for="item in tableData.foodRate" :key="item.id">
              <span>{{item.name}}</span>
            </div>
          </el-table>
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
      tableData: [
        {
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          foodRate:[
            {
              name:'手工馒头',
              rate:5,
            },
            {
              name:'手工馒头',
              rate:5,
            },
            {
              name:'手工馒头',
              rate:5,
            },
            {
              name:'手工馒头',
              rate:5,
            },
          ]
        },
        {
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      select: "food",
      foodStyle: {
        color: "#0089DC",
        borderBottom: "2px soild #0089DC"
      },
      rateStyle: {
        color: "#333333",
        borderBottom: "none"
      },
      rstData: {
        logo:
          "//fuss10.elemecdn.com/e/63/23054dfca5d9e008fc0972a3306c9jpeg.jpeg?imageMogr2/thumbnail/95x95/format/webp/quality/85",
        name: "湖南土菜馆（大雁塔店）",
        star: "5",
        time: 45,
        price: 0.1,
        startPrice: 15,
        isCollect: false
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
    },
    collect() {
      this.rstData.isCollect = !this.rstData.isCollect;
    },
    selectFood() {
      this.select = "food";

      this.foodStyle.color = "#0089DC";
      this.foodStyle.borderBottom = "2px soild #0089DC";
      this.rateStyle.color = "#333333";
      this.rateStyle.borderBottom = "none";
    },
    selectRate() {
      this.select = "rate";
      this.foodStyle.color = "#333333";
      this.foodStyle.borderBottom = "none";
      this.rateStyle.color = "#0089DC";
      this.rateStyle.borderBottom = "2px soild #0089DC";
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
  position: relative;
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
.collect {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px 5px;
  width: 80px;
  text-align: center;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0 0 5px 5px;
}
.collect div {
  color: #eeeeee;
  font-size: 14px;
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
.nav {
  height: 57px;
  line-height: 57px;
  background-color: #fff;
}
.navContent {
  width: 1260px;
  margin-left: auto;
  margin-right: auto;
}
.navContent span {
  width: 102px;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  border-bottom: none;
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
