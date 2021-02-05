<template>
  <div class="menber-group">
    <el-input
      placeholder="输入关键字进行过滤"
      suffix-icon="el-icon-search"
      v-model="filterText"
    >
    </el-input>
    <br /><br />
    <el-button type="primary" @click="() => addGroup()">+增加分组</el-button>
    <br /><br />
    <el-tree
      :data="TreeData"
      node-key="id"
      default-expand-all
      @node-click="clickEven"
      :filter-node-method="filterNode"
      ref="tree"
      :expand-on-click-node="false"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span v-if="!node.isLeaf" style="padding-left: 20px">
          <el-button type="text" size="mini" @click="() => append(data)">
            新增分组
          </el-button>
        </span>
        <span v-if="node.isLeaf" style="padding-left: 20px">
          <el-button
            icon="el-icon-edit"
            circle
            size="mini"
            round
            @click="() => edit(data)"
          ></el-button>
          <el-button type="text" size="mini" @click="() => deleteGroup(data)"
            >删除</el-button
          >
        </span>
      </span>
    </el-tree>
  </div>
</template>
<script>
import { getTreeData, addGroup, editGroup, deleteGroup } from "../../api";
let id = 1000;
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  data() {
    return {
      filterText: "",
      TreeData: [],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },

  methods: {
    clickEven(a) {
       this.$emit('func',a.id)
    },
    //获取封装数据
    getPageTreeData() {
      getTreeData().then((data) => {
        data.data.forEach((value) => {
          this.TreeData.push({
            id: value.id,
            label: value.label,
            children: value.children,
          });
        });
      });
    },
    //添加分组
    addGroup() {
      this.$prompt("请输入分组名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          addGroup(value, 0);
          this.TreeData.push({
            id: id++,
            label: value,
            children: [
              {
                id: id++,
                label: "默认",
              },
            ],
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    //添加二级分组
    append(data) {
      addGroup("分组名", data.id).then((res)=>{
          this.TreeData = [];
          this.getPageTreeData();
      });
    },
    //编辑分组名字
    edit(node, data) {
      console.log(node.id);
      var id = node.id;
      this.$prompt("请输入", "提示", {
        inputValue: node.label,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          editGroup(value, id);
          node.label = value;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    //删除分组节点
    deleteGroup(node, data) {
      console.log(node.id);
      var id = node.id;
      this.$confirm("此操作将永久删除过滤站点, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        deleteGroup(id).then((res) => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.TreeData = [];
          this.getPageTreeData();
        });
      });
    },
    //节点属性
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
  },
  mounted() {
    this.getPageTreeData();
  },
};
</script>
<style lang="scss" scoped>
</style>
