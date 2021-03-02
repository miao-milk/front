<template>
  <div class="page-header">
    <el-row>
      <el-col :span="2"><img src="../../assets/mmm.jpg" width="150px" height="60px"></el-col>
      <el-col :span="20">
        <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            {{ item.navItem }}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="2">
        <font size="4" face="Verdana">{{userName}}</font>
        <el-button type="text" @click="logout">退出</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {getCookie} from "../../utils/utils.js"
import {logout} from '../../api'
export default {

  data() {
    return {
      userName:'',
      navList: [
        {name: '/home', navItem: '首页'},
        {name: '/menberList', navItem: '会员中心'},
        {name: '/menberAnalysis', navItem: '数据中心'},
        {name: '/Message', navItem: '营销中心'},
        {name: '/information', navItem: '个人后台中心'},
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.path;
    },
    logout(){
      logout().then(res=>{
       if (res.code==200){
         this.$router.push('/login')
         localStorage.clear();
       }
      })
    }
  },
  mounted() {
    var userName=getCookie("user");
   this.userName=userName;
  }
}
</script>
<style lang="scss" scoped>
</style>
