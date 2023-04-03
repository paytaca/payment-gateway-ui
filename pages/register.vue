<template>
    <div class="container w-1/3 mx-auto items-center justify-center lg:justify-between bg-white p-6 pt-3 rounded-xl shadow-lg shadow-slate-300 my-5 h-full">
        <div class="columns ">
            <div class="w-full ">
                <img class="w-52 mx-auto mt-2 mb-3" src="~/assets/images/bchlogo.png "/>
                <h2 class="text-center font-semibold text-2xl my-3">Sign Up</h2>
                <!-- <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div> -->
  
                <!-- <Notification :message="error" v-if="error"/> -->
  
                <form >
                    <div class="field mt-3">
                        <label class="font-semibold text-slate-500">Name</label>
                        <div class="control">
                          <input
                              type="text"
                              class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                              name="name"
                              v-model="name"
                              required 
                          />
                        </div>
                    </div>
                    <div class="field mt-3">
                        <label class="font-semibold text-slate-500">Username</label>
                        <div class="control">
                          <input
                              type="text"
                              class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                              name="username"
                              v-model="username"
                              required 
                          />
                        </div>
                    </div>
                    <div class="field mt-3">
                        <label class="font-semibold text-slate-500">Email address</label>
                        <div class="control">
                          <input
                              type="email"
                              class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                              name="email"
                              v-model="email"
                              required  />
                        </div>
                    </div>
                    <div class="field mt-3">
                        <label class="font-semibold text-slate-500">Password</label>
                        <div class="control">
                          <input
                              type="password"
                              class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                              name="password"
                              v-model="password"
                              required />
                        </div>
                        
                        </div>
                    <div class="control">
                        <button class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5 w-full shadow-[0_4px_9px_-4px_#3b71ca]" type="submit">Register
                        </button>
                    </div>
                </form>
                <div class="text-center" style="margin-top: 20px">
                    Already got an account? <nuxt-link to="/"><span class="text-blue-700 font-bold">Login</span></nuxt-link>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
   export default {
    data() {
      return {
        showPassword: false,
        password: null
      };
    },
    computed: {
      buttonLabel() {
        return (this.showPassword) ? "Hide" : "Show";
      }
    },
    methods: {
      toggleShow() {
        this.showPassword = !this.showPassword;
      }
    }
  };
  </script>