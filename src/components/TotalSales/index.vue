<template>
  <common-card title="今日销售额" :value="salesToday">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">{{ salesGrowthLastDay }} %</span>
          <div class="increase" />
        </div>
        <!-- <div class="compare">
          <span>月同比</span>
          <span class="emphasis">{{ salesGrowthLastMonth }}</span>
          <div class="decrease" />
        </div> -->
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="emphasis">￥{{ salesLastDay }}</span>
    </template>
  </common-card>
</template>

<script>
import { getTotalSales } from "../../api";
import CommonCard from "../../components/CommonCard";

export default {
  data() {
    return {
      salesLastDay: "",
      salesGrowthLastDay: "",
      salesToday: "",
    };
  },
  components: {
    CommonCard,
  },
  mounted() {
    getTotalSales().then((data) => {
      console.log(data);
      this.salesLastDay=data.data.salesLastDay
      this.salesGrowthLastDay=data.data.salesGrowthLastDay
      this.salesToday="￥"+data.data.salesToday
    });
  },
};
</script>

<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}
</style>
