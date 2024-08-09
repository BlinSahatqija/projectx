<template>
    <div class="header">
        <div class="header-nav">
            <div class="header-logo">
                <h1>X</h1>
            </div>      
      
            <div class="header-nav">
                <a 
                    href="#services" 
                    class="nav-link" 
                    @click="activeLink = 'services'"
                    :class="{ active: activeLink === 'services' }"
                >
                    Services
                </a>
                <a 
                    href="#resume" 
                    class="nav-link" 
                    @click="activeLink = 'resume'"
                    :class="{ active: activeLink === 'resume' }"
                >
                    Resume
                </a>
                <a 
                    href="#contact" 
                    class="nav-link" 
                    @click="activeLink = 'contact'"
                    :class="{ active: activeLink === 'contact' }"
                >
                    Contact
                </a>
                <a 
                    href="#pricing" 
                    class="nav-link" 
                    @click="activeLink = 'pricing'"
                    :class="{ active: activeLink === 'pricing' }"
                >
                    Pricing
                </a> 
            </div>
        </div>

      <div class="header-nav"> 
        <!-- <a 
            class="nav-link"
            @click="activeLink = 'login'"
            :class="{ active: activeLink === 'login' }"
        >
            Log In
        </a> -->

        <router-link to="/login" class="nav-link">
            Log In
        </router-link>
        <span class="nav-link">
          <DarkModeToggle />
        </span> 
      </div>
      
    </div>
  </template>
  
  <script>
  import DarkModeToggle from '@/components/DarkModeToggle.vue'; 

 
  export default {
    components: {
      DarkModeToggle, 
    },
    data() {
    return {
      activeLink: '',
    };
  },
  mounted(){
    this.activeLink= '';
  }
  };
  </script>


<style   scoped>

.header{ 
    color: var(--text-color);
    padding: 20px 8%;  
    display: flex;
    align-items: center;
    justify-content: space-between; 
}

.header-nav{
    display: flex;
    align-items: center;
    gap: 25px;
}

.nav-link{
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-color);
}
.nav-link:hover, .nav-link.active {
    color: var(--active-text-color);
}
</style>