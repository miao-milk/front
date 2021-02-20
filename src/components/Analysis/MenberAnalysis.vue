<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="12">
        <span>会员数量走势图</span>
        <div id="chart" style="width: 600px; height: 500px"></div>
        <el-button
          type="primary"
          round
          style="margin-left: 230px"
          @click="dialogVisibleLine = true"
          >查看图解</el-button
        >
      </el-col>
      <el-col :span="12">
        <span>等级会员变化图</span>
        <div id="chartBar" style="width: 600px; height: 500px"></div>
        <el-button
          type="primary"
          round
          style="margin-left: 230px"
          @click="dialogVisibleBar = true"
          >查看图解</el-button
        >
      </el-col>
    </el-row>
    <span>新老会员对比图</span>
    <!-- 会员新老会员对比分析 -->
    <div class="member-level">
      <!-- 新老会员对比分析表(组织架构图) -->
      <div class="section-right-content-box2">
        <h2 class="title">新老会员对比分析</h2>
        <vue2-org-tree
          name="orgTree"
          :data="queryListData"
          :horizontal="horizontal"
          :collapsable="collapsable"
          :label-class-name="labelClassName"
          :render-content="renderContent"
        />
      </div>
    </div>
    <el-button
      type="primary"
      round
      style="margin-left: 600px"
      @click="dialogVisibleTree = true"
      >查看图解</el-button
    >

    <el-dialog title="提示" :visible.sync="dialogVisibleLine" width="30%">
      <span>这是会员数量走势图解析</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleLine = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibleLine = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog title="提示" :visible.sync="dialogVisibleBar" width="30%">
      <span>这是等级会员变化图解析</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleBar = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibleBar = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog title="提示" :visible.sync="dialogVisibleTree" width="30%">
      <span>这是新老会员对比图解析</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleTree = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibleTree = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import OrganizationType from "./organization-type";
