<template>
    <div>
        <div class="overflow-hidden">
            <button class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4 w-11/12 " type="button" v-on:click="toggleModal()">Connect</button>
                <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                    <div class="relative my-6 w-full">
                                <!--content-->
                        <div class="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none mx-auto w-2/5">
                                <!--header-->
                                <div class="flex items-center justify-end mr-1 mt-1 rounded-full">
                                    <button class="px-2 font-xs mt-1" type="button" v-on:click="toggleModal()">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" class="fill-gray-400" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/></svg>
                                    </button>
                                </div>
                            <div class="flex items-center">
                                <img class="w-30 mx-auto mt-3 mb-1" src="~/assets/images/woocommerce_tag.png "/>
                            </div>
                                <!--body-->
                                <form class="relative p-6 pt-0 flex-auto text-left" v-on:submit.prevent="submitForm">
                                    <p class="my-4 font-medium text-slate-700  text-base leading-relaxed">
                                       Store URL:
                                    </p>
                                    <input class="w-full bg-gray-100 rounded-lg p-2 ml-0" v-model="url" placeholder="URL...">
                                    <p class="my-4 font-medium text-slate-700 text-base leading-relaxed">
                                       Enter your Consumer Key:
                                    </p>
                                    <input class="w-full bg-gray-100 rounded-lg p-2 ml-0" v-model="key" placeholder="Consumer Key...">
                                    <p class="my-4 font-medium text-slate-700 text-base leading-relaxed">
                                       Enter your Consumer Secret:
                                    </p>
                                    <input class="w-full bg-gray-100 rounded-lg p-2 ml-0" v-model="secret" placeholder="Consumer Secret...">
                                    <!--footer-->
                                    <button class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4 w-full">
                                        Connect
                                    </button>
                                </form>
                                </div>
                            </div>
                        </div>
                    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
    </div>
</template>

<script>
     export default {
    name: "connectModal",
        data() {
            return {
              connectedStoreCount: 0,
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

<script setup>
import { ref } from 'vue'

let store_type = ref('')
let url = ref('')
let key = ref('')
let secret = ref('')
let errors = ref([])

async function submitForm() {
  errors.value = []

  await $fetch('http://192.168.1.12:7878/payment-gateway/user/info/', {
            method: 'GET',
            params: {
              token: localStorage.token,
            }
          })
          .then(response => {
            console.log(response)
            localStorage.user_id = response.user_id
          })
  if (errors.value.length === 0) {
    await $fetch('http://192.168.1.12:7878/payment-gateway/user/storefront/', {
      method: 'POST',
      body: {
        account: parseInt(localStorage.user_id),
        store_type: "woocommerce",
        store_url: url.value,
	      key: key.value,
        secret: secret.value
      }
    })
      .then(response => {
        alert("Store is successfully connected!")
        console.log('response', response);
        localStorage.store_url = url.value
        this.connectedStoreCount += 1;
        console.log(localStorage.store_url)
        // console.log(localStorage.user_id)
        url.value = ''
        key.value = ''
        secret.value = ''
      })
      .catch(error => {
        if (error.response) {
          for (const property in error.response._data) {
            errors.value.push(`${property}: ${error.response._data[property]}`)
          }
          console.log(JSON.stringify(error.response))
        } else if (error.message) {
          errors.value.push('Something went wrong')
          console.log(JSON.stringify(error))
        }
      })
  }
}
</script>