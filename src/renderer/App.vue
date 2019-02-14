<template>
  <div id="app">
    <layout-header />
    <layout-container>
      <router-view slot="main" />
    </layout-container>
  </div>
</template>

<script>
import layoutHeader from './components/layout/header.vue'
import layoutContainer from './components/layout/container.vue'

export default {
  name: 'App',
  components: {
    layoutHeader,
    layoutContainer
  }
}
</script>

<style>
body {
  height: 100%;
  background: #f6f6f6;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}

html {
  height: 100%;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
