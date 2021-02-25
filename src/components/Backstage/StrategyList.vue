<template>
  <div id="menberl-list">
    充值短信条数： <el-input
                      style="width: 100px;"
                      size="medium"
                      v-model="rechargeMessageNum"
                      @input="rechargeMessageNumChange"
                      @change="rechargeMessageRemind"
                      ></el-input>条<br>
    充值金额： <el-input style="width: 100px; padding-top: 20px; padding-left: 30px;"
                    v-model="rechargeMoney"
                    @input="rechargeMoneyChange"
                    @change="rechargeMoneyRemind"
  ></el-input>元
    <el-popover
      placement="right-start"
      width="250"
      trigger="hover"
      style="margin-left:20px; color: #ff6600"
      content=""
    >
      <div class="tips">
        <p style="color: rebeccapurple">充值条数单价</p>
        <p>100条~4999条<span>(5.8分/条)</span></p>
        <p>5000条~11999条<span>(5.7分/条)</span></p>
        <p>12000条~24999条<span>(5.6分/条)</span></p>
        <p>25000条~49999条<span>(5.5分/条)</span></p>
        <p>50000条~79999条<span>(5.4分/条)</span></p>
        <p>80000条~199999条<span>(5.2分/条)</span></p>
        <p>200000条~699999条<span>(4.9分/条)</span></p>
        <p>700000条以上<span>(4.7分/条)</span></p>
      </div>
      <span slot="reference">计费规则</span>
    </el-popover>
    <br>
    <el-button type="primary" plain  style="margin-top:20px;" @click="payMessage">充值</el-button>
  </div>
</template>

<script>
import {pay,returnUrl} from '../../api'

export default {
  data() {
    return {
      rechargeMessageNum:"",
      rechargeMoney:""
    }
  },
  methods: {
    //充值短信
    payMessage(){
      console.log("充值事件")
      this.params={"total":this.rechargeMessageNum,"fee":this.rechargeMoney}
      pay(this.params).then((res)=>{
        console.log(res)
        document.querySelector('body').innerHTML = res.data;

        const div = document.createElement('div') // 创建div
        div.innerHTML = res // 将返回的form 放入div
        document.body.appendChild(div)
        document.forms[0].submit()
      })
    },
//充值金额和数量发生变化事件
    rechargeMessageNumChange(value) {
      if (value === "") {
        this.rechargeMoney = "";
      }
      if (value >= 100 && value <= 4999) {
        //短信条数算金额
        this.rechargeMoney = (0.058 * value).toFixed(2);
      }
      if (value >= 5000 && value <= 11999) {
        this.rechargeMoney = (0.057 * value).toFixed(2);
      }
      if (value >= 12000 && value <= 24999) {
        this.rechargeMoney = (0.056 * value).toFixed(2);
      }
      if (value >= 25000 && value <= 49999) {
        this.rechargeMoney = (0.055 * value).toFixed(2);
      }
      if (value >= 50000 && value <= 79999) {
        this.rechargeMoney = (0.054 * value).toFixed(2);
      }
      if (value >= 80000 && value <= 199999) {
        this.rechargeMoney = (0.052 * value).toFixed(2);
      }
      if (value >= 200000 && value <= 699999) {
        this.rechargeMoney = (0.049 * value).toFixed(2);
      }
      // if (value >= 1500000 && value <= 1999999) {
      //   this.rechargeMoney = (0.042 * value).toFixed(2);
      // }
      if (value >= 700000) {
        this.rechargeMoney = (0.047 * value).toFixed(2);
      }
    },
    rechargeMessageRemind(value) {
      if (value < 100 || value % 1 != 0) {
        this.$message.info({
          message: "短信条数为大于100的整数",
        });
        //this.rechargeMessageNum=0;
        this.rechargeMoney = 0;
        return;
      }
      if (value > 1000000000) {
        this.$message.info({
          message: "暂不支持该金额，如需充值请联系客服",
        });
        this.rechargeMessageNum = 1000000000;
        return;
      }
      this.rechargeMessageNumChange(this.rechargeMessageNum);
    },

    // 设置充值条数变化
    rechargeMoneyChange(value) {
      if (value === "") {
        this.rechargeMessageNum = "";
      }
      this.rechargeMessageNum = 0;
      if (32900 <= value) {
        this.rechargeMessageNum = Math.floor((value * 100) / 4.7);
      } else if (9800 <= value && value < 34300) {
        this.rechargeMessageNum = Math.floor((value * 100) / 4.9);
      } else if (4160 <= value && value < 10400) {
        this.rechargeMessageNum = Math.floor((value * 100) / 5.2);
      } else if (2700 <= value && value < 4320) {
        this.rechargeMessageNum = Math.floor((value * 100) / 5.4);
      } else if (1375 <= value && value < 2750) {
        this.rechargeMessageNum = Math.floor((value * 100) / 5.5);
      } else if (672 <= value && value < 1400) {
        this.rechargeMessageNum = Math.floor((value * 100) / 5.6);
      } else if (285 <= value && value < 684) {
        this.rechargeMessageNum = Math.floor((value * 100) / 5.7);
      } else if (5.8 <= value && value < 290) {
        this.rechargeMessageNum = Math.floor((value * 100) / 5.8);
      }
    },
    rechargeMoneyRemind(value) {
      if (value < 5.8 || (value * 100) % 1 != 0) {
        this.$message.info({
          message: "金额不能少于5.8元，最多两位小数",
        });
        this.rechargeMessageNum = 0;
        //this.rechargeMoney=0;
        return;
      }
      if (value > 1000000000) {
        this.$message.info({
          message: "暂不支持该金额，如需充值请联系客服",
        });
        this.rechargeMessageNum = 0;
        this.rechargeMoney = 1000000000;
        return;
      }
      this.rechargeMoneyChange(this.rechargeMoney);
    },


  },
  mounted() {
    let url=location.href
    let num=url.indexOf("?");
    let str=url.substr(num+1);
    console.log(url)
    console.log(num)
    console.log(str)
    if (num!=-1){
      returnUrl(str).then((res)=>{
        console.log(res)
      })
    }

  }
}
</script>
