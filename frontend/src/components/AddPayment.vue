<template>
<div class="add-payment-wrapper">
    <div class="add-payment-modal">
        <div class="close-modal-btn" @click="closePayment">
            <img src="../assets/icons/close-btn-rounded.svg">
        </div>

        <div class="modal-title">
            <h3>Select Plan</h3>
        </div>

        <div style="width: 500px;">
        <swiper :navigation="true" :modules="modules" :loop="true" :spaceBetween="30" :speed="800" class="mySwiper">
            <swiper-slide>
                <div class="slide-wrapper">
                    <h2 class="plan-title">Solo Plan</h2>
                    <h1 class="plan-price">€6.99/mo</h1>
                    
                        <button type="button" class="add-payment-btn">
                            Get this plan 
                        </button>
                     
                </div>
            </swiper-slide>
            <swiper-slide  >
                <div class="slide-wrapper">
                    <h2 class="plan-title">Family Plan</h2>
                    <h1 class="plan-price">€25.99/mo</h1>
                    
                        <button type="button" class="add-payment-btn">Get this plan 
                        </button>
                     
                </div>
            </swiper-slide>
        </swiper>
    </div>
 
    </div>
</div>
</template>

<script>
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

import {
    Navigation
} from 'swiper/modules';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation],
        };
    },
    methods: {
        closePayment() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
.add-payment-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add-payment-modal {
    padding: 60px;
    background-color: var(--dashboard-main-bg);
    border-radius: 20px;
    position: relative;
}

 
 
.close-modal-btn {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

}

[data-theme="dark"] .close-modal-btn img {
    filter: brightness(0) invert(1);
}

.close-modal-btn img {
    width: 100%;
}
 

* {
    box-sizing: border-box;
}

.slide-wrapper{
    border: 3px solid #ff3a67;
    padding: 40px 0;
    border-radius: 10px;
    width: 80%;
    margin: 0 auto;
}

.plan-title, .plan-price{
    text-align: center
}

.plan-title{
    font-size: 24px;
}

.plan-price{
    margin: 20px 0;
    font-size: 34px;
}

.modal-title{
    font-size: 24px;
    margin-bottom: 50px;
    text-align: center;
}


::v-deep .swiper-button-prev, 
::v-deep .swiper-button-next {
    color:#ff3a67 !important;
    transform: scale(0.8);
}


.add-payment-btn{
    font-size: 14px;
    margin: 0 auto; 
    display: block;
    width: 150px;
}

/*1640-1080*/
@media(min-width: 1640px) {}

/*1680-1080*/
@media(min-width: 1680px) {}

/* 1920-1080 */
@media (min-width: 1920px) {

    .add-payment-label,
    .add-payment-input {
        font-size: 18px;
    }

    .add-payment-btn p {
        font-size: 16px;
    }

    .close-modal-btn {
        width: 32px;
        height: 32px;
        top: 14px;
        right: 14px;
    }

    .add-payment-row h3 {
        font-size: 20px;
    }
}

/* 2304-1440 */
@media (min-width: 2304px) {
    .add-payment-row h3 {
        font-size: 24px;
    }

    .add-payment-row {
        width: 500px;
    }

    .add-payment-label,
    .add-payment-input {
        font-size: 22px;
    }

    .add-payment-input {
        margin: 16px 0;
        padding: 16px 8px;
    }

    .add-payment-btn {
        padding: 16px;
        font-size: 20px;
    }

    .add-payment-btn p {
        font-size: 20px;
    }

    .add-payment-modal {
        padding: 75px;
    }

    .close-modal-btn {
        width: 36px;
        height: 36px;
        top: 16px;
        right: 16px;
    }

}

/*2560-1440*/
@media (min-width: 2560px) {
    .add-payment-row h3 {
        font-size: 28px;
    }

    .add-payment-label,
    .add-payment-input {
        font-size: 24px;
    }

    .add-payment-btn p {
        font-size: 22px;
    }

    .close-modal-btn {
        width: 42px;
        height: 42px;
        top: 20px;
        right: 20px;
    }

    .add-payment-btn {
        font-size: 22px;
    }

    .add-payment-row {
        width: 550px;
    }
}

/*2573-1206*/
@media(min-width: 2573px) {}

/*3200-1800*/
@media(min-width: 3200px) {
    .add-payment-row h3 {
        font-size: 32px;
    }

    .add-payment-label,
    .add-payment-input {
        font-size: 28px;
    }

    .add-payment-input {
        margin: 20px 0;
        padding: 20px 12px;
    }

    .add-payment-btn {
        padding: 22px;
    }

    .add-payment-btn p {
        font-size: 26px;
    }

    .close-modal-btn {
        width: 46px;
        height: 46px;
        top: 24px;
        right: 24px;
    }

    .add-payment-row {
        width: 650px;
    }

    .add-payment-btn {
        font-size: 26px;
    }
}

/*3360-1890 1695*/
@media(min-width:3360px) {}

/*my big monitor 1600 - 757 */
@media (max-width: 1600px) {}

/*my small monitor 1536-864*/
@media(max-width:1536px) {}

/* 1440-990 */
@media(max-width:1440px) {
    .edit-user-row {
        width: 80%;
    }
}

/*1366-768*/
@media (max-width:1366px) {
    .add-payment-modal {
        padding: 50px;
    }
}

/* 1280-800 */
@media (max-width:1280px) {

    .add-payment-btn p {
        font-size: 12px;
    }
}

/*1134x712*/
@media(max-width:1134px) {

    .add-payment-label,
    .add-payment-input {
        font-size: 14px;
    }

    .add-payment-modal {
        padding: 40px;
    }
}

/*1024-768*/
@media (max-width:1024px) {}

/* 962x601 */
@media(max-width: 962px) {}

/*834-1112*/
@media(max-width: 834px) {}

/* 810x1080 */
@media(max-width: 810px) {}

/* 800x1280 */
@media(max-width: 800px) {}

/*778-304*/
@media(max-width: 778px) {}

/* 768x1024 */
@media(max-width: 768px) {}

/*712-1138*/
@media(max-width:712px) {}

/* 601x962 */
@media(max-width:601px) {}

/* 577-951 */
@media(max-width:577px) {}

/* 540-960 */
@media(max-width:540px) {

    .add-payment-btn {
        width: 120px;
    }

    .add-payment-modal {
        padding: 35px 25px;
    }
}

/*480-800*/
@media (max-width:480px) {
    .add-payment-row {
        width: 340px;
    }
}

/*425-*/
@media(max-width:425px) {

    .add-payment-label,
    .add-payment-input {
        font-size: 12px;
    }

    .add-payment-modal {
        padding: 30px 20px;
    }

}

/*414-736 617   */
@media (max-width:414px) {
    .add-payment-btn p {
        font-size: 11px;
    }

    .add-payment-row {
        width: 310px;
    }
}

/*390 x 844*/
@media(max-width:390px) {}

/*384-640*/
@media(max-width:384px) {}

/*375*/
@media(max-width:375px) {}

/*360x640*/
@media(max-width:360px) {
    .add-payment-btn {
        width: 100px;
    }

    .add-payment-row {
        width: 290px;
    }
}

/*320x568*/
@media(max-width:320px) {
    .add-payment-row {
        width: 250px;
    }
}
</style>
