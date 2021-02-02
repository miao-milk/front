<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="12">
        <div id="chartGauge" style="width: 600px; height: 500px"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartGauge2" style="width: 600px; height: 500px"></div>
      </el-col>
    </el-row>
      <div id="chartFunnel" style="width: 100%; height: 500px"></div>
    <div id="chartPie" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    chartGauge1() {
      var chartDom = document.getElementById("chartGauge");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 240,
            splitNumber: 12,
            itemStyle: {
              color: "#58D9F9",
              shadowColor: "rgba(0,138,255,0.45)",
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 18,
            },
            pointer: {
              icon:
                "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "75%",
              width: 16,
              offsetCenter: [0, "5%"],
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 18,
              },
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 3,
                color: "#999",
              },
            },
            axisLabel: {
              distance: 30,
              color: "#999",
              fontSize: 20,
            },
            title: {
              show: false,
            },
            detail: {
              backgroundColor: "#fff",
              borderColor: "#999",
              borderWidth: 2,
              width: "60%",
              lineHeight: 40,
              height: 40,
              borderRadius: 8,
              offsetCenter: [0, "35%"],
              valueAnimation: true,
              formatter: function (value) {
                return "{value|" + value.toFixed(0) + "}{unit|人}";
              },
              rich: {
                value: {
                  fontSize: 50,
                  fontWeight: "bolder",
                  color: "#777",
                },
                unit: {
                  fontSize: 20,
                  color: "#999",
                  padding: [0, 0, -20, 10],
                },
              },
            },
            data: [
              {
                value: 100,
              },
            ],
          },
        ],
      };
      option && myChart.setOption(option);
    },
    chartGauge2() {
      var chartDom = document.getElementById("chartGauge2");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 240,
            splitNumber: 12,
            itemStyle: {
              color: "#58D9F9",
              shadowColor: "rgba(0,138,255,0.45)",
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 18,
            },
            pointer: {
              icon:
                "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "75%",
              width: 16,
              offsetCenter: [0, "5%"],
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 18,
              },
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 3,
                color: "#999",
              },
            },
            axisLabel: {
              distance: 30,
              color: "#999",
              fontSize: 20,
            },
            title: {
              show: false,
            },
            detail: {
              backgroundColor: "#fff",
              borderColor: "#999",
              borderWidth: 2,
              width: "60%",
              lineHeight: 40,
              height: 40,
              borderRadius: 8,
              offsetCenter: [0, "35%"],
              valueAnimation: true,
              formatter: function (value) {
                return "{value|" + value.toFixed(0) + "}{unit|人}";
              },
              rich: {
                value: {
                  fontSize: 50,
                  fontWeight: "bolder",
                  color: "#777",
                },
                unit: {
                  fontSize: 20,
                  color: "#999",
                  padding: [0, 0, -20, 10],
                },
              },
            },
            data: [
              {
                value: 100,
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
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" },
            ],
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
    this.chartGauge1();
    this.chartGauge2();
    this.chartPie();
    this.chartFunnel();
  },
};
</script>

<style>
</style>
