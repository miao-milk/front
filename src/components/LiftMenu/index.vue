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
        {name:'/menberList',navItem:'会员集中营'},
        {name:'/menberLabel',navItem:'会员标签'},
        {name:'/menberGrade',navItem:'会员消费等级'},
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
