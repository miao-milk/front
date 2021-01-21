<template>
  <div class="page-header">
    <el-row>
    <el-col :span="2"><img src="../../assets/mmm.jpg" width="150px" height="60px"></el-col>
    <el-col :span="22">
    <el-menu :default-active="$route.path" router  class="el-menu-demo" mode="horizontal" @select="handleSelect" >
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
        navList:[
        {name:'/',navItem:'首页'},
        {name:'/menberList',navItem:'会员中心'},
        {name:'/data',navItem:'数据中心'},
        {name:'/strategy',navItem:'商业策略'},
        {name:'/personal',navItem:'个人中心'},
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
