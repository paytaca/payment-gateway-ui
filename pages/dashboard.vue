<template>
  <div>
    <!---HEADER--->
    <appHeader />
      <!--SIDEBARD-->
       <appSidebar/> 
    </div>
    <!--Charts-->
    <div class="content">
      <!--FIRST ROW CONTENT-->
      <dropdown :isWooCommerceConnected="isWooCommerceConnected" />
      <div class="flex">

        <div v-if="isWalletConnected, isWooCommerceConnected" class="inline-block border-0 rounded-lg mt-5 py-2 px-2 shadow-lg flex-col bg-white outline-none focus:outline-none mx-auto w-3/4 h-72">
          <appTodaySales />
        </div>
        
          <div v-if="isWalletConnected, isWooCommerceConnected" class="border-0 rounded-lg mt-5 shadow-lg flex-col bg-white outline-none focus:outline-none ml-5 mr-5 py-2 w-1/4 h-72">
            
            <appPiechart />
          </div>

      </div>
      <!--SECOND ROW CONTENT-->
      <div class="flex">

        <div v-if="isWalletConnected, isWooCommerceConnected" class="border-0 rounded-lg mt-5 px-2 shadow-lg flex-row bg-white outline-none focus:outline-none py-2 w-2/4 h-72">
          <appBarchart />
        </div>
          
        <div v-if="isWalletConnected, isWooCommerceConnected" class="border-0 rounded-lg mt-5 px-2 shadow-lg flex-row bg-white outline-none focus:outline-none py-2 ml-5 mb-2 mr-5 w-2/4 h-72">
            <appPolarchart />
        </div>

      </div>
      <!--THIRD ROW CONTENT-->
      <div class="flex">

       <div v-if="isWalletConnected, isWooCommerceConnected" class="inline-block border-0 rounded-lg mt-3 px-2 py-2 shadow-lg flex-col bg-white outline-none focus:outline-none mr-5 w-full mb-5 h-72">
          <appLinechart />
        </div>

      </div>
</div>
</template>

<script>
import dropdown from '@/components/dropdown.vue'
import { ref, watchEffect } from 'vue'

export default {
  components: {
    dropdown
  },
  setup() {
    const isWooCommerceConnected = ref(false);
    const isWalletConnected = ref(false);

    // Simulated function to check WooCommerce connection status
    const checkWooCommerceConnection = () => {
      // Replace this with your actual logic to check the connection status
      // For example, you can make an API call to determine the status
      // and update `isWooCommerceConnected` accordingly
      const isConnected = true; // Simulated result
      isWooCommerceConnected.value = isConnected;
    };

    // Simulated function to check wallet connection status
    const checkWalletConnection = () => {
      // Replace this with your actual logic to check the connection status
      // For example, you can make an API call to determine the status
      // and update `isWalletConnected` accordingly
      const isConnected = true; // Simulated result
      isWalletConnected.value = isConnected;
    };

    // Watch the connection status from the connectModal.vue script
    watchEffect(() => {
      checkWooCommerceConnection();
      checkWalletConnection();
    });

    return {
      isWooCommerceConnected,
      isWalletConnected
    };
  }
};
</script>



<style>
  body{
    overflow: hidden;
    background-color: #ececec;
  }
  .content{
    max-width: 100vw;
    max-height: 90vh;
    overflow-y: scroll;
    scrollbar-width: thin;
  }
</style>