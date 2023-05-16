<template>
    <div class="container w-1/3 mx-auto items-center justify-center lg:justify-between bg-white p-6 pt-3 rounded-xl shadow-lg shadow-slate-300 my-20 h-full">
        <div class="columns">
            <div class="w-full">
                <img class="w-52 mx-auto mt-2 mb-3" src="~/assets/images/bchlogo.png "/>
                <h2 class="text-center font-semibold text-2xl my-6">Welcome back!</h2>

                <!-- <Notification :message="error" v-if="error"/> -->

                <form v-on:submit.prevent="submitloginForm">
                    <div class="mt-3">
                        <label class="font-semibold text-slate-500 ">Email</label>
                        <input
                        type="email"
                        class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                        name="email"
                        v-model="email"
                        required
                        />
                    </div>
                    <div class="mt-3">
                        <label class="font-semibold text-slate-500">Password</label>
                        <input
                        type="password"
                        class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                        name="password"
                        v-model="password"
                        required
                        />
                    </div>
                    <div class="control">
                        <button class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5 w-full shadow-[0_4px_9px_-4px_#3b71ca]" type="submit">Log In</button>
                    </div>
                </form>
                <div class="text-center" style="margin-top: 20px">
                    <p>
                        Don't have an account? <nuxt-link to="/register"><span class="text-blue-700 font-bold">Register</span></nuxt-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'

let email = ref('')
let password = ref('')
let errors = ref([])
const router = useRouter()

async function submitloginForm() {
  errors.value = []

  if (errors.value.length === 0) {
    await $fetch('http://192.168.1.10:7878/payment-gateway/user/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })
    .then(response => {
        console.log(email.value)
        console.log(password.value)
        console.log(response)
        console.log(response.status)
        console.log(response.token)
        $fetch('http://192.168.1.10:7878/payment-gateway/user/info/', {
          method: 'GET',
          params: {
            token: response.token,
          }
        })
        .then(response => {
          console.log(response)
          localStorage.user_id = response.user_id
          localStorage.username = response.username
        })
        if (response.token != null) {
            localStorage.email = email.value
            localStorage.token = response.token
            console.log(localStorage.token)

            const storedUser = localStorage.getItem('user')

            if (storedUser) {
              // New user logging in for the first time
              localStorage.removeItem('user')
              router.push('/wallet')
            } else {
              // Existing user logging in
              // Perform login logic here
              // Redirect to dashboard or any other page as needed
              router.push('/dashboard')
            }
        }
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

<style>

</style>