<template>
  <div id="app">
  <topbar></topbar>
  <slider/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Loader from './components/Loader'
import Slider from './components/Slider'

export default {
  name: 'App',
  components: {
    Topbar,
    Loader,
    Slider
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
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 0.6s ease;
}
.fade-leave {}
.fade-leave-active {
    transition: opacity 0.3s ease;
    opacity: 0;
}
</style>
