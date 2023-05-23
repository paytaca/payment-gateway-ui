<template>
  <div class="background">
      <loginForm />
  </div>
</template>

<script>
import loginForm from '~/components/loginForm.vue'

export default {
  components: {
      loginForm
  }
}
</script>

<style>
  .background{
      overflow: hidden;
      background-color: #ececec;     
      background: url(~/assets/images/bg.png);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100vh;
    }
</style>