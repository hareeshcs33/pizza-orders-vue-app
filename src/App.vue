<template>
  <div id="app">
    <header-section></header-section>
    <router-view/>
  </div>
</template>

<script>
import HeaderSection from './components/header-section';
export default {
  name: 'App',
  components: {
    HeaderSection
  }
}
</script>

<style>
#app {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #454545;
}
body {
  margin: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
