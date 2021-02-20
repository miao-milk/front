<template>
  <div id="app">
    <div id="charTradar" style="width: 100%; height: 500px"></div>
    <div id="chartPie" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    charTradar() {
      var chartDom = document.getElementById("charTradar");
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: "商品销售特征雷达图",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "center",
          data: ["会员喜爱", "商品1", "商品2", "用户购买力", "用户浏览量"],
        },
        radar: [
          {
            indicator: [
              { text: "品牌", max: 100 },
              { text: "内容", max: 100 },
              { text: "可用性", max: 100 },
              { text: "功能", max: 100 },
            ],
            center: ["25%", "40%"],
            radius: 80,
          },
          {
            indicator: [
              { text: "外观", max: 100 },
              { text: "拍照", max: 100 },
              { text: "系统", max: 100 },
              { text: "性能", max: 100 },
              { text: "屏幕", max: 100 },
            ],
            radius: 80,
            center: ["50%", "60%"],
          },
          {
            indicator: (function () {
              var res = [];
              for (var i = 1; i <= 12; i++) {
                res.push({ text: i + "月", max: 100 });
              }
              return res;
            })(),
            center: ["75%", "40%"],
            radius: 80,
          },
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            areaStyle: {},
            data: [
              {
                value: [60, 73, 85, 40],
                name: "会员喜爱",
              },
            ],
          },
          {
            type: "radar",
            radarIndex: 1,
            areaStyle: {},
            data: [
              {
                value: [85, 90, 90, 95, 95],
                name: "商品1",
              },
              {
                value: [95, 80, 95, 90, 93],
                name: "商品2",
              },
            ],
          },
          {
            type: "radar",
            radarIndex: 2,
            areaStyle: {},
            data: [
              {
                name: "用户购买力",
                value: [
                  2.6,
                  5.9,
                  9.0,
                  26.4,
                  28.7,
                  70.7,
                  75.6,
                  82.2,
                  48.7,
                  18.8,
                  6.0,
                  2.3,
                ],
              },
              {
                name: "用户浏览量",
                value: [
                  2.0,
                  4.9,
                  7.0,
                  23.2,
                  25.6,
                  76.7,
                  35.6,
                  62.2,
                  32.6,
                  20.0,
                  6.4,
                  3.3,
                ],
              },
            ],
          },
        ],
      };
      option && myChart.setOption(option);
    },
    chartPie() {
      var chartDom = document.getElementById("chartPie");
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: "商品销售额",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["商品1", "商品2", "商品3", "商品4"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "商品1",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "商品2",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "商品3",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "商品4",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.charTradar();
    this.chartPie();
  },
};
</script>

<style>
</style>
