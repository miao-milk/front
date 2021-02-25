<template>
  <div id="menberl-list">
    <el-row :gutter="20">
      <el-col :span="3">
        <el-input
          type="text"
          placeholder="接受号码"
          v-model="mobile"
          maxlength="10"
          show-word-limit
        >
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-input
          type="text"
          placeholder="短信内容"
          v-model="content"
          maxlength="10"
          show-word-limit
        >
        </el-input>
      </el-col>

      <el-col :span="3">
        <el-button icon="el-icon-search" circle @click="query"></el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%">
      <el-table-column
        prop="mobile"
        label="手机号码"
        width="250">
      </el-table-column>
      <el-table-column
        prop="content"
        label="短信内容"
        width="750">
      </el-table-column>
      <el-table-column
        prop="sendTime"
        label="发送时间"
        width="250">
      </el-table-column>
    </el-table>
    <br>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 15]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import {getAllMessage,getAllMessageByParamr} from '../../api'
export default {
  data() {
    return {
      mobile:"",
      params:{},
      content:"",
      tableData: [],
      currentPage:1,
      pagesize:10,
      total:0,
    }
  },
  methods: {
    getAllMessage() {
      return this.getAllMessage
    },
    query() {
      this.params={"mobile":this.mobile,"content":this.content}
      getAllMessageByParamr(this.params).then(data => {
        this.tableData = data.data;
        this.total=data.count;
      })
    },
    handleClick(row) {
      console.log(row);
      this.$router.push({name:'menberPortrait',query:{sellerId:row.shopBuyerId}})
    },
    handleSizeChange(val) {
      this.pagesize=val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
  mounted() {
    getAllMessage().then(data => {
      console.log(data);
      this.tableData = data.data;
      this.total=data.count;
    })
  }
}
</script>
