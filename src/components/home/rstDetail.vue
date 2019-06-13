<template>
  <el-container v-loading="loading">
    <el-header class="header">
      <div class="headerContent">
        <div class="rstInformation">
          <div class="rst">
            <img :src="rstInfo.storeImage">
            <div class="rstDesc">
              <span class="rstName">{{rstInfo.storeName}}</span>
              <span class="star">
                <el-rate v-model="rstInfo.storeComment" style="margin-top: 8px;" disabled></el-rate>
              </span>
            </div>
          </div>
        </div>
        <div class="delivery">
          <span class="deliveryTime">
            <p>平均送达速度</p>
            <p>{{rstInfo.storeTime}}分钟</p>
          </span>
          <span class="deliveryPrice">
            <p>配送费</p>
            <p>配送费￥{{rstInfo.storeShippingFee}}</p>
          </span>
          <!-- <span class="deliveryStartPrice">
            <p>起送价</p>
            <p>{{rstData.startPrice}}元</p>
          </span> -->
          <!-- <div class="collect" @click="collect">
            <i v-if="!rstData.isCollect" class="el-icon-star-off"></i>
            <i v-else class="el-icon-star-on"></i>
            <div v-if="!rstData.isCollect">收藏</div>
            <div v-else>取消收藏</div>
          </div> -->
          <div class="collect">
            <i class="el-icon-star-off"></i>
            <div >收藏</div>
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
          <div class="foodBlock" v-for="(item,index) in foodData" :key="item.id">
            <img :src="item.src">
            <div class="foodMain">
              <span class="foodBlockName">{{item.Pname}}</span>
              <el-rate
                v-model="item.comentMark"
                style="display:inline-block;float:left;line-height:20px;"
                disabled
              ></el-rate>
              <span class="foodBlockSale">已售{{item.Pcount}}份</span>
              <span class="foodBlockPrice">￥{{item.price}}</span>
            </div>
            <el-button
              type="primary"
              round
              size="mini"
              style="position:absolute;bottom:10px;right:10px;"
              @click="addTOShopCar(rstInfo.storeId,rstInfo.storeName,item.Pname,item.price,item.id)"
            >加入购物车</el-button>
          </div>
        </div>
        <div v-if="select == 'rate'" class="rate">
          <p>评价</p>
          <el-table :data="tableData" style="width: 850px">
            <el-table-column type="expand">
              <template>
                <el-form label-position="left" inline class="demo-table-expand">
                  <div v-for="item in (tableData[0].foodRate)" :key="item.id">
                    <el-form-item style="font-size:14px;">
                      <span>{{ item.name }}</span>
                    </el-form-item>
                    <el-form-item style="padding-top:10px;padding-left:30px;">
                      <el-rate
                        v-model="item.rate"
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                        show-text
                        disabled
                      ></el-rate>
                    </el-form-item>
                  </div>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="用户" prop="name" width="120"></el-table-column>
            <el-table-column label="评价" prop="rate"></el-table-column>
          </el-table>
        </div>
        <div class="message">
          <div class="messageTitle">
            <p>商家公告</p>
          </div>
          <div class="messageConcent">
            <p>{{rstInfo.storeDesc}}</p>
          </div>
          <div class="messageDelivery">
            <p>配送说明：</p>
            <p>配送费￥{{rstInfo.storeShippingFee}}</p>
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
          name: "刘喆",
          rate: "不好吃",
          foodRate: [
            {
              name: "经典麦辣鸡腿汉堡大套餐-椰子水饮 494ml",
              rate: 5
            },
            {
              name: "奥利奥麦旋风",
              rate: 4
            },
            {
              name: "经典麦辣鸡腿汉堡",
              rate: 3
            },
            {
              name: "经典麦辣鸡腿汉堡中套餐-大可乐 660ml",
              rate: 2
            },
            {
              name: "海陆空经典三人餐",
              rate: 1
            },
          ]
        },
        {
          name: "刘吉吉",
          rate: "就那样"
        },
        {
          name: "liuzhe",
          rate: "一般般"
        },
        {
          name: "liujiji",
          rate: "还不如包包菜包包"
        },
      ],//评论
      select: "food",
      foodStyle: {
        color: "#0089DC",
        borderBottom: "2px soild #0089DC"
      },
      rateStyle: {
        color: "#333333",
        borderBottom: "none"
      },
      foodData: [],
      rstInfo: "",
      loading: false
    };
  },
  created() {
    this.initData();
    this.clearShopCar();//页面初始化，清空购物车
  },
  methods: {
    initData() {
      this.rstInfo = this.$route.params.rst;
      this.getRstData(this.rstInfo.storeId)
      this.addTOShopCar(this.rstInfo.storeId,this.rstInfo.storeName)
      console.log(this.rstInfo);
    },
    // getRstComment(id){
    //   this.loading=true
    //   this.$api.get(`comment/get?id=${id}`).then(res=>{
    //     // this.foodData=res.data;
    //     console.log(this.foodData)
    //     this.loading=false
    //   }).catch(err=>{
    //     this.$notify.error({
    //         title: "错误",
    //         message: "获取数据失败，请稍后重试"
    //       });
    //   }).finally(()=>{
    //     this.loading=false
    //   })
    // },
    getRstData(id){
      this.loading=true
      this.$api.get(`product/list?storeId=${id}`).then(res=>{
        this.foodData=res.data;
        console.log(this.foodData)
        this.loading=false
      }).catch(err=>{
        this.$notify.error({
            title: "错误",
            message: "获取数据失败，请稍后重试"
          });
      }).finally(()=>{
        this.loading=false
      })
    },
    // collect() {
    //   this.rstData.isCollect = !this.rstData.isCollect;
    // },
    selectFood() {
      this.select = "food";

      this.foodStyle.color = "#0089DC";
      this.foodStyle.borderBottom = "2px soild #0089DC";
      this.rateStyle.color = "#333333";
      this.rateStyle.borderBottom = "none";
    },
    selectRate() {
      this.select = "rate";
      this.getRstComment(this.rstInfo.storeId)
      this.foodStyle.color = "#333333";
      this.foodStyle.borderBottom = "none";
      this.rateStyle.color = "#0089DC";
      this.rateStyle.borderBottom = "2px soild #0089DC";
    },
    addTOShopCar(rstId,rstName,Pname,Pprice,Pid){
      let params={
        "pInfo":{
          "name":Pname,
          "id":Pid,
          "price":Pprice,
        },
        "rstInfo":{
        "rstName":rstName,
        "rstId":rstId
        }
      }
      this.$store.commit("addIntoShopCar",params)
    },
    clearShopCar(){
      this.$store.commit("clearShopCar")
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
.tableRow {
  margin: 0;
}
.message {
  color: #fff;
  position: absolute;
  right: 50px;
  top: 44px;
  width: 278px;
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
