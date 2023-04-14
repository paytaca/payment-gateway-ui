<template>
    <!--HEADER-->
    <appHeader />
    <!--SIDEBAR-->
    <appSidebar/>
       
    <h2 class="mt-3 text-xl font-bold">Link your Wallet...</h2>

    <div class="w-1/6 h-1/6 rounded-3xl overflow-hidden shadow-lg bg-[#ffffff] object-center mt-5 inline-block">
        <div class="py-4 px-4 text-center"> 
            <img class="w-16 mx-auto my-7" src="~/assets/images/paytaca-logo.png"/>
            <div class="font-bold text-xl mb-2">Paytaca</div>

            <!--Connect to Modalbutton-->
            <paytacaConnect />
            <!--end-->
        </div>
    </div>

    <div class="w-1/6 h-1/6 rounded-3xl overflow-hidden shadow-lg bg-[#ffffff] object-center mt-5 inline-block ml-5">
        <div class="py-4 px-4 text-center"> 
            <img class="w-20 mx-auto my-6" src="~/assets/images/coinsph.png"/>
            <div class="font-bold text-xl mb-2">Coins.ph</div>

            <!--Connect to Modalbutton-->
            <coinsphConnect />
            <!--end-->
        </div>
    </div>
</template>

<script>
</script>

<style >

</style>