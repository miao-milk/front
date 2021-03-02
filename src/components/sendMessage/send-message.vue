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
              v-model="mobile"
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
            :style="divStyle"
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
import {returnUrl, sendMessage} from '../../api'
export default {
  data() {
    return {
      message:"",
      mobile:"",
      params:{},
      divStyle: {
        height: "503.61px",
        width: "255.75px",
        background: "url(" + require("../../assets/mobile.png") + ")",
      },
    };
  },
  methods: {
    sendMessage() {
        this.$confirm('确定发送?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.params={"mobile":this.mobile,"content":this.message}
          sendMessage(this.params).then((data)=>{
            if (data.message=="发送信息成功"){
              this.$message({
                type: 'success',
                message: '发送成功!'
              });
            }else {
              this.$message({
                type: 'info',
                message: '发送成功'
              });
            }
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
  },
  mounted() {
    let url=location.href
    let num=url.indexOf("=");
    let str=url.substr(num+1);
    if (num!=-1){
      this.mobile=str
    }
    console.log(num)
    console.log(str)
  }
};
</script>
<style lang="scss" scoped>
.box-card {
  width: 100%;
}
</style>
