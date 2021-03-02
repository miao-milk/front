<template>
  <div class="home">
  <el-container>
  <el-header>
    <page-header></page-header>
  </el-header>
  <el-container>
    <el-container style="height: 100%">
      <top-view></top-view>
      <div style="width: 100%; height: 900px; flex: 0 0 80%; margin-top: 20px">
        <b-map-scatter style="height: 700px"/>
      </div>
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
