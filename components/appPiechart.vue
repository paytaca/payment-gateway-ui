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
    const store = localStorage.store_url;
    console.log(store, 'yesterday before')

    try {
      const response = await fetch('http://192.168.1.10:7878/payment-gateway/total-sales/', {
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
        console.log('Response Data yesterday:', responseData)

        if (typeof responseData === 'object' && Object.keys(responseData).length > 0) {
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
                data: [
                  responseData.total_sale,
                  responseData.total_orders,
                  responseData.total_customers,
                  responseData.products_sold,
                ],
              },
            ],
          };
          // this.chartData = responseData;
          console.log('Chart Data:', this.chartData);
          // console.log('Sales Object:', this.sales); // Log the sales object
        } else {
          this.chartData = null;
        }
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