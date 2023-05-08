<template>
    <Line v-if="loaded" :data="chartData" :options="chartOptions"/>  
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale } from 'chart.js'
import axios from "axios";

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale)

export default {
  name: 'LineChart',
  components: { Line },
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
      const response = await axios.get('http://192.168.1.6:7878/payment-gateway/total-sales-year/', { mode: "no-cors"})
      const year = response.data.map(item => item.total_sale)

      this.chartData = {
        labels: [
          '2021',
          '2022',
          '2023',
          '2024',
          '2025',
          '2026',
          '2027',
          '2028',
          '2029',
          '2030',
          '2031',
          '2032',
        ],
        datasets: [
          {
            label: 'Yearly Sales',
            backgroundColor: '#0036fa',
            fill: false,
            data: year,
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