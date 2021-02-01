<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="12">
        <div id="chart" style="width: 600px; height: 500px"></div>
      </el-col>
      <el-col :span="12"
        ><div id="chartBar" style="width: 600px; height: 500px"></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    chartline() {
      var chartDom = document.getElementById("chart");
      const chart = this.$echarts.init(chartDom);
      var option;
      option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      chart.setOption(option);
    },
    chartBar() {
      var chartDom = document.getElementById("chartBar");
      const chart = this.$echarts.init(chartDom);
      var option;

      var xAxisData = [];
      var data1 = [];
      var data2 = [];
      var data3 = [];
      var data4 = [];

      for (var i = 0; i < 10; i++) {
        xAxisData.push("Class" + i);
        data1.push((Math.random() * 2).toFixed(2));
        data2.push((Math.random() * 5).toFixed(2));
        data3.push((Math.random() + 0.3).toFixed(2));
        data4.push(-Math.random().toFixed(2));
      }

      var emphasisStyle = {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(0,0,0,0.3)",
        },
      };

      option = {
        legend: {
          data: ["bar", "bar2", "bar3", "bar4"],
          left: "10%",
        },
        brush: {
          toolbox: ["rect", "polygon", "lineX", "lineY", "keep", "clear"],
          xAxisIndex: 0,
        },
        toolbox: {
          feature: {
            magicType: {
              type: ["stack", "tiled"],
            },
            dataView: {},
          },
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          name: "X Axis",
          axisLine: { onZero: true },
          splitLine: { show: false },
          splitArea: { show: false },
        },
        yAxis: {},
        grid: {
          bottom: 100,
        },
        series: [
          {
            name: "bar",
            type: "bar",
            stack: "one",
            emphasis: emphasisStyle,
            data: data1,
          },
          {
            name: "bar2",
            type: "bar",
            stack: "one",
            emphasis: emphasisStyle,
            data: data2,
          },
          {
            name: "bar3",
            type: "bar",
            stack: "two",
            emphasis: emphasisStyle,
            data: data3,
          },
          {
            name: "bar4",
            type: "bar",
            stack: "two",
            emphasis: emphasisStyle,
            data: data4,
          },
        ],
      };

      chart.on("brushSelected", renderBrushed);

      function renderBrushed(params) {
        var brushed = [];
        var brushComponent = params.batch[0];

        for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
          var rawIndices = brushComponent.selected[sIdx].dataIndex;
          brushed.push("[Series " + sIdx + "] " + rawIndices.join(", "));
        }

        chart.setOption({
          title: {
            backgroundColor: "#333",
            text: "SELECTED DATA INDICES: \n" + brushed.join("\n"),
            bottom: 0,
            right: "10%",
            width: 100,
            textStyle: {
              fontSize: 12,
              color: "#fff",
            },
          },
        });
      }

      option && chart.setOption(option);
    },
  },
  mounted() {
    this.chartline();
    this.chartBar();
  },
};
</script>

<style>
</style>
