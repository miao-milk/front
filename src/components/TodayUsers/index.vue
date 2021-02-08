<template>
  <common-card title="今日新增交易用户数" :value="orderUser">
    <template>
      <v-chart :options="getOptions()" style="width: 380px" />
    </template>
    <template v-slot:footer>
      <span>今日购买率</span>
      <span class="emphasis">{{ returnRate }}%</span>
    </template>
  </common-card>
</template>

<script>
import { getTodayUsers } from "../../api";
import CommonCard from "../../components/CommonCard";
export default {
  components: {
    CommonCard,
  },
  data() {
    return {
      returnRate: "",
      orderUser: "",
      oldTimeList: [],
      oldUserList: [],
    };
  },
  methods: {
    getOptions() {
      return {
        color: ["#3398DB"],
        tooltip: {},
        xAxis: {
          type: "category",
          data: this.oldTimeList,
          show: false,
        },
        yAxis: {
          type: "value",
          show: false,
        },
        series: [
          {
            data: this.oldUserList,
            type: "bar",
            showBackground: true,
            barGap: "10%" /*多个并排柱子设置柱子之间的间距*/,
            barCategoryGap: "10%" /*多个并排柱子设置柱子之间的间距*/,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
        grid: {
          top: 0,
          left: 0,
          bottom: 340,
          right: 0,
        },
      };
    },
  },
  mounted() {
    getTodayUsers().then((res) => {
      console.log(res);
      this.oldTimeList = res.data.oldTimeList;
      this.oldUserList = res.data.oldUserList;
       this.orderUser = res.data.orderUser;
        this.returnRate = res.data.returnRate;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
