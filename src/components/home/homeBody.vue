<template>
  <el-container class="container">
    <el-header class="header">
      <div class="location">
        <span style="color:#999999">当前位置：</span>西安邮电大学长安校区
      </div>
      <div class="search">
        <el-input
          placeholder="搜索商家,美食..."
          prefix-icon="el-icon-search"
          size="small"
          v-model="search"></el-input>
      </div>
    </el-header>
    <el-main>
      <div class="content">
        <div class="sort">
          <span>商家分类:</span>
          <el-link class="type" v-for="item in sortData" :key="item.id" target="_blank">{{item}}</el-link>
        </div>

        <div class="rstBox" v-infinite-scroll="load">
          <div class="rstBlock" v-for="item in rstData" :key="item.id" v-popover="item.id">
              <el-popover
              :ref="item.id"
              placement="right"
              width="250"
              popper-class="popover"
              :open-delay="200"
              trigger="hover">
              <div>
                  <div class="pop-top">
                    <h3 class="pop-title">{{item.name}}</h3>
                    <span class="pop-sort">{{item.sort}}</span>
                  </div>
                  <div class="pop-center">
                    <span class="pop-deliveryPrice">配送费￥{{item.delivery.price}}</span>
                    <span class="pop-deliveryTime">平均<span v-if="item.delivery.time<45">{{item.delivery.time}}</span><span v-else>45+</span>分钟送达</span>
                  </div>
                  <div class="pop-bottom">
                    <span class="pop-desc">{{item.desc}}</span>
                  </div>
              </div>
              </el-popover>

            <div class="leftBlock">
              <div class="rstPic">
                <img style="height:100%" :src="item.logo" alt>
              </div>
              <span v-if="item.delivery.time<45" class="rstDeliveryTime">{{item.delivery.time}}分钟</span>
              <span v-else class="rstDeliveryTime" style="color:#c00;">45+分钟</span>
            </div>
            <div class="rightBlock" v-popover:popover>
              <span class="rstName">{{item.name}}</span>
              <el-rate v-model="item.star" style="margin-top: 8px;" disabled></el-rate>
              <span
                v-if="item.delivery.price!=0"
                class="rstDeliveryPrice">配送费￥{{item.delivery.price}}元</span>
              <span v-else class="rstDeliveryPrice">免配送费</span>
            </div>
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
      search: "",
      sortData: [],
      rstData: [
        {
          name: "袁记肉夹馍", //商家名称
          id: 1, //商家ID，根据ID查询商家商品
          logo:
            "//fuss10.elemecdn.com/f/01/64bfb5b626d7fe626f503aff8c42fpng.png?imageMogr2/thumbnail/140x140/format/webp/quality/85", //图标img地址
          sort: "快餐便当", //分类：美食 快餐便当 特色菜系 异国料理 小吃夜宵 甜品饮品 果蔬生鲜 商店超市 鲜花绿植 医药健康 早餐 午餐 下午茶 晚餐夜宵
          star: 4.8, //评分星级
          desc: "", //商家描述
          delivery: {
            //配送信息：配送费，配送时间
            price: 0.1,
            time: 32
          },
          type: ["pei"] // 保，票，赔
        },
        {
          name: "乐宣老长沙龙虾馆(国色天香店)", //商家名称
          id: 2, //商家ID，根据ID查询商家商品
          logo:
            "//fuss10.elemecdn.com/9/be/8ebac070b443fc77b99d176f4749apng.png?imageMogr2/thumbnail/140x140/format/webp/quality/85", //图标img地址
          sort: "美食", //分类：美食 快餐便当 特色菜系 异国料理 小吃夜宵 甜品饮品 果蔬生鲜 商店超市 鲜花绿植 医药健康 早餐 午餐 下午茶 晚餐夜宵
          star: 4.9, //评分星级
          desc:
            "【乐宣—地道长沙味】订餐须知：1.确保您的电话畅通以保证送餐员及时联系您 2.如遇到特殊情况要取消订餐,请联系门店3.用餐高峰时段及天气恶劣的情况下,送餐时间不能保证,但承诺您会尽快送到 4.有任何建议请联系029-84192007", //商家描述
          delivery: {
            //配送信息：配送费，配送时间
            price: 6,
            time: 38
          },
          type: [] // 保，票，赔
        },
        {
          name: "白纸王川湘菜", //商家名称
          id: 3, //商家ID，根据ID查询商家商品
          logo:
            "//fuss10.elemecdn.com/5/6f/d20254e5861009f9145c9bb5a08e9jpeg.jpeg?imageMogr2/thumbnail/140x140/format/webp/quality/85", //图标img地址
          sort: "特色菜系", //分类：美食 快餐便当 特色菜系 异国料理 小吃夜宵 甜品饮品 果蔬生鲜 商店超市 鲜花绿植 医药健康 早餐 午餐 下午茶 晚餐夜宵
          star: 4.3, //评分星级
          desc: "欢迎新老顾客光临", //商家描述
          delivery: {
            //配送信息：配送费，配送时间
            price: 1.1,
            time: 48
          },
          type: ["bao", "pei"] // 保，票，赔
        },
        {
          name: "袁记肉夹馍", //商家名称
          id: 4, //商家ID，根据ID查询商家商品
          logo:
            "//fuss10.elemecdn.com/f/01/64bfb5b626d7fe626f503aff8c42fpng.png?imageMogr2/thumbnail/140x140/format/webp/quality/85", //图标img地址
          sort: "快餐便当", //分类：美食 快餐便当 特色菜系 异国料理 小吃夜宵 甜品饮品 果蔬生鲜 商店超市 鲜花绿植 医药健康 早餐 午餐 下午茶 晚餐夜宵
          star: 4.8, //评分星级
          desc: "", //商家描述
          delivery: {
            //配送信息：配送费，配送时间
            price: 0.1,
            time: 32
          },
          type: ["pei"] // 保，票，赔
        },
        {
          name: "乐宣老长沙龙虾馆(国色天香店)", //商家名称
          id: 5, //商家ID，根据ID查询商家商品
          logo:
            "//fuss10.elemecdn.com/9/be/8ebac070b443fc77b99d176f4749apng.png?imageMogr2/thumbnail/140x140/format/webp/quality/85", //图标img地址
          sort: "美食", //分类：美食 快餐便当 特色菜系 异国料理 小吃夜宵 甜品饮品 果蔬生鲜 商店超市 鲜花绿植 医药健康 早餐 午餐 下午茶 晚餐夜宵
          star: 4.9, //评分星级
          desc:
            "【乐宣—地道长沙味】订餐须知：1.确保您的电话畅通以保证送餐员及时联系您 2.如遇到特殊情况要取消订餐,请联系门店3.用餐高峰时段及天气恶劣的情况下,送餐时间不能保证,但承诺您会尽快送到 4.有任何建议请联系029-84192007", //商家描述
          delivery: {
            //配送信息：配送费，配送时间
            price: 6,
            time: 38
          },
          type: [] // 保，票，赔
        },
        {
          name: "白纸王川湘菜", //商家名称
          id: 6, //商家ID，根据ID查询商家商品
          logo:
            "//fuss10.elemecdn.com/5/6f/d20254e5861009f9145c9bb5a08e9jpeg.jpeg?imageMogr2/thumbnail/140x140/format/webp/quality/85", //图标img地址
          sort: "特色菜系", //分类：美食 快餐便当 特色菜系 异国料理 小吃夜宵 甜品饮品 果蔬生鲜 商店超市 鲜花绿植 医药健康 早餐 午餐 下午茶 晚餐夜宵
          star: 4.3, //评分星级
          desc: "欢迎新老顾客光临", //商家描述
          delivery: {
            //配送信息：配送费，配送时间
            price: 1.1,
            time: 40
          },
          type: ["bao", "pei"] // 保，票，赔
        }
      ]
    }
  },
  methods:{
    initData(){
      // this.getRst()
    },
    load(){
      // alert("!")
    },
    getSort(){
      for(let i =0;i<this.rstData.length;i++){
          let str = this.sortData;
          if(str.indexOf(this.rstData[i].sort) == -1){
            this.sortData.push(this.rstData[i].sort);
          }
      }
      console.log("aa"+this.rstData)
    }
  },
  created(){
    this.initData()
    this.getSort()
  }
};
</script>
<style>
.popover h3,.popover span{
  margin: 0;
  padding: 0;
}
.popover .pop-top{
  margin-top: 20px;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 5px;
}
.popover .pop-sort{
  font-size: 12px;
  color: #ccc;
}
.popover .pop-center{
  margin-top: 10px;
  background: #f2f2f2;
  height: 25px;
  line-height: 25px;
  font-size: 13px;
}
.popover .pop-center .pop-deliveryPrice{
  padding-left: 20px;
  padding-right: 20px;
  border-right: 1px solid #dddddd;
}
.popover .pop-center .pop-deliveryTime{
  padding-left: 20px;
}
.popover .pop-center .pop-deliveryTime span{
  color:red;
}
.popover .pop-bottom{
  margin-top: 15px;
  font-size: 12px;
}

