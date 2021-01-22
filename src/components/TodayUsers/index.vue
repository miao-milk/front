<template>
  <common-card
    title="今日交易用户数"
    :value="orderUser"
  >
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">{{returnRate}}</span>
    </template>
  </common-card>
</template>

<script>
import CommonCard from '../../components/CommonCard'
  export default {
  components: {
    CommonCard
  },
  data() {
    return {
      returnRate: 90,
      orderUser:200,
      orderUserTrend:[100,200,300],
    };
  },
    methods: {
      getOptions() {
        return {
          color: ['#3398DB'],
          tooltip: {},
          series: [{
            name: '用户实时交易量',
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110, 130],
            barWidth: '60%'
          }],
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            show: false
          },
          yAxis: {
            show: false
          },
          grid: {
            top: 0,
            left: 0,
            bottom: 340,
            right: 0
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
