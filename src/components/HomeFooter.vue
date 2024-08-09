<template>
<footer>
    <div class="wrapper">
        <div class="footer-menu">
            <a>Info</a>
            <a>Support</a>
            <a>Pricing</a>
        </div>
        <div class="social-media-list ">
            <a class="social-img cursor-pointer transition">
                <img class="transition" src="../assets/icons/instagram.svg">
            </a>
            <a class="social-img cursor-pointer transition">
                <img class="transition" src="../assets/icons/facebook.svg">
            </a>
            <a class="social-img cursor-pointer transition">
                <img class="transition" src="../assets/icons/twitter.svg">
            </a>
        </div>
    </div>
    <div class="footer-menu footer-menu-terms">
        <a>Terms Of Use</a>

        <a>Privacy Policy</a>
    </div>
    <p class="text-center copyright">© {{year}} X Project</p>
</footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
        }
    }
}
</script>

<style scoped>
 footer {
     padding: 20px 8%;
     border-top: 1px solid var(--text-color);
     color: var(--text-color);
 }

 .social-img {
     filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
 }

 [data-theme="dark"] .social-img {
     filter: none;
 }

 .social-img {
     width: 35px;
     height: 35px;
 }

 .social-img img {
     width: 100%;
     height: 100%;
     transform: scale(0.9);
 }

 .social-img:hover img {
     transform: scale(1);
 }

 .social-media-list,
 .footer-menu,
 .wrapper {
     display: flex;
     flex-wrap: wrap;
     gap: 2em;
     justify-content: center;
     align-items: center;
 }

 .social-media-list {
     gap: 1em;
 }

 .wrapper {
     justify-content: space-between;

 }

 .footer-menu {
     font-size: 16px;
 }

 .footer-menu-terms {
     margin: 30px 0;
     font-size: 14px;
 }

 .copyright {
     font-size: 12px;
 }
</style>
