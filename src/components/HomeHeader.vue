<template>
    <div class="header">
        <div v-if="mobile" class="hamburger-icon icon" @click="toggleMenu()">
                    <img src="../assets/icons/hamburger-icon.svg">
                </div>

        <div :class="['header-nav ', 'header-menu', { 'header-menu-opened': !isMenuClosed }]">
            <div v-if="mobile" class="close-btn" @click="toggleMenu()">
                <img src="../assets/icons/close-btn-rounded.svg">
            </div>
            <div class="header-logo">
                <h1>X</h1>
            </div>      
      
            <div class="header-nav header-menu-links">
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
        mobile: false,
        isMenuClosed: true,
        };
    },
    mounted(){
        this.activeLink= '';
    

        if (window.innerWidth < 580) {
                this.mobile = true;
            }
    },
    methods:{
        toggleMenu() {
            this.isMenuClosed = !this.isMenuClosed;
        },
    }
  
  };
  </script>


<style   scoped>
.hamburger-icon, .close-btn{
    width: 30px;
    height: 30px; 
}

[data-theme="dark"] .hamburger-icon, 
.close-btn{ 
    filter: brightness(0) invert(1);
}

.close-btn{
    position: absolute;
    top: 10px;
    right: 10px;
}

.hamburger-icon img, .close-btn img{
    width: 100%;
}

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


/*1640-1080*/
@media(min-width: 1640px) {
    .header-logo h1{
        font-size: 36px;
    }
    .nav-link { 
        font-size: 16px;
    }
}

/*1680-1080*/
@media(min-width: 1680px) {}

/* 1920-1080 */
@media (min-width: 1920px) {

    .header-logo h1{
        font-size: 40px;
    }
    .nav-link { 
        font-size: 18px;
    }
}

/* 2304-1440 */
@media (min-width: 2304px) {
    .header-nav { 
        gap: 40px;
    }
    .header-logo h1{
        font-size: 50px;
    }
    .nav-link { 
        font-size: 22px;
    }
}

/*2560-1440*/
@media (min-width: 2560px) {
    .header-logo h1{
        font-size: 54px;
    }
    .nav-link { 
        font-size: 24px;
    }
}

/*2573-1206*/
@media(min-width: 2573px) {
}

/*3200-1800*/
@media(min-width: 3200px) {
    .header-nav { 
        gap: 50px;
    }
    .header-logo h1{
        font-size: 60px;
    }
    .nav-link { 
        font-size: 28px;
    }
}

/*3360-1890 1695*/
@media(min-width:3360px) {
    .header-logo h1{
        font-size: 68px;
    }
    .nav-link { 
        font-size: 32px;
    }
}

 
/*my big monitor 1600 - 757 */
@media (max-width: 1600px) {}

/*my small monitor 1536-864*/
@media(max-width:1536px) {}

/* 1440-990 */
@media(max-width:1440px) {}

/*1366-768*/
@media (max-width:1366px) {}

/* 1280-800 */
@media (max-width:1280px) {
}

/*1134x712*/
@media(max-width:1134px) {
}

/*1024-768*/
@media (max-width:1024px) {}

/* 962x601 */
@media(max-width: 962px) {
    .header { 
        padding: 20px 6%;
    }
}

/*834-1112*/
@media(max-width: 834px) {}

/* 810x1080 */
@media(max-width: 810px) {}

/* 800x1280 */
@media(max-width: 800px) {}

/*778-304*/
@media(max-width: 778px) {}

/* 768x1024 */
@media(max-width: 768px) {
}

/*712-1138*/
@media(max-width:712px) {
}

/* 601x962 */
@media(max-width:601px) {}

/* 577-951 */
@media(max-width:577px) {
    .header-menu{ 
        position: fixed;
        height: 100vh; 
        width: 250px;
        top: 0; 
        left: 0;
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        background-color: var(--dashboard-side-bg);
        transform: translateX(-250px);
        transition: 0.3s ease;
        z-index: 5;
        color: white !important;
    }

    .header-menu-opened{
        transform: translateX(0px);
    }

    .header-menu-links{
        display: flex;
        flex-direction: column;
    }

    .header-menu-links .nav-link {
        font-size: 18px;
        color: white !important;
    }

    .header-logo {
        margin-bottom: 20px;
    }

    .header-logo h1{
        font-size: 40px;
    }
}

/* 540-960 */
@media(max-width:540px) {}

/*480-800*/
@media (max-width:480px) {}

/*425-*/
@media(max-width:425px) {
    .header-menu{  
        width: 220px;
    }
}

/*414-736 617   */
@media (max-width:414px) {
}

/*390 x 844*/
@media(max-width:390px) {
}

/*384-640*/
@media(max-width:384px) {
}

/*375*/
@media(max-width:375px) {

}

/*360x640*/
@media(max-width:360px) {
    .header-menu{  
        width: 200px;
    }
}

/*320x568*/
@media(max-width:320px) {
    .header-menu{  
        width: 180px;
    }
}
</style>