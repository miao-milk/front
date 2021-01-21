<template>
  <div class="home">
  <el-container>
  <el-header>
    <page-header></page-header>
  </el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-main>数据中心</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
  </el-container>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'

export default {
  name: 'Home',
  components: {
    PageHeader
  }
}
</script>
