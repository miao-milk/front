<template>
  <div id="app">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户昵称">
        <el-input v-model="form.name" style="width: 100px;"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.region" placeholder="请选择" style="width: 100px;">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户余额">
        <el-input v-model="form.name" style="width: 100px;" disabled></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.name" style="width: 150px;"></el-input>
      </el-form-item>
      <el-form-item label="登录密码">
        <el-input v-model="form.name" style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item label="联系地址">
        <el-input v-model="form.name" style="width: 350px;"></el-input>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-col :span="5">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="自我简介">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
