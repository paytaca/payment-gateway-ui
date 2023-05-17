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
      <dropdown />
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
export default {
  data() {
    return {
      isWooCommerceConnected: false,
      showDropdown: true,
      stores: [],
      isWalletConnected: false,
      showModal: false
    };
  },
  mounted() {
    $fetch('http://192.168.1.10:7878/payment-gateway/user/info/', {
      method: 'GET',
      params: {
        token: localStorage.token,
      }
    })
    .then(response => {
      console.log(response);
      if (response.woocommerce === true) {
        this.isWooCommerceConnected = true;
      } else {
        this.isWooCommerceConnected = false;
      }
      
      if (this.isWooCommerceConnected) {
        if (this.stores.length === 0) {
          this.showDropdown = false;
        }
      }
    })
    .catch(error => {
      console.error('An error occurred while fetching user info:', error);
    });
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