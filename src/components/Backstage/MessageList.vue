<template>
    <div id="menberl-list">
     <el-row :gutter="20">
  <el-col :span="3">
    <el-input
    type="text"
    placeholder="账号昵称"
    v-model="buyerNick"
    maxlength="10"
    show-word-limit
    >
    </el-input>
    </el-col>
      <el-col :span="3">
    <el-input
    type="text"
    placeholder="姓名"
    v-model="receiverName"
    maxlength="10"
    show-word-limit
    >
    </el-input>
    </el-col>
    <el-col :span="3">
    <el-input
    type="text"
    placeholder="电话"
    v-model="receiverMobile"
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
        prop="buyerNick"
        label="账号昵称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="receiverName"
        label="姓名"
        width="150">
      </el-table-column>
        <el-table-column
        prop="receiverMobile"
        label="电话"
        width="150">
      </el-table-column>
        <el-table-column
        prop="crowdPortraitType"
        label="职业"
        width="100">
      </el-table-column>
        <el-table-column
        prop="receiverAddress"
        width="800"
        label="地址">
      </el-table-column>
        <el-table-column
        label="操作">
         <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="big">查看用户画像</el-button>
      </template>
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
import {getAllMember,getallMemberByParamr} from '../../api'
export default {
      data() {
        return {
        buyerNick:"",
        params:{},
        receiverName:"",
        receiverMobile:"",
        tableData: [],
        currentPage:1,
        pagesize:10,
        total:0,
        }
      },
 methods: {
      getAllMember() {
        return this.getAllMember
      },
      query() {
          this.params={"buyerNick":this.buyerNick,"receiverName":this.receiverName,"receiverMobile":this.receiverMobile}
          getallMemberByParamr(this.params).then(data => { 
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
      getAllMember().then(data => { 
        this.tableData = data.data;
        this.total=data.count;
        })
    }
    }
</script>
