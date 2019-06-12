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
      <div class="content" v-loading=loading>
        <div class="sort">
          <span>商家分类:</span>
          <el-link class="type" @click="showAllRst">全部商家</el-link>
          <el-link class="type" v-for="item in sortData" :key="item.storeId" target="_blank" @click="changeList(item.id)">{{item.name}}</el-link>
        </div>
        <div class="rstBox">
          <div class="rstBlock" v-for="item in showListData" :key="item.storeId" v-popover="item.storeId" @click="goRstDetail(item.storeId)">
              <el-popover
              :ref="item.storeId"
              placement="right"
              width="250"
              popper-class="popover"
              :open-delay="200"
              trigger="hover">
              <div>
                  <div class="pop-top">
                    <h3 class="pop-title">{{item.storeName}}</h3>
                    <span class="pop-sort">{{item.categoryId}}</span>
                  </div>
                  <div class="pop-center">
                    <span class="pop-deliveryPrice">配送费￥{{item.storeShippingFee}}</span>
                    <span class="pop-deliveryTime">平均<span v-if="item.storeTime<45">{{item.storeTime}}</span><span v-else>45+</span>分钟送达</span>
                  </div>
                  <div class="pop-bottom">
                    <span class="pop-desc">{{item.storeDesc}}</span>
                  </div>
              </div>
              </el-popover>

            <div class="leftBlock">
              <div class="rstPic">
                <img style="height:100%" :src="item.storeImage" alt>
              </div>
              <span v-if="item.storeTime<45" class="rstDeliveryTime">{{item.storeTime}}分钟</span>
              <span v-else class="rstDeliveryTime" style="color:#c00;">45+分钟</span>
            </div>
            <div class="rightBlock" v-popover:popover>
              <span class="rstName">{{item.storeName}}</span>
              <el-rate v-model="item.storeComment" style="margin-top: 8px;" disabled></el-rate>
              <span
                v-if="item.storeShippingFee!=0"
                class="rstDeliveryPrice">配送费￥{{item.storeShippingFee}}元</span>
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
      rstData: [],
      showListData:[],
      loading:true
    }
  },
  methods:{
    initData(){
      this.getRst()
    },
    getRst(){
      this.loading=true
      this.$api.get("/index").then(res=>{
        this.renderRst(res.data.data)
      })
    },
    renderRst(data){
      data.forEach(element => {
        this.sortData.push({"name":element.categoryName,"id":element.categoryId})
        element.storeList.forEach(ele=>{
          this.rstData.push(ele)
        })
      });
      this.showListData=JSON.parse(JSON.stringify(this.rstData));
      this.loading=false
    },
    changeList(id){
      this.showListData=[];
      this.rstData.forEach(ele=>{
        if(ele.categoryId==id){
          this.showListData.push(ele)
        }
      })
    },
    showAllRst(){
      this.showListData=JSON.parse(JSON.stringify(this.rstData));
    },
    goRstDetail(id){
      this.$router.push({
        name:'rstDetail',
        params:{
          rstId:id
        }
      })
    }
  },
  created(){
    this.initData()
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
  display: inline-block;
  padding: 20px;
  width: 25%;
  height: 140px;
  box-sizing: border-box;
  cursor: pointer;
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

