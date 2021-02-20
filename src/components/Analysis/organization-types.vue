<template>
    <!-- 组织模型1 -->
    <div class="organization-types">
        <div class="title">
            <img :src="imagesUrl" class="imgIcon">
            <span>{{currentData.name}}：{{currentData.percent}}%</span>
        </div>
        <div class="info">
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="12">
                    <div class="grid-content">
                        客户总数：{{currentData.buyerCount}}人
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content">
                        成交金额总数：{{currentData.payment}}元
                    </div>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="12">
                    <div class="grid-content">
                        订单数：{{currentData.tradeCount}}单
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content">
                        客单价：{{currentData.buyerAvgCost}}元
                    </div>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="12">
                    <div class="grid-content">
                        复购客户数：{{currentData.returnBuyerCountSum}}人
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content">
                        复购成交金额：{{currentData.returnBuyerPaymentSum}}元
                    </div>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="start">
                <el-col :span="12">
                    <div class="grid-content">
                        复购率：{{currentData.returnBuyerPercentSum}}%
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "organization-types",
    mounted(){
    },
    data() {
        return {
        }
    },
    props: {
        // buyerAvgCost:Number,// 客单价
        // buyerCount:Number,// 客户总数 ,
        // name:String,// 名称 ,
        // payment:Number,// 成交金额 ,
        // percent:Number,// 百分比 ,
        // returnBuyerCountSum:Number,// 复购客户数 ,
        // returnBuyerPaymentSum:Number,// 复购成交额(元) ,
        // returnBuyerPercentSum:Number,// 复购率 ,
        // tradeCount:Number,// 订单数
        imagesUrl:String,//图片地址
        currentData:Object
    },
    methods:{
    }
}
</script>

<style lang="scss">
    .organizationType1{
        min-width:260px;
        height:auto;
        overflow:hidden;
        .title {
            background:#2062E7;
            color:#fff;
            height:30px;
            line-height:30px;
            text-align:left;
            font-size:14px;
            font-weight:500;
            span{
                padding-left:6px;
            }
        }
        .info{
            padding:10px;
        }
    }
    .org-tree-node-label .org-tree-node-label-inner{
        padding:0px 0px 10px 0px;
        box-shadow:0px 8px 20px rgba(139,156,188,0.4);
        opacity:1;
        border-radius:8px;
        width: 360px;
    }
    .grid-content{
        text-align:left;
        font-size:10px;
        color:#666666;
        margin-bottom:10px;
    }
    .imgIcon{width:15px;margin-left:6px;vertical-align: middle;}
</style>
