<template>
  <el-main>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="下单时间" width="150">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单内容">
        <template slot-scope="scope">
          <img :src="scope.row.logo" style="width:50px;">
        </template>
      </el-table-column>
      <el-table-column label="支付金额（元）" width="150">
        <template slot-scope="scope">
          <span style="font-weight:900">{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="100">
        <template slot-scope="scope">
          <span style="font-size:12px;font-weight:400;color:#999999">{{ scope.row.state }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            style="width:70px;height:25px;padding:0;margin-bottom:5px;"
          >订单详情</el-button>
          
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2019-06-09",
          logo:
            "//fuss10.elemecdn.com/f/01/64bfb5b626d7fe626f503aff8c42fpng.png?imageMogr2/thumbnail/140x140/format/webp/quality/85", //图标img地址
          price: 10,
          state: "订单已完成"
        },
        {
          date: "2016-06-09",
          logo:
            "//fuss10.elemecdn.com/9/be/8ebac070b443fc77b99d176f4749apng.png?imageMogr2/thumbnail/140x140/format/webp/quality/85", //图标img地址
          price: 10,
          state: "订单已完成"
        },
        {
          date: "2016-06-09",
          logo:
            "//fuss10.elemecdn.com/5/6f/d20254e5861009f9145c9bb5a08e9jpeg.jpeg?imageMogr2/thumbnail/140x140/format/webp/quality/85", //图标img地址
          price: 10,
          state: "订单已完成"
        },
        {
          date: "2016-06-09",
          logo:
            "//fuss10.elemecdn.com/9/be/8ebac070b443fc77b99d176f4749apng.png?imageMogr2/thumbnail/140x140/format/webp/quality/85", //图标img地址
          price: 10,
          state: "订单已完成"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style scoped>

</style>
