<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
           <span>会员近7天购买金额</span>
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
          text: "消费用户排名",
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
          data: ["第一名", "第二名", "第三名", "第四名", "第五名"],
        },
        series: [
          {
            name: "成交金额",
            type: "funnel",
            left: "10%",
            width: "80%",
            label: {
              formatter: "{b}",
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
                formatter: "{b}成交金额: {c}%",
              },
            },
            data: [
              { value: 80, name: "第一名" },
              { value: 70, name: "第二名" },
              { value: 60, name: "第三名" },
              { value: 50, name: "第四名" },
              { value: 40, name: "第五名" },
            ],
          },
          {
            name: "成交金额",
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
                formatter: "{b}成交金额: {c}%",
              },
            },
            data: [
              { value: 80, name: "第一名" },
              { value: 70, name: "第二名" },
              { value: 60, name: "第三名" },
              { value: 50, name: "第四名" },
              { value: 40, name: "第五名" },
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
