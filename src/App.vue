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
:root {
  --main-color-1: #FAFAFA;
  --main-color-3: #E8E8E8;
  --main-color-5: #CCCCCC;
  --main-color-7: #AAAAAA;
  --main-color-9: #333333;
}

h1, h2, h3, h4, h5, h6 { margin: 0; }
h1 {font-size: 36px;}
h2 {font-size: 32px;}
h3 {font-size: 28px;}
h4 {font-size: 24px;}
h5 {font-size: 20px;}
h6 {font-size: 16px;}

h1 {
  display: flex;
  align-items: center;
}
h4, h5, h6 {
  font-weight: normal;
}
h1::after {
  content: '';
  height: 1px;
  flex-grow: 1;
  margin-left: 15px;
  width: 100%;
  background: var(--main-color-5);
}

body {
  margin: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  min-height: 100vh;
}
</style>
