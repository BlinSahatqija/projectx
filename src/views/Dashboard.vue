<template>
<div style="display: flex;">

    <div ref="menuWrapper" :class="['dashboard-menu-wrapper', { 'menu-wrapper-closed': isMenuClosed }]">
        <h1 class="logo">X</h1>
        <div class="dashboard-menu">
            <div :class="['dashboard-menu-link', { 'dashboard-menu-link-closed': isMenuClosed }]">
                <div class="menu-link-icon-wrapper">
                    <div class="menu-link-icon icon">
                        <img src="../assets/icons/dashboard-menu-icon.svg">
                    </div>
                </div>
                <p v-if="!isMenuClosed">Dashboard</p>
            </div>
            <div :class="['dashboard-menu-link', { 'dashboard-menu-link-closed': isMenuClosed }]">
                <div class="menu-link-icon-wrapper">
                    <div class="menu-link-icon icon">
                        <img src="../assets/icons/details-dashboard-menu-icon.svg">
                    </div>
                </div>
                <p v-if="!isMenuClosed">Detailed View</p>

            </div>
        </div>
    </div>
    <div   class="dashboard-content-wrapper">
        <header>
            <div class="icon-wrapper">
                <div class="hamburger-icon icon" @click="toggleMenu()">
                    <img src="../assets/icons/hamburger-icon.svg">
                </div>
            </div>

            <div class="dashboard-header-links">
                <DarkModeToggle />
                <div class="icon-wrapper">
                    <div class="user-icon icon">
                        <img src="../assets/icons/user-icon.svg">
                    </div>
                </div>

            </div>
        </header>
        <div class="dashborad-cards" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; padding: 50px; max-width: 800px;">
        <div class="dashboard-card-wrapper">
            <div class="dashboard-card">
                <p class="card-title">
                    Requests sent 
                </p>

                <h1 class="card-value">
                    43
                </h1>

                <p class="card-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero, dicta iure dolore debitis eligendi nulla.
                </p>
            </div>            
        </div>

        <div class="dashboard-card-wrapper">
            <div class="dashboard-card">
                <p class="card-title">
                    Requests sent 
                </p>

                <h1 class="card-value">
                    43
                </h1>

                <p class="card-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero, dicta iure dolore debitis eligendi nulla.
                </p>
            </div>            
        </div>

        <div class="dashboard-card-wrapper">
            <div class="dashboard-card">
                <p class="card-title">
                    Requests sent 
                </p>

                <h1 class="card-value">
                    43
                </h1>

                <p class="card-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero, dicta iure dolore debitis eligendi nulla.
                </p>
            </div>            
        </div>
    </div>
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
            isMenuClosed: false
        }
    },
    computed: {

    },
    methods: {
        toggleMenu() {
            this.isMenuClosed = !this.isMenuClosed
        }
    }
}
</script>

<style scoped>
/* */

.dashboard-content-wrapper{
    background-color: #adb5bd;
}

.dashboard-card-wrapper{
    width: 350px;
    height: 350px;

 
}

.dashboard-card{
    width: 450px;
    height: 250px;
    padding: 25px;
    border-radius: 20px;
    background-color: var(--background-color);
    box-shadow: 0 1px 2px rgba(56, 65, 74, .5); 
    box-shadow: 0 5px 10px rgba(30, 32, 37, .8);
}

* {
    box-sizing: border-box;
    color: var(--text-color);
}

.dashboard-menu-wrapper {
    width: 250px;
    height: 100vh;
    border: 1px solid black;
    transition: 0.3s ease;
    padding: 20px;
    overflow: hidden;
}

.menu-wrapper-closed {
    width: 100px;
}

.logo {
    font-size: 42px;
    text-align: center;
    margin-bottom: 40px;
}



.dashboard-menu-link {
    font-size: 18px;
    margin-bottom: 30px;
    display: flex;
    gap: 15px;
    align-content: center;
    cursor: pointer;
}

.dashboard-menu-link-closed{
    justify-content: center;
}

.dashboard-menu-link:hover .menu-link-icon {
    margin-bottom: 4px;
}

.dashboard-content-wrapper {
    /* width:calc(100% - 250px); */
    flex-grow: 1;
}

.dashboard-menu a {
    display: block;
}

header {
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    height: 70px;
    border: 1px solid black;
}

.dashboard-header-links {
    display: flex;
    gap: 16px;
    align-items: center;
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

[data-theme="dark"]  .icon {
    filter: brightness(0) invert(1);
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
</style>
