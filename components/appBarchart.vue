<template>
  <Bar v-if="loaded" :data="chartData" :options="chartOptions"/>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import axios from "axios";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      loaded: false,
      chartData: null,
      chartOptions: {
        maintainAspectRatio: false,
      }
    }
  },
  async mounted() {
  this.loaded = false
  const store = localStorage.store_url;
  console.log(store, 'monthly before')
  try {
    const response = await fetch('http://192.168.1.31:7878/payment-gateway/total-sales-month/', {
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
      console.log('Response Data:', responseData)

      const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
      const salesData = Array(12).fill(0);

      responseData.forEach(item => {
        const month = Number(item.month.substring(5));
        salesData[month - 1] = parseFloat(item.total_sale);
      });

        this.chartData = {
          labels: labels,
          datasets: [
            {
              label: 'Monthly Sales',
              backgroundColor: '#05fa4e',
              data: salesData,
            },
          ],
        }

        console.log('Chart Data:', this.chartData);
      } else {
        console.error('Failed to fetch chart data')
      } 
  } catch (error) {
    console.error('An error occurred while fetching sales data:', error)
  }

  this.loaded = true
}
}
</script>