</style>

<style scoped>
.el-main {
  padding: 0;
}
.container {
  height: 100%;
}
.header {
  width: 90%;
  height: 54px;
  padding: 0;
  line-height: 54px;
  margin: 0 auto;
}
.location {
  float: left;
  font-size: 12px;
}
.search {
  width: 300px;
  float: right;
}
.content {
  text-align: center;
}
.sort {
  position: relative;
  display: inline-block;
  background-color: #fff;
  width: 90%;
  text-align: left;
  box-sizing: border-box;
  padding: 7px 10px 10px 7em;
  border: 1px solid #e6e6e6;
}
.sort span {
  position: absolute;
  font-size: 14px;
  color: #999999;
  left: 25px;
  top: 15px;
}
.type {
  margin: 0px 16px;
  height: 38px;
  line-height: 38px;
}
.rstBox {
  width: 90%;
  background-color: #fff;
  height: 100%;
  border: 1px solid #e6e6e6;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;
}

.rstBlock {
  /* float: left; */
  display: inline-block;
  padding: 20px;
  width: 25%;
  height: 140px;
  box-sizing: border-box;
  /* border: 1px solid red; */
}
.rstBlock:hover{
    background: #f5f5f5;
}
.leftBlock {
  color: #999;
  text-align: center;
  width: 30%;
  font-size: 12px;
  display: inline-block;
  float: left;
}
.leftBlock .rstPic {
  display: block;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
.rightBlock {
  display: inline-block;
  height: 100%;
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
  padding-left: 20px;
}
.righjtBlock span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  display: block;
  text-align: left;
}
.rightBlock .rstName {
  font-size: 16px;
  font-weight: 600;
}
.rstDeliveryPrice {
  color: #999;
  margin-top: 20px;
  font-size: 12px;
}
</style>

