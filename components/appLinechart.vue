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
  const store = localStorage.store_url;

  try {
    const response = await fetch('http://192.168.1.7:7878/payment-gateway/total-sales-year/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        store_url: store,
      }),
    })
    if (response.ok) {
      const responseData = await response.json()
      console.log('Response Data Year:', responseData)

      // Extract the year and total sale values from responseData
      const years = responseData.map(item => item.year)
      const totalSales = responseData.map(item => parseFloat(item.total_sale))

    this.chartData = {
      labels: years,
      datasets: [
        {
          label: 'Yearly Sales',
          backgroundColor: '#0036fa',
          fill: false,
          data: totalSales,
        },
      ],
    }
    } else {
        console.error('Failed to fetch chart data')
      } 
    this.loaded = true
  } catch (e) {
    console.error(e)
  }
}
}
</script>