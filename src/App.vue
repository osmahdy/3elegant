<template>
  <navbarAndHot v-if="!$route.meta.hideNavbar"></navbarAndHot>
  <router-view />
</template>

<script>
import navbarAndHot from '@/components/sections/navbarAndHot.vue';
export default {
  components: {
    navbarAndHot
  }
}
</script>


<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100vh;
}

* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
