<template>
    <!--HEADER-->
    <appHeader />
    <!--SIDEBAR-->
       <appSidebar/>
       
       <h2 class="mt-3 text-xl font-bold">Choose a Store...</h2>

       <div class="w-60 rounded-3xl overflow-hidden shadow-lg bg-[#ffffff] object-center mt-5 inline-block">
                    <div class="py-4 px-4 text-center"> 
                        <img class="w-24 mx-auto my-7" src="~/assets/images/uwucommerce.png "/>
                        <div class="font-bold text-lg mb-2">WooCommerce</div>
                        
                        <!--MODAL-->

                        <div class="overflow-hidden">
                            <button class="text-xs underline text-blue-500" type="button" v-on:click="toggleModal()">
                                How to connect your Store?
                            </button>
                            <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                            <div class="relative w-auto my-6 mx-auto max-w-3xl">
                                <!--content-->
                                <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-3/4 bg-white outline-none focus:outline-none mx-auto">
                                <!--header-->
                                <div class="flex items-center border-b border-solid border-slate-200 rounded-t">
                                    <img class="w-24 mx-auto mt-1 mb-1" src="~/assets/images/woocommerce_tag.png "/>
                                </div>
                                <!--body-->
                                <div class="relative p-6 flex-auto text-left">
                                    <p class="my-4 text-slate-500 text-base leading-relaxed">
                                        1. Go to WooCommerce Settings then click the Advanced tab. <br>
                                        2. Click the Legacy API text then click the checkbox and save changes. <br>
                                        3. Next, go to REST API and click the Add key button. <br>
                                        4. Now, enter a name for your key and change permission to Read/Write instead of Read only and click the Generate API key button. <br>
                                        5. After that, your Consumer Key and Consumer Secret will generate automatically. <br>
                                        6. Lastly, copy your Consumer key and Consumer Secret to get connected.
                                    </p>
                                </div>
                                <!--footer-->
                                <div class="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                                    <button class="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                                    Close
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </div>

                        <!--Connect to Modalbutton-->
                        <connectModal />
                        <!--end-->
                    </div>
                </div>

                <div class="w-60 rounded-3xl overflow-hidden shadow-lg bg-[#ffffff] object-center mt-5 inline-block ml-5">
                    <div class="py-4 px-4 text-center"> 
                        <img class="w-16 mx-auto my-5" src="~/assets/images/shopify.png "/>
                        <div class="font-bold text-lg mb-2">Shopify</div>

                <!--MODAL-->
                        
                <div class="overflow-hidden">
                            <button class="text-xs underline text-blue-500" type="button" v-on:click="toggleModal()">
                                How to connect your Store?
                            </button>
                            <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                            <div class="relative w-auto my-6 mx-auto max-w-3xl">
                                <!--content-->
                                <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-3/4 bg-white outline-none focus:outline-none mx-auto">
                                <!--header-->
                                <div class="flex items-center border-b border-solid border-slate-200 rounded-t">
                                    <img class="w-24 mx-auto mt-1 mb-1" src="~/assets/images/woocommerce_tag.png "/>
                                </div>
                                <!--body-->
                                <div class="relative p-6 flex-auto text-left">
                                    <p class="my-4 text-slate-500 text-base leading-relaxed">
                                        1. Go to WooCommerce Settings then click the Advanced tab. <br>
                                        2. Click the Legacy API text then click the checkbox and save changes. <br>
                                        3. Next, go to REST API and click the Add key button. <br>
                                        4. Now, enter a name for your key and change permission to Read/Write instead of Read only and click the Generate API key button. <br>
                                        5. After that, your Consumer Key and Consumer Secret will generate automatically. <br>
                                        6. Lastly, copy your Consumer key and Consumer Secret to get connected.
                                    </p>
                                </div>
                                <!--footer-->
                                <div class="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                                    <button class="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                                    Close
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </div>

                        <!--Connect to Modalbutton-->
                        <connectModal />
                        <!--end-->
                    </div>
                </div>


</template>

<script>
    export default {
    name: "regular-modal",
        data() {
            return {
            showModal: false
            }
        },
        methods: {
            toggleModal: function(){
            this.showModal = !this.showModal;
            }
        }
    }
</script>

<style >

</style>