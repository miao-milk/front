<template>
  <div id="menberl-grade">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">会员等级分布</div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper" style="padding-left: 500px">
            <v-chart :options="categoryOptions" />
          </div>
        </template>
        <el-card shadow="hover" >
          <template v-slot:header>
            <div class="menu-wrapper">
              <div class="title-wrapper">
                <div class="title">消费人群消费总金额</div>
              </div>
            </div>
          </template>
          <template>
            <div class="sales-view-chart-wrapper" >
              <v-chart :options="chartOption" style="width: 100%"/>
            </div>
          </template>
        </el-card>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 100,
      categoryOptions: {},
      chartOption: {},
    };
  },

  methods: {
    renderPieChart() {
      const mockData = [
        {
          legendname: "高级消费人群",
          value: 67,
          percent: "10.40%",
          itemStyle: {
            color: "#8d7fec",
          },
          name: "高级消费人群",
        },
        {
          legendname: "中级消费人群",
          value: 97,
          percent: "30.30%",
          itemStyle: {
            color: "#5085f2",
          },
          name: "中消费人群",
        },
        {
          legendname: "低消费人群",
          value: 67,
          percent: "60.40%",
          itemStyle: {
            color: "#f8726b",
          },
          name: "低消费人群",
        },
      ];
      this.categoryOptions = {
        title: [
          {
            text: `会员等级分布`,
            textStyle: {
              fontSize: 14,
              color: "#666",
            },
            left: 20,
            top: 20,
          },
          {
            text: "会员总数",
            subtext: this.total,
            x: "34.5%",
            y: "42.5%",
            textStyle: {
              fontSize: 14,
              color: "#999",
            },
            subtextStyle: {
              fontSize: 28,
              color: "#333",
            },
            textAlign: "center",
          },
        ],
        series: [
          {
            name: "会员等级分布",
            type: "pie",
            data: mockData,
            label: {
              normal: {
                show: true,
                position: "outter",
                formatter: function (params) {
                  return params.data.legendname;
                },
              },
            },
            center: ["35%", "50%"],
            radius: ["45%", "60%"],
            labelLine: {
              normal: {
                length: 5,
                length2: 3,
                smooth: true,
              },
            },
            clockwise: false,
            itemStyle: {
              borderWidth: 4,
              borderColor: "#fff",
            },
          },
        ],
        legend: {
          type: "scroll",
          orient: "vertical",
          height: 250,
          left: "70%",
          top: "middle",
          textStyle: {
            color: "#8c8c8c",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            const str =
              params.seriesName +
              "<br />" +
              params.marker +
              params.data.legendname +
              "<br />" +
              "数量：" +
              params.data.value +
              "<br />" +
              "占比：" +
              params.data.percent +
              "%";
            return str;
          },
        },
      };
    },
    
    render() {
      var dataAxis = ["高级消费人群", "中高消费人群", "中消费人群" ];
      var data = [220, 182, 191];
      this.chartOption = {
        title: {
          text: "等级会员销售金额",
          textStyle: {
            fontSize: 12,
            color: "#666",
          },
          left: 25,
          top: 20,
        },
        xAxis: {
          type: "category",
          data: dataAxis,
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: "#999",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#999",
            },
          },
          axisLabel: {
            color: "#333",
          },
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
              color: "#eee",
            },
          },
        },
        series: [
          {
            type: "bar",
            barWidth: "35%",
            data,
          },
        ],
        color: ["#3398DB"],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50,
        },
      };
    },
  },

  mounted() {
    this.renderPieChart();
    this.render();
  },
};
</script>

<style lang="scss" scoped>
  .sales-view {
    .sales-view-chart-wrapper {
      display: flex;
      height: 270px;

      .echarts {
        flex: 0 0 70%;
        width: 100%;
        height: 100%;
      }

      .sales-view-list {
        flex: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .sales-view-title {
          margin-top: 20px;
          font-size: 12px;
          color: #666;
          font-weight: 500;
        }

        .list-item-wrapper {
          margin-top: 15px;

          .list-item {
            display: flex;
            align-items: center;
            font-size: 12px;
            height: 20px;
            padding: 6px 20px 6px 0;

            .list-item-no {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 20px;
              height: 20px;
              color: #333;

              &.top-no {
                background: #000;
                border-radius: 50%;
                color: #fff;
                font-weight: 500;
              }
            }

            .list-item-name {
              margin-left: 10px;
              color: #333;
            }

            .list-item-money {
              flex: 1;
              text-align: right;
            }
          }
        }
      }
    }
  }
</style>

