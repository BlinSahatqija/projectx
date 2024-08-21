<template>
    <Signature v-if="hasSignature" @close="hasSignature = false"/>
<div style="display: flex;">
    <div :class="['dashboard-menu-wrapper', { 'menu-wrapper-closed': isMenuClosed }]">
        <h1 class="logo">X</h1>
        <div class="dashboard-menu">
            <router-link to="/dashboard/requests" active-class="active" :class="['dashboard-menu-link', { 'dashboard-menu-link-closed': isMenuClosed }]">
                <div class="menu-link-icon-wrapper">
                    <div class="menu-link-icon icon">
                        <img src="../../assets/icons/dashboard-menu-icon.svg">
                    </div>
                </div>
                <p v-if="!isMenuClosed">Dashboard</p>
            </router-link>
            <router-link to="/dashboard/details" active-class="active" :class="['dashboard-menu-link', { 'dashboard-menu-link-closed': isMenuClosed }]">
                <div class="menu-link-icon-wrapper">
                    <div class="menu-link-icon icon">
                        <img src="../../assets/icons/details-dashboard-menu-icon.svg">
                    </div>
                </div>
                <p v-if="!isMenuClosed">Detailed View</p>
            </router-link>
            <router-link to="/dashboard/subscription" active-class="active" :class="['dashboard-menu-link', { 'dashboard-menu-link-closed': isMenuClosed }]">
                <div class="menu-link-icon-wrapper">
                    <div class="menu-link-icon icon">
                        <img src="../../assets/icons/subscription-icon.svg">
                    </div>
                </div>
                <p v-if="!isMenuClosed">Subscription</p>
            </router-link>
        </div>
    </div>
    <div class="dashboard-content-wrapper">
        <header>
            <div  
            :class="['icon-wrapper hamburger-icon-wrapper', { 'hamburger-icon-wrapper-closed': isMenuClosed }]">
                <div class="hamburger-icon icon" @click="toggleMenu()">
                    <img src="../../assets/icons/hamburger-icon.svg">
                </div>
            </div>
            <div class="dashboard-header-links">
                <DarkModeToggle />
                <div class="icon-wrapper">
                    <div class="user-icon icon">
                        <img src="../../assets/icons/user-icon.svg">
                    </div>
                </div>
            </div>
        </header>
        <router-view />
    </div>
</div>
</template>

  
<script>
import DarkModeToggle from '@/components/DarkModeToggle.vue';
import Signature from '@/components/Signature.vue';

export default {
    components: {
        DarkModeToggle,
        Signature
    },
    data() {
        return {
            isMenuClosed: false,

            hasSignature: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuClosed = !this.isMenuClosed;
        },
    },
    mounted(){ 
        if(window.innerWidth < 770){
            this.isMenuClosed = true;
        }
    }
};
</script>

  
<style scoped>

/* 212529 side menu and cards
292E32  top menu
1A1D21 bg */
* {
    box-sizing: border-box;
    color: var(--text-color);
}

.dashboard-menu-wrapper {
    min-width: 250px;
    min-height: 100vh; 
    transition: 0.3s ease;
    padding: 20px;
    overflow: hidden;
}

.menu-wrapper-closed {
    min-width: 100px;
}

.logo {
    font-size: 42px;
    text-align: center;
    margin-bottom: 60px;
}

.dashboard-menu-link { 
    margin-bottom: 40px;
    display: flex;
    gap: 15px;
    flex-wrap: nowrap;
    align-items: center;
    cursor: pointer;
}

.dashboard-menu-link p {
    font-size: 18px;
}

.dashboard-menu-link-closed {
    justify-content: center;
}

.dashboard-menu-link:hover .menu-link-icon {
    margin-bottom: 4px;
}

