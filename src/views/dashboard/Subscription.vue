<template>
    <div>
        <div v-if="isSubcribed" class="subscription-wrapper">
            <div class="subscription-title-wrapper">
                <div class="subscription-title">
                    <h1>Plan and Billing</h1>
                    <p>Manage your plan and payments</p>
                </div>    
                <div class="cancel-subscription subscription-btn-wrapper">
                    <a>Cancel subscription</a>
                </div>
            </div>

            <div class="subscription-about-wrapper">
                <div class="subscription-about-title-wrapper">
                    <h1 class="subscription-about-title">Current plan</h1>

                    <div v-if="!showMobile" class="change-subscription subscription-btn-wrapper">
                        <a>Change subscription</a>
                    </div>
                </div>    
                <div class="subscription-info-wrapper">
                    <div class="subscription-info">
                        <p class="subscription-plan-type">Individual plan</p>
                        <p class="subscription-plan-price">12.99/monthly</p>
                        <p class="subscription-status active">Active</p>
                    </div>

                    <div class="subscription-info">
                        <p class="subscription-expires-title">Expires at</p>
                        <p class="subscription-expires-date">Sep 18, 2024</p>
                    </div>
                </div>

                <div v-if="showMobile" class="change-subscription subscription-btn-wrapper">
                        <a>Change subscription</a>
                    </div>
            </div>

        </div>
        <div v-else class="subscription-wrapper">NOT subscribed </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isSubcribed: true,

            showMobile: false,
        }
    },

    mounted(){
        if(window.innerWidth < 500){
            this.showMobile = true;
        }
    }
}
</script>
<style scoped>
    *{
        box-sizing: border-box;
    }

    .subscription-wrapper{
        padding: 50px;
    }

    .subscription-title-wrapper,
    .subscription-about-wrapper,
    .subscription-info-wrapper{
        border: 1px solid black;
        border-radius: 25px;
        padding: 25px;
        width: 100%;
    }


    .subscription-title-wrapper{ 
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 80px;
    }

    .subscription-title h1{
        font-size: 42px;
        margin-bottom: 10px;
    }

    .subscription-title p{
        font-size: 18px;
    }


    .subscription-btn-wrapper{ 
        padding: 8px 12px;
        border-radius: 10px;
        background-color: #DC3545;
        cursor: pointer; 
        box-shadow: 0 5px 10px rgba(30, 32, 37, .3);
        transition: 0.3s ease;
    }

    .subscription-btn-wrapper a{
        font-size: 14px;
    }

    .cancel-subscription{  
        background-color: #DC3545; 
        color: white;
    }

    .subscription-btn-wrapper:hover{
        box-shadow: none;
    }

 

    .subscription-about-title-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    .subscription-about-title{
      
        font-size: 36px; 
    }

    .change-subscription{ 
        background-color: transparent;
        border: 1px solid black; 
    }

    .subscription-info-wrapper{
        border: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }

    .subscription-info{
        border: 1px solid black;
        border-radius: 25px;
        padding: 25px;
        width: 48%;
        position: relative;
    }

    .subscription-status{
        padding: 4px 16px;
        border-radius: 10px; 
        position: absolute;
        color: white;
        font-weight: 600;
        top: 15px;
        right: 20px;
        font-size: 14px;
        display: block;
    }

    .active{
        background-color: #28A745;
    }

    .subscription-plan-type,
    .subscription-expires-title{
        font-size: 18px;
        margin-bottom: 5px;
    }

    .subscription-plan-price,
    .subscription-expires-date{
        font-size: 28px;
        font-weight: 600;
    }

    [data-theme="dark"] .subscription-title-wrapper,
    [data-theme="dark"] .subscription-about-wrapper   {
        background-color: #212529 !important;
        border: none !important;
    }

    [data-theme="dark"] .subscription-info,
    [data-theme="dark"] .change-subscription    {
        background-color: #212529 !important;
    
        border: 2px solid var(--primary-border-color);
    }





