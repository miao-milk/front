<template>
  <div class="page-header">
    <el-row>
    <el-col :span="22">
    <el-menu :default-active="$route.path" router class="el-menu-demo" mode="vertical" @select="handleSelect" >
     <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
         {{ item.navItem }}
    </el-menu-item>
    </el-menu>
    </el-col>
  </el-row>
  </div>
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        navList:[
        {name:'/menberAnalysis',navItem:'全链路用户分析'},
        // {name:'/actionAnalysis',navItem:'用户行为分析'},
        {name:'/goodsAnalysis',navItem:'商品分析'},
        // {name:'/RAnalysis',navItem:'活跃度分析'},
        // {name:'/FAnalysis',navItem:'忠诚度分析'},
        {name:'/MAnalysis',navItem:'价值分析'}
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$router.path;
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
