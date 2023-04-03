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
                    <!-- <img class="w-52 mx-auto mt-2 mb-3" src="~/assets/images/bchlogo.png "/> -->
                    <h2 class="text-center font-semibold text-2xl my-3">Account Settings</h2>
                    <!-- <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div> -->
  
                    <!-- <Notification :message="error" v-if="error"/> -->
  
                    <form method="post" @submit.prevent="register">
                        <div class="field mt-3">
                            <label class="font-semibold text-slate-500">Name</label>
                            <div class="control flex">
                              <input
                                  type="text"
                                  class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-b border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                                  name="name"
                                  required
                                  value="Danil Jeus P. Ampatin"
                                  readonly
                              />
                              <div class='flex items-center justify-center'>
                                    <button class="flex p-2.5 ml-2 text-gray-500 rounded-xl hover:rounded-3xl hover:bg-gray-600 transition-all duration-300 hover:text-gray-100">
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
                                  type="text"
                                  class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-b border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                                  name="username"
                                  required 
                                  value="Tetsuro"
                                  readonly
                              />
                              <div class='flex items-center justify-center'>
                                    <button class="flex p-2.5 ml-2 text-gray-500 rounded-xl hover:rounded-3xl hover:bg-gray-600 transition-all duration-300 hover:text-gray-100">
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
                                  type="email"
                                  class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-b border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                                  name="email"
                                  value="daniljeus.ampatin@evsu.edu.ph"
                                  readonly
                                  required  />
                                  <div class='flex items-center justify-center'>
                                    <button class="flex p-2.5 ml-2 text-gray-500 rounded-xl hover:rounded-3xl hover:bg-gray-600 transition-all duration-300 hover:text-gray-100">
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
                                  type="password"
                                  class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-b border-slate-300 outline-none focus:outline-none focus:ring w-full mt-1"
                                  name="password"
                                  value="Hardcoded"
                                  readonly
                                  required />
                                  <div class='flex items-center justify-center'>
                                    <button class="flex p-2.5 ml-2 text-gray-500 rounded-xl hover:rounded-3xl hover:bg-gray-600 transition-all duration-300 hover:text-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="control flex max-w-full">
                            <button class="text-white mx-auto bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5 w-52 max-w-full shadow-[0_4px_9px_-4px_#3b71ca]">Save Changes</button>
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