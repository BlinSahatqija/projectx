<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    // if (this.$store.getters['darkMode/isDarkMode']) {
    //   document.body.classList.add('dark-mode');
    // }

    const isDarkMode = this.$store.getters['darkMode/isDarkMode'];
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }
};
</script>

<style>
@import './assets/styles.css';


</style>