<template>
  <el-main>
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
              <span class="pop-deliveryTime">
                平均
                <span v-if="item.delivery.time<45">{{item.delivery.time}}</span>
                <span v-else>45+</span>分钟送达
              </span>
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
          <span v-if="item.delivery.price!=0" class="rstDeliveryPrice">配送费￥{{item.delivery.price}}元</span>
          <span v-else class="rstDeliveryPrice">免配送费</span>
        </div>
      </div>
    </div>
  </el-main>
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
    };
  }
};
</script>
<style scoped>
.container {
  height: 100%;
}
.el-main{
    padding:0;
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
  box-sizing: border-box;
  /* border: 1px solid red; */
}
.rstBlock:hover {
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



