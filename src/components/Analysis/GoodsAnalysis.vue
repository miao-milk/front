<template>
  <div id="app">
    <div id="charTradar" style="width: 100%; height: 500px"></div>
    <div id="chartPie" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
import { getProductSalesCharacteristics } from "../../api";
export default {
  name: "app",
  data() {
    return {
      legendTitle: ["会员喜爱特征"],
      indicator1:[],
      indicator2:[],
      favoriteFeatureDataList:{},
      seriesDataList:[]
    };
  },
  methods: {
  async  charTradar() {
      var chartDom = document.getElementById("charTradar");
      var myChart = this.$echarts.init(chartDom);
      var option;
     await getProductSalesCharacteristics().then((data) => {
        console.log(data);
        data.data.legendTitle.forEach((value) => {
          this.legendTitle.push(value);
        });
        data.data.favoriteFeature.forEach((value) => {
           this.indicator1.push({
             text:value,
             max:20
           });
        });  
         data.data.indicators.forEach((value) => {
           this.indicator2.push({
             text:value,
             max:20
           });
        }); 
        
        this.favoriteFeatureDataList=data.data.favoriteFeatureDataList
        console.log(data.data.favoriteFeatureDataList["iPhone"]);
         data.data.legendTitle.forEach((value) => {
           console.log(value);
            this.seriesDataList.push({
             value:value,
             name:data.data.favoriteFeatureDataList[value]
           });
        }); 
        // this.seriesDataList=data.data.seriesDataList
      });
     // console.log( this.legendTitle);
     // console.log(this.indicator1);
      //遍历标题封装数据
      console.log("==========");
    
      console.log(this.seriesDataList);
      option = {
        title: {
          text: "商品销售特征雷达图",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "center",
          data: this.legendTitle,
        },
        radar: [
          {
            indicator: this.indicator1,
            center: ["25%", "40%"],
            radius: 80,
          },
          {
            indicator:this.indicator2,
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
                value:this.favoriteFeatureDataList.茅台,
                name: this.legendTitle[0],
              },
            ],
          },
          {
            type: "radar",
            radarIndex: 1,
            areaStyle: {},
            data:  this.seriesDataList
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

    //this.chartPie();
  },
};
</script>

<style>
</style>