/* 1600 - 757 */
@media (min-width: 1600px) {
    .subscription-title h1  {
        font-size: 44px;
        margin-bottom: 14px;
    }

    .subscription-title p  {
        font-size: 20px;
    }

    .subscription-btn-wrapper a  {
        font-size: 16px;
    }

    .subscription-about-title  {
        font-size: 38px;
    }

    .subscription-plan-type , .subscription-expires-title  {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .subscription-plan-price , .subscription-expires-date  {
        font-size: 28px; 
    }

    .subscription-status  {
        font-size: 16px;
    }
}

/*1640-1080*/
@media(min-width: 1640px){

}

/*1680-1080*/ 
@media(min-width: 1680px){
    .subscription-title h1  {
        font-size: 48px;
        margin-bottom: 14px;
    }

    .subscription-title p  {
        font-size: 24px;
    }

    .subscription-btn-wrapper a  {
        font-size: 20px;
    }

    .subscription-about-title  {
        font-size: 42px;
    }

    .subscription-plan-type , .subscription-expires-title  {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .subscription-plan-price , .subscription-expires-date  {
        font-size: 34px; 
    }

    .subscription-status  {
        font-size: 20px;
    }
}

/*1920-1080*/ 
@media(min-width: 1920px){

}


/* 2304-1440 */
@media (min-width: 2304px){ 
    .subscription-wrapper {
        padding: 70px;
    }

    .subscription-title-wrapper , 
    .subscription-about-wrapper , 
    .subscription-info-wrapper { 
        padding: 35px;
    }


    .subscription-title-wrapper { 
        margin-bottom: 120px;
    }

    .subscription-title h1 {
        font-size: 56px;
        margin-bottom: 18px;
    }

    .subscription-about-title-wrapper {
        margin-bottom: 50px;
    }

    .subscription-title p {
        font-size: 34px;
    }

    .subscription-btn-wrapper {
        padding: 14px 20px;
    }

    .subscription-btn-wrapper a {
        font-size: 24px;
    }

    .subscription-about-title {
        font-size: 50px;
    }

    .subscription-info {
        padding: 35px;
    }

    .subscription-plan-type , .subscription-expires-title {
        font-size: 34px;
        margin-bottom: 15px;
    }

    .subscription-plan-price , .subscription-expires-date {
        font-size: 42px;
    }

    .subscription-status {
        padding: 6px 22px; 
        top: 20px;
        right: 26px;
        font-size: 22px; 
    }
}


/*2560-1440*/
@media (min-width: 2560px) { 
}


/*2573-1206*/
@media(min-width: 2573px){

}


/*3200-1800*/
@media(min-width: 3200px){ 
    .subscription-wrapper {
        padding: 90px;
    }

    .subscription-title-wrapper , 
    .subscription-about-wrapper , 
    .subscription-info-wrapper { 
        padding: 45px;
    }


    .subscription-title-wrapper { 
        margin-bottom: 140px;
    }

    .subscription-title h1 {
        font-size: 66px;
        margin-bottom: 25px;
    }

    .subscription-about-title-wrapper {
        margin-bottom: 70px;
    }

    .subscription-title p {
        font-size: 44px;
    }

    .subscription-btn-wrapper {
        padding: 20px 26px;
    }

    .subscription-btn-wrapper a {
        font-size: 34px;
    }

    .subscription-about-title {
        font-size: 70px;
    }

    .subscription-info {
        padding: 45px;
    }

    .subscription-plan-type , .subscription-expires-title {
        font-size: 44px;
        margin-bottom: 22px;
    }

    .subscription-plan-price , .subscription-expires-date {
        font-size: 52px;
    }

    .subscription-status {
        padding: 12px 28px; 
        top: 26px;
        right: 32px;
        font-size: 32px; 
    }
}

/*3360-1890 1695*/
@media(min-width:3360px){
    .subscription-wrapper {
        padding: 100px;
    }

    .subscription-title-wrapper , 
    .subscription-about-wrapper , 
    .subscription-info-wrapper { 
        padding: 55px;
    }


    .subscription-title-wrapper { 
        margin-bottom: 150px;
    }

    .subscription-title h1 {
        font-size: 72px;
        margin-bottom: 30px;
    }

    .subscription-about-title-wrapper {
        margin-bottom: 80px;
    }

    .subscription-title p {
        font-size: 50px;
    }

    .subscription-btn-wrapper {
        padding: 24px 30px;
    }

    .subscription-btn-wrapper a {
        font-size: 40px;
    }

    .subscription-about-title {
        font-size: 78px;
    }

    .subscription-info {
        padding: 55px;
    }

    .subscription-plan-type , .subscription-expires-title {
        font-size: 54px;
        margin-bottom: 28px;
    }

    .subscription-plan-price , .subscription-expires-date {
        font-size: 60px;
    }

    .subscription-status {
        padding: 18px 34px; 
        top: 32px;
        right: 38px;
        font-size: 38px; 
    }
}




/* laptop is 1536*/

/*1536-864*/
@media(max-width:1536px){ 

}

/* 1440-990 */
@media(max-width:1440px){   
    .subscription-title h1  {
        font-size: 40px;
    }

    .subscription-about-title  {
        font-size: 34px;
    }

    .subscription-plan-price , .subscription-expires-date  {
        font-size: 26px;
    }
}

/*1366-768*/
@media (max-width:1366px){

}

/* 1280-800 */
@media (max-width:1280px){

}

/*1134x712*/
@media(max-width:1134px){
    .subscription-title h1  {
        font-size: 36px;
    }

    .subscription-about-title  {
        font-size: 30px;
    }

    .subscription-plan-price , .subscription-expires-date  {
        font-size: 24px;
    }
}

/*1024-768*/
@media (max-width:1024px){  
   
}


/* 962x601 */
@media(max-width: 962px){
    .subscription-wrapper  {
        padding: 50px 30px;
    }

    .subscription-title h1  {
        font-size: 34px;
    }

    .subscription-btn-wrapper  {
        padding: 6px 12px;
    }
    
    .subscription-btn-wrapper a  {
        font-size: 12px;
    }

    .subscription-about-title  {
        font-size: 28px;
    }

    .subscription-plan-price , .subscription-expires-date  {
        font-size: 22px;
    }

    .subscription-title p  {
        font-size: 16px;
    }

    .subscription-plan-type , .subscription-expires-title  {
        font-size: 16px;
    }

    .subscription-status  {
        font-size: 12px;
    }

}

/*834-1112*/
@media(max-width: 834px){   
    
}


/* 810x1080 */
@media(max-width: 810px){
    .subscription-wrapper  {
        padding: 40px 30px;
    }

    .subscription-title-wrapper  { 
        margin-bottom: 60px;
    }

    .subscription-title h1  {
        font-size: 32px;
    }
    
    .subscription-info-wrapper{
        gap: 50px 0;
    }

    .subscription-info  {
        width: 100%;
    }

}

/* 800x1280 */
@media(max-width: 800px){

}

/*778-304*/
@media(max-width: 778px){
    .subscription-title h1  {
        font-size: 30px;
    }

}


/* 768x1024 */
@media(max-width: 768px){
    .subscription-title-wrapper  { 
        align-items: flex-start;
    }

    .subscription-plan-type , .subscription-expires-title  {
        font-size: 18px;
    }

    .subscription-plan-price , .subscription-expires-date  {
        font-size: 26px;
    }

    .subscription-status  {
        font-size: 16px;
    }

    .subscription-btn-wrapper a  {
        font-size: 14px;
    }
}

/*712-1138*/
@media(max-width:712px){
    .subscription-title-wrapper , 
    .subscription-about-wrapper , 
    .subscription-info-wrapper  { 
        padding: 20px 16px; 
    }
}


/* 601x962 */
@media(max-width:601px){ 
    .subscription-title h1  {
        font-size: 28px;
    }
    
    .subscription-title p  {
        font-size: 14px;
    }
    
    /* .subscription-btn-wrapper a  {
        font-size: 12px;
    } */
}

/* 577-951 */
@media(max-width:577px){

}

/* 540-960 */
@media(max-width:540px){
    .subscription-title-wrapper  { 
        flex-direction: column;
    }

    .cancel-subscription{
        margin:0 auto; 
        margin-top: 30px;
    }

    .subscription-about-title  {
        font-size: 26px;
    }

    .subscription-status  {
        font-size: 14px;
    }
}

/*480-800*/
@media (max-width:480px) { 
    .change-subscription{
        text-align: center;
        width: 80%;
        margin: 0 auto;
        margin-top: 20px;
    }

    .change-subscription a{ 
        font-size: 16px;
    }

}

/*425-*/
@media(max-width:425px){
    .subscription-wrapper  {
        padding: 30px 20px;
    }

    .subscription-about-title-wrapper  { 
        margin-bottom: 15px;
    }

    .subscription-info  {
        padding: 20px 15px;
    }

    .subscription-status  { 
        top: 10px;
        right: 10px;
        font-size: 12px; 
    }

    .subscription-plan-type , .subscription-expires-title  {
        font-size: 16px;
    }

    .subscription-plan-price , .subscription-expires-date  {
        font-size: 24px;
    }
}

/*414-736 617   */
@media (max-width:414px) {
    .subscription-info-wrapper  {
        gap: 30px 0;
    }
}

/*390 x 844*/
@media(max-width:390px){
    .subscription-title h1  {
        font-size: 26px;
    }

    .subscription-plan-price , .subscription-expires-date  {
        font-size: 22px;
    }

    .cancel-subscription ,
    .change-subscription{
        width: 100%;
        text-align: center;
    }
}


/*384-640*/
@media(max-width:384px){
    .subscription-title-wrapper , .subscription-about-wrapper , .subscription-info-wrapper  {
        padding: 16px 14px;
    }
}

/*375*/
@media(max-width:375px){
    .subscription-wrapper  {
        padding: 20px 10px;
    }

    .subscription-title-wrapper  {
        margin-bottom: 40px;
    }
}


/*360x640*/
@media(max-width:360px){

}

/*320x568*/
@media(max-width:320px){ 
    .subscription-title h1  {
        font-size: 22px;
    }
    .subscription-about-title  {
        font-size: 22px;
    }
    .subscription-plan-price , .subscription-expires-date  {
        font-size: 18px;
    }
    .subscription-plan-type , .subscription-expires-title  {
        font-size: 12px;
    }
    .subscription-status  { 
        font-size: 10px;
    }
    .change-subscription a  {
        font-size: 14px;
    }
}
</style>