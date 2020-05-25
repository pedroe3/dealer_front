<template>
  <div id="app">
      <navigation-bar></navigation-bar>
      <main-view></main-view>
  </div>

</template>
<script>
  import NavigationBar from "./components/Navigation/NavigationBar";
  import MainView from "./views/MainView";
  export default {
    components: {
      MainView,
      NavigationBar
    }
  }
</script>

<style>
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  body {
    color: #2c3e50;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    height: 100%;
  }
</style>
