<template>
  <div id="menberl-group">
    <el-row :gutter="40">
      <el-col :span="6"> <group @func="getMsgFormSon"></group></el-col>
      <el-col :span="18">
        <el-card shadow="never" style="width: 100%">
          <el-row :gutter="20">
            <el-col :span="8">分组名称:{{groupDetail.labelName}}</el-col>
            <el-col :span="8">拥有会员：{{total}}</el-col>
            <el-col :span="8">分组类型：{{groupDetail.fatherName}}</el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">创建时间：{{groupDetail.createTime}}</el-col>
            <el-col :span="8">最近更新时间：{{groupDetail.updateTime}}</el-col>
          </el-row>
        </el-card>
        <br /><br />
        <el-button type="success" @click="addMenber">添加人员</el-button>
        <el-table
          :data="
            tableData.slice(
              (currentPage - 1) * pagesize,
              currentPage * pagesize
            )
          "
          style="width: 100%"
        >
          <el-table-column prop="buyerNick" label="账号昵称" width="100">
          </el-table-column>
          <el-table-column prop="receiverName" label="姓名" width="100">
          </el-table-column>
          <el-table-column prop="receiverMobile" label="电话" width="130">
          </el-table-column>
          <el-table-column
            prop="smsMarketingCount"
            width="130"
            label="短信营销次数"
          >
          </el-table-column>
          <el-table-column prop="buyTotalCount" width="80" label="交易次数">
          </el-table-column>
          <el-table-column prop="buyTotalMoney" width="100" label="交易金额">
          </el-table-column>
          <el-table-column
            prop="lastSendTime"
            width="200"
            label="最后交易成功时间"
          >
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="big"
                >查看用户画像</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <br />
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[5, 10, 15]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Group from "../Group";
import { getGroupMember,getGroupDetail } from "../../api";
export default {
  name: "Home",
  components: {
    Group,
  },
  data() {
    return {
      buyerNick: "",
      params: {},
      receiverName: "",
      receiverMobile: "",
      tableData: [],
      groupDetail:{},
      currentPage: 1,
      pagesize: 10,
      total: 0,
      id: 0,
    };
  },
  methods: {
    addMenber(node, data) {
      this.$prompt("请输入", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {})
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    handleClick(row) {
      console.log(row);
      this.$router.push({
        name: "menberPortrait",
        query: { shopBuyerId: row.shopBuyerId },
      });
    },
    getMsgFormSon(data) {
      this.id = data;
      console.log(this.id);
      getGroupMember(this.id).then((data) => {
        this.tableData = data.data;
        console.log(data.data);
        this.total = data.count;
      });
       getGroupDetail(this.id).then((data) => {
        console.log(data.data);
        this.groupDetail=data.data
      });
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
};
</script>
