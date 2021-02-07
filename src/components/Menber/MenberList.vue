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
      :data="
        tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      style="width: 100%"
    >
      <el-table-column prop="buyerNick" label="账号昵称" width="150">
      </el-table-column>
      <el-table-column prop="receiverName" label="姓名" width="150">
      </el-table-column>
      <el-table-column prop="receiverMobile" label="电话" width="150">
      </el-table-column>
      <el-table-column prop="receiverAddress" width="400" label="地址">
      </el-table-column>
      <el-table-column label="标签">
        <template slot-scope="scope">
          <el-button @click="handleLabel(scope.row)" type="text" size="big"
            >添加标签</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="分组">
        <template slot-scope="scope">
          <el-button @click="handleGroup(scope.row)" type="text" size="big"
            >加入分组</el-button
          >
        </template>
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

    <el-dialog
      title="提示"
      :visible.sync="dialogVisibleGroup"
      width="30%"
    >
      <group @func="getMsgFormSon"></group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleGroup = false">取 消</el-button>
        <el-button type="primary" @click="addGroupMember"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleCloseDialog"
    >
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >+ New Tag</el-button
      >
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCloseDialog">取 消</el-button>
        <el-button type="primary" @click="handleCloseDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Group from "../Group";
import {
  getAllMember,
  getallMemberByParamr,
  getMemberLabelBySellerId,
  addMemberLabelByshopBuyerId,
  deleteMemberLabelByshopBuyerId,
  addGroupMember
} from "../../api";
export default {
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
      currentPage: 1,
      pagesize: 10,
      total: 0,
      dialogVisible: false,
      dialogVisibleGroup: false,
      dynamicTags: [],
      inputVisible: false,
      inputValue: "",
      shopBuyerId: 0,
      groupId:0,
    };
  },
  methods: {
    getAllMember() {
      return this.getAllMember;
    },
    query() {
      this.params = {
        buyerNick: this.buyerNick,
        receiverName: this.receiverName,
        receiverMobile: this.receiverMobile,
      };
      getallMemberByParamr(this.params).then((data) => {
        this.tableData = data.data;
        this.total = data.count;
      });
    },
    //点击用户画像事件
    handleClick(row) {
      console.log(row);
      //this.$router.push({name:'menberPortrait',query:{shopBuyerId:row.shopBuyerId}})
    },
    //点击添加标签按钮事件
    handleLabel(row) {
      console.log(row.shopBuyerId);
      this.shopBuyerId = row.shopBuyerId;
      this.dialogVisible = true;
      //获取标签内容
      getMemberLabelBySellerId(this.shopBuyerId).then((data) => {
        console.log(data.data);
        data.data.forEach((value) => {
          this.dynamicTags.push(value.name);
        });
      });
      //this.$router.push({name:'menberPortrait',query:{shopBuyerId:row.shopBuyerId}})
    },


    //点击加入分组事件
    handleGroup(row) {
      console.log(row.shopBuyerId);
      this.shopBuyerId = row.shopBuyerId;
      this.dialogVisibleGroup = true;
    },
    //点击分组节点的事件接受子组件的值
    getMsgFormSon(data) {
      this.groupId = data;
      console.log(this.groupId);
    },
    addGroupMember(row) {
      console.log("添加分组会员");
      this.dialogVisibleGroup = false;
      addGroupMember(this.groupId,this.shopBuyerId)
    },


    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleCloseDialog() {
      this.dynamicTags = [];
      this.dialogVisible = false;
    },

    //tag标签事件
    handleClose(tag) {
      //删除会员标签
      console.log(tag);
      deleteMemberLabelByshopBuyerId(this.shopBuyerId, tag);
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;

      if (inputValue) {
        //新增标签内容
        addMemberLabelByshopBuyerId(this.shopBuyerId, inputValue).then(
          (data) => {
            console.log(data);
            if (data.code === 200) {
              this.dynamicTags.push(inputValue);
            }
          }
        );
      }

      this.inputVisible = false;
      this.inputValue = "";
    },
  },
  mounted() {
    getAllMember().then((data) => {
      this.tableData = data.data;
      console.log(data.data);
      this.total = data.count;
    });
  },
};
</script>
<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
