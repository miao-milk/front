<template>
  <common-card title="今日订单量" :value="orderToday">
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">{{ orderLastDay }}</span>
    </template>
  </common-card>
</template>

<script>
import { getTotalOrders } from "../../api";
import CommonCard from "../../components/CommonCard";
export default {
  components: {
    CommonCard,
  },
  data() {
    return {
      orderToday: "",
      orderLastDay: "",
      data: [
        ["2019-10-10", 200],
        ["2019-10-11", 400],
        ["2019-10-12", 650],
        ["2019-10-13", 500],
        ["2019-10-14", 250],
        ["2019-10-15", 300],
        ["2019-10-16", 450],
        ["2019-10-17", 300],
        ["2019-10-10", 200],
        ["2019-10-11", 400],
        ["2019-10-12", 650],
        ["2019-10-13", 500],
        ["2019-10-14", 250],
        ["2019-10-15", 300],
        ["2019-10-16", 450],
        ["2019-10-17", 300],
        ["2019-10-18", 100],
      ],
    };
  },
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: "category",
          show: false,
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "line",
            data: this.data,
            areaStyle: {
              color: "purple",
            },
            lineStyle: {
              width: 0,
            },
            itemStyle: {
              opacity: 0,
            },
            smooth: true,
          },
        ],
        grid: {
          top: 0,
          bottom: 340,
          left: 0,
          right: 0,
        },
      };
    },
  },
  mounted() {
    getTotalOrders().then((res) => {
      console.log(res);
      this.orderLastDay=res.data.orderLastDay
      this.orderToday=res.data.orderToday
    });
  },
};
</script>
