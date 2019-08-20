<template>
  <div class="container-application-content text-base">
    <div class="container text-black flex flex-col">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: "app"
}
</script>

<style>
body {
  background-color: #fff;
  font-size: "16px";
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
