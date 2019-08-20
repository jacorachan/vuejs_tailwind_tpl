<template>
  <div class="mx-5 my-3">
    <div class="m-1">Welcome!</div>
    <router-link :to="{ name: 'Login' }" class="button-default" tag="button">Next</router-link>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>
