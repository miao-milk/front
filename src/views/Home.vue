<template>
  <div class="home">
  <el-container>
  <el-header>
    <page-header></page-header>
  </el-header>
  <el-container>
    <el-container>
      <el-main>首页</el-main>
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
