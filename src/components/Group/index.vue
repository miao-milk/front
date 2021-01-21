<template>
  <div class="menber-group">
<el-input
  placeholder="输入关键字进行过滤"
  suffix-icon="el-icon-search"
  v-model="filterText">
</el-input>
<br><br>
<el-button type="primary"  @click="() => addGroup()">+增加分组</el-button>
<br><br>
 <el-tree
      :data="data"
      node-key="id"
      default-expand-all
      @node-click=clickEven
      :filter-node-method="filterNode"
      ref="tree"
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span v-if="!node.isLeaf" style="padding-left:20px">
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            新增分组
          </el-button>
        </span>
        <span v-if="node.isLeaf" style="padding-left:20px">
          <el-button icon="el-icon-edit" circle  size="mini" round  @click="() => edit(data)"></el-button>
        </span>
      </span>
    </el-tree>
  </div>
</template>
<script>
let id = 1000;
export default {
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    data() {
      return {
        filterText: '',
        data: [
        //第一级    
        {
          id: 1,
          label: '标签分组',

            children: [{
              id: 9,
              label: '超人'
            }, 
            {
              id: 10,
              label: '美女'
          }]
        }, 
        //第二级
        {
          id: 2,
          label: '场景分组',
          children: [{
            id: 5,
            label: '双十一'
          }, {
            id: 6,
            label: '年货节'
          }]
        }, 
        //第三级  
        {
          id: 3,
          label: '消费分组',
          children: [{
            id: 7,
            label: '高级消费'
          }, {
            id: 8,
            label: '中级消费'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },

     methods: {
      clickEven(a){
          console.log(a)
      },
      addGroup(){
        this.$prompt('请输入分组名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
            console.log(value)
        this.data.push({
            id: id++,
            label: value,
            children: [{ 
            id: id++,
            label: '默认',}]
        })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },

       append(data) {
        const newChild = { id: id++, label: '分组名', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },
    edit(node, data) {
        this.$prompt('请输入', '提示', {
          inputValue:node.label,
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
            node.label=value
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
     filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    }
  };
</script>
<style lang="scss" scoped>
</style>
