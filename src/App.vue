<template>
  <div id="app">
    <nav>
      <router-link to="/itew6_prelim_assign1/">Home</router-link>
      <router-link to="/itew6_prelim_assign1/skills">Skills</router-link>
      <router-link to="/itew6_prelim_assign1/contact">Contact</router-link>
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

.router-link-active {
  color: #ffffff;
  background: #e8491d;
}
</style>