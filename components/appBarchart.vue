<template>
    <Bar v-if="loaded" :data="chartData" />
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
        chartData: null
      }
    },
    async mounted () {
      this.loaded = false

      try {
        const response = await axios.get('http://192.168.1.10:7878/payment-gateway/total-sales-month/', { mode: "no-cors"})
        const month = response.data.map(item => item.total_sale)

        this.chartData = {
          labels: [
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
            'December',
          ],
          datasets: [
            {
              label: 'Monthly Sales',
              backgroundColor: '#05fa4e',
              data: month,
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
  