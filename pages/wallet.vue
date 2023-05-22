<template>
    <!--HEADER-->
    <appHeader />
    <!--SIDEBAR-->
    <appSidebar/>
       
    <div class="content">
        <h2 class="mt-3 text-xl font-bold">Link your Wallet...</h2>

        <div class="w-1/5 h-1/5 rounded-3xl overflow-hidden shadow-lg bg-[#ffffff] object-center mt-5 inline-block">
            <div class="py-4 px-4 text-center"> 
                <img class="w-16 mx-auto my-7" src="~/assets/images/paytaca-logo.png"/>
                <div class="font-bold text-xl mb-2">Paytaca</div>

                <!--Connect to Modalbutton-->
                <paytacaConnect />
                <!--end-->
            </div>
        </div>

        <div class="w-1/5 h-1/5 rounded-3xl overflow-hidden shadow-lg bg-[#ffffff] object-center mt-5 inline-block ml-5">
            <div class="py-4 px-4 text-center"> 
                <img class="w-20 mx-auto my-6" src="~/assets/images/coinsph.png"/>
                <div class="font-bold text-xl mb-2">Coins.ph</div>

                <!--Connect to Modalbutton-->
                <coinsphConnect />
                <!--end-->
            </div>
        </div>

        <div class="h-16"></div>

        <div class="mb-5" v-if="isWalletConnected">
            <h2 class="mt-3 text-xl font-bold">Connected Wallet...</h2>

            <div class="w-1/5 h-1/6 rounded-3xl overflow-hidden shadow-lg bg-[#ffffff] object-center mt-5 inline-block">
                <div class="py-4 px-4 text-center"> 
                    <img class="w-24 mx-auto my-7" src="~/assets/images/paytaca-logo.png"/>
                    <div class="font-bold text-xl mb-2">Paytaca</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      isWalletConnected: false
    }
  },
  mounted() {
    $fetch('http://192.168.1.7:7878/payment-gateway/user/info/', {
      method: 'GET',
      params: {
        token: localStorage.token,
      }
    })
    .then(response => {
      console.log(response)
      if (response.paytaca === true) {
        this.isWalletConnected = true;
      } else {
        this.isWalletConnected = false;
      }
    })
  }
}
</script>