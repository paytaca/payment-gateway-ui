<template>
<div class="">
    <div
        class="font-bold text-lg border-neutral-100 py-2 px-2 dark:border-neutral-600 dark:text-neutral-50">
              Today's Sales
    </div>
    <p class="mb-4 text-base font-semibold px-2 text-neutral-600 dark:text-neutral-200">
        Sales Summary
      </p>
      <div class="container px-2 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        <!-- Remove class [ h-24 ] when adding a card block -->
        <!-- Remove class [ border-gray-300  dark:border-gray-700 bg-red-300 ] to remove dotted border -->
        <div class="rounded-xl shadow-md border-gray-300 dark:border-gray-700 bg-red-100 h-40">
            <div class="fill-white mt-4 ml-4 py-2 px-2 w-10 h-10 bg-red-300 rounded-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 12c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm.5 8.474v.526h-.5v-.499c-.518-.009-1.053-.132-1.5-.363l.228-.822c.478.186 1.114.383 1.612.27.574-.13.692-.721.057-1.005-.465-.217-1.889-.402-1.889-1.622 0-.681.52-1.292 1.492-1.425v-.534h.5v.509c.362.01.768.073 1.221.21l-.181.824c-.384-.135-.808-.257-1.222-.232-.744.043-.81.688-.29.958.856.402 1.972.7 1.972 1.773.001.858-.672 1.315-1.5 1.432zm1.624-10.179c1.132-.223 2.162-.626 2.876-1.197v.652c0 .499-.386.955-1.007 1.328-.581-.337-1.208-.6-1.869-.783zm-2.124-5.795c2.673 0 5-1.007 5-2.25s-2.327-2.25-5-2.25c-2.672 0-5 1.007-5 2.25s2.328 2.25 5 2.25zm.093-2.009c-.299-.09-1.214-.166-1.214-.675 0-.284.334-.537.958-.593v-.223h.321v.211c.234.005.494.03.784.09l-.116.342c-.221-.051-.467-.099-.708-.099l-.072.001c-.482.02-.521.287-.188.399.547.169 1.267.292 1.267.74 0 .357-.434.548-.967.596v.22h-.321v-.208c-.328-.003-.676-.056-.962-.152l.147-.343c.244.063.552.126.828.126l.208-.014c.369-.053.443-.3.035-.418zm-11.093 13.009c1.445 0 2.775-.301 3.705-.768.311-.69.714-1.329 1.198-1.899-.451-1.043-2.539-1.833-4.903-1.833-2.672 0-5 1.007-5 2.25s2.328 2.25 5 2.25zm.093-2.009c-.299-.09-1.214-.166-1.214-.675 0-.284.335-.537.958-.593v-.223h.321v.211c.234.005.494.03.784.09l-.117.342c-.22-.051-.466-.099-.707-.099l-.072.001c-.482.02-.52.287-.188.399.547.169 1.267.292 1.267.74 0 .357-.434.548-.967.596v.22h-.321v-.208c-.329-.003-.676-.056-.962-.152l.147-.343c.244.063.552.126.828.126l.208-.014c.368-.053.443-.3.035-.418zm4.003 8.531c-.919.59-2.44.978-4.096.978-2.672 0-5-1.007-5-2.25v-.652c1.146.918 3.109 1.402 5 1.402 1.236 0 2.499-.211 3.549-.611.153.394.336.773.547 1.133zm-9.096-3.772v-.651c1.146.917 3.109 1.401 5 1.401 1.039 0 2.094-.151 3.028-.435.033.469.107.926.218 1.37-.888.347-2.024.565-3.246.565-2.672 0-5-1.007-5-2.25zm0-2.5v-.652c1.146.918 3.109 1.402 5 1.402 1.127 0 2.275-.176 3.266-.509-.128.493-.21 1.002-.241 1.526-.854.298-1.903.483-3.025.483-2.672 0-5-1.007-5-2.25zm11-11v-.652c1.146.918 3.109 1.402 5 1.402 1.892 0 3.854-.484 5-1.402v.652c0 1.243-2.327 2.25-5 2.25-2.672 0-5-1.007-5-2.25zm0 5v-.652c.713.571 1.744.974 2.876 1.197-.661.183-1.287.446-1.868.783-.622-.373-1.008-.829-1.008-1.328zm0-2.5v-.651c1.146.917 3.109 1.401 5 1.401 1.892 0 3.854-.484 5-1.401v.651c0 1.243-2.327 2.25-5 2.25-2.672 0-5-1.007-5-2.25z"/></svg>
            </div>
            <p class="text-lg font-bold px-4 mt-3 text-neutral-600 dark:text-neutral-200">₱50K</p>
            <p class="text-base font-normal px-4 pt-2 text-neutral-600 dark:text-neutral-200">Total Sales</p>
            <p class="text-xs font-normal px-4 pt-1 text-blue-500 dark:text-neutral-200">+5% from yesterday</p>
        </div>
        
        <!-- Remove class [ h-24 ] when adding a card block -->
        <!-- Remove class [ border-gray-300  dark:border-gray-700 bg-red-300 ] to remove dotted border -->
            
        <div class="rounded-xl shadow-md border-gray-300 dark:border-gray-700 bg-green-200 h-40">
            <div class="fill-white mt-4 ml-4 py-2 px-2 w-10 h-10 bg-green-300 rounded-3xl">
                <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" class="pl-0.5" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z"/></svg>
            </div>
            <p class="text-lg font-bold px-4 mt-3 text-neutral-600 dark:text-neutral-200">500</p>
            <p class="text-base font-normal px-4 pt-2 text-neutral-600 dark:text-neutral-200">Total Orders</p>
            <p class="text-xs font-normal px-4 pt-1 text-blue-500 dark:text-neutral-200">+57% from yesterday</p>
        </div>
        <!-- Remove class [ h-24 ] when adding a card block -->
        <!-- Remove class [ border-gray-300  dark:border-gray-700 bg-red-300 ] to remove dotted border -->
        <div class="rounded-xl shadow-md border-gray-300 dark:border-gray-700 bg-sky-200 h-40">
            <div class="fill-white mt-4 ml-4 py-2 px-2 w-10 h-10 bg-sky-300 rounded-3xl">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12.628 21.412l5.969-5.97 1.458 3.71-12.34 4.848-4.808-12.238 9.721 9.65zm-1.276-21.412h-9.352v9.453l10.625 10.547 9.375-9.375-10.648-10.625zm4.025 9.476c-.415-.415-.865-.617-1.378-.617-.578 0-1.227.241-2.171.804-.682.41-1.118.584-1.456.584-.361 0-1.083-.408-.961-1.218.052-.345.25-.697.572-1.02.652-.651 1.544-.848 2.276-.106l.744-.744c-.476-.476-1.096-.792-1.761-.792-.566 0-1.125.227-1.663.677l-.626-.627-.698.699.653.652c-.569.826-.842 2.021.076 2.938 1.011 1.011 2.188.541 3.413-.232.6-.379 1.083-.563 1.475-.563.589 0 1.18.498 1.078 1.258-.052.386-.26.763-.621 1.122-.451.451-.904.679-1.347.679-.418 0-.747-.192-1.049-.462l-.739.739c.463.458 1.082.753 1.735.753.544 0 1.087-.201 1.612-.597l.54.538.697-.697-.52-.521c.743-.896 1.157-2.209.119-3.247zm-9.678-7.476c.938 0 1.699.761 1.699 1.699 0 .938-.761 1.699-1.699 1.699-.938 0-1.699-.761-1.699-1.699 0-.938.761-1.699 1.699-1.699z"/></svg>
            </div>
            <p class="text-lg font-bold px-4 mt-3 text-neutral-600 dark:text-neutral-200">60</p>
            <p class="text-base font-normal px-4 pt-2 text-neutral-600 dark:text-neutral-200">Products Sold</p>
            <p class="text-xs font-normal px-4 pt-1 text-blue-500 dark:text-neutral-200">+90% from yesterday</p>
        </div>
        <!-- Remove class [ h-24 ] when adding a card block -->
        <!-- Remove class [ border-gray-300  dark:border-gray-700 bg-red-300 ] to remove dotted border -->
        <div class="rounded-xl shadow-md border-gray-300 dark:border-gray-700 bg-purple-200 h-40">
            <div class="fill-white mt-4 ml-4 py-2 px-2 w-10 h-10 bg-purple-300 rounded-3xl">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M7 16.488l1.526-.723c1.792-.81 2.851-.344 4.349.232 1.716.661 2.365.883 3.077 1.164 1.278.506.688 2.177-.592 1.838-.778-.206-2.812-.795-3.38-.931-.64-.154-.93.602-.323.818 1.106.393 2.663.79 3.494 1.007.831.218 1.295-.145 1.881-.611.906-.72 2.968-2.909 2.968-2.909.842-.799 1.991-.135 1.991.72 0 .23-.083.474-.276.707-2.328 2.793-3.06 3.642-4.568 5.226-.623.655-1.342.974-2.204.974-.442 0-.922-.084-1.443-.25-1.825-.581-4.172-1.313-6.5-1.6v-5.662zm-1 6.538h-4v-8h4v8zm1-7.869v-1.714c-.006-1.557.062-2.447 1.854-2.861 1.963-.453 4.315-.859 3.384-2.577-2.761-5.092-.787-7.979 2.177-7.979 2.907 0 4.93 2.78 2.177 7.979-.904 1.708 1.378 2.114 3.384 2.577 1.799.415 1.859 1.311 1.853 2.879 0 .13-.011 1.171 0 1.665-.483-.309-1.442-.552-2.187.106-.535.472-.568.504-1.783 1.629-1.75-.831-4.456-1.883-6.214-2.478-.896-.304-2.04-.308-2.962.075l-1.683.699z"/></svg>
            </div>
            <p class="text-lg font-bold px-4 mt-3 text-neutral-600 dark:text-neutral-200">1,000</p>
            <p class="text-base font-normal px-4 pt-2 text-neutral-600 dark:text-neutral-200">Total Costumers</p>
            <p class="text-xs font-normal px-4 pt-1 text-blue-500 dark:text-neutral-200">+70% from yesterday</p>
        </div>
        <!-- Remove class [ h-24 ] when adding a card block -->
        <!-- Remove class [ border-gray-300  dark:border-gray-700 bg-red-300 ] to remove dotted border -->
    </div>
</div>
</template>

<script>

</script>

<style>

</style>