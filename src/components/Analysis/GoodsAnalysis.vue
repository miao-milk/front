<template>
  <div id="app">
    <div id="charTradar" style="width: 100%; height: 500px"></div>
    <div id="chartPie" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
import { getProductSalesCharacteristics,getCommoditySales } from "../../api";
export default {
  name: "app",
  data() {
    return {
      legendTitle: ["会员喜爱特征"],
      indicator1:[],
      indicator2:[],
      favoriteFeatureDataList:{},
      seriesDataList:[],
      PieTitle:["miao"],
      PieXAxis:[],
      Pieseries:[]

    };
  },
  methods: {
  async  charTradar() {
      var chartDom = document.getElementById("charTradar");
      var myChart = this.$echarts.init(chartDom);
      var option;
     await getProductSalesCharacteristics().then((data) => {
        //console.log(data);
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
        //console.log(data.data.favoriteFeatureDataList["iPhone"]);
         data.data.legendTitle.forEach((value) => {
           //console.log(value);
            this.seriesDataList.push({
             value:data.data.favoriteFeatureDataList[value],
             name:value
           });
        }); 
        // this.seriesDataList=data.data.seriesDataList
      });
     // console.log( this.legendTitle);
     // console.log(this.indicator1);
      //遍历标题封装数据
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
            data:this.seriesDataList
          },
        ],
      };
      option && myChart.setOption(option);
    },
   async chartPie() {
      var chartDom = document.getElementById("chartPie");
      var myChart = this.$echarts.init(chartDom);
      var option;
     await getCommoditySales().then((data)=>{
        console.log(data.data);
        let keys = Object.keys(data.data.seriesData);
        this.PieTitle=keys
        this.PieXAxis=data.data.xaxisData
        console.log(this.PieTitle);
         this.PieTitle.forEach((value) => {
          //this.legendTitle.push(value);
          // console.log(value);
          this.Pieseries.push({
            name: value,
            type: "line",
            stack: "总量",
            data: data.data.seriesData[value]
          })
          console.log(this.Pieseries);
        });
      })
      option = {
        title: {
          text: "商品销售额",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: this.PieTitle,
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
          data: this.PieXAxis,
        },
        yAxis: {
          type: "value",
        },
        series: this.Pieseries
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
