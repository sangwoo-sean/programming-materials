<template>
  <div id="app">
    <Sidebar />
    <Main />
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
export default {
  name: 'App',
  components: {Main, Sidebar},
}
</script>

<style>
body {
  margin: 0;
}
#app {
  display: flex;
  min-height: 100vh;
}
</style>