.icon-wrapper {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon {
    width: 34px;
    height: 34px;
    cursor: pointer;
    transition: 0.3s ease;
}

[data-theme="dark"] .icon {
    filter: brightness(0) invert(1);
}

[data-theme="dark"] .dashboard-menu-wrapper {
    background-color: #212529 !important;
}

[data-theme="dark"] header  {
    background-color: #292E32 !important;
}

[data-theme="dark"] .dashboard-content-wrapper  {
    background-color: #1A1D21 !important;
}


.dashboard-menu-link:hover p,
.router-link-exact-active p{
        color: #ff3a67 !important; 
    }

    .dashboard-menu-link:hover .menu-link-icon,
    .router-link-exact-active .menu-link-icon{
        filter: brightness(0) saturate(100%) invert(44%) sepia(69%) saturate(5587%) hue-rotate(327deg) brightness(107%) contrast(101%);
    }

 

.icon:hover {
    width: 38px;
    height: 38px;
}

.menu-link-icon {
    width: 20px;
    height: 20px;
}

.dashboard-menu-link-closed .menu-link-icon {
    width: 26px;
    height: 26px;
}

.menu-link-icon-wrapper {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dashboard-menu-link-closed .menu-link-icon-wrapper {
    width: 30px;
    height: 30px;
}

.icon img,
.menu-link-icon img {
    width: 100%;
    height: 100%;
}

.dashboard-content-wrapper {
    background-color: #F3F3F9;
    flex-grow: 1;
    max-height: 100vh;
    overflow: auto;
}

header {
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    height: 70px;
    box-shadow: 0 5px 10px rgba(30, 32, 37, .3);
}

.dashboard-header-links {
    display: flex;
    gap: 16px;
    align-items: center;
}


/* 2304-1440 */
@media (min-width: 2304px){
    .dashboard-menu-wrapper {
        min-width: 350px;
        padding: 30px;
    }

    .menu-wrapper-closed {
        min-width: 200px !important;
    }

    .logo {
        font-size: 65px;
        margin-bottom: 60px;
    }
    .menu-link-icon-wrapper,
    .menu-link-icon:hover {
        width: 55px;
        height: 55px;
    }

    .dashboard-menu-link-closed .menu-link-icon-wrapper {
        width: 45px;
        height: 45px;
    }

    .dashboard-menu-link-closed .menu-link-icon {
        width: 40px;
        height: 40px;
    }

    .menu-link-icon {
        width: 50px;
        height: 50px;
    }

    .dashboard-menu-link p{
        font-size: 26px; 
    }
    .dashboard-menu-link { 
        margin-bottom: 60px;
        gap: 24px;
    }



    header {
        padding: 0 30px;
        height: 100px;
    } 
 
    .dashboard-header-links { 
        gap: 26px;      
    }

    .icon-wrapper {
        width: 65px;
        height: 65px;
    }
    .user-icon, .hamburger-icon  {
        width: 60px;
        height: 60px;
    }

    .icon:hover{
        width: 65px;
        height: 65px;
    }
}


/*2560-1440*/
@media (min-width: 2560px) {
     
}


/*2573-1206*/
@media(min-width: 2573px){
    .dashboard-menu-wrapper{
        min-width: 420px;
        padding: 35px;
    }
    .logo {
        font-size: 72px;
        margin-bottom: 80px;
    }
    .dashboard-menu-link {
        margin-bottom: 80px;
        gap: 26px;
    }
    .dashboard-menu-link p {
        font-size: 30px;
    }


    header {
        padding: 0 35px;
        height: 120px;
    }
 
    .dashboard-header-links { 
        gap: 34px;      
    }

    .icon-wrapper,
    .icon:hover {
        width: 70px;
        height: 70px;
    }

    .user-icon, .hamburger-icon  {
        width: 60px;
        height: 60px;
    } 
}


/*3200-1800*/
@media(min-width: 3200px){
    .dashboard-menu-wrapper{
        min-width: 480px; 
    }
    .logo {
        font-size: 82px; 
    } 
    .dashboard-menu-link{
        gap: 30px;
    }
    .dashboard-menu-link p {
        font-size: 36px;
    }

    .menu-link-icon-wrapper,
    .menu-link-icon:hover {
        width: 65px;
        height: 65px;
    }

    .dashboard-menu-link-closed .menu-link-icon-wrapper {
        width: 50px;
        height: 50px;
    }

    .dashboard-menu-link-closed .menu-link-icon {
        width: 45px;
        height: 45px;
    }

    .menu-link-icon {
        width: 55px;
        height: 55px;
    }




    header {
        padding: 0 40px;
        height: 150px;
    }
 
    .dashboard-header-links { 
        gap: 40px;      
    }

    .icon-wrapper,
    .icon:hover {
        width: 80px;
        height: 80px;
    }
    
    .user-icon, .hamburger-icon  {
        width: 70px;
        height: 70px;
    } 
}

/*3360-1890 1695*/
@media(min-width:3360px){
    .dashboard-menu-wrapper{
        min-width: 550px;
        padding: 50px;
    }
    .logo {
        font-size: 86px;
        margin-bottom: 100px;
    }

    .dashboard-menu-link {
        margin-bottom: 100px;
        gap: 38px;
    }
    
    .dashboard-menu-link p {
        font-size: 40px;
    }

    .menu-link-icon-wrapper,
    .menu-link-icon:hover {
        width: 70px;
        height: 70px;
    }

    .dashboard-menu-link-closed .menu-link-icon-wrapper {
        width: 55px;
        height: 55px;
    }

    .dashboard-menu-link-closed .menu-link-icon {
        width: 50px;
        height: 50px;
    }

    .menu-link-icon {
        width: 60px;
        height: 60px;
    }



    header {
        padding: 0 50px;
        height: 180px;
    }
 
    .dashboard-header-links { 
        gap: 50px;      
    }

    .icon-wrapper,
    .icon:hover {
        width: 95px;
        height: 95px;
    }
    
    .user-icon, .hamburger-icon  {
        width: 85px;
        height: 85px;
    } 
}

/*1680-1080*/ 
@media(max-width: 1680px){

}

/*1640-1080*/
@media(max-width: 1640px){

}


/* 1600 - 757 */
@media (max-width: 1600px) {

}

/*1536-864*/
@media(max-width:1536px){ 

}

/* 1440-990 */
@media(max-width:1440px){  

}

/*1366-768*/
@media (max-width:1366px){

}

/* 1280-800 */
@media (max-width:1280px){
    .dashboard-menu-wrapper {
        min-width: 220px;
        padding: 16px;
    }
    .menu-wrapper-closed{
        min-width: 90px !important;
    }
}

/*1134x712*/
@media(max-width:1134px){
    .dashboard-menu-wrapper {
        min-width: 190px;
        padding: 14px;
    }

    .dashboard-menu-link p {
        font-size: 16px;
    }

}

/*1024-768*/
@media (max-width:1024px){  
   
}


/* 962x601 */
@media(max-width: 962px){
    .logo {
        font-size: 38px;
    }
}

/*834-1112*/
@media(max-width: 834px){   
    
}


/* 810x1080 */
@media(max-width: 810px){

}

/* 800x1280 */
@media(max-width: 800px){

}

/*778-304*/
@media(max-width: 778px){

}


/* 768x1024 */
@media(max-width: 768px){
    .menu-wrapper-closed{
        min-width: 70px !important;
    }
}

/*712-1138*/
@media(max-width:712px){


    .dashboard-menu-wrapper{
        position: absolute;
        min-width: 200px !important;;
        background: var(--background-color);
        z-index: 10;
    }
    .menu-wrapper-closed{
        min-width: 70px !important;
        position: initial;
    }

 
    .hamburger-icon-wrapper {
        margin-left: 200px;
        transition: 0.3s ease;
    }

    .hamburger-icon-wrapper-closed {
        margin-left: 0px; 
    }
}

    



/* 601x962 */
@media(max-width:601px){ 

    
}

/* 577-951 */
@media(max-width:577px){

}

/* 540-960 */
@media(max-width:540px){
    
}

/*480-800*/
@media (max-width:480px) {

}

/*425-*/
@media(max-width:425px){

}

/*414-736 617   */
@media (max-width:414px) {
    .hamburger-icon-wrapper {
        margin-left: 180px; 
    }
 
    .hamburger-icon-wrapper-closed {
        margin-left: 0px; 
    }
}

/*390 x 844*/
@media(max-width:390px){
    .icon-wrapper {
        width: 34px;
        height: 34px;
    }
}


/*384-640*/
@media(max-width:384px){

}

/*375*/
@media(max-width:375px){
    .dashboard-menu-wrapper{ 
        min-width: 180px !important;  
    }
    .menu-wrapper-closed{
        min-width: 70px !important; 
    }

    .hamburger-icon-wrapper {
        margin-left: 160px; 
    }
 
    .hamburger-icon-wrapper-closed {
        margin-left: 0px; 
    }

    .dashboard-header-links { 
        gap: 10px;
    }
}


/*360x640*/
@media(max-width:360px){

}

/*320x568*/
@media(max-width:320px){ 

}
</style>
