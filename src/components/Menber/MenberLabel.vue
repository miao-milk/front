<template>
  <div id="menberl-label">
    <el-row :gutter="20">
      <el-col :span="3">
        <el-input
          type="text"
          placeholder="标签名"
          v-model="labelName"
          maxlength="10"
          show-word-limit
        >
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-button icon="el-icon-search" circle @click="query"></el-button>
      </el-col>
    </el-row>
    <el-button type="primary" style="margin-top: 20px" @click="addLabel"
      >+新增标签</el-button
    >
    <el-button type="danger" @click="handleDeleteAll">-删除标签</el-button>
    <el-table
      :data="
        tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      style="width: 100%; margin-top: 20px"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="labelName" label="标签名" width="150">
      </el-table-column>
      <el-table-column prop="peopleNum" label="人数" width="150">
        10
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="250">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="big"
            >查看用户群</el-button
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
  </div>
</template>

<script>
import { getMemberLabel, addMemberLabel, deleteLabel } from "../../api";
export default {
  data() {
    return {
      labelName: "",
      peopleNum: 5,
      params: {},
      label: {},
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      total: 0,
      multipleSelection: [],
    };
  },
  methods: {
    query() {
      this.params = { labelName: this.labelName };
      //   getallMemberByParamr(this.params).then(data => {
      //        this.tableData = data.data;
      //        this.total=data.count;
      // })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 批量删除
    handleDeleteAll() {
      if (this.multipleSelection.length == 0) {
        this.$message.error("您还未选中过滤站点！");
      } else {
        this.$confirm("此操作将永久删除过滤站点, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          let arr = [];
          this.multipleSelection.forEach((item) => {
            arr.push(item.labelId);
          });
          let params = {
            ids: arr.join(),
          };
          console.log(arr);
          deleteLabel(arr).then(res => {
            this.$message({
            type: "success",
            message: "删除成功!",
          });
            getMemberLabel().then((data) => {
              this.tableData = data.data;
              this.total = data.count;
            });
          this.currentpage = 1;
          this.multipleSelection = [];
          });
         
        });
      }
    },
    addLabel() {
      this.$prompt("请输入标签名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          console.log(value);
          addMemberLabel(value).then((data) => {
            this.$message({
              type: "success",
              message: "添加成功",
            });
            getMemberLabel().then((data) => {
              this.tableData = data.data;
              this.total = data.count;
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    handleClick(row) {
      console.log(row);
      this.$alert('用户列表', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
  mounted() {
    getMemberLabel().then((data) => {
      this.tableData = data.data;
      this.total = data.count;
    });
  },
};
</script>
