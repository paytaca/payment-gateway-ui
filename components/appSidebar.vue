<template>
    <div class="sidenav">
        <div class="flex float-left mr-5 h-screen">
          <!-- Sidebar -->
            <div class="bg-[#ffffff] text-white w-64 flex-shrink-0">
                <nav class="space-y-1">
                    <ul class=" nav mt-4 ml-2 mr-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <li class="nav-items mr-1 mb-3">
                            <NuxtLink to="/dashboard" class="link-db flex items-center px-7 py-2 text-[#434343] bg-[#FFF] rounded-lg active:bg-blue-200" aria-current="page">  
                                <span><svg clip-rule="evenodd" class="w-8 h-8 pr-3" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.6 11c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-2.092 0-6.908 0-9zm9.4 6c0-.552-.448-1-1-1h-6c-.538 0-1 .477-1 1v3c0 .552.448 1 1 1h6c.552 0 1-.448 1-1zm-1.5.5v2h-5v-2zm-9.4-6v8h-5.6v-8zm10.9-7.5c0-.552-.448-1-1-1-1.537 0-4.463 0-6 0-.552 0-1 .448-1 1v9.6c0 .552.448 1 1 1h6c.552 0 1-.448 1-1 0-2.194 0-7.406 0-9.6zm-1.5.5v8.6h-5v-8.6zm-7.9-.5c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v3.6c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-1.017 0-2.583 0-3.6zm-1.5.5v2.6h-5.6v-2.6z" fill-rule="nonzero"/></svg></span> 
                                Dashboard</NuxtLink>
                        </li>
                        <li class="nav-items mr-2 mb-3">
                            <NuxtLink to="/stores" class="link-db items-center flex px-7 py-2 text-[#434343] bg-[#FFF] rounded-lg active:bg-blue-200" aria-current="page">
                               <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="w-8 h-8 pr-3" viewBox="0 0 24 24"><path d="M9.939 0l-.939 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l2.996-4.971h1.943zm-3.052 0l-2.887 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l4.874-4.971h2.013zm17.113 6.068c0 1.067-.933 1.932-2 1.932s-2-.933-2-2v-1.098l-2.887-4.902h2.014l4.873 4.971v1.097zm-10-1.168v1.098c0 1.066-.933 2.002-2 2.002s-2-.933-2-2v-1.098l1.047-4.902h1.905l1.048 4.9zm2.004-4.9l2.993 5.002v1.098c.001 1.067-.93 1.9-1.997 1.9s-2-.933-2-2v-1.098l-.939-4.902h1.943zm-15.004 10v14h10v-2h-8v-10h18v12h2v-14h-22zm18 4h-6v10h6v-10z"/></svg></span>Stores</NuxtLink>
                        </li>
                        <li class="nav-items mr-2 mb-3">
                            <NuxtLink to="/wallet" class="link-db flex items-center px-7 py-2 text-[#434343] bg-[#FFF] rounded-lg active:bg-blue-200" aria-current="page">
                                <span><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 pr-3"  width="24" height="24" viewBox="0 0 24 24"><path d="M22 2h-14c-1.104 0-2 .896-2 2v4h16v3.5c0 .276-.224.5-.5.5h-1.5v2h2c1.104 0 2-.896 2-2v-8c0-1.104-.896-2-2-2zm0 3h-14v-.5c0-.276.224-.5.5-.5h13c.276 0 .5.224.5.5v.5zm-6 5h-14c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-8c0-1.104-.896-2-2-2zm-7.844 8.333h-.997c-.092 0-.164-.077-.159-.168.017-.288.183-1.231.76-4.939.02-.131.13-.226.259-.226h1.836c.982 0 1.708.577 1.508 1.61-.206 1.075-.862 1.598-2.006 1.598h-.565c-.232.001-.317.088-.346.295l-.29 1.83zm3.802-2.486c-.212 1.105-.937 1.486-1.862 1.486h-.143c-.113 0-.209.083-.227.197l-.201 1.273c-.018.114-.114.197-.227.197h-.684c-.097 0-.172-.087-.157-.183l.346-2.22.016-.014h.539c1.309 0 2.127-.654 2.368-1.892.203.204.274.469.274.749 0 .134-.016.271-.042.407z"/></svg></span>Wallet</NuxtLink>
                        </li>
                        <li class="nav-items mr-2 mb-3">
                            <NuxtLink to="/settings" class="link-db flex items-center px-7 py-2 text-[#434343] bg-[#FFF] rounded-lg active:bg-blue-200" aria-current="page">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="w-8 h-8 pr-3" viewBox="0 0 24 24"><path d="M24 14.187v-4.374c-2.148-.766-2.726-.802-3.027-1.529-.303-.729.083-1.169 1.059-3.223l-3.093-3.093c-2.026.963-2.488 1.364-3.224 1.059-.727-.302-.768-.889-1.527-3.027h-4.375c-.764 2.144-.8 2.725-1.529 3.027-.752.313-1.203-.1-3.223-1.059l-3.093 3.093c.977 2.055 1.362 2.493 1.059 3.224-.302.727-.881.764-3.027 1.528v4.375c2.139.76 2.725.8 3.027 1.528.304.734-.081 1.167-1.059 3.223l3.093 3.093c1.999-.95 2.47-1.373 3.223-1.059.728.302.764.88 1.529 3.027h4.374c.758-2.131.799-2.723 1.537-3.031.745-.308 1.186.099 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.059-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.161-1.076-3.573-.49-1.396.581-1.79 1.693-2.188 2.877h-1.534c-.398-1.185-.791-2.297-2.183-2.875-1.419-.588-2.507-.045-3.579.488l-1.083-1.084c.557-1.118 1.066-2.18.487-3.58-.579-1.391-1.691-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.791 2.875-2.184.578-1.394.068-2.459-.488-3.579l1.084-1.084c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.69 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.419.588 2.506.045 3.579-.488l1.084 1.084c-.556 1.121-1.065 2.187-.488 3.58.577 1.391 1.689 1.784 2.875 2.183v1.534c-1.188.398-2.302.791-2.877 2.183zm-7.125-5.951c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z"/></svg></span>Settings</NuxtLink>
                        </li>
                        <li class="nav-items mr-2 mb-3 ">
                            <button @click="logout" class="link-db select-none flex items-center px-7 py-2 text-[#434343] bg-[#FFF] rounded-lg active:bg-blue-200 w-full" aria-current="page">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="w-8 h-8 pr-3" viewBox="0 0 24 24"><path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z"/></svg></span>Sign Out
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name:'appSidebar',
    methods: {
        logout() {
        localStorage.removeItem('authenticated')
        localStorage.email = null
        localStorage.token = null
        this.$router.push('/')
        }
    }
}
</script>

<style>

</style>