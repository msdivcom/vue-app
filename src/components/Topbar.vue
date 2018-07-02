<template>
    <div class="topbar">
        <div class="brand">
            <router-link to="/">Logo</router-link>
        </div>
        <div class="nav">
            <navigation></navigation>
        </div>
    </div>
</template>
<script>
import Navigation from './Navigation'
export default {
  name: 'topbar',
  components: {
    Navigation
  }
}
</script>
<style>
    .topbar{
        padding: 1em;
        background-color: #2c3e50;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .topbar a,
    .topbar a:visited{
        color: white;
    }
</style>
