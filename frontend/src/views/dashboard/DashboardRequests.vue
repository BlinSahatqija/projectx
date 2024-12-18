<template>
<div class="dashborad-cards">
    <div class="dashboard-card-wrapper" v-for="request in requests" :key="request.id">
        <div class="dashboard-card">
            <p class="card-status">
                {{request.status}}
            </p>

            <h1 class="card-value">
                {{request.value}}
            </h1>

            <p class="card-description">
                {{request.info}}
            </p>
        </div>
    </div>
</div>
</template>

  
<script>
export default {
    data() {
        return {
            requests: [{
                    id: 'request1',
                    status: 'Requests sent',
                    value: 43,
                    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero'
                },
                {
                    id: 'request2',
                    status: 'Requests in progress ',
                    value: 43,
                    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero'
                },
                {
                    id: 'request3',
                    status: 'Requests completed ',
                    value: 0,
                    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero'
                },
                {
                    id: 'request4',
                    status: 'Time Saved',
                    value: 0,
                    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero'
                },
                {
                    id: 'request5',
                    status: 'Suppression list entries',
                    value: 0,
                    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero'
                }
            ]
        }
    }
};
</script>

  
<style scoped>
* {
    box-sizing: border-box;
    color: var(--text-color);
}

.dashborad-cards {
    display: flex;
    width: 100%;
    gap: 50px 0;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
}

.dashboard-card-wrapper {
    width: 31%;
    height: 250px;
    display: block;
    display: flex;
    align-items: flex-end;
}

.dashboard-card {
    width: 100%;
    height: 97%;
    padding: 25px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0 5px 10px rgba(30, 32, 37, .3);
    transition: 0.3s ease;
    overflow: auto;
}


[data-theme="dark"] .dashboard-card {
    background-color: #212529 !important;
}

[data-theme="dark"] .card-value{
    border-color: var(--primary-border-color);
}

.dashboard-card:hover {
    box-shadow: none;
}

.dashborad-cards>.dashboard-card-wrapper:nth-last-child(-n+2) {
    width: 48%;
}

.card-status {
    font-weight: 800;
    font-size: 16px;
    margin-bottom: 16px;
}

.card-value {
    font-weight: 800;
    font-size: 48px;
    padding-bottom: 16px;
    border-bottom: 1px solid;
}

.card-description {
    font-size: 14px;
    padding-top: 16px;
}


/*1640-1080*/
@media(min-width: 1640px) {
    .card-description {
        font-size: 16px;
    }
}

/*1680-1080*/
@media(min-width: 1680px) {}


/* 1920-1080 */
@media (min-width: 1920px) {
    .dashboard-card-wrapper {
        height: 300px;
    }
    .card-status { 
        font-size: 24px;
    }
    
    .card-value {
        font-size: 56px;
    }

    .card-description {
        font-size: 18px;
    }
}

/* 2304-1440 */
@media (min-width: 2304px) {
    .dashboard-card-wrapper {
        height: 350px;
    }
    .card-status { 
        font-size: 26px;
        margin-bottom: 22px;
    }
    
    .card-value {
        font-size: 60px;
        padding-bottom: 22px;
    }

    .card-description {
        font-size: 20px;
        padding-top: 22px;
    }
}

/*2560-1440*/
@media (min-width: 2560px) {
    .card-status {     
        font-size: 26px;
        margin-bottom: 22px;
    }
    
    .card-value {
        font-size: 64px;
        padding-bottom: 22px;
    }

    .card-description {
        font-size: 22px;
    }
}

/*2573-1206*/
@media(min-width: 2573px) {
}

/*3200-1800*/
@media(min-width: 3200px) {
    .dashboard-card-wrapper {
        height: 380px;
    }
    .card-status { 
        font-size: 34px;
        margin-bottom: 24px;
    }
    
    .card-value {
        font-size: 74px;
        padding-bottom: 24px;
    }

    .card-description {
        font-size: 24px;
        padding-top: 26px;
    }
}

/*3360-1890 1695*/
@media(min-width:3360px) {
    .dashboard-card-wrapper {
        height: 400px;
    }
    .card-status { 
        font-size: 40px;
        margin-bottom: 24px;
    }
    
    .card-value {
        font-size: 80px;
        padding-bottom: 24px;
    }

    .card-description {
        font-size: 26px;
        padding-top: 26px;
    }
}



/* 1600 - 757 */
@media (max-width: 1600px) {}

/*1536-864*/
@media(max-width:1536px) {}

/* 1440-990 */
@media(max-width:1440px) {
    .card-value { 
        font-size: 46px;
    }
}

/*1366-768*/
@media (max-width:1366px) {
    .card-value { 
        font-size: 44px;
    }

    .dashboard-card-wrapper {
        height: 270px;
    }
}

/* 1280-800 */
@media (max-width:1280px) {
    .dashborad-cards{
        padding: 40px;
    }
}

/*1134x712*/
@media(max-width:1134px) {
    .card-value {
        font-size: 40px;
        padding-bottom: 10px;
    }

    .card-status {
        margin-bottom: 10px;
    }
}

/*1024-768*/
@media (max-width:1024px) {}

/* 962x601 */
@media(max-width: 962px) {
}

/*834-1112*/
@media(max-width: 834px) {

    .dashborad-cards>.dashboard-card-wrapper:nth-last-child(-n+2) {
        width: initial;
    }

    .dashborad-cards { 
        gap: 20px 0;
    }

    .dashboard-card-wrapper {
        width: 48% !important;
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
@media(max-width:601px) {
    .dashborad-cards {
        padding: 30px;
    }
}

/* 577-951 */
@media(max-width:577px) {
    .dashboard-card {
        padding: 20px;
    }
}

/* 540-960 */
@media(max-width:540px) {
    .card-value {
        font-size: 36px;
    }

    .card-description {
        font-size: 12px;
    }

    .dashboard-card-wrapper {
        height: 250px;
    }
}

/*480-800*/
@media (max-width:480px) {
    .dashboard-card-wrapper {
        width: 75% !important;
        margin: 0 auto;
    }

    .dashborad-cards { 
        gap: 40px 0;
        padding: 40px 10px;
    } 
}

/*425-*/
@media(max-width:425px) {}

/*414-736 617   */
@media (max-width:414px) {
    .dashboard-card-wrapper {
        width: 85% !important;
    }
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
}

/*320x568*/
@media(max-width:320px) {
}
</style>
