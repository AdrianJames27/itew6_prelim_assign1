<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {

      }
    }
  }
</script>

<style>
  #app {
    height: 100%;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>