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

 .footer-menu a{
     font-size: 16px;
 }

 .footer-menu-terms {
     margin: 30px 0;
     font-size: 14px;
 }

 .copyright {
     font-size: 12px;
 }


 /*1640-1080*/
@media(min-width: 1640px) {
    .footer-menu a {
        font-size: 18px;
    }

    .social-img {
        width: 40px;
        height: 40px;
    }

    .copyright {
        font-size: 16px;
    }
}

/*1680-1080*/
@media(min-width: 1680px) {}

/* 1920-1080 */
@media (min-width: 1920px) {
    .footer-menu a {
        font-size: 20px;
    }

    .social-img {
        width: 45px;
        height: 45px;
    }
}

/* 2304-1440 */
@media (min-width: 2304px) {
    .footer-menu a {
        font-size: 24px;
    }

    .social-media-list {
        gap: 2em;
    }

    .social-img {
        width: 55px;
        height: 55px;
    }

    .copyright {
        font-size: 18px;
    }
}

/*2560-1440*/
@media (min-width: 2560px) {}

/*2573-1206*/
@media(min-width: 2573px) {
    .footer-menu a {
        font-size: 26px;
    }
}

/*3200-1800*/
@media(min-width: 3200px) {
    .footer-menu a {
        font-size: 30px;
    }

    .social-img {
        width: 65px;
        height: 65px;
    }

    .copyright {
        font-size: 22px;
    }
}

/*3360-1890 1695*/
@media(min-width:3360px) {
    .footer-menu a {
        font-size: 34px;
    }

    .social-img {
        width: 68px;
        height: 68px;
    }

    .copyright {
        font-size: 24px;
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
 

  
}

/*834-1112*/
@media(max-width: 834px) {
    .footer-menu a {
        font-size: 14px;
    }

    .social-img {
        width: 30px;
        height: 30px;
    }
}

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
@media(max-width:577px) {}

/* 540-960 */
@media(max-width:540px) {}

/*480-800*/
@media (max-width:480px) {
    footer {
        padding: 20px 5%;
    }

    .footer-menu-terms {
        margin: 40px 0; 
    }
}

/*425-*/
@media(max-width:425px) {
    .wrapper{
        flex-direction: column-reverse;
    }

    .footer-menu{
        gap: 3em;
    }

    .footer-menu a {
        font-size: 16px;
    }

    .social-media-list {
        gap: 3em;
    }

    .social-img {
        width: 35px;
        height: 35px;
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
    .footer-menu a {
        font-size: 14px;
    }
 

    .social-img {
        width: 30px;
        height: 30px;
    }
}

/*320x568*/
@media(max-width:320px) {
}
</style>
