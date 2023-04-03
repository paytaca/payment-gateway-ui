<template>
    <PolarArea :data="data" :options="options" />
  </template>
  
  <script lang="ts">
  import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js'
  import { PolarArea } from 'vue-chartjs'
  import * as chartConfig from '~/polarchartConfig.js'
  
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)
  
  export default {
    name: 'appPolarchart',
    components: {
      PolarArea
    },
    data() {
      return chartConfig
    }
  }
  </script>
  