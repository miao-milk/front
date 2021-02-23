<template>
  <div class="sendMessage">
    <el-card class="box-card" body-style="width:100%">
      <div slot="header" class="clearfix">
        <span>编辑短信</span>
      </div>
      <el-row>
        <el-col :span="15">
          <div class="grid-content bg-purple-dark">
         <div  style="padding-top: 20px;">手机号码
               <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入手机号码"
              v-model="textarea"
              style="width: 700px; padding-top: 20px; padding-left: 25px;"
            >
            </el-input>
            </div>
          
            <div  style="padding-top: 20px;">编辑短信
              <el-input type="textarea" placeholder="请输入短信内容" :rows="6" v-model="message" autocomplete="off" style="width: 700px; padding-top: 20px; padding-left: 25px;"></el-input>
            </div>

            <div  style="padding-top: 50px;padding-left: 60px;">
              <el-button type="primary" round  @click="sendMessage">提交短信</el-button>
            </div>
            
          </div>
        </el-col>
        <el-col :span="9">
          <div
            class="grid-content bg-purple-dark"
            style="
              background: url('/img/mobile.9f74254f.png');
              height: 503.61px;
              width: 255.75px;
              
            "
          >
            <div
              style="
                width: 195.33px;
                height: 250px;
                font-size: 14px;
                text-align: left;
                padding-left: 25px;
                padding-top: 120px;
                padding-right: 20px;
              "
            >
              <span>【小喵店铺】{{message}}回T退订</span>
            </div>
          </div></el-col
        >
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message:""
    };
  },
  methods: {
    sendMessage() {
        this.$confirm('确定发送?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '发送成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      }
  },
};
</script>
<style lang="scss" scoped>
.box-card {
  width: 100%;
}
</style>
