<template>
    <div>
      <label>
        <input type="checkbox" :checked="isDarkMode" @change="toggleDarkMode">
        <div class="img-cont">
          <img v-if="isDarkMode" src="../assets/icons/day-mode.png">
        <img v-else src="../assets/icons/night-mode.png">
        </div>
        
      </label>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
  computed: {
    ...mapGetters('darkMode', ['isDarkMode'])
  },
  methods: {
    ...mapActions('darkMode', ['toggleDarkMode'])
  }
};
  </script>

<style scoped>
  input{
    display: none;
  }

  label{
    cursor: pointer;
  }

  label img{
    width: 24px;
    height: 24px; 
    transition: 0.3s ease;
  }

  label:hover img,
  .img-cont{
    width: 26px;
    height: 26px; 
  }

 
</style>