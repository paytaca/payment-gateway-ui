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

          <div class="border-0 rounded-lg py-5 px-5 shadow-lg flex-col bg-white outline-none focus:outline-none mx-auto w-3/4 h-70 my-6">
            <div class="columns ">
                <div class="w-full ">
                    <h2 class="text-center font-semibold text-2xl my-3">Account Settings</h2>
  
                    <form v-on:submit.prevent="submitForm">
                        <div class="field mt-3">
                            <label class="font-semibold text-slate-500">Name</label>
                            <div class="control flex">
                              <input
                                  class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-b border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                                  type="text" id="full-name" v-model="full_name" :disabled="!isEditing"
                              />
                              <div class='flex items-center justify-center'>
                                    <button class="flex p-2.5 ml-2 text-gray-500 rounded-xl hover:rounded-3xl hover:bg-gray-600 transition-all duration-300 hover:text-gray-100" @click="toggleEdit">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="field mt-3">
                            <label class="font-semibold text-slate-500">Username</label>
                            <div class="control flex">
                              <input
                                  class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-b border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                                  type="text" id="username" v-model="username" :disabled="!isEditing"
                              />
                              <div class='flex items-center justify-center'>
                                    <button class="flex p-2.5 ml-2 text-gray-500 rounded-xl hover:rounded-3xl hover:bg-gray-600 transition-all duration-300 hover:text-gray-100" @click="toggleEdit">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="field mt-3">
                            <label class="font-semibold text-slate-500">Email address</label>
                            <div class="control flex">
                              <input
                                  class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-b border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                                  type="email" id="email" v-model="email" :disabled="!isEditing"/>
                                  <div class='flex items-center justify-center'>
                                    <button class="flex p-2.5 ml-2 text-gray-500 rounded-xl hover:rounded-3xl hover:bg-gray-600 transition-all duration-300 hover:text-gray-100" @click="toggleEdit">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="field mt-3">
                            <label class="font-semibold text-slate-500">Password</label>
                            <div class="control flex">
                              <input
                                  class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-b border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                                  type="password" id="password" v-model="password" :disabled="!isEditing" />
                                  <div class='flex items-center justify-center'>
                                    <button class="flex p-2.5 ml-2 text-gray-500 rounded-xl hover:rounded-3xl hover:bg-gray-600 transition-all duration-300 hover:text-gray-100" @click="toggleEdit">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="control flex max-w-full">
                            <button class="text-white mx-auto bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5 w-52 max-w-full shadow-[0_4px_9px_-4px_#3b71ca]" v-if="isEditing" type="submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
          <!--SECOND ROW CONTENT-->
          <!--THIRD ROW CONTENT-->
  </div>
      
      
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    data() {
      return {
        full_name: '',
        username: '',
        email: '',
        password: '',
        errors: [],
        isEditing: false
      }
    },
    async mounted() {
      $fetch('http://192.168.1.31:7878/payment-gateway/user/info/', {
            method: 'GET',
            params: {
              token: localStorage.token,
            }
          })
          .then(response => {
            console.log(response)
            this.full_name = response.full_name
            this.username = response.username
            this.email = response.email
            this.password = response.password
          })
  
      
    },
    setup() {
      const full_name = ref('')
      const username = ref('')
      const email = ref('')
      const password = ref('')
      const errors = ref([])
      const isEditing = ref(false)
  
      async function submitForm() {
        errors.value = []
  
        await $fetch('http://192.168.1.31:7878/payment-gateway/user/edit/', {
          method: 'PUT',
          body: {
            full_name: full_name.value,
            username: username.value,
            email: email.value,
            password: password.value
          }
        })
          .then(response => {
            alert('Account successfully updated!')
  
            // Store user's updated information in cookie
            document.cookie = `full_name=${full_name.value}`
            document.cookie = `username=${username.value}`
            document.cookie = `email=${email.value}`
            document.cookie = `password=${password.value}`
  
            toggleEdit();
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
      async function toggleEdit() {
          if (isEditing.value) {
              await submitForm()
          }
          isEditing.value = !isEditing.value
      }
  
  
      return {
        full_name,
        username,
        email,
        password,
        errors,
        isEditing,
        submitForm,
        toggleEdit
      }
    }
  }
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