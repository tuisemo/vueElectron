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
  body{
    background: #f6f6f6;
  }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
