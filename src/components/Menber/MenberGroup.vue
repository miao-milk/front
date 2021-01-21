<template>
    <div id="menberl-group">
    <el-row :gutter="40">
    <el-col :span="6"> <group></group></el-col>
     <el-col :span="18">
     <el-card 
     shadow="never"
     style="width: 100%">
        <el-row :gutter="20">
        <el-col :span="8">分组名称:</el-col>
        <el-col :span="8">拥有会员：</el-col>
        <el-col :span="8">分组类型：</el-col>
        </el-row>
        <el-row :gutter="20">
         <el-col :span="8">创建时间：</el-col>
        <el-col :span="8">最近更新时间：</el-col>
        </el-row>
    </el-card>
    <br><br>
    <el-button type="success" @click="addMenber">添加人员</el-button>      
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
        width="150"
        label="地区">
         </el-table-column>
        <el-table-column
        prop="money"
        width="100"
        label="交易金额">
      </el-table-column>
    <el-table-column
        prop="a"
        width="200"
        label="未购买天数">
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
     </el-col>
    </el-row>
    </div>
</template>

<script>
import Group from '../Group'
export default {
  name: 'Home',
  components: {
    Group
  },
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
    addMenber(node, data) {
        this.$prompt('请输入', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
        
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      handleSizeChange(val) {
          this.pagesize=val;
      },
      handleCurrentChange(val) {
          this.currentPage = val;
      },
    }
}
</script>
