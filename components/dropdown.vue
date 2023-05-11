<template>
    <div class="mx-auto mt-3 w-4/12 overflow-y-hidden">
      <label for="filter" class="mr-3">Stores:</label>
      <select id="filter" v-model="selectedOption" class="w-5/6 p-2">
        <option value="">All Stores</option>
        <option v-if="isWooCommerceConnected" value="woocommerce">WooCommerce</option>
        <option v-for="store in stores" :key="store.id" :value="store.id">{{ store.name }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedOption: ''
      }
    }
  }
  </script>
  