<template>
  <div class="mx-5 my-3">
    <div class="m-1">Login</div>
    <router-link :to="{ name: 'Welcome' }" class="button-default" tag="button">Welcome</router-link>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>
