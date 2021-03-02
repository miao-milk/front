<template>
  <div id="app">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-upload
        class="avatar-uploader"
        action="http://localhost:18080/upload"
        :show-file-list="false"
        :with-credentials="true"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-form-item label="用户昵称" prop="sellerNick">
        <el-input v-model="form.sellerNick" style="width: 100px;"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="form.sex" placeholder="请选择" style="width: 100px;">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户余额">
        <el-input v-model="form.fee" style="width: 100px;" disabled></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="mobile">
        <el-input v-model="form.mobile" style="width: 150px;"></el-input>
      </el-form-item>
      <el-form-item label="联系地址" prop="address">
        <el-input v-model="form.address" style="width: 350px;"></el-input>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthday">
        <el-col :span="5">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" format="yyyy 年 MM 月 dd 日" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="自我简介">
        <el-input type="textarea" v-model="form.introduction"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input v-model="form.newPassword" style="width: 200px;" placeholder="请输入密码" show-password></el-input>
        <el-popover
          placement="right-start"
          width="40"
          trigger="hover"
          style="margin-left:20px; color: #ff6600"
          content=""
        >
          <div class="tips">
            <p style="color: darkred">为空即不修改</p>
          </div>
          <span slot="reference" style="color: darkred">注意</span>
        </el-popover>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {saveUserInfo, getUserInfo, returnUrl} from '../../api'

export default {
  data() {
    return {
      imageUrl: '',
      file: "",
      form: {
        sellerNick: '',
        sex: '',
        fee: '',
        mobile: '',
        address: '',
        birthday: '',
        introduction: '',
        newPassword: '',
        oldPassword: '',
        imageUrl: ''
      },
      rules: {
        sellerNick: [
          {required: true, message: '请输入用户昵称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        sex: [
          {required: true, message: '请选择性别', trigger: 'change'}
        ],
        mobile: [
          {required: true, message: '请输入用户手机号码', trigger: 'blur'},
        ],
        address: [
          {required: true, message: '请输入用户联系地址', trigger: 'blur'},
        ],
        birthday: [
          {required: true, message: '请选择时间', trigger: 'change'}
        ],
        newPassword: [
          {min: 1, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$prompt('请输入旧登录密码', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({value}) => {
        this.form.oldPassword = value
        saveUserInfo(this.form).then((res) => {
          console.log(res)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消修改'
        });
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res)
      this.form.imageUrl = res.fileName;
      console.log(this.form.imageUrl)
    },
    beforeAvatarUpload(file) {
      console.log("验证")
      console.log(file)
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },

  },
  mounted() {
    getUserInfo().then((res) => {
      console.log(res)
      this.form=res.data
      this.imageUrl="http://127.0.0.1:18080/getImage/"+res.data.imageUrl
    })
  }

}
</script>


<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
