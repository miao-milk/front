<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div id="chartBar" style="width: 100%; height: 500px"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
         <div id="chartFunnel" style="width: 100%; height: 500px"></div>
        </el-card>
      </el-col>
    </el-row>
    <div style="width: 100%; height: 600px; flex: 0 0 80%; margin-top: 20px">
      <b-map-scatter />
    </div>
  </div>
</template>

<script>
import BMapScatter from "../BMapScatter";
export default {
  name: "app",
  components: {
    BMapScatter,
  },
  methods: {
    chartBar() {
      var chartDom = document.getElementById("chartBar");
      var myChart = this.$echarts.init(chartDom);
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
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    chartFunnel() {
      var chartDom = document.getElementById("chartFunnel");
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: "漏斗图",
          subtext: "纯属虚构",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        legend: {
          data: ["展现", "点击", "访问", "咨询", "订单"],
        },
        series: [
          {
            name: "预期",
            type: "funnel",
            left: "10%",
            width: "80%",
            label: {
              formatter: "{b}预期",
            },
            labelLine: {
              show: false,
            },
            itemStyle: {
              opacity: 0.7,
            },
            emphasis: {
              label: {
                position: "inside",
                formatter: "{b}预期: {c}%",
              },
            },
            data: [
              { value: 60, name: "访问" },
              { value: 40, name: "咨询" },
              { value: 20, name: "订单" },
              { value: 80, name: "点击" },
              { value: 100, name: "展现" },
            ],
          },
          {
            name: "实际",
            type: "funnel",
            left: "10%",
            width: "80%",
            maxSize: "80%",
            label: {
              position: "inside",
              formatter: "{c}%",
              color: "#fff",
            },
            itemStyle: {
              opacity: 0.5,
              borderColor: "#fff",
              borderWidth: 2,
            },
            emphasis: {
              label: {
                position: "inside",
                formatter: "{b}实际: {c}%",
              },
            },
            data: [
              { value: 30, name: "访问" },
              { value: 10, name: "咨询" },
              { value: 5, name: "订单" },
              { value: 50, name: "点击" },
              { value: 80, name: "展现" },
            ],
            // Ensure outer shape will not be over inner shape when hover.
            z: 100,
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.chartBar();
    this.chartFunnel();
  },
};
</script>

<style>
</style>
