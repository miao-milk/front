<template>
  <common-card title="今日新增交易用户数" :value="orderUser">
    <template>
      <v-chart :options="getOptions()" style="width:380px" />
    </template>
    <template v-slot:footer>
      <span>成交率</span>
      <span class="emphasis">{{ returnRate }}</span>
    </template>
  </common-card>
</template>

<script>
import { getTotalSales } from "../../api";
import CommonCard from "../../components/CommonCard";
export default {
  components: {
    CommonCard,
  },
  data() {
    return {
      returnRate: 90,
      orderUser: 200,
      orderUserData:[120, 200, 150, 80, 70, 110, 130],
    };
  },
  methods: {
    getOptions() {
      return {
        color: ["#3398DB"],
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          show: false,
        },
        yAxis: {
          type: "value",
          show: false,
        },
        series: [
          {
            data: this.orderUserData,
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
    getTotalSales().then(() => {});
  },
};
</script>

<style lang="scss" scoped>
</style>
