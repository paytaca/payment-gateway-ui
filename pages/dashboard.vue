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
        <div class="flex">
  
          <div class="inline-block border-0 rounded-lg mt-5 py-2 px-2 shadow-lg flex-col bg-white outline-none focus:outline-none mx-auto w-3/4 h-72">
            <appTodaySales />
          </div>
          
            <div class="border-0 rounded-lg mt-5 shadow-lg flex-col bg-white outline-none focus:outline-none ml-5 mr-5 py-2 w-1/4 h-72">
              
              <appPiechart />
            </div>
  
        </div>
        <!--SECOND ROW CONTENT-->
        <div class="flex">
  
          <div class="border-0 rounded-lg mt-5 px-2 shadow-lg flex-row bg-white outline-none focus:outline-none py-2 w-2/4 h-72">
            <appBarchart />
          </div>
            
          <div class="border-0 rounded-lg mt-5 px-2 shadow-lg flex-row bg-white outline-none focus:outline-none py-2 ml-5 mb-2 mr-5 w-2/4 h-72">
              <appPolarchart />
          </div>
  
        </div>
        <!--THIRD ROW CONTENT-->
        <div class="flex">
  
         <div class="inline-block border-0 rounded-lg mt-3 px-2 py-2 shadow-lg flex-col bg-white outline-none focus:outline-none mr-5 w-full mb-5 h-72">
            <appLinechart />
          </div>
  
        </div>
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