<template>
  <Pie v-if="loaded" :data="chartData" :options="chartOptions"/>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LinearScale } from 'chart.js'
import axios from "axios";

ChartJS.register(Title, Tooltip, Legend, LinearScale)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      loaded: false,
      chartData: null,
      chartOptions: {
        maintainAspectRatio: false,

      }
    }
  },
  async mounted () {
    this.loaded = false

    try {
      const response = await axios.get('http://192.168.1.10:7878/payment-gateway/total-sales-yesterday/', { mode: "no-cors"})
      const data = response.data.map(item => [item.total_sale, item.total_orders, item.total_customers, item.products_sold]) 

      this.chartData = {
        labels: [
          'Total Sales',
          'Total Orders',
          'Total Customers',
          'Products Sold',
        ],
        datasets: [
          {
            backgroundColor: [
              '#0036fa',
              '#00d0ff',
              '#00ff51',
              '#ffb400',
            ],
            fill: false,
            data: data[0],
          },
          {
            backgroundColor: [
              '#0036fa',
              '#00d0ff',
              '#00ff51',
              '#ffb400',
            ],
            fill: false,
            data: data[1],
          },
          {
            backgroundColor: [
              '#0036fa',
              '#00d0ff',
              '#00ff51',
              '#ffb400',
            ],
            fill: false,
            data: data[2],
          },
          {
            backgroundColor: [
              '#0036fa',
              '#00d0ff',
              '#00ff51',
              '#ffb400',
            ],
            fill: false,
            data: data[3],
          },
        ],
      }
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
