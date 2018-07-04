<template>
  <div id="app">
  <topbar></topbar>
    <router-view/>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Loader from './components/Loader'
export default {
  name: 'App',
  components: {
    Topbar,
    Loader
  }
}
</script>

<style>
 html,body{
    margin: 0;
    padding: 0 ;
  }
  img{
    width: 100%;
    height: auto;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
