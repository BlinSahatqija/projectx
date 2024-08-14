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
        </div>
    </div>
    <div class="dashboard-content-wrapper">
        <header>
            <div class="icon-wrapper">
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

            hasSignature: true,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuClosed = !this.isMenuClosed;
        },
    },
};
</script>

  
<style scoped>
* {
    box-sizing: border-box;
    color: var(--text-color);
}

.dashboard-menu-wrapper {
    min-width: 250px;
    min-height: 100vh;
    border: 1px solid black;
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
    background-color: #adb5bd;
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
</style>
