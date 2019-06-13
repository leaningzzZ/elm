<template>
  <el-main>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="下单时间" width="250">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单内容">
        <template slot-scope="scope">
          <img :src="scope.row.src" style="width:50px;">
        </template>
      </el-table-column>
      <el-table-column label="支付金额（元）" width="200">
        <template slot-scope="scope">
          <span style="font-weight:900">{{ scope.row.subTotal }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="150">
        <template>
          <span style="font-size:12px;font-weight:400;color:#999999">订单已完成</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            style="width:70px;height:25px;padding:0;margin-bottom:5px;"
          >订单详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="订单详情" :visible.sync="dialogVisible" width="800px">
      <li v-for="item in orderData" :key="item.id">
        <span class="Pname">{{item.Pname}}</span>
        <span class="count">{{item.count}}(份)</span>
        <span class="subTotal">￥{{item.subTotal}}</span>
      </li>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      loading: false,
      tableData: [],
      orderData: [],
      orderIndex: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      this.dialogVisible = true;
      this.orderIndex = this.tableData[index].ordersId;
      console.log(this.orderIndex);
      this.$api
        .get(
          `order/details?userId=${sessionStorage.getItem(
            "userId"
          )}&orderId=${this.orderIndex}`
        )
        .then(res => {
          this.orderData = res.data[0].list;
          console.log(this.orderData);
          this.loading = false;
        })
        .catch(err => {
          this.$notify.error({
            title: "错误",
            message: "获取数据失败，请稍后重试"
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    initData() {
      this.loading = true;
      this.$api
        .get(`order/late?userId=${sessionStorage.getItem("userId")}`)
        .then(res => {
          this.tableData = res.data;
          console.log(this.tableData);
          this.loading = false;
        })
        .catch(err => {
          this.$notify.error({
            title: "错误",
            message: "获取数据失败，请稍后重试"
          });
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  created() {
    this.initData();
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
.Pname{
  float: left;
  width: 350px ;
  margin-left: 20px;
}
.count{
  float:left;
}
.subTotal{
  float:right;
  margin-right: 40px;
  color: #f17539;
  font-weight: 800;
}
</style>
