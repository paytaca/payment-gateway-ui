<template>
    <div class="container w-1/3 mx-auto items-center justify-center lg:justify-between bg-white p-6 pt-3 rounded-xl shadow-lg shadow-slate-300 my-20 h-full">
        <div class="columns">
            <div class="w-full">
                <img class="w-52 mx-auto mt-2 mb-3" src="~/assets/images/bchlogo.png "/>
                <h2 class="text-center font-semibold text-2xl my-6">Welcome back!</h2>

                <!-- <Notification :message="error" v-if="error"/> -->

                <form @submit.prevent="submitloginForm">
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

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async submitloginForm() {
                if (this.email === 'daniljeus.ampatin@evsu.edu.ph' && this.password === '123456') {
                    this.$router.push('/dashboard')
                } else {
                    alert('Invalid credentials')
                }
            }
        }
    }
</script>

<style>

</style>