import OrganizationTypes from "./organization-types";
export default {
  name: "app",
  components: {
    OrganizationType,
    OrganizationTypes,
  },
  data() {
    return {
      dialogVisibleLine: false,
      dialogVisibleBar: false,
      dialogVisibleTree: false,
      queryListData: {
        label: "总成交客户：", //名称
        type: 1, //类型
        imagesUrl: require("../../assets/user2.png"), //图标,
        currentData: {},
        children: [
          {
            label: "新客户：", //名称
            type: 2, //类型
            imagesUrl: require("../../assets/user1.png"), //图标
            currentData: {},
            children: [
              {
                label: "成交1次客户：",
                type: 1,
                imagesUrl: require("../../assets/user2.png"),
                currentData: {},
              },
              {
                label: "成交多次客户：",
                type: 1,
                imagesUrl: require("../../assets/user2.png"),
                currentData: {},
              },
            ],
          },
          {
            label: "老客户：",
            type: 2, //类型
            imagesUrl: require("../../assets/user1.png"), //图标
            currentData: {},
            children: [
              {
                label: "潜在客户（交易次数=1）:",
                type: 1,
                imagesUrl: require("../../assets/user1.png"),
                currentData: {},
              },
              {
                label: "复购客户(交易次数=2)：",
                type: 1,
                imagesUrl: require("../../assets/user1.png"),
                currentData: {},
              },
              {
                label: "忠实客户(2<交易次数<=5):",
                type: 1,
                imagesUrl: require("../../assets/user1.png"),
                currentData: {},
              },
              {
                label: "粉丝客户(5<交易次数):",
                type: 1,
                imagesUrl: require("../../assets/user1.png"),
                currentData: {},
              },
            ],
          },
        ],
      },
      horizontal: true,
      pictLoading: false,
      btnLoading: false,
      collapsable: false,
      expandAll: true,
      labelClassName: "organizationType1",
      activeIndex: 1,
      mytime: [],
      form: {
        startTime: "",
        endTime: "",
      },
    };
  },
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
          data: ["普通会员", "中级会员", "高级会员"],
          left: "10%",
        },
        brush: {
          toolbox: ["rect", "polygon", "keep", "clear"],
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
            name: "普通会员",
            type: "bar",
            stack: "one",
            emphasis: emphasisStyle,
            data: data1,
          },
          {
            name: "中级会员",
            type: "bar",
            stack: "one",
            emphasis: emphasisStyle,
            data: data2,
          },
          {
            name: "高级会员",
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
    /**树形组件架构组件方法 jsx语法**/
    renderContent(h, data) {
      if (data.type === 1) {
        return (
          <div>
            <OrganizationType
              imagesUrl={data.imagesUrl}
              currentData={data.currentData}
            ></OrganizationType>
          </div>
        );
      } else {
        return (
          <div>
            <OrganizationTypes
              imagesUrl={data.imagesUrl}
              currentData={data.currentData}
            ></OrganizationTypes>
          </div>
        );
      }
    },
  },
  mounted() {
    this.chartline();
    this.chartBar();
    //this.chartTree();
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Microsoft YaHei";
}
@mixin translateX($number) {
  -webkit-transform: translateX($number);
  -moz-transform: translateX($number);
  -ms-transform: translateX($number);
  -o-transform: translateX($number);
  transform: translateX($number);
}
@mixin translateY($number) {
  -webkit-transform: translateY($number);
  -moz-transform: translateY($number);
  -ms-transform: translateY($number);
  -o-transform: translateY($number);
  transform: translateY($number);
}
@mixin translate($number, $number2) {
  -webkit-transform: translateX($number) translateY($number2);
  -moz-transform: translateX($number) translateY($number2);
  -ms-transform: translateX($number) translateY($number2);
  -o-transform: translateX($number) translateY($number2);
  transform: translateX($number) translateY($number2);
}
.section-right-content-box {
  background-color: #fff;
  /*box-shadow: 0px 8px 20px rgba(139, 156, 188, 0.16);*/
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  padding: 33px 12px 16px 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.section-right-content-box2 {
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0px 8px 20px rgba(139, 156, 188, 0.1);
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  padding: 8px 12px 16px 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
.level-analysis {
  overflow: hidden;
  padding: 12px 38px 0;
  margin-top: 18px;
  .level-title {
    color: #333333;
    font-size: 16px;
  }
  .level-item {
    width: 20%;
    float: left;
    .info {
      padding-left: 24px;
      .level-name {
        font-size: 14px;
      }
      .level-value {
        margin-top: 10px;
        font-size: 35px;
        color: #666666;
      }
    }
  }
}
.table-box {
  margin-top: 14px;
}
.button-box {
  margin-top: 90px;
  .float-right-button {
    float: right;
    .button {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      padding: 5px 12px;
      border: 1px solid #2062e7;
      color: #2062e7;
      font-size: 14px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      margin-right: 15px;
      cursor: pointer;
      .button-icon {
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
      }
      .button-title {
        display: inline-block;
        vertical-align: middle;
      }
    }

    .button:last-child {
      margin-right: 0;
    }
  }
}
.form-item {
  overflow: hidden;
  .condition-label {
    float: left;
    height: 40px;
    line-height: 40px;
  }
  .condition-content {
    float: left;
  }
}
.condition-label {
  font-size: 14px;
  font-family: "Microsoft YaHei";
  font-weight: 400;
  line-height: 32px;
  color: rgba(102, 102, 102, 1);
  text-align: right;
  width: 76px;
}
.search-condition .btn-current {
  background-color: rgba(39, 112, 251, 0.1);
  color: #2770fb;
}
.form-row {
  margin-top: 10px;
  overflow: hidden;
}
.input-content {
  margin-left: 0;
  float: left;
  .span-conjunction {
    height: 40px;
    line-height: 40px;
    float: left;
    padding: 0 10px;
  }
}
.analysis-content {
  padding: 20px 0;
  min-height: 700px;
  overflow: hidden;
  .title {
    color: #333333;
    font-size: 36px;
    font-weight: bold;
    line-height: 50px;
    text-align: center;
  }
}
</style>
<style lang="scss">
</style>

