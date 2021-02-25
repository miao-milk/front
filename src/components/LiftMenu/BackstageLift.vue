<template>
  <div class="page-header">
    <el-row>
      <el-col :span="22">
        <el-menu
          :default-active="$route.path"
          router
          class="el-menu-demo"
          mode="vertical"
          @select="handleSelect"
        >
          <el-menu-item
            v-for="(item, i) in navList"
            :key="i"
            :index="item.name"
          >
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
      activeIndex: "1",
      activeIndex2: "1",
      navList: [
        { name: "/information", navItem: "个人信息" },
        { name: "/StrategyList", navItem: "充值管理" },
        { name: "/MessageList", navItem: "短信营销发送记录" },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.path;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
