<template>
    <div class="container">
        <div class="top">
          <div class="info">
            <div class="img"> 
              <img src="https://shadow.elemecdn.com/faas/desktop/media/img/default-avatar.38e40d.png?imageMogr2/format/webp/quality/85" alt="">
            </div>
            <div class="personal">
              <h3 class="name">你好,{{userName}}</h3>
              <span class="tips">订餐了吗？提前订餐送的快！</span>
            </div>
          </div>
          <div class="hongbao">
            <p class="title">我的红包</p>
            <span><span class="number">0</span>个</span>
          </div>
          <div class="jinbi">
            <p class="title">我的金币</p>
            <span><span class="number">20</span>个</span>
          </div>
        </div>
        <!-- <div class="recently">
          <div class="title">
            <span class="title-recently">最近订单</span>
            <span class="title-all">查看全部订单</span>
          </div>
        </div> -->
    </div>
</template>
<style>
.top{
  height: 120px;
  padding: 30px;
  background: #fff;
}
.info{
  display: inline-block;
  width: 400px;
  border-right: 1px solid #eee;
  vertical-align: top;
}
.info .img{
  height: 110px;
  display: inline-block;
    vertical-align: top;
}
.info .img img{
  height: 110px;
  width: 110px;
  border-radius: 50%;
}
.personal{
  display: inline-block;
    vertical-align: top;
    margin-left: 25px;
}
.personal .name{
  margin: 0;
  padding: 0;
  margin-top: 30px;
}
.personal .tips{
  color: #666;
  font-size: 14px;
}
.hongbao,.jinbi{
  display: inline-block;
  height: 110px;
  width: 200px;
  vertical-align: top;
  text-align: center;
  border-right: 1px solid #eee;
}
.hongbao span{
  color:red;
}
.hongbao .number{
  font-size: 30px;
}
.jinbi span{
  color:green;
}
.jinbi .number{
  font-size: 30px;
}
.recently{
  margin-top: 30px;
  padding: 20px;
  background: #fff;
}
.recently .title{
border-bottom: 2px solid #f4f4f4;
}

</style>
<script>
export default {
  data() {
    return {
      userName:""
    }
  },
  methods:{
  },
  created(){
    this.userName=sessionStorage.getItem('username');
  }
};
</script>

