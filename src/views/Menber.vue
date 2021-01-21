<template>
  <div class="home">
  <el-container>
  <el-header>
    <page-header></page-header>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <lift-menu></lift-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
  </el-container>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import LiftMenu from '../components/LiftMenu'

export default {
  name: 'Home',
  components: {
    PageHeader,
    LiftMenu
  }
}
</script>
