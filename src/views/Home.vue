<template>
  <div class="home">
  <el-container>
  <el-header>
    <page-header></page-header>
  </el-header>
  <el-container>
    <el-container>
      <top-view></top-view>
       <b-map-scatter />
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
  </el-container>
  </div>
</template>

<script>
import TopView from '../components/TopView'
import PageHeader from '../components/PageHeader'
import BMapScatter from '../components/BMapScatter'

export default {
  name: 'Home',
  components: {
    TopView,
    PageHeader,
    BMapScatter
  }
}
</script>
