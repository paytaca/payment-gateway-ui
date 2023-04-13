<template>
    <div class="container">
      <Bar v-if="loaded" :data="chartData" />
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
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
        const response = await fetch('http://192.168.1.16:7878/test/api/total')
        const { userlist } = await response.json()
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
              data: userlist.map((value) => value.total),
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
  