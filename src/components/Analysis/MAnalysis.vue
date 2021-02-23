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
import { getPurchaseAmount, getConsumptionRanking } from "../../api";
import BMapScatter from "../BMapScatter";
export default {
  name: "app",
  components: {
    BMapScatter,
  },
  data() {
    return {
      BarXAxis: [],
      BarSeries: [],
      legend: [],
      title: [],
      seriesDate: [],
    };
  },
  methods: {
    async chartBar() {
      var chartDom = document.getElementById("chartBar");
      var myChart = this.$echarts.init(chartDom);
      var option;
      await getPurchaseAmount().then((data) => {
        console.log(data);
        console.log(data.data.xaxisData);
        this.BarXAxis = data.data.xaxisData;
        this.BarSeries = data.data.seriesData.data;
      });
      console.log(this.BarXAxis);
      console.log(this.BarSeries);
      option = {
        xAxis: {
          type: "category",
          data: this.BarXAxis,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.BarSeries,
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
    async chartFunnel() {
      var chartDom = document.getElementById("chartFunnel");
      var myChart = this.$echarts.init(chartDom);
      var option;
      await getConsumptionRanking().then((data) => {
        console.log(data);
        let keys = Object.keys(data.data);
        //console.log(keys);
        this.title = keys;
        this.title.forEach((value) => {
          //this.legendTitle.push(value);
          // console.log(value);
          this.seriesDate.push({
            value: data.data[value],
            name: value,
          });
          console.log(this.seriesDate);
        });
      });
      option = {
        title: {
          text: "消费用户排名",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}元",
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
                formatter: "{b}成交金额: {c}元",
              },
            },
            data: this.seriesDate
          },
          {
            name: "成交金额",
            type: "funnel",
            left: "10%",
            width: "80%",
            maxSize: "80%",
            label: {
              position: "inside",
              formatter: "{c}元",
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
                formatter: "{b}成交金额: {c}元",
              },
            },
            data: this.seriesDate,
